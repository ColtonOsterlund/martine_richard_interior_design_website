# Backend Setup & Configuration Guide

## Backend Email Service Created ✅

I've created a complete Node.js/Express backend service for handling email functionality. Here's what was created:

### Files Created:
- `server/package.json` - Dependencies and npm scripts
- `server/server.js` - Express API with nodemailer email handling
- `server/.env.example` - Environment variable template
- `server/README.md` - Detailed setup instructions

### Features:
- ✅ Email sending via Gmail SMTP (nodemailer)
- ✅ Sends emails to coltonericosterlund@gmail.com
- ✅ Sends confirmation email to user
- ✅ Form validation and XSS protection
- ✅ CORS enabled for Angular frontend
- ✅ Professional HTML email templates
- ✅ Error handling with informative messages

---

## How to Set Up the Backend

### Step 1: Configure Gmail SMTP

To send emails, you need a Gmail account with App Password enabled:

1. **Go to your Google Account**: https://myaccount.google.com

2. **Enable 2-Step Verification**:
   - Click "Security" in left sidebar
   - Find "2-Step Verification" and follow the setup
   - You'll need your phone for verification

3. **Generate App Password**:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Windows Computer" (or your device)
   - Google generates a 16-character password - **copy this**

### Step 2: Create Backend Configuration

In the `server/` directory, create a `.env` file:

```bash
cp .env.example .env
```

Edit `.env` with your Gmail credentials:

```
EMAIL_USER=your_gmail_email@gmail.com
EMAIL_PASSWORD=your_16_character_app_password
RECIPIENT_EMAIL=coltonericosterlund@gmail.com
CORS_ORIGIN=http://localhost:4200
PORT=3000
```

**Replace with your actual values:**
- `EMAIL_USER` = your Gmail address
- `EMAIL_PASSWORD` = the 16-character app password from Google
- `RECIPIENT_EMAIL` = where emails go (Martine's email)
- `CORS_ORIGIN` = Angular dev server URL (default is correct)

### Step 3: Start the Backend

In a terminal, navigate to the `server` directory and run:

**Development mode (with auto-reload):**
```bash
cd server
npm run dev
```

**Or production mode:**
```bash
npm start
```

You should see:
```
✨ Backend server is running on http://localhost:3000
📧 Contact endpoint available at POST http://localhost:3000/api/contact
✅ Health check available at GET http://localhost:3000/api/health
```

### Step 4: Test the Backend

In another terminal, you can test the API:

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "555-123-4567",
    "projectType": "Furniture Selection",
    "budget": "$5,000 - $10,000",
    "message": "This is a test message."
  }'
```

Expected response:
```json
{
  "success": true,
  "message": "Message sent successfully! We will be in touch shortly."
}
```

---

## How It Works

### Contact Form Flow:

1. **User fills contact form** in Angular app
2. **Form validation** checks all required fields
3. **Submit button** sends data to backend: `POST http://localhost:3000/api/contact`
4. **Backend receives** form data
5. **Backend validates** required fields and email format
6. **Sends 2 emails**:
   - **To Martine**: Professional email with all inquiry details
   - **To User**: Confirmation email thanking them and confirming receipt
7. **Returns success** response to Angular
8. **Angular shows** success message and resets form

---

## What Was Modified in Angular

Updated `interior-design-app/src/app/pages/contact/contact.ts`:
- Replaced simulated email (setTimeout) with actual HTTP call
- Now sends form data to `http://localhost:3000/api/contact`
- Handles success and error responses
- Shows appropriate status messages

The contact form is now fully integrated with the backend! ✨

---

## Running Both Frontend & Backend

You need **2 terminal windows**:

**Terminal 1 - Angular Frontend:**
```bash
cd interior-design-app
ng serve
# Runs on http://localhost:4200
```

**Terminal 2 - Express Backend:**
```bash
cd server
npm run dev
# Runs on http://localhost:3000
```

Both must be running for the contact form to work end-to-end.

---

## Troubleshooting

### "Invalid login credentials" error
- ✅ Verify Gmail address is correct
- ✅ Verify 16-character app password (not your regular password)
- ✅ Ensure 2FA is enabled on your Google account
- ✅ Try generating a new app password

### CORS errors in browser console
- ✅ Ensure backend is running (`npm run dev`)
- ✅ Check `CORS_ORIGIN` in `.env` matches `http://localhost:4200`
- ✅ Check browser console for exact CORS error

### Form submits but shows error
- ✅ Check backend logs for error messages
- ✅ Verify all required fields are filled
- ✅ Check that Gmail credentials are correct in `.env`

### Backend won't start
- ✅ Verify you're in the `server` directory
- ✅ Verify `npm install` completed successfully
- ✅ Check that port 3000 is not in use
- ✅ Check that `.env` file exists and is readable

---

## Next Steps

Once you've set up the backend:

1. ✅ Test the contact form end-to-end
2. ✅ Verify emails arrive correctly
3. ✅ Check that Martine receives the contact inquiries
4. ✅ Confirm user receives confirmation emails

Then we can proceed to Step 10: Adding stock images and final optimizations.
