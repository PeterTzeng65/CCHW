// 更新商品圖片路徑腳本
// 將 images 資料夾中的圖片與現有商品進行匹配

console.log('🖼️ 開始更新商品圖片路徑...');

// 商品與圖片的對應表
const productImageMapping = {
    // ===== CPU 處理器 =====
    "Intel Core i5-14400F": {
        images: {
            cover: "./images/中央處理器/Intel_Core_i5-14400F_10核16緒_處理器_第14代_《2.5Ghz_LGA1700_無內顯》_代理商貨_WATERMARKED.jpg",
            gallery: []
        }
    },
    "Intel Core i9-14900F": {
        images: {
            cover: "./images/中央處理器/Intel_Core_i9-14900F_24核32緒_處理器_第14代_《2.0Ghz_LGA1700_無內顯》_代理商貨_WATERMARKED.jpg",
            gallery: []
        }
    },
    "Intel Core i7-14700KF": {
        images: {
            cover: "./images/中央處理器/【搭機價】Intel_Core_i7-14700KF_20核28緒_處理器_第14代_《3.4Ghz_LGA1700_不含風扇_無內顯》_代理商貨-2_WATERMARKED.jpg",
            gallery: ["./images/中央處理器/【搭機價】Intel_Core_i7-14700KF_20核28緒_處理器_第14代_《3.4Ghz_LGA1700_不含風扇_無內顯》_代理商貨-3_WATERMARKED.jpg"]
        }
    },
    "Intel Xeon Silver 4310": {
        images: {
            cover: "./images/中央處理器/Intel_Xeon_Silver_4310_12核24緒_處理器《2.1Ghz_LGA4189》_代理商貨_WATERMARKED.jpg",
            gallery: []
        }
    },
    "AMD Ryzen 5 5600GT": {
        images: {
            cover: "./images/中央處理器/AMD_Ryzen_5_5600GT_6核_12緒_處理器《3.6GHz_19M_65W_AM4》_WATERMARKED.jpg",
            gallery: []
        }
    },

    // ===== 主機板 =====
    // AMD 主機板
    "ASUS PRIME B550M-K": {
        images: {
            cover: "./images/主機板AMD/ASUS_華碩_PRIME_B550M-K_ARGB-CSM_AM4主機板__M-ATX_3+1年保_【無痛升級K_CSM】_WATERMARKED.jpg",
            gallery: []
        }
    },
    "ASUS TUF GAMING B850-E WIFI": {
        images: {
            cover: "./images/主機板AMD/ASUS_華碩_TUF-GAMING-B850-E-WIFI_D5_AM5主機板_ATX_3+2年保-1_WATERMARKED.jpg",
            gallery: [
                "./images/主機板AMD/ASUS_華碩_TUF-GAMING-B850-E-WIFI_D5_AM5主機板_ATX_3+2年保-2_WATERMARKED.jpg",
                "./images/主機板AMD/ASUS_華碩_TUF-GAMING-B850-E-WIFI_D5_AM5主機板_ATX_3+2年保-3_WATERMARKED.jpg",
                "./images/主機板AMD/ASUS_華碩_TUF-GAMING-B850-E-WIFI_D5_AM5主機板_ATX_3+2年保-4_WATERMARKED.jpg"
            ]
        }
    },
    "Gigabyte X870 GAMING X WIFI7": {
        images: {
            cover: "./images/主機板AMD/Gigabyte_技嘉_X870_GAMING_X_WIFI7_AM5主機板_ATX_3+2年保_WATERMARKED.jpg",
            gallery: []
        }
    },
    "MSI B650M GAMING PLUS WIFI": {
        images: {
            cover: "./images/主機板AMD/MSI_微星_B650M_GAMING_PLUS_WIFI_AM5主機板_M-ATX_3+2年保_WATERMARKED.jpg",
            gallery: []
        }
    },

    // Intel 主機板
    "ASUS PRIME H310M-K": {
        images: {
            cover: "./images/主機板Intel/ASUS_華碩_PRIME_H310M-K_LGA1151主機板__M-ATX_3+1年保_WATERMARKED.jpg",
            gallery: []
        }
    },
    "Gigabyte B860 GAMING X WIFI6E": {
        images: {
            cover: "./images/主機板Intel/Gigabyte_技嘉_B860_GAMING_X_WIFI6E_D5_LGA1851主機板_ATX_3+2年保-1_WATERMARKED.jpg",
            gallery: [
                "./images/主機板Intel/Gigabyte_技嘉_B860_GAMING_X_WIFI6E_D5_LGA1851主機板_ATX_3+2年保-2_WATERMARKED.jpg",
                "./images/主機板Intel/Gigabyte_技嘉_B860_GAMING_X_WIFI6E_D5_LGA1851主機板_ATX_3+2年保-3_WATERMARKED.jpg",
                "./images/主機板Intel/Gigabyte_技嘉_B860_GAMING_X_WIFI6E_D5_LGA1851主機板_ATX_3+2年保-4_WATERMARKED.jpg"
            ]
        }
    },
    "MSI B760M PROJECT ZERO": {
        images: {
            cover: "./images/主機板Intel/MSI_微星_B760M_PROJECT_ZERO_背插版_D5_LGA1700主機板_M-ATX_3+2年保_WATERMARKED.jpg",
            gallery: []
        }
    },
    "MSI Z890 GAMING PLUS WIFI": {
        images: {
            cover: "./images/主機板Intel/MSI_微星_Z890_GAMING_PLUS_WIFI_D5_LGA1851主機板_ATX_3+2年保_WATERMARKED.jpg",
            gallery: []
        }
    },

    // ===== 記憶體 =====
    "ADATA DDR5-4800 16GB": {
        images: {
            cover: "./images/記憶體/ADATA_威剛_DDR5-4800_16G_桌上型記憶體-1_WATERMARKED.jpg",
            gallery: [
                "./images/記憶體/ADATA_威剛_DDR5-4800_16G_桌上型記憶體-2_WATERMARKED.jpg",
                "./images/記憶體/ADATA_威剛_DDR5-4800_16G_桌上型記憶體-3_WATERMARKED.jpg",
                "./images/記憶體/ADATA_威剛_DDR5-4800_16G_桌上型記憶體-4_WATERMARKED.jpg"
            ]
        }
    },
    "ADATA DDR5-5600 16GB": {
        images: {
            cover: "./images/記憶體/ADATA_威剛_DDR5-5600_16G_桌上型記憶體-1_WATERMARKED.jpg",
            gallery: ["./images/記憶體/ADATA_威剛_DDR5-5600_16G_桌上型記憶體-3_WATERMARKED.jpg"]
        }
    },
    "Micron Crucial NB DDR5-5600 16GB": {
        images: {
            cover: "./images/記憶體/Micron_美光_Crucial_NB_DDR5-5600_16G_筆記型記憶體-1_WATERMARKED.jpg",
            gallery: [
                "./images/記憶體/Micron_美光_Crucial_NB_DDR5-5600_16G_筆記型記憶體-2_WATERMARKED.jpg",
                "./images/記憶體/Micron_美光_Crucial_NB_DDR5-5600_16G_筆記型記憶體-3_WATERMARKED.jpg",
                "./images/記憶體/Micron_美光_Crucial_NB_DDR5-5600_16G_筆記型記憶體-4_WATERMARKED.jpg"
            ]
        }
    },
    "ACER Predator Vesta2 DDR5-6800 32GB": {
        images: {
            cover: "./images/記憶體/ACER_宏碁_Predator_Vesta2_DDR5-6800_32GB_16G_2__CL34_RGB超頻記憶體《黑》_WATERMARKED.jpg",
            gallery: []
        }
    },

    // ===== SSD/儲存裝置 =====
    "Samsung 870 EVO 2TB": {
        images: {
            cover: "./images/SSD固態硬碟/Samsung_三星_870_EVO_2TB_2.5吋_SATA_SSD_讀_560M_寫_530M__台灣代理商貨-1_WATERMARKED.jpg",
            gallery: [
                "./images/SSD固態硬碟/Samsung_三星_870_EVO_2TB_2.5吋_SATA_SSD_讀_560M_寫_530M__台灣代理商貨-2_WATERMARKED.jpg",
                "./images/SSD固態硬碟/Samsung_三星_870_EVO_2TB_2.5吋_SATA_SSD_讀_560M_寫_530M__台灣代理商貨-3_WATERMARKED.jpg",
                "./images/SSD固態硬碟/Samsung_三星_870_EVO_2TB_2.5吋_SATA_SSD_讀_560M_寫_530M__台灣代理商貨-4_WATERMARKED.jpg"
            ]
        }
    },
    "Seagate One Touch SSD 2TB": {
        images: {
            cover: "./images/SSD固態硬碟/Seagate_希捷_One_Touch_SSD_2TB_USB_TYPE-C_高速版_外接SSD__STKG2000402_《冰川藍》-1_WATERMARKED.jpg",
            gallery: [
                "./images/SSD固態硬碟/Seagate_希捷_One_Touch_SSD_2TB_USB_TYPE-C_高速版_外接SSD__STKG2000402_《冰川藍》-2_WATERMARKED.jpg",
                "./images/SSD固態硬碟/Seagate_希捷_One_Touch_SSD_2TB_USB_TYPE-C_高速版_外接SSD__STKG2000402_《冰川藍》-3_WATERMARKED.jpg",
                "./images/SSD固態硬碟/Seagate_希捷_One_Touch_SSD_2TB_USB_TYPE-C_高速版_外接SSD__STKG2000402_《冰川藍》-4_WATERMARKED.jpg"
            ]
        }
    },
    "Micron Crucial T700 2TB": {
        images: {
            cover: "./images/SSD固態硬碟/Micron_美光_Crucial_T700_2TB_PCIe_5.0_NVMe_SSD_讀_12400M_寫_11800M_WATERMARKED.jpg",
            gallery: []
        }
    },

    // ===== 內接式硬碟 =====
    "Seagate SkyHawk AI 8TB": {
        images: {
            cover: "./images/內接式硬碟/Seagate_希捷_監控鷹_SkyHawk_AI_8TB_7200轉_256MB_硬碟_ST8000VE001-5Y-3_WATERMARKED.jpg",
            gallery: ["./images/內接式硬碟/Seagate_希捷_監控鷹_SkyHawk_AI_8TB_7200轉_256MB_硬碟_ST8000VE001-5Y-4_WATERMARKED.jpg"]
        }
    },
    "WD Ultrastar DC HC520 12TB": {
        images: {
            cover: "./images/內接式硬碟/WD_威騰_Ultrastar_DC_HC520_12TB_3.5吋_7200轉_256MB快取_企業級硬碟_HUH721212ALE604_WATERMARKED.jpg",
            gallery: []
        }
    },

    // ===== 顯示卡 =====
    "MSI RTX 5070 Ti 16G INSPIRE": {
        images: {
            cover: "./images/顯示卡/MSI_微星_RTX_5070_Ti_16G_INSPIRE_3X_OC_顯示卡-1_WATERMARKED.jpg",
            gallery: [
                "./images/顯示卡/MSI_微星_RTX_5070_Ti_16G_INSPIRE_3X_OC_顯示卡-2_WATERMARKED.jpg",
                "./images/顯示卡/MSI_微星_RTX_5070_Ti_16G_INSPIRE_3X_OC_顯示卡-3_WATERMARKED.jpg",
                "./images/顯示卡/MSI_微星_RTX_5070_Ti_16G_INSPIRE_3X_OC_顯示卡-4_WATERMARKED.jpg"
            ]
        }
    },
    "AMD RadeonPro W6800 32G": {
        images: {
            cover: "./images/顯示卡/【客訂】AMD_RadeonPro_W6800_32G_256bit_專業繪圖卡-1_WATERMARKED.jpg",
            gallery: [
                "./images/顯示卡/【客訂】AMD_RadeonPro_W6800_32G_256bit_專業繪圖卡-2_WATERMARKED.jpg",
                "./images/顯示卡/【客訂】AMD_RadeonPro_W6800_32G_256bit_專業繪圖卡-3_WATERMARKED.jpg",
                "./images/顯示卡/【客訂】AMD_RadeonPro_W6800_32G_256bit_專業繪圖卡-4_WATERMARKED.jpg"
            ]
        }
    },

    // ===== 電源供應器 =====
    "Super Flower LEADEX VII PRO 1200W": {
        images: {
            cover: "./images/電源供應器/Super_Flower_振華_LEADEX_VII_PRO_1200W_白金牌_全模組_ATX3.1_PCIe_5.1_全日系_電源供應器_10年保-1_WATERMARKED.jpg",
            gallery: [
                "./images/電源供應器/Super_Flower_振華_LEADEX_VII_PRO_1200W_白金牌_全模組_ATX3.1_PCIe_5.1_全日系_電源供應器_10年保-2_WATERMARKED.jpg",
                "./images/電源供應器/Super_Flower_振華_LEADEX_VII_PRO_1200W_白金牌_全模組_ATX3.1_PCIe_5.1_全日系_電源供應器_10年保-3_WATERMARKED.jpg",
                "./images/電源供應器/Super_Flower_振華_LEADEX_VII_PRO_1200W_白金牌_全模組_ATX3.1_PCIe_5.1_全日系_電源供應器_10年保-4_WATERMARKED.jpg"
            ]
        }
    },

    // ===== 機殼 =====
    "ASUS Prime AP201": {
        images: {
            cover: "./images/電腦機殼/ASUS_華碩【Prime_AP201】M-ATX機殼《白》_顯卡長33.8_CPU高17-1_WATERMARKED.jpg",
            gallery: [
                "./images/電腦機殼/ASUS_華碩【Prime_AP201】M-ATX機殼《白》_顯卡長33.8_CPU高17-2_WATERMARKED.jpg",
                "./images/電腦機殼/ASUS_華碩【Prime_AP201】M-ATX機殼《白》_顯卡長33.8_CPU高17-3_WATERMARKED.jpg",
                "./images/電腦機殼/ASUS_華碩【Prime_AP201】M-ATX機殼《白》_顯卡長33.8_CPU高17-4_WATERMARKED.jpg"
            ]
        }
    },

    // ===== 散熱器 =====
    "Gigabyte AORUS WATERFORCE II 360": {
        images: {
            cover: "./images/散熱器水冷風扇/Gigabyte_技嘉_GP-AORUS_WATERFORCE_II_360_一體式水冷散熱器《黑》-1_WATERMARKED.jpg",
            gallery: [
                "./images/散熱器水冷風扇/Gigabyte_技嘉_GP-AORUS_WATERFORCE_II_360_一體式水冷散熱器《黑》-2_WATERMARKED.jpg",
                "./images/散熱器水冷風扇/Gigabyte_技嘉_GP-AORUS_WATERFORCE_II_360_一體式水冷散熱器《黑》-3_WATERMARKED.jpg",
                "./images/散熱器水冷風扇/Gigabyte_技嘉_GP-AORUS_WATERFORCE_II_360_一體式水冷散熱器《黑》-4_WATERMARKED.jpg"
            ]
        }
    },
    "darkFlash Nebula DN360S LCD": {
        images: {
            cover: "./images/散熱器水冷風扇/darkFlash_大飛_Nebula_DN360S_LCD_ARGB_一體式水冷散熱器《黑》_5年保-1_WATERMARKED.jpg",
            gallery: [
                "./images/散熱器水冷風扇/darkFlash_大飛_Nebula_DN360S_LCD_ARGB_一體式水冷散熱器《黑》_5年保-2_WATERMARKED.jpg",
                "./images/散熱器水冷風扇/darkFlash_大飛_Nebula_DN360S_LCD_ARGB_一體式水冷散熱器《黑》_5年保-3_WATERMARKED.jpg",
                "./images/散熱器水冷風扇/darkFlash_大飛_Nebula_DN360S_LCD_ARGB_一體式水冷散熱器《黑》_5年保-4_WATERMARKED.jpg"
            ]
        }
    },

    // ===== 擴充卡 =====
    "ASUS ZenDrive U9M": {
        images: {
            cover: "./images/燒錄器音效卡擴充卡/ASUS_華碩_ZenDrive_U9M_外接式燒錄器_SDRW-08U9M-U_《黑》_WATERMARKED.jpg",
            gallery: []
        }
    }
};

