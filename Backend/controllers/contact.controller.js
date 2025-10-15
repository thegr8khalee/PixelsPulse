// controllers/contact.controller.js
import { sendEmail } from '../services/zoho.service.js';
import dotenv from 'dotenv';
import { registerToNewsteller } from './newsteller.controller.js';

dotenv.config();

export const sendContactEmail = async (req, res) => {
  const {
    name,
    email,
    phone,
    isWhatsApp,
    whatsapp,
    company,
    service,
    budget,
    timeline,
    contactMethod,
    industry,
    country,
    city,
    message,
    newsletter,
    privacyPolicy
  } = req.body;

  // Basic input validation
  if (!name || !email || !service || !message) {
    return res.status(400).json({ message: 'Name, email, service, and message are required.' });
  }

  // Privacy policy validation
  if (!privacyPolicy) {
    return res.status(400).json({ message: 'You must accept the privacy policy.' });
  }

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email address.' });
  }

  // Message length validation
  if (message.trim().length < 20) {
    return res.status(400).json({ message: 'Message must be at least 20 characters long.' });
  }

  const isGeneralInquiry = service === 'General Inquiry';

  // Build text content for internal email
  let textContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}${isWhatsApp ? ' (WhatsApp)' : ''}` : ''}
${!isWhatsApp && whatsapp ? `WhatsApp: ${whatsapp}` : ''}
${company ? `Company: ${company}` : ''}
Service: ${service}
${!isGeneralInquiry && budget ? `Budget: ${budget}` : ''}
${!isGeneralInquiry && timeline ? `Timeline: ${timeline}` : ''}
${!isGeneralInquiry && contactMethod ? `Preferred Contact: ${contactMethod}` : ''}
${!isGeneralInquiry && industry ? `Industry: ${industry}` : ''}
${country ? `Country: ${country}` : ''}
${city ? `City: ${city}` : ''}
${newsletter ? 'Newsletter: Subscribed' : ''}

Message:
${message}

---
Reply to: ${email}
  `;

  // Build HTML content for internal email
  const htmlContent = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
        <h2 style="color: #ffffff; margin: 0; font-size: 28px;">New Contact Form Submission</h2>
        <p style="color: #f0f0f0; margin: 10px 0 0 0; font-size: 14px;">${isGeneralInquiry ? 'General Inquiry' : 'Project Inquiry'}</p>
      </div>
      
      <div style="padding: 30px;">
        <div style="background: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
          <h3 style="color: #333; margin: 0 0 15px 0; font-size: 18px; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Contact Information</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; font-weight: bold; width: 140px;">Name:</td>
              <td style="padding: 8px 0; color: #333;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0; color: #333;"><a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 8px 0; color: #666; font-weight: bold;">Phone:</td>
              <td style="padding: 8px 0; color: #333;">${phone}${isWhatsApp ? ' <span style="background: #25D366; color: white; padding: 2px 8px; border-radius: 12px; font-size: 11px;">WhatsApp</span>' : ''}</td>
            </tr>` : ''}
            ${!isWhatsApp && whatsapp ? `
            <tr>
              <td style="padding: 8px 0; color: #666; font-weight: bold;">WhatsApp:</td>
              <td style="padding: 8px 0; color: #333;">${whatsapp}</td>
            </tr>` : ''}
            ${company ? `
            <tr>
              <td style="padding: 8px 0; color: #666; font-weight: bold;">Company:</td>
              <td style="padding: 8px 0; color: #333;">${company}</td>
            </tr>` : ''}
            ${country || city ? `
            <tr>
              <td style="padding: 8px 0; color: #666; font-weight: bold;">Location:</td>
              <td style="padding: 8px 0; color: #333;">${[city, country].filter(Boolean).join(', ')}</td>
            </tr>` : ''}
          </table>
        </div>

        ${!isGeneralInquiry ? `
        <div style="background: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
          <h3 style="color: #333; margin: 0 0 15px 0; font-size: 18px; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Project Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; font-weight: bold; width: 140px;">Service:</td>
              <td style="padding: 8px 0; color: #333;"><span style="background: #667eea; color: white; padding: 4px 12px; border-radius: 16px; font-size: 13px;">${service}</span></td>
            </tr>
            ${budget ? `
            <tr>
              <td style="padding: 8px 0; color: #666; font-weight: bold;">Budget:</td>
              <td style="padding: 8px 0; color: #333;">${budget}</td>
            </tr>` : ''}
            ${timeline ? `
            <tr>
              <td style="padding: 8px 0; color: #666; font-weight: bold;">Timeline:</td>
              <td style="padding: 8px 0; color: #333;">${timeline}</td>
            </tr>` : ''}
            ${industry ? `
            <tr>
              <td style="padding: 8px 0; color: #666; font-weight: bold;">Industry:</td>
              <td style="padding: 8px 0; color: #333;">${industry}</td>
            </tr>` : ''}
            ${contactMethod ? `
            <tr>
              <td style="padding: 8px 0; color: #666; font-weight: bold;">Contact Method:</td>
              <td style="padding: 8px 0; color: #333;">${contactMethod}</td>
            </tr>` : ''}
          </table>
        </div>
        ` : `
        <div style="background: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
          <h3 style="color: #333; margin: 0 0 15px 0; font-size: 18px; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Inquiry Type</h3>
          <p style="margin: 0;"><span style="background: #667eea; color: white; padding: 4px 12px; border-radius: 16px; font-size: 13px;">${service}</span></p>
        </div>
        `}

        <div style="background: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
          <h3 style="color: #333; margin: 0 0 15px 0; font-size: 18px; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Message</h3>
          <p style="color: #333; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</p>
        </div>

        ${newsletter ? `
        <div style="background: #e7f3ff; border-left: 4px solid #2196F3; padding: 12px 15px; border-radius: 4px; margin-bottom: 20px;">
          <p style="margin: 0; color: #1976D2; font-size: 14px;">📧 <strong>Newsletter subscription requested</strong></p>
        </div>
        ` : ''}

        <div style="background: #fff3cd; border-left: 4px solid #ffc107; padding: 12px 15px; border-radius: 4px; margin-bottom: 20px;">
          <p style="margin: 0; color: #856404; font-size: 14px;"><strong>Reply to:</strong> <a href="mailto:${email}" style="color: #667eea;">${email}</a></p>
        </div>

        <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e0e0e0;">
          <p style="color: #999; font-size: 12px; margin: 0;">This message was sent from your website contact form</p>
          <p style="color: #999; font-size: 12px; margin: 5px 0 0 0;">Received on ${new Date().toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'short'
  })}</p>
        </div>
      </div>
    </div>
  `;

  // Build auto-reply notification email for the user
  const autoReplyText = `
Hi ${name},

Thank you for reaching out to PixelsPulse! We've received your ${isGeneralInquiry ? 'inquiry' : 'project request'} regarding ${service}.

We appreciate your interest and will review your message carefully. Our team typically responds within 24-48 hours during business days.

${!isGeneralInquiry ? `
Here's a summary of your submission:
- Service: ${service}
${budget ? `- Budget: ${budget}` : ''}
${timeline ? `- Timeline: ${timeline}` : ''}
${contactMethod ? `- Preferred Contact Method: ${contactMethod}` : ''}
` : ''}

In the meantime, feel free to explore our website or reach out if you have any urgent questions.

${newsletter ? `\nYou've also been subscribed to our newsletter. Stay tuned for updates, tips, and industry insights!\n` : ''}

