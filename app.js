// ==========================================================================
// Snack Shack - Application Logic (Vanilla JS)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

// App State
const state = {
    cart: [],
    selectedItemForModal: null,
    menuSearchQuery: '',
    menuActiveTab: 'all'
};

// Constant Menu Database (Strictly Veg and Egg Only)
const MENU_DATA = [
    {
        id: 'veg-vada-pav',
        title: 'Vada Pav Classic Slider',
        category: 'burgers',
        price: 80,
        image: 'assets/images/vada_pav.jpg',
        spice: 2,
        veg: true,
        badge: 'Classic Street',
        description: 'The heartbeat of Mumbai street food. Deep-fried spiced potato dumpling (vada) placed inside a soft butter-toasted bun (pav) laced with dry garlic spice and fresh mint chutney.',
        customizations: [
            { name: 'Grated Amul Cheese', price: 25 },
            { name: 'Extra Pav Bun', price: 15 },
            { name: 'Salted Fried Green Chili', price: 0 }
        ]
    },
    {
        id: 'egg-bhurji-burger',
        title: 'Mumbai Egg Bhurji Burger',
        category: 'burgers',
        price: 150,
        image: 'assets/images/egg_burger.jpg',
        spice: 3,
        veg: false,
        badge: 'Spicy Egg',
        description: 'A street style masterpiece. Spicy scrambled eggs tossed with red onions, bell peppers, tomatoes, and chopped green chilies, stuffed in a butter-toasted burger bun.',
        customizations: [
            { name: 'Cheese Slice', price: 25 },
            { name: 'Extra Butter Scoop', price: 15 }
        ]
    },
    {
        id: 'paneer-keema-pav',
        title: 'Paneer Keema Pav Bun',
        category: 'burgers',
        price: 180,
        image: 'assets/images/keema_pav.jpg',
        spice: 2,
        veg: true,
        badge: 'Chef Special',
        description: 'Fresh minced cottage cheese slow-simmered in a rich tomato, onion, and spiced garlic tawa gravy, served piping hot with buttered soft buns.',
        customizations: [
            { name: 'Extra Pav Bun', price: 20 },
            { name: 'Grated Cheese Overlay', price: 30 }
        ]
    },
    {
        id: 'veg-pav-bhaji-wrap',
        title: 'Pav Bhaji Paratha Wrap',
        category: 'wraps',
        price: 160,
        image: 'assets/images/pav_bhaji.jpg',
        spice: 2,
        veg: true,
        badge: 'Signature',
        description: 'Spiced buttery mashed vegetable gravy (bhaji) wrapped in a warm, flaky, toasted paratha with chopped red onions and fresh mint coriander chutney.',
        customizations: [
            { name: 'Extra Butter Drizzle', price: 15 },
            { name: 'Cheese Roll Upgrade', price: 30 }
        ]
    },
    {
        id: 'egg-baida-roti',
        title: 'Masala Egg Baida Roti',
        category: 'wraps',
        price: 170,
        image: 'assets/images/pav_bhaji.jpg',
        spice: 2,
        veg: false,
        badge: 'Egg Classic',
        description: 'Crispy square envelop paratha stuffed with double whisked eggs, toasted tawa spices, green chilies, and fresh chopped cilantro. Pan-fried to perfection.',
        customizations: [
            { name: 'Grated Amul Cheese', price: 25 },
            { name: 'Tangy Frankie Masala', price: 0 }
        ]
    },
    {
        id: 'egg-double-frankie',
        title: 'Double Egg Masala Frankie',
        category: 'wraps',
        price: 140,
        image: 'assets/images/pav_bhaji.jpg',
        spice: 2,
        veg: false,
        badge: 'Street Roll',
        description: 'Soft tandoori paratha coated with double layers of whipped egg, sprinkled with chatpatta spices, green chili vinegar, and raw red onions.',
        customizations: [
            { name: 'Grated Cheese Roll', price: 25 },
            { name: 'Schezwan Chilli Spread', price: 15 }
        ]
    },
    {
        id: 'paneer-chilli-sub',
        title: 'Paneer Chilli Toasted Sub',
        category: 'subs',
        price: 190,
        image: 'assets/images/paneer_sub.jpg',
        spice: 2,
        veg: true,
        badge: 'Indo-Chinese',
        description: 'Spicy pan-seared paneer cubes tossed in garlic, soy sauce, green bell peppers, and chili glaze, packed inside a warm toasted sub baguette.',
        customizations: [
            { name: 'Double Paneer Fill', price: 40 },
            { name: 'Extra Spicy Schezwan', price: 15 }
        ]
    },
    {
        id: 'spicy-egg-mayo-sub',
        title: 'Spicy Egg Mayo Toast Sub',
        category: 'subs',
        price: 160,
        image: 'assets/images/paneer_sub.jpg',
        spice: 1,
        veg: false,
        badge: 'Toasted Sub',
        description: 'Creamy egg salad made with boiled eggs, cracked black pepper, fresh herbs, and spicy garlic mayonnaise, served toasted with fresh tomatoes and crispy lettuce.',
        customizations: [
            { name: 'Add Cheese Slice', price: 25 },
            { name: 'Pickled Jalapenos', price: 15 }
        ]
    },
    {
        id: 'egg-fried-rice-bowl',
        title: 'Aromatic Egg Fried Rice Bowl',
        category: 'rice',
        price: 175,
        image: 'assets/images/egg_rice.jpg',
        spice: 2,
        veg: false,
        badge: 'Rice Bowl',
        description: 'Fluffy scrambled eggs wok-tossed with aromatic long-grain Basmati rice, chopped spring onions, green beans, and a splash of ginger-soy dressing.',
        customizations: [
            { name: 'Double Egg Scramble', price: 30 },
            { name: 'Extra Soy Sauce Chilli', price: 5 }
        ]
    },
    {
        id: 'veg-schezwan-rice-bowl',
        title: 'Spicy Veg Schezwan Rice Bowl',
        category: 'rice',
        price: 165,
        image: 'assets/images/egg_rice.jpg',
        spice: 3,
        veg: true,
        badge: 'Spicy Rice',
        description: 'Hot wok-tossed rice flavored with spicy Schezwan chili oil, loaded with carrots, green beans, cabbage, bell peppers, and spring greens.',
        customizations: [
            { name: 'Add Paneer Cubes', price: 40 },
            { name: 'Less Chili Standard', price: 0 }
        ]
    },
    {
        id: 'masala-fries',
        title: 'Bombay Masala Crispy Fries',
        category: 'drinks',
        price: 110,
        image: 'assets/images/masala_fries.jpg',
        spice: 2,
        veg: true,
        badge: 'Crispy Side',
        description: 'Golden skin-on potato wedges tossed in our special chaat masala spice blend, served hot next to garlic dipping sauce.',
        customizations: [
            { name: 'Amul Cheese Melt', price: 30 },
            { name: 'Schezwan Chili Mayo', price: 15 }
        ]
    },
    {
        id: 'masala-chai',
        title: 'Cutting Masala Chai',
        category: 'drinks',
        price: 70,
        image: 'assets/images/masala_chai.jpg',
        spice: 0,
        veg: true,
        badge: 'Traditional',
        description: 'Strong, aromatic milk tea simmered with fresh ginger, cardamom pods, cinnamon, and pepper. Authentic taste.',
        customizations: [
            { name: 'No Sugar Standard', price: 0 },
            { name: 'Extra Ginger Kick', price: 5 }
        ]
    }
];

