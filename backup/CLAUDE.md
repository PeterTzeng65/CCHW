# Claude Code 專案配置

## 🤖 Claude Code 設定

### 專案環境
- **工作目錄**: `/mnt/c/Users/peter/OneDrive/文件/00-專案-AI/饅頭宇宙/HW1New`
- **專案類型**: 電商網站開發
- **開發模式**: 前端 + 後台管理
- **主要語言**: HTML, CSS, JavaScript

### 快速命令

#### 🚀 啟動專案
```bash
# 前台
open index.html

# 後台管理
open admin.html
```

#### 🔧 開發伺服器
```bash
# 啟動HTTP服務 (如果需要)
npx http-server -p 8080 -c-1
# 或
python -m http.server 8080
```

#### 📸 圖片處理
```javascript
// 重新執行圖片匹配
updateProductImages();

// 檢查商品資料庫狀態
checkMigrationStatus();

// 驗證圖片路徑
validateImagePaths();
```

#### 🗃️ 資料管理
```javascript
// 備份商品數據
const backup = localStorage.getItem('productsDatabase');
console.save(backup, 'products_backup.json');

// 恢復商品數據
localStorage.setItem('productsDatabase', backupData);

// 清除所有資料（重置）
localStorage.clear();
```

### 🛠️ 開發工具配置

#### 測試指令
```bash
# 檢查檔案結構
ls -la

# 檢查圖片目錄
ls -la images/

# 檢查JavaScript語法
node -c script.js
node -c admin.js
```

#### 建構指令
```bash
# 壓縮CSS (如果需要)
uglifycss styles.css > styles.min.css

# 壓縮JavaScript (如果需要)
uglifyjs script.js > script.min.js
uglifyjs admin.js > admin.min.js
```

### 📁 專案結構監控
```bash
# 監控檔案變更
watch -n 1 'ls -la *.html *.js *.css'

# 檢查圖片檔案大小
du -sh images/
```

---

## 🏃‍♂️ 快速開發流程

### 1. 新增商品
1. 開啟 `admin.html`
2. 登入 (admin/admin123)
3. 點擊「商品管理」
4. 點擊「➕ 新增商品」
5. 上傳圖片並填寫資訊

### 2. 修改圖片匹配
編輯 `update-product-images.js`：
```javascript
// 在 productImageMapping 中新增商品映射
"新商品名稱": {
    images: {
        cover: "./images/類別/封面圖片.jpg",
        gallery: ["./images/類別/圖片2.jpg", "./images/類別/圖片3.jpg"]
    }
}
```

### 3. 調整樣式
編輯 `styles.css`：
```css
/* 修改主要配色 */
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
}
```

### 4. 前台功能擴展
編輯 `script.js`：
```javascript
// 新增商品篩選功能
function customFilter() {
    // 自定義篩選邏輯
}
```

---

## 🧪 測試指令

### 功能測試
```javascript
// 前台控制台測試
console.log('商品總數:', window.products.length);
console.log('購物車:', cart);

// 後台控制台測試  
console.log('管理系統:', adminSystem);
console.log('商品資料庫:', JSON.parse(localStorage.getItem('productsDatabase')));
```

### 效能測試
```javascript
// 測試載入時間
console.time('商品載入');
loadProductsFromStorage();
console.timeEnd('商品載入');

// 測試圖片匹配
console.time('圖片匹配');
updateProductImages();
console.timeEnd('圖片匹配');
```

---

## 🚨 故障排除

### 常見問題
1. **商品不顯示**
   ```javascript
   // 檢查資料
   console.log(localStorage.getItem('productsDatabase'));
   // 重新載入
   location.reload();
   ```

2. **圖片不顯示**
   ```javascript
   // 檢查圖片路徑
   validateImagePaths();
   // 重新匹配
   updateProductImages();
   ```

3. **後台登入失敗**
   ```javascript
   // 重置管理員密碼
   localStorage.setItem('adminCredentials', JSON.stringify({
       username: 'admin',
       password: 'admin123'
   }));
   ```

### 緊急修復
```javascript
// 完全重置系統
localStorage.clear();
location.reload();

// 恢復預設商品
delete localStorage.productsDatabase;
migrateProductsToLocalStorage();
```

---

## 📋 開發檢查清單

### 新功能開發前
- [ ] 備份當前資料
- [ ] 檢查瀏覽器相容性
- [ ] 測試現有功能正常

### 新功能開發後
- [ ] 前台功能測試
- [ ] 後台功能測試
- [ ] 跨瀏覽器測試
- [ ] 響應式測試
- [ ] 資料同步測試

### 部署前檢查
- [ ] 所有圖片路徑正確
- [ ] JavaScript無錯誤
- [ ] CSS樣式正常
- [ ] localStorage功能正常
- [ ] 管理員登入正常

---

## 🔄 版本管理

### Git 指令 (如果使用)
```bash
# 初始化
git init
git add .
git commit -m "初始版本"

# 功能更新
git add .
git commit -m "新增圖片庫功能"

# 建立標籤
git tag -a v1.0 -m "完整版本發布"
```

### 手動備份
```bash
# 備份整個專案
cp -r . ../PiPiBUY_backup_$(date +%Y%m%d)

# 備份重要檔案
cp *.html *.js *.css ../backup/
```

---

## 🎯 效能優化建議

### JavaScript
- 使用 `requestAnimationFrame` 優化動畫
- 實施虛擬滾動處理大量商品
- 使用 Web Workers 處理圖片

### CSS
- 使用 CSS Grid 和 Flexbox
- 避免重複的漸層定義
- 使用 CSS 變數統一配色

### 圖片
- 實施懒載入
- 使用 WebP 格式
- 提供多尺寸圖片

---

## 📖 文件連結

- [使用說明書.md](./使用說明書.md) - 用戶使用指南
- [專案記錄.md](./專案記錄.md) - 完整專案記錄
- [README.md](./README.md) - 專案說明 (如有)

---

## 🤝 協作開發

### Code Review 重點
- 資料安全性
- 使用者體驗
- 效能最佳化
- 程式碼可維護性

### 開發準則
- 使用語意化HTML
- 遵循CSS BEM命名
- JavaScript使用ES6+
- 註釋重要邏輯

---

**最後更新**: 2025-08-27  
**Claude Code 版本**: 最新版  
**專案狀態**: ✅ 完成並可部署