import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import itineraryRoutes from './api/routes/itinerary.js';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use('/api', itineraryRoutes);

// Default route (Serve index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get('/directions', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'traffic-layer.html'));
});

app.get('/weather', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'weather-updates.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
