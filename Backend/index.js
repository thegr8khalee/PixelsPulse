import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

import ContactRoutes from './routes/contact.routes.js'
import NewstellerRoutes from './routes/newsteller.routes.js'
import { connectDB } from './lib/db.js';
import { verifyConnection } from './services/gmail.service.js';
import { test1 } from './test-gmail.js';
const app = express();

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

app.use(express.json({ limit: '50mb' }));

app.use(
  cors({
    origin: 'http://localhost:5173',
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
  verifyConnection();
  test1();
});