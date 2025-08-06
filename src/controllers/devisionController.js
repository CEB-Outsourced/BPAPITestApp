const DivisionModel = require('../models/devisionModel');

// GET /api/divisionals
const getAllDivisionals = async (req, res) => {
  try {
    const data = await DivisionModel.getAllDivisions();
    res.status(200).json(data);
  } catch (err) {
    console.error('Error fetching all divisionals:', err);
    res.status(500).json({ message: 'Server error while fetching divisionals' });
  }
};

// GET /api/divisionals/:code
const getDivisionalByCode = async (req, res) => {
  const { code } = req.params;

  try {
    const record = await DivisionModel.getDivisionByCode(code);
    if (!record) {
      return res.status(404).json({ message: `Divisional code '${code}' not found` });
    }
    res.status(200).json(record);
  } catch (err) {
    console.error(`Error fetching divisional with code ${code}:`, err);
    res.status(500).json({ message: 'Server error while fetching divisional' });
  }
};

// POST /api/divisionals
const createDivisional = async (req, res) => {
  const { Divi_Code, Division } = req.body;

  if (!Divi_Code || !Division) {
    return res.status(400).json({ message: 'Both Divi_Code and Division fields are required' });
  }

  try {
    const id = await DivisionModel.createDivision({ Divi_Code, Division });
    res.status(201).json({ message: 'Divisional added successfully', id });
  } catch (err) {
    console.error('Error adding new divisional:', err);
    res.status(500).json({ message: 'Server error while adding divisional' });
  }
};

module.exports = {
  getAllDivisionals,
  getDivisionalByCode,
  createDivisional
};
