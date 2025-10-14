import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import axios from 'axios'; // <-- Added missing axios import

import ContactRoutes from './routes/contact.routes.js'
import NewstellerRoutes from './routes/newsteller.routes.js'
import { connectDB } from './lib/db.js';
import { testZoho } from './test-zoho.js';
// import { verifyConnection } from './services/gmail.service.js';
// import { test1 } from './test-gmail.js';
const app = express();

// Environment variables
const CLIENT_ID = process.env.ZOHO_CLIENT_ID;
const CLIENT_SECRET = process.env.ZOHO_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.ZOHO_REFRESH_TOKEN;

// Get fresh access token
async function getAccessToken() {
  try {
    const response = await axios.post('https://accounts.zoho.com/oauth/v2/token', null, {
      params: {
        refresh_token: REFRESH_TOKEN,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: 'refresh_token'
      }
    });
    return response.data.access_token;
  } catch (error) {
    console.error('Failed to get access token:', error.response?.data);
    throw new Error('Authentication failed');
  }
}

// Example: Fetch CRM Accounts
app.get('/api/crm/accounts', async (req, res) => {
  try {
    const accessToken = await getAccessToken();

    const response = await axios.get('https://www.zohoapis.com/crm/v2/Accounts', {
      headers: {
        'Authorization': `Zoho-oauthtoken ${accessToken}`
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('CRM API Error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch CRM data' });
  }
});

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

app.use(express.json({ limit: '50mb' }));

app.use(
  cors({
    origin: 'http://localhost:5176',
    credentials: true,
  })
);

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/contact', ContactRoutes);
app.use('/api/newsteller', NewstellerRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../pixelspulse/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../pixelspulse', 'dist', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log('Server running on port: ', PORT);
  connectDB();
  // verifyConnection();
  // test1();
  console.log(`🔑 Refresh Token: ${REFRESH_TOKEN ? '✅ Configured' : '❌ Missing'}`);
  testZoho()
});
