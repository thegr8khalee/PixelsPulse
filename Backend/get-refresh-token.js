import dotenv from 'dotenv';
import express from 'express';
import axios from 'axios';

dotenv.config();

const app = express();
const PORT = 3000;

const CLIENT_ID = process.env.ZOHO_CLIENT_ID;
const CLIENT_SECRET = process.env.ZOHO_CLIENT_SECRET;
const REDIRECT_URI = process.env.ZOHO_REDIRECT_URI;
const SCOPES = 'ZohoCRM.modules.ALL,ZohoMail.accounts.READ,ZohoMail.messages.ALL';

console.log('🔧 One-time OAuth Setup Server');
console.log('📍 Make sure your .env file has CLIENT_ID, CLIENT_SECRET, and REDIRECT_URI');

// Step 1: Redirect to Zoho
app.get('/start', (req, res) => {
    const authUrl = `https://accounts.zoho.com/oauth/v2/auth?` +
        `scope=${SCOPES}&` +
        `client_id=${CLIENT_ID}&` +
        `response_type=code&` +
        `access_type=offline&` +
        `prompt=consent&` +
        `redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;

    res.redirect(authUrl);
});

// Step 2: Handle callback
app.get('/oauth/callback', async (req, res) => {
    const { code } = req.query;
    const accountsServer = req.query['accounts-server'] || 'https://accounts.zoho.com';

    if (!code) {
        return res.status(400).send('❌ No authorization code received');
    }

    try {
        const response = await axios.post(`${accountsServer}/oauth/v2/token`, null, {
            params: {
                code,
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                redirect_uri: REDIRECT_URI,
                grant_type: 'authorization_code'
            }
        });

        const { refresh_token } = response.data;

        if (!refresh_token) {
            console.error('❌ Zoho response did not include a refresh_token:', response.data);
            return res.status(400).send(`
                <h2>❌ No refresh_token returned by Zoho</h2>
                <pre>${JSON.stringify(response.data, null, 2)}</pre>
                <p>Try starting again at <a href="/start">http://localhost:${PORT}/start</a></p>
            `);
        }

        res.send(`
      <html>
        <head>
          <style>
            body { font-family: Arial; padding: 50px; background: #f5f5f5; }
            .container { background: white; padding: 30px; border-radius: 10px; max-width: 800px; margin: 0 auto; }
            .token { background: #2d2d2d; color: #0f0; padding: 20px; border-radius: 5px; font-family: monospace; word-break: break-all; margin: 20px 0; }
            .warning { background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 20px 0; }
            h1 { color: #28a745; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>✅ Success! You got your Refresh Token!</h1>
            
            <div class="warning">
              <strong>⚠️ IMPORTANT:</strong> Copy this token NOW and add it to your .env file. This page will only show once!
            </div>

            <h3>Your Refresh Token:</h3>
            <div class="token">${refresh_token}</div>

            <h3>Next Steps:</h3>
            <ol>
              <li>Copy the refresh token above</li>
              <li>Open your <code>.env</code> file</li>
              <li>Add: <code>ZOHO_REFRESH_TOKEN=${refresh_token}</code></li>
              <li>Stop this server (Ctrl+C)</li>
              <li>Delete <code>get-refresh-token.js</code> (you don't need it anymore)</li>
              <li>Start your main application</li>
            </ol>

            <p style="color: red; font-weight: bold;">🔒 Keep this token SECRET! Never commit it to git!</p>
          </div>
        </body>
      </html>
    `);

        console.log('\n✅ REFRESH TOKEN OBTAINED!');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('Add this to your .env file:');
        console.log(`ZOHO_REFRESH_TOKEN=${refresh_token}`);
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    } catch (error) {
        console.error('❌ Error:', error.response?.data || error.message);
        res.status(500).send(`Error: ${error.response?.data?.error || error.message}`);
    }
});

app.listen(PORT, () => {
    console.log(`\n🌐 Server started on http://localhost:${PORT}`);
    console.log(`\n👉 Open this URL in your browser to start:\n`);
    console.log(`   http://localhost:${PORT}/start\n`);
});