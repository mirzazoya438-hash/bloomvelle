// Product Database
const products = [
    {
        id: 1,
        name: "Korean Glow Serum",
        price: 799,
        category: "skincare",
        image: "https://picsum.photos/300/300?1",
        description: "Brightening serum with K-beauty ingredients"
    },
    {
        id: 2,
        name: "Hair Growth Essence",
        price: 999,
        category: "haircare",
        image: "https://picsum.photos/300/300?2",
        description: "Nourishing essence for hair growth"
    },
    {
        id: 3,
        name: "Glass Skin Sunscreen",
        price: 699,
        category: "sunscreen",
        image: "https://picsum.photos/300/300?3",
        description: "Lightweight SPF 50+ protection"
    },
    {
        id: 4,
        name: "Retinol Night Cream",
        price: 1299,
        category: "skincare",
        image: "https://picsum.photos/300/300?4",
        description: "Anti-aging night cream with retinol"
    },
    {
        id: 5,
        name: "Scalp Massage Oil",
        price: 599,
        category: "haircare",
        image: "https://picsum.photos/300/300?5",
        description: "Herbal oil for scalp health"
    },
    {
        id: 6,
        name: "Mineral Face Sunscreen",
        price: 899,
        category: "sunscreen",
        image: "https://picsum.photos/300/300?6",
        description: "Zinc oxide mineral protection"
    },
    {
        id: 7,
        name: "Hyaluronic Acid Serum",
        price: 849,
        category: "skincare",
        image: "https://picsum.photos/300/300?7",
        description: "Deep hydration serum"
    },
    {
        id: 8,
        name: "Silk Hair Mask",
        price: 749,
        category: "haircare",
        image: "https://picsum.photos/300/300?8",
        description: "Weekly intensive hair treatment"
    },
    {
        id: 9,
        name: "Tinted Sunscreen SPF 40",
        price: 1099,
        category: "sunscreen",
        image: "https://picsum.photos/300/300?9",
        description: "Coverage + protection in one"
    }
];

// Shopping Cart
let cart = JSON.parse(localStorage.getItem('bloomvelleCart')) || [];

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
    updateCartCount();
    
    // Event listeners
    document.getElementById('searchInput').addEventListener('input', filterProducts);
    document.getElementById('categoryFilter').addEventListener('change', filterProducts);
    
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Display Products
function displayProducts(productsToDisplay) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    if (productsToDisplay.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px;">No products found 😞</p>';
        return;
    }

    productsToDisplay.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">₹${product.price}</p>
            <div class="card-buttons">
                <button class="add-btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Filter Products
function filterProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;

    const filtered = products.filter(product => {
        const matchSearch = product.name.toLowerCase().includes(searchTerm) || 
                           product.description.toLowerCase().includes(searchTerm);
        const matchCategory = category === 'all' || product.category === category;
        return matchSearch && matchCategory;
    });

    displayProducts(filtered);
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    updateCartCount();
    showNotification(`${product.name} added to cart! 🛒`);
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    displayCart();
}

// Update Cart Count
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

// Display Cart
function displayCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        cartTotal.textContent = '0';
        return;
    }

    let html = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        html += `
            <div class="cart-item">
                <div class="item-info">
                    <h4>${item.name}</h4>
                    <p>₹${item.price} × ${item.quantity} = <span class="item-price">₹${itemTotal}</span></p>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
    });

    cartItemsContainer.innerHTML = html;
    cartTotal.textContent = total;
}

// Toggle Cart Modal
function toggleCart() {
    const modal = document.getElementById('cartModal');
    if (modal.style.display === 'none' || modal.style.display === '') {
        modal.style.display = 'block';
        displayCart();
    } else {
        modal.style.display = 'none';
    }
}

// Close cart when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('cartModal');
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty! 🛒');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    alert(`Thank you for your purchase! 🎉\n\nTotal: ₹${total}\n\nYour order will be delivered soon 📦`);
    
    // Clear cart
    cart = [];
    saveCart();
    updateCartCount();
    displayCart();
    toggleCart();
}

// Handle Contact Form
function handleContact(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = form.elements[0].value;
    const email = form.elements[1].value;
    const message = form.elements[2].value;

    // Here you would typically send this to a server
    console.log('Contact:', { name, email, message });
    
    alert(`Thank you ${name}! We've received your message 💌\n\nWe'll get back to you at ${email} soon!`);
    form.reset();
}

// Save Cart to LocalStorage
function saveCart() {
    localStorage.setItem('bloomvelleCart', JSON.stringify(cart));
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #c27ba0;
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        z-index: 2000;
        animation: slideDown 0.3s;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from { transform: translateY(-100%); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
    @keyframes slideUp {
        from { transform: translateY(0); opacity: 1; }
        to { transform: translateY(-100%); opacity: 0; }
    }
`;
document.head.appendChild(style);