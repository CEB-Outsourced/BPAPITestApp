const express = require('express');
const router = express.Router();

const {
  getAllDivisionals,
  getDivisionalByCode,
  createDivisional
} = require('../controllers/devisionController');

router.get('/', getAllDivisionals);
router.get('/:code', getDivisionalByCode);
router.post('/', createDivisional);

module.exports = router;
