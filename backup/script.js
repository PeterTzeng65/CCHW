// 產品數據
const products = [
    // ===== CPU 處理器 =====
    {
        id: 1,
        name: "Intel Core Ultra 9 285K",
        description: "24核心（8P+16E），最新Intel Core Ultra 2代處理器，LGA1851插槽",
        price: 19300,
        image: "https://img.pchome.com.tw/cs/items/DRAI7JA900I8FO5/000001_1736138237.jpg",
        category: "CPU",
        brand: "Intel",
        emoji: "💻",
        bgColor: "linear-gradient(135deg, #0071c5, #0044aa)",
        specifications: {
            "處理器編號": "Core Ultra 9 285K",
            "核心": "24 (8P+16E)",
            "線程數": "24",
            "快取記憶體": "36 MB Intel® Smart Cache",
            "插槽": "LGA1851",
            "系列": "Intel Core Ultra 2代",
            "包裝": "盒裝版本",
            "品牌": "Intel 英特爾",
            "適用": "高效能運算與遊戲"
        }
    },
    {
        id: 2,
        name: "AMD Ryzen 9 9950X3D",
        description: "16核心32線程，4.3GHz，第二代3D V-Cache技術，144MB快取，TSMC 4nm製程",
        price: 23150,
        image: "https://img.pchome.com.tw/cs/items/DSBC0BA900IFUKT/000001_1745550420.jpg",
        category: "CPU",
        brand: "AMD",
        emoji: "🔥",
        bgColor: "linear-gradient(135deg, #ed1c24, #b91c1c)",
        specifications: {
            "處理器": "AMD Ryzen™ 9 9950X3D",
            "核心/線程": "16核心/32線程",
            "基礎時脈": "4.3 GHz",
            "L2快取": "16MB",
            "L3快取": "128MB",
            "總快取": "144MB (L2+L3)",
            "TDP": "170W",
            "架構": "Zen 5",
            "製程": "TSMC 4nm FinFET",
            "插槽": "AM5",
            "特色": "第二代3D V-Cache技術",
            "適用": "高效能遊戲處理器"
        }
    },
    {
        id: 3,
        name: "Intel Xeon Gold 6534",
        description: "8核心16線程，3.9GHz基頻，4.2GHz睿頻，第五代Intel Xeon可擴展處理器",
        price: 108500,
        image: "https://img.pchome.com.tw/cs/items/DRAI6ZA900HBVEY/000001_1711075212.jpg",
        category: "CPU",
        brand: "Intel",
        emoji: "⚡",
        bgColor: "linear-gradient(135deg, #0071c5, #0044aa)",
        specifications: {
            "處理器編號": "Xeon Gold 6534",
            "核心/線程": "8核心/16線程",
            "基礎頻率": "3.9 GHz",
            "最大睿頻": "4.2 GHz",
            "快取記憶體": "22.5 MB",
            "插槽": "FCLGA4677",
            "系列": "第五代Intel Xeon可擴展處理器",
            "適用": "伺服器與企業級運算",
            "特色": "支援先進AI加速技術",
            "品牌": "Intel 英特爾"
        }
    },
    {
        id: 38,
        name: "Intel Core i9-14900K",
        description: "24核心（8P+16E），最高6.0GHz，第14代Intel Core處理器，LGA1700插槽",
        price: 17500,
        image: "https://img.pchome.com.tw/cs/items/DRAI9CA900I9KLM/000001_1736500000.jpg",
        category: "CPU",
        brand: "Intel",
        emoji: "💻",
        bgColor: "linear-gradient(135deg, #0071c5, #0044aa)",
        specifications: {
            "處理器編號": "Core i9-14900K",
            "核心": "24 (8P+16E)",
            "基礎頻率": "3.2 GHz",
            "最大睿頻": "6.0 GHz",
            "快取記憶體": "36 MB Intel® Smart Cache",
            "插槽": "LGA1700",
            "系列": "第14代Intel Core",
            "TDP": "125W",
            "品牌": "Intel 英特爾"
        }
    },
    {
        id: 39,
        name: "Intel Core i7-13700K",
        description: "16核心（8P+8E），最高5.4GHz，第13代Intel Core處理器，LGA1700插槽",
        price: 13900,
        image: "https://img.pchome.com.tw/cs/items/DRAI7KA900I7KLM/000001_1736600000.jpg",
        category: "CPU",
        brand: "Intel",
        emoji: "💻",
        bgColor: "linear-gradient(135deg, #0071c5, #0044aa)",
        specifications: {
            "處理器編號": "Core i7-13700K",
            "核心": "16 (8P+8E)",
            "基礎頻率": "3.4 GHz",
            "最大睿頻": "5.4 GHz",
            "快取記憶體": "30 MB Intel® Smart Cache",
            "插槽": "LGA1700",
            "系列": "第13代Intel Core",
            "TDP": "125W",
            "品牌": "Intel 英特爾"
        }
    },
    {
        id: 40,
        name: "AMD Ryzen 9 7950X",
        description: "16核心32線程，4.5GHz基頻，最高5.7GHz，Zen 4架構，AM5插槽",
        price: 19800,
        image: "https://img.pchome.com.tw/cs/items/DSBC0CA900R9X7/000001_1745700000.jpg",
        category: "CPU",
        brand: "AMD",
        emoji: "🔥",
        bgColor: "linear-gradient(135deg, #ed1c24, #b91c1c)",
        specifications: {
            "處理器": "AMD Ryzen™ 9 7950X",
            "核心/線程": "16核心/32線程",
            "基礎時脈": "4.5 GHz",
            "最大加速時脈": "5.7 GHz",
            "快取記憶體": "80MB",
            "TDP": "170W",
            "架構": "Zen 4",
            "插槽": "AM5",
            "品牌": "AMD"
        }
    },
    {
        id: 41,
        name: "AMD Ryzen 7 7800X3D",
        description: "8核心16線程，4.2GHz基頻，3D V-Cache技術，96MB快取，遊戲最佳化",
        price: 16500,
        image: "https://img.pchome.com.tw/cs/items/DSBC0DA900R7X3D/000001_1745800000.jpg",
        category: "CPU",
        brand: "AMD",
        emoji: "🔥",
        bgColor: "linear-gradient(135deg, #ed1c24, #b91c1c)",
        specifications: {
            "處理器": "AMD Ryzen™ 7 7800X3D",
            "核心/線程": "8核心/16線程",
            "基礎時脈": "4.2 GHz",
            "最大加速時脈": "5.0 GHz",
            "快取記憶體": "96MB (含3D V-Cache)",
            "TDP": "120W",
            "架構": "Zen 4",
            "插槽": "AM5",
            "特色": "遊戲最佳化處理器",
            "品牌": "AMD"
        }
    },
    {
        id: 42,
        name: "AMD Ryzen 5 7600X",
        description: "6核心12線程，4.7GHz基頻，最高5.3GHz，Zen 4架構，AM5插槽",
        price: 8900,
        image: "https://img.pchome.com.tw/cs/items/DSBC0EA900R5X7/000001_1745900000.jpg",
        category: "CPU",
        brand: "AMD",
        emoji: "🔥",
        bgColor: "linear-gradient(135deg, #ed1c24, #b91c1c)",
        specifications: {
            "處理器": "AMD Ryzen™ 5 7600X",
            "核心/線程": "6核心/12線程",
            "基礎時脈": "4.7 GHz",
            "最大加速時脈": "5.3 GHz",
            "快取記憶體": "38MB",
            "TDP": "105W",
            "架構": "Zen 4",
            "插槽": "AM5",
            "品牌": "AMD"
        }
    },
    
    // ===== GPU 顯示卡 =====
    {
        id: 4,
        name: "GIGABYTE RTX4070 SUPER WINDFORCE OC 12G",
        description: "NVIDIA GeForce RTX 4070 SUPER，12GB GDDR6X，三風扇散熱系統，220W功耗",
        price: 21990,
        image: "https://img.pchome.com.tw/cs/items/DRADNBA900H3LTT/000001_1705908178.jpg",
        category: "GPU",
        brand: "Gigabyte",
        emoji: "🎮",
        bgColor: "linear-gradient(135deg, #00d4aa, #007bff)",
        specifications: {
            "晶片組": "NVIDIA GeForce RTX 4070 SUPER",
            "記憶體": "12GB GDDR6X",
            "記憶體位寬": "192-bit",
            "卡長": "26.1 cm",
            "插槽寬度": "2.5槽",
            "散熱系統": "三風扇 WINDFORCE",
            "輸出介面": "3x DisplayPort 1.4, 1x HDMI 2.1",
            "功耗": "220W",
            "建議電源": "700W",
            "保固": "三年保固（需註冊）",
            "品牌": "GIGABYTE 技嘉"
        }
    },
    {
        id: 5,
        name: "撼訊 RX9070XT 16G-E/OC 紅魔顯示卡",
        description: "AMD Radeon RX 9070 XT，16GB GDDR6，三風扇散熱系統，PCIe Gen5支援",
        price: 32990,
        image: "https://img.pchome.com.tw/cs/items/DRADTTA900IXOPN/000001_1749882259.jpg",
        category: "GPU",
        brand: "PowerColor",
        emoji: "🚀",
        bgColor: "linear-gradient(135deg, #ed1c24, #b91c1c)",
        specifications: {
            "晶片組": "AMD Radeon RX 9070 XT",
            "記憶體": "16GB GDDR6",
            "記憶體位寬": "256-bit",
            "PCIe版本": "PCIe Gen5",
            "卡長": "34 cm",
            "插槽寬度": "3槽",
            "散熱系統": "三風扇紅魔散熱",
            "輸出介面": "3x DisplayPort 2.1a, 1x HDMI 2.1b",
            "建議電源": "900W",
            "保固": "三年原廠保固",
            "品牌": "撼訊 PowerColor",
            "系列": "紅魔 Red Devil"
        }
    },
    {
        id: 6,
        name: "ASUS TUF-RTX5070TI-O16G-WHITE-GAMING",
        description: "NVIDIA GeForce RTX 5070 Ti，16GB GDDR7，三風扇散熱系統，白色塗裝",
        price: 57990,
        image: "https://img.pchome.com.tw/cs/items/DRADKYA900J34SV/000001_1753942598.jpg",
        category: "GPU",
        brand: "ASUS",
        emoji: "🎯",
        bgColor: "linear-gradient(135deg, #00d4aa, #007bff)",
        specifications: {
            "晶片組": "NVIDIA GeForce RTX 5070 Ti",
            "記憶體": "16GB GDDR7",
            "記憶體位寬": "256-bit",
            "PCIe版本": "Gen5",
            "卡長": "32.9 cm",
            "散熱系統": "三風扇 TUF 散熱",
            "功耗": "300W",
            "建議電源": "750W",
            "保固": "三年保固（需註冊）",
            "品牌": "ASUS 華碩",
            "系列": "TUF Gaming",
            "顏色": "白色塗裝"
        }
    },
    {
        id: 25,
        name: "ASUS ROG Astral GeForce RTX 5090 32GB GDDR7 OC",
        description: "NVIDIA GeForce RTX 5090，32GB GDDR7，21760個CUDA核心，超頻版",
        price: 105990,
        image: "https://img.pchome.com.tw/cs/items/DRADKY1900J5DIE/000001_1755655950.jpg",
        category: "GPU",
        brand: "ASUS",
        emoji: "⚡",
        bgColor: "linear-gradient(135deg, #ff6b35, #f7931e)",
        specifications: {
            "晶片組": "NVIDIA GeForce RTX 5090",
            "記憶體": "32GB GDDR7",
            "CUDA核心": "21,760個",
            "GPU時脈": "OC模式 2610 MHz / 預設模式 2580 MHz",
            "記憶體速度": "28 Gbps",
            "最大解析度": "7680 x 4320",
            "建議電源": "1000W",
            "品牌": "ASUS 華碩",
            "系列": "ROG Astral",
            "版本": "超頻版 OC"
        }
    },
    {
        id: 43,
        name: "GIGABYTE RTX4060 Ti GAMING OC 16G",
        description: "NVIDIA GeForce RTX 4060 Ti，16GB GDDR6，三風扇散熱系統，165W功耗",
        price: 16990,
        image: "https://img.pchome.com.tw/cs/items/DRADNCA900H4060T/000001_1705950000.jpg",
        category: "GPU",
        brand: "Gigabyte",
        emoji: "🎮",
        bgColor: "linear-gradient(135deg, #00d4aa, #007bff)",
        specifications: {
            "晶片組": "NVIDIA GeForce RTX 4060 Ti",
            "記憶體": "16GB GDDR6",
            "記憶體位寬": "128-bit",
            "卡長": "28.2 cm",
            "插槽寬度": "2.5槽",
            "散熱系統": "三風扇 WINDFORCE",
            "功耗": "165W",
            "建議電源": "550W",
            "品牌": "GIGABYTE 技嘉"
        }
    },
    {
        id: 44,
        name: "GIGABYTE RTX4080 SUPER GAMING OC 16G",
        description: "NVIDIA GeForce RTX 4080 SUPER，16GB GDDR6X，三風扇散熱系統，320W功耗",
        price: 35990,
        image: "https://img.pchome.com.tw/cs/items/DRADNDA900H4080S/000001_1706000000.jpg",
        category: "GPU",
        brand: "Gigabyte",
        emoji: "🎮",
        bgColor: "linear-gradient(135deg, #00d4aa, #007bff)",
        specifications: {
            "晶片組": "NVIDIA GeForce RTX 4080 SUPER",
            "記憶體": "16GB GDDR6X",
            "記憶體位寬": "256-bit",
            "卡長": "32.8 cm",
            "插槽寬度": "3.5槽",
            "散熱系統": "三風扇 WINDFORCE",
            "功耗": "320W",
            "建議電源": "750W",
            "品牌": "GIGABYTE 技嘉"
        }
    },
    {
        id: 45,
        name: "GIGABYTE RTX4070 Ti SUPER GAMING OC 16G",
        description: "NVIDIA GeForce RTX 4070 Ti SUPER，16GB GDDR6X，三風扇散熱系統，285W功耗",
        price: 28990,
        image: "https://img.pchome.com.tw/cs/items/DRADNEA900H4070TS/000001_1706100000.jpg",
        category: "GPU",
        brand: "Gigabyte",
        emoji: "🎮",
        bgColor: "linear-gradient(135deg, #00d4aa, #007bff)",
        specifications: {
            "晶片組": "NVIDIA GeForce RTX 4070 Ti SUPER",
            "記憶體": "16GB GDDR6X",
            "記憶體位寬": "256-bit",
            "卡長": "31.5 cm",
            "插槽寬度": "3槽",
            "散熱系統": "三風扇 WINDFORCE",
            "功耗": "285W",
            "建議電源": "700W",
            "品牌": "GIGABYTE 技嘉"
        }
    },
    {
        id: 46,
        name: "GIGABYTE RTX4090 GAMING OC 24G",
        description: "NVIDIA GeForce RTX 4090，24GB GDDR6X，三風扇散熱系統，450W功耗",
        price: 52990,
        image: "https://img.pchome.com.tw/cs/items/DRADNFA900H4090/000001_1706200000.jpg",
        category: "GPU",
        brand: "Gigabyte",
        emoji: "🎮",
        bgColor: "linear-gradient(135deg, #00d4aa, #007bff)",
        specifications: {
            "晶片組": "NVIDIA GeForce RTX 4090",
            "記憶體": "24GB GDDR6X",
            "記憶體位寬": "384-bit",
            "卡長": "35.8 cm",
            "插槽寬度": "4槽",
            "散熱系統": "三風扇 WINDFORCE",
            "功耗": "450W",
            "建議電源": "850W",
            "品牌": "GIGABYTE 技嘉"
        }
    },
    {
        id: 47,
        name: "撼訊 RX7900XTX 24G-E/OC 紅魔顯示卡",
        description: "AMD Radeon RX 7900 XTX，24GB GDDR6，三風扇散熱系統，PCIe Gen4支援",
        price: 29990,
        image: "https://img.pchome.com.tw/cs/items/DRADTUA900RX7900/000001_1749950000.jpg",
        category: "GPU",
        brand: "PowerColor",
        emoji: "🚀",
        bgColor: "linear-gradient(135deg, #ed1c24, #b91c1c)",
        specifications: {
            "晶片組": "AMD Radeon RX 7900 XTX",
            "記憶體": "24GB GDDR6",
            "記憶體位寬": "384-bit",
            "PCIe版本": "PCIe Gen4",
            "卡長": "32 cm",
            "插槽寬度": "3槽",
            "散熱系統": "三風扇紅魔散熱",
            "建議電源": "800W",
            "品牌": "撼訊 PowerColor"
        }
    },
    {
        id: 48,
        name: "撼訊 RX7800XT 16G-E/OC 紅魔顯示卡",
        description: "AMD Radeon RX 7800 XT，16GB GDDR6，三風扇散熱系統，PCIe Gen4支援",
        price: 18990,
        image: "https://img.pchome.com.tw/cs/items/DRADTVA900RX7800/000001_1750000000.jpg",
        category: "GPU",
        brand: "PowerColor",
        emoji: "🚀",
        bgColor: "linear-gradient(135deg, #ed1c24, #b91c1c)",
        specifications: {
            "晶片組": "AMD Radeon RX 7800 XT",
            "記憶體": "16GB GDDR6",
            "記憶體位寬": "256-bit",
            "PCIe版本": "PCIe Gen4",
            "卡長": "31 cm",
            "插槽寬度": "2.9槽",
            "散熱系統": "三風扇紅魔散熱",
            "建議電源": "700W",
            "品牌": "撼訊 PowerColor"
        }
    },
    {
        id: 49,
        name: "撼訊 RX7700XT 12G-E/OC 紅魔顯示卡",
        description: "AMD Radeon RX 7700 XT，12GB GDDR6，三風扇散熱系統，PCIe Gen4支援",
        price: 15990,
        image: "https://img.pchome.com.tw/cs/items/DRADTWA900RX7700/000001_1750100000.jpg",
        category: "GPU",
        brand: "PowerColor",
        emoji: "🚀",
        bgColor: "linear-gradient(135deg, #ed1c24, #b91c1c)",
        specifications: {
            "晶片組": "AMD Radeon RX 7700 XT",
            "記憶體": "12GB GDDR6",
            "記憶體位寬": "192-bit",
            "PCIe版本": "PCIe Gen4",
            "卡長": "30 cm",
            "插槽寬度": "2.7槽",
            "散熱系統": "三風扇紅魔散熱",
            "建議電源": "650W",
            "品牌": "撼訊 PowerColor"
        }
    },
    {
        id: 50,
        name: "撼訊 RX6700XT 12G-E/OC 紅魔顯示卡",
        description: "AMD Radeon RX 6700 XT，12GB GDDR6，三風扇散熱系統，PCIe Gen4支援",
        price: 12990,
        image: "https://img.pchome.com.tw/cs/items/DRADTXA900RX6700/000001_1750200000.jpg",
        category: "GPU",
        brand: "PowerColor",
        emoji: "🚀",
        bgColor: "linear-gradient(135deg, #ed1c24, #b91c1c)",
        specifications: {
            "晶片組": "AMD Radeon RX 6700 XT",
            "記憶體": "12GB GDDR6",
            "記憶體位寬": "192-bit",
            "PCIe版本": "PCIe Gen4",
            "卡長": "29 cm",
            "插槽寬度": "2.5槽",
            "散熱系統": "三風扇紅魔散熱",
            "建議電源": "650W",
            "品牌": "撼訊 PowerColor"
        }
    },
    {
        id: 51,
        name: "ASUS ROG STRIX RTX5070-O12G-GAMING",
        description: "NVIDIA GeForce RTX 5070，12GB GDDR7，三風扇散熱系統，ROG設計",
        price: 42990,
        image: "https://img.pchome.com.tw/cs/items/DRADKZA900J5070/000001_1754000000.jpg",
        category: "GPU",
        brand: "ASUS",
        emoji: "🎯",
        bgColor: "linear-gradient(135deg, #00d4aa, #007bff)",
        specifications: {
            "晶片組": "NVIDIA GeForce RTX 5070",
            "記憶體": "12GB GDDR7",
            "記憶體位寬": "192-bit",
            "PCIe版本": "Gen5",
            "卡長": "31.9 cm",
            "散熱系統": "三風扇 ROG 散熱",
            "功耗": "220W",
            "建議電源": "650W",
            "品牌": "ASUS 華碩",
            "系列": "ROG STRIX Gaming"
        }
    },
    {
        id: 52,
        name: "ASUS DUAL RTX5060-O8G-WHITE",
        description: "NVIDIA GeForce RTX 5060，8GB GDDR7，雙風扇散熱系統，白色塗裝",
        price: 16990,
        image: "https://img.pchome.com.tw/cs/items/DRADKAB900J5060/000001_1754100000.jpg",
        category: "GPU",
        brand: "ASUS",
        emoji: "🎯",
        bgColor: "linear-gradient(135deg, #00d4aa, #007bff)",
        specifications: {
            "晶片組": "NVIDIA GeForce RTX 5060",
            "記憶體": "8GB GDDR7",
            "記憶體位寬": "128-bit",
            "PCIe版本": "Gen5",
            "卡長": "24.9 cm",
            "散熱系統": "雙風扇 DUAL 散熱",
            "功耗": "115W",
            "建議電源": "550W",
            "品牌": "ASUS 華碩",
            "系列": "DUAL",
            "顏色": "白色塗裝"
        }
    },
    {
        id: 53,
        name: "ASUS TUF-RTX4070-O12G-GAMING",
        description: "NVIDIA GeForce RTX 4070，12GB GDDR6X，三風扇散熱系統，軍規用料",
        price: 19990,
        image: "https://img.pchome.com.tw/cs/items/DRADKBB900J4070/000001_1754200000.jpg",
        category: "GPU",
        brand: "ASUS",
        emoji: "🎯",
        bgColor: "linear-gradient(135deg, #00d4aa, #007bff)",
        specifications: {
            "晶片組": "NVIDIA GeForce RTX 4070",
            "記憶體": "12GB GDDR6X",
            "記憶體位寬": "192-bit",
            "PCIe版本": "Gen4",
            "卡長": "30.1 cm",
            "散熱系統": "三風扇 TUF 散熱",
            "功耗": "200W",
            "建議電源": "650W",
            "品牌": "ASUS 華碩",
            "系列": "TUF Gaming"
        }
    },
    
    // ===== 主機板 =====
    {
        id: 7,
        name: "ASUS ROG STRIX Z790-A GAMING WIFI D4",
        description: "Intel Z790晶片組，DDR4記憶體支援，LGA 1700插槽，支援13th Gen Intel處理器",
        price: 6990,
        image: "https://img.pchome.com.tw/cs/items/DSAJBXA900HH6WS/000001_1715743648.jpg",
        category: "主機板",
        brand: "ASUS",
        emoji: "⚡",
        bgColor: "linear-gradient(135deg, #0071c5, #0044aa)",
        specifications: {
            "CPU插槽": "LGA 1700",
            "晶片組": "Intel Z790",
            "記憶體類型": "DDR4",
            "尺寸規格": "ATX",
            "CPU支援": "第13代Intel處理器",
            "保固": "三年原廠保固",
            "評分": "5.0/5.0 (3評價)",
            "品牌": "ASUS 華碩",
            "系列": "ROG STRIX Gaming",
            "特色": "Gaming WiFi版本"
        }
    },
    {
        id: 8,
        name: "微星 MAG B650 TOMAHAWK WIFI 主機板",
        description: "AMD B650晶片組，DDR5-6400+支援，Lightning M.2 PCIe Gen 4，Wi-Fi 6E，2.5G LAN",
        price: 6090,
        image: "https://img.pchome.com.tw/cs/items/DSAJ28A900G43ZD/000001_1678169882.jpg",
        category: "主機板",
        brand: "MSI",
        emoji: "⚙️",
        bgColor: "linear-gradient(135deg, #ff6b35, #f7931e)",
        specifications: {
            "CPU支援": "AMD Ryzen™ 7000桌上型處理器",
            "插槽": "AM5",
            "晶片組": "AMD B650",
            "尺寸規格": "ATX",
            "記憶體": "DDR5，最高6400+ MHz (OC)",
            "網路": "2.5G LAN + Intel Wi-Fi 6E",
            "儲存": "Lightning M.2 PCIe Gen 4插槽",
            "音效": "Audio Boost 5技術",
            "特色": "優質散熱解決方案",
            "品牌": "MSI 微星",
            "評分": "4.8/5 (4評價)"
        }
    },
    {
        id: 9,
        name: "GIGABYTE B760M AORUS ELITE AX 主機板+DDR5記憶體套裝",
        description: "Intel B760M晶片組，Micro ATX，搭配32GB DDR5-5600記憶體套裝組合",
        price: 8390,
        image: "https://img.pchome.com.tw/cs/items/DSAJ3KA900J0F6O/000001_1751710782.jpg",
        category: "主機板",
        brand: "Gigabyte",
        emoji: "🔧",
        bgColor: "linear-gradient(135deg, #00d4aa, #007bff)",
        specifications: {
            "CPU插槽": "LGA 1700 (支援12th/13th Gen Intel)",
            "尺寸規格": "Micro ATX",
            "記憶體": "4x DDR5 U-DIMM (最高128GB)",
            "顯示輸出": "HDMI / DisplayPort",
            "擴充插槽": "PCIe 4.0",
            "網路": "Realtek 2.5GbE / Intel WiFi 6E / 藍牙5.2",
            "儲存": "2x M.2 / 4x SATA3",
            "套裝內容": "含32GB DDR5-5600 FURY Beast記憶體",
            "保固": "五年原廠保固（需註冊）",
            "品牌": "GIGABYTE 技嘉"
        }
    },
    {
        id: 54,
        name: "ASUS PRIME Z790-P WIFI",
        description: "Intel Z790晶片組，DDR5記憶體支援，LGA 1700插槽，Wi-Fi 6E，PCIe 5.0",
        price: 5990,
        image: "https://img.pchome.com.tw/cs/items/DSAJBYA900Z790P/000001_1715800000.jpg",
        category: "主機板",
        brand: "ASUS",
        emoji: "⚡",
        bgColor: "linear-gradient(135deg, #0071c5, #0044aa)",
        specifications: {
            "CPU插槽": "LGA 1700",
            "晶片組": "Intel Z790",
            "記憶體類型": "DDR5",
            "尺寸規格": "ATX",
            "CPU支援": "第12/13代Intel處理器",
            "網路": "Wi-Fi 6E + 2.5G LAN",
            "擴充": "PCIe 5.0 x16",
            "品牌": "ASUS 華碩",
            "系列": "PRIME"
        }
    },
    {
        id: 55,
        name: "ASUS ROG MAXIMUS Z790 HERO",
        description: "Intel Z790晶片組，DDR5記憶體支援，ROG頂級系列，RGB燈效，頂級用料",
        price: 18990,
        image: "https://img.pchome.com.tw/cs/items/DSAJBZA900Z790H/000001_1715850000.jpg",
        category: "主機板",
        brand: "ASUS",
        emoji: "⚡",
        bgColor: "linear-gradient(135deg, #0071c5, #0044aa)",
        specifications: {
            "CPU插槽": "LGA 1700",
            "晶片組": "Intel Z790",
            "記憶體類型": "DDR5",
            "尺寸規格": "ATX",
            "CPU支援": "第12/13代Intel處理器",
            "特色": "ROG頂級系列",
            "RGB燈效": "AURA Sync",
            "品牌": "ASUS 華碩",
            "系列": "ROG MAXIMUS"
        }
    },
    {
        id: 56,
        name: "ASUS TUF GAMING Z790-PLUS WIFI",
        description: "Intel Z790晶片組，DDR5記憶體支援，軍規用料，TUF系列，耐用穩定",
        price: 7990,
        image: "https://img.pchome.com.tw/cs/items/DSAJCAA900Z790T/000001_1715900000.jpg",
        category: "主機板",
        brand: "ASUS",
        emoji: "⚡",
        bgColor: "linear-gradient(135deg, #0071c5, #0044aa)",
        specifications: {
            "CPU插槽": "LGA 1700",
            "晶片組": "Intel Z790",
            "記憶體類型": "DDR5",
            "尺寸規格": "ATX",
            "CPU支援": "第12/13代Intel處理器",
            "特色": "軍規用料TUF系列",
            "網路": "Wi-Fi 6 + 2.5G LAN",
            "品牌": "ASUS 華碩",
            "系列": "TUF GAMING"
        }
    },
    {
        id: 57,
        name: "MSI MAG Z790 TOMAHAWK WIFI",
        description: "Intel Z790晶片組，DDR5記憶體支援，MSI MAG系列，優異散熱設計",
        price: 7590,
        image: "https://img.pchome.com.tw/cs/items/DSAJ2BA900Z790M/000001_1678200000.jpg",
        category: "主機板",
        brand: "MSI",
        emoji: "⚙️",
        bgColor: "linear-gradient(135deg, #ff6b35, #f7931e)",
        specifications: {
            "CPU插槽": "LGA 1700",
            "晶片組": "Intel Z790",
            "記憶體類型": "DDR5",
            "尺寸規格": "ATX",
            "CPU支援": "第12/13代Intel處理器",
            "網路": "Wi-Fi 6E + 2.5G LAN",
            "特色": "MAG系列優異散熱",
            "品牌": "MSI 微星"
        }
    },
    {
        id: 58,
        name: "MSI MPG Z790 CARBON WIFI",
        description: "Intel Z790晶片組，DDR5記憶體支援，Carbon碳纖維外觀，RGB燈效",
        price: 12590,
        image: "https://img.pchome.com.tw/cs/items/DSAJ2CA900Z790C/000001_1678250000.jpg",
        category: "主機板",
        brand: "MSI",
        emoji: "⚙️",
        bgColor: "linear-gradient(135deg, #ff6b35, #f7931e)",
        specifications: {
            "CPU插槽": "LGA 1700",
            "晶片組": "Intel Z790",
            "記憶體類型": "DDR5",
            "尺寸規格": "ATX",
            "CPU支援": "第12/13代Intel處理器",
            "特色": "Carbon碳纖維外觀",
            "RGB燈效": "Mystic Light",
            "品牌": "MSI 微星"
        }
    },
    {
        id: 59,
        name: "MSI PRO Z790-A WIFI",
        description: "Intel Z790晶片組，DDR5記憶體支援，商務用途，穩定可靠",
        price: 5590,
        image: "https://img.pchome.com.tw/cs/items/DSAJ2DA900Z790P/000001_1678300000.jpg",
        category: "主機板",
        brand: "MSI",
        emoji: "⚙️",
        bgColor: "linear-gradient(135deg, #ff6b35, #f7931e)",
        specifications: {
            "CPU插槽": "LGA 1700",
            "晶片組": "Intel Z790",
            "記憶體類型": "DDR5",
            "尺寸規格": "ATX",
            "CPU支援": "第12/13代Intel處理器",
            "特色": "商務用途設計",
            "網路": "Wi-Fi 6 + GbE LAN",
            "品牌": "MSI 微星"
        }
    },
    {
        id: 60,
        name: "MSI MAG B650M MORTAR WIFI",
        description: "AMD B650晶片組，Micro ATX，DDR5記憶體支援，AM5插槽，緊湊設計",
        price: 4990,
        image: "https://img.pchome.com.tw/cs/items/DSAJ2EA900B650M/000001_1678350000.jpg",
        category: "主機板",
        brand: "MSI",
        emoji: "⚙️",
        bgColor: "linear-gradient(135deg, #ff6b35, #f7931e)",
        specifications: {
            "CPU插槽": "AM5",
            "晶片組": "AMD B650",
            "記憶體類型": "DDR5",
            "尺寸規格": "Micro ATX",
            "CPU支援": "AMD Ryzen 7000系列",
            "網路": "Wi-Fi 6 + 2.5G LAN",
            "特色": "緊湊設計MAG系列",
            "品牌": "MSI 微星"
        }
    },
    {
        id: 61,
        name: "Gigabyte Z790 AORUS ELITE AX",
        description: "Intel Z790晶片組，DDR5記憶體支援，AORUS系列，RGB燈效，PCIe 5.0",
        price: 8490,
        image: "https://img.pchome.com.tw/cs/items/DSAJ3LA900Z790A/000001_1751800000.jpg",
        category: "主機板",
        brand: "Gigabyte",
        emoji: "🔧",
        bgColor: "linear-gradient(135deg, #00d4aa, #007bff)",
        specifications: {
            "CPU插槽": "LGA 1700",
            "晶片組": "Intel Z790",
            "記憶體類型": "DDR5",
            "尺寸規格": "ATX",
            "CPU支援": "第12/13代Intel處理器",
            "網路": "Wi-Fi 6E + 2.5G LAN",
            "特色": "AORUS系列RGB燈效",
            "品牌": "GIGABYTE 技嘉"
        }
    },
    {
        id: 62,
        name: "Gigabyte Z790 GAMING X AX",
        description: "Intel Z790晶片組，DDR5記憶體支援，遊戲專用設計，優異散熱",
        price: 6490,
        image: "https://img.pchome.com.tw/cs/items/DSAJ3MA900Z790G/000001_1751850000.jpg",
        category: "主機板",
        brand: "Gigabyte",
        emoji: "🔧",
        bgColor: "linear-gradient(135deg, #00d4aa, #007bff)",
        specifications: {
            "CPU插槽": "LGA 1700",
            "晶片組": "Intel Z790",
            "記憶體類型": "DDR5",
            "尺寸規格": "ATX",
            "CPU支援": "第12/13代Intel處理器",
            "特色": "遊戲專用設計",
            "網路": "Wi-Fi 6 + 2.5G LAN",
            "品牌": "GIGABYTE 技嘉"
        }
    },
    
    // ===== 記憶體 =====
    {
        id: 10,
        name: "Corsair Vengeance DDR5-5600 32GB Kit (2x16GB) CL36 Black",
        description: "DDR5-5600 MT/s，32GB雙通道套件，CL36延遲，XMP 3.0支援，鋁製散熱片",
        price: 3995,
        image: "./images/Corsair Vengeance DDR5-5600 32GB Kit.png",
        category: "記憶體",
        brand: "Corsair",
        emoji: "🧠",
        bgColor: "linear-gradient(135deg, #ffd700, #ffb347)",
        specifications: {
            "產品型號": "CMK32GX5M2B5600C36",
            "容量": "32GB (2x16GB)",
            "記憶體類型": "DDR5 DRAM",
            "速度": "5600 MT/s",
            "延遲": "CL36",
            "顏色": "黑色",
            "散熱片": "鋁製散熱片",
            "相容性": "Intel 600/700/800系列主機板最佳化",
            "XMP支援": "XMP 3.0設定檔",
            "電壓調節": "板載電壓調節",
            "品牌": "Corsair 海盜船"
        }
    },
    {
        id: 11,
        name: "G.Skill Trident Z5 炫鋒戟 64GB (2x32GB) DDR5-6000 CL30",
        description: "雙通道64GB套件(2x32GB)，DDR5-6000，CL30延遲，RGB燈效，AMD EXPO支援",
        price: 8800,
        image: "./images/G.Skill Trident Z5 炫鋒戟 64GB.png",
        category: "記憶體",
        brand: "G.Skill",
        emoji: "⚡",
        bgColor: "linear-gradient(135deg, #ff6b35, #f7931e)",
        specifications: {
            "產品系列": "Trident Z5 炫鋒戟 RGB",
            "容量": "64GB (2x32GB)",
            "記憶體類型": "DDR5 DRAM",
            "速度": "6000 MT/s",
            "延遲": "CL30 (30-40-40-96)",
            "電壓": "1.40V",
            "XMP支援": "Intel XMP 3.0 / AMD EXPO",
            "RGB燈效": "支援主機板燈效同步",
            "相容性": "AMD平台最佳化",
            "品牌": "G.Skill 芝奇"
        }
    },
    {
        id: 12,
        name: "Kingston FURY Beast 獸獵者 DDR5-5600 32GB (16GBx2)",
        description: "超頻玩家首選，DDR5-5600，32GB雙通道套件，Intel XMP 3.0支援",
        price: 2697,
        image: "https://img.pchome.com.tw/cs/items/DRACB8A900FIATV/000001_1663745662.jpg",
        category: "記憶體",
        brand: "Kingston",
        emoji: "🛡️",
        bgColor: "linear-gradient(135deg, #000000, #333333)",
        specifications: {
            "產品型號": "KF556C36BBEK2-32",
            "產品系列": "FURY Beast 獸獵者",
            "容量": "32GB (16GB x 2)",
            "記憶體類型": "DDR5 DRAM",
            "速度": "5600 MHz",
            "XMP支援": "Intel XMP 3.0",
            "特色": "超頻玩家首選",
            "穩定性": "提升超頻穩定性與效率",
            "品牌": "Kingston 金士頓",
            "原價": "NT$2,865",
            "特價": "NT$2,697"
        }
    },
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
    },
    
    // ===== 儲存裝置 =====
    {
        id: 13,
        name: "Samsung 990 PRO 含散熱片 2TB NVMe M.2 SSD",
        description: "PCIe Gen4，讀取7450MB/s，寫入6900MB/s，含散熱片，PS5相容",
        price: 5699,
        image: "./images/Samsung 990 PRO 含散熱片 2TB NVMe.png",
        category: "儲存",
        brand: "Samsung",
        emoji: "💾",
        bgColor: "linear-gradient(135deg, #1f8ef1, #1565c0)",
        specifications: {
            "產品型號": "MZ-V9P2T0CW",
            "容量": "2TB",
            "介面": "PCIe Gen4, NVMe M.2 2280",
            "讀取速度": "最高7,450 MB/s",
            "寫入速度": "最高6,900 MB/s",
            "散熱片": "含散熱片",
            "相容性": "PlayStation 5擴充推薦",
            "保固": "5年原廠保固",
            "特色": "主控、顆粒、DRAM、韌體全為三星自行設計",
            "穩定性": "穩定性最佳",
            "品牌": "Samsung 三星",
            "原價": "NT$8,169",
            "特價": "NT$5,699"
        }
    },
    {
        id: 14,
        name: "WD BLACK SN850X 2TB Gen4 PCIe SSD (配備散熱片)",
        description: "PCIe Gen4，讀取7300MB/s，寫入6600MB/s，配備散熱片，PS5專用最佳化",
        price: 5290,
        image: "./images/WD BLACK SN850X 2TB.png",
        category: "儲存",
        brand: "WD",
        emoji: "🎮",
        bgColor: "linear-gradient(135deg, #000000, #333333)",
        specifications: {
            "產品型號": "WDS200T2XHE",
            "容量": "2TB",
            "介面": "PCIe Gen 4x4, M.2 NVMe",
            "外形": "M.2 2280",
            "讀取速度": "最高7,300 MB/s",
            "寫入速度": "最高6,600 MB/s",
            "IOPS": "最高1,200,000",
            "技術": "TLC NAND",
            "散熱片": "內建散熱片",
            "相容性": "PlayStation 5最佳化",
            "保固": "5年原廠保固",
            "品牌": "WD 威騰",
            "系列": "BLACK 黑標系列"
        }
    },
    {
        id: 15,
        name: "Seagate FireCuda 530 2TB NVMe SSD",
        description: "PCIe 4.0，讀取7300MB/s，寫入6900MB/s，3D TLC NAND，5年保固+救援服務",
        price: 6500,
        image: "./images/Seagate FireCuda 530 2TB NVMe SSD.png",
        category: "儲存",
        brand: "Seagate",
        emoji: "🔥",
        bgColor: "linear-gradient(135deg, #4fc3f7, #29b6f6)",
        specifications: {
            "產品型號": "ST2000LX001",
            "容量": "2TB",
            "介面": "PCIe 4.0 NVMe M.2",
            "讀取速度": "7300 MB/s",
            "寫入速度": "6900 MB/s",
            "品牌": "Seagate 希捷"
        }
    },
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
    },
    
    // ===== 電源供應器 =====
    {
        id: 16,
        name: "Corsair RM850x 850W 80+ Gold",
        description: "850W全模組化，80 Plus Gold效率，135mm風扇，10年保固，ATX 3.0準備就緒",
        price: 4500,
        image: "./images/Corsair RM850x 850W 80+ Gold.png",
        category: "電源",
        brand: "Corsair",
        emoji: "🔌"
    },
    {
        id: 17,
        name: "Seasonic Focus GX-850 850W 80+ Gold",
        description: "850W全模組化，80 Plus Gold效率，Fluid Dynamic Bearing風扇，10年保固",
        price: 4200,
        image: "./images/Seasonic Focus GX-850 850W.png",
        category: "電源",
        brand: "Seasonic",
        emoji: "⚡"
    },
    {
        id: 18,
        name: "be quiet! Straight Power 11 850W 80+ Gold",
        description: "850W全模組化，80 Plus Gold效率，Silent Wings 3風扇，5年保固",
        price: 4600,
        image: "./images/be quiet! Straight Power 11 850W.png",
        category: "電源",
        brand: "be quiet!",
        emoji: "🔇",
        bgColor: "linear-gradient(135deg, #424242, #212121)",
        specifications: {
            "瓦數": "850W",
            "效率": "80 Plus Gold",
            "模組化": "全模組化",
            "風扇": "Silent Wings 3 135mm",
            "保固": "5年保固",
            "品牌": "be quiet!"
        }
    },
    {
        id: 75,
        name: "Corsair RM1000x 1000W 80+ Gold",
        description: "1000W全模組化，80 Plus Gold效率，135mm風扇，10年保固，支援RTX 4090",
        price: 5800,
        image: "./images/Corsair RM1000x 1000W 80+ Gold.png",
        category: "電源",
        brand: "Corsair",
        emoji: "🔌",
        bgColor: "linear-gradient(135deg, #667eea, #764ba2)",
        specifications: {
            "瓦數": "1000W",
            "效率": "80 Plus Gold",
            "模組化": "全模組化",
            "風扇": "135mm零轉速風扇",
            "保固": "10年保固",
            "品牌": "Corsair 海盜船"
        }
    },
    {
        id: 76,
        name: "Corsair CV650 650W 80+ Bronze",
        description: "650W非模組化，80 Plus Bronze效率，120mm風扇，3年保固，入門首選",
        price: 2200,
        image: "./images/Corsair CV650 650W.png",
        category: "電源",
        brand: "Corsair",
        emoji: "🔌",
        bgColor: "linear-gradient(135deg, #667eea, #764ba2)",
        specifications: {
            "瓦數": "650W",
            "效率": "80 Plus Bronze",
            "模組化": "非模組化",
            "風扇": "120mm風扇",
            "保固": "3年保固",
            "品牌": "Corsair 海盜船"
        }
    },
    {
        id: 77,
        name: "Seasonic Prime TX-1000 1000W 80+ Titanium",
        description: "1000W全模組化，80 Plus Titanium效率，頂級電源，12年保固",
        price: 8500,
        image: "./images/Seasonic Prime TX-1000.png",
        category: "電源",
        brand: "Seasonic",
        emoji: "⚡",
        bgColor: "linear-gradient(135deg, #4fc3f7, #29b6f6)",
        specifications: {
            "瓦數": "1000W",
            "效率": "80 Plus Titanium",
            "模組化": "全模組化",
            "風扇": "135mm FDB風扇",
            "保固": "12年保固",
            "品牌": "Seasonic 海韻"
        }
    },
    {
        id: 78,
        name: "Seasonic Core GM-650 650W 80+ Gold",
        description: "650W半模組化，80 Plus Gold效率，120mm風扇，7年保固，高CP值",
        price: 2800,
        image: "./images/Seasonic Core GM-650.png",
        category: "電源",
        brand: "Seasonic",
        emoji: "⚡",
        bgColor: "linear-gradient(135deg, #4fc3f7, #29b6f6)",
        specifications: {
            "瓦數": "650W",
            "效率": "80 Plus Gold",
            "模組化": "半模組化",
            "風扇": "120mm FDB風扇",
            "保固": "7年保固",
            "品牌": "Seasonic 海韻"
        }
    },
    {
        id: 79,
        name: "be quiet! Dark Power Pro 12 1200W 80+ Titanium",
        description: "1200W全模組化，80 Plus Titanium效率，頂級靜音設計，5年保固",
        price: 9800,
        image: "./images/be quiet! Dark Power Pro 12 1200W.png",
        category: "電源",
        brand: "be quiet!",
        emoji: "🔇",
        bgColor: "linear-gradient(135deg, #424242, #212121)",
        specifications: {
            "瓦數": "1200W",
            "效率": "80 Plus Titanium",
            "模組化": "全模組化",
            "風扇": "Silent Wings Pro 4 135mm",
            "保固": "5年保固",
            "品牌": "be quiet!"
        }
    },
    {
        id: 80,
        name: "be quiet! System Power 10 600W 80+ Bronze",
        description: "600W非模組化，80 Plus Bronze效率，120mm風扇，3年保固，經濟實惠",
        price: 1800,
        image: "./images/be quiet! System Power 10 600W.png",
        category: "電源",
        brand: "be quiet!",
        emoji: "🔇",
        bgColor: "linear-gradient(135deg, #424242, #212121)",
        specifications: {
            "瓦數": "600W",
            "效率": "80 Plus Bronze",
            "模組化": "非模組化",
            "風扇": "120mm風扇",
            "保固": "3年保固",
            "品牌": "be quiet!"
        }
    },
    
    // ===== 機殼 =====
    {
        id: 19,
        name: "NZXT H7 Flow 中塔機殼",
        description: "中塔ATX，優化氣流設計，支援360mm水冷，USB 3.2 Gen 2 Type-C前置接口",
        price: 3200,
        image: "./images/NZXT H7 Flow 中塔機殼.png",
        category: "機殼",
        brand: "NZXT",
        emoji: "🏠"
    },
    {
        id: 20,
        name: "Fractal Design Define 7 中塔機殼",
        description: "中塔ATX，ModuVent技術，支援420mm水冷，隔音材質，無工具安裝",
        price: 4200,
        image: "./images/Fractal Design Define 7.png",
        category: "機殼",
        brand: "Fractal Design",
        emoji: "🎨"
    },
    {
        id: 21,
        name: "Cooler Master MasterBox TD500 Mesh",
        description: "中塔ATX，網狀前面板，ARGB風扇x3，支援360mm水冷，鋼化玻璃側板",
        price: 2800,
        image: "./images/Cooler Master MasterBox TD500 Mesh.png",
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
        image: "./images/Noctua NH-D15 雙塔CPU散熱器.png",
        category: "散熱",
        brand: "Noctua",
        emoji: "🌡️"
    },
    {
        id: 23,
        name: "Corsair H150i Elite LCD 360mm 一體式水冷",
        description: "360mm水冷，2.1吋IPS LCD螢幕，ML120 RGB風扇x3，支援LGA1700/AM5",
        price: 5800,
        image: "./images/Corsair H150i Elite LCD 360mm.png",
        category: "散熱",
        brand: "Corsair",
        emoji: "❄️"
    },
    {
        id: 24,
        name: "Arctic Liquid Freezer II 360 A-RGB",
        description: "360mm一體式水冷，P12 PWM PST A-RGB風扇x3，VRM風扇，6年保固",
        price: 3800,
        image: "./images/Arctic Liquid Freezer II 360 A-RGB.png",
        category: "散熱",
        brand: "Arctic",
        emoji: "🧊"
    },
    
    // ===== 散熱膏 =====
    {
        id: 26,
        name: "Arctic MX-4 導熱膏 4g",
        description: "專業級導熱膏，導熱係數8.5 W/mK，適用所有CPU和GPU，超過8年效力保證",
        price: 290,
        image: "https://img.pchome.com.tw/cs/items/DRAF01A90096E7X/000001_1545204761.jpg",
        category: "散熱膏",
        brand: "Arctic",
        emoji: "🧪",
        bgColor: "linear-gradient(135deg, #4fc3f7, #29b6f6)",
        specifications: {
            "產品型號": "ACTCP00002B",
            "容量": "4 公克",
            "導熱係數": "8.5 W/mK",
            "應用溫度": "-50°C 到 +150°C",
            "黏度": "870 poise",
            "密度": "2.5 g/cm³",
            "特色": "非導電、非腐蝕性",
            "保固": "超過8年效力保證",
            "品牌": "Arctic"
        }
    },
    {
        id: 27,
        name: "Noctua NT-H1 散熱膏 3.5g",
        description: "高效能散熱膏，易塗抹設計，適用所有散熱器，6年保固",
        price: 450,
        image: "https://img.pchome.com.tw/cs/items/DRAF1QA900B8Y8G/000001_1580787152.jpg",
        category: "散熱膏",
        brand: "Noctua",
        emoji: "🧪",
        bgColor: "linear-gradient(135deg, #8d6e63, #6d4c41)",
        specifications: {
            "產品型號": "NT-H1",
            "容量": "3.5 公克",
            "導熱係數": "優異導熱性能",
            "特色": "不導電、不腐蝕",
            "易用性": "易塗抹、易清潔",
            "保固": "6年原廠保固",
            "品牌": "Noctua"
        }
    },
    {
        id: 34,
        name: "Thermal Grizzly Kryonaut 導熱膏 1g",
        description: "頂級導熱膏，導熱係數12.5 W/mK，適用極限超頻，溫度範圍-250°C至350°C",
        price: 580,
        image: "https://img.pchome.com.tw/cs/items/DRAF2MA900H4567/000001_1634567890.jpg",
        category: "散熱膏",
        brand: "Thermal Grizzly",
        emoji: "🧪",
        bgColor: "linear-gradient(135deg, #ff6b35, #f7931e)",
        specifications: {
            "產品型號": "TG-K-001-RS",
            "容量": "1 公克",
            "導熱係數": "12.5 W/mK",
            "應用溫度": "-250°C 到 +350°C",
            "特色": "高效能極限超頻專用",
            "適用": "CPU/GPU極限散熱",
            "保固": "原廠保固",
            "品牌": "Thermal Grizzly"
        }
    },
    
    // ===== 系統風扇 =====
    {
        id: 28,
        name: "Noctua NF-A14 PWM 140mm 靜音風扇",
        description: "14公分PWM風扇，SSO2軸承，最高轉速1500 RPM，6年保固",
        price: 890,
        image: "https://img.pchome.com.tw/cs/items/DRACQ1A900BZGWN/000001_1587456781.jpg",
        category: "系統風扇",
        brand: "Noctua",
        emoji: "🌪️",
        bgColor: "linear-gradient(135deg, #8d6e63, #6d4c41)",
        specifications: {
            "產品型號": "NF-A14 PWM",
            "尺寸": "140x140x25 mm",
            "轉速": "300-1500 RPM",
            "噪音": "24.6 dB(A)",
            "氣流": "140.2 m³/h",
            "靜壓": "2.08 mm H₂O",
            "軸承": "SSO2軸承",
            "保固": "6年原廠保固",
            "品牌": "Noctua"
        }
    },
    {
        id: 29,
        name: "Corsair LL120 RGB 120mm 風扇套組 (3入)",
        description: "12公分RGB風扇3入組，含Lighting Node PRO控制器，iCUE軟體控制",
        price: 3490,
        image: "https://img.pchome.com.tw/cs/items/DRACQ8A900FVYP9/000001_1697691234.jpg",
        category: "系統風扇",
        brand: "Corsair",
        emoji: "🌈",
        bgColor: "linear-gradient(135deg, #667eea, #764ba2)",
        specifications: {
            "產品型號": "CO-9050072-WW",
            "尺寸": "120x120x25 mm",
            "轉速": "600-1500 RPM",
            "噪音": "24.8 dB(A)",
            "氣流": "43.25 CFM",
            "RGB燈效": "16個獨立可控LED",
            "控制軟體": "iCUE",
            "包裝內容": "3個風扇+Lighting Node PRO",
            "品牌": "Corsair 海盜船"
        }
    },
    {
        id: 37,
        name: "be quiet! Pure Wings 2 140mm PWM 風扇",
        description: "14公分PWM風扇，Rifle軸承，超靜音設計，最高轉速1000 RPM，3年保固",
        price: 450,
        image: "https://img.pchome.com.tw/cs/items/DRACQ3A900D7890/000001_1598765432.jpg",
        category: "系統風扇",
        brand: "be quiet!",
        emoji: "🔇",
        bgColor: "linear-gradient(135deg, #424242, #212121)",
        specifications: {
            "產品型號": "BL047",
            "尺寸": "140x140x25 mm",
            "轉速": "200-1000 RPM",
            "噪音": "18.8 dB(A)",
            "氣流": "61.2 CFM",
            "靜壓": "1.11 mm H₂O",
            "軸承": "Rifle軸承",
            "特色": "超靜音設計",
            "保固": "3年保固",
            "品牌": "be quiet!"
        }
    },
    
    // ===== 滑鼠 =====
    {
        id: 30,
        name: "Logitech G Pro X Superlight 2 無線電競滑鼠",
        description: "超輕量60g設計，HERO 32K感應器，最高32000 DPI，95小時電池續航",
        price: 4290,
        image: "https://img.pchome.com.tw/cs/items/DSADBKA900J1234/000001_1698765432.jpg",
        category: "滑鼠",
        brand: "Logitech",
        emoji: "🖱️",
        bgColor: "linear-gradient(135deg, #00d4ff, #0099cc)",
        specifications: {
            "產品型號": "G Pro X Superlight 2",
            "重量": "約60g",
            "感應器": "HERO 32K",
            "DPI": "最高32,000 DPI",
            "連接方式": "LIGHTSPEED無線",
            "電池續航": "95小時",
            "按鍵": "5個可程式化按鍵",
            "腳貼": "純PTFE腳貼",
            "品牌": "Logitech 羅技"
        }
    },
    {
        id: 31,
        name: "Razer DeathAdder V3 Pro 無線電競滑鼠",
        description: "Focus Pro 30K感應器，最高30000 DPI，HyperSpeed無線技術，90小時續航",
        price: 3890,
        image: "https://img.pchome.com.tw/cs/items/DSADBPA900H8765/000001_1689876543.jpg",
        category: "滑鼠",
        brand: "Razer",
        emoji: "🐍",
        bgColor: "linear-gradient(135deg, #00ff88, #00cc66)",
        specifications: {
            "產品型號": "DeathAdder V3 Pro",
            "感應器": "Focus Pro 30K",
            "DPI": "最高30,000 DPI",
            "連接方式": "HyperSpeed無線/有線",
            "電池續航": "90小時",
            "按鍵": "8個可程式化按鍵",
            "重量": "63g",
            "人體工學": "右手專用設計",
            "品牌": "Razer 雷蛇"
        }
    },
    
    // ===== 鍵盤 =====
    {
        id: 32,
        name: "Corsair K70 RGB MK.2 機械式鍵盤 (Cherry MX Red)",
        description: "Cherry MX Red軸，RGB背光，航空級鋁合金框架，專用媒體控制鍵",
        price: 3990,
        image: "https://img.pchome.com.tw/cs/items/DSADCKA900F2468/000001_1675432198.jpg",
        category: "鍵盤",
        brand: "Corsair",
        emoji: "⌨️",
        bgColor: "linear-gradient(135deg, #667eea, #764ba2)",
        specifications: {
            "產品型號": "K70 RGB MK.2",
            "軸體": "Cherry MX Red 紅軸",
            "背光": "RGB背光",
            "框架": "航空級鋁合金",
            "按鍵數": "104鍵全尺寸",
            "防重影": "全鍵防重影",
            "媒體控制": "專用媒體控制鍵",
            "軟體": "iCUE控制軟體",
            "品牌": "Corsair 海盜船"
        }
    },
    {
        id: 33,
        name: "Logitech G915 TKL 無線機械鍵盤",
        description: "GL Tactile軸，無線/藍牙雙模式，RGB背光，40小時電池續航，87鍵緊湊設計",
        price: 5690,
        image: "https://img.pchome.com.tw/cs/items/DSADCLA900G3579/000001_1687654321.jpg",
        category: "鍵盤",
        brand: "Logitech",
        emoji: "⌨️",
        bgColor: "linear-gradient(135deg, #00d4ff, #0099cc)",
        specifications: {
            "產品型號": "G915 TKL",
            "軸體": "GL Tactile 茶軸",
            "連接方式": "LIGHTSPEED無線/藍牙",
            "背光": "RGB背光",
            "電池續航": "40小時(開燈)",
            "按鍵數": "87鍵緊湊設計",
            "材質": "5052鋁合金上蓋",
            "軟體": "Logitech G HUB",
            "品牌": "Logitech 羅技"
        }
    },
    {
        id: 35,
        name: "SteelSeries Apex Pro TKL 無線機械鍵盤",
        description: "OmniPoint 2.0可調軸，87鍵緊湊設計，無線2.4GHz，40小時續航",
        price: 6290,
        image: "https://img.pchome.com.tw/cs/items/DSADCMA900H9876/000001_1678543210.jpg",
        category: "鍵盤",
        brand: "SteelSeries",
        emoji: "⌨️",
        bgColor: "linear-gradient(135deg, #ff6b35, #f7931e)",
        specifications: {
            "產品型號": "Apex Pro TKL Wireless",
            "軸體": "OmniPoint 2.0 可調軸",
            "連接方式": "無線2.4GHz/有線USB-C",
            "電池續航": "40小時",
            "按鍵數": "87鍵緊湊設計",
            "背光": "RGB背光",
            "軟體": "SteelSeries GG",
            "特色": "可調觸發距離0.2-3.8mm",
            "品牌": "SteelSeries 賽睿"
        }
    },
    {
        id: 36,
        name: "SteelSeries Rival 650 Wireless 無線電競滑鼠",
        description: "TrueMove3+ 12000 DPI感應器，無線/有線雙模，可調重量系統",
        price: 2890,
        image: "https://img.pchome.com.tw/cs/items/DSADBSA900I5432/000001_1687654987.jpg",
        category: "滑鼠",
        brand: "SteelSeries",
        emoji: "🖱️",
        bgColor: "linear-gradient(135deg, #ff6b35, #f7931e)",
        specifications: {
            "產品型號": "Rival 650 Wireless",
            "感應器": "TrueMove3+ 12000 DPI",
            "連接方式": "無線2.4GHz/有線USB",
            "電池續航": "24小時(RGB開啟)",
            "重量系統": "4g x2 重量塊",
            "按鍵": "7個可程式化按鍵",
            "RGB燈效": "3區域RGB",
            "軟體": "SteelSeries GG",
            "品牌": "SteelSeries 賽睿"
        }
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

// 載入商品數據的函數
function loadProductsFromStorage() {
    try {
        const productsData = localStorage.getItem('productsDatabase');
        if (productsData) {
            const allProducts = JSON.parse(productsData);
            if (allProducts && allProducts.length > 0) {
                // 只載入上架狀態的商品
                const activeProducts = allProducts
                    .filter(product => product.status === 'active' || product.status === undefined)
                    .map(product => ({
                        ...product,
                        // 確保相容性，如果使用新的圖片結構，將封面圖片設為 image 欄位
                        image: product.images?.cover || product.image || './images/placeholder.svg'
                    }));
                
                console.log(`從 localStorage 載入了 ${allProducts.length} 個商品，其中 ${activeProducts.length} 個為上架狀態`);
                return activeProducts;
            }
        }
    } catch (error) {
        console.error('載入商品數據時發生錯誤:', error);
    }
    
    // 如果 localStorage 中沒有數據，返回原始的硬編碼數據（設定為上架狀態）
    console.log('使用硬編碼的商品數據');
    return products.map(product => ({
        ...product,
        status: 'active' // 預設為上架狀態
    }));
}

// 重新載入並更新商品顯示
function refreshProductsFromStorage() {
    console.log('重新載入商品數據...');
    const loadedProducts = loadProductsFromStorage();
    
    console.log('localStorage商品數量:', loadedProducts.length);
    console.log('當前全域products數量:', window.products.length);
    
    // 更新全域商品變數
    window.products = loadedProducts;
    
    console.log('更新後全域products數量:', window.products.length);
    console.log('最新商品列表:', window.products.map(p => p.name).slice(-5));
    
    // 重新渲染商品
    renderProducts();
    
    // 更新品牌篩選
    updateBrandFilter();
    
    console.log('商品數據已更新，顯示', loadedProducts.length, '個商品');
}

// 檢查商品數據是否有更新
let lastProductCount = 0;
function checkForProductUpdates() {
    try {
        const productsData = localStorage.getItem('productsDatabase');
        if (productsData) {
            const products = JSON.parse(productsData);
            const currentCount = products.length;
            
            if (currentCount !== lastProductCount && lastProductCount > 0) {
                console.log(`檢測到商品數據變更：${lastProductCount} -> ${currentCount}`);
                refreshProductsFromStorage();
            }
            
            lastProductCount = currentCount;
        }
    } catch (error) {
        console.error('檢查商品更新時發生錯誤:', error);
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 前台開始初始化...');
    
    // 等待數據遷移和圖片匹配完成後再初始化
    setTimeout(() => {
        console.log('📦 載入最新商品數據...');
        
        // 載入商品數據（優先使用 localStorage 中的數據）
        const loadedProducts = loadProductsFromStorage();
        if (loadedProducts !== products) {
            // 如果載入的是新數據，替換全域變數
            window.products = loadedProducts;
        }
        
        // 設定初始商品數量以供後續比較
        lastProductCount = window.products.length;
        
        console.log(`✅ 載入完成！共 ${window.products.length} 個上架商品`);
        
        renderProducts();
        updateCartUI();
        setupEventListeners();
        updateBrandFilter();
        
        // 每5秒檢查一次商品數據更新
        setInterval(checkForProductUpdates, 3000);
        
        console.log('🎉 前台初始化完成，開始監控商品數據變更...');
        
        // 檢查是否有商品包含圖片庫
        const productsWithGallery = window.products.filter(p => p.images?.gallery && p.images.gallery.length > 0);
        if (productsWithGallery.length > 0) {
            console.log(`📸 發現 ${productsWithGallery.length} 個商品包含圖片庫功能`);
        }
        
    }, 2000); // 延長等待時間，確保圖片匹配完成
});

// 添加手動重新整理按鈕功能（可選）
function manualRefreshProducts() {
    console.log('手動重新整理商品...');
    refreshProductsFromStorage();
}

// 渲染產品
function renderProducts() {
    console.log('renderProducts() 被調用');
    console.log('當前products總數:', window.products.length);
    console.log('當前分類篩選:', currentCategory);
    console.log('當前品牌篩選:', currentBrands);
    
    // 隱藏載入指示器
    const loadingIndicator = document.getElementById('loading-indicator');
    if (loadingIndicator) {
        loadingIndicator.style.display = 'none';
    }
    
    // 顯示產品網格
    const productGrid = document.getElementById('product-grid');
    if (productGrid) {
        productGrid.style.display = 'grid';
        productGrid.classList.add('loaded');
    }
    
    productGrid.innerHTML = '';
    
    let filteredProducts = filterProducts();
    console.log('篩選後商品數量:', filteredProducts.length);
    
    filteredProducts = sortProducts(filteredProducts);
    
    if (filteredProducts.length === 0) {
        console.log('沒有商品可顯示');
        productGrid.innerHTML = '<div class="no-products" style="text-align: center; padding: 40px; color: #6c757d;">沒有找到符合條件的商品</div>';
        return;
    }
    
    console.log('準備渲染', filteredProducts.length, '個商品');
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        // 使用品牌漸層背景或預設背景
        const bgColor = product.bgColor || `linear-gradient(135deg, #667eea, #764ba2)`;
        
        // 取得正確的圖片路徑
        const imageUrl = product.image || product.images?.cover || './images/placeholder.svg';
        
        productCard.innerHTML = `
            <div class="product-image" style="position: relative;">
                <img src="${imageUrl}" 
                     alt="${product.name}" 
                     style="width: 100%; height: 100%; object-fit: cover;"
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="image-fallback" style="display: none; width: 100%; height: 100%; background: ${bgColor}; color: white; align-items: center; justify-content: center; font-size: 3rem;">
                    ${product.emoji}
                </div>
                ${product.status === 'active' ? '' : '<div style="position: absolute; top: 5px; right: 5px; background: rgba(220, 53, 69, 0.9); color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px;">已下架</div>'}
                <div class="product-emoji" style="position: absolute; bottom: 8px; left: 8px; font-size: 1.5rem; background: rgba(255,255,255,0.9); border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;">
                    ${product.emoji}
                </div>
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-price">NT$ ${product.price.toLocaleString()}</div>
                <div class="product-actions" style="margin-top: 10px;">
                    <button class="add-to-cart" onclick="addToCart(${product.id})" style="width: 100%; margin-bottom: 5px;">
                        🛒 加入購物車
                    </button>
                    <button class="view-specs-btn" onclick="showProductDetails(${product.id})" style="width: 48%; margin-right: 4%;">
                        📋 查看規格
                    </button>
                    ${product.images?.gallery && product.images.gallery.length > 0 ? 
                        `<button class="view-gallery-btn" onclick="showProductGallery(${product.id})" style="width: 48%; background: #17a2b8; border: none; color: white; padding: 8px; border-radius: 4px; cursor: pointer;">
                            📸 查看圖片
                        </button>` : ''
                    }
                </div>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
    
    // 添加載入完成訊息
    console.log(`✅ 前台商品渲染完成！顯示 ${filteredProducts.length} 個商品`);
    
    // 檢查是否有圖片庫功能的商品
    const productsWithGallery = filteredProducts.filter(p => p.images?.gallery && p.images.gallery.length > 0);
    if (productsWithGallery.length > 0) {
        console.log(`📸 其中 ${productsWithGallery.length} 個商品包含圖片庫功能`);
    }
}

// 篩選產品
function filterProducts() {
    return window.products.filter(product => {
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

// 更新品牌篩選選項
function updateBrandFilter() {
    const brandCheckboxContainer = document.querySelector('.brand-checkboxes');
    if (!brandCheckboxContainer) return;
    
    // 獲取當前分類下的所有品牌
    let availableBrands = [];
    
    if (currentCategory === 'all') {
        // 如果是全部商品，顯示所有品牌
        availableBrands = [...new Set(window.products.map(product => product.brand))].sort();
    } else {
        // 只顯示當前分類下的品牌
        availableBrands = [...new Set(
            window.products
                .filter(product => product.category === currentCategory)
                .map(product => product.brand)
        )].sort();
    }
    
    // 清空現有的品牌選項
    brandCheckboxContainer.innerHTML = '';
    
    // 生成新的品牌選項
    availableBrands.forEach(brand => {
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = brand;
        checkbox.checked = currentBrands.includes(brand);
        
        // 添加事件監聽器
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                if (!currentBrands.includes(this.value)) {
                    currentBrands.push(this.value);
                }
            } else {
                currentBrands = currentBrands.filter(brand => brand !== this.value);
            }
            renderProducts();
        });
        
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(' ' + brand));
        brandCheckboxContainer.appendChild(label);
    });
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
            
            // 清除品牌篩選選項
            currentBrands = [];
            
            // 更新品牌篩選選項顯示
            updateBrandFilter();
            
            renderProducts();
        });
    });
    
    // 品牌篩選事件監聽器已在 updateBrandFilter() 函數中動態設置
    
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
    
    // 找到對應的按鈕和產品卡片
    const button = document.querySelector(`button[onclick="addToCart(${productId})"]`);
    const productCard = button.closest('.product-card');
    
    // 添加載入狀態
    button.classList.add('loading');
    productCard.classList.add('adding');
    
    // 模擬載入時間（讓動畫更明顯）
    setTimeout(() => {
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
        showAddToCartFeedback(product);
        
        // 移除載入狀態，添加成功狀態
        button.classList.remove('loading');
        button.classList.add('success');
        productCard.classList.remove('adding');
        
        // 清除成功狀態
        setTimeout(() => {
            button.classList.remove('success');
        }, 800);
        
    }, 300);
}

// 顯示加入購物車反饋
function showAddToCartFeedback(product) {
    // 購物車按鈕震動動畫
    cartBtn.classList.add('shake');
    setTimeout(() => {
        cartBtn.classList.remove('shake');
    }, 600);
    
    // 購物車數量動畫
    cartCount.classList.add('animate');
    setTimeout(() => {
        cartCount.classList.remove('animate');
    }, 600);
    
    // 顯示成功提示訊息
    showCartToast(product);
}

// 顯示購物車成功提示
function showCartToast(product) {
    // 移除現有的提示
    const existingToast = document.querySelector('.cart-toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    // 創建新提示
    const toast = document.createElement('div');
    toast.className = 'cart-toast';
    
    toast.innerHTML = `
        <div class="cart-toast-icon">🛒</div>
        <div class="cart-toast-content">
            <div class="cart-toast-title">已加入購物車！</div>
            <div class="cart-toast-message">${product.name}</div>
        </div>
    `;
    
    document.body.appendChild(toast);
    
    // 3秒後自動消失
    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.remove();
            }
        }, 300);
    }, 3000);
    
    // 點擊提示可以立即關閉
    toast.addEventListener('click', () => {
        toast.classList.add('fade-out');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.remove();
            }
        }, 300);
    });
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
    const orderNumber = 'ORD' + Date.now();
    const orderData = {
        orderNumber: orderNumber,
        customerInfo: {
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
        timestamp: new Date().toISOString(),
        orderDate: new Date().toLocaleString('zh-TW'),
        processed: false
    };
    
    // 保存訂單到localStorage（模擬檔案儲存）
    saveOrderToFile(orderData);
    
    // 顯示訂單成功訊息
    showOrderSuccess(orderData);
    
    // 清空購物車和表單
    cart = [];
    updateCartUI();
    hideOrderForm();
    toggleCart();
}

// 保存訂單到檔案（使用localStorage模擬）
function saveOrderToFile(orderData) {
    try {
        const orderId = `order_${Date.now()}`;
        localStorage.setItem(orderId, JSON.stringify(orderData));
        console.log('訂單已保存:', orderId);
    } catch (error) {
        console.error('保存訂單失敗:', error);
        alert('訂單保存失敗，請稍後重試');
    }
}

// 顯示訂單成功訊息
function showOrderSuccess(orderData) {
    const successMessage = `
訂單提交成功！

訂單編號：${orderData.orderNumber}
客戶姓名：${orderData.customerInfo.name}
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

// 顯示產品詳情
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // 建立產品詳情彈跳視窗
    const modal = document.createElement('div');
    modal.className = 'product-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.7);
        z-index: 3000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease;
    `;
    
    const bgColor = product.bgColor || `linear-gradient(135deg, #667eea, #764ba2)`;
    
    modal.innerHTML = `
        <div class="modal-content" style="
            background: white;
            width: 90%;
            max-width: 800px;
            max-height: 90vh;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            animation: slideIn 0.3s ease;
        ">
            <div class="modal-header" style="
                background: ${bgColor};
                color: white;
                padding: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            ">
                <div>
                    <h2 style="margin: 0; font-size: 1.5rem;">${product.name}</h2>
                    <p style="margin: 5px 0 0 0; opacity: 0.9;">${product.brand} • ${product.category}</p>
                </div>
                <div style="display: flex; align-items: center; gap: 15px;">
                    <div style="font-size: 3rem;">${product.emoji}</div>
                    <button onclick="closeProductModal()" style="
                        background: rgba(255,255,255,0.2);
                        border: none;
                        color: white;
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        cursor: pointer;
                        font-size: 1.2rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    ">×</button>
                </div>
            </div>
            <div class="modal-body" style="padding: 20px; max-height: 60vh; overflow-y: auto;">
                <div class="product-overview" style="margin-bottom: 25px;">
                    <h3 style="color: #333; margin-bottom: 10px;">產品概述</h3>
                    <p style="color: #666; line-height: 1.6;">${product.description}</p>
                    <div class="price-display" style="
                        background: linear-gradient(135deg, #2ed573, #1e8449);
                        color: white;
                        padding: 15px 20px;
                        border-radius: 10px;
                        margin-top: 15px;
                        text-align: center;
                    ">
                        <span style="font-size: 1.8rem; font-weight: bold;">NT$ ${product.price.toLocaleString()}</span>
                    </div>
                </div>
                
                ${product.specifications ? `
                <div class="specifications">
                    <h3 style="color: #333; margin-bottom: 15px;">🔧 詳細規格</h3>
                    <div class="specs-grid" style="
                        display: grid;
                        gap: 12px;
                        background: #f8f9fa;
                        padding: 20px;
                        border-radius: 10px;
                    ">
                        ${Object.entries(product.specifications).map(([key, value]) => `
                            <div class="spec-item" style="
                                display: flex;
                                justify-content: space-between;
                                padding: 8px 0;
                                border-bottom: 1px solid #e9ecef;
                            ">
                                <span style="font-weight: 600; color: #495057;">${key}:</span>
                                <span style="color: #6c757d;">${value}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
            </div>
            <div class="modal-footer" style="
                padding: 20px;
                background: #f8f9fa;
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 15px;
            ">
                <button onclick="closeProductModal()" style="
                    background: #6c757d;
                    color: white;
                    border: none;
                    padding: 12px 24px;
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 1rem;
                ">關閉</button>
                <button onclick="addToCartFromModal(${product.id});" style="
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    border: none;
                    padding: 12px 24px;
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 1rem;
                    font-weight: bold;
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                ">🛒 加入購物車 - NT$ ${product.price.toLocaleString()}</button>
            </div>
        </div>
    `;
    
    // 點擊背景關閉
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeProductModal();
        }
    });
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
}

// 從產品詳情彈窗中加入購物車
function addToCartFromModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // 找到彈窗中的按鈕
    const button = document.querySelector(`button[onclick="addToCartFromModal(${productId});"]`);
    
    // 添加載入效果
    button.style.background = '#6c757d';
    button.innerHTML = '⌛ 加入中...';
    button.style.pointerEvents = 'none';
    
    setTimeout(() => {
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
        showAddToCartFeedback(product);
        
        // 成功狀態
        button.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
        button.innerHTML = '✅ 已加入！';
        
        // 1.5秒後關閉彈窗
        setTimeout(() => {
            closeProductModal();
        }, 1500);
        
    }, 500);
}

