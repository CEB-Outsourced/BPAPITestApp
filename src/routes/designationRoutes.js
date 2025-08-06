const express = require('express');
const router = express.Router();
const {
  getAllDesignations,
  getDesignationByCode,
  addDesignation // 👈 import it
} = require('../controllers/designationController');

router.get('/', getAllDesignations);
router.get('/:code', getDesignationByCode);
router.post('/', addDesignation); // ✅ POST route here

module.exports = router;

