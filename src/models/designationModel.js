const pool = require('../config/db');

// Get all designations
const getAllDesignations = async () => {
  const [rows] = await pool.query('SELECT * FROM Desig_Master');
  return rows;
};

// Get a single designation by Desig_Code
const getDesignationByCode = async (Desig_Code) => {
  const [rows] = await pool.query(
    'SELECT * FROM Desig_Master WHERE Desig_Code = ?',
    [Desig_Code]
  );
  return rows[0];
};

// Create a new designation
const createDesignation = async (Desig_Code, Designation, Post) => {
  const [result] = await pool.query(
    'INSERT INTO Desig_Master (Desig_Code, Designation, Post) VALUES (?, ?, ?)',
    [Desig_Code, Designation, Post]
  );
  return result.insertId;
};

module.exports = {
  getAllDesignations,
  getDesignationByCode,
  createDesignation
};
