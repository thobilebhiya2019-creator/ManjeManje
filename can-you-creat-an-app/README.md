# ManjeManje MVP

This is a simple launch MVP for testing ManjeManje in Ermelo.

## How to use it

1. Start the server with `node server.js`.
2. Open `http://127.0.0.1:8787` in a browser.
3. Customer chooses a local service and adds items.
4. Customer can press `Account`, then `Sign up` to create an account.
5. A real OTP is sent through WhatsApp Cloud API or Twilio SMS when credentials are configured.
6. After verified signup or signin, customer saves a delivery address using address search or `My Location`.
7. Customer enters or confirms delivery details, note, payment and tip.
8. Press `Place order`.
9. Press `Send order on WhatsApp` to forward the order to your dispatcher, vendor or driver.
10. Press `Admin` to see saved orders on this device.

## OTP setup

Copy `.env.example` values into your environment before starting `server.js`.

Use WhatsApp Cloud API:
- `WHATSAPP_TOKEN`
- `WHATSAPP_PHONE_NUMBER_ID`

Or use Twilio SMS:
- `TWILIO_ACCOUNT_SID`
- `TWILIO_AUTH_TOKEN`
- `TWILIO_FROM_NUMBER`

## Admin flow

- `Customers`: shows people who signed up on this browser/device.
- `WhatsApp customer`: opens a direct chat with a signed-up customer.
- `Navigate`: opens Maps for the customer's saved address or GPS.
- `Accepted`: vendor or dispatcher accepted the order.
- `On the way`: driver or runner is delivering.
- `Done`: order completed.
- `Clear completed`: removes orders marked as done.
- `Clear customers`: removes locally saved customer profiles.
- `Add demo order`: creates a fake order for testing.

## Important

Orders are saved in this browser on this device using local storage. For a public launch where many customers can order from different phones, the next step is adding a real online database and admin login.

Customer accounts are also saved in this browser on this device. They are useful for demo and testing, but public accounts need a real backend, secure passwords and SMS/WhatsApp verification.
