// 圖片與商品匹配腳本
// 自動將 images 資料夾中的圖片與商品進行匹配

console.log('開始圖片匹配程序...');

// 類別對應表
const categoryMapping = {
    'CPU': '中央處理器',
    'GPU': '顯示卡', 
    'SSD固態硬碟': 'SSD固態硬碟',
    '主機板AMD': '主機板',
    '主機板Intel': '主機板',
    '內接式硬碟': '儲存',
    '散熱器水冷風扇': '散熱',
    '燒錄器音效卡擴充卡': '擴充卡',
    '記憶體': '記憶體',
    '電源供應器': '電源',
    '電腦機殼': '機殼',
    '顯示卡': 'GPU'
};

// 品牌識別關鍵字
const brandKeywords = {
    'Intel': ['Intel', 'intel'],
    'AMD': ['AMD', 'amd', 'Ryzen'],
    'NVIDIA': ['RTX', 'GTX', 'GeForce'],
    'ASUS': ['ASUS', 'asus', '華碩'],
    'MSI': ['MSI', 'msi', '微星'],
    'Gigabyte': ['Gigabyte', 'gigabyte', '技嘉', 'AORUS', 'GAMING'],
    'Samsung': ['Samsung', 'samsung', '三星'],
    'Corsair': ['Corsair', 'corsair'],
    'G.Skill': ['G.Skill', 'gskill'],
    'Kingston': ['Kingston', 'kingston', '金士頓'],
    'WD': ['WD', 'wd', '威騰', 'Western', 'Digital'],
    'Seagate': ['Seagate', 'seagate', '希捷'],
    'Seasonic': ['Seasonic', 'seasonic'],
    'be quiet!': ['be quiet', 'bequiet'],
    'NZXT': ['NZXT', 'nzxt'],
    'Fractal Design': ['Fractal', 'fractal'],
    'Cooler Master': ['Cooler Master', 'coolermaster', '酷碼', 'CoolerMaster'],
    'Noctua': ['Noctua', 'noctua'],
    'Arctic': ['Arctic', 'arctic'],
    'Logitech': ['Logitech', 'logitech', '羅技'],
    'Razer': ['Razer', 'razer', '雷蛇'],
    'SteelSeries': ['SteelSeries', 'steelseries'],
    'ADATA': ['ADATA', 'adata', '威剛'],
    'Micron': ['Micron', 'micron', '美光', 'Crucial'],
    'Transcend': ['Transcend', 'transcend', '創見'],
    'FSP': ['FSP', 'fsp', '全漢'],
    'Super Flower': ['Super Flower', 'superflower', '振華'],
    'Thermaltake': ['Thermaltake', 'thermaltake', '曜越'],
    'LIAN LI': ['LIAN LI', 'lianli', '聯力'],
    'Biwin': ['Biwin', 'biwin', '佰維'],
    'TrendSonic': ['TrendSonic', 'trendsonic', '翰欣'],
    'darkFlash': ['darkFlash', 'darkflash', '大飛'],
    'ACER': ['ACER', 'acer', '宏碁', 'Predator'],
    'Cougar': ['Cougar', 'cougar', '美洲獅'],
    'EQ': ['EQ']
};

