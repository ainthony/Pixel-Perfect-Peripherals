// Product database
const allProducts = {
    keyboards: [
        {
            id: 1,
            name: "Pixel Perfect 60% Compact Mechanical Gaming Keyboard",
            category: "keyboards",
            price: 1799,
            rating: 4.7,
            reviews: 56,
            quantity: 50,
            imageUrl: "keyboardproduct4.png",
            description: "Ultra-compact 60% form factor mechanical keyboard with hot-swappable switches. Choose between Red or Brown switches for your perfect typing and gaming experience.",
            specs: [
                "60% compact form factor",
                "Hot-swappable Red or Brown switches",
                "Per-key RGB lighting with 16.8 million colors",
                "Aircraft-grade aluminum frame",
                "Detachable USB-C cable",
                "N-key rollover anti-ghosting"
            ]
        },
        {
            id: 2,
            name: "Pixel Perfect 65% Elite Mechanical Gaming Keyboard",
            category: "keyboards",
            price: 1999,
            rating: 4.8,
            reviews: 72,
            quantity: 50,
            imageUrl: "keyboardproduct3.png",
            description: "Compact yet functional 65% layout with arrow keys and hot-swappable switches. Available with Red, Brown, or Blue switches to match your preferences.",
            specs: [
                "65% layout with dedicated arrow keys",
                "Hot-swappable Red, Brown, or Blue switches",
                "Per-key RGB lighting with effects",
                "Double-shot PBT keycaps",
                "Programmable macros",
                "Aluminum top plate for durability"
            ],
        },
        {
            id: 3,
            name: "Pixel Perfect 75% Pro Mechanical Gaming Keyboard",
            category: "keyboards",
            price: 2199,
            rating: 4.9,
            reviews: 50,
            quantity: 50,
            imageUrl: "75%.png",
            description: "Professional-grade 75% layout keyboard with function row and hot-swappable switches. Choose from Red, Brown, or Blue switches for customized performance.",
            specs: [
                "75% layout with function row",
                "Hot-swappable Red, Brown, or Blue switches",
                "Full RGB backlighting with 20+ presets",
                "CNC aluminum frame",
                "USB-C connectivity",
                "Custom programmable keys"
            ],
        },
        {
            id: 4,
            name: "Pixel Perfect 60% Ultra-Slim Low-Profile Mechanical Keyboard",
            category: "keyboards",
            price: 2499,
            rating: 4.6,
            reviews: 64,
            quantity: 50,
            imageUrl: "slim.png",
            description: "Ultra-thin design with special linear low-profile switches for rapid actuation and minimal travel distance. Perfect for gamers seeking speed and professionals wanting comfort.",
            specs: [
                "Low-profile special linear switches",
                "60% layout in slim form factor",
                "Ultra-thin keycaps",
                "Multi-device Bluetooth connectivity",
                "Backlit keys with dynamic effects",
                "45-hour battery life"
            ],
        },
        {
            id: 5,
            name: "Pixel Perfect TKL Precision Mechanical Gaming Keyboard",
            category: "keyboards",
            price: 2299,
            rating: 4.7,
            reviews: 91,
            quantity: 50,
            imageUrl: "pixel perfect mechanical gaming keyboard.png",
            description: "Tenkeyless design saves space while maintaining full functionality. Available with Red or Brown switches for gaming or typing preference.",
            specs: [
                "Tenkeyless layout (87 keys)",
                "Red or Brown hot-swappable switches",
                "Per-key RGB illumination",
                "Dedicated media controls",
                "Magnetic wrist rest included",
                "Military-grade aluminum construction"
            ],
        },
        {
            id: 6,
            name: "Pixel Perfect Full-Size Command Mechanical Gaming Keyboard",
            category: "keyboards",
            price: 2399,
            rating: 4.7,
            reviews: 83,
            quantity: 50,
            imageUrl: "full.png",
            description: "Complete full-size layout with numpad and all function keys. Choose between tactile Brown or clicky Blue switches for your ideal typing experience.",
            specs: [
                "Full-size 104-key layout",
                "Brown or Blue hot-swappable switches",
                "RGB backlight with 16.8 million colors",
                "Dedicated volume knob",
                "USB passthrough port",
                "Onboard memory for profiles"
            ],
        },
    ],
    
    mice: [
        {
            id: 7,
            name: "Pixel Perfect TouchPad Pro Wireless Bluetooth Trackpad",
            category: "mice",
            price: 1599,
            rating: 4.5,
            reviews: 42,
            quantity: 50,
            imageUrl: "mouseproduct2.png",
            description: "Precision glass trackpad with multi-touch gesture support. Seamlessly connect to any Bluetooth-enabled device for intuitive navigation.",
            specs: [
                "Multi-touch glass surface",
                "Bluetooth 5.0 connectivity",
                "Rechargeable battery (45 days per charge)",
                "Gesture support for productivity",
                "Force touch capability",
                "Aluminum construction"
            ]
        },
        {
            id: 8,
            name: "Pixel Perfect Ambidextrous Wired Gaming Mouse",
            category: "mice",
            price: 899,
            rating: 4.6,
            reviews: 58,
            quantity: 50,
            imageUrl: "mouseproduct3.png",
            description: "Symmetrical design for both left and right-handed gamers. High-precision sensor and programmable buttons for competitive gaming advantage.",
            specs: [
                "16,000 DPI optical sensor",
                "Symmetrical design",
                "8 programmable buttons",
                "RGB lighting with effects",
                "PTFE feet for smooth gliding",
                "Lightweight at 78g"
            ],
        },
        {
            id: 9,
            name: "Pixel Perfect Ergonomic Wired Gaming Mouse",
            category: "mice",
            price: 999,
            rating: 4.8,
            reviews: 67,
            quantity: 50,
            imageUrl: "mouseproduct4.png",
            description: "Ergonomically shaped for right-handed users with contoured grip for extended gaming sessions. Advanced sensor for pixel-perfect tracking.",
            specs: [
                "20,000 DPI sensor with 1000Hz polling",
                "Right-handed ergonomic design",
                "10 programmable buttons",
                "Adjustable weight system",
                "RGB lighting zones",
                "Braided cable"
            ],
        },
        {
            id: 10,
            name: "Pixel Perfect Office Standard Wired Mouse",
            category: "mice",
            price: 399,
            rating: 4.4,
            reviews: 39,
            quantity: 50,
            imageUrl: "mouseproduct5.png",
            description: "Reliable and comfortable mouse for everyday office use. Precise tracking and ergonomic design for all-day comfort.",
            specs: [
                "3,200 DPI optical sensor",
                "3 buttons with scroll wheel",
                "Ergonomic shape",
                "Plug and play USB connectivity",
                "Silent clicking mechanism",
                "Durable construction"
            ],
        },
        {
            id: 11,
            name: "Pixel Perfect Ambidextrous Wireless Gaming Mouse",
            category: "mice",
            price: 1399,
            rating: 4.7,
            reviews: 72,
            quantity: 50,
            imageUrl: "mouseproduct3.png",
            description: "Freedom with precision. Symmetrical wireless gaming mouse with zero lag and battery life that lasts through your longest gaming sessions.",
            specs: [
                "25,000 DPI sensor",
                "Symmetrical design for all users",
                "2.4GHz wireless with 1ms response time",
                "70-hour battery life",
                "8 programmable buttons",
                "Lightweight 74g design"
            ],
        },
        {
            id: 12,
            name: "Pixel Perfect Ergonomic Wireless Gaming Mouse",
            category: "mice",
            price: 1599,
            rating: 4.9,
            reviews: 85,
            quantity: 50,
            imageUrl: "pixel perfect precision wireless mouse.png",
            description: "The ultimate wireless ergonomic gaming mouse with contoured design for right-handed users. Exceptional battery life and advanced sensor technology.",
            specs: [
                "25,000 DPI high-precision sensor",
                "Ergonomic right-handed design",
                "100-hour battery life",
                "11 programmable buttons",
                "Dual connectivity: 2.4GHz and Bluetooth",
                "Customizable weight system"
            ],
        },
    ],
    
    monitors: [
        {
            id: 13,
            name: "Pixel Perfect Vision 20\" 60Hz Monitor",
            category: "monitors",
            price: 3999,
            rating: 4.2,
            reviews: 31,
            quantity: 50,
            imageUrl: "pixel perfect 27 4k hdr monitor.png",
            description: "Entry-level 20-inch monitor with 60Hz refresh rate. Perfect for office work and casual use with crisp visuals and eye-care technology.",
            specs: [
                "20-inch IPS panel",
                "1920x1080 Full HD resolution",
                "60Hz refresh rate",
                "5ms response time",
                "Blue light filter",
                "HDMI and VGA ports"
            ]
        },
        {
            id: 14,
            name: "Pixel Perfect Vision 21\" 75Hz Monitor",
            category: "monitors",
            price: 4499,
            rating: 4.3,
            reviews: 43,
            quantity: 50,
            imageUrl: "21 75.png",
            description: "21-inch display with 75Hz refresh rate for smoother visuals. Great for everyday computing and light gaming with enhanced color accuracy.",
            specs: [
                "21-inch IPS display",
                "1920x1080 Full HD resolution",
                "75Hz refresh rate",
                "4ms response time",
                "Adaptive Sync support",
                "99% sRGB color coverage"
            ],
        },
        {
            id: 15,
            name: "Pixel Perfect Vision 22\" 120Hz Gaming Monitor",
            category: "monitors",
            price: 5999,
            rating: 4.5,
            reviews: 56,
            quantity: 50,
            imageUrl: "22 120.png",
            description: "22-inch gaming monitor with 120Hz refresh rate for fluid gameplay. Experience reduced motion blur and sharper visuals in fast-paced games.",
            specs: [
                "22-inch VA panel",
                "1920x1080 Full HD resolution",
                "120Hz refresh rate",
                "1ms MPRT response time",
                "AMD FreeSync Premium",
                "178° viewing angles"
            ],
        },
        {
            id: 16,
            name: "Pixel Perfect Vision 22\" 144Hz Gaming Monitor",
            category: "monitors",
            price: 6499,
            rating: 4.7,
            reviews: 64,
            quantity: 50,
            imageUrl: "22 144.png",
            description: "Step up your game with this 22-inch monitor featuring a 144Hz refresh rate. Enjoy butter-smooth gameplay with HDR support for enhanced visuals.",
            specs: [
                "22-inch IPS panel",
                "1920x1080 Full HD resolution",
                "144Hz refresh rate",
                "1ms GTG response time",
                "HDR10 support",
                "G-Sync and FreeSync compatible"
            ],
        },
        {
            id: 17,
            name: "Pixel Perfect Vision 24\" 240Hz Elite Gaming Monitor",
            category: "monitors",
            price: 8999,
            rating: 4.8,
            reviews: 78,
            quantity: 50,
            imageUrl: "24 240.png",
            description: "Professional esports-grade 24-inch monitor with ultra-fast 240Hz refresh rate. Gain competitive advantage with incredible smoothness and clarity.",
            specs: [
                "24-inch IPS panel",
                "1920x1080 Full HD resolution",
                "240Hz refresh rate",
                "0.5ms response time",
                "G-Sync and FreeSync Premium Pro",
                "RGB lighting on rear panel"
            ],
        },
        {
            id: 18,
            name: "Pixel Perfect Vision 25\" 360Hz Pro Gaming Monitor",
            category: "monitors",
            price: 12999,
            rating: 4.9,
            reviews: 86,
            quantity: 69,
            imageUrl: "25 360.png",
            description: "Ultimate competitive gaming monitor with lightning-fast 360Hz refresh rate. Experience the pinnacle of esports display technology with unmatched response times.",
            specs: [
                "25-inch Fast IPS panel",
                "1920x1080 Full HD resolution",
                "360Hz refresh rate",
                "0.3ms response time",
                "NVIDIA Reflex Latency Analyzer",
                "Esports vibrance mode"
            ],
        },
        {
            id: 19,
            name: "Pixel Perfect Vision Ultra 34\" Curved Ultrawide Monitor",
            category: "monitors",
            price: 14999,
            rating: 4.8,
            reviews: 72,
            quantity: 50,
            imageUrl: "curved.png",
            description: "Immersive 34-inch curved ultrawide monitor for gaming and productivity. Expand your view with a 21:9 aspect ratio and stunning visuals.",
            specs: [
                "34-inch curved VA panel (1500R)",
                "3440x1440 UWQHD resolution",
                "144Hz refresh rate",
                "1ms MPRT response time",
                "HDR400 certified",
                "Picture-by-Picture mode"
            ],
        },
    ],
    
    audio: [
        {
            id: 20,
            name: "Pixel Perfect Audio Standard Desktop Speakers",
            category: "audio",
            price: 999,
            rating: 4.3,
            reviews: 47,
            quantity: 50,
            imageUrl: "audioproducts2.png",
            description: "Crisp and clear desktop speakers with 2.0 stereo sound. Perfect for everyday use with balanced audio reproduction and elegant design.",
            specs: [
                "2.0 stereo configuration",
                "20W total output power",
                "Frequency response: 60Hz - 20kHz",
                "USB-powered with volume control",
                "3.5mm auxiliary input",
                "Wood and fabric construction"
            ]
        },
        {
            id: 21,
            name: "Pixel Perfect Audio Office Wired Headphones",
            category: "audio",
            price: 799,
            rating: 4.2,
            reviews: 38,
            quantity: 50,
            imageUrl: "office.png",
            description: "Comfortable wired headphones for office use with noise isolation. Focus on your work with clear audio and all-day wearing comfort.",
            specs: [
                "40mm dynamic drivers",
                "Padded headband and ear cushions",
                "Passive noise isolation",
                "Inline microphone and controls",
                "3.5mm audio jack",
                "Foldable design for storage"
            ],
        },
        {
            id: 22,
            name: "Pixel Perfect PixPods Wireless Earbuds",
            category: "audio",
            price: 1999,
            rating: 4.6,
            reviews: 89,
            quantity: 50,
            imageUrl: "earbuds.png",
            description: "True wireless earbuds with premium sound quality and extended battery life. Experience freedom with comfortable fit and touch controls.",
            specs: [
                "True wireless design",
                "8mm dynamic drivers",
                "Bluetooth 5.2 connectivity",
                "8-hour battery life (30 with case)",
                "Touch controls and voice assistant",
                "IPX5 water resistance"
            ],
        },
        {
            id: 23,
            name: "Pixel Perfect Audio Performance Wired Gaming Headset",
            category: "audio",
            price: 1799,
            rating: 4.7,
            reviews: 74,
            quantity: 50,
            imageUrl: "wired headset.png",
            description: "High-performance wired gaming headset with virtual surround sound. Experience immersive audio with precision directional sound and crystal-clear microphone.",
            specs: [
                "50mm neodymium drivers",
                "Virtual 7.1 surround sound",
                "Detachable noise-cancelling microphone",
                "Memory foam ear cushions",
                "In-line audio controls",
                "RGB lighting effects"
            ],
        },
        {
            id: 24,
            name: "Pixel Perfect Audio Freedom Wireless Gaming Headphones",
            category: "audio",
            price: 2499,
            rating: 4.8,
            reviews: 92,
            quantity: 50,
            imageUrl: "pixel perfect noise-cancelling wireless headphones.png",
            description: "Dual connectivity headphones with option for wireless or wired connection. Experience premium audio quality with the freedom of wireless or the reliability of wired.",
            specs: [
                "50mm custom-tuned drivers",
                "2.4GHz wireless and 3.5mm wired options",
                "30-hour battery life",
                "Detachable boom microphone",
                "Memory foam padding",
                "Cross-platform compatibility"
            ],
        },
        {
            id: 25,
            name: "Pixel Perfect Audio Essential Wired Earphones",
            category: "audio",
            price: 499,
            rating: 4.1,
            reviews: 53,
            quantity: 50,
            imageUrl: "earphones.png",
            description: "Affordable wired earphones with balanced sound signature. Perfect for everyday listening with comfortable fit and inline microphone.",
            specs: [
                "10mm dynamic drivers",
                "In-line microphone and controls",
                "3.5mm audio jack",
                "Frequency response: 20Hz-20kHz",
                "3 sizes of silicone ear tips",
                "Tangle-resistant cable"
            ],
        },
    ],
    
    accessories: [
        {
            id: 26,
            name: "Pixel Perfect Creator Graphics Tablet with Stylus",
            category: "accessories",
            price: 2999,
            rating: 4.7,
            reviews: 61,
            quantity: 50,
            imageUrl: "drawing.png",
            description: "Professional graphics tablet for digital artists with pressure-sensitive stylus. Create digital art with precision and control on a responsive drawing surface.",
            specs: [
                "10 x 6 inch active area",
                "8192 levels of pressure sensitivity",
                "Battery-free stylus with tilt recognition",
                "Customizable express keys",
                "USB-C connectivity",
                "Compatible with major design software"
            ]
        },
        {
            id: 27,
            name: "Pixel Perfect Type-C to Type-A Premium Cable",
            category: "accessories",
            price: 299,
            rating: 4.5,
            reviews: 46,
            quantity: 100,
            imageUrl: "c.png",
            description: "High-quality braided USB Type-C to Type-A cable for durable and reliable connectivity. Fast charging and data transfer with premium construction.",
            specs: [
                "1.8 meter length",
                "Nylon braided construction",
                "USB 3.1 Gen 2 (10Gbps transfer speed)",
                "Fast charging support (3A)",
                "Gold-plated connectors",
                "Strain relief design"
            ],
        },
        {
            id: 28,
            name: "Pixel Perfect Standard Gaming Mousepad",
            category: "accessories",
            price: 399,
            rating: 4.4,
            reviews: 58,
            quantity: 100,
            imageUrl: "pad.png",
            description: "Premium cloth surface mousepad with optimized texture for precise tracking. Non-slip rubber base keeps it firmly in place during intense gaming sessions.",
            specs: [
                "320 x 270 x 3 mm dimensions",
                "Micro-textured cloth surface",
                "Non-slip rubber base",
                "Stitched edges for durability",
                "Water-resistant coating",
                "Washable design"
            ],
        },
        {
            id: 29,
            name: "Pixel Perfect Touch Control Wireless Trackpad",
            category: "accessories",
            price: 1499,
            rating: 4.6,
            reviews: 52,
            quantity: 50,
            imageUrl: "trackpad.png",
            description: "Advanced wireless trackpad with multi-touch gesture support. Navigate with precision using intuitive gestures on a smooth glass surface.",
            specs: [
                "Multi-touch glass surface",
                "Bluetooth 5.0 connectivity",
                "Rechargeable battery (3 month battery life)",
                "Advanced gesture recognition",
                "Force touch capability",
                "Slim aluminum design"
            ],
        },
        {
            id: 30,
            name: "Pixel Perfect Precision Game Controller",
            category: "accessories",
            price: 1299,
            rating: 4.7,
            reviews: 76,
            quantity: 46,
            imageUrl: "controller.png",
            description: "Professional-grade gaming controller with customizable buttons and triggers. Experience precise control and comfort during extended gaming sessions.",
            specs: [
                "Ergonomic design with textured grips",
                "Hall effect analog sticks",
                "Programmable back buttons",
                "Adjustable trigger stops",
                "Wired and wireless modes",
                "Compatible with PC and consoles"
            ],
        },
        {
            id: 31,
            name: "Pixel Perfect Audio Headphone Display Stand",
            category: "accessories",
            price: 599,
            rating: 4.5,
            reviews: 42,
            quantity: 50,
            imageUrl: "stand.png",
            description: "Elegant headphone stand with built-in USB hub. Display and protect your headphones while adding functionality to your desktop setup.",
            specs: [
                "Aluminum construction",
                "Built-in 3-port USB hub",
                "RGB lighting with effects",
                "Non-slip base",
                "Cable management system",
                "Universal compatibility"
            ],
        }
    ]
};
// Admin credentials
const admins = [
    { username: "marlon.abao", password: "admin123" },
    { username: "ramon.valdestamon", password: "admin123" },
    { username: "francis.balboa", password: "admin123" },
    { username: "emyl.gerona", password: "admin123" },
    { username: "christian.abrigo", password: "admin123" }
];

