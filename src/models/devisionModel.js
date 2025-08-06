const pool = require('../config/db');

// Get all divisions
const getAllDivisions = async () => {
  const [rows] = await pool.query('SELECT * FROM division_master');
  return rows;
};

// Get one division by Divi_Code
const getDivisionByCode = async (Divi_Code) => {
  const [rows] = await pool.query(
    'SELECT * FROM division_master WHERE Divi_Code = ?',
    [Divi_Code]
  );
  return rows[0];
};

// Create new division
const createDivision = async ({ Divi_Code, Division }) => {
  const [result] = await pool.query(
    'INSERT INTO division_master (Divi_Code, Division) VALUES (?, ?)',
    [Divi_Code, Division]
  );
  return result.insertId;
};

module.exports = {
  getAllDivisions,
  getDivisionByCode,
  createDivision
};