// 圖片路徑結構
const imageStructure = {
    'SSD固態硬碟': {
        category: '儲存',
        images: [
            { name: 'Biwin_佰維_M350_4TB_M.2_PCIe_Gen4_SSD【五年保】_R_W_6000_5000MB_s_WATERMARKED.png', brand: 'Biwin' },
            { name: 'Kingston_金士頓_KC600_1TB_2.5吋_SATA_SSD【五年保】_讀_550M_寫_520M_TLC__SKC600_1024G_WATERMARKED.jpg', brand: 'Kingston' },
            { name: 'MSI_微星_DATAMAG_20Gbps_1TB_雙介面磁吸式外接式SSD_讀_1600M_寫_1500M_WATERMARKED.jpg', brand: 'MSI' },
            { name: 'MSI_微星_SPATIUM_M560_2TB_PCIe_5.0_M.2_SSD_讀_10300M_寫_8700M_WATERMARKED.jpg', brand: 'MSI' },
            { name: 'Micron_美光_Crucial_T700_2TB_PCIe_5.0_NVMe_SSD_讀_12400M_寫_11800M_WATERMARKED.jpg', brand: 'Micron' },
            { name: 'Samsung_三星_870_EVO_2TB_2.5吋_SATA_SSD_讀_560M_寫_530M__台灣代理商貨-1_WATERMARKED.jpg', brand: 'Samsung', isMain: true },
            { name: 'Samsung_三星_870_EVO_2TB_2.5吋_SATA_SSD_讀_560M_寫_530M__台灣代理商貨-2_WATERMARKED.jpg', brand: 'Samsung' },
            { name: 'Samsung_三星_870_EVO_2TB_2.5吋_SATA_SSD_讀_560M_寫_530M__台灣代理商貨-3_WATERMARKED.jpg', brand: 'Samsung' },
            { name: 'Samsung_三星_870_EVO_2TB_2.5吋_SATA_SSD_讀_560M_寫_530M__台灣代理商貨-4_WATERMARKED.jpg', brand: 'Samsung' },
            { name: 'Seagate_希捷_One_Touch_SSD_2TB_USB_TYPE-C_高速版_外接SSD__STKG2000402_《冰川藍》-1_WATERMARKED.jpg', brand: 'Seagate', isMain: true },
            { name: 'Seagate_希捷_One_Touch_SSD_2TB_USB_TYPE-C_高速版_外接SSD__STKG2000402_《冰川藍》-2_WATERMARKED.jpg', brand: 'Seagate' },
            { name: 'Seagate_希捷_One_Touch_SSD_2TB_USB_TYPE-C_高速版_外接SSD__STKG2000402_《冰川藍》-3_WATERMARKED.jpg', brand: 'Seagate' },
            { name: 'Seagate_希捷_One_Touch_SSD_2TB_USB_TYPE-C_高速版_外接SSD__STKG2000402_《冰川藍》-4_WATERMARKED.jpg', brand: 'Seagate' }
        ]
    },
    '中央處理器': {
        category: 'CPU',
        images: [
            { name: 'AMD_Ryzen_5_5600GT_6核_12緒_處理器《3.6GHz_19M_65W_AM4》_WATERMARKED.jpg', brand: 'AMD' },
            { name: 'Intel_Core_i5-14400F_10核16緒_處理器_第14代_《2.5Ghz_LGA1700_無內顯》_代理商貨_WATERMARKED.jpg', brand: 'Intel' },
            { name: 'Intel_Core_i9-14900F_24核32緒_處理器_第14代_《2.0Ghz_LGA1700_無內顯》_代理商貨_WATERMARKED.jpg', brand: 'Intel' },
            { name: 'Intel_Xeon_Silver_4310_12核24緒_處理器《2.1Ghz_LGA4189》_代理商貨_WATERMARKED.jpg', brand: 'Intel' },
            { name: '【搭機價】Intel_Core_i7-14700KF_20核28緒_處理器_第14代_《3.4Ghz_LGA1700_不含風扇_無內顯》_代理商貨-2_WATERMARKED.jpg', brand: 'Intel', isMain: true },
            { name: '【搭機價】Intel_Core_i7-14700KF_20核28緒_處理器_第14代_《3.4Ghz_LGA1700_不含風扇_無內顯》_代理商貨-3_WATERMARKED.jpg', brand: 'Intel' }
        ]
    },
    '主機板AMD': {
        category: '主機板',
        images: [
            { name: 'ASUS_華碩_PRIME_B550M-K_ARGB-CSM_AM4主機板__M-ATX_3+1年保_【無痛升級K_CSM】_WATERMARKED.jpg', brand: 'ASUS' },
            { name: 'ASUS_華碩_PRIME_B840-PLUS_WIFI-CSM_AM5主機板_ATX_3+1年保_WATERMARKED.jpg', brand: 'ASUS' },
            { name: 'ASUS_華碩_TUF-GAMING-B850-E-WIFI_D5_AM5主機板_ATX_3+2年保-1_WATERMARKED.jpg', brand: 'ASUS', isMain: true },
            { name: 'ASUS_華碩_TUF-GAMING-B850-E-WIFI_D5_AM5主機板_ATX_3+2年保-2_WATERMARKED.jpg', brand: 'ASUS' },
            { name: 'ASUS_華碩_TUF-GAMING-B850-E-WIFI_D5_AM5主機板_ATX_3+2年保-3_WATERMARKED.jpg', brand: 'ASUS' },
            { name: 'ASUS_華碩_TUF-GAMING-B850-E-WIFI_D5_AM5主機板_ATX_3+2年保-4_WATERMARKED.jpg', brand: 'ASUS' },
            { name: 'Gigabyte_技嘉_X870_GAMING_X_WIFI7_AM5主機板_ATX_3+2年保_WATERMARKED.jpg', brand: 'Gigabyte' },
            { name: 'MSI_微星_B650M_GAMING_PLUS_WIFI_AM5主機板_M-ATX_3+2年保_WATERMARKED.jpg', brand: 'MSI' }
        ]
    },
    '主機板Intel': {
        category: '主機板',
        images: [
            { name: 'ASUS_華碩_PRIME_H310M-K_LGA1151主機板__M-ATX_3+1年保_WATERMARKED.jpg', brand: 'ASUS' },
            { name: 'Gigabyte_技嘉_B860_GAMING_X_WIFI6E_D5_LGA1851主機板_ATX_3+2年保-1_WATERMARKED.jpg', brand: 'Gigabyte', isMain: true },
            { name: 'Gigabyte_技嘉_B860_GAMING_X_WIFI6E_D5_LGA1851主機板_ATX_3+2年保-2_WATERMARKED.jpg', brand: 'Gigabyte' },
            { name: 'Gigabyte_技嘉_B860_GAMING_X_WIFI6E_D5_LGA1851主機板_ATX_3+2年保-3_WATERMARKED.jpg', brand: 'Gigabyte' },
            { name: 'Gigabyte_技嘉_B860_GAMING_X_WIFI6E_D5_LGA1851主機板_ATX_3+2年保-4_WATERMARKED.jpg', brand: 'Gigabyte' },
            { name: 'MSI_微星_B760M_PROJECT_ZERO_背插版_D5_LGA1700主機板_M-ATX_3+2年保_WATERMARKED.jpg', brand: 'MSI' },
            { name: 'MSI_微星_PRO_Z890-P_WIFI_D5_LGA1851主機板_ATX_3+1年保_WATERMARKED.jpg', brand: 'MSI' },
            { name: 'MSI_微星_Z890_GAMING_PLUS_WIFI_D5_LGA1851主機板_ATX_3+2年保_WATERMARKED.jpg', brand: 'MSI' }
        ]
    },
    '內接式硬碟': {
        category: '儲存',
        images: [
            { name: 'Seagate_希捷_監控鷹_SkyHawk_AI_10TB_7200轉_256MB_監控硬碟_ST10000VE001-5Y_WATERMARKED.jpg', brand: 'Seagate' },
            { name: 'Seagate_希捷_監控鷹_SkyHawk_AI_8TB_7200轉_256MB_硬碟_ST8000VE001-5Y-3_WATERMARKED.jpg', brand: 'Seagate', isMain: true },
            { name: 'Seagate_希捷_監控鷹_SkyHawk_AI_8TB_7200轉_256MB_硬碟_ST8000VE001-5Y-4_WATERMARKED.jpg', brand: 'Seagate' },
            { name: 'Seagate_希捷_那嘶狼_IronWolf_8TB_5400轉_NAS專用硬碟_ST8000VN002-3Y_WATERMARKED.jpg', brand: 'Seagate' },
            { name: 'WD_威騰_4TB_3.5吋_7200轉_企業級資料中心硬碟《金標》WD4004FRYZ-5Y_WATERMARKED.jpg', brand: 'WD' },
            { name: 'WD_威騰_Ultrastar_DC_HC520_12TB_3.5吋_7200轉_256MB快取_企業級硬碟_HUH721212ALE604_WATERMARKED.jpg', brand: 'WD' }
        ]
    },
    '散熱器水冷風扇': {
        category: '散熱',
        images: [
            { name: 'ADATA_威剛_XPG_VENTO_120_ARGB_PWM_單入_12CM_1850轉來福軸承_機殼風扇《黑》_WATERMARKED.jpg', brand: 'ADATA' },
            { name: 'Gigabyte_技嘉_GP-AORUS_WATERFORCE_II_360_一體式水冷散熱器《黑》-1_WATERMARKED.jpg', brand: 'Gigabyte', isMain: true },
            { name: 'Gigabyte_技嘉_GP-AORUS_WATERFORCE_II_360_一體式水冷散熱器《黑》-2_WATERMARKED.jpg', brand: 'Gigabyte' },
            { name: 'Gigabyte_技嘉_GP-AORUS_WATERFORCE_II_360_一體式水冷散熱器《黑》-3_WATERMARKED.jpg', brand: 'Gigabyte' },
            { name: 'Gigabyte_技嘉_GP-AORUS_WATERFORCE_II_360_一體式水冷散熱器《黑》-4_WATERMARKED.jpg', brand: 'Gigabyte' },
            { name: 'LIAN_LI_聯力_UNI_FAN_AL120_V2_ARGB積木風扇_單入_《黑》_WATERMARKED.jpg', brand: 'LIAN LI' },
            { name: 'LIAN_LI_聯力_UNI_FAN_SL-INF_Wireless_120_白_單入_反向ARGB風扇__需搭無線控制器__-12RSLIN1W1W_WATERMARKED.jpg', brand: 'LIAN LI' },
            { name: 'darkFlash_大飛_Nebula_DN360S_LCD_ARGB_一體式水冷散熱器《黑》_5年保-1_WATERMARKED.jpg', brand: 'darkFlash', isMain: true },
            { name: 'darkFlash_大飛_Nebula_DN360S_LCD_ARGB_一體式水冷散熱器《黑》_5年保-2_WATERMARKED.jpg', brand: 'darkFlash' },
            { name: 'darkFlash_大飛_Nebula_DN360S_LCD_ARGB_一體式水冷散熱器《黑》_5年保-3_WATERMARKED.jpg', brand: 'darkFlash' },
            { name: 'darkFlash_大飛_Nebula_DN360S_LCD_ARGB_一體式水冷散熱器《黑》_5年保-4_WATERMARKED.jpg', brand: 'darkFlash' }
        ]
    },
    '記憶體': {
        category: '記憶體',
        images: [
            { name: 'ACER_宏碁_Predator_Vesta2_DDR5-6800_32GB_16G_2__CL34_RGB超頻記憶體《黑》_WATERMARKED.jpg', brand: 'ACER' },
            { name: 'ADATA_威剛_DDR4-3200_16G_筆記型記憶體_2048_8_WATERMARKED.jpg', brand: 'ADATA' },
            { name: 'ADATA_威剛_DDR5-4800_16G_桌上型記憶體-1_WATERMARKED.jpg', brand: 'ADATA', isMain: true },
            { name: 'ADATA_威剛_DDR5-4800_16G_桌上型記憶體-2_WATERMARKED.jpg', brand: 'ADATA' },
            { name: 'ADATA_威剛_DDR5-4800_16G_桌上型記憶體-3_WATERMARKED.jpg', brand: 'ADATA' },
            { name: 'ADATA_威剛_DDR5-4800_16G_桌上型記憶體-4_WATERMARKED.jpg', brand: 'ADATA' },
            { name: 'ADATA_威剛_DDR5-5600_16G_桌上型記憶體-1_WATERMARKED.jpg', brand: 'ADATA' },
            { name: 'ADATA_威剛_DDR5-5600_16G_桌上型記憶體-3_WATERMARKED.jpg', brand: 'ADATA' },
            { name: 'ADATA_威剛_XPG_LANCER_BLADE_DDR5-6000_16G_2_CL28_電競記憶體〈白〉_WATERMARKED.jpg', brand: 'ADATA' },
            { name: 'Micron_美光_Crucial_NB_DDR5-5600_16G_筆記型記憶體-1_WATERMARKED.jpg', brand: 'Micron', isMain: true },
            { name: 'Micron_美光_Crucial_NB_DDR5-5600_16G_筆記型記憶體-2_WATERMARKED.jpg', brand: 'Micron' },
            { name: 'Micron_美光_Crucial_NB_DDR5-5600_16G_筆記型記憶體-3_WATERMARKED.jpg', brand: 'Micron' },
            { name: 'Micron_美光_Crucial_NB_DDR5-5600_16G_筆記型記憶體-4_WATERMARKED.jpg', brand: 'Micron' },
            { name: 'Transcend_創見_JetRam_DDR5-4800_32GB_桌上型記憶體_JM4800ALE-32G_WATERMARKED.jpg', brand: 'Transcend' }
        ]
    },
    '電源供應器': {
        category: '電源',
        images: [
            { name: 'Cougar_美洲獅_ATLAS_550_銅牌_直出_主日系_DC-DC_電源供應器_5年保_WATERMARKED.jpg', brand: 'Cougar' },
            { name: 'FSP_全漢_金鋼彈_850W_金牌_全模組_ATX3.0_PCIe_5.0__SFX電源供應器《白》_10年保2年換新_SDA2-850,GEN5_W_WATERMARKED.jpg', brand: 'FSP' },
            { name: 'LIAN_LI_聯力_EDGE_1200W_金牌_全模組_ATX3.1_PCIe_5.1_附可拆卸USB_HUB_L型電源供應器《白》_10年保_WATERMARKED.jpg', brand: 'LIAN LI' },
            { name: 'Super_Flower_振華_LEADEX_VII_PRO_1200W_白金牌_全模組_ATX3.1_PCIe_5.1_全日系_電源供應器_10年保-1_WATERMARKED.jpg', brand: 'Super Flower', isMain: true },
            { name: 'Super_Flower_振華_LEADEX_VII_PRO_1200W_白金牌_全模組_ATX3.1_PCIe_5.1_全日系_電源供應器_10年保-2_WATERMARKED.jpg', brand: 'Super Flower' },
            { name: 'Super_Flower_振華_LEADEX_VII_PRO_1200W_白金牌_全模組_ATX3.1_PCIe_5.1_全日系_電源供應器_10年保-3_WATERMARKED.jpg', brand: 'Super Flower' },
            { name: 'Super_Flower_振華_LEADEX_VII_PRO_1200W_白金牌_全模組_ATX3.1_PCIe_5.1_全日系_電源供應器_10年保-4_WATERMARKED.jpg', brand: 'Super Flower' },
            { name: 'Thermaltake_曜越_Toughpower_iRGB_PLUS_1650W_鈦金牌_全模組_全日系_ATX3.0_PCIe_5.0_電源供應器_十年保_WATERMARKED.jpg', brand: 'Thermaltake' }
        ]
    },
    '電腦機殼': {
        category: '機殼',
        images: [
            { name: 'ASUS_華碩【Prime_AP201】M-ATX機殼《白》_顯卡長33.8_CPU高17-1_WATERMARKED.jpg', brand: 'ASUS', isMain: true },
            { name: 'ASUS_華碩【Prime_AP201】M-ATX機殼《白》_顯卡長33.8_CPU高17-2_WATERMARKED.jpg', brand: 'ASUS' },
            { name: 'ASUS_華碩【Prime_AP201】M-ATX機殼《白》_顯卡長33.8_CPU高17-3_WATERMARKED.jpg', brand: 'ASUS' },
            { name: 'ASUS_華碩【Prime_AP201】M-ATX機殼《白》_顯卡長33.8_CPU高17-4_WATERMARKED.jpg', brand: 'ASUS' },
            { name: 'Cooler_Master_酷碼【Elite_500】光碟機版_ATX電腦機殼《黑》_顯卡長40_CPU高16.3_WATERMARKED.jpg', brand: 'Cooler Master' },
            { name: 'Cooler_Master_酷碼【Qube_500_Flatpack_DIY版本】玻璃透側_E-ATX電腦機殼《馬卡龍》_不提供組裝服務_WATERMARKED.jpg', brand: 'Cooler Master' },
            { name: 'FSP_全漢【S140-BA】全景玻璃透側_M-ATX機殼《黑》_顯卡32.5_CPU高15.5_WATERMARKED.jpg', brand: 'FSP' },
            { name: 'TrendSonic_翰欣【PA25】M-ATX電腦機殼《黑》_WATERMARKED.jpg', brand: 'TrendSonic' }
        ]
    },
    '顯示卡': {
        category: 'GPU',
        images: [
            { name: 'Gigabyte_技嘉_AORUS_RTX_5070_MASTER_12G_顯示卡_WATERMARKED.jpg', brand: 'Gigabyte' },
            { name: 'Gigabyte_技嘉_RTX_5060_Ti_GAMING_OC_16G_顯示卡_WATERMARKED.jpg', brand: 'Gigabyte' },
            { name: 'Gigabyte_技嘉_RX_9060_XT_GAMING_OC_8G_顯示卡_WATERMARKED.jpg', brand: 'Gigabyte' },
            { name: 'MSI_微星_RTX_5070_Ti_16G_INSPIRE_3X_OC_顯示卡-1_WATERMARKED.jpg', brand: 'MSI', isMain: true },
            { name: 'MSI_微星_RTX_5070_Ti_16G_INSPIRE_3X_OC_顯示卡-2_WATERMARKED.jpg', brand: 'MSI' },
            { name: 'MSI_微星_RTX_5070_Ti_16G_INSPIRE_3X_OC_顯示卡-3_WATERMARKED.jpg', brand: 'MSI' },
            { name: 'MSI_微星_RTX_5070_Ti_16G_INSPIRE_3X_OC_顯示卡-4_WATERMARKED.jpg', brand: 'MSI' },
            { name: '【客訂】AMD_RadeonPro_W6800_32G_256bit_專業繪圖卡-1_WATERMARKED.jpg', brand: 'AMD', isMain: true },
            { name: '【客訂】AMD_RadeonPro_W6800_32G_256bit_專業繪圖卡-2_WATERMARKED.jpg', brand: 'AMD' },
            { name: '【客訂】AMD_RadeonPro_W6800_32G_256bit_專業繪圖卡-3_WATERMARKED.jpg', brand: 'AMD' },
            { name: '【客訂】AMD_RadeonPro_W6800_32G_256bit_專業繪圖卡-4_WATERMARKED.jpg', brand: 'AMD' }
        ]
    },
    '燒錄器音效卡擴充卡': {
        category: '擴充卡',
        images: [
            { name: 'ASUS_華碩_HYPER_M.2_X16_GEN_4_CARD_擴充轉接卡_WATERMARKED.jpg', brand: 'ASUS' },
            { name: 'ASUS_華碩_THUNDERBOLTEX_5_擴充卡_WATERMARKED.jpg', brand: 'ASUS' },
            { name: 'ASUS_華碩_USB4_PCIe_Gen4_Card_擴充卡_WATERMARKED.jpg', brand: 'ASUS' },
            { name: 'ASUS_華碩_ZenDrive_U9M_外接式燒錄器_SDRW-08U9M-U_《黑》_WATERMARKED.jpg', brand: 'ASUS', isMain: true },
            { name: 'EQ_M.2_轉_PCIE_轉接卡_WATERMARKED.jpg', brand: 'EQ' }
        ]
    }
};

