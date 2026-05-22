const vendors = [
  {
    id: "wesselton-kitchen",
    name: "Wesselton Kitchen",
    category: "Food",
    rating: 4.8,
    time: 25,
    fee: 18,
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=900&q=80",
    tags: ["Kota", "Plates", "Township food"],
    menu: [
      { id: "wk-1", name: "Loaded Kota", price: 58, desc: "Chips, egg, cheese, russian and sauce" },
      { id: "wk-2", name: "Pap and Beef Stew", price: 82, desc: "Hearty plate with chakalaka" },
      { id: "wk-3", name: "Quarter Chicken Plate", price: 76, desc: "Chicken, pap, salad and gravy" },
    ],
  },
  {
    id: "ermelo-braai-stop",
    name: "Ermelo Braai Stop",
    category: "Food",
    rating: 4.7,
    time: 30,
    fee: 22,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80",
    tags: ["Braai", "Wings", "Family meals"],
    menu: [
      { id: "eb-1", name: "Braai Combo", price: 129, desc: "Wors, chop, pap and relish" },
      { id: "eb-2", name: "Flame Wings", price: 89, desc: "Eight wings with chips" },
      { id: "eb-3", name: "Family Braai Pack", price: 249, desc: "Meat, pap and sides for four" },
    ],
  },
  {
    id: "cbd-grocery-run",
    name: "CBD Grocery Run",
    category: "Groceries",
    rating: 4.6,
    time: 35,
    fee: 24,
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80",
    tags: ["Bread", "Milk", "Essentials"],
    menu: [
      { id: "cg-1", name: "Basics Basket", price: 118, desc: "Bread, milk, eggs and sugar" },
      { id: "cg-2", name: "Pap Combo", price: 146, desc: "Maize meal, wors and tomato relish" },
      { id: "cg-3", name: "Airtime and Electricity", price: 50, desc: "Add a voucher amount to your order" },
    ],
  },
  {
    id: "cassim-pharmacy",
    name: "Cassim Park Pharmacy Runner",
    category: "Pharmacy",
    rating: 4.9,
    time: 28,
    fee: 20,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=900&q=80",
    tags: ["Medicine", "Baby care", "Wellness"],
    menu: [
      { id: "cp-1", name: "Cold and Flu Pack", price: 96, desc: "Common relief essentials" },
      { id: "cp-2", name: "Baby Emergency Pack", price: 135, desc: "Wipes, nappies and bum cream" },
      { id: "cp-3", name: "Prescription Pickup", price: 45, desc: "Runner fee for pharmacy collection" },
    ],
  },
  {
    id: "manje-parcels",
    name: "Manje Parcel Runners",
    category: "Parcels",
    rating: 4.7,
    time: 20,
    fee: 16,
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=900&q=80",
    tags: ["Documents", "Small parcels", "Same day"],
    menu: [
      { id: "mp-1", name: "Document Drop", price: 35, desc: "CBD to nearby Ermelo areas" },
      { id: "mp-2", name: "Small Parcel", price: 55, desc: "Shoebox size or smaller" },
      { id: "mp-3", name: "Collect and Deliver", price: 75, desc: "Runner collects from a shop or home" },
    ],
  },
  {
    id: "ermelo-rides",
    name: "Ermelo Ride Request",
    category: "Taxi",
    rating: 4.5,
    time: 12,
    fee: 0,
    image: "https://images.unsplash.com/photo-1511407397940-d57f68e81203?auto=format&fit=crop&w=900&q=80",
    tags: ["Taxi", "Lift club", "Local rides"],
    menu: [
      { id: "er-1", name: "CBD Short Ride", price: 35, desc: "Short local ride request" },
      { id: "er-2", name: "Wesselton Ride", price: 55, desc: "CBD to Wesselton estimate" },
      { id: "er-3", name: "Scheduled Pickup", price: 70, desc: "Book a pickup time" },
    ],
  },
  {
    id: "ext32-spaza",
    name: "Ext 32 Spaza Express",
    category: "Groceries",
    rating: 4.4,
    time: 24,
    fee: 15,
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=900&q=80",
    tags: ["Snacks", "Cold drinks", "Household"],
    menu: [
      { id: "es-1", name: "Snack Pack", price: 64, desc: "Chips, chocolate and cooldrink" },
      { id: "es-2", name: "Weekend Drinks", price: 98, desc: "Cold drinks and ice" },
      { id: "es-3", name: "Cleaning Basics", price: 86, desc: "Soap, dish liquid and refuse bags" },
    ],
  },
  {
    id: "late-night-chow",
    name: "Late Night Chow Ermelo",
    category: "Food",
    rating: 4.6,
    time: 22,
    fee: 20,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80",
    tags: ["Pizza", "Burgers", "After hours"],
    menu: [
      { id: "ln-1", name: "Street Burger", price: 72, desc: "Beef burger with chips" },
      { id: "ln-2", name: "Chicken Pizza", price: 118, desc: "Chicken, peppers and mayo drizzle" },
      { id: "ln-3", name: "Midnight Combo", price: 149, desc: "Burger, wings and drink" },
    ],
  },
];

const areas = ["Ermelo CBD", "Wesselton", "Cassim Park", "Ext 32", "Nyibe", "AJ Swanepoel"];
const ownerWhatsAppNumber = "27798635027";
const apiBase = location.protocol === "file:" ? "http://127.0.0.1:8787" : "";
const otpRequired = false;
const staffPin = "2468";
const ordersKey = "manjemanje-orders";
const usersKey = "manjemanje-users";
const sessionKey = "manjemanje-session";
const accountResetKey = "manjemanje-account-reset-2026-05-22";

function readStorage(key, fallback = null) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : value;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // The app still works for the current page session if storage is blocked.
  }
}

function removeStorage(key) {
  try {
    localStorage.removeItem(key);
  } catch {
    // Ignore blocked local storage.
  }
}

if (!readStorage(accountResetKey)) {
  removeStorage(usersKey);
  removeStorage(sessionKey);
  writeStorage(accountResetKey, "done");
}

