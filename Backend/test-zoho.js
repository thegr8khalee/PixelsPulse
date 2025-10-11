// import { zohoService } from './services/zoho.service.js';
import { verifyConnection, sendEmail } from './services/zoho.service.js';

export const testZoho = async () => {
    console.log('\n🔍 Testing Zoho Mail Connection...\n');

    // 1. Verify connection
    const isConnected = await verifyConnection();

    if (!isConnected) {
        console.error('❌ Zoho connection failed. Check your credentials in .env');
        return;
    }

    // 2. Send test email
    try {
        console.log('📧 Sending test email via Zoho Mail...');

        const result = await sendEmail({
            to: process.env.ZOHO_EMAIL_USER, // Send to yourself
            subject: 'Zoho Mail API Test',
            html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background: #f5f5f5;">
          <div style="background: white; padding: 30px; border-radius: 10px; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #4CAF50;">✅ Zoho Mail API Works!</h1>
            <p>This is a test email sent from your application using Zoho Mail API.</p>
            <hr style="border: 1px solid #eee; margin: 20px 0;">
            <p><strong>Test Details:</strong></p>
            <ul>
              <li>Sent at: ${new Date().toLocaleString()}</li>
              <li>From: ${process.env.ZOHO_EMAIL_USER}</li>
              <li>Service: Zoho Mail API</li>
            </ul>
            <p style="color: #666; font-size: 12px; margin-top: 30px;">
              If you received this email, your Zoho Mail integration is working correctly! 🎉
            </p>
          </div>
        </div>
      `,
            // Removed isHtml: true, changed body to html
        });

        console.log('✅ Test email sent successfully!');
        console.log('📬 Message ID:', result.messageId);
        console.log('✉️  Check your inbox at:', process.env.ZOHO_EMAIL_USER);
        console.log('\n🎉 Zoho Mail test passed!\n');

        return result;
    } catch (error) {
        console.error('❌ Test failed:', error.response?.data || error.message);
        console.error('\n💡 Troubleshooting tips:');
        console.error('   1. Check ZOHO_REFRESH_TOKEN is valid');
        console.error('   2. Check ZOHO_ACCOUNT_ID is correct');
        console.error('   3. Check ZOHO_EMAIL_USER matches your Zoho account');
        console.error('   4. Ensure OAuth scopes include ZohoMail.messages.ALL\n');
        throw error;
    }
};

// Run test if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
    testZoho();
}
