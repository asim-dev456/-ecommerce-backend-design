// Sample product data (replace with your actual data source)
const products = [
  {
    id: 1,
    name: 'Product 1',
    price: '$19.99',
    description: 'This is a detailed description of Product 1.',
    image: 'https://via.placeholder.com/400',
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$29.99',
    description: 'This is a detailed description of Product 2.',
    image: 'https://via.placeholder.com/400',
  },
  {
    id: 3,
    name: 'Product 3',
    price: '$39.99',
    description: 'This is a detailed description of Product 3.',
    image: 'https://via.placeholder.com/400',
  },
];

// Function to get URL parameters
function getProductIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id');
}

// Function to display product details
function displayProductDetails() {
  const productId = getProductIdFromUrl();
  const product = products.find((p) => p.id === parseInt(productId));

  if (product) {
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-price').textContent = product.price;
    document.getElementById('product-description').textContent =
      product.description;
    document.getElementById('product-image').src = product.image;
  } else {
    document.getElementById('product-name').textContent = 'Product Not Found';
    document.getElementById('product-price').textContent = '$0.00';
    document.getElementById('product-description').textContent =
      'The product you are looking for does not exist.';
    document.getElementById('product-image').src =
      'https://via.placeholder.com/400';
  }
}

// Display product details when the page loads
window.onload = displayProductDetails;
