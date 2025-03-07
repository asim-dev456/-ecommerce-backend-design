const express = require('express');
const path = require('path');
const router = express.Router();

const publicDir = path.join(__dirname, '..', 'public');
router.get('/', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

router.get('/products', (req, res) => {
  res.sendFile(path.join(publicDir, 'product.html'));
});
router.get('/products/:id', (req, res) => {
  const id = req.params.id;
  res.sendFile(path.join(publicDir, 'getproductById.html'));
});
module.exports = router;
