// controllers/contact.controller.js
import { sendEmail } from '../services/gmail.service.js';
import dotenv from 'dotenv';

dotenv.config();

export const sendContactEmail = async (req, res) => {
  const { name, email, subject, message, phone, company, service, budget } = req.body;
  
  // Basic input validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email address.' });
  }

  const textContent = `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
  `;

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <hr style="border: 1px solid #eee;">
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</p>
    </div>
  `;

  try {
    await sendEmail({
      to: process.env.RECEIVING_EMAIL,
      subject: `Contact Form: ${subject}`,
      text: textContent,
      html: htmlContent,
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Gmail requires authenticated sender
    });

    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending contact email:', error);
    res.status(500).json({ 
      message: 'Failed to send message. Please try again later.' 
    });
  }
};
