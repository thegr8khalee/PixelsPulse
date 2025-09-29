import dotenv from 'dotenv';
import transporter from '../services/nodemailer.service.js';

dotenv.config(); // Load environment variables

export const sendContactEmail = async (req, res) => {
    // NOTE: EMAIL_USER and EMAIL_PASS should now be configured in the .env file
    // and referenced in emailService.js

    const { name, email, subject, message } = req.body;
    
    // 1. Basic input validation
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    // 2. Define email options
    const mailOptions = {
        from: `"${name}" <${email}>`, // Sender's name and email
        to: process.env.RECEIVING_EMAIL, // The email address where you want to receive messages
        subject: `Contact Form: ${subject}`,
        html: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
        `,
    };

    // 3. Send the email using the centralized transporter
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        // Log detailed error for debugging timeouts
        console.error('Error sending contact email:', error); 
        res
            .status(500)
            .json({ message: 'Failed to send message. Please try again later.' });
    }
};
