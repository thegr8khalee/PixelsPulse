// controllers/newsteller.controller.js
import NewsTeller from '../models/newsteller.model.js';
import { sendEmail } from '../services/zoho.service.js';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Send welcome email to new subscriber
 */
const sendWelcomeEmail = async (email, name) => {
  const subscriberName = name || 'there';

  const textContent = `
Welcome to Our Newsletter!

Hi ${subscriberName},

Thank you for subscribing to our newsletter! We're excited to have you as part of our community.

You'll receive updates about:
• Latest news and announcements
• Exclusive offers and promotions
• Industry insights and tips
• New products and services

If you ever wish to unsubscribe, you can do so at any time by clicking the unsubscribe link in any of our emails.

Best regards,
The Team
  `;

  const htmlContent = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 32px;">Welcome! 🎉</h1>
        <p style="color: #f0f0f0; margin: 10px 0 0 0; font-size: 16px;">Thank you for subscribing</p>
      </div>
      
      <div style="padding: 40px 30px;">
        <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
          Hi <strong>${subscriberName}</strong>,
        </p>
        
        <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
          Thank you for subscribing to our newsletter! We're excited to have you as part of our community.
        </p>

        <div style="background: #f8f9fa; border-radius: 8px; padding: 25px; margin: 30px 0;">
          <h3 style="color: #333; margin: 0 0 15px 0; font-size: 18px;">What to expect:</h3>
          <ul style="color: #555; line-height: 1.8; margin: 0; padding-left: 20px;">
            <li>Latest news and announcements</li>
            <li>Exclusive offers and promotions</li>
            <li>Industry insights and tips</li>
            <li>New products and services</li>
          </ul>
        </div>

        <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
          We respect your inbox and will only send you valuable content.
        </p>

        <div style="text-align: center; margin: 30px 0;">
          <a href="${process.env.WEBSITE_URL || 'https://yourwebsite.com'}" 
             style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; font-size: 14px;">
            Visit Our Website
          </a>
        </div>

        <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center;">
          <p style="color: #999; font-size: 12px; margin: 0 0 10px 0;">
            You received this email because you subscribed to our newsletter.
          </p>
          <p style="color: #999; font-size: 12px; margin: 0;">
            Not interested anymore? <a href="${process.env.API_URL || 'https://yourapi.com'}/api/newsteller/unsubscribe/${email}" style="color: #667eea; text-decoration: none;">Unsubscribe</a>
          </p>
        </div>
      </div>
    </div>
  `;

  await sendEmail({
    to: email,
    subject: 'Welcome to Our Newsletter! 🎉',
    text: textContent,
    html: htmlContent,
    from: process.env.ZOHO_EMAIL_USER,
  });
};

export const registerToNewsteller = async (req, res) => {
  try {
    const { email, name, source } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email address' });
    }

    // Check if already subscribed
    const existing = await NewsTeller.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'Email already subscribed' });
    }

    const subscription = new NewsTeller({
      email,
      name,
      source: source || 'direct'
    });
    await subscription.save();

    // Send response immediately
    res.status(201).json({ message: 'Successfully subscribed to newsletter!' });

    // Fire and forget: send welcome email in background
    sendWelcomeEmail(email, name)
      .then(() => {
        console.log(`✅ Welcome email sent to: ${email}`);
      })
      .catch((emailError) => {
        console.error('❌ Failed to send welcome email:', emailError.message);
      });

  } catch (err) {
    console.error('Newsletter registration error:', err);
    res.status(500).json({ message: 'Server error, please try again later' });
  }
};

export const unsubscribeFromNewsteller = async (req, res) => {
  try {
    const { email } = req.params;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const result = await NewsTeller.findOneAndDelete({ email });

    if (!result) {
      return res.redirect(`/unsubscribe-success/${email}?status=notfound`);
    }

    return res.redirect(`/unsubscribe-success/${email}`);
  } catch (err) {
    console.error('Unsubscribe error:', err);
    res.redirect(`/unsubscribe-success/${req.params.email}?status=error`);
  }
};