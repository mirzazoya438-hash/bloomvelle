# 🌸 Bloomvelle - Beauty & Self-Care E-Commerce Store

A modern, responsive beauty e-commerce website built with HTML, CSS, and JavaScript.

## Features ✨

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Shopping Cart**: Add/remove products with persistent storage using localStorage
- **Product Search**: Search products by name or description
- **Category Filter**: Filter products by skincare, haircare, or sunscreen
- **Modern UI**: Beautiful gradient backgrounds and smooth animations
- **Contact Form**: Get in touch section for customer inquiries
- **Product Database**: 9 curated beauty products
- **Smooth Navigation**: Smooth scrolling between sections

## Project Structure 📁

```
bloomvelle/
├── index.html       # Main HTML file with semantic structure
├── styles.css       # Comprehensive CSS with responsive design
├── script.js        # JavaScript for interactivity and cart functionality
└── README.md        # This file
```

## How to Use 🚀

1. **Clone or download** this repository
2. **Open `index.html`** in your web browser
3. **Start shopping!** 🛍️

### For Local Development:
```bash
# Using Python's built-in server (Python 3)
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Or simply open index.html in your browser
```

## How It Works 💻

### Shopping Cart
- Click the shopping cart icon (🛒) to view your cart
- Click "Add to Cart" on any product
- View, modify, or remove items from the cart modal
- Click "Checkout" to complete your purchase
- Cart data is saved in browser's localStorage

### Search & Filter
- Use the search bar to find products by name or description
- Use the dropdown to filter by category
- Results update in real-time

### Navigation
- Click on menu items (Home, Shop, About, Contact) for smooth scrolling
- Logo links back to home section

## Products Included 🛁

1. **Korean Glow Serum** - ₹799
2. **Hair Growth Essence** - ₹999
3. **Glass Skin Sunscreen** - ₹699
4. **Retinol Night Cream** - ₹1,299
5. **Scalp Massage Oil** - ₹599
6. **Mineral Face Sunscreen** - ₹899
7. **Hyaluronic Acid Serum** - ₹849
8. **Silk Hair Mask** - ₹749
9. **Tinted Sunscreen SPF 40** - ₹1,099

## Technologies Used 🔧

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with flexbox and grid
- **JavaScript ES6**: Product filtering, cart management, and interactions
- **LocalStorage**: Persistent cart data

## Browser Compatibility ✅

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements 🚀

- [ ] Add product detail pages
- [ ] Implement real payment gateway
- [ ] Add user accounts and order history
- [ ] Admin dashboard for product management
- [ ] Customer reviews and ratings
- [ ] Wishlist feature
- [ ] Email notifications
- [ ] Social media integration

## Customization 🎨

### Change Brand Colors
Edit the primary color `#c27ba0` in `styles.css` to your preferred color.

### Add More Products
Add new product objects to the `products` array in `script.js`:
```javascript
{
    id: 10,
    name: "Product Name",
    price: 999,
    category: "skincare",
    image: "image-url",
    description: "Product description"
}
```

### Update Business Information
- Edit the logo text in `index.html`
- Update the footer copyright year and text
- Modify the "About Bloomvelle" section

## Support & Feedback 💌

For questions or feedback, please use the contact form on the website!

---

**Made with 🌸 for Beauty Lovers**

© 2026 Bloomvelle. All Rights Reserved.