// Load environment variables
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = require('./src/app');

// You don't need to use cors or middleware here.
// All middleware should be defined inside src/app.js

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


