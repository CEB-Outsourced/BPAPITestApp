const pool = require('../config/db');

// Get all designations
const getAllDesignations = async () => {
  const result = await pool.query('SELECT * FROM Desig_Master');
  return result.rows;
};

// Get a single designation by Desig_Code
const getDesignationByCode = async (Desig_Code) => {
  const result = await pool.query(
    'SELECT * FROM Desig_Master WHERE Desig_Code = $1',
    [Desig_Code]
  );
  return result.rows[0];
};

// Create a new designation
const createDesignation = async (Desig_Code, Designation, Post) => {
  const result = await pool.query(
    'INSERT INTO Desig_Master (Desig_Code, Designation, Post) VALUES ($1, $2, $3) RETURNING *',
    [Desig_Code, Designation, Post]
  );
  return result.rows[0];
};

module.exports = {
  getAllDesignations,
  getDesignationByCode,
  createDesignation
};