// Application state
let isLoggedIn = false;
let currentUsername = null;
let cart = [];
let orders = [];
let currentCategory = 'keyboards';
let currentPriceFilter = 'all';
let currentSort = 'popularity';
let currentSection = 'home';
let currentProduct = null;

// DOM Elements
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const productsGrid = document.getElementById('products-grid');
const featuredProductsGrid = document.getElementById('featured-products-grid');
const categoryTabs = document.querySelectorAll('.category-tab');
const categoryBreadcrumb = document.querySelector('.category-breadcrumb');
const categoryTitle = document.getElementById('category-title');
const categoryDescription = document.getElementById('category-description');
const priceFilter = document.getElementById('price-filter');
const sortSelect = document.getElementById('sort-select');
const filterContainer = document.getElementById('filter-container');
const shopNowBtn = document.getElementById('shop-now-btn');
const categoryCards = document.querySelectorAll('.category-card');
const adminLoginBtn = document.getElementById('adminLoginBtn');
const adminLoginModal = document.getElementById('adminLoginModal');
const adminPanelModal = document.getElementById('adminPanelModal');
const closeModal = document.querySelector('.close-modal');
const closeAdminModal = document.querySelector('.close-admin-modal');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const cartIcon = document.getElementById('cartIcon');
const cartDropdown = document.getElementById('cartDropdown');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutModal = document.getElementById('checkoutModal');
const checkoutForm = document.getElementById('checkoutForm');
const orderSummaryItems = document.getElementById('orderSummaryItems');
const orderTotal = document.getElementById('orderTotal');
const downpaymentAmount = document.getElementById('downpaymentAmount');
const orderConfirmationModal = document.getElementById('orderConfirmationModal');
const receiptContent = document.getElementById('receiptContent');
const printReceiptBtn = document.getElementById('printReceiptBtn');
const closeConfirmationBtn = document.getElementById('closeConfirmationBtn');
const productDetailModal = document.getElementById('productDetailModal');
const productDetailContent = document.getElementById('productDetailContent');
const closeProductModal = document.querySelector('.close-product-modal');

