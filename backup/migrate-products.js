// 商品數據遷移腳本
// 將 script.js 中的商品數據遷移到 localStorage

function migrateProductsToLocalStorage() {
    console.log('開始遷移商品數據到 localStorage...');
    
    // 檢查是否已經有商品數據
    const existingData = localStorage.getItem('productsDatabase');
    if (existingData) {
        try {
            const existing = JSON.parse(existingData);
            if (existing && existing.length > 0) {
                console.log('商品數據庫已存在且不為空，跳過遷移');
                return;
            }
        } catch (e) {
            console.log('現有資料格式錯誤，將重新遷移');
        }
    }
    
    // 從全域 products 變數中取得商品數據
    if (typeof products !== 'undefined' && products.length > 0) {
        try {
            // 將商品數據升級為新格式
            const migratedProducts = products.map(product => ({
                ...product,
                status: 'active', // 預設為上架狀態
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                images: {
                    cover: product.image || './images/placeholder.svg', // 封面圖片
                    gallery: [] // 內頁圖片陣列，初始為空
                }
                // 保留原有的 image 欄位以維持相容性
            }));

            // 將遷移後的商品數據保存到 localStorage
            localStorage.setItem('productsDatabase', JSON.stringify(migratedProducts));
            
            console.log(`成功遷移 ${migratedProducts.length} 個商品到 localStorage`);
            console.log('遷移統計:');
            
            // 按類別統計
            const categories = {};
            migratedProducts.forEach(product => {
                categories[product.category] = (categories[product.category] || 0) + 1;
            });
            
            Object.entries(categories).forEach(([category, count]) => {
                console.log(`- ${category}: ${count} 個商品`);
            });
            
            // 顯示成功訊息
            console.log('✅ 商品數據遷移完成！所有商品已設為上架狀態，支援圖片管理功能。');
            
        } catch (error) {
            console.error('遷移商品數據時發生錯誤:', error);
            alert('商品數據遷移失敗：' + error.message);
        }
    } else {
        console.warn('找不到 products 數據或數據為空');
        // 如果沒有找到現有數據，創建一個空的商品數據庫
        localStorage.setItem('productsDatabase', JSON.stringify([]));
        console.log('創建了空的商品數據庫');
    }
}

// 檢查數據遷移狀態的函數
function checkMigrationStatus() {
    const productsData = localStorage.getItem('productsDatabase');
    if (!productsData) {
        console.log('尚未進行商品數據遷移');
        return false;
    }
    
    const products = JSON.parse(productsData);
    console.log(`商品數據庫包含 ${products.length} 個商品`);
    return products.length > 0;
}

// 手動觸發遷移的函數（用於測試）
function forceMigration() {
    localStorage.removeItem('productsDatabase');
    migrateProductsToLocalStorage();
}

// 在頁面載入時自動檢查並執行遷移
document.addEventListener('DOMContentLoaded', function() {
    // 延遲執行以確保 products 變數已載入
    setTimeout(() => {
        if (!checkMigrationStatus()) {
            migrateProductsToLocalStorage();
        }
    }, 1000);
});

// 將函數暴露到全域作用域
window.migrateProductsToLocalStorage = migrateProductsToLocalStorage;
window.checkMigrationStatus = checkMigrationStatus;
window.forceMigration = forceMigration;