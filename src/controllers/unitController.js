const UnitModel = require('../models/unitModel');

// GET /api/units
const getAllUnits = async (req, res) => {
  try {
    const units = await UnitModel.getAllUnits();
    res.json(units);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /api/units/:code
const getUnitByCode = async (req, res) => {
  const { code } = req.params;
  try {
    const unit = await UnitModel.getUnitByCode(code);
    if (!unit) return res.status(404).json({ message: 'Unit not found' });
    res.json(unit);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /api/units
const addUnit = async (req, res) => {
  const { BraProvi_Code, Unit_Code, Unit } = req.body;
  if (!BraProvi_Code || !Unit_Code || !Unit) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const id = await UnitModel.createUnit(BraProvi_Code, Unit_Code, Unit);
    res.status(201).json({ message: 'Unit added', id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllUnits,
  getUnitByCode,
  addUnit,
};
