// 需要添加到 script.js 中的額外商品數據
// 用來補充各品牌到5個商品的需求

// ===== 記憶體 - 補充商品 =====
const memoryProducts = [
    {
        id: 63,
        name: "Corsair Vengeance LPX DDR4-3200 32GB Kit (2x16GB) CL16",
        description: "DDR4-3200 MT/s，32GB雙通道套件，CL16延遲，低高度設計，兼容性極佳",
        price: 2995,
        image: "https://img.pchome.com.tw/cs/items/CORSAIR_DDR4_32GB/000001_1736138237.jpg",
        category: "記憶體",
        brand: "Corsair",
        emoji: "🧠",
        bgColor: "linear-gradient(135deg, #ffd700, #ffb347)",
        specifications: {
            "產品型號": "CMK32GX4M2E3200C16",
            "容量": "32GB (2x16GB)",
            "記憶體類型": "DDR4 DRAM",
            "速度": "3200 MT/s",
            "延遲": "CL16",
            "散熱片": "鋁製低高度散熱片",
            "品牌": "Corsair 海盜船"
        }
    },
    {
        id: 64,
        name: "Corsair Dominator Platinum RGB DDR5-6000 32GB Kit",
        description: "DDR5-6000 MT/s，32GB套件，RGB燈效，頂級散熱設計，超頻專用",
        price: 6995,
        image: "https://img.pchome.com.tw/cs/items/CORSAIR_DDR5_DOMINATOR/000001_1736238237.jpg",
        category: "記憶體",
        brand: "Corsair",
        emoji: "🧠",
        bgColor: "linear-gradient(135deg, #ffd700, #ffb347)",
        specifications: {
            "產品系列": "Dominator Platinum RGB",
            "容量": "32GB (2x16GB)",
            "記憶體類型": "DDR5 DRAM",
            "速度": "6000 MT/s",
            "RGB燈效": "12個獨立可控LED",
            "散熱設計": "頂級鋁製散熱片",
            "品牌": "Corsair 海盜船"
        }
    },
    {
        id: 65,
        name: "G.Skill Ripjaws V DDR4-3600 32GB Kit (2x16GB) CL16",
        description: "DDR4-3600 MT/s，32GB套件，CL16延遲，遊戲最佳化，高相容性",
        price: 3200,
        image: "https://img.pchome.com.tw/cs/items/GSKILL_DDR4_RIPJAWS/000001_1736338237.jpg",
        category: "記憶體",
        brand: "G.Skill",
        emoji: "⚡",
        bgColor: "linear-gradient(135deg, #ff6b35, #f7931e)",
        specifications: {
            "產品系列": "Ripjaws V",
            "容量": "32GB (2x16GB)",
            "記憶體類型": "DDR4 DRAM",
            "速度": "3600 MT/s",
            "延遲": "CL16",
            "品牌": "G.Skill 芝奇"
        }
    },
    {
        id: 66,
        name: "G.Skill Flare X5 DDR5-6000 32GB Kit AMD優化版",
        description: "DDR5-6000 MT/s，32GB套件，AMD EXPO支援，AM5平台最佳化",
        price: 4800,
        image: "https://img.pchome.com.tw/cs/items/GSKILL_DDR5_FLAREX5/000001_1736438237.jpg",
        category: "記憶體",
        brand: "G.Skill",
        emoji: "⚡",
        bgColor: "linear-gradient(135deg, #ff6b35, #f7931e)",
        specifications: {
            "產品系列": "Flare X5",
            "容量": "32GB (2x16GB)",
            "記憶體類型": "DDR5 DRAM",
            "速度": "6000 MT/s",
            "AMD EXPO": "支援",
            "品牌": "G.Skill 芝奇"
        }
    },
    {
        id: 67,
        name: "Kingston FURY Renegade DDR5-6400 32GB Kit",
        description: "DDR5-6400 MT/s，32GB套件，極致超頻性能，RGB燈效版本",
        price: 5500,
        image: "https://img.pchome.com.tw/cs/items/KINGSTON_DDR5_RENEGADE/000001_1736538237.jpg",
        category: "記憶體",
        brand: "Kingston",
        emoji: "🛡️",
        bgColor: "linear-gradient(135deg, #000000, #333333)",
        specifications: {
            "產品系列": "FURY Renegade RGB",
            "容量": "32GB (2x16GB)",
            "記憶體類型": "DDR5 DRAM",
            "速度": "6400 MT/s",
            "RGB燈效": "支援",
            "品牌": "Kingston 金士頓"
        }
    },
    {
        id: 68,
        name: "Kingston ValueRAM DDR4-2666 16GB",
        description: "DDR4-2666 MT/s，16GB單條，穩定可靠，商用首選",
        price: 1200,
        image: "https://img.pchome.com.tw/cs/items/KINGSTON_DDR4_VALUE/000001_1736638237.jpg",
        category: "記憶體",
        brand: "Kingston",
        emoji: "🛡️",
        bgColor: "linear-gradient(135deg, #000000, #333333)",
        specifications: {
            "產品系列": "ValueRAM",
            "容量": "16GB",
            "記憶體類型": "DDR4 DRAM",
            "速度": "2666 MT/s",
            "特色": "商用級穩定性",
            "品牌": "Kingston 金士頓"
        }
    }
];

