const pool = require('../config/db');

// Get all divisions
const getAllDivisions = async () => {
  const result = await pool.query('SELECT * FROM division_master');
  return result.rows;
};

// Get one division by Divi_Code
const getDivisionByCode = async (Divi_Code) => {
  const result = await pool.query(
    'SELECT * FROM division_master WHERE Divi_Code = $1',
    [Divi_Code]
  );
  return result.rows[0];
};

// Create new division
const createDivision = async ({ Divi_Code, Division }) => {
  const result = await pool.query(
    'INSERT INTO division_master (Divi_Code, Division) VALUES ($1, $2) RETURNING *',
    [Divi_Code, Division]
  );
  return result.rows[0];
};

module.exports = {
  getAllDivisions,
  getDivisionByCode,
  createDivision
};