const state = {
  category: "All",
  search: "",
  sort: "recommended",
  cart: new Map(),
  activeVendorId: null,
  orders: loadOrders(),
  users: loadUsers(),
  currentUser: loadSession(),
  pendingSignup: null,
};

const categoryTabs = document.querySelector("#categoryTabs");
const restaurantGrid = document.querySelector("#restaurantGrid");
const searchInput = document.querySelector("#searchInput");
const sortSelect = document.querySelector("#sortSelect");
const cartItems = document.querySelector("#cartItems");
const selectedRestaurant = document.querySelector("#selectedRestaurant");
const checkoutButton = document.querySelector("#checkoutButton");
const checkoutForm = document.querySelector("#checkoutForm");
const orderStatus = document.querySelector("#orderStatus");
const tipSelect = document.querySelector("#tipSelect");
const whatsappLink = document.querySelector("#whatsappLink");
const adminPanel = document.querySelector("#adminPanel");
const ordersList = document.querySelector("#ordersList");
const customersList = document.querySelector("#customersList");
const adminSummary = document.querySelector("#adminSummary");
const helloLink = document.querySelector("#helloLink");
const addressInput = document.querySelector("#addressInput");
const gpsInput = document.querySelector("#gpsInput");
const gpsStatus = document.querySelector("#gpsStatus");
const mapSearchLink = document.querySelector("#mapSearchLink");
const useGpsButton = document.querySelector("#useGpsButton");
const accountToggle = document.querySelector("#accountToggle");
const accountPanel = document.querySelector("#accountPanel");
const accountForm = document.querySelector("#accountForm");
const accountTitle = document.querySelector("#accountTitle");
const accountSubtitle = document.querySelector("#accountSubtitle");
const accountStatus = document.querySelector("#accountStatus");
const signupButton = document.querySelector("#signupButton");
const signinButton = document.querySelector("#signinButton");
const logoutButton = document.querySelector("#logoutButton");
const accountAddressPanel = document.querySelector("#accountAddressPanel");
const accountAddressInput = document.querySelector("#accountAddressInput");
const accountGpsInput = document.querySelector("#accountGpsInput");
const accountGpsButton = document.querySelector("#accountGpsButton");
const accountMapSearchLink = document.querySelector("#accountMapSearchLink");
const accountMapFrame = document.querySelector("#accountMapFrame");
const accountNavigateLink = document.querySelector("#accountNavigateLink");
const saveAddressButton = document.querySelector("#saveAddressButton");
const addressStatus = document.querySelector("#addressStatus");
const accountAddressSuggestions = document.querySelector("#accountAddressSuggestions");
const checkoutAddressSuggestions = document.querySelector("#checkoutAddressSuggestions");
const otpPanel = document.querySelector("#otpPanel");
const otpInput = document.querySelector("#otpInput");
const otpHelp = document.querySelector("#otpHelp");
const otpStatus = document.querySelector("#otpStatus");
const verifyOtpButton = document.querySelector("#verifyOtpButton");
const resendOtpButton = document.querySelector("#resendOtpButton");

const money = (value) => `R${Math.round(value)}`;

function loadOrders() {
  try {
    return JSON.parse(readStorage(ordersKey, "[]")) || [];
  } catch {
    return [];
  }
}

function saveOrders() {
  writeStorage(ordersKey, JSON.stringify(state.orders));
}

function loadUsers() {
  try {
    return JSON.parse(readStorage(usersKey, "[]")) || [];
  } catch {
    return [];
  }
}

function saveUsers() {
  writeStorage(usersKey, JSON.stringify(state.users));
}

function loadSession() {
  try {
    const phone = readStorage(sessionKey);
    const users = JSON.parse(readStorage(usersKey, "[]")) || [];
    return users.find((user) => user.phone === phone) || null;
  } catch {
    return null;
  }
}

function saveSession(user) {
  if (user) {
    writeStorage(sessionKey, user.phone);
  } else {
    removeStorage(sessionKey);
  }
}

function normalisePhone(phone) {
  return phone.replace(/\s+/g, "").replace(/^(\+27|27)/, "0");
}

async function apiRequest(path, body) {
  const response = await fetch(`${apiBase}${path}`, {
    method: body ? "POST" : "GET",
    headers: body ? { "Content-Type": "application/json" } : undefined,
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "Request failed.");
  return data;
}

function submitNetlifyForm(formName, fields) {
  const payload = new URLSearchParams({ "form-name": formName, ...fields });
  return fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: payload.toString(),
  }).catch(() => {
    // Local file testing cannot submit Netlify Forms. Hosted Netlify builds will.
  });
}

function showSignupOtp(phone, channel) {
  state.pendingSignup = { phone };
  otpInput.value = "";
  otpPanel.classList.remove("hidden");
  otpHelp.textContent = `A one-time PIN was sent by ${channel === "sms" ? "SMS" : "WhatsApp"} to ${phone}.`;
  otpStatus.textContent = "Enter the OTP to finish creating your account.";
  otpPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  otpInput.focus();
}

function whatsAppUrl(message) {
  return `https://wa.me/${ownerWhatsAppNumber}?text=${encodeURIComponent(message)}`;
}

function mapsSearchUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query || "Ermelo Mpumalanga")}`;
}

function mapsEmbedUrl(query) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query || "Ermelo Mpumalanga")}&output=embed`;
}

function mapsDirectionsUrl(destination) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
}

function deliveryMapTarget(order) {
  return order.gps || order.address;
}

function categories() {
  return ["All", ...new Set(vendors.map((vendor) => vendor.category))];
}

function renderCategories() {
  categoryTabs.innerHTML = "";
  categories().forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = category;
    button.className = category === state.category ? "active" : "";
    button.addEventListener("click", () => {
      state.category = category;
      render();
    });
    categoryTabs.append(button);
  });
}

