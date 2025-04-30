document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thank you! Your message has been sent.");
            form.reset();
        });
    }
});
localStorage.setItem("cartItems", JSON.stringify([...items]));
function addToCart(productName, priceInUSD) {
    const EXCHANGE_RATE = 83;  // 1 USD = 83 INR
    const priceInINR = priceInUSD * EXCHANGE_RATE;

    let cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    cart.push({ name: productName, price: priceInINR });
    localStorage.setItem('cartItems', JSON.stringify(cart));

    // Update cart count
    let count = parseInt(localStorage.getItem('cartCount')) || 0;
    count++;
    localStorage.setItem('cartCount', count);
    document.getElementById('cart-count').innerText = count;
}