// Category metadata
const categoryDescriptions = {
    keyboards: "Experience exceptional typing and gaming with our premium selection of mechanical keyboards featuring customizable RGB lighting, durable construction, and responsive switches.",
    mice: "Elevate your precision and comfort with our range of gaming mice and trackpads designed for both competitive gamers and productivity-focused professionals.",
    monitors: "Immerse yourself in stunning visuals with our selection of gaming and professional monitors featuring high refresh rates, vibrant colors, and responsive performance.",
    audio: "Experience crystal clear sound with our premium audio peripherals, from immersive gaming headsets to everyday listening solutions.",
    accessories: "Complete your setup with our essential accessories designed to enhance your computing experience and maximize productivity and comfort."
};

const categoryTitles = {
    keyboards: "Gaming Keyboards",
    mice: "Gaming Mice",
    monitors: "Gaming & Professional Monitors",
    audio: "Audio Peripherals",
    accessories: "Essential Accessories"
};

// Utility Functions
function getStarRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '★';
    }
    
    if (halfStar) {
        starsHTML += '½';
    }
    
    return starsHTML;
}

function formatPrice(price) {
    return new Intl.NumberFormat('en-PH', {
        style: 'currency',
        currency: 'PHP',
        currencyDisplay: 'symbol',
        minimumFractionDigits: 0
    }).format(price);
}

