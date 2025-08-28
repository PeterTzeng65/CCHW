# 🛒 PiPiBUY 電腦零件購物網站

> 現代化的電腦零件電商平台，具備完整的購物車系統、後台管理、動畫效果

[![Version](https://img.shields.io/badge/版本-v1.0.0-blue.svg)](https://github.com/)
[![License](https://img.shields.io/badge/授權-MIT-green.svg)](LICENSE)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-動畫效果-orange.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS)

## 🌟 專案特色

### 前台功能
- 🛍️ **商品展示系統** - 支援12個分類，多品牌篩選
- 🛒 **購物車系統** - 具備動畫效果的加入購物車體驗
- 📱 **響應式設計** - 支援桌面、平板、手機各種裝置
- 🎨 **動畫反饋** - Toast提示、按鈕動畫、購物車震動效果
- 🔍 **商品詳情** - 彈窗式詳細規格查看
- 📋 **訂單系統** - 完整的結帳流程與表單驗證

### 後台管理
- 🔐 **用戶認證** - 安全的登入登出系統
- 📊 **統計儀表板** - 即時訂單統計與視覺化
- 📋 **訂單管理** - 列表式訂單管理，支援狀態更新
- 📄 **分頁功能** - 大量訂單的分頁瀏覽
- 🎯 **詳細檢視** - 點擊式訂單詳情彈窗
- ⚙️ **系統設定** - 管理員帳號密碼管理

## 🚀 快速開始

### 1. 啟動網站
```bash
# 使用Python啟動本地伺服器
python -m http.server 8000

# 或使用Node.js
npx http-server

# 或直接開啟index.html檔案
```

### 2. 訪問網站
- **前台**：http://localhost:8000/index.html
- **後台**：http://localhost:8000/admin.html
  - 帳號：admin
  - 密碼：admin123

## 🛠️ 技術架構

- **純JavaScript ES6+** - 無框架依賴，快速載入
- **CSS3動畫** - 流暢的過渡效果與關鍵幀動畫
- **響應式設計** - Flexbox與Grid布局
- **LocalStorage** - 客戶端資料持久化

## 🛍️ 商品分類

### 硬體組件
- **CPU** - Intel、AMD處理器
- **GPU** - NVIDIA、AMD顯示卡  
- **主機板** - ASUS、MSI、Gigabyte
- **記憶體** - Corsair、G.Skill、Kingston
- **儲存** - Samsung、WD、Seagate SSD/HDD

### 散熱與週邊
- **散熱器** - 空冷、水冷散熱解決方案
- **散熱膏** - Arctic、Noctua、Thermal Grizzly
- **系統風扇** - 靜音、RGB風扇
- **電源** - 80+認證電源供應器
- **機殼** - 中塔、全塔機殼

### 輸入設備
- **滑鼠** - Logitech、Razer、SteelSeries
- **鍵盤** - 機械式、無線鍵盤

## 🔧 服務選項

- **測試服務**：+NT$500
- **組裝服務**：+NT$800

⚠️ **重要說明**：測試及組裝服務會拆開原包裝，除不良品故障外不接受退貨

## 📞 客服資訊

客服專線：**0800-080-000**

## 🚀 部署說明

1. 將所有檔案上傳至GitHub儲存庫
2. 在儲存庫設定中啟用GitHub Pages
3. 選擇主分支作為來源
4. 網站將自動部署至指定網址

## 📁 專案結構

```
PiPiBUY/
├── 📄 index.html              # 前台主頁面
├── 🔐 admin.html              # 後台管理頁面
├── ⚡ script.js               # 前台JavaScript邏輯
├── 🛠️ admin.js                # 後台JavaScript邏輯
├── 🎨 styles.css              # 全域樣式表
├── 📁 images/                 # 商品圖片資源
├── 📁 backup/                 # 專案備份資料夾
├── 📋 使用說明書.md           # 詳細使用說明
├── 📖 README.md               # 專案說明（本檔案）
└── 📁 .vscode/                # VS Code 設定檔
```

## 💡 使用說明

### 前台操作
1. **瀏覽商品**：使用左側分類選單篩選商品
2. **加入購物車**：點擊商品的「加入購物車」按鈕，享受動畫效果
3. **查看購物車**：點擊右上角購物車圖標
4. **調整數量**：在購物車中使用 +/- 按鈕
5. **商品詳情**：點擊「📋 查看規格」查看完整規格
6. **結帳**：填寫訂單資訊並選擇服務選項
7. **確認訂單**：同意服務條款後送出訂單

### 後台管理
1. **登入系統**：使用帳號 admin / 密碼 admin123
2. **查看統計**：點擊統計卡片查看對應訂單
3. **訂單管理**：瀏覽訂單列表，點擊查看詳細資訊
4. **狀態更新**：標記訂單為已處理或未處理
5. **分頁瀏覽**：使用分頁功能瀏覽大量訂單

## 🎨 動畫效果

- **購物車震動** - 加入商品時購物車圖示會搖擺
- **Toast提示** - 右上角彈出成功加入提示
- **按鈕動畫** - 載入和成功狀態視覺反饋
- **數量脈衝** - 購物車數量徽章放大效果
- **懸停效果** - 商品卡片和按鈕的互動動畫

## 📱 瀏覽器支援

| 瀏覽器 | 版本 | 支援程度 |
|--------|------|----------|
| Chrome | 70+ | ✅ 完全支援 |
| Firefox | 65+ | ✅ 完全支援 |
| Safari | 12+ | ✅ 完全支援 |
| Edge | 79+ | ✅ 完全支援 |

## 👨‍💻 開發團隊

- **AI助手**：Claude (Anthropic)
- **平台**：Claude Code
- **開發時間**：2025年8月

---

<div align="center">

**🚀 Made with ❤️ by Claude Code**

*感謝使用 PiPiBUY 電腦零件購物網站！*

**客服專線：0800-080-000**

</div>