function filteredVendors() {
  const query = state.search.trim().toLowerCase();
  const filtered = vendors.filter((vendor) => {
    const categoryMatch = state.category === "All" || vendor.category === state.category;
    const text = `${vendor.name} ${vendor.category} ${vendor.tags.join(" ")} ${vendor.menu
      .map((item) => item.name)
      .join(" ")}`.toLowerCase();
    return categoryMatch && text.includes(query);
  });

  return filtered.sort((a, b) => {
    if (state.sort === "rating") return b.rating - a.rating;
    if (state.sort === "fastest") return a.time - b.time;
    return b.rating - a.rating || a.time - b.time;
  });
}

function renderVendors() {
  restaurantGrid.innerHTML = "";
  const template = document.querySelector("#restaurantTemplate");

  filteredVendors().forEach((vendor) => {
    const node = template.content.firstElementChild.cloneNode(true);
    node.querySelector(".restaurant-image").style.backgroundImage = `url("${vendor.image}")`;
    node.querySelector("h3").textContent = vendor.name;
    node.querySelector(".rating").textContent = vendor.rating.toFixed(1);
    node.querySelector(".meta").textContent = `${vendor.time}-${vendor.time + 10} min - ${money(
      vendor.fee,
    )} delivery`;

    const badge = document.createElement("span");
    badge.className = "service-badge";
    badge.textContent = `${vendor.category} app`;
    node.querySelector(".restaurant-title-row").before(badge);

    const tags = node.querySelector(".tag-row");
    vendor.tags.forEach((tag) => {
      const pill = document.createElement("span");
      pill.textContent = tag;
      tags.append(pill);
    });

    const menuList = node.querySelector(".menu-list");
    vendor.menu.forEach((item) => {
      const row = document.createElement("div");
      row.className = "menu-item";
      row.innerHTML = `
        <div>
          <strong>${item.name}</strong>
          <span>${item.desc} - ${money(item.price)}</span>
        </div>
      `;
      const button = document.createElement("button");
      button.className = "add-button";
      button.type = "button";
      button.textContent = "Add";
      button.addEventListener("click", () => addToCart(vendor, item));
      row.append(button);
      menuList.append(row);
    });

    restaurantGrid.append(node);
  });
}

function addToCart(vendor, item) {
  if (state.activeVendorId && state.activeVendorId !== vendor.id) {
    state.cart.clear();
  }
  state.activeVendorId = vendor.id;
  const current = state.cart.get(item.id) || { ...item, qty: 0, vendorId: vendor.id };
  current.qty += 1;
  state.cart.set(item.id, current);
  orderStatus.textContent = "";
  whatsappLink.classList.add("hidden");
  renderCart();
}

function updateQty(id, delta) {
  const item = state.cart.get(id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) state.cart.delete(id);
  if (state.cart.size === 0) state.activeVendorId = null;
  renderCart();
}

function cartVendor() {
  return vendors.find((vendor) => vendor.id === state.activeVendorId);
}

function totals() {
  const subtotal = [...state.cart.values()].reduce((sum, item) => sum + item.price * item.qty, 0);
  const vendor = cartVendor();
  const delivery = subtotal ? vendor?.fee || 0 : 0;
  const service = subtotal ? Math.max(6, subtotal * 0.06) : 0;
  const tip = Number(tipSelect.value || 0);
  return { subtotal, delivery, service, tip, total: subtotal + delivery + service + tip };
}

function renderCart() {
  const vendor = cartVendor();
  selectedRestaurant.textContent = vendor ? vendor.name : "Choose a local order";
  cartItems.innerHTML = "";

  if (!state.cart.size) {
    cartItems.innerHTML = '<p class="empty-cart">Add a local order to begin.</p>';
  } else {
    [...state.cart.values()].forEach((item) => {
      const line = document.createElement("div");
      line.className = "cart-line";
      line.innerHTML = `
        <div>
          <p><strong>${item.name}</strong></p>
          <small>${money(item.price * item.qty)}</small>
        </div>
      `;
      const controls = document.createElement("div");
      controls.className = "qty-controls";
      controls.innerHTML = `<button class="qty-button" type="button" aria-label="Remove one">-</button><span>${item.qty}</span><button class="qty-button" type="button" aria-label="Add one">+</button>`;
      controls.children[0].addEventListener("click", () => updateQty(item.id, -1));
      controls.children[2].addEventListener("click", () => updateQty(item.id, 1));
      line.append(controls);
      cartItems.append(line);
    });
  }

  const summary = totals();
  document.querySelector("#subtotal").textContent = money(summary.subtotal);
  document.querySelector("#deliveryFee").textContent = money(summary.delivery);
  document.querySelector("#serviceFee").textContent = money(summary.service);
  document.querySelector("#tipAmount").textContent = money(summary.tip);
  document.querySelector("#total").textContent = money(summary.total);
  checkoutButton.disabled = !state.cart.size;
}

function fillCheckoutFromUser(user) {
  if (!user) return;
  const address = visibleDeliveryAddress(user.address, user.gps);
  checkoutForm.elements.customerName.value = user.name || "";
  checkoutForm.elements.phone.value = user.phone || "";
  checkoutForm.elements.address.value = address;
  gpsInput.value = user.gps || "";
  document.querySelector("#deliveryArea").textContent = `Delivering to ${shortAddress(address || "Ermelo CBD")}`;
  addressInput.dispatchEvent(new Event("input"));
}

function shortAddress(value) {
  return value.length > 34 ? `${value.slice(0, 31)}...` : value;
}

function visibleDeliveryAddress(address, gps = "") {
  const value = (address || "").trim();
  if (/^(my gps location|gps location near ermelo):\s*-?\d/i.test(value)) {
    return fallbackPinnedAddress();
  }
  if (!value && gps) {
    return fallbackPinnedAddress();
  }
  return value;
}

async function fetchJsonWithTimeout(url, timeout = 4500) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(url, {
      headers: { Accept: "application/json" },
      signal: controller.signal,
    });
    if (!response.ok) return null;
    return response.json();
  } catch (error) {
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
}