function filterByPrice(products, priceRange) {
    switch (priceRange) {
        case 'under-2000': return products.filter(p => p.price < 2000);
        case '2000-2500': return products.filter(p => p.price >= 2000 && p.price <= 2500);
        case 'over-2500': return products.filter(p => p.price > 2500);
        case 'under-1000': return products.filter(p => p.price < 1000);
        case '1000-1500': return products.filter(p => p.price >= 1000 && p.price <= 1500);
        case 'over-1500': return products.filter(p => p.price > 1500);
        case 'under-5000': return products.filter(p => p.price < 5000);
        case '5000-10000': return products.filter(p => p.price >= 5000 && p.price <= 10000);
        case 'over-10000': return products.filter(p => p.price > 10000);
        case '1000-2000': return products.filter(p => p.price >= 1000 && p.price <= 2000);
        case 'over-2000': return products.filter(p => p.price > 2000);
        case 'under-500': return products.filter(p => p.price < 500);
        case '500-1500': return products.filter(p => p.price >= 500 && p.price <= 1500);
        default: return products;
    }
}

function sortProducts(products, sortBy) {
    const sorted = [...products];
    switch (sortBy) {
        case 'price-low': return sorted.sort((a, b) => a.price - b.price);
        case 'price-high': return sorted.sort((a, b) => b.price - a.price);
        case 'rating': return sorted.sort((a, b) => b.rating - a.rating);
        case 'popularity':
        default: return sorted.sort((a, b) => b.reviews - a.reviews);
    }
}

