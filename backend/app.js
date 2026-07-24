const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(cors());
app.use(express.json()); // Untuk membaca request body berupa JSON
// Import routes
app.use('/api/login',authRoutes);
app.use('/api/products', productRoutes);

// Route sederhana untuk test
app.get('/', (req, res) => {
  res.json({ message: 'API Admin Panel QLcom Berjalan' });
});

module.exports = app;