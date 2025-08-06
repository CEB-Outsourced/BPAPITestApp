const express = require('express');
const router = express.Router();
const branchProvinceController = require('../controllers/branchProvinceController');

// Get all branch provinces
router.get('/', branchProvinceController.getAllBranchProvinces);

// Get single branch province by BraProvi_Code
router.get('/:code', branchProvinceController.getBranchProvince);

// Create new branch province
router.post('/', branchProvinceController.addBranchProvince);

module.exports = router;