// Product Display Functions
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const stockStatus = product.quantity > 0 ? 
        `<span class="stock-status in-stock">In Stock (${product.quantity})</span>` : 
        '<span class="stock-status out-of-stock">Out of Stock</span>';
    
    card.innerHTML = `
        <div class="product-img">
            <img src="${product.imageUrl}" alt="${product.name}">
        </div>
        <div class="product-card-info">
            <h3 class="product-card-title"><a href="product-detail.html?id=${product.id}&category=${product.category}">${product.name}</a></h3>
            <div class="product-rating">
                <div class="stars">${getStarRating(product.rating)}</div>
                <div class="review-count">(${product.reviews} reviews)</div>
            </div>
            <p class="product-card-description">${product.description}</p>
            <div class="product-card-price">${formatPrice(product.price)}</div>
            <div class="product-stock">${stockStatus}</div>
            <div class="product-card-actions">
                <a href="product-detail.html?id=${product.id}&category=${product.category}" class="view-details">View Details</a>
                <button class="add-to-cart" ${product.quantity <= 0 ? 'disabled' : ''}>Add to Cart</button>
            </div>
        </div>
    `;
    
    return card;
}

function createFeaturedProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const stockStatus = product.quantity > 0 ? 
        `<span class="stock-status in-stock">In Stock (${product.quantity})</span>` : 
        '<span class="stock-status out-of-stock">Out of Stock</span>';
    
    card.innerHTML = `
        <div class="product-img">
            <img src="${product.imageUrl}" alt="${product.name}">
        </div>
        <div class="product-info">
            <div class="product-title">${product.name}</div>
            <div class="product-price">${formatPrice(product.price)}</div>
            <div class="product-stock">${stockStatus}</div>
            <button class="add-to-cart" ${product.quantity <= 0 ? 'disabled' : ''}>Add to Cart</button>
        </div>
    `;
    
    return card;
}

function updateProducts() {
    const products = allProducts[currentCategory] || [];
    let filteredProducts = filterByPrice(products, currentPriceFilter);
    const sortedProducts = sortProducts(filteredProducts, currentSort);
    
    productsGrid.innerHTML = '';
    
    if (sortedProducts.length === 0) {
        const noProductsMessage = document.createElement('div');
        noProductsMessage.className = 'no-products';
        noProductsMessage.textContent = 'No products match your current filters.';
        productsGrid.appendChild(noProductsMessage);
    } else {
        sortedProducts.forEach(product => {
            const card = createProductCard(product);
            productsGrid.appendChild(card);
            
            // Add event listener for view details
            card.querySelector('.view-details').addEventListener('click', (e) => {
                e.preventDefault();
                showProductDetail(product.id, product.category);
            });
            
            // Add to cart button
            card.querySelector('.add-to-cart').addEventListener('click', (e) => {
                const productCard = e.target.closest('.product-card');
                if (productCard) {
                    const productLink = productCard.querySelector('a')?.getAttribute('href');
                    if (productLink) {
                        const urlParams = new URLSearchParams(productLink.split('?')[0]);
                        const id = parseInt(urlParams.get('id'));
                        const product = findProductById(id);
                        
                        if (product) {
                            addToCart(product);
                            e.target.textContent = 'Added!';
                            setTimeout(() => e.target.textContent = 'Add to Cart', 2000);
                        }
                    }
                }
            });
        });
    }
}

function loadFeaturedProducts() {
    if (!featuredProductsGrid) return;
    
    featuredProductsGrid.innerHTML = '';
    const featuredProducts = [];
    
    for (const category in allProducts) {
        if (allProducts[category].length > 0) {
            featuredProducts.push(allProducts[category][0]);
        }
    }
    
    while (featuredProducts.length < 4 && featuredProducts.length > 0) {
        featuredProducts.push(featuredProducts[0]);
    }
    
    featuredProducts.slice(0, 4).forEach(product => {
        const card = createFeaturedProductCard(product);
        featuredProductsGrid.appendChild(card);
        
        // Add to cart button for featured products
        card.querySelector('.add-to-cart').addEventListener('click', (e) => {
            const productCard = e.target.closest('.product-card');
            if (productCard) {
                const productName = productCard.querySelector('.product-title').textContent;
                const product = getAllProductsArray().find(p => p.name === productName);
                
                if (product) {
                    addToCart(product);
                    e.target.textContent = 'Added!';
                    setTimeout(() => e.target.textContent = 'Add to Cart', 2000);
                }
            }
        });
    });
}

function updateFilterOptions() {
    priceFilter.value = 'all';
    sortSelect.value = 'popularity';
    currentPriceFilter = 'all';
    currentSort = 'popularity';

    if (filterContainer && priceFilter) {
        priceFilter.innerHTML = '<option value="all">All Prices</option>';

        switch (currentCategory) {
            case 'keyboards':
                priceFilter.innerHTML += `
                    <option value="under-2000">Under ₱2000</option>
                    <option value="2000-2500">₱2000 - ₱2500</option>
                    <option value="over-2500">Over ₱2500</option>
                `;
                break;
            case 'mice':
                priceFilter.innerHTML += `
                    <option value="under-1000">Under ₱1000</option>
                    <option value="1000-1500">₱1000 - ₱1500</option>
                    <option value="over-1500">Over ₱1500</option>
                `;
                break;
            case 'monitors':
                priceFilter.innerHTML += `
                    <option value="under-5000">Under ₱5000</option>
                    <option value="5000-10000">₱5000 - ₱10000</option>
                    <option value="over-10000">Over ₱10000</option>
                `;
                break;
            case 'audio':
                priceFilter.innerHTML += `
                    <option value="under-1000">Under ₱1000</option>
                    <option value="1000-2000">₱1000 - ₱2000</option>
                    <option value="over-2000">Over ₱2000</option>
                `;
                break;
            case 'accessories':
                priceFilter.innerHTML += `
                    <option value="under-500">Under ₱500</option>
                    <option value="500-1500">₱500 - ₱1500</option>
                    <option value="over-1500">Over ₱1500</option>
                `;
                break;
        }
    }
}

function updateCategoryUI(category) {
    if (categoryBreadcrumb) categoryBreadcrumb.textContent = categoryTitles[category];
    if (categoryTitle) categoryTitle.textContent = categoryTitles[category];
    if (categoryDescription) categoryDescription.textContent = categoryDescriptions[category];
    
    categoryTabs.forEach(tab => {
        tab.classList.toggle('active', tab.getAttribute('data-category') === category);
    });
}

function switchSection(sectionId) {
    currentSection = sectionId;
    sections.forEach(section => section.classList.remove('active'));
    navLinks.forEach(link => link.classList.remove('active'));

    const targetSection = document.getElementById(sectionId);
    if (targetSection) targetSection.classList.add('active');

    const activeNavLink = document.querySelector(`.nav-link[data-section="${sectionId}"]`);
    if (activeNavLink) activeNavLink.classList.add('active');
}