// 模糊匹配函數 - 找到最相似的商品名稱
function findBestMatch(productName, availableNames) {
    // 簡單的關鍵字匹配
    const productKeywords = productName.toLowerCase().split(/[\s\-_]+/);
    
    let bestMatch = null;
    let bestScore = 0;
    
    for (const availableName of availableNames) {
        const availableKeywords = availableName.toLowerCase().split(/[\s\-_]+/);
        
        // 計算匹配的關鍵字數量
        let matchCount = 0;
        for (const keyword of productKeywords) {
            if (availableKeywords.some(ak => ak.includes(keyword) || keyword.includes(ak))) {
                matchCount++;
            }
        }
        
        const score = matchCount / Math.max(productKeywords.length, availableKeywords.length);
        
        if (score > bestScore && score > 0.3) { // 至少30%相似度
            bestScore = score;
            bestMatch = availableName;
        }
    }
    
    return bestMatch;
}

// 主要更新函數
function updateProductImages() {
    console.log('📦 載入現有商品數據...');
    
    // 嘗試從 localStorage 載入商品
    let products = [];
    const productsData = localStorage.getItem('productsDatabase');
    
    if (productsData) {
        try {
            products = JSON.parse(productsData);
            console.log(`✅ 從 localStorage 載入了 ${products.length} 個商品`);
        } catch (e) {
            console.log('⚠️ localStorage 數據格式錯誤，使用原始商品數據');
        }
    }
    
    // 如果 localStorage 沒有數據，使用原始的 products 陣列
    if (products.length === 0 && typeof window.products !== 'undefined') {
        products = [...window.products];
        console.log(`✅ 使用原始商品數據，共 ${products.length} 個商品`);
    }
    
    if (products.length === 0) {
        console.error('❌ 找不到任何商品數據');
        return;
    }
    
    console.log('🔍 開始匹配圖片...');
    
    const availableNames = Object.keys(productImageMapping);
    let updatedCount = 0;
    
    // 為每個商品匹配圖片
    products.forEach((product, index) => {
        // 嘗試直接匹配
        let imageData = productImageMapping[product.name];
        
        // 如果直接匹配失敗，嘗試模糊匹配
        if (!imageData) {
            const bestMatch = findBestMatch(product.name, availableNames);
            if (bestMatch) {
                imageData = productImageMapping[bestMatch];
                console.log(`🔗 模糊匹配: "${product.name}" -> "${bestMatch}"`);
            }
        }
        
        // 如果找到匹配的圖片
        if (imageData) {
            // 確保產品有 images 結構
            if (!product.images) {
                product.images = {};
            }
            
            // 更新圖片路徑
            product.images.cover = imageData.images.cover;
            product.images.gallery = imageData.images.gallery || [];
            
            // 確保狀態為上架（如果沒有狀態的話）
            if (!product.status) {
                product.status = 'active';
            }
            
            // 更新時間戳
            if (!product.createdAt) {
                product.createdAt = new Date().toISOString();
            }
            product.updatedAt = new Date().toISOString();
            
            updatedCount++;
            console.log(`✅ 已更新商品「${product.name}」的圖片`);
            console.log(`   封面: ${imageData.images.cover.split('/').pop()}`);
            console.log(`   內頁: ${imageData.images.gallery.length} 張`);
        } else {
            console.log(`⚠️ 找不到商品「${product.name}」的對應圖片`);
            
            // 確保未匹配的商品也有基本的圖片結構
            if (!product.images) {
                product.images = {
                    cover: './images/placeholder.svg',
                    gallery: []
                };
            }
            
            // 確保狀態
            if (!product.status) {
                product.status = 'active';
            }
        }
    });
    
    // 保存更新後的商品數據
    try {
        localStorage.setItem('productsDatabase', JSON.stringify(products));
        console.log(`✅ 圖片更新完成！`);
        console.log(`📊 統計結果:`);
        console.log(`   - 成功匹配圖片: ${updatedCount} 個商品`);
        console.log(`   - 總商品數: ${products.length} 個`);
        console.log(`   - 匹配率: ${Math.round(updatedCount / products.length * 100)}%`);
        
        // 更新全域 products 變數（前台使用）
        if (typeof window.products !== 'undefined') {
            window.products = products.filter(p => p.status === 'active').map(p => ({
                ...p,
                image: p.images?.cover || p.image || './images/placeholder.svg'
            }));
            
            // 觸發前台重新渲染
            if (typeof window.renderProducts === 'function') {
                window.renderProducts();
                console.log('🔄 前台商品顯示已更新');
            }
        }
        
        console.log('🎉 所有圖片路徑更新完成！您現在可以在後台管理系統中看到對應的商品圖片。');
        
    } catch (error) {
        console.error('❌ 保存商品數據時發生錯誤:', error);
    }
}

