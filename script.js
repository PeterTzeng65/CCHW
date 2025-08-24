// 產品數據
const products = [
    {
        id: 1,
        name: "Intel Core i7-13700K",
        description: "第13代Intel處理器，16核心24線程，基礎頻率3.4GHz",
        price: 12500,
        image: "https://via.placeholder.com/280x180/3b82f6/ffffff?text=Intel+CPU",
        category: "CPU",
        brand: "Intel"
    },
    {
        id: 2,
        name: "AMD Ryzen 7 7700X",
        description: "AMD Zen4架構，8核心16線程，基礎頻率4.5GHz",
        price: 11800,
        image: "https://via.placeholder.com/280x180/ed1c24/ffffff?text=AMD+CPU",
        category: "CPU",
        brand: "AMD"
    },
    {
        id: 3,
        name: "NVIDIA RTX 4070",
        description: "NVIDIA Ada Lovelace架構，12GB GDDR6X顯存",
        price: 20500,
        image: "https://via.placeholder.com/280x180/76b900/ffffff?text=NVIDIA+GPU",
        category: "GPU",
        brand: "NVIDIA"
    },
    {
        id: 4,
        name: "AMD RX 7700 XT",
        description: "AMD RDNA 3架構，12GB GDDR6顯存，優異效能",
        price: 18900,
        image: "https://via.placeholder.com/280x180/ed1c24/ffffff?text=AMD+GPU",
        category: "GPU",
        brand: "AMD"
    },
    {
        id: 5,
        name: "ASUS ROG Strix Z790-E",
        description: "Intel Z790晶片組，支援DDR5，WiFi 6E，豪華用料",
        price: 8900,
        image: "https://via.placeholder.com/280x180/ff6600/ffffff?text=ASUS+MB",
        category: "主機板",
        brand: "ASUS"
    },
    {
        id: 6,
        name: "MSI MAG B650 TOMAHAWK",
        description: "AMD B650晶片組，支援DDR5，PCIe 5.0，性價比佳",
        price: 6500,
        image: "https://via.placeholder.com/280x180/ff0000/ffffff?text=MSI+MB",
        category: "主機板",
        brand: "MSI"
    },
    {
        id: 7,
        name: "Corsair Vengeance DDR5-5600 32GB",
        description: "DDR5高速記憶體，32GB套件，RGB燈效",
        price: 4800,
        image: "https://via.placeholder.com/280x180/ffcc00/000000?text=Corsair+RAM",
        category: "記憶體",
        brand: "Corsair"
    },
    {
        id: 8,
        name: "Samsung 980 PRO 2TB",
        description: "PCIe 4.0 NVMe SSD，讀取速度7000MB/s",
        price: 6200,
        image: "https://via.placeholder.com/280x180/1f4e79/ffffff?text=Samsung+SSD",
        category: "儲存",
        brand: "Samsung"
    },
    {
        id: 9,
        name: "Corsair RM850x",
        description: "850W金牌全模組化電源供應器，10年保固",
        price: 4500,
        image: "https://via.placeholder.com/280x180/ffcc00/000000?text=Corsair+PSU",
        category: "電源",
        brand: "Corsair"
    },
    {
        id: 10,
        name: "NZXT H7 Flow",
        description: "中塔機殼，優異散熱設計，支援360mm水冷",
        price: 3200,
        image: "https://via.placeholder.com/280x180/333333/ffffff?text=NZXT+Case",
        category: "機殼",
        brand: "NZXT"
    },
    {
        id: 11,
        name: "Noctua NH-D15",
        description: "雙塔雙風扇CPU散熱器，極靜音設計",
        price: 2800,
        image: "https://via.placeholder.com/280x180/8b4513/ffffff?text=Noctua+Cool",
        category: "散熱",
        brand: "Noctua"
    },
    {
        id: 12,
        name: "Corsair H150i Elite LCD",
        description: "360mm一體式水冷，LCD顯示器，RGB燈效",
        price: 5800,
        image: "https://via.placeholder.com/280x180/ffcc00/000000?text=Corsair+AIO",
        category: "散熱",
        brand: "Corsair"
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
                <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
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