// Product Detail Functions
function showProductDetail(productId, category) {
    currentProduct = allProducts[category].find(p => p.id === productId);
    if (!currentProduct) return;

    const images = [currentProduct.imageUrl];

    productDetailContent.innerHTML = `
        <div class="product-detail-gallery">
            <div class="product-detail-main-image">
                <img src="${currentProduct.imageUrl}" alt="${currentProduct.name}">
            </div>
            ${images.length > 1 ? `
            <div class="product-detail-thumbnails">
                ${images.map((img, index) => `
                    <div class="product-detail-thumbnail ${index === 0 ? 'active' : ''}" data-img="${img}">
                        <img src="${img}" alt="Thumbnail ${index + 1}">
                    </div>
                `).join('')}
            </div>
            ` : ''}
        </div>
        <div class="product-detail-info">
            <h1 class="product-detail-title">${currentProduct.name}</h1>
            <div class="product-rating">
                <div class="stars">${getStarRating(currentProduct.rating)}</div>
                <div class="review-count">(${currentProduct.reviews} reviews)</div>
            </div>
            <div class="product-detail-price">${formatPrice(currentProduct.price)}</div>
            <div class="stock-status ${currentProduct.quantity > 0 ? 'in-stock' : 'out-of-stock'}">
                ${currentProduct.quantity > 0 ? `In Stock (${currentProduct.quantity})` : 'Out of Stock'}
            </div>
            <p class="product-detail-description">${currentProduct.description}</p>
            <div class="product-detail-features">
                <h3>Key Features</h3>
                <ul>
                    ${currentProduct.specs.map(spec => `<li>${spec}</li>`).join('')}
                </ul>
            </div>
            <div class="product-detail-actions">
                <div class="quantity-selector">
                    <label for="quantity">Quantity:</label>
                    <input type="number" id="quantity" class="quantity-input" min="1" value="1" max="${currentProduct.quantity}">
                </div>
                <button class="add-to-cart" ${currentProduct.quantity <= 0 ? 'disabled' : ''}>
                    Add to Cart
                </button>
            </div>
        </div>
    `;

    productDetailModal.style.display = 'block';

    // Add to Cart functionality
    document.querySelector('#productDetailContent .add-to-cart').addEventListener('click', function() {
        const quantity = parseInt(document.getElementById('quantity').value);
        if (quantity > 0 && quantity <= currentProduct.quantity) {
            addToCart({ ...currentProduct }, quantity);
            this.textContent = 'Added!';
            setTimeout(() => {
                this.textContent = 'Add to Cart';
                productDetailModal.style.display = 'none';
            }, 2000);
        }
    });

    // Close modal handler
    closeProductModal.addEventListener('click', () => {
        productDetailModal.style.display = 'none';
    });
}

// Cart and Order Functions
function addToCart(product, quantity = 1) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }
    
    // Update stock
    const productInInventory = findProductById(product.id);
    if (productInInventory) {
        productInInventory.quantity -= quantity;
    }
    
    updateCart();
    showCartNotification(`${quantity} × ${product.name} added to cart`);
}

function showCartNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 10);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => document.body.removeChild(notification), 300);
    }, 3000);
}

function removeFromCart(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        // Return stock
        const product = findProductById(productId);
        if (product) {
            product.quantity == item.quantity;
        }
    }
    
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function updateCart() {
    const cartCount = document.querySelector('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        checkoutBtn.disabled = true;
    } else {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${formatPrice(item.price)} × ${item.quantity}</div>
                </div>
                <button class="cart-item-remove" data-id="${item.id}">×</button>
            `;
            cartItems.appendChild(cartItem);
        });
        checkoutBtn.disabled = false;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = formatPrice(total);
}

function updateOrderSummary() {
    orderSummaryItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const itemElement = document.createElement('div');
        itemElement.className = 'order-summary-item';
        itemElement.innerHTML = `
            <span>${item.name} × ${item.quantity}</span>
            <span>${formatPrice(itemTotal)}</span>
        `;
        orderSummaryItems.appendChild(itemElement);
    });
    
    orderTotal.textContent = formatPrice(total);
    downpaymentAmount.textContent = formatPrice(total * 0.3);
}

function generateReceipt(order) {
    let itemsHTML = '';
    let total = 0;
    
    order.items.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        itemsHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>${formatPrice(item.price)}</td>
                <td>${formatPrice(itemTotal)}</td>
            </tr>
        `;
    });
    
    const downpayment = total * 0.3;
    const balance = total - downpayment;
    
    return `
        <div class="receipt-header">
            <h2>Pixel Perfect Peripherals</h2>
            <p>Order Receipt</p>
        </div>
        
        <div class="receipt-details">
            <p><strong>Order #:</strong> ${order.id}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>Customer:</strong> ${order.customer.name}</p>
            <p><strong>Address:</strong> ${order.customer.address}</p>
            <p><strong>Contact:</strong> ${order.customer.contact}</p>
            <p><strong>Payment Method:</strong> ${order.paymentMethod === 'gcash' ? 'GCash' : 'Cash on Delivery'}</p>
        </div>
        
        <table class="receipt-items">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                ${itemsHTML}
            </tbody>
        </table>
        
        <div class="receipt-total">
            <p>Subtotal: ${formatPrice(total)}</p>
            <p>Downpayment (30%): ${formatPrice(downpayment)}</p>
            <p>Balance: ${formatPrice(balance)}</p>
            <p><strong>Total: ${formatPrice(total)}</strong></p>
        </div>
        
        <div class="receipt-footer">
            <p>Thank you for your order!</p>
            <p>Please present this receipt when claiming your order.</p>
        </div>
    `;
}

