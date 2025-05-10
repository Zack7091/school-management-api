const express = require('express');
const dotenv = require('dotenv');
const schoolRoutes = require('./routes/schoolRoutes');
const db = require('./config/db');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Root route (Browser fix)
app.get('/', (req, res) => {
  res.send('Welcome to the School Management API');
});

// Routes
app.use('/', schoolRoutes);

// Server start
const PORT = process.env.PORT || 10000; // Fallback to 10000 for local development if no environment variable is set
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

