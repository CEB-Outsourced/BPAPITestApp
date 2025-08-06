import pool from '../config/db.js';

// Get all users with full joined details
const getAllUsersWithFullDetails = async () => {
  const [rows] = await pool.query(`
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
  return rows;
};

// Get one user full details by EPF
const getUserFullDetails = async (epf) => {
  const [rows] = await pool.query(`
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
    WHERE u.EmpPF_No = ?
  `, [epf]);
  return rows[0];
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
  const [result] = await pool.query(`
    INSERT INTO emp_master 
      (EmpPF_No, EmpName_Title, Full_Name, Mobile_No, Office_No, E_Mail, Desig_Code, Post, Divi_Code, BraProvi_Code, Unit_Code)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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
  return result.insertId;
};

// Update user by PF
const updateUser = async (epf, updatedData) => {
  const fields = Object.keys(updatedData).map(key => `${key} = ?`).join(', ');
  const values = Object.values(updatedData);
  const [result] = await pool.query(
    `UPDATE emp_master SET ${fields} WHERE EmpPF_No = ?`,
    [...values, epf]
  );
  return result.affectedRows;
};

// Delete user by PF
const deleteUser = async (epf) => {
  const [result] = await pool.query(`DELETE FROM emp_master WHERE EmpPF_No = ?`, [epf]);
  return result.affectedRows;
};

export {
  getAllUsersWithFullDetails,
  getUserFullDetails,
  createUser,
  updateUser,
  deleteUser
};
