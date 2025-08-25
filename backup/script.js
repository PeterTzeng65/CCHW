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
        emoji: "🔥"
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
        emoji: "🔇"
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
        
        // 使用品牌漸層背景或預設背景
        const bgColor = product.bgColor || `linear-gradient(135deg, #667eea, #764ba2)`;
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" 
                     alt="${product.name}" 
                     style="width: 100%; height: 100%; object-fit: cover;"
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="image-fallback" style="display: none; width: 100%; height: 100%; background: ${bgColor}; color: white; align-items: center; justify-content: center; font-size: 3rem;">
                    ${product.emoji}
                </div>
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-price">NT$ ${product.price.toLocaleString()}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    加入購物車
                </button>
                <button class="view-specs-btn" onclick="showProductDetails(${product.id})" style="width: 100%; margin-top: 8px;">
                    📋 查看規格
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