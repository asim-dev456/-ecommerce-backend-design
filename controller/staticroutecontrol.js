const path = require('path');
const publicDir = path.join(__dirname, '..', 'public');

async function homepage(req, res) {
  res.sendFile(path.join(publicDir, 'index.html'));
}

async function getAllProducts(req, res) {
  res.sendFile(path.join(publicDir, 'product.html'));
}

async function getProductById(req, res) {
  const id = req.params.id;
  res.sendFile(path.join(publicDir, 'getproductById.html'));
}

module.exports = { homepage, getAllProducts, getProductById };