function addressFromPhotonFeature(feature) {
  const props = feature?.properties || {};
  const pieces = [
    props.housenumber && props.street ? `${props.housenumber} ${props.street}` : props.street || props.name,
    props.district,
    props.city,
    props.county,
    props.state,
    props.postcode,
    props.country,
  ].filter(Boolean);
  return [...new Set(pieces)].join(", ");
}

function addressFromBigDataCloud(data) {
  const pieces = [
    data.road,
    data.locality || data.city,
    data.principalSubdivision,
    data.postcode,
    data.countryName,
  ].filter(Boolean);
  return [...new Set(pieces)].join(", ");
}

async function reverseGeocode(latitude, longitude) {
  const photonParams = new URLSearchParams({
    lat: latitude,
    lon: longitude,
    lang: "en",
  });
  const bigDataParams = new URLSearchParams({
    latitude,
    longitude,
    localityLanguage: "en",
  });

  const [photonData, bigDataCloudData] = await Promise.all([
    fetchJsonWithTimeout(`https://photon.komoot.io/reverse?${photonParams.toString()}`),
    fetchJsonWithTimeout(`https://api.bigdatacloud.net/data/reverse-geocode-client?${bigDataParams.toString()}`),
  ]);

  const photonAddress = addressFromPhotonFeature(photonData?.features?.[0]);
  const bigDataAddress = addressFromBigDataCloud(bigDataCloudData || {});
  return photonAddress || bigDataAddress || "";
}

function fallbackPinnedAddress() {
  return "Pinned location near Ermelo, Mpumalanga";
}

async function searchAddresses(query) {
  const trimmed = query.trim();
  if (trimmed.length < 2) return [];

  const searchText = /ermelo|mpumalanga/i.test(trimmed) ? trimmed : `${trimmed}, Ermelo, Mpumalanga`;
  const fastResults = await searchFastAddresses(searchText);
  if (fastResults.length) {
    return fastResults;
  }

  const params = new URLSearchParams({
    format: "jsonv2",
    q: searchText,
    countrycodes: "za",
    addressdetails: "1",
    limit: "6",
  });
  const response = await fetch(`https://nominatim.openstreetmap.org/search?${params.toString()}`, {
    headers: { Accept: "application/json" },
  });
  if (!response.ok) return [];
  return response.json();
}

async function searchFastAddresses(searchText) {
  const params = new URLSearchParams({
    q: searchText,
    lat: "-26.5333",
    lon: "29.9833",
    limit: "7",
    lang: "en",
  });
  const response = await fetch(`https://photon.komoot.io/api/?${params.toString()}`, {
    headers: { Accept: "application/json" },
  });
  if (!response.ok) return [];
  const data = await response.json();
  return (data.features || [])
    .filter((feature) => feature.geometry?.coordinates?.length >= 2)
    .map((feature) => {
      const [lon, lat] = feature.geometry.coordinates;
      const props = feature.properties || {};
      const pieces = [
        props.name,
        props.street,
        props.district,
        props.city,
        props.county,
        props.state,
        props.postcode,
        props.country,
      ].filter(Boolean);
      return {
        display_name: [...new Set(pieces)].join(", "),
        lat,
        lon,
      };
    })
    .filter((place) => place.display_name);
}

function hideAddressSuggestions(list) {
  list.classList.add("hidden");
  list.innerHTML = "";
}

function typedStreetNumber(value) {
  return value.trim().match(/^\d+[a-zA-Z]?/)?.[0] || "";
}

function keepTypedStreetNumber(typedValue, selectedAddress) {
  const number = typedStreetNumber(typedValue);
  if (!number || selectedAddress.trim().startsWith(number)) {
    return selectedAddress;
  }
  return `${number} ${selectedAddress}`;
}

function renderAddressSuggestions(input, list, results, onSelect) {
  list.innerHTML = "";
  const typedAddress = input.value.trim();
  if (!results.length && typedAddress.length < 2) {
    hideAddressSuggestions(list);
    return;
  }

  if (typedAddress.length >= 2) {
    const typedButton = document.createElement("button");
    typedButton.type = "button";
    typedButton.setAttribute("role", "option");
    typedButton.innerHTML = `<span>Use exactly: ${typedAddress}</span><small>Keep the street number you typed</small>`;
    typedButton.addEventListener("click", () => {
      onSelect(typedAddress, "");
      hideAddressSuggestions(list);
    });
    list.appendChild(typedButton);
  }

  results.forEach((place) => {
    const button = document.createElement("button");
    const address = keepTypedStreetNumber(typedAddress, place.display_name);
    button.type = "button";
    button.setAttribute("role", "option");
    button.innerHTML = `<span>${address}</span><small>${Number(place.lat).toFixed(5)}, ${Number(place.lon).toFixed(5)}</small>`;
    button.addEventListener("click", () => {
      onSelect(address, `${Number(place.lat).toFixed(6)},${Number(place.lon).toFixed(6)}`);
      hideAddressSuggestions(list);
    });
    list.appendChild(button);
  });

  if (list.children.length) {
    list.classList.remove("hidden");
  }
}

function renderAddressSearchLoading(input, list, onSelect) {
  renderAddressSuggestions(input, list, [], onSelect);
  const searching = document.createElement("button");
  searching.type = "button";
  searching.disabled = true;
  searching.innerHTML = "<span>Searching nearby addresses...</span><small>Ermelo and surrounding areas</small>";
  list.appendChild(searching);
  list.classList.remove("hidden");
}

function setupAddressAutocomplete(input, list, onSelect, onTyping) {
  let timer;
  let lastRequest = 0;
  input.addEventListener("input", () => {
    onTyping?.();
    clearTimeout(timer);
    const requestId = Date.now();
    lastRequest = requestId;
    if (input.value.trim().length >= 2) {
      renderAddressSearchLoading(input, list, onSelect);
    } else {
      hideAddressSuggestions(list);
    }
    timer = setTimeout(async () => {
      const results = await searchAddresses(input.value).catch(() => []);
      if (lastRequest !== requestId) return;
      renderAddressSuggestions(input, list, results, onSelect);
    }, 150);
  });

  input.addEventListener("blur", () => {
    setTimeout(() => hideAddressSuggestions(list), 180);
  });
}

