const pool = require('../config/db');

const getAllUnits = async () => {
  const [rows] = await pool.query('SELECT * FROM unit_master');
  return rows;
};

const getUnitByCode = async (code) => {
  const [rows] = await pool.query('SELECT * FROM unit_master WHERE Unit_Code = ?', [code]);
  return rows[0];
};

const createUnit = async (BraProvi_Code, Unit_Code, Unit) => {
  const [result] = await pool.query(
    'INSERT INTO unit_master (BraProvi_Code, Unit_Code, Unit) VALUES (?, ?, ?)',
    [BraProvi_Code, Unit_Code, Unit]
  );
  return result.insertId;
};

module.exports = {
  getAllUnits,
  getUnitByCode,
  createUnit,
};