// 為現有商品添加圖片的函數
function addImagesToProducts() {
    console.log('開始為現有商品添加圖片...');
    
    // 載入現有商品數據
    const productsData = localStorage.getItem('productsDatabase');
    if (!productsData) {
        console.log('沒有找到商品數據庫');
        return;
    }
    
    let products;
    try {
        products = JSON.parse(productsData);
    } catch (e) {
        console.error('商品數據格式錯誤:', e);
        return;
    }
    
    console.log(`找到 ${products.length} 個現有商品`);
    
    let updatedCount = 0;
    
    // 為每個商品匹配圖片
    products.forEach(product => {
        // 根據商品類別和品牌找圖片
        for (const [folderName, folderData] of Object.entries(imageStructure)) {
            if (folderData.category === product.category || 
                (product.category === '儲存' && (folderData.category === '儲存' || folderName === 'SSD固態硬碟'))) {
                
                // 找到與品牌匹配的圖片
                const matchingImages = folderData.images.filter(img => 
                    img.brand === product.brand || 
                    (product.brand === 'Micron' && img.brand === 'Micron') ||
                    (product.brand === 'G.Skill' && folderName === '記憶體')
                );
                
                if (matchingImages.length > 0) {
                    // 找封面圖片（標記為 isMain 的或第一張）
                    const mainImage = matchingImages.find(img => img.isMain) || matchingImages[0];
                    const galleryImages = matchingImages.filter(img => !img.isMain).map(img => `./images/${folderName}/${img.name}`);
                    
                    // 更新商品圖片
                    if (!product.images) {
                        product.images = {};
                    }
                    
                    product.images.cover = `./images/${folderName}/${mainImage.name}`;
                    product.images.gallery = galleryImages;
                    
                    updatedCount++;
                    console.log(`✅ 已為商品「${product.name}」添加圖片`);
                    console.log(`   封面: ${mainImage.name}`);
                    console.log(`   內頁: ${galleryImages.length} 張`);
                    break;
                }
            }
        }
    });
    
    // 儲存更新後的商品數據
    try {
        localStorage.setItem('productsDatabase', JSON.stringify(products));
        console.log(`✅ 圖片匹配完成！共更新了 ${updatedCount} 個商品的圖片`);
        
        // 顯示統計
        const withImages = products.filter(p => p.images && p.images.cover !== './images/placeholder.svg').length;
        const withoutImages = products.length - withImages;
        
        console.log('\n📊 統計結果:');
        console.log(`- 有圖片的商品: ${withImages} 個`);
        console.log(`- 沒有圖片的商品: ${withoutImages} 個`);
        
    } catch (error) {
        console.error('❌ 儲存商品數據時發生錯誤:', error);
    }
}

