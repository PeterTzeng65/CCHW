// 產品數據
const products = [
    // ===== CPU 處理器 =====
    {
        id: 1,
        name: "Intel Core i7-13700K",
        description: "16核心24線程，最高5.4GHz，30MB快取，Intel 7製程",
        price: 12500,
        image: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=280&h=180&fit=crop&crop=center",
        category: "CPU",
        brand: "Intel",
        emoji: "💻"
    },
    {
        id: 2,
        name: "AMD Ryzen 7 7700X",
        description: "Zen 4架構，8核心16線程，最高5.4GHz，32MB L3快取，TSMC 5nm製程",
        price: 11800,
        image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=280&h=180&fit=crop&crop=center",
        category: "CPU",
        brand: "AMD",
        emoji: "🔥"
    },
    {
        id: 3,
        name: "Intel Core i5-13600K",
        description: "14核心20線程，最高5.1GHz，24MB快取，混合架構設計",
        price: 9800,
        image: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=280&h=180&fit=crop&crop=center",
        category: "CPU",
        brand: "Intel",
        emoji: "⚡"
    },
    
    // ===== GPU 顯示卡 =====
    {
        id: 4,
        name: "NVIDIA RTX 4070",
        description: "Ada Lovelace架構，12GB GDDR6X，5888個CUDA核心，AV1編碼支援",
        price: 20500,
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=280&h=180&fit=crop&crop=center",
        category: "GPU",
        brand: "NVIDIA",
        emoji: "🎮"
    },
    {
        id: 5,
        name: "AMD RX 7700 XT",
        description: "RDNA 3架構，12GB GDDR6，54個運算單元，AV1硬體編解碼",
        price: 18900,
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=280&h=180&fit=crop&crop=center",
        category: "GPU",
        brand: "AMD",
        emoji: "🚀"
    },
    {
        id: 6,
        name: "ASUS TUF RTX 4080 Gaming OC",
        description: "16GB GDDR6X，9728個CUDA核心，三風扇設計，軍規認證用料",
        price: 35900,
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=280&h=180&fit=crop&crop=center",
        category: "GPU",
        brand: "ASUS",
        emoji: "🎯"
    },
    
    // ===== 主機板 =====
    {
        id: 7,
        name: "ASUS ROG Strix Z790-E Gaming WiFi",
        description: "Intel Z790晶片組，DDR5-7200+支援，WiFi 6E，2.5Gb乙太網路，PCIe 5.0",
        price: 8900,
        image: "https://images.unsplash.com/photo-1540829917886-91ab031b1764?w=280&h=180&fit=crop&crop=center",
        category: "主機板",
        brand: "ASUS",
        emoji: "⚡"
    },
    {
        id: 8,
        name: "MSI MAG B650 TOMAHAWK WiFi",
        description: "AMD B650晶片組，DDR5-6000+支援，PCIe 5.0，Wi-Fi 6E，USB 3.2 Gen2 Type-C",
        price: 6500,
        image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=280&h=180&fit=crop&crop=center",
        category: "主機板",
        brand: "MSI",
        emoji: "⚙️"
    },
    {
        id: 9,
        name: "Gigabyte B760 AORUS Elite AX",
        description: "Intel B760晶片組，DDR5-7600支援，WiFi 6E，2.5GbE網路，RGB Fusion 2.0",
        price: 5800,
        image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=280&h=180&fit=crop&crop=center",
        category: "主機板",
        brand: "Gigabyte",
        emoji: "🔧"
    },
    
    // ===== 記憶體 =====
    {
        id: 10,
        name: "Corsair Vengeance DDR5-5600 32GB Kit",
        description: "雙通道32GB套件(2x16GB)，DDR5-5600，C36延遲，iCUE RGB燈效",
        price: 4800,
        image: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=280&h=180&fit=crop&crop=center",
        category: "記憶體",
        brand: "Corsair",
        emoji: "🧠"
    },
    {
        id: 11,
        name: "G.Skill Trident Z5 DDR5-6000 32GB Kit",
        description: "雙通道32GB套件(2x16GB)，DDR5-6000，C30延遲，RGB燈效，Intel XMP 3.0",
        price: 5200,
        image: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=280&h=180&fit=crop&crop=center",
        category: "記憶體",
        brand: "G.Skill",
        emoji: "⚡"
    },
    {
        id: 12,
        name: "Kingston FURY Beast DDR5-5600 32GB Kit",
        description: "雙通道32GB套件(2x16GB)，DDR5-5600，C40延遲，Intel XMP 3.0認證",
        price: 4200,
        image: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=280&h=180&fit=crop&crop=center",
        category: "記憶體",
        brand: "Kingston",
        emoji: "🛡️"
    },
    
    // ===== 儲存裝置 =====
    {
        id: 13,
        name: "Samsung 980 PRO 2TB NVMe SSD",
        description: "PCIe 4.0 x4，讀取7000MB/s，寫入5100MB/s，V-NAND 3bit MLC，5年保固",
        price: 6200,
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=280&h=180&fit=crop&crop=center",
        category: "儲存",
        brand: "Samsung",
        emoji: "💾"
    },
    {
        id: 14,
        name: "WD Black SN850X 2TB NVMe SSD",
        description: "PCIe 4.0，讀取7300MB/s，寫入6600MB/s，Game Mode 2.0技術，5年保固",
        price: 6800,
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=280&h=180&fit=crop&crop=center",
        category: "儲存",
        brand: "WD",
        emoji: "🎮"
    },
    {
        id: 15,
        name: "Seagate FireCuda 530 2TB NVMe SSD",
        description: "PCIe 4.0，讀取7300MB/s，寫入6900MB/s，3D TLC NAND，5年保固+救援服務",
        price: 6500,
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=280&h=180&fit=crop&crop=center",
        category: "儲存",
        brand: "Seagate",
        emoji: "🔥"
    },
    
    // ===== 電源供應器 =====
    {
        id: 16,
        name: "Corsair RM850x 850W 80+ Gold",
        description: "850W全模組化，80 Plus Gold效率，135mm風扇，10年保固，ATX 3.0準備就緒",
        price: 4500,
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=280&h=180&fit=crop&crop=center",
        category: "電源",
        brand: "Corsair",
        emoji: "🔌"
    },
    {
        id: 17,
        name: "Seasonic Focus GX-850 850W 80+ Gold",
        description: "850W全模組化，80 Plus Gold效率，Fluid Dynamic Bearing風扇，10年保固",
        price: 4200,
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=280&h=180&fit=crop&crop=center",
        category: "電源",
        brand: "Seasonic",
        emoji: "⚡"
    },
    {
        id: 18,
        name: "be quiet! Straight Power 11 850W 80+ Gold",
        description: "850W全模組化，80 Plus Gold效率，Silent Wings 3風扇，5年保固",
        price: 4600,
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=280&h=180&fit=crop&crop=center",
        category: "電源",
        brand: "be quiet!",
        emoji: "🔇"
    },
    
    // ===== 機殼 =====
    {
        id: 19,
        name: "NZXT H7 Flow 中塔機殼",
        description: "中塔ATX，優化氣流設計，支援360mm水冷，USB 3.2 Gen 2 Type-C前置接口",
        price: 3200,
        image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=280&h=180&fit=crop&crop=center",
        category: "機殼",
        brand: "NZXT",
        emoji: "🏠"
    },
    {
        id: 20,
        name: "Fractal Design Define 7 中塔機殼",
        description: "中塔ATX，ModuVent技術，支援420mm水冷，隔音材質，無工具安裝",
        price: 4200,
        image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=280&h=180&fit=crop&crop=center",
        category: "機殼",
        brand: "Fractal Design",
        emoji: "🎨"
    },
    {
        id: 21,
        name: "Cooler Master MasterBox TD500 Mesh",
        description: "中塔ATX，網狀前面板，ARGB風扇x3，支援360mm水冷，鋼化玻璃側板",
        price: 2800,
        image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=280&h=180&fit=crop&crop=center",
        category: "機殼",
        brand: "Cooler Master",
        emoji: "💎"
    },
    
    // ===== 散熱器 =====
    {
        id: 22,
        name: "Noctua NH-D15 雙塔CPU散熱器",
        description: "雙塔散熱器，6支熱導管，NF-A15風扇x2，支援LGA1700/AM5，6年保固",
        price: 2800,
        image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=280&h=180&fit=crop&crop=center",
        category: "散熱",
        brand: "Noctua",
        emoji: "🌡️"
    },
    {
        id: 23,
        name: "Corsair H150i Elite LCD 360mm 一體式水冷",
        description: "360mm水冷，2.1吋IPS LCD螢幕，ML120 RGB風扇x3，支援LGA1700/AM5",
        price: 5800,
        image: "https://images.unsplash.com/photo-1541629017169-0281c95c7a2e?w=280&h=180&fit=crop&crop=center",
        category: "散熱",
        brand: "Corsair",
        emoji: "❄️"
    },
    {
        id: 24,
        name: "Arctic Liquid Freezer II 360 A-RGB",
        description: "360mm一體式水冷，P12 PWM PST A-RGB風扇x3，VRM風扇，6年保固",
        price: 3800,
        image: "https://images.unsplash.com/photo-1541629017169-0281c95c7a2e?w=280&h=180&fit=crop&crop=center",
        category: "散熱",
        brand: "Arctic",
        emoji: "🧊"
    }
];