function displayAdminOrders() {
    const ordersTab = document.getElementById('ordersTab');
    if (!ordersTab) return;
    
    ordersTab.innerHTML = `
        <h3>Order Management</h3>
        ${orders.length === 0 ? '<p>No orders to display.</p>' : ''}
        <table class="orders-table">
            <thead>
                <tr>
                    <th>Order #</th>
                    <th>Customer</th>
                    <th>Items</th>
                    <th>Total</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                ${orders.map(order => `
                    <tr>
                        <td>${order.id}</td>
                        <td>${order.customer.name}</td>
                        <td>${order.items.reduce((sum, item) => sum + item.quantity, 0)}</td>
                        <td>${formatPrice(order.items.reduce((sum, item) => sum + (item.price * item.quantity), 0))}</td>
                        <td>${order.date.toLocaleDateString()}</td>
                        <td>${order.fulfilled ? 'Fulfilled' : 'Pending'}</td>
                        <td>
                            <button class="view-order-btn" data-id="${order.id}">View</button>
                            <button class="fulfill-order-btn" data-id="${order.id}" ${order.fulfilled ? 'disabled' : ''}>
                                ${order.fulfilled ? 'Fulfilled' : 'Mark as Fulfilled'}
                            </button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
    
    document.querySelectorAll('.view-order-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const orderId = parseInt(btn.getAttribute('data-id'));
            const order = orders.find(o => o.id === orderId);
            
            if (order) {
                receiptContent.innerHTML = generateReceipt(order);
                orderConfirmationModal.style.display = 'block';
            }
        });
    });
    
    document.querySelectorAll('.fulfill-order-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const orderId = parseInt(btn.getAttribute('data-id'));
            const order = orders.find(o => o.id === orderId);
            
            if (order && !order.fulfilled) {
                order.fulfilled = true;
                btn.textContent = 'Fulfilled';
                btn.disabled = true;
                
                // Update stock for each item in the order
                order.items.forEach(item => {
                    const product = findProductById(item.id);
                    if (product) {
                        product.quantity == item.quantity;
                    }
                });
                
                updateProducts();
                alert('Order fulfilled and stock updated!');
            }
        });
    });
}

// Admin Functions
function getAllProductsArray() {
    let products = [];
    for (const category in allProducts) {
        products = products.concat(allProducts[category]);
    }
    return products;
}

function findProductById(id) {
    for (const category in allProducts) {
        const product = allProducts[category].find(p => p.id === id);
        if (product) return product;
    }
    return null;
}

function deleteProductById(id) {
    for (const category in allProducts) {
        const index = allProducts[category].findIndex(p => p.id === id);
        if (index !== -1) {
            allProducts[category].splice(index, 1);
            return true;
        }
    }
    return false;
}

function updateProduct(updatedProduct) {
    for (const category in allProducts) {
        const index = allProducts[category].findIndex(p => p.id === updatedProduct.id);
        if (index !== -1) {
            if (category !== updatedProduct.category) {
                allProducts[category].splice(index, 1);
                if (!allProducts[updatedProduct.category]) {
                    allProducts[updatedProduct.category] = [];
                }
                allProducts[updatedProduct.category].push(updatedProduct);
            } else {
                allProducts[category][index] = updatedProduct;
            }
            return true;
        }
    }
    return false;
}

function addNewProduct(newProduct) {
    if (!allProducts[newProduct.category]) {
        allProducts[newProduct.category] = [];
    }
    allProducts[newProduct.category].push(newProduct);
}