function updateAccountMap(query) {
  const target = query || "Ermelo Mpumalanga";
  accountMapSearchLink.href = mapsSearchUrl(target);
  accountNavigateLink.href = mapsDirectionsUrl(target);
  accountMapFrame.src = mapsEmbedUrl(target);
}

function updateCheckoutMapSearch() {
  const area = document.querySelector("#deliveryArea").textContent.replace("Delivering to ", "");
  mapSearchLink.href = mapsSearchUrl(`${addressInput.value} ${area} Ermelo Mpumalanga`);
}

function renderAccount() {
  const user = state.currentUser;
  if (user) {
    accountToggle.textContent = user.name ? `Hi, ${user.name.split(" ")[0]}` : "My account";
    accountTitle.textContent = "You are logged in";
    accountSubtitle.textContent = "Your details are saved for faster checkout on this device.";
    accountForm.elements.name.value = user.name || "";
    accountForm.elements.phone.value = user.phone || "";
    const address = visibleDeliveryAddress(user.address, user.gps);
    accountForm.elements.address.value = address;
    accountForm.elements.password.value = "";
    accountAddressInput.value = address;
    accountGpsInput.value = user.gps || "";
    updateAccountMap(user.gps || address || "Ermelo Mpumalanga");
    accountAddressPanel.classList.remove("hidden");
    logoutButton.classList.remove("hidden");
    fillCheckoutFromUser(user);
  } else {
    accountToggle.textContent = "Account";
    accountTitle.textContent = "Create your ManjeManje account";
    accountSubtitle.textContent = "Sign up first, then use your WhatsApp number and password to sign in later.";
    accountAddressPanel.classList.add("hidden");
    if (!state.pendingSignup) {
      otpPanel.classList.add("hidden");
    }
    logoutButton.classList.add("hidden");
  }
}

function orderMessage(order) {
  const items = order.items.map((item) => `- ${item.qty} x ${item.name} (${money(item.price * item.qty)})`).join("\n");
  return [
    `ManjeManje order ${order.id}`,
    `Vendor: ${order.vendorName}`,
    `Customer: ${order.customerName}`,
    `Phone: ${order.phone}`,
    `Address: ${order.address}`,
    `GPS/Maps: ${mapsDirectionsUrl(deliveryMapTarget(order))}`,
    `Note: ${order.note || "None"}`,
    `Payment: ${order.payment}`,
    `Items:`,
    items,
    `Total: ${money(order.total)}`,
  ].join("\n");
}

function createOrder(formData) {
  const vendor = cartVendor();
  const summary = totals();
  return {
    id: `MMI-${Date.now().toString().slice(-6)}`,
    createdAt: new Date().toISOString(),
    status: "New",
    vendorId: vendor.id,
    vendorName: vendor.name,
    customerName: formData.get("customerName").trim(),
    phone: formData.get("phone").trim(),
    address: formData.get("address").trim(),
    gps: formData.get("gps").trim(),
    note: formData.get("note").trim(),
    payment: formData.get("payment"),
    items: [...state.cart.values()].map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      qty: item.qty,
    })),
    subtotal: summary.subtotal,
    delivery: summary.delivery,
    service: summary.service,
    tip: summary.tip,
    total: summary.total,
    eta: `${vendor.time}-${vendor.time + 10} min`,
  };
}

function statusClass(status) {
  return `status-${status.toLowerCase().replaceAll(" ", "-")}`;
}

function renderOrders() {
  const openOrders = state.orders.filter((order) => order.status !== "Done");
  const doneOrders = state.orders.filter((order) => order.status === "Done");
  const revenue = state.orders.reduce((sum, order) => sum + order.total, 0);

  adminSummary.innerHTML = `
    <div class="summary-card"><span>Open</span><strong>${openOrders.length}</strong></div>
    <div class="summary-card"><span>Completed</span><strong>${doneOrders.length}</strong></div>
    <div class="summary-card"><span>Total value</span><strong>${money(revenue)}</strong></div>
    <div class="summary-card"><span>Customers</span><strong>${state.users.length}</strong></div>
  `;

  renderCustomers();

  ordersList.innerHTML = "";
  if (!state.orders.length) {
    ordersList.innerHTML = '<p class="empty-cart">No orders yet. Place a test order or add a demo order.</p>';
    return;
  }

  state.orders
    .slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .forEach((order) => {
      const card = document.createElement("article");
      card.className = "order-card";
      const items = order.items.map((item) => `<li>${item.qty} x ${item.name} - ${money(item.price * item.qty)}</li>`).join("");
      card.innerHTML = `
        <div class="order-topline">
          <h3>${order.id} - ${order.vendorName}</h3>
          <span class="status-pill ${statusClass(order.status)}">${order.status}</span>
        </div>
        <p><strong>${order.customerName}</strong> - ${order.phone}</p>
        <p>${order.address}${order.note ? ` - ${order.note}` : ""}</p>
        <ul class="order-items">${items}</ul>
        <div class="order-meta">
          <span>${order.payment}</span>
          <strong>${money(order.total)}</strong>
          <span>${order.eta}</span>
        </div>
      `;

      const actions = document.createElement("div");
      actions.className = "order-actions";
      ["Accepted", "On the way", "Done"].forEach((status) => {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = status;
        button.addEventListener("click", () => updateOrderStatus(order.id, status));
        actions.append(button);
      });

      const whatsApp = document.createElement("a");
      whatsApp.className = "whatsapp-link";
      whatsApp.target = "_blank";
      whatsApp.rel = "noreferrer";
      whatsApp.href = whatsAppUrl(orderMessage(order));
      whatsApp.textContent = "WhatsApp";
      actions.append(whatsApp);

      const maps = document.createElement("a");
      maps.className = "map-link";
      maps.target = "_blank";
      maps.rel = "noreferrer";
      maps.href = mapsDirectionsUrl(deliveryMapTarget(order));
      maps.textContent = "Navigate";
      actions.append(maps);
      card.append(actions);
      ordersList.append(card);
    });
}

