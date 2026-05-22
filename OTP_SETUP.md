# Real OTP Setup

The app is already wired for real OTP sending through the backend. To send OTPs to customer phones, choose one provider and add the credentials to a `.env` file in this folder.

## Option 1: Twilio SMS

Create `.env`:

```env
PORT=8787
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_FROM_NUMBER=+1234567890
```

Then restart:

```powershell
& 'C:\Users\Water\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' server.js
```

## Option 2: WhatsApp Cloud API

Create `.env`:

```env
PORT=8787
WHATSAPP_TOKEN=your_meta_access_token
WHATSAPP_PHONE_NUMBER_ID=your_phone_number_id
```

Then restart the server.

## Important

Without one of these provider accounts, no website can send a real OTP to a phone. The server will refuse signup until credentials are configured.