// 購物車數據
let cart = [];
let isCartOpen = false;
let isOrderFormOpen = false;

// 篩選和排序狀態
let currentCategory = 'all';
let currentBrands = [];
let currentSort = 'default';

// DOM 元素
const productGrid = document.getElementById('product-grid');
const cartBtn = document.getElementById('cart-btn');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCartBtn = document.getElementById('close-cart');
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const orderForm = document.getElementById('order-form');
const orderDetails = document.getElementById('order-details');
const cancelOrderBtn = document.getElementById('cancel-order');
const orderItemsSummary = document.getElementById('order-items-summary');
const finalTotal = document.getElementById('final-total');
const testingService = document.getElementById('testing-service');
const assemblyService = document.getElementById('assembly-service');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    updateCartUI();
    setupEventListeners();
});

// 渲染產品
function renderProducts() {
    productGrid.innerHTML = '';
    
    let filteredProducts = filterProducts();
    filteredProducts = sortProducts(filteredProducts);
    
    if (filteredProducts.length === 0) {
        productGrid.innerHTML = '<div class="no-products">沒有找到符合條件的商品</div>';
        return;
    }
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" 
                     alt="${product.name}" 
                     style="width: 100%; height: 100%; object-fit: cover;"
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="image-fallback" style="display: none; width: 100%; height: 100%; background: linear-gradient(135deg, #667eea, #764ba2); color: white; align-items: center; justify-content: center; font-size: 3rem;">
                    ${product.emoji}
                </div>
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-price">${product.price.toLocaleString()}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    🛒 加入購物車
                </button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// 篩選產品
function filterProducts() {
    return products.filter(product => {
        // 分類篩選
        const categoryMatch = currentCategory === 'all' || product.category === currentCategory;
        
        // 品牌篩選
        const brandMatch = currentBrands.length === 0 || currentBrands.includes(product.brand);
        
        return categoryMatch && brandMatch;
    });
}

// 排序產品
function sortProducts(products) {
    const sortedProducts = [...products];
    
    switch (currentSort) {
        case 'price-low':
            return sortedProducts.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sortedProducts.sort((a, b) => b.price - a.price);
        case 'name':
            return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        default:
            return sortedProducts;
    }
}

// 設置事件監聽器
function setupEventListeners() {
    cartBtn.addEventListener('click', toggleCart);
    closeCartBtn.addEventListener('click', toggleCart);
    checkoutBtn.addEventListener('click', showOrderForm);
    cancelOrderBtn.addEventListener('click', hideOrderForm);
    orderDetails.addEventListener('submit', handleOrderSubmit);
    
    // 服務選項變更時更新總計
    testingService.addEventListener('change', updateOrderSummary);
    assemblyService.addEventListener('change', updateOrderSummary);
    
    // 分類篩選
    document.querySelectorAll('.category-list a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 更新分類按鈕狀態
            document.querySelectorAll('.category-list a').forEach(a => a.classList.remove('active'));
            this.classList.add('active');
            
            // 更新當前分類
            currentCategory = this.dataset.category;
            renderProducts();
        });
    });
    
    // 品牌篩選
    document.querySelectorAll('.brand-checkboxes input').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                currentBrands.push(this.value);
            } else {
                currentBrands = currentBrands.filter(brand => brand !== this.value);
            }
            renderProducts();
        });
    });
    
    // 排序
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            currentSort = this.value;
            renderProducts();
        });
    }
    
    // 點擊購物車外部關閉
    document.addEventListener('click', function(e) {
        if (isCartOpen && !cartSidebar.contains(e.target) && !cartBtn.contains(e.target)) {
            toggleCart();
        }
    });
    
    // 點擊訂單表單外部關閉
    orderForm.addEventListener('click', function(e) {
        if (e.target === orderForm) {
            hideOrderForm();
        }
    });
}