function customerMapTarget(user) {
  return user.gps || user.address || "Ermelo Mpumalanga";
}

function renderCustomers() {
  customersList.innerHTML = "";
  if (!state.users.length) {
    customersList.innerHTML = '<p class="empty-cart">No customers have signed up on this device yet.</p>';
    return;
  }

  state.users
    .slice()
    .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0))
    .forEach((user) => {
      const customerOrders = state.orders.filter((order) => normalisePhone(order.phone) === user.phone);
      const card = document.createElement("article");
      card.className = "customer-card";
      const created = user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "Saved customer";
      card.innerHTML = `
        <div class="customer-topline">
          <h4>${user.name || "Unnamed customer"}</h4>
          <span class="status-pill">${customerOrders.length} orders</span>
        </div>
        <p><strong>WhatsApp:</strong> ${user.phone || "Not saved"}</p>
        <p><strong>Address:</strong> ${user.address || "No saved address yet"}</p>
        <p><strong>GPS:</strong> ${user.gps || "No GPS saved yet"}</p>
        <p><strong>Signed up:</strong> ${created}</p>
      `;

      const actions = document.createElement("div");
      actions.className = "customer-actions";

      const whatsApp = document.createElement("a");
      whatsApp.href = `https://wa.me/27${user.phone.replace(/^0/, "")}?text=${encodeURIComponent(
        `Hi ${user.name || ""}, this is Siyabonga from ManjeManje.`,
      )}`;
      whatsApp.target = "_blank";
      whatsApp.rel = "noreferrer";
      whatsApp.textContent = "WhatsApp customer";
      actions.append(whatsApp);

      const navigate = document.createElement("a");
      navigate.href = mapsDirectionsUrl(customerMapTarget(user));
      navigate.target = "_blank";
      navigate.rel = "noreferrer";
      navigate.textContent = "Navigate";
      actions.append(navigate);

      const remove = document.createElement("button");
      remove.type = "button";
      remove.textContent = "Remove";
      remove.addEventListener("click", () => removeCustomer(user.id));
      actions.append(remove);

      card.append(actions);
      customersList.append(card);
    });
}

function removeCustomer(id) {
  state.users = state.users.filter((user) => user.id !== id);
  if (state.currentUser?.id === id) {
    state.currentUser = null;
    saveSession(null);
  }
  saveUsers();
  render();
}

function updateOrderStatus(id, status) {
  state.orders = state.orders.map((order) => (order.id === id ? { ...order, status } : order));
  saveOrders();
  renderOrders();
}

function render() {
  renderCategories();
  renderVendors();
  renderCart();
  renderOrders();
  renderAccount();
}

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderVendors();
});

sortSelect.addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderVendors();
});

tipSelect.addEventListener("change", renderCart);

document.querySelectorAll(".quick-apps button").forEach((button) => {
  button.addEventListener("click", () => {
    state.category = button.dataset.category;
    document.querySelector(".section-heading").scrollIntoView({ behavior: "smooth" });
    render();
  });
});

document.querySelector("#clearCartButton").addEventListener("click", () => {
  state.cart.clear();
  state.activeVendorId = null;
  orderStatus.textContent = "";
  whatsappLink.classList.add("hidden");
  renderCart();
});

document.querySelector("#startOrderButton").addEventListener("click", () => {
  document.querySelector(".section-heading").scrollIntoView({ behavior: "smooth" });
});

document.querySelector("#locationButton").addEventListener("click", () => {
  const currentArea = document.querySelector("#deliveryArea").textContent.replace("Delivering to ", "");
  const next = prompt(`Choose Ermelo area: ${areas.join(", ")}`, currentArea);
  if (next?.trim()) {
    document.querySelector("#deliveryArea").textContent = `Delivering to ${next.trim()}`;
  }
});

accountToggle.addEventListener("click", () => {
  accountPanel.classList.remove("hidden");
  accountPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  accountForm.elements.phone.focus();
});

function accountFormData() {
  return new FormData(accountForm);
}

function validateAccountFields(formData, mode) {
  const phone = normalisePhone(formData.get("phone").trim());
  const password = formData.get("password");
  const name = formData.get("name").trim();

  if (!phone) {
    accountStatus.textContent = "Enter your WhatsApp number.";
    return false;
  }

  if (!password) {
    accountStatus.textContent = "Enter your password.";
    return false;
  }

  if (mode === "signup" && !name) {
    accountStatus.textContent = "Enter your full name to sign up.";
    return false;
  }

  return true;
}

async function handleAccountAction(mode) {
  const formData = accountFormData();
  if (!validateAccountFields(formData, mode)) return;

  const phone = normalisePhone(formData.get("phone").trim());
  const password = formData.get("password");
  let user = state.users.find((savedUser) => savedUser.phone === phone);

  if (mode === "signup") {
    if (user) {
      accountStatus.textContent = "This number already has an account. Use Sign in.";
      return;
    }

    const pendingUser = {
      id: `USER-${Date.now().toString().slice(-6)}`,
      name: formData.get("name").trim(),
      phone,
      password,
      address: formData.get("address").trim(),
      gps: "",
      createdAt: new Date().toISOString(),
    };
    if (!otpRequired) {
      state.users.push(pendingUser);
      state.currentUser = pendingUser;
      saveUsers();
      saveSession(pendingUser);
      submitNetlifyForm("manjemanje-signups", {
        name: pendingUser.name,
        phone: pendingUser.phone,
        address: pendingUser.address,
        gps: pendingUser.gps,
        event: "signup",
        createdAt: pendingUser.createdAt,
      });
      accountStatus.textContent = "Account created. Now add or confirm your delivery address below.";
      otpPanel.classList.add("hidden");
      renderAccount();
      renderCustomers();
      accountAddressPanel.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const result = await apiRequest("/api/signup/start", pendingUser);
    showSignupOtp(result.phone, result.channel);
    accountStatus.textContent = "OTP sent. Verify it to finish signing up.";
    return;
  }

  if (!otpRequired) {
    if (!user) {
      accountStatus.textContent = "No account found on this device. Please sign up first.";
      return;
    }
    if (user.password !== password) {
      accountStatus.textContent = "Incorrect password. Please try again.";
      return;
    }
  } else {
    const result = await apiRequest("/api/signin", { phone, password });
    user = result.user;
  }

  if (formData.get("name").trim() || formData.get("address").trim()) {
    user = {
      ...user,
      name: formData.get("name").trim() || user.name,
      address: formData.get("address").trim() || user.address,
    };
    state.users = state.users.map((savedUser) => (savedUser.phone === phone ? user : savedUser));
  } else {
    accountStatus.textContent = "Signed in. Welcome back.";
  }

  state.currentUser = user;
  saveUsers();
  saveSession(user);
  accountStatus.textContent = "Signed in. Confirm your delivery address below.";
  renderAccount();
  renderCustomers();
  accountAddressPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

signupButton.addEventListener("click", async () => {
  try {
    await handleAccountAction("signup");
  } catch (error) {
    accountStatus.textContent = `Sign up error: ${error.message}`;
  }
});
signinButton.addEventListener("click", async () => {
  try {
    await handleAccountAction("signin");
  } catch (error) {
    accountStatus.textContent = `Sign in error: ${error.message}`;
  }
});
accountForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    await handleAccountAction("signin");
  } catch (error) {
    accountStatus.textContent = `Account error: ${error.message}`;
  }
});

