const pool = require('../config/db');

// Get all branch provinces
const getAllBranchProvinces = async () => {
  const [rows] = await pool.query('SELECT * FROM baranchprovi_master');
  return rows;
};

// Get single branch province by BraProvi_Code
const getBranchProvinceByCode = async (BraProvi_Code) => {
  const [rows] = await pool.query(
    'SELECT * FROM baranchprovi_master WHERE BraProvi_Code = ?',
    [BraProvi_Code]
  );
  return rows[0];
};

// Create a new branch province
const createBranchProvince = async ({ Divi_Code, BraProvi_Code, Branch_Province }) => {
  const [result] = await pool.query(
    'INSERT INTO baranchprovi_master (Divi_Code, BraProvi_Code, Branch_Province) VALUES (?, ?, ?)',
    [Divi_Code, BraProvi_Code, Branch_Province]
  );
  return result.insertId;
};

module.exports = {
  getAllBranchProvinces,
  getBranchProvinceByCode,
  createBranchProvince
};
