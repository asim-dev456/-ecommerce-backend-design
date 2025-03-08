const express = require('express');
const {
  homepage,
  getAllProducts,
  getProductById,
} = require('../controller/staticroutecontrol');
const router = express.Router();

router.get('/', homepage);

router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
// router.post('/create', sampleUser);
module.exports = router;
