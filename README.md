# My-website 
Is about a online electronic shop for purchasing electronic items like smart phone, laptops, AC, LED, bluetooth and so on. 
Here's a description **explaining the code** for each of the webpages you mentioned — highlighting their structure, purpose, and notable features:

**1. `AC.html` – Air Conditioner Product Page**
**Description:**
This page will display details about air conditioners, typically using a product card or layout similar to the main page. It should include:
- Product image and specifications
- Price and "Add to Cart" button
- JavaScript logic (using `addToCart()`) to update cart count and store product info in `localStorage`
- Consistent header/footer for navigation and branding

**2. `laptop.html` – Laptop Product Page**
**Description:**
Structured like the AC page, this file showcases laptop products. The key elements include:
- A featured image and product description
- Technical specs or highlights
- Integration with `addToCart(productName, price)` to add the item to the cart
- Reuse of navigation and styling defined in `style.css` and shared `script.js`

**3. `phone.html` – Smartphone Product Page**
**Description:**
The smartphone product page focuses on showcasing mobile phones. In terms of code:
- Includes the same base layout (header/footer, font styles)
- Displays smartphone-specific images and promotional content
- Uses the JavaScript `addToCart` function from the main script to update cart items in local storage

**4. `LED.html` – Smart TV Product Page**
**Description:**
This product page features Smart TVs. Its code mirrors other product pages:
- Smart TV banner, image gallery, and feature list
- "Add to Cart" button calling the `addToCart()` function with relevant parameters
- HTML/CSS ensures consistent styling with other pages

 **5. `cart.html` – Shopping Cart Page**
**Description:**
The cart page displays items added using localStorage. Code includes:
- JavaScript that reads `localStorage.getItem('cartItems')` and parses it
- Displays a list or table of products with name, price, and quantity (optional)
- Offers options to remove items or proceed to checkout
- Updates the cart count in the header dynamically

**6. `contact.html` – Contact Us Page**
**Description:**
This page allows users to reach customer support. Code features:
- A contact form with inputs for name, email, subject, and message
- Optionally uses form validation (HTML5 or JavaScript)
- Could include contact info, address, map, and FAQ section
- Static or dynamic form handling, depending on whether backend support is added
