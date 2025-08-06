const DesignationModel = require('../models/designationModel');

// GET /api/designations
const getAllDesignations = async (req, res) => {
  try {
    const designations = await DesignationModel.getAllDesignations();
    res.json(designations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /api/designations/:code
const getDesignationByCode = async (req, res) => {
  const { code } = req.params;

  try {
    const designation = await DesignationModel.getDesignationByCode(code);
    if (!designation) {
      return res.status(404).json({ message: 'Designation not found' });
    }
    res.json(designation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /api/designations
const addDesignation = async (req, res) => {
  const { Desig_Code, Designation, Post } = req.body;

  if (!Desig_Code || !Designation || !Post) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const id = await DesignationModel.createDesignation(Desig_Code, Designation, Post);
    res.status(201).json({ message: 'Designation added', id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllDesignations,
  getDesignationByCode,
  addDesignation
};
