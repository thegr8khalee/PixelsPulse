import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

import ContactRoutes from './routes/contact.routes.js'
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

app.use('/api/contact', ContactRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../pixelspulse/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../pixelspulse', 'dist', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log('Server running on port: ', PORT);
});
