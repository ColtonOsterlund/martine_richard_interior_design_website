import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:4200',
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running' });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, projectType, budget, message } = req.body;

    // Validate required fields
    if (!name || !email || !projectType || !message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: name, email, projectType, message'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }

    // Create email content for Martine
    const toEmail = process.env.RECIPIENT_EMAIL || 'coltonericosterlund@gmail.com';
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: toEmail,
      subject: `New Contact Form Submission from ${name} - ${projectType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8B7355;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Phone:</strong> ${phone ? escapeHtml(phone) : 'Not provided'}</p>
            <p><strong>Project Type:</strong> ${escapeHtml(projectType)}</p>
            <p><strong>Budget:</strong> ${budget ? escapeHtml(budget) : 'Not specified'}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: white; padding: 15px; border-left: 4px solid #D4AF70;">
              ${escapeHtml(message).replace(/\n/g, '<br>')}
            </p>
          </div>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            This email was sent from the Martine Richard Interior Design website contact form.
            <br>
            Reply to: ${escapeHtml(email)}
          </p>
        </div>
      `
    };

    // Send email to Martine
    await transporter.sendMail(mailOptions);

    // Send confirmation email to user
    const confirmationEmail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'We Received Your Message - Martine Richard Interior Design',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8B7355;">Thank You, ${escapeHtml(name)}!</h2>
          <p>We've received your message and will review it shortly.</p>
          <p>Martine typically responds to all inquiries within 24 hours.</p>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Project Type:</strong> ${escapeHtml(projectType)}</p>
            <p><strong>Your Message:</strong></p>
            <p style="background-color: white; padding: 15px; border-left: 4px solid #D4AF70;">
              ${escapeHtml(message).replace(/\n/g, '<br>')}
            </p>
          </div>
          <p>If you have any questions before we follow up, please reply to this email.</p>
          <p style="color: #666; margin-top: 30px;">
            Best regards,<br>
            <strong>Martine Richard</strong><br>
            Interior Design Consulting
          </p>
        </div>
      `
    };

    await transporter.sendMail(confirmationEmail);

    res.json({
      success: true,
      message: 'Message sent successfully! We will be in touch shortly.'
    });

  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    });
  }
});

// Helper function to escape HTML
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// Start server
app.listen(PORT, () => {
  console.log(`✨ Backend server is running on http://localhost:${PORT}`);
  console.log(`📧 Contact endpoint available at POST http://localhost:${PORT}/api/contact`);
  console.log(`✅ Health check available at GET http://localhost:${PORT}/api/health`);
});