verifyOtpButton.addEventListener("click", async () => {
  if (!state.pendingSignup) {
    otpStatus.textContent = "No signup OTP is active. Fill the form and press Sign up.";
    return;
  }

  try {
    const result = await apiRequest("/api/signup/verify", {
      phone: state.pendingSignup.phone,
      otp: otpInput.value.trim(),
    });
    const user = result.user;
    state.users = state.users.filter((savedUser) => savedUser.phone !== user.phone);
    state.users.push(user);
    state.currentUser = user;
    state.pendingSignup = null;
    saveUsers();
    saveSession(user);
    otpStatus.textContent = "OTP verified. Account created.";
    accountStatus.textContent = "Account created. Now add or confirm your delivery address below.";
    otpPanel.classList.add("hidden");
    renderAccount();
    renderCustomers();
    accountAddressPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  } catch (error) {
    otpStatus.textContent = error.message;
  }
});

resendOtpButton.addEventListener("click", async () => {
  if (!state.pendingSignup) {
    otpStatus.textContent = "Fill the form and press Sign up to create an OTP.";
    return;
  }

  try {
    const formData = accountFormData();
    const result = await apiRequest("/api/signup/start", {
      name: formData.get("name").trim(),
      phone: state.pendingSignup.phone,
      password: formData.get("password"),
      address: formData.get("address").trim(),
    });
    showSignupOtp(result.phone, result.channel);
  } catch (error) {
    otpStatus.textContent = error.message;
  }
});

logoutButton.addEventListener("click", () => {
  state.currentUser = null;
  state.pendingSignup = null;
  saveSession(null);
  accountForm.reset();
  accountStatus.textContent = "Logged out.";
  addressStatus.textContent = "";
  otpStatus.textContent = "";
  otpPanel.classList.add("hidden");
  renderAccount();
});

setupAddressAutocomplete(
  accountAddressInput,
  accountAddressSuggestions,
  (address, coords) => {
    accountAddressInput.value = address;
    accountGpsInput.value = coords;
    addressInput.value = address;
    gpsInput.value = coords;
    document.querySelector("#deliveryArea").textContent = `Delivering to ${shortAddress(address)}`;
    updateAccountMap(coords);
    updateCheckoutMapSearch();
    addressStatus.textContent = "Address selected. Save it to your profile.";
  },
  () => {
    accountGpsInput.value = "";
    const query = `${accountAddressInput.value} Ermelo Mpumalanga`;
    updateAccountMap(query);
  },
);

accountGpsButton.addEventListener("click", () => {
  if (!navigator.geolocation) {
    addressStatus.textContent = "GPS is not available in this browser. Use the address search instead.";
    return;
  }

  addressStatus.textContent = "Getting your location...";
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;
      const coords = `${latitude.toFixed(6)},${longitude.toFixed(6)}`;
      accountAddressInput.value = "Finding nearest street address...";
      addressInput.value = "Finding nearest street address...";
      document.querySelector("#deliveryArea").textContent = "Delivering to current location";
      let label = "";
      try {
        label = await reverseGeocode(latitude, longitude);
      } catch (error) {
        label = "";
      }
      if (!label) {
        label = fallbackPinnedAddress();
      }
      accountGpsInput.value = coords;
      accountAddressInput.value = label;
      addressInput.value = label;
      gpsInput.value = coords;
      document.querySelector("#deliveryArea").textContent = `Delivering to ${shortAddress(label)}`;
      updateAccountMap(coords);
      updateCheckoutMapSearch();
      addressStatus.textContent = "Location address added. Save it to your profile.";
    },
    () => {
      addressStatus.textContent = "GPS permission was not allowed. Search your address instead.";
    },
    { enableHighAccuracy: true, timeout: 12000, maximumAge: 60000 },
  );
});

saveAddressButton.addEventListener("click", () => {
  if (!state.currentUser) {
    addressStatus.textContent = "Please sign up or sign in first.";
    return;
  }

  const address = accountAddressInput.value.trim();
  const gps = accountGpsInput.value.trim();
  if (!address && !gps) {
    addressStatus.textContent = "Add an address or use My Location before saving.";
    return;
  }
  const savedAddress = visibleDeliveryAddress(address, gps) || fallbackPinnedAddress();

  state.currentUser = {
    ...state.currentUser,
    address: savedAddress,
    gps: gps || state.currentUser.gps || "",
  };
  state.users = state.users.map((user) => (user.id === state.currentUser.id ? state.currentUser : user));
  saveUsers();
  saveSession(state.currentUser);
  fillCheckoutFromUser(state.currentUser);
  updateAccountMap(state.currentUser.gps || state.currentUser.address);
  addressStatus.textContent = "Address saved. You can now order with these delivery details.";
  renderCustomers();
  submitNetlifyForm("manjemanje-signups", {
    name: state.currentUser.name,
    phone: state.currentUser.phone,
    address: state.currentUser.address,
    gps: state.currentUser.gps,
    event: "address saved",
    createdAt: new Date().toISOString(),
  }).catch(() => {
    addressStatus.textContent = "Address saved on this device. If you are offline, it may not appear in Netlify yet.";
  });
});