// ==========================================================================
// Initialization
// ==========================================================================
function initApp() {
    setupScrollHeader();
    setupMobileMenu();
    setupCartToggle();
    renderFeaturedItems();
    renderMenuGrid();
    setupMenuFilter();
    setupTestimonialSlider();
    setupModalEvents();
    setupForms();
}

// ==========================================================================
// Layout & Header Navigation
// ==========================================================================
function setupScrollHeader() {
    const header = document.querySelector('.header');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        let currentSec = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                currentSec = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSec}`) {
                link.classList.add('active');
            }
        });
    });
}

function setupMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const menu = document.querySelector('.nav-menu');
    const links = document.querySelectorAll('.nav-link');
    
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        menu.classList.toggle('active');
    });
    
    links.forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            menu.classList.remove('active');
        });
    });
}

// Helper: Custom Veg and Egg Badge HTML Renderer
function getItemBadgeHtml(item) {
    if (item.veg) {
        return `
            <div class="card-badge veg">
                <span class="card-badge-dot"></span>
                <span>Veg</span>
            </div>
        `;
    } else {
        return `
            <div class="card-badge egg">
                <span class="card-badge-dot"></span>
                <span>Egg</span>
            </div>
        `;
    }
}

// ==========================================================================
// Featured Items (Render dynamic lists)
// ==========================================================================
function renderFeaturedItems() {
    const container = document.querySelector('.featured-grid');
    if (!container) return;
    
    // Pick three signature cards
    const signatures = MENU_DATA.slice(0, 3);
    
    container.innerHTML = signatures.map(item => `
        <div class="featured-card" data-aos="fade-up">
            <div class="card-img-box">
                <img src="${item.image}" alt="${item.title}" loading="lazy">
                ${getItemBadgeHtml(item)}
            </div>
            <div class="card-content">
                <div class="card-meta">
                    <span class="card-category">${item.category}</span>
                    <div class="card-spice">
                        ${renderSpiceChilies(item.spice)}
                    </div>
                </div>
                <h3 class="card-title">${item.title}</h3>
                <p class="card-desc">${item.description}</p>
                <div class="card-footer">
                    <span class="card-price">₹${item.price}</span>
                    
                </div>
            </div>
        </div>
    `).join('');
    
    container.querySelectorAll('.btn-card-add').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const itemId = btn.getAttribute('data-id');
            openFoodDetailsModal(itemId);
        });
    });
}

function renderSpiceChilies(level) {
    let html = '';
    for (let i = 1; i <= 3; i++) {
        const filled = i <= level ? 'filled' : '';
        html += `
            <svg class="${filled}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2C11.5 2 11 2.5 11 3C11 3.5 11.5 4 12 4C14.8 4 17 6.2 17 9C17 10.9 16 12.6 14.4 13.5C14.1 13.7 13.9 14 13.9 14.4C13.9 15.5 13.4 16.5 12.6 17.1L10.7 18.5L8.5 16.3C7.6 15.4 7.1 14.2 7.1 12.9V9C7.1 6.2 9.3 4 12 4C12.6 4 13 3.5 13 3C13 2.5 12.6 2 12 2ZM12 6C10.3 6 9 7.3 9 9V12.9C9 13.7 9.3 14.5 9.9 15.1L12 17.2L14.1 15.1C15.3 13.9 16 12.2 16 10.5C16 8 14.2 6 12 6Z"/>
            </svg>
        `;
    }
    return html;
}

// ==========================================================================
// Interactive Full Menu Component
// ==========================================================================
function setupMenuFilter() {
    const searchInput = document.querySelector('.menu-search-input');
    const tabs = document.querySelectorAll('.tab-btn');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            state.menuSearchQuery = e.target.value.toLowerCase().trim();
            renderMenuGrid();
        });
    }
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            state.menuActiveTab = tab.getAttribute('data-tab');
            renderMenuGrid();
        });
    });
}

function renderMenuGrid() {
    const grid = document.querySelector('.menu-grid');
    if (!grid) return;
    
    const filtered = MENU_DATA.filter(item => {
        const matchesCategory = state.menuActiveTab === 'all' || item.category === state.menuActiveTab;
        const matchesSearch = item.title.toLowerCase().includes(state.menuSearchQuery) || 
                              item.description.toLowerCase().includes(state.menuSearchQuery) ||
                              item.category.toLowerCase().includes(state.menuSearchQuery);
        return matchesCategory && matchesSearch;
    });
    
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                <h3>No Items Found</h3>
                <p>Try clearing your search or picking another category.</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = filtered.map(item => `
        <div class="menu-item" data-id="${item.id}">
            <div class="menu-item-img-box">
                <img src="${item.image}" alt="${item.title}" loading="lazy">
                ${getItemBadgeHtml(item)}
            </div>
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h4 class="menu-item-title">${item.title}</h4>
                    <div class="card-spice">
                        ${renderSpiceChilies(item.spice)}
                    </div>
                </div>
                <p class="menu-item-desc">${item.description}</p>
                <div class="menu-item-footer">
                    <span class="menu-item-price">₹${item.price}</span>
                    
                </div>
            </div>
        </div>
    `).join('');
    
    grid.querySelectorAll('.menu-item').forEach(card => {
        card.addEventListener('click', (e) => {
            const isAddButton = e.target.closest('.btn-card-add');
            if (!isAddButton) {
                const itemId = card.getAttribute('data-id');
                openFoodDetailsModal(itemId);
            }
        });
    });
    
    grid.querySelectorAll('.btn-card-add').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const itemId = btn.getAttribute('data-id');
            openFoodDetailsModal(itemId);
        });
    });
}

// ==========================================================================
// Testimonial Carousel Component
// ==========================================================================
function setupTestimonialSlider() {
    const track = document.querySelector('.testimonial-track');
    const slides = Array.from(document.querySelectorAll('.testimonial-slide'));
    const dotsContainer = document.querySelector('.slider-dots');
    const prevBtn = document.querySelector('.slider-btn-prev');
    const nextBtn = document.querySelector('.slider-btn-next');
    
    if (!track || slides.length === 0) return;
    
    let currentIndex = 0;
    let timer = null;
    
    dotsContainer.innerHTML = slides.map((_, i) => `
        <button class="slider-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Go to slide ${i+1}"></button>
    `).join('');
    
    const dots = Array.from(dotsContainer.querySelectorAll('.slider-dot'));
    
    function moveToSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        
        currentIndex = index;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        dots.forEach(d => d.classList.remove('active'));
        dots[currentIndex].classList.add('active');
        
        resetAutoplay();
    }
    
    prevBtn.addEventListener('click', () => moveToSlide(currentIndex - 1));
    nextBtn.addEventListener('click', () => moveToSlide(currentIndex + 1));
    
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-index'));
            moveToSlide(index);
        });
    });
    
    function startAutoplay() {
        timer = setInterval(() => {
            moveToSlide(currentIndex + 1);
        }, 6000);
    }
    
    function resetAutoplay() {
        clearInterval(timer);
        startAutoplay();
    }
    
    startAutoplay();
}

// ==========================================================================
// Cart System (State Management, Sidebar UI, Checkout Flow)
// ==========================================================================
function setupCartToggle() {
    const toggle = document.querySelector('.cart-toggle');
    const closeBtn = document.querySelector('.cart-close-btn');
    const overlay = document.querySelector('.cart-overlay');
    
    if (toggle) {
        toggle.addEventListener('click', () => {
            overlay.classList.add('active');
            renderCart();
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            overlay.classList.remove('active');
        });
    }
    
    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
            }
        });
    }
    
    const checkoutBtn = document.querySelector('.btn-checkout');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (state.cart.length === 0) return;
            overlay.classList.remove('active');
            openCheckoutSuccessInvoice();
        });
    }
}

function addToCart(itemId, quantity, selectedCustomizations) {
    const itemData = MENU_DATA.find(i => i.id === itemId);
    if (!itemData) return;
    
    const customizationsHash = getCustomizationsHash(selectedCustomizations);
    const existingIndex = state.cart.findIndex(i => i.id === itemId && i.customizationsHash === customizationsHash);
    
    if (existingIndex > -1) {
        state.cart[existingIndex].quantity += quantity;
    } else {
        const extraCost = selectedCustomizations.reduce((acc, curr) => acc + curr.price, 0);
        state.cart.push({
            id: itemId,
            title: itemData.title,
            image: itemData.image,
            basePrice: itemData.price,
            extraCost: extraCost,
            unitPrice: itemData.price + extraCost,
            quantity: quantity,
            customizations: selectedCustomizations,
            customizationsHash: customizationsHash
        });
    }
    
    updateCartBadge();
    showToast(`${itemData.title} added to cart!`);
}

function getCustomizationsHash(customizations) {
    return customizations
        .map(c => c.name)
        .sort()
        .join('|');
}

// Update shopping cart badge
function updateCartBadge() {
    const badge = document.querySelector('.cart-count');
    const totalItems = state.cart.reduce((acc, curr) => acc + curr.quantity, 0);
    
    if (badge) {
        badge.textContent = totalItems;
        badge.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

function renderCart() {
    const container = document.querySelector('.cart-items-container');
    const subtotalVal = document.getElementById('cart-subtotal-val');
    const taxVal = document.getElementById('cart-tax-val');
    const totalVal = document.getElementById('cart-total-val');
    const checkoutBtn = document.querySelector('.btn-checkout');
    
    if (!container) return;
    
    if (state.cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty-state">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z"/></svg>
                <h3>Your cart is empty</h3>
                <p>Add some spicy snacks and fresh rolls from our menu to get started!</p>
            </div>
        `;
        if (subtotalVal) subtotalVal.textContent = '₹0';
        if (taxVal) taxVal.textContent = '₹0';
        if (totalVal) totalVal.textContent = '₹0';
        if (checkoutBtn) checkoutBtn.disabled = true;
        return;
    }
    
    if (checkoutBtn) checkoutBtn.disabled = false;
    
    container.innerHTML = state.cart.map((item, idx) => {
        const custText = item.customizations.length > 0 
            ? `+ ${item.customizations.map(c => c.name).join(', ')}` 
            : '';
            
        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}" class="cart-item-img">
                <div class="cart-item-details">
                    <div class="cart-item-header">
                        <div>
                            <h4 class="cart-item-title">${item.title}</h4>
                            ${custText ? `<div class="cart-item-customizations">${custText}</div>` : ''}
                        </div>
                        <button class="cart-item-remove-btn" data-index="${idx}" aria-label="Remove item">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                        </button>
                    </div>
                    <div class="cart-item-footer">
                        <div class="cart-item-qty">
                            <button class="qty-btn dec" data-index="${idx}">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2z"/></svg>
                            </button>
                            <span class="qty-num">${item.quantity}</span>
                            <button class="qty-btn inc" data-index="${idx}">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                            </button>
                        </div>
                        <span class="cart-item-price">₹${item.unitPrice * item.quantity}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    container.querySelectorAll('.qty-btn.dec').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.getAttribute('data-index'));
            adjustCartQty(idx, -1);
        });
    });
    container.querySelectorAll('.qty-btn.inc').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.getAttribute('data-index'));
            adjustCartQty(idx, 1);
        });
    });
    container.querySelectorAll('.cart-item-remove-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.getAttribute('data-index'));
            removeCartItem(idx);
        });
    });
    
    const subtotal = state.cart.reduce((acc, curr) => acc + (curr.unitPrice * curr.quantity), 0);
    const packagingTax = 15;
    const GST = Math.round(subtotal * 0.05);
    const grandTotal = subtotal + packagingTax + GST;
    
    if (subtotalVal) subtotalVal.textContent = `₹${subtotal}`;
    if (taxVal) taxVal.textContent = `₹${packagingTax + GST}`;
    if (totalVal) totalVal.textContent = `₹${grandTotal}`;
}

