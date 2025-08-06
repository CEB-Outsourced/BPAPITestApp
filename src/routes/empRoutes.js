const express = require('express');
const {
  getAllEmployees,
  addEmployee,
  getEmployeeByPF,
  updateEmployee,
  deleteEmployee
} = require('../controllers/empController');

const router = express.Router();

router.get('/', getAllEmployees);
router.post('/', addEmployee);
router.get('/:epf', getEmployeeByPF);
router.put('/:epf', updateEmployee);
router.delete('/:epf', deleteEmployee);

module.exports = router;
