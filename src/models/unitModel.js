const pool = require('../config/db');

const getAllUnits = async () => {
  const result = await pool.query('SELECT * FROM unit_master');
  return result.rows;
};

const getUnitByCode = async (code) => {
  const result = await pool.query('SELECT * FROM unit_master WHERE Unit_Code = $1', [code]);
  return result.rows[0];
};

const createUnit = async (BraProvi_Code, Unit_Code, Unit) => {
  const result = await pool.query(
    'INSERT INTO unit_master (BraProvi_Code, Unit_Code, Unit) VALUES ($1, $2, $3) RETURNING *',
    [BraProvi_Code, Unit_Code, Unit]
  );
  return result.rows[0];
};

module.exports = {
  getAllUnits,
  getUnitByCode,
  createUnit,
};