// 關閉產品詳情彈跳視窗
function closeProductModal() {
    const modal = document.querySelector('.product-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

// 顯示商品圖片庫
function showProductGallery(productId) {
    const product = window.products.find(p => p.id === productId);
    if (!product || !product.images || !product.images.gallery || product.images.gallery.length === 0) {
        alert('此商品沒有額外的圖片');
        return;
    }
    
    // 創建圖片庫彈窗
    const modal = document.createElement('div');
    modal.className = 'gallery-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        z-index: 3000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease;
    `;
    
    // 創建所有圖片陣列（封面 + 內頁）
    const allImages = [product.images.cover, ...product.images.gallery].filter(img => img);
    let currentIndex = 0;
    
    modal.innerHTML = `
        <div style="
            background: white;
            width: 90%;
            max-width: 900px;
            max-height: 90vh;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            position: relative;
        ">
            <!-- 標題列 -->
            <div style="
                background: linear-gradient(135deg, #667eea, #764ba2);
                color: white;
                padding: 15px 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            ">
                <div>
                    <h3 style="margin: 0; font-size: 1.2rem;">${product.name} - 產品圖片</h3>
                    <p style="margin: 5px 0 0 0; opacity: 0.9; font-size: 0.9rem;">共 ${allImages.length} 張圖片</p>
                </div>
                <button onclick="closeGalleryModal()" style="
                    background: rgba(255,255,255,0.2);
                    border: none;
                    color: white;
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    cursor: pointer;
                    font-size: 1.1rem;
                ">×</button>
            </div>
            
            <!-- 圖片顯示區 -->
            <div style="
                position: relative;
                background: #f8f9fa;
                padding: 20px;
                text-align: center;
                min-height: 400px;
                display: flex;
                align-items: center;
                justify-content: center;
            ">
                <img id="galleryMainImage" 
                     src="${allImages[0]}" 
                     alt="${product.name}"
                     style="
                        max-width: 100%;
                        max-height: 500px;
                        object-fit: contain;
                        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                        border-radius: 8px;
                     "
                     onerror="this.src='./images/placeholder.svg';">
                
                <!-- 左右切換按鈕 -->
                ${allImages.length > 1 ? `
                    <button onclick="changeGalleryImage(-1)" style="
                        position: absolute;
                        left: 10px;
                        top: 50%;
                        transform: translateY(-50%);
                        background: rgba(0,0,0,0.7);
                        border: none;
                        color: white;
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        cursor: pointer;
                        font-size: 1.2rem;
                    ">‹</button>
                    <button onclick="changeGalleryImage(1)" style="
                        position: absolute;
                        right: 10px;
                        top: 50%;
                        transform: translateY(-50%);
                        background: rgba(0,0,0,0.7);
                        border: none;
                        color: white;
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        cursor: pointer;
                        font-size: 1.2rem;
                    ">›</button>
                ` : ''}
            </div>
            
            <!-- 縮圖導航 -->
            ${allImages.length > 1 ? `
                <div style="
                    padding: 15px 20px;
                    background: white;
                    border-top: 1px solid #eee;
                    display: flex;
                    gap: 10px;
                    overflow-x: auto;
                    justify-content: center;
                ">
                    ${allImages.map((img, index) => `
                        <img src="${img}" 
                             onclick="setGalleryImage(${index})"
                             style="
                                width: 60px;
                                height: 60px;
                                object-fit: cover;
                                border-radius: 4px;
                                cursor: pointer;
                                border: 2px solid ${index === 0 ? '#667eea' : 'transparent'};
                                opacity: ${index === 0 ? '1' : '0.7'};
                                transition: all 0.2s;
                             "
                             onerror="this.src='./images/placeholder.svg';"
                             data-index="${index}">
                    `).join('')}
                </div>
            ` : ''}
            
            <!-- 圖片資訊 -->
            <div style="
                padding: 15px 20px;
                background: #f8f9fa;
                text-align: center;
                border-top: 1px solid #eee;
            ">
                <span id="galleryImageInfo" style="color: #6c757d; font-size: 0.9rem;">
                    第 1 張 / 共 ${allImages.length} 張 ${currentIndex === 0 ? '(封面圖片)' : '(說明圖片)'}
                </span>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // 點擊背景關閉
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeGalleryModal();
        }
    });
    
    // 儲存圖片陣列和當前索引到全域變數
    window.galleryImages = allImages;
    window.currentGalleryIndex = 0;
    
    // 鍵盤導航
    window.galleryKeyHandler = function(e) {
        if (e.key === 'ArrowLeft') changeGalleryImage(-1);
        if (e.key === 'ArrowRight') changeGalleryImage(1);
        if (e.key === 'Escape') closeGalleryModal();
    };
    document.addEventListener('keydown', window.galleryKeyHandler);
}

