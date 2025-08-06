const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Routes
const empRoutes = require('./routes/empRoutes'); // This handles /api/users
const designationRoutes = require('./routes/designationRoutes');
const divisionalRoutes = require('./routes/divisionalRoutes');
const branchProvinceRoutes = require('./routes/branchProvinceRoutes');
const unitRoutes = require('./routes/unitRoutes');

// Route Mounting
app.use('/api/employees', empRoutes);
app.use('/api/designations', designationRoutes);
app.use('/api/divisions', divisionalRoutes);
app.use('/api/branch-provinces', branchProvinceRoutes);
app.use('/api/units', unitRoutes);

// Default root route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Error handler (optional but useful)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

module.exports = app;