// 創建新商品的函數（基於現有圖片）
function createProductsFromImages() {
    console.log('根據圖片結構創建新商品...');
    
    const newProducts = [];
    let nextId = 1000; // 從 1000 開始，避免與現有商品衝突
    
    Object.entries(imageStructure).forEach(([folderName, folderData]) => {
        // 按品牌分組圖片
        const brandGroups = {};
        folderData.images.forEach(img => {
            if (!brandGroups[img.brand]) {
                brandGroups[img.brand] = [];
            }
            brandGroups[img.brand].push(img);
        });
        
        // 為每個品牌創建一個商品
        Object.entries(brandGroups).forEach(([brand, images]) => {
            const mainImage = images.find(img => img.isMain) || images[0];
            const galleryImages = images.filter(img => !img.isMain).map(img => `./images/${folderName}/${img.name}`);
            
            // 從檔名提取商品名稱（去掉品牌前綴和後綴）
            let productName = mainImage.name
                .replace(/_WATERMARKED\.(jpg|png)$/i, '')
                .replace(new RegExp(`^${brand}_[^_]*_`, 'i'), '')
                .replace(/_/g, ' ')
                .trim();
            
            if (!productName) {
                productName = `${brand} ${folderData.category} 產品`;
            }
            
            // 估算價格（根據類別）
            const priceRanges = {
                'CPU': [8000, 25000],
                'GPU': [15000, 40000],
                '主機板': [3000, 15000],
                '記憶體': [2000, 8000],
                '儲存': [2000, 15000],
                '電源': [2000, 8000],
                '機殼': [1500, 5000],
                '散熱': [1000, 8000],
                '擴充卡': [800, 3000]
            };
            
            const [minPrice, maxPrice] = priceRanges[folderData.category] || [1000, 5000];
            const price = Math.floor(Math.random() * (maxPrice - minPrice) + minPrice);
            
            const product = {
                id: nextId++,
                name: productName,
                price: price,
                category: folderData.category,
                brand: brand,
                emoji: getCategoryEmoji(folderData.category),
                status: 'active',
                description: `${brand} ${productName} - 高品質${folderData.category}產品`,
                specifications: {},
                images: {
                    cover: `./images/${folderName}/${mainImage.name}`,
                    gallery: galleryImages
                },
                bgColor: getBrandColor(brand),
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };
            
            newProducts.push(product);
        });
    });
    
    console.log(`準備創建 ${newProducts.length} 個新商品`);
    return newProducts;
}