Best regards,
The PixelsPulse Team

---
This is an automated confirmation email. Please do not reply to this message.
For urgent matters, contact us at info@pixelspulse.dev
  `;

  const autoReplyHtml = `
    <div style="font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(48, 213, 243, 0.1);">
      <div style="background: #0a0a23; padding: 40px 30px; text-align: center;">
        <h1 style="font-family: 'Poppins', sans-serif; color: #30d5f3; margin: 0; font-size: 34px; font-weight: 700; letter-spacing: -0.5px;">PixelsPulse</h1>
        <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 16px; opacity: 0.95;">We've received your message!</p>
      </div>
      
      <div style="padding: 40px 30px;">
        <h2 style="font-family: 'Poppins', sans-serif; color: #0a0a23; margin: 0 0 20px 0; font-size: 26px; font-weight: 600;">Hi ${name},</h2>
        
        <p style="color: #1f2937; line-height: 1.7; margin: 0 0 20px 0; font-size: 15px;">
          Thank you for reaching out to <strong style="font-family: 'Poppins', sans-serif; color: #0a0a23;">PixelsPulse</strong>! We've received your ${isGeneralInquiry ? 'inquiry' : 'project request'} regarding <strong style="color: #30d5f3;">${service}</strong>.
        </p>

        <p style="color: #1f2937; line-height: 1.7; margin: 0 0 30px 0; font-size: 15px;">
          We appreciate your interest and will review your message carefully. Our team typically responds within <strong style="font-family: 'Poppins', sans-serif;">24-48 hours</strong> during business days.
        </p>

        ${!isGeneralInquiry ? `
        <div style="background: linear-gradient(to right, rgba(48, 213, 243, 0.05), rgba(217, 70, 239, 0.05)); border-left: 4px solid #30d5f3; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h3 style="font-family: 'Poppins', sans-serif; color: #0a0a23; margin: 0 0 18px 0; font-size: 18px; font-weight: 600;">Your Submission Summary</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #1f2937; font-size: 14px;">Service:</td>
              <td style="padding: 8px 0; color: #0a0a23; font-weight: 600; font-size: 14px;">${service}</td>
            </tr>
            ${budget ? `
            <tr>
              <td style="padding: 8px 0; color: #1f2937; font-size: 14px;">Budget:</td>
              <td style="padding: 8px 0; color: #0a0a23; font-weight: 600; font-size: 14px;">${budget}</td>
            </tr>` : ''}
            ${timeline ? `
            <tr>
              <td style="padding: 8px 0; color: #1f2937; font-size: 14px;">Timeline:</td>
              <td style="padding: 8px 0; color: #0a0a23; font-weight: 600; font-size: 14px;">${timeline}</td>
            </tr>` : ''}
            ${contactMethod ? `
            <tr>
              <td style="padding: 8px 0; color: #1f2937; font-size: 14px;">Contact Method:</td>
              <td style="padding: 8px 0; color: #0a0a23; font-weight: 600; font-size: 14px;">${contactMethod}</td>
            </tr>` : ''}
          </table>
        </div>
        ` : ''}

        ${newsletter ? `
        <div style="background: linear-gradient(135deg, rgba(48, 213, 243, 0.1), rgba(56, 189, 248, 0.1)); border-left: 4px solid #38bdf8; padding: 16px 20px; border-radius: 8px; margin-bottom: 30px;">
          <p style="margin: 0; color: #0a0a23; font-size: 14px; line-height: 1.6;">
            <strong style="font-family: 'Poppins', sans-serif;">📧 Newsletter Subscription</strong><br>
            You've been subscribed to our newsletter. Stay tuned for updates, tips, and industry insights!
          </p>
        </div>
        ` : ''}

        <p style="color: #1f2937; line-height: 1.7; margin: 0 0 30px 0; font-size: 15px;">
          In the meantime, feel free to explore our website or reach out if you have any urgent questions.
        </p>

        <div style="text-align: center; margin: 30px 0;">
          <a href="https://pixelspulse.dev" style="font-family: 'Poppins', sans-serif; display: inline-block; background: linear-gradient(135deg, #30d5f3 0%, #d946ef 100%); color: #ffffff; padding: 14px 36px; text-decoration: none; border-radius: 10px; font-weight: 600; font-size: 15px; box-shadow: 0 4px 15px rgba(48, 213, 243, 0.3); transition: all 0.3s ease;">Visit Our Website</a>
        </div>

        <div style="margin-top: 40px; padding-top: 30px; border-top: 2px solid #f3f4f6;">
          <p style="color: #1f2937; line-height: 1.7; margin: 0 0 10px 0; font-size: 15px;">
            Best regards,<br>
            <strong style="font-family: 'Poppins', sans-serif; color: #30d5f3; font-size: 16px;">The PixelsPulse Team</strong>
          </p>
        </div>

        <div style="background: linear-gradient(to right, #fff8e1, #fef3c7); border-left: 4px solid #facc15; border-radius: 8px; padding: 16px 20px; margin-top: 30px;">
          <p style="color: #0a0a23; font-size: 13px; margin: 0; line-height: 1.6;">
            <strong style="font-family: 'Poppins', sans-serif;">⚠️ Note:</strong> This is an automated confirmation email. Please do not reply to this message.<br>
            For urgent matters, contact us at <a href="mailto:info@pixelspulse.dev" style="color: #30d5f3; text-decoration: none; font-weight: 600;">info@pixelspulse.dev</a>
          </p>
        </div>
      </div>

      <div style="background: #f3f4f6; padding: 24px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
        <p style="color: #6b7280; font-size: 12px; margin: 0 0 8px 0;">© ${new Date().getFullYear()} PixelsPulse. All rights reserved.</p>
        <p style="color: #6b7280; font-size: 12px; margin: 0;">
          <a href="https://pixelspulse.dev" style="color: #30d5f3; text-decoration: none; margin: 0 8px; font-weight: 500;">Website</a> |
          <a href="https://pixelspulse.dev/privacy" style="color: #30d5f3; text-decoration: none; margin: 0 8px; font-weight: 500;">Privacy Policy</a> |
          <a href="https://pixelspulse.dev/contact" style="color: #30d5f3; text-decoration: none; margin: 0 8px; font-weight: 500;">Contact</a>
        </p>
      </div>
    </div>
  `;

  try {
    // Send internal notification email
    await sendEmail({
      to: 'info@pixelspulse.dev',
      subject: `${isGeneralInquiry ? 'General Inquiry' : 'New Project'}: ${service} - ${name}`,
      text: textContent,
      html: htmlContent,
      from: process.env.ZOHO_EMAIL_USER,
    });

    // Send auto-reply notification to the user
    await sendEmail({
      to: email,
      subject: `Thank you for contacting PixelsPulse - We've received your ${isGeneralInquiry ? 'inquiry' : 'project request'}`,
      text: autoReplyText,
      html: autoReplyHtml,
      from: process.env.ZOHO_EMAIL_USER,
    });

    // Handle newsletter subscription if opted in
    if (newsletter) {
      try {
        await registerToNewsteller({
          body: {
            email,
            name,
            source: 'contact_form'
          }
        }, {
          status: () => ({ json: () => { } })
        });
      } catch (newsletterError) {
        console.error('Newsletter subscription failed:', newsletterError);
        // Don't fail the entire request if newsletter subscription fails
      }
    }

    res.status(200).json({
      message: 'Message sent successfully!',
      newsletterSubscribed: newsletter
    });
  } catch (error) {
    console.error('Error sending contact email:', error);
    res.status(500).json({
      message: 'Failed to send message. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};