// ===== 儲存 - 補充商品 =====
const storageProducts = [
    {
        id: 69,
        name: "Samsung 980 PRO 1TB NVMe M.2 SSD",
        description: "PCIe Gen4，讀取7000MB/s，寫入5000MB/s，高性能遊戲SSD",
        price: 3299,
        image: "https://img.pchome.com.tw/cs/items/SAMSUNG_980PRO_1TB/000001_1736738237.jpg",
        category: "儲存",
        brand: "Samsung",
        emoji: "💾",
        bgColor: "linear-gradient(135deg, #1f8ef1, #1565c0)",
        specifications: {
            "產品型號": "MZ-V8P1T0BW",
            "容量": "1TB",
            "介面": "PCIe Gen4 NVMe M.2",
            "讀取速度": "7000 MB/s",
            "寫入速度": "5000 MB/s",
            "品牌": "Samsung 三星"
        }
    },
    {
        id: 70,
        name: "Samsung 970 EVO Plus 2TB NVMe M.2 SSD",
        description: "PCIe Gen3，讀取3500MB/s，寫入3300MB/s，高CP值選擇",
        price: 4599,
        image: "https://img.pchome.com.tw/cs/items/SAMSUNG_970EVO_2TB/000001_1736838237.jpg",
        category: "儲存",
        brand: "Samsung",
        emoji: "💾",
        bgColor: "linear-gradient(135deg, #1f8ef1, #1565c0)",
        specifications: {
            "產品型號": "MZ-V7S2T0BW",
            "容量": "2TB",
            "介面": "PCIe Gen3 NVMe M.2",
            "讀取速度": "3500 MB/s",
            "寫入速度": "3300 MB/s",
            "品牌": "Samsung 三星"
        }
    },
    {
        id: 71,
        name: "WD Blue SN570 1TB NVMe M.2 SSD",
        description: "PCIe Gen3，讀取3500MB/s，寫入3000MB/s，日常使用最佳選擇",
        price: 2290,
        image: "https://img.pchome.com.tw/cs/items/WD_BLUE_SN570_1TB/000001_1736938237.jpg",
        category: "儲存",
        brand: "WD",
        emoji: "🎮",
        bgColor: "linear-gradient(135deg, #000000, #333333)",
        specifications: {
            "產品型號": "WDS100T3B0C",
            "容量": "1TB",
            "介面": "PCIe Gen3 NVMe M.2",
            "讀取速度": "3500 MB/s",
            "寫入速度": "3000 MB/s",
            "品牌": "WD 威騰"
        }
    },
    {
        id: 72,
        name: "WD BLACK SN770 1TB NVMe M.2 SSD",
        description: "PCIe Gen4，讀取5150MB/s，寫入4900MB/s，遊戲加速專用",
        price: 3690,
        image: "https://img.pchome.com.tw/cs/items/WD_BLACK_SN770_1TB/000001_1737038237.jpg",
        category: "儲存",
        brand: "WD",
        emoji: "🎮",
        bgColor: "linear-gradient(135deg, #000000, #333333)",
        specifications: {
            "產品型號": "WDS100T3X0E",
            "容量": "1TB",
            "介面": "PCIe Gen4 NVMe M.2",
            "讀取速度": "5150 MB/s",
            "寫入速度": "4900 MB/s",
            "品牌": "WD 威騰"
        }
    },
    {
        id: 73,
        name: "Seagate BarraCuda 120 1TB SATA SSD",
        description: "2.5吋 SATA SSD，讀取560MB/s，寫入540MB/s，升級首選",
        price: 1890,
        image: "https://img.pchome.com.tw/cs/items/SEAGATE_BARRACUDA_1TB/000001_1737138237.jpg",
        category: "儲存",
        brand: "Seagate",
        emoji: "🔥",
        bgColor: "linear-gradient(135deg, #4fc3f7, #29b6f6)",
        specifications: {
            "產品型號": "ZA1000CM1A003",
            "容量": "1TB",
            "介面": "2.5吋 SATA 6Gb/s",
            "讀取速度": "560 MB/s",
            "寫入速度": "540 MB/s",
            "品牌": "Seagate 希捷"
        }
    },
    {
        id: 74,
        name: "Seagate IronWolf Pro 4TB NAS硬碟",
        description: "7200RPM，256MB快取，專為NAS設計，24x7運作",
        price: 5290,
        image: "https://img.pchome.com.tw/cs/items/SEAGATE_IRONWOLF_4TB/000001_1737238237.jpg",
        category: "儲存",
        brand: "Seagate",
        emoji: "🔥",
        bgColor: "linear-gradient(135deg, #4fc3f7, #29b6f6)",
        specifications: {
            "產品型號": "ST4000NE001",
            "容量": "4TB",
            "轉速": "7200 RPM",
            "快取": "256MB",
            "特色": "NAS專用24x7運作",
            "品牌": "Seagate 希捷"
        }
    }
];

// 其他分類的商品會以類似的方式添加...