function adjustCartQty(index, change) {
    if (index < 0 || index >= state.cart.length) return;
    
    state.cart[index].quantity += change;
    
    if (state.cart[index].quantity <= 0) {
        state.cart.splice(index, 1);
    }
    
    updateCartBadge();
    renderCart();
}

function removeCartItem(index) {
    if (index < 0 || index >= state.cart.length) return;
    state.cart.splice(index, 1);
    updateCartBadge();
    renderCart();
}

// ==========================================================================
// Details Modal (Customizations selection)
// ==========================================================================
function setupModalEvents() {
    const overlay = document.querySelector('.modal-overlay');
    const closeBtn = document.querySelector('.modal-close-btn');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            overlay.classList.remove('active');
        });
    }
    
    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
            }
        });
    }
}

function openFoodDetailsModal(itemId) {
    const item = MENU_DATA.find(i => i.id === itemId);
    if (!item) return;
    
    state.selectedItemForModal = item;
    const overlay = document.getElementById('details-modal');
    if (!overlay) return;
    
    const customizationsHtml = item.customizations && item.customizations.length > 0 
        ? `
            <div class="customization-section">
                <h4 class="customization-title">Customize Order</h4>
                <div class="customization-options">
                    ${item.customizations.map((c, idx) => `
                        <label class="checkbox-label">
                            <input type="checkbox" class="modal-custom-opt" data-index="${idx}" value="${c.name}">
                            <span class="checkbox-custom"></span>
                            <span>${c.name} ${c.price > 0 ? `(+₹${c.price})` : ''}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        ` : '';
        
    overlay.querySelector('.modal-container').innerHTML = `
        <button class="modal-close-btn" aria-label="Close modal">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
        </button>
        <div class="modal-img-box">
            <img src="${item.image}" alt="${item.title}">
            <div class="modal-img-overlay"></div>
        </div>
        <div class="modal-body">
            <div class="modal-meta">
                ${getItemBadgeHtml(item)}
                <span style="font-size:0.85rem; color:var(--color-secondary); font-weight:700; text-transform:uppercase;">
                    ${item.category}
                </span>
            </div>
            <h3 class="modal-title">${item.title}</h3>
            <p class="modal-desc">${item.description}</p>
            
            ${customizationsHtml}
            
            <div class="modal-footer">
                <span class="card-price" id="modal-item-price">₹${item.price}</span>
                <button class="btn btn-primary" id="btn-modal-add-to-cart">Add to Cart</button>
            </div>
        </div>
    `;
    
    overlay.querySelector('.modal-close-btn').addEventListener('click', () => {
        overlay.classList.remove('active');
    });
    
    const checkboxes = overlay.querySelectorAll('.modal-custom-opt');
    const priceDisplay = overlay.querySelector('#modal-item-price');
    
    const updateModalPrice = () => {
        let extra = 0;
        checkboxes.forEach(cb => {
            if (cb.checked) {
                const idx = parseInt(cb.getAttribute('data-index'));
                extra += item.customizations[idx].price;
            }
        });
        priceDisplay.textContent = `₹${item.price + extra}`;
    };
    
    checkboxes.forEach(cb => cb.addEventListener('change', updateModalPrice));
    
    overlay.querySelector('#btn-modal-add-to-cart').addEventListener('click', () => {
        const selectedCustomizations = [];
        checkboxes.forEach(cb => {
            if (cb.checked) {
                const idx = parseInt(cb.getAttribute('data-index'));
                selectedCustomizations.push(item.customizations[idx]);
            }
        });
        
        addToCart(item.id, 1, selectedCustomizations);
        overlay.classList.remove('active');
    });
    
    overlay.classList.add('active');
}

// ==========================================================================
// Checkout Success Invoice generator (Confetti + Modal)
// ==========================================================================
function openCheckoutSuccessInvoice() {
    const overlay = document.getElementById('details-modal');
    if (!overlay) return;
    
    const invoiceId = 'SHACK-' + Math.floor(100000 + Math.random() * 900000);
    const dateStr = new Date().toLocaleDateString('en-IN', {
        year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });
    
    const subtotal = state.cart.reduce((acc, curr) => acc + (curr.unitPrice * curr.quantity), 0);
    const packCharge = 15;
    const GST = Math.round(subtotal * 0.05);
    const grandTotal = subtotal + packCharge + GST;
    
    const itemsHtml = state.cart.map(item => `
        <div class="invoice-row" style="color: var(--text-secondary); margin-bottom: 0.5rem;">
            <span>${item.title} (x${item.quantity})</span>
            <span>₹${item.unitPrice * item.quantity}</span>
        </div>
    `).join('');
    
    overlay.querySelector('.modal-container').innerHTML = `
        <div class="invoice-container">
            <div class="invoice-header">
                <svg class="invoice-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <h3 class="invoice-title">Order Placed Successfully!</h3>
                <span class="invoice-id">Receipt ID: ${invoiceId}</span>
            </div>
            <div class="invoice-body">
                <div class="invoice-details">
                    <div class="invoice-row">
                        <span style="color:var(--text-muted);">Date & Time</span>
                        <span style="font-weight:600;">${dateStr}</span>
                    </div>
                    <div class="invoice-row">
                        <span style="color:var(--text-muted);">Status</span>
                        <span style="font-weight:700; color:var(--color-green);">PREPARING FRESH IN KITCHEN</span>
                    </div>
                    <div style="border-top:1px dashed var(--border-color); margin:1rem 0;"></div>
                    
                    ${itemsHtml}
                    
                    <div style="border-top:1px dashed var(--border-color); margin:1rem 0;"></div>
                    <div class="invoice-row" style="font-size:0.875rem; color:var(--text-muted);">
                        <span>Subtotal</span>
                        <span>₹${subtotal}</span>
                    </div>
                    <div class="invoice-row" style="font-size:0.875rem; color:var(--text-muted);">
                        <span>Taxes & Packing</span>
                        <span>₹${packCharge + GST}</span>
                    </div>
                    <div class="invoice-row total-row">
                        <span>Total Paid</span>
                        <span>₹${grandTotal}</span>
                    </div>
                </div>
            </div>
            <div class="invoice-footer">
                <button class="btn btn-primary btn-invoice-done">Done & Track Order</button>
            </div>
        </div>
    `;
    
    overlay.querySelector('.btn-invoice-done').addEventListener('click', () => {
        overlay.classList.remove('active');
        state.cart = [];
        updateCartBadge();
    });
    
    overlay.classList.add('active');
    triggerConfetti();
}

// ==========================================================================
// Contact forms submission actions
// ==========================================================================
function setupForms() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                showToast('Thank you! Snack Shack will get back to you shortly.');
                contactForm.reset();
                submitBtn.textContent = 'Submit Message';
                submitBtn.disabled = false;
            }, 1500);
        });
    }
}

// ==========================================================================
// Toast Notifications helper
// ==========================================================================
function showToast(message) {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        Object.assign(container.style, {
            position: 'fixed',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: '15000',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            pointerEvents: 'none'
        });
        document.body.appendChild(container);
    }
    
    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.textContent = message;
    
    Object.assign(toast.style, {
        backgroundColor: 'var(--bg-secondary)',
        color: 'var(--text-primary)',
        border: '1px solid var(--color-secondary)',
        padding: '0.75rem 1.5rem',
        borderRadius: 'var(--radius-full)',
        boxShadow: 'var(--shadow-md)',
        fontSize: '0.9rem',
        fontWeight: '600',
        animation: 'fadeInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1), fadeOut 0.3s cubic-bezier(0.16, 1, 0.3, 1) 2.7s forwards',
        whiteSpace: 'nowrap',
        pointerEvents: 'auto'
    });
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
        if (container.children.length === 0) {
            container.remove();
        }
    }, 3000);
}

// Add CSS keyframe for toast fadeout dynamically if not in css file
if (!document.querySelector('#toast-keyframes')) {
    const style = document.createElement('style');
    style.id = 'toast-keyframes';
    style.innerHTML = `
        @keyframes fadeOut {
            to { opacity: 0; transform: translate(-50%, 20px) scale(0.9); }
        }
    `;
    document.head.appendChild(style);
}

// ==========================================================================
// Confetti Animation Effect helper
// ==========================================================================
function triggerConfetti() {
    let canvas = document.querySelector('.confetti-canvas');
    if (!canvas) {
        canvas = document.createElement('canvas');
        canvas.className = 'confetti-canvas';
        document.body.appendChild(canvas);
    }
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const colors = ['#e63946', '#ffb703', '#fb8500', '#4ade80', '#3b82f6'];
    const confettiCount = 150;
    const confettiParticles = [];
    
    class Confetti {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height - canvas.height;
            this.size = Math.random() * 8 + 5;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.speed = Math.random() * 4 + 3;
            this.angle = Math.random() * 360;
            this.spinSpeed = Math.random() * 4 - 2;
        }
        
        update() {
            this.y += this.speed;
            this.angle += this.spinSpeed;
            this.x += Math.sin(this.y * 0.01) * 0.5;
        }
        
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle * Math.PI / 180);
            ctx.fillStyle = this.color;
            ctx.fillRect(-this.size/2, -this.size/2, this.size, this.size);
            ctx.restore();
        }
    }
    
    for (let i = 0; i < confettiCount; i++) {
        confettiParticles.push(new Confetti());
    }
    
    let animationId;
    let frames = 0;
    
    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        let activeParticles = 0;
        confettiParticles.forEach(p => {
            p.update();
            p.draw();
            if (p.y < canvas.height) {
                activeParticles++;
            }
        });
        
        frames++;
        
        if (activeParticles > 0 && frames < 200) {
            animationId = requestAnimationFrame(animateConfetti);
        } else {
            cancelAnimationFrame(animationId);
            canvas.remove();
        }
    }
    
    animateConfetti();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}
