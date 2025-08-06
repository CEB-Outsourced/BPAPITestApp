const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const app = require('./src/app');

dotenv.config();

// ✅ Enable CORS globally
app.use(cors({
  origin: '*', // Or restrict: ['https://localhost:8243']
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

