const pool = require('../config/db');

// Get all branch provinces
const getAllBranchProvinces = async () => {
  const result = await pool.query('SELECT * FROM baranchprovi_master');
  return result.rows;
};

// Get single branch province by BraProvi_Code
const getBranchProvinceByCode = async (BraProvi_Code) => {
  const result = await pool.query(
    'SELECT * FROM baranchprovi_master WHERE BraProvi_Code = $1',
    [BraProvi_Code]
  );
  return result.rows[0];
};

// Create a new branch province
const createBranchProvince = async ({ Divi_Code, BraProvi_Code, Branch_Province }) => {
  const result = await pool.query(
    'INSERT INTO baranchprovi_master (Divi_Code, BraProvi_Code, Branch_Province) VALUES ($1, $2, $3) RETURNING *',
    [Divi_Code, BraProvi_Code, Branch_Province]
  );
  return result.rows[0];
};

module.exports = {
  getAllBranchProvinces,
  getBranchProvinceByCode,
  createBranchProvince
};