setupAddressAutocomplete(
  addressInput,
  checkoutAddressSuggestions,
  (address, coords) => {
    addressInput.value = address;
    gpsInput.value = coords;
    if (state.currentUser) {
      accountAddressInput.value = address;
      accountGpsInput.value = coords;
    }
    document.querySelector("#deliveryArea").textContent = `Delivering to ${shortAddress(address)}`;
    mapSearchLink.href = mapsDirectionsUrl(coords);
    gpsStatus.textContent = "Address selected from search.";
  },
  () => {
    gpsInput.value = "";
    updateCheckoutMapSearch();
  },
);

useGpsButton.addEventListener("click", () => {
  if (!navigator.geolocation) {
    gpsStatus.textContent = "GPS is not available in this browser. Use Search on Maps instead.";
    return;
  }

  gpsStatus.textContent = "Getting your GPS location...";
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;
      const coords = `${latitude.toFixed(6)},${longitude.toFixed(6)}`;
      addressInput.value = "Finding nearest street address...";
      document.querySelector("#deliveryArea").textContent = "Delivering to current location";
      let label = "";
      try {
        label = await reverseGeocode(latitude, longitude);
      } catch (error) {
        label = "";
      }
      if (!label) {
        label = fallbackPinnedAddress();
      }
      gpsInput.value = coords;
      addressInput.value = label;
      document.querySelector("#deliveryArea").textContent = `Delivering to ${shortAddress(label)}`;
      mapSearchLink.href = mapsDirectionsUrl(coords);
      gpsStatus.innerHTML = `GPS added. <a href="${mapsDirectionsUrl(coords)}" target="_blank" rel="noreferrer">Open location in Maps</a>.`;
    },
    () => {
      gpsStatus.textContent = "GPS permission was not allowed. Type the address or use Search on Maps.";
    },
    { enableHighAccuracy: true, timeout: 12000, maximumAge: 60000 },
  );
});

checkoutForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!state.cart.size) return;
  const order = createOrder(new FormData(checkoutForm));
  if (state.currentUser) {
    state.currentUser = {
      ...state.currentUser,
      name: order.customerName,
      phone: normalisePhone(order.phone),
      address: order.address,
      gps: order.gps || state.currentUser.gps || "",
    };
    state.users = state.users.map((user) => (user.id === state.currentUser.id ? state.currentUser : user));
    saveUsers();
    saveSession(state.currentUser);
    renderCustomers();
  }
  state.orders.unshift(order);
  saveOrders();
  submitNetlifyForm("manjemanje-orders", {
    orderId: order.id,
    customerName: order.customerName,
    phone: order.phone,
    address: order.address,
    vendorName: order.vendorName,
    total: money(order.total),
    items: order.items.map((item) => `${item.qty} x ${item.name}`).join(", "),
    createdAt: order.createdAt,
  });
  orderStatus.textContent = `Order ${order.id} saved. Send it to Siyabonga on WhatsApp so it can be actioned.`;
  whatsappLink.href = whatsAppUrl(orderMessage(order));
  whatsappLink.classList.remove("hidden");
  state.cart.clear();
  state.activeVendorId = null;
  checkoutForm.reset();
  fillCheckoutFromUser(state.currentUser);
  renderCart();
  renderOrders();
});

function openStaffDashboard() {
  const enteredPin = prompt("Enter staff PIN");
  if (enteredPin !== staffPin) {
    alert("Incorrect staff PIN.");
    return;
  }
  adminPanel.classList.remove("hidden");
  adminPanel.scrollIntoView({ behavior: "smooth" });
}

let staffShortcut = "";
document.addEventListener("keydown", (event) => {
  if (event.ctrlKey || event.altKey || event.metaKey) return;
  if (event.target.matches("input, textarea, select")) return;
  staffShortcut = `${staffShortcut}${event.key.toLowerCase()}`.slice(-5);
  if (staffShortcut === "staff") {
    staffShortcut = "";
    openStaffDashboard();
  }
});

document.querySelector("#seedOrderButton").addEventListener("click", () => {
  const demoOrder = {
    id: `MMI-${Date.now().toString().slice(-6)}`,
    createdAt: new Date().toISOString(),
    status: "New",
    vendorId: "wesselton-kitchen",
    vendorName: "Wesselton Kitchen",
    customerName: "Demo Customer",
    phone: "072 000 0000",
    address: "Ermelo CBD taxi rank",
    gps: "-26.533333,29.983333",
    note: "Call when outside",
    payment: "Cash",
    items: [{ id: "wk-1", name: "Loaded Kota", price: 58, qty: 2 }],
    subtotal: 116,
    delivery: 18,
    service: 7,
    tip: 0,
    total: 141,
    eta: "25-35 min",
  };
  state.orders.unshift(demoOrder);
  saveOrders();
  renderOrders();
});

document.querySelector("#clearOrdersButton").addEventListener("click", () => {
  state.orders = state.orders.filter((order) => order.status !== "Done");
  saveOrders();
  renderOrders();
});

document.querySelector("#clearCustomersButton").addEventListener("click", () => {
  state.users = [];
  state.currentUser = null;
  saveUsers();
  saveSession(null);
  accountForm.reset();
  addressStatus.textContent = "";
  accountStatus.textContent = "Customers cleared on this device.";
  render();
});

helloLink.href = whatsAppUrl("Hi Siyabonga, I am interested in ManjeManje.");
mapSearchLink.href = mapsSearchUrl("Ermelo Mpumalanga");
updateAccountMap("Ermelo Mpumalanga");

render();