// 加入購物車
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartUI();
    showAddToCartFeedback();
}

// 顯示加入購物車反饋
function showAddToCartFeedback() {
    cartBtn.style.transform = 'scale(1.1)';
    setTimeout(() => {
        cartBtn.style.transform = 'scale(1)';
    }, 200);
}

// 從購物車移除商品
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

// 更新商品數量
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCartUI();
    }
}

// 更新購物車UI
function updateCartUI() {
    // 更新購物車數量
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // 更新購物車項目
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">購物車是空的</div>';
        checkoutBtn.disabled = true;
        checkoutBtn.style.opacity = '0.5';
    } else {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>NT$ ${item.price.toLocaleString()}</p>
                </div>
                <div class="cart-item-actions">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">移除</button>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
        checkoutBtn.disabled = false;
        checkoutBtn.style.opacity = '1';
    }
    
    // 更新總計
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toLocaleString();
}

// 切換購物車顯示
function toggleCart() {
    isCartOpen = !isCartOpen;
    cartSidebar.classList.toggle('open', isCartOpen);
}

// 顯示訂單表單
function showOrderForm() {
    if (cart.length === 0) return;
    
    isOrderFormOpen = true;
    orderForm.style.display = 'flex';
    updateOrderSummary();
    document.body.style.overflow = 'hidden';
}