function displayAdminProducts() {
    const productsTableBody = document.getElementById('productsTableBody');
    if (!productsTableBody) return;
    
    productsTableBody.innerHTML = '';
    const products = getAllProductsArray();
    
    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${product.imageUrl}" alt="${product.name}" style="width:50px; height:50px; object-fit:contain;"></td>
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>${formatPrice(product.price)}</td>
            <td>${product.quantity}</td>
            <td class="action-buttons">
                <button class="edit-btn" data-id="${product.id}">Edit</button>
                <button class="delete-btn" data-id="${product.id}">Delete</button>
            </td>
        `;
        productsTableBody.appendChild(row);
    });
    
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            editProduct(productId);
        });
    });
    
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            deleteProduct(productId);
        });
    });
}

function editProduct(id) {
    const product = findProductById(id);
    if (!product) return;
    
    document.getElementById('productsTab').style.display = 'none';
    document.getElementById('productFormContainer').style.display = 'block';
    document.getElementById('formTitle').textContent = 'Edit Product';
    
    document.getElementById('productId').value = product.id;
    document.getElementById('productName').value = product.name;
    document.getElementById('productCategory').value = product.category;
    document.getElementById('productPrice').value = product.price;
    document.getElementById('productRating').value = product.rating;
    document.getElementById('productReviews').value = product.reviews;
    document.getElementById('productQuantity').value = product.quantity || 0;
    document.getElementById('productImageUrl').value = product.imageUrl;
    document.getElementById('productDescription').value = product.description;
    document.getElementById('productSpecs').value = product.specs.join(', ');
    document.getElementById('productImage').src = product.imageUrl;
}

function deleteProduct(id) {
    if (confirm('Are you sure you want to delete this product?')) {
        if (deleteProductById(id)) {
            displayAdminProducts();
            updateProducts();
            loadFeaturedProducts();
            alert('Product deleted successfully!');
        }
    }
}

function toggleAdminLoginModal() {
    if (isLoggedIn) {
        adminPanelModal.style.display = 'block';
        adminLoginModal.style.display = 'none';
        displayAdminProducts();
    } else {
        adminLoginModal.style.display = 'block';
        adminPanelModal.style.display = 'none';
    }
}

function handleAdminLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const admin = admins.find(a => a.username === username && a.password === password);
    
    if (admin) {
        isLoggedIn = true;
        currentUsername = username;
        adminLoginModal.style.display = 'none';
        adminPanelModal.style.display = 'block';
        displayAdminProducts();
    } else {
        alert('Invalid username or password!');
    }
}

function handleAdminLogout() {
    isLoggedIn = false;
    currentUsername = null;
    adminPanelModal.style.display = 'none';
}

// Event Listeners
function initAdminEventListeners() {
    if (adminLoginBtn) adminLoginBtn.addEventListener('click', toggleAdminLoginModal);
    if (closeModal) closeModal.addEventListener('click', () => adminLoginModal.style.display = 'none');
    if (closeAdminModal) closeAdminModal.addEventListener('click', () => adminPanelModal.style.display = 'none');
    if (loginBtn) loginBtn.addEventListener('click', handleAdminLogin);
    if (logoutBtn) logoutBtn.addEventListener('click', handleAdminLogout);

    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(tabName + 'Tab').classList.add('active');
            
            if (tabName === 'orders') displayAdminOrders();
        });
    });

    const addProductBtn = document.getElementById('addProductBtn');
    if (addProductBtn) {
        addProductBtn.addEventListener('click', function() {
            document.getElementById('productForm').reset();
            document.getElementById('productId').value = '';
            document.getElementById('productImage').src = '';
            document.getElementById('formTitle').textContent = 'Add New Product';
            document.getElementById('productsTab').style.display = 'none';
            document.getElementById('productFormContainer').style.display = 'block';
        });
    }

    const backToProducts = document.getElementById('backToProducts');
    if (backToProducts) {
        backToProducts.addEventListener('click', function() {
            document.getElementById('productsTab').style.display = 'block';
            document.getElementById('productFormContainer').style.display = 'none';
        });
    }

    const productImageUrl = document.getElementById('productImageUrl');
    if (productImageUrl) {
        productImageUrl.addEventListener('input', function() {
            const url = this.value.trim();
            document.getElementById('productImage').src = url || '';
        });
    }

    const productForm = document.getElementById('productForm');
    if (productForm) {
        productForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const productId = document.getElementById('productId').value;
            const isNewProduct = !productId;
            
            const product = {
                id: isNewProduct ? Date.now() : parseInt(productId),
                name: document.getElementById('productName').value,
                category: document.getElementById('productCategory').value,
                price: parseInt(document.getElementById('productPrice').value),
                rating: parseFloat(document.getElementById('productRating').value),
                reviews: parseInt(document.getElementById('productReviews').value),
                quantity: parseInt(document.getElementById('productQuantity').value) || 0,
                imageUrl: document.getElementById('productImageUrl').value,
                description: document.getElementById('productDescription').value,
                specs: document.getElementById('productSpecs').value.split(',').map(spec => spec.trim()),
                images: [document.getElementById('productImageUrl').value]
            };
            
            if (isNewProduct) {
                addNewProduct(product);
                alert('Product added successfully!');
            } else {
                if (updateProduct(product)) {
                    alert('Product updated successfully!');
                } else {
                    alert('Failed to update product!');
                }
            }
            
            displayAdminProducts();
            updateProducts();
            loadFeaturedProducts();
            document.getElementById('productsTab').style.display = 'block';
            document.getElementById('productFormContainer').style.display = 'none';
        });
    }
}

function initCartEventListeners() {
    if (cartIcon) cartIcon.addEventListener('click', (e) => {
        e.preventDefault();
        cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
    });
    
    document.addEventListener('click', (e) => {
        if (cartIcon && !cartIcon.contains(e.target) && cartDropdown && !cartDropdown.contains(e.target)) {
            cartDropdown.style.display = 'none';
        }
    });
    
    if (cartItems) cartItems.addEventListener('click', (e) => {
        if (e.target.classList.contains('cart-item-remove')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            removeFromCart(productId);
        }
    });
    
    if (checkoutBtn) checkoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (cartDropdown) cartDropdown.style.display = 'none';
        if (checkoutModal) checkoutModal.style.display = 'block';
        updateOrderSummary();
    });
    
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            if (checkoutModal) checkoutModal.style.display = 'none';
            if (orderConfirmationModal) orderConfirmationModal.style.display = 'none';
            if (productDetailModal) productDetailModal.style.display = 'none';
        });
    });
    
    if (checkoutForm) checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const order = {
            id: Date.now(),
            customer: {
                name: document.getElementById('customerName').value,
                address: document.getElementById('customerAddress').value,
                contact: document.getElementById('customerContact').value
            },
            paymentMethod: document.querySelector('input[name="paymentMethod"]:checked').value,
            items: [...cart],
            date: new Date(),
            fulfilled: false
        };
        
        orders.push(order);
        if (receiptContent) receiptContent.innerHTML = generateReceipt(order);
        if (checkoutModal) checkoutModal.style.display = 'none';
        if (orderConfirmationModal) orderConfirmationModal.style.display = 'block';
        cart = [];
        updateCart();
        checkoutForm.reset();
    });
    
    if (printReceiptBtn) printReceiptBtn.addEventListener('click', () => window.print());
    if (closeConfirmationBtn) closeConfirmationBtn.addEventListener('click', () => {
        if (orderConfirmationModal) orderConfirmationModal.style.display = 'none';
    });
}

// Initialize Page
function initPage() {
    const hash = window.location.hash.substring(1);
    if (hash === 'products') {
        switchSection('products');
        updateCategoryUI(currentCategory);
        updateFilterOptions();
        updateProducts();
    } else {
        switchSection('home');
    }
    
    // Handle product detail page
    if (window.location.pathname.includes('product-detail.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const id = parseInt(urlParams.get('id'));
        const category = urlParams.get('category');
        
        if (id && category) {
            showProductDetail(id, category);
        }
    }
    
    loadFeaturedProducts();
    initAdminEventListeners();
    initCartEventListeners();
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            if (sectionId) {
                switchSection(sectionId);
                if (sectionId === 'products') {
                    updateCategoryUI(currentCategory);
                    updateFilterOptions();
                    updateProducts();
                }
            }
        });
    });

    if (shopNowBtn) {
        shopNowBtn.addEventListener('click', function(e) {
            e.preventDefault();
            switchSection('products');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            if (category) {
                currentCategory = category;
                switchSection('products');
                updateCategoryUI(category);
                updateFilterOptions();
                updateProducts();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });

    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            currentCategory = category;
            updateCategoryUI(category);
            updateFilterOptions();
            updateProducts();
        });
    });

    if (priceFilter) {
        priceFilter.addEventListener('change', function() {
            currentPriceFilter = this.value;
            updateProducts();
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            currentSort = this.value;
            updateProducts();
        });
    }

    document.querySelectorAll('.category-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            if (category) {
                currentCategory = category;
                switchSection('products');
                updateCategoryUI(category);
                updateFilterOptions();
                updateProducts();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });

    document.querySelector('.breadcrumb-home')?.addEventListener('click', function(e) {
        e.preventDefault();
        switchSection('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            const productCard = e.target.closest('.product-card');
            if (productCard) {
                const productLink = productCard.querySelector('a')?.getAttribute('href');
                if (productLink) {
                    const urlParams = new URLSearchParams(productLink.split('?')[1]);
                    const id = parseInt(urlParams.get('id'));
                    const product = findProductById(id);
                    
                    if (product) {
                        addToCart(product);
                        e.target.textContent = 'Added!';
                        setTimeout(() => e.target.textContent = 'Add to Cart', 2000);
                    }
                }
            }
        }
    });

    window.addEventListener('click', function(e) {
        if (e.target === adminLoginModal) adminLoginModal.style.display = 'none';
        if (e.target === adminPanelModal) adminPanelModal.style.display = 'none';
        if (e.target === productDetailModal) productDetailModal.style.display = 'none';
    });

    window.addEventListener('hashchange', function() {
        const hash = window.location.hash.substring(1);
        if (hash === 'products' || hash === 'home') {
            switchSection(hash);
            if (hash === 'products') {
                updateCategoryUI(currentCategory);
                updateFilterOptions();
                updateProducts();
            }
        }
    });
}

// Start the application
document.addEventListener('DOMContentLoaded', function() {
    initPage();
});