// 獲取類別表情符號
function getCategoryEmoji(category) {
    const emojiMap = {
        'CPU': '💻',
        'GPU': '🎮', 
        '主機板': '🔌',
        '記憶體': '🧠',
        '儲存': '💾',
        '電源': '⚡',
        '機殼': '📦',
        '散熱': '🌀',
        '擴充卡': '🔧'
    };
    return emojiMap[category] || '📦';
}

// 獲取品牌顏色
function getBrandColor(brand) {
    const brandColors = {
        'Intel': 'linear-gradient(135deg, #0071c5, #0044aa)',
        'AMD': 'linear-gradient(135deg, #ed1c24, #b91c1c)',
        'NVIDIA': 'linear-gradient(135deg, #00d4aa, #007bff)',
        'ASUS': 'linear-gradient(135deg, #00d4aa, #007bff)',
        'MSI': 'linear-gradient(135deg, #ff6b35, #f7931e)',
        'Gigabyte': 'linear-gradient(135deg, #00d4aa, #007bff)',
        'Samsung': 'linear-gradient(135deg, #1f8ef1, #1565c0)',
        'Kingston': 'linear-gradient(135deg, #000000, #333333)',
        'WD': 'linear-gradient(135deg, #000000, #333333)',
        'Seagate': 'linear-gradient(135deg, #4fc3f7, #29b6f6)',
        'ADATA': 'linear-gradient(135deg, #ff6b35, #f7931e)',
        'Micron': 'linear-gradient(135deg, #4fc3f7, #29b6f6)',
        'Transcend': 'linear-gradient(135deg, #28a745, #20c997)',
        'FSP': 'linear-gradient(135deg, #ffd700, #ffb347)',
        'Super Flower': 'linear-gradient(135deg, #ff6b35, #f7931e)',
        'Thermaltake': 'linear-gradient(135deg, #dc3545, #c82333)',
        'LIAN LI': 'linear-gradient(135deg, #667eea, #764ba2)',
        'Cooler Master': 'linear-gradient(135deg, #667eea, #764ba2)',
        'darkFlash': 'linear-gradient(135deg, #343a40, #212529)',
        'ACER': 'linear-gradient(135deg, #00d4aa, #007bff)',
        'Cougar': 'linear-gradient(135deg, #ff6b35, #f7931e)',
        'TrendSonic': 'linear-gradient(135deg, #667eea, #764ba2)',
        'Biwin': 'linear-gradient(135deg, #28a745, #20c997)',
        'EQ': 'linear-gradient(135deg, #6c757d, #495057)'
    };
    return brandColors[brand] || 'linear-gradient(135deg, #667eea, #764ba2)';
}

// 主要執行函數
function runImageMatcher() {
    console.log('🚀 開始執行圖片匹配程序');
    
    // 為現有商品添加圖片
    addImagesToProducts();
    
    console.log('✅ 圖片匹配程序執行完成！');
    console.log('💡 現在您可以在後台管理系統中看到已匹配的商品圖片。');
}

// 導出函數到全域
window.addImagesToProducts = addImagesToProducts;
window.createProductsFromImages = createProductsFromImages;
window.runImageMatcher = runImageMatcher;

// 自動執行
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(runImageMatcher, 2000);
    });
} else {
    setTimeout(runImageMatcher, 1000);
}