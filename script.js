let cart = [];
let total = 0;

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const totalPrice = document.getElementById('total-price');

  cartItems.innerHTML = cart
    .map(item => `<p>${item.name} - $${item.price}</p>`)
    .join('');
  totalPrice.textContent = `Total: $${total}`;
}

function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
  } else {
    alert(`Thank you for your purchase! Total: $${total}`);
    cart = [];
    total = 0;
    updateCart();
  }
}

function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
