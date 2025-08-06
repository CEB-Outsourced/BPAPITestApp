const EmpModel = require('../models/empModel');

// ✅ POST /api/users → Create a new employee
const addEmployee = async (req, res) => {
  const {
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
  } = req.body;

  if (!EmpPF_No || !Full_Name || !E_Mail) {
    return res.status(400).json({ message: 'Required fields are missing' });
  }

  try {
    await EmpModel.createUser(
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
    );
    res.status(201).json({ message: 'Employee added successfully', EmpPF_No });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ GET /api/users → Get all employees
const getAllEmployees = async (req, res) => {
  try {
    const users = await EmpModel.getAllUsersWithFullDetails();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ GET /api/users/:epf → Get one employee by PF
const getEmployeeByPF = async (req, res) => {
  const { epf } = req.params;
  try {
    const user = await EmpModel.getUserFullDetails(epf);
    if (!user) return res.status(404).json({ message: 'Employee not found' });

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ PUT /api/users/:epf → Update employee by PF
const updateEmployee = async (req, res) => {
  const { epf } = req.params;
  const updatedData = req.body;

  try {
    const affectedRows = await EmpModel.updateUser(epf, updatedData);
    if (affectedRows === 0) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json({ message: 'Employee updated successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ DELETE /api/users/:epf → Delete employee by PF
const deleteEmployee = async (req, res) => {
  const { epf } = req.params;
  try {
    const affectedRows = await EmpModel.deleteUser(epf);
    if (affectedRows === 0) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json({ message: 'Employee deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllEmployees,
  addEmployee,
  getEmployeeByPF,
  updateEmployee,
  deleteEmployee
};
