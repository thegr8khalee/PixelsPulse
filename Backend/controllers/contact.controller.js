// controllers/contact.controller.js
import { sendEmail } from '../services/gmail.service.js';
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

  // Build text content
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
  `;

  // Build HTML content
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

  try {
    // Send email
    await sendEmail({
      to: process.env.RECEIVING_EMAIL,
      subject: `${isGeneralInquiry ? 'General Inquiry' : 'New Project'}: ${service} - ${name}`,
      text: textContent,
      html: htmlContent,
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
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