const express = require('express');
const router = express.Router();
const unitController = require('../controllers/unitController');

// Get all units
router.get('/', unitController.getAllUnits);

// Get one unit by Unit_Code
router.get('/:code', unitController.getUnitByCode);

// Create new unit
router.post('/', unitController.addUnit);

module.exports = router;