// 隱藏訂單表單
function hideOrderForm() {
    isOrderFormOpen = false;
    orderForm.style.display = 'none';
    document.body.style.overflow = 'auto';
    orderDetails.reset();
}

// 更新訂單摘要
function updateOrderSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let serviceTotal = 0;
    
    // 計算服務費用
    if (testingService.checked) {
        serviceTotal += 500;
    }
    if (assemblyService.checked) {
        serviceTotal += 800;
    }
    
    const total = subtotal + serviceTotal;
    
    // 更新訂單項目摘要
    orderItemsSummary.innerHTML = '';
    
    // 商品項目
    cart.forEach(item => {
        const summaryItem = document.createElement('div');
        summaryItem.className = 'summary-item';
        summaryItem.innerHTML = `
            <span>${item.name} x${item.quantity}</span>
            <span>NT$ ${(item.price * item.quantity).toLocaleString()}</span>
        `;
        orderItemsSummary.appendChild(summaryItem);
    });
    
    // 服務項目
    if (testingService.checked) {
        const testingItem = document.createElement('div');
        testingItem.className = 'summary-item';
        testingItem.innerHTML = `
            <span>測試服務</span>
            <span>NT$ 500</span>
        `;
        orderItemsSummary.appendChild(testingItem);
    }
    
    if (assemblyService.checked) {
        const assemblyItem = document.createElement('div');
        assemblyItem.className = 'summary-item';
        assemblyItem.innerHTML = `
            <span>組裝服務</span>
            <span>NT$ 800</span>
        `;
        orderItemsSummary.appendChild(assemblyItem);
    }
    
    // 更新最終總計
    finalTotal.textContent = total.toLocaleString();
}

// 處理訂單提交
function handleOrderSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(orderDetails);
    const customerName = document.getElementById('customer-name').value;
    const customerEmail = document.getElementById('customer-email').value;
    const customerPhone = document.getElementById('customer-phone').value;
    const customerAddress = document.getElementById('customer-address').value;
    const termsAgreement = document.getElementById('terms-agreement').checked;
    
    // 驗證必填欄位
    if (!customerName || !customerEmail || !customerPhone || !customerAddress) {
        alert('請填寫所有必填欄位');
        return;
    }
    
    if (!termsAgreement) {
        alert('請同意服務條款');
        return;
    }
    
    // 計算訂單總計
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let serviceTotal = 0;
    const services = [];
    
    if (testingService.checked) {
        serviceTotal += 500;
        services.push('測試服務');
    }
    if (assemblyService.checked) {
        serviceTotal += 800;
        services.push('組裝服務');
    }
    
    const total = subtotal + serviceTotal;
    
    // 建立訂單資料
    const orderData = {
        orderNumber: 'ORD' + Date.now(),
        customer: {
            name: customerName,
            email: customerEmail,
            phone: customerPhone,
            address: customerAddress
        },
        items: cart.map(item => ({
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            subtotal: item.price * item.quantity
        })),
        services: services,
        subtotal: subtotal,
        serviceTotal: serviceTotal,
        total: total,
        orderDate: new Date().toLocaleString('zh-TW')
    };
    
    // 顯示訂單成功訊息
    showOrderSuccess(orderData);
    
    // 清空購物車和表單
    cart = [];
    updateCartUI();
    hideOrderForm();
    toggleCart();
}

// 顯示訂單成功訊息
function showOrderSuccess(orderData) {
    const successMessage = `
訂單提交成功！

訂單編號：${orderData.orderNumber}
客戶姓名：${orderData.customer.name}
訂單總額：NT$ ${orderData.total.toLocaleString()}
訂單時間：${orderData.orderDate}

我們將盡快為您處理訂單。
如有疑問請撥打客服專線：0800-080-000

感謝您的購買！
    `.trim();
    
    alert(successMessage);
}

// 格式化貨幣
function formatCurrency(amount) {
    return 'NT$ ' + amount.toLocaleString();
}

// 防止表單重複提交
let isSubmitting = false;

orderDetails.addEventListener('submit', function(e) {
    if (isSubmitting) {
        e.preventDefault();
        return;
    }
    
    isSubmitting = true;
    
    setTimeout(() => {
        isSubmitting = false;
    }, 2000);
});

// 鍵盤快捷鍵
document.addEventListener('keydown', function(e) {
    // ESC 鍵關閉購物車或訂單表單
    if (e.key === 'Escape') {
        if (isOrderFormOpen) {
            hideOrderForm();
        } else if (isCartOpen) {
            toggleCart();
        }
    }
});

// 滾動到頂部功能
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 平滑滾動到產品區域
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({
        behavior: 'smooth'
    });
}