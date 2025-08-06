import pool from '../config/db.js';

// Get all users with full joined details
const getAllUsersWithFullDetails = async () => {
  const result = await pool.query(`
    SELECT 
      u.EmpPF_No,
      u.EmpName_Title,
      u.Full_Name,
      u.Mobile_No,
      u.Office_No,
      u.E_Mail,
      u.Post,
      d.Designation,
      dm.Division,
      bp.Branch_Province,
      um.Unit
    FROM emp_master u
    LEFT JOIN desig_master d ON u.Desig_Code = d.Desig_Code
    LEFT JOIN division_master dm ON u.Divi_Code = dm.Divi_Code
    LEFT JOIN baranchprovi_master bp ON u.BraProvi_Code = bp.BraProvi_Code
    LEFT JOIN unit_master um ON u.Unit_Code = um.Unit_Code
  `);
  return result.rows;
};

// Get one user full details by EPF
const getUserFullDetails = async (epf) => {
  const result = await pool.query(`
    SELECT 
      u.EmpPF_No,
      u.EmpName_Title,
      u.Full_Name,
      u.Mobile_No,
      u.Office_No,
      u.E_Mail,
      u.Post,
      d.Designation,
      dm.Division,
      bp.Branch_Province,
      um.Unit
    FROM emp_master u
    LEFT JOIN desig_master d ON u.Desig_Code = d.Desig_Code
    LEFT JOIN division_master dm ON u.Divi_Code = dm.Divi_Code
    LEFT JOIN baranchprovi_master bp ON u.BraProvi_Code = bp.BraProvi_Code
    LEFT JOIN unit_master um ON u.Unit_Code = um.Unit_Code
    WHERE u.EmpPF_No = $1
  `, [epf]);
  return result.rows[0];
};

// Create a new user
const createUser = async (
  EmpPF_No,
  EmpName_Title,
  Full_Name,
  Mobile_No,
  Office_No,
  E_Mail,
  Desig_Code,
  Post,
  Divi_Code,
  BraProvi_Code,
  Unit_Code
) => {
  const result = await pool.query(`
    INSERT INTO emp_master 
      (EmpPF_No, EmpName_Title, Full_Name, Mobile_No, Office_No, E_Mail, Desig_Code, Post, Divi_Code, BraProvi_Code, Unit_Code)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    RETURNING *
  `, [
    EmpPF_No,
    EmpName_Title,
    Full_Name,
    Mobile_No,
    Office_No,
    E_Mail,
    Desig_Code,
    Post,
    Divi_Code,
    BraProvi_Code,
    Unit_Code
  ]);
  return result.rows[0];
};

// Update user by PF
const updateUser = async (epf, updatedData) => {
  const keys = Object.keys(updatedData);
  const values = Object.values(updatedData);
  const setClause = keys.map((key, index) => `${key} = $${index + 1}`).join(', ');
  const result = await pool.query(
    `UPDATE emp_master SET ${setClause} WHERE EmpPF_No = $${keys.length + 1}`,
    [...values, epf]
  );
  return result.rowCount;
};

// Delete user by PF
const deleteUser = async (epf) => {
  const result = await pool.query(`DELETE FROM emp_master WHERE EmpPF_No = $1`, [epf]);
  return result.rowCount;
};

export {
  getAllUsersWithFullDetails,
  getUserFullDetails,
  createUser,
  updateUser,
  deleteUser
};