// 檢查圖片檔案是否存在的函數
function checkImageExists(imagePath) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = imagePath;
    });
}

// 驗證圖片路徑的函數
async function validateImagePaths() {
    console.log('🔍 驗證圖片路徑...');
    
    const allImages = [];
    Object.values(productImageMapping).forEach(product => {
        allImages.push(product.images.cover);
        allImages.push(...product.images.gallery);
    });
    
    const uniqueImages = [...new Set(allImages)];
    
    let validCount = 0;
    let invalidCount = 0;
    
    for (const imagePath of uniqueImages) {
        const exists = await checkImageExists(imagePath);
        if (exists) {
            validCount++;
        } else {
            invalidCount++;
            console.warn(`⚠️ 圖片不存在: ${imagePath}`);
        }
    }
    
    console.log(`📊 圖片驗證結果:`);
    console.log(`   - 有效圖片: ${validCount} 個`);
    console.log(`   - 無效圖片: ${invalidCount} 個`);
    console.log(`   - 總計: ${uniqueImages.length} 個`);
}

// 導出函數
window.updateProductImages = updateProductImages;
window.validateImagePaths = validateImagePaths;

// 自動執行
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(updateProductImages, 1500);
    });
} else {
    setTimeout(updateProductImages, 500);
}

console.log('🖼️ 圖片路徑更新腳本已載入，即將自動執行...');