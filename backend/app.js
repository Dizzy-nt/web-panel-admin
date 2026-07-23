const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json()); // Untuk membaca request body berupa JSON

// Route sederhana untuk test
app.get('/', (req, res) => {
  res.json({ message: 'API Admin Panel QLcom Berjalan' });
});

module.exports = app;