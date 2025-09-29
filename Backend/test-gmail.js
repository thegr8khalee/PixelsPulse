import { sendEmail, verifyConnection } from './services/gmail.service.js';

const test = async () => {
  // Verify connection
  await verifyConnection();
  
  // Send test email
  try {
    const result = await sendEmail({
      to: process.env.EMAIL_USER,
      subject: 'Gmail API Test',
      text: 'This is a test email from Gmail API',
      html: '<h1>Gmail API Works!</h1><p>This is a test email</p>',
    });
    console.log('✅ Test passed:', result);
  } catch (error) {
    console.error('❌ Test failed:', error);
  }
};

test();