// 切換圖片庫圖片
function changeGalleryImage(direction) {
    if (!window.galleryImages) return;
    
    window.currentGalleryIndex += direction;
    
    // 循環處理
    if (window.currentGalleryIndex >= window.galleryImages.length) {
        window.currentGalleryIndex = 0;
    } else if (window.currentGalleryIndex < 0) {
        window.currentGalleryIndex = window.galleryImages.length - 1;
    }
    
    setGalleryImage(window.currentGalleryIndex);
}

// 設定圖片庫圖片
function setGalleryImage(index) {
    if (!window.galleryImages || index < 0 || index >= window.galleryImages.length) return;
    
    window.currentGalleryIndex = index;
    
    // 更新主圖片
    const mainImage = document.getElementById('galleryMainImage');
    if (mainImage) {
        mainImage.src = window.galleryImages[index];
    }
    
    // 更新縮圖邊框
    document.querySelectorAll('[data-index]').forEach((thumb, i) => {
        thumb.style.border = i === index ? '2px solid #667eea' : '2px solid transparent';
        thumb.style.opacity = i === index ? '1' : '0.7';
    });
    
    // 更新資訊文字
    const infoElement = document.getElementById('galleryImageInfo');
    if (infoElement) {
        const imageType = index === 0 ? '(封面圖片)' : '(說明圖片)';
        infoElement.textContent = `第 ${index + 1} 張 / 共 ${window.galleryImages.length} 張 ${imageType}`;
    }
}

// 關閉圖片庫彈窗
function closeGalleryModal() {
    const modal = document.querySelector('.gallery-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
        
        // 清除全域變數
        delete window.galleryImages;
        delete window.currentGalleryIndex;
        
        // 移除鍵盤事件監聽
        if (window.galleryKeyHandler) {
            document.removeEventListener('keydown', window.galleryKeyHandler);
            delete window.galleryKeyHandler;
        }
    }
}

// 修正載入商品數據時的圖片處理
function loadProductsFromStorage() {
    try {
        const productsData = localStorage.getItem('productsDatabase');
        if (productsData) {
            const allProducts = JSON.parse(productsData);
            if (allProducts && allProducts.length > 0) {
                // 只載入上架狀態的商品
                const activeProducts = allProducts
                    .filter(product => product.status === 'active' || product.status === undefined)
                    .map(product => ({
                        ...product,
                        // 確保相容性，如果使用新的圖片結構，將封面圖片設為 image 欄位
                        image: product.images?.cover || product.image || './images/placeholder.svg'
                    }));
                
                console.log(`📸 從 localStorage 載入了 ${allProducts.length} 個商品，其中 ${activeProducts.length} 個為上架狀態`);
                console.log('圖片結構檢查:', activeProducts.slice(0,3).map(p => ({
                    name: p.name,
                    image: p.image,
                    hasGallery: !!(p.images?.gallery && p.images.gallery.length > 0)
                })));
                
                return activeProducts;
            }
        }
    } catch (error) {
        console.error('載入商品數據時發生錯誤:', error);
    }
    
    // 如果 localStorage 中沒有數據，返回原始的硬編碼數據（設定為上架狀態）
    console.log('使用硬編碼的商品數據');
    return products.map(product => ({
        ...product,
        status: 'active' // 預設為上架狀態
    }));
}