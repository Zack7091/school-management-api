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
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

