# Backend Setup Instructions

## Overview
This backend service handles email functionality for the Martine Richard Interior Design website. It uses:
- **Express.js** - Web framework
- **Nodemailer** - Email service
- **Gmail SMTP** - Email provider (requires App Password)

## Installation

### 1. Install Dependencies
```bash
cd server
npm install
```

### 2. Configure Gmail SMTP

To use Gmail for sending emails, you need to:

1. **Enable 2-Factor Authentication** on your Google Account:
   - Go to https://myaccount.google.com/security
   - Enable 2-Step Verification

2. **Generate App Password**:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Windows Computer" (or your device)
   - Google will generate a 16-character password
   - Copy this password

3. **Create `.env` file** in the `server/` directory:
   ```bash
   cp .env.example .env
   ```
   
4. **Edit `.env`** and add your credentials:
   ```
   EMAIL_USER=your_gmail_email@gmail.com
   EMAIL_PASSWORD=your_16_character_app_password
   RECIPIENT_EMAIL=coltonericosterlund@gmail.com
   CORS_ORIGIN=http://localhost:4200
   PORT=3000
   ```

## Running the Server

### Development Mode (with auto-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:3000`

## API Endpoints

### Health Check
```
GET /api/health
Response: { "status": "ok", "message": "Backend is running" }
```

### Contact Form
```
POST /api/contact
Content-Type: application/json

Request Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "555-123-4567",
  "projectType": "Furniture Selection",
  "budget": "$5,000 - $10,000",
  "message": "I'm interested in your services..."
}

Success Response (200):
{
  "success": true,
  "message": "Message sent successfully! We will be in touch shortly."
}

Error Response (400/500):
{
  "success": false,
  "message": "Error description"
}
```

## Features

- ✅ Sends emails to Martine Richard (using RECIPIENT_EMAIL)
- ✅ Sends confirmation email to user
- ✅ HTML email formatting with professional styling
- ✅ Input validation (required fields, email format)
- ✅ XSS protection (HTML escaping)
- ✅ CORS enabled for Angular frontend
- ✅ Error handling with informative messages

## Integration with Angular

The Angular contact form should send data to:
```
POST http://localhost:3000/api/contact
```

Update the `contact.ts` file to call this endpoint instead of the simulated setTimeout.

## Troubleshooting

**Issue: "Invalid login credentials"**
- Verify your Gmail address and app password are correct
- Ensure 2FA is enabled on your Google account
- Try generating a new app password

**Issue: CORS errors in browser console**
- Ensure `CORS_ORIGIN` in `.env` matches your Angular dev server URL
- Default is `http://localhost:4200`

**Issue: "Less secure app access" error**
- You must use App Password, not your regular Gmail password
- Enable 2FA first, then generate App Password at https://myaccount.google.com/apppasswords

## Production Deployment

For production:
1. Use environment variables instead of `.env` file
2. Set `CORS_ORIGIN` to your production domain
3. Consider using a dedicated email service (SendGrid, AWS SES) for better reliability
4. Add rate limiting to prevent spam
5. Add CSRF tokens for additional security

## Files

- `server.js` - Main Express application
- `package.json` - Dependencies and scripts
- `.env.example` - Environment variable template
- `.env` (not in repo) - Your actual credentials
