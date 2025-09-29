import transporter from '../services/nodemailer.service.js';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables (ensure these are loaded early in your app entry point)

// Function to send the welcome email
export const sendWelcomeEmail = async (recipientEmail) => {
  const mailOptions = {
    // Use environment variable for the 'from' address
    from: `"PixelsPulse Newsletter" <${process.env.EMAIL_USER}>`,
    to: recipientEmail,
    subject: 'Welcome to PixelsPulse Newsletter! 🎉',

    text: `
Hello there 👋,

Thank you for subscribing to the PixelsPulse Newsletter! 
Expect updates on web development, design inspiration, and digital strategy tips.

We’re more than just a web agency — we’re your digital partners 🚀.

Explore what we do: https://pixelspulse.dev 

If you wish to unsubscribe, click here: https://pixelspulse.dev/api/newsletter/unsubscribe/${encodeURIComponent(
      recipientEmail
    )}

Best regards, 
The PixelsPulse Team 
${process.env.EMAIL_USER} 

© 2025 PixelsPulse. All rights reserved.
        `,

    html: `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Welcome to PixelsPulse Newsletter</title>
        <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Poppins:wght@600;700&display=swap"
            rel="stylesheet"
        />
    </head>
    <body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: Montserrat, sans-serif;">
        <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0"
            style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; overflow: hidden;">
            
            <!-- HEADER -->
            <tr>
                <td align="center" style="background: linear-gradient(135deg, #000723 95%, #d946ef); padding: 30px;">
                    <h1 style="margin: 0; font-family: Poppins, sans-serif; font-weight: 700; font-size: 28px; color: #ffffff;">
                        Welcome to <span style="color: #30d5f3">PixelsPulse!</span>
                    </h1>
                </td>
            </tr>

            <!-- BODY -->
            <tr>
                <td style="padding: 30px; color: #0a0a23">
                    <p style="font-size: 16px; line-height: 1.6; margin: 0 0 15px">Hi there 👋,</p>
                    <p style="font-size: 16px; line-height: 1.6; margin: 0 0 15px">
                        Thank you for subscribing to the <b>PixelsPulse Newsletter</b>. 
                        You’ve officially joined a community that believes every brand has a unique rhythm — 
                        and we’re here to bring it to life digitally.
                    </p>
                    <p style="font-size: 16px; line-height: 1.6; margin: 0 0 15px">
                        Expect regular updates on web development, design inspiration, digital strategy tips, and exclusive insights tailored just for you.
                    </p>
                    <p style="font-size: 16px; line-height: 1.6; margin: 0 0 15px">
                        We’re more than just a web agency — we’re your digital partners 🚀.
                    </p>
                </td>
            </tr>

            <!-- CTA -->
            <tr>
                <td align="center" style="padding: 20px">
                    <a href="https://pixelspulse.dev" target="_blank"
                        style="display: inline-block; background: #30d5f3; color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-family: Poppins, sans-serif; font-weight: 600; font-size: 16px;">
                        Explore PixelsPulse
                    </a>
                </td>
            </tr>

            <!-- FOOTER -->
            <tr>
                <td style="background: #0a0a23; color: #ffffff; text-align: center; padding: 20px; font-size: 12px;">
                    <p style="margin: 0; font-family: Montserrat, sans-serif">© 2025 PixelsPulse. All rights reserved.</p>
                    <p style="margin: 5px 0 10px">
                        <a href="mailto:${
                          process.env.EMAIL_USER
                        }" style="color: #30d5f3; text-decoration: none">
                            ${process.env.EMAIL_USER}
                        </a>
                    </p>

                    <!-- UNSUBSCRIBE BUTTON -->
                    <a href="https://pixelspulse.dev/api/newsteller/unsubscribe/${encodeURIComponent(
                      recipientEmail
                    )}" target="_blank"
                        style="display: inline-block; margin-top: 10px; background: #d946ef; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-family: Poppins, sans-serif; font-weight: 600; font-size: 14px;">
                        Unsubscribe
                    </a>
                </td>
            </tr>
        </table>
    </body>
</html>
        `,
  };

  // The centralized transporter now handles the sending logic
  return transporter.sendMail(mailOptions);
};
