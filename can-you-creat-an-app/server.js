const http = require("node:http");
const fs = require("node:fs/promises");
const path = require("node:path");
const crypto = require("node:crypto");

const root = __dirname;
const dataDir = path.join(root, "data");
const usersPath = path.join(dataDir, "users.json");
const ordersPath = path.join(dataDir, "orders.json");
loadEnvFile();
const port = Number(process.env.PORT || 8787);
const pendingOtps = new Map();

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
};

function loadEnvFile() {
  try {
    const envPath = path.join(root, ".env");
    const contents = require("node:fs").readFileSync(envPath, "utf8");
    contents
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("#"))
      .forEach((line) => {
        const equalsIndex = line.indexOf("=");
        if (equalsIndex === -1) return;
        const key = line.slice(0, equalsIndex).trim();
        const value = line.slice(equalsIndex + 1).trim().replace(/^["']|["']$/g, "");
        if (key && !process.env[key]) process.env[key] = value;
      });
  } catch {
    // .env is optional. Real OTP needs WhatsApp Cloud API or Twilio values.
  }
}

function normalisePhone(phone = "") {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("27")) return `0${digits.slice(2)}`;
  return digits.startsWith("0") ? digits : `0${digits}`;
}

function toE164(phone = "") {
  const local = normalisePhone(phone);
  return `27${local.replace(/^0/, "")}`;
}

async function ensureDataFile(filePath) {
  await fs.mkdir(dataDir, { recursive: true });
  try {
    await fs.access(filePath);
  } catch {
    await fs.writeFile(filePath, "[]");
  }
}

async function readJson(filePath) {
  await ensureDataFile(filePath);
  return JSON.parse(await fs.readFile(filePath, "utf8"));
}

async function writeJson(filePath, data) {
  await fs.mkdir(dataDir, { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

async function readBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  if (!chunks.length) return {};
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

function json(res, status, body) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  res.end(JSON.stringify(body));
}

function generateOtp() {
  return String(crypto.randomInt(100000, 1000000));
}

async function sendWhatsAppOtp(phone, otp) {
  const token = process.env.WHATSAPP_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  if (!token || !phoneNumberId) return false;

  const response = await fetch(`https://graph.facebook.com/v20.0/${phoneNumberId}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to: toE164(phone),
      type: "text",
      text: { body: `Your ManjeManje OTP is ${otp}. It expires in 5 minutes.` },
    }),
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }
  return true;
}

async function sendTwilioOtp(phone, otp) {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_FROM_NUMBER;
  if (!sid || !token || !from) return false;

  const auth = Buffer.from(`${sid}:${token}`).toString("base64");
  const body = new URLSearchParams({
    From: from,
    To: `+${toE164(phone)}`,
    Body: `Your ManjeManje OTP is ${otp}. It expires in 5 minutes.`,
  });
  const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }
  return true;
}

async function sendOtp(phone, otp) {
  if (await sendWhatsAppOtp(phone, otp)) return "whatsapp";
  if (await sendTwilioOtp(phone, otp)) return "sms";
  return null;
}

async function handleApi(req, res, pathname) {
  if (req.method === "OPTIONS") return json(res, 204, {});

  if (pathname === "/api/customers" && req.method === "GET") {
    const users = await readJson(usersPath);
    return json(res, 200, { users: users.map(({ password, ...user }) => user) });
  }

  if (pathname === "/api/orders" && req.method === "GET") {
    return json(res, 200, { orders: await readJson(ordersPath) });
  }

  if (pathname === "/api/signup/start" && req.method === "POST") {
    const body = await readBody(req);
    const users = await readJson(usersPath);
    const phone = normalisePhone(body.phone);
    if (users.some((user) => user.phone === phone)) {
      return json(res, 409, { error: "This number already has an account. Use Sign in." });
    }

    const otp = generateOtp();
    pendingOtps.set(phone, {
      otp,
      expiresAt: Date.now() + 5 * 60 * 1000,
      user: {
        id: `USER-${Date.now().toString().slice(-6)}`,
        name: body.name || "",
        phone,
        password: body.password || "",
        address: body.address || "",
        gps: "",
        createdAt: new Date().toISOString(),
      },
    });

    const channel = await sendOtp(phone, otp);
    if (!channel) {
      pendingOtps.delete(phone);
      return json(res, 503, {
        error:
          "OTP sending is not configured yet. Add WhatsApp Cloud API or Twilio environment variables, then restart the server.",
      });
    }

    return json(res, 200, { ok: true, phone, channel, expiresInSeconds: 300 });
  }

  if (pathname === "/api/signup/verify" && req.method === "POST") {
    const body = await readBody(req);
    const phone = normalisePhone(body.phone);
    const pending = pendingOtps.get(phone);
    if (!pending) return json(res, 404, { error: "No active OTP for this number. Sign up again." });
    if (Date.now() > pending.expiresAt) {
      pendingOtps.delete(phone);
      return json(res, 410, { error: "OTP expired. Sign up again to request a new OTP." });
    }
    if (String(body.otp || "").trim() !== pending.otp) {
      return json(res, 401, { error: "Incorrect OTP. Please try again." });
    }

    const users = await readJson(usersPath);
    if (users.some((user) => user.phone === phone)) {
      pendingOtps.delete(phone);
      return json(res, 409, { error: "This number already has an account. Use Sign in." });
    }

    users.push(pending.user);
    await writeJson(usersPath, users);
    pendingOtps.delete(phone);
    const { password, ...safeUser } = pending.user;
    return json(res, 200, { user: safeUser });
  }

  if (pathname === "/api/signin" && req.method === "POST") {
    const body = await readBody(req);
    const phone = normalisePhone(body.phone);
    const users = await readJson(usersPath);
    const user = users.find((savedUser) => savedUser.phone === phone);
    if (!user) return json(res, 404, { error: "No verified account found. Sign up first." });
    if (user.password !== body.password) return json(res, 401, { error: "Incorrect password." });
    const { password, ...safeUser } = user;
    return json(res, 200, { user: safeUser });
  }

  if (pathname === "/api/customers/update" && req.method === "POST") {
    const body = await readBody(req);
    const phone = normalisePhone(body.phone);
    const users = await readJson(usersPath);
    const index = users.findIndex((user) => user.phone === phone);
    if (index === -1) return json(res, 404, { error: "Customer not found." });
    users[index] = { ...users[index], ...body, phone };
    await writeJson(usersPath, users);
    const { password, ...safeUser } = users[index];
    return json(res, 200, { user: safeUser });
  }

  return json(res, 404, { error: "API endpoint not found." });
}

async function serveStatic(req, res, pathname) {
  const requested = pathname === "/" ? "/index.html" : pathname;
  const safePath = path.normalize(requested).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(root, safePath);
  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    return res.end("Forbidden");
  }

  try {
    const content = await fs.readFile(filePath);
    res.writeHead(200, { "Content-Type": mimeTypes[path.extname(filePath)] || "application/octet-stream" });
    res.end(content);
  } catch {
    res.writeHead(404);
    res.end("Not found");
  }
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    if (url.pathname.startsWith("/api/")) return await handleApi(req, res, url.pathname);
    return await serveStatic(req, res, decodeURIComponent(url.pathname));
  } catch (error) {
    return json(res, 500, { error: error.message });
  }
});

server.listen(port, () => {
  console.log(`ManjeManje running at http://127.0.0.1:${port}`);
});
