const BranchProvinceModel = require('../models/branchProvinceModel');

// GET /api/branch-provinces
const getAllBranchProvinces = async (req, res) => {
  try {
    const data = await BranchProvinceModel.getAllBranchProvinces();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /api/branch-provinces/:code
const getBranchProvince = async (req, res) => {
  const { code } = req.params;
  try {
    const record = await BranchProvinceModel.getBranchProvinceByCode(code);
    if (!record) return res.status(404).json({ message: 'Branch Province not found' });
    res.json(record);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /api/branch-provinces
const addBranchProvince = async (req, res) => {
  const { Divi_Code, BraProvi_Code, Branch_Province } = req.body;

  if (!Divi_Code || !BraProvi_Code || !Branch_Province) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const id = await BranchProvinceModel.createBranchProvince({ Divi_Code, BraProvi_Code, Branch_Province });
    res.status(201).json({ message: 'Branch Province added', id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllBranchProvinces,
  getBranchProvince,
  addBranchProvince
};
