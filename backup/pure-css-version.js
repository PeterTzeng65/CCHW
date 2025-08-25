// 純CSS版本 - 不依賴外部圖片服務
const products = [
    {
        id: 1,
        name: "Intel Core i7-13700K",
        description: "第13代Intel處理器，16核心24線程，基礎頻率3.4GHz",
        price: 12500,
        image: null, // 使用純CSS背景
        category: "CPU",
        brand: "Intel",
        emoji: "🔵",
        bgColor: "linear-gradient(135deg, #3b82f6, #1e40af)"
    },
    {
        id: 2,
        name: "AMD Ryzen 7 7700X",
        description: "AMD Zen4架構，8核心16線程，基礎頻率4.5GHz",
        price: 11800,
        image: null,
        category: "CPU",
        brand: "AMD",
        emoji: "🔴",
        bgColor: "linear-gradient(135deg, #ed1c24, #b91c1c)"
    },
    {
        id: 3,
        name: "NVIDIA RTX 4070",
        description: "NVIDIA Ada Lovelace架構，12GB GDDR6X顯存",
        price: 20500,
        image: null,
        category: "GPU",
        brand: "NVIDIA",
        emoji: "🟢",
        bgColor: "linear-gradient(135deg, #76b900, #4ade80)"
    },
    {
        id: 4,
        name: "AMD RX 7700 XT",
        description: "AMD RDNA 3架構，12GB GDDR6顯存，優異效能",
        price: 18900,
        image: null,
        category: "GPU",
        brand: "AMD",
        emoji: "🔴",
        bgColor: "linear-gradient(135deg, #ed1c24, #dc2626)"
    },
    {
        id: 5,
        name: "ASUS ROG Strix Z790-E",
        description: "Intel Z790晶片組，支援DDR5，WiFi 6E，豪華用料",
        price: 8900,
        image: null,
        category: "主機板",
        brand: "ASUS",
        emoji: "🟠",
        bgColor: "linear-gradient(135deg, #ff6600, #ea580c)"
    },
    // ... 其他產品
];

// 渲染產品 - 純CSS版本
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
            <div class="product-image" style="background: ${product.bgColor}; display: flex; align-items: center; justify-content: center; font-size: 4rem; color: white;">
                ${product.emoji}
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