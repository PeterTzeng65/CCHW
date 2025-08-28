// 後台管理系統 JavaScript

class AdminSystem {
    constructor() {
        this.currentUser = null;
        this.orders = [];
        this.products = [];
        this.currentPage = 1;
        this.ordersPerPage = 10;
        this.currentOrderType = null;
        this.currentTab = 'orders';
        this.currentProductId = null;
        this.filteredProducts = [];
        this.currentProductStatusTab = 'active'; // 預設顯示上架商品
        this.currentProductPage = 1; // 預設第一頁
        this.init();
    }

    init() {
        // 檢查是否已登入
        this.checkLogin();
        
        // 設定事件監聽器
        this.setupEventListeners();
        
        // 載入預設管理員帳號（如果不存在）
        this.initDefaultAdmin();
        
        // 延遲初始化商品數據庫，確保前台腳本已載入
        setTimeout(() => {
            console.log('延遲初始化開始，檢查window.products...');
            console.log('window.products可用性:', typeof window.products, window.products ? window.products.length : 'undefined');
            this.initializeProductsDatabase();
        }, 300);
    }

    setupEventListeners() {
        // 登入表單
        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin();
        });

        // 設定表單
        document.getElementById('settingsForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSettings();
        });

        // 商品表單
        document.getElementById('productForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleProductSubmit();
        });
    }

    initDefaultAdmin() {
        // 如果沒有管理員帳號，建立預設帳號
        if (!localStorage.getItem('adminCredentials')) {
            const defaultCredentials = {
                username: 'admin',
                password: 'admin123'
            };
            localStorage.setItem('adminCredentials', JSON.stringify(defaultCredentials));
        }
    }

    checkLogin() {
        const loginStatus = localStorage.getItem('adminLoggedIn');
        if (loginStatus === 'true') {
            this.currentUser = JSON.parse(localStorage.getItem('currentAdminUser'));
            this.showAdminPanel();
        }
    }

    handleLogin() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        const credentials = JSON.parse(localStorage.getItem('adminCredentials'));
        
        if (username === credentials.username && password === credentials.password) {
            this.currentUser = { username };
            localStorage.setItem('adminLoggedIn', 'true');
            localStorage.setItem('currentAdminUser', JSON.stringify(this.currentUser));
            this.showAdminPanel();
        } else {
            this.showError('帳號或密碼錯誤');
        }
    }

    showError(message) {
        const errorElement = document.getElementById('errorMessage');
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        setTimeout(() => {
            errorElement.style.display = 'none';
        }, 3000);
    }

    showAdminPanel() {
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('adminPanel').style.display = 'block';
        
        // 確保預設分頁是活躍的
        console.log('設置預設活躍分頁...');
        setTimeout(() => {
            const defaultTab = document.getElementById('pendingOrders');
            const defaultButton = document.querySelector(`[onclick="switchTab('pending')"]`);
            
            if (defaultTab && defaultButton) {
                // 清除所有active類別
                document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
                document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
                
                // 設置預設活躍
                defaultTab.classList.add('active');
                defaultButton.classList.add('active');
                
                console.log('預設分頁設置完成');
                console.log('pendingOrders active:', defaultTab.classList.contains('active'));
                console.log('按鈕 active:', defaultButton.classList.contains('active'));
            }
            
            this.loadOrders();
            
            // 同時初始化商品資料，以備之後切換到商品分頁
            console.log('預載商品資料...');
            setTimeout(() => {
                console.log('showAdminPanel延遲載入，window.products狀態:', typeof window.products, window.products ? window.products.length : 'undefined');
                this.initializeProductsDatabase();
                this.products = this.getAllProducts();
                console.log('預載完成，商品數量:', this.products.length);
            }, 500);
        }, 100);
    }

    logout() {
        localStorage.removeItem('adminLoggedIn');
        localStorage.removeItem('currentAdminUser');
        document.getElementById('loginContainer').style.display = 'flex';
        document.getElementById('adminPanel').style.display = 'none';
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        this.currentUser = null;
    }

    loadOrders() {
        // 從localStorage載入所有訂單
        this.orders = this.getAllOrders();
        console.log('載入訂單數量:', this.orders.length);
        if (this.orders.length > 0) {
            console.log('訂單清單:', this.orders.map(o => ({id: o.id, customer: o.customerInfo?.name, total: o.total})));
        }
        this.displayOrders();
        this.updateStats();
    }

    getAllOrders() {
        const orders = [];
        const keys = Object.keys(localStorage);
        
        console.log('=== 檢查 localStorage ===');
        console.log('localStorage 總共有', keys.length, '個鍵值');
        console.log('所有 localStorage 鍵:', keys);
        
        const orderKeys = keys.filter(key => key.startsWith('order_'));
        console.log('找到', orderKeys.length, '個訂單鍵:', orderKeys);
        
        keys.forEach(key => {
            if (key.startsWith('order_')) {
                try {
                    const orderData = localStorage.getItem(key);
                    console.log('原始訂單資料 (' + key + '):', orderData);
                    
                    const order = JSON.parse(orderData);
                    order.id = key;
                    orders.push(order);
                    
                    console.log('解析後的訂單:', order);
                } catch (e) {
                    console.error('Error parsing order:', key, e);
                }
            }
        });
        
        console.log('最終訂單陣列:', orders);
        
        // 按時間排序（最新的在前）
        return orders.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    }

    displayOrders() {
        // 預設顯示所有訂單
        if (this.orders.length === 0) {
            const ordersDisplay = document.getElementById('ordersDisplay');
            if (ordersDisplay) {
                ordersDisplay.innerHTML = `
                    <div class="no-selection" style="text-align: center; padding: 60px 20px; color: #6c757d;">
                        <div style="font-size: 4rem; margin-bottom: 20px;">📋</div>
                        <h3>目前沒有訂單</h3>
                        <p>當客戶從前台下訂單後，訂單將會出現在這裡</p>
                    </div>
                `;
            }
        } else {
            // 預設顯示所有訂單
            this.displayOrdersList(this.orders, '所有訂單');
        }
    }
    
    createSimpleOrderHTML(order) {
        const isProcessed = order.processed === true;
        const statusText = isProcessed ? '已處理' : '待處理';
        const buttonText = isProcessed ? '標記未處理' : '標記已處理';
        
        return `
            <div style="border: 1px solid #ddd; border-radius: 8px; padding: 20px; margin-bottom: 15px; background: white;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                    <h3>訂單 #${order.id.replace('order_', '')}</h3>
                    <div>
                        <span style="padding: 6px 12px; border-radius: 20px; font-size: 12px; background: ${isProcessed ? '#d1edff' : '#fff3cd'}; color: ${isProcessed ? '#0c5460' : '#856404'};">${statusText}</span>
                        <button onclick="adminSystem.toggleOrderStatus('${order.id}')" style="padding: 8px 16px; border: none; border-radius: 6px; cursor: pointer; margin-left: 10px; background: ${isProcessed ? '#6c757d' : '#28a745'}; color: white;">
                            ${buttonText}
                        </button>
                    </div>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div style="padding: 20px; background: #ffffff; border: 1px solid #e9ecef; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                        <h4 style="color: #2c3e50; font-weight: 600; margin-bottom: 15px; font-size: 16px;">📋 訂單資訊</h4>
                        <p style="margin-bottom: 10px; color: #343a40; font-size: 14px;"><strong style="color: #495057;">客戶:</strong> ${order.customerInfo?.name || order.customer?.name || '未知'}</p>
                        <p style="margin-bottom: 10px; color: #343a40; font-size: 14px;"><strong style="color: #495057;">電話:</strong> ${order.customerInfo?.phone || order.customer?.phone || '未知'}</p>
                        <p style="margin-bottom: 10px; color: #343a40; font-size: 14px;"><strong style="color: #495057;">Email:</strong> ${order.customerInfo?.email || order.customer?.email || '未知'}</p>
                        <p style="margin-bottom: 10px; color: #343a40; font-size: 14px;"><strong style="color: #495057;">地址:</strong> ${order.customerInfo?.address || order.customer?.address || '未知'}</p>
                        <p style="margin-bottom: 0; color: #28a745; font-size: 16px; font-weight: 600;"><strong>總額:</strong> NT$ ${(order.total || 0).toLocaleString()}</p>
                    </div>
                    
                    <div style="padding: 20px; background: #ffffff; border: 1px solid #e9ecef; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                        <h4 style="color: #2c3e50; font-weight: 600; margin-bottom: 15px; font-size: 16px;">🛒 訂購商品</h4>
                        ${(order.items || []).map(item => `
                            <div style="margin-bottom: 12px; padding: 12px; background: #f8f9fa; border-left: 4px solid #667eea; border-radius: 6px;">
                                <strong style="color: #2c3e50; font-size: 14px;">${item.name || '未知商品'}</strong><br>
                                <small style="color: #6c757d; font-size: 12px;">數量: ${item.quantity || 1} | 價格: NT$ ${(item.price || 0).toLocaleString()}</small>
                            </div>
                        `).join('')}
                        ${(!order.items || order.items.length === 0) ? '<p style="color: #6c757d; font-style: italic;">無商品資訊</p>' : ''}
                    </div>
                </div>
            </div>
        `;
    }

    displayOrdersInTab(tabId, orders, emptyMessage) {
        const tabElement = document.getElementById(tabId);
        
        if (!tabElement) {
            console.error('找不到分頁元素:', tabId);
            return;
        }
        
        console.log(`=== 顯示 ${tabId} 分頁 ===`);
        console.log('訂單數量:', orders.length);
        console.log('分頁元素存在:', !!tabElement);
        
        if (orders.length === 0) {
            console.log('顯示空訊息');
            tabElement.innerHTML = `
                <div style="text-align: center; padding: 40px; color: #666;">
                    <h3>${emptyMessage}</h3>
                    <p>等待客戶下訂單...</p>
                </div>
            `;
            return;
        }

        // 檢查當前活躍分頁，如果不是當前分頁就強制設置為活躍
        if (tabId === 'pendingOrders') {
            console.log('強制設置待處理分頁為活躍...');
            document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            
            tabElement.classList.add('active');
            const pendingButton = document.querySelector(`[onclick="switchTab('pending')"]`);
            if (pendingButton) pendingButton.classList.add('active');
        }
        
        // 強制檢查元素狀態
        console.log('分頁元素資訊:');
        console.log('- 元素存在:', !!tabElement);
        console.log('- 元素可見性:', tabElement.style.display);
        console.log('- 元素類別:', tabElement.className);
        console.log('- 父元素:', tabElement.parentElement);
        console.log('- 當前內容長度:', tabElement.innerHTML.length);
        
        // 檢查是否為當前活躍分頁
        const isActive = tabElement.classList.contains('active');
        console.log('- 是否為活躍分頁:', isActive);
        
        if (!isActive) {
            console.log('⚠️  分頁不是活躍狀態，可能不會顯示');
        }
        
        try {
            const htmlParts = [];
            orders.forEach((order, index) => {
                console.log(`處理訂單 ${index + 1}:`, order.id);
                
                const isProcessed = order.processed === true;
                const statusText = isProcessed ? '已處理' : '待處理';
                const statusClass = isProcessed ? 'processed' : 'pending';
                const buttonText = isProcessed ? '標記未處理' : '標記已處理';
                
                // 完整的訂單HTML模板
                htmlParts.push(`
                    <div class="order-item ${isProcessed ? 'processed' : ''}" style="border: 1px solid #ddd; border-radius: 8px; padding: 20px; margin-bottom: 15px; background: white;">
                        <div class="order-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                            <div class="order-id" style="font-weight: bold; font-size: 18px; color: #333;">
                                訂單 #${order.id.replace('order_', '')}
                            </div>
                            <div>
                                <span class="order-status ${statusClass}" style="padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; ${isProcessed ? 'background: #d1edff; color: #0c5460;' : 'background: #fff3cd; color: #856404;'}">${statusText}</span>
                                <button onclick="adminSystem.toggleOrderStatus('${order.id}')" style="padding: 8px 16px; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; margin-left: 10px; ${isProcessed ? 'background: #6c757d; color: white;' : 'background: #28a745; color: white;'}">
                                    ${buttonText}
                                </button>
                            </div>
                        </div>
                        
                        <div class="order-details" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px;">
                            <div class="order-info" style="padding: 20px; background: #ffffff; border: 1px solid #e9ecef; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                                <h4 style="margin-bottom: 15px; color: #2c3e50; font-weight: 600; font-size: 16px;">📋 訂單資訊</h4>
                                <p style="margin-bottom: 10px; color: #343a40; font-size: 14px;"><strong style="color: #495057;">客戶姓名:</strong> ${order.customerInfo?.name || order.customer?.name || '未知'}</p>
                                <p style="margin-bottom: 10px; color: #343a40; font-size: 14px;"><strong style="color: #495057;">電話:</strong> ${order.customerInfo?.phone || order.customer?.phone || '未知'}</p>
                                <p style="margin-bottom: 10px; color: #343a40; font-size: 14px;"><strong style="color: #495057;">Email:</strong> ${order.customerInfo?.email || order.customer?.email || '未知'}</p>
                                <p style="margin-bottom: 10px; color: #343a40; font-size: 14px;"><strong style="color: #495057;">地址:</strong> ${order.customerInfo?.address || order.customer?.address || '未知'}</p>
                                <p style="margin-bottom: 10px; color: #6c757d; font-size: 13px;"><strong style="color: #495057;">下單時間:</strong> ${order.timestamp ? new Date(order.timestamp).toLocaleString('zh-TW') : order.orderDate || '未知'}</p>
                                <p style="margin-bottom: 10px; color: #28a745; font-size: 16px; font-weight: 600;"><strong>總金額:</strong> NT$ ${(order.total || 0).toLocaleString()}</p>
                                ${order.services && order.services.length > 0 ? `<p style="margin-bottom: 0; color: #17a2b8; font-size: 14px;"><strong style="color: #495057;">服務:</strong> ${order.services.join(', ')}</p>` : ''}
                            </div>
                            
                            <div class="order-items" style="padding: 20px; background: #ffffff; border: 1px solid #e9ecef; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                                <h4 style="margin-bottom: 15px; color: #2c3e50; font-weight: 600; font-size: 16px;">🛒 訂購商品</h4>
                                ${(order.items || []).map(item => `
                                    <div style="margin-bottom: 12px; padding: 12px; background: #f8f9fa; border-left: 4px solid #667eea; border-radius: 6px;">
                                        <strong style="color: #2c3e50; font-size: 14px;">${item.name || '未知商品'}</strong><br>
                                        <small style="color: #6c757d; font-size: 12px;">數量: ${item.quantity || 1} | 單價: NT$ ${(item.price || 0).toLocaleString()}</small>
                                    </div>
                                `).join('')}
                                ${(!order.items || order.items.length === 0) ? '<p style="color: #6c757d; font-style: italic;">無商品資訊</p>' : ''}
                            </div>
                        </div>
                    </div>
                `);
                console.log(`訂單 ${index + 1} 完整HTML建立成功`);
            });
            
            const finalHtml = htmlParts.join('');
            console.log('最終HTML長度:', finalHtml.length);
            tabElement.innerHTML = finalHtml;
            console.log('HTML已設置到分頁元素');
            console.log('分頁元素當前HTML:', tabElement.innerHTML.substring(0, 200) + '...');
        } catch (error) {
            console.error('建立HTML時發生錯誤:', error);
            tabElement.innerHTML = `<div style="color: red; padding: 20px;">顯示訂單時發生錯誤: ${error.message}</div>`;
        }
    }

    createOrderHTML(order) {
        const isProcessed = order.processed === true;
        const statusText = isProcessed ? '已處理' : '待處理';
        const statusClass = isProcessed ? 'processed' : 'pending';
        const buttonText = isProcessed ? '標記未處理' : '標記已處理';
        const buttonClass = isProcessed ? 'processed' : 'pending';
        
        // 檢查訂單數據結構
        console.log('建立訂單HTML:', {
            id: order.id,
            processed: order.processed,
            customerInfo: order.customerInfo,
            customer: order.customer,
            items: order.items?.length || 0
        });
        
        return `
            <div class="order-item ${isProcessed ? 'processed' : ''}">
                <div class="order-header">
                    <div class="order-id">訂單 #${order.id.replace('order_', '')}</div>
                    <div>
                        <span class="order-status ${statusClass}">${statusText}</span>
                        <button class="process-btn ${buttonClass}" onclick="adminSystem.toggleOrderStatus('${order.id}')">
                            ${buttonText}
                        </button>
                    </div>
                </div>
                
                <div class="order-details">
                    <div class="order-info">
                        <h4>📋 訂單資訊</h4>
                        <p><strong>客戶姓名:</strong> ${order.customerInfo?.name || order.customer?.name || '未知'}</p>
                        <p><strong>電話:</strong> ${order.customerInfo?.phone || order.customer?.phone || '未知'}</p>
                        <p><strong>Email:</strong> ${order.customerInfo?.email || order.customer?.email || '未知'}</p>
                        <p><strong>地址:</strong> ${order.customerInfo?.address || order.customer?.address || '未知'}</p>
                        <p><strong>下單時間:</strong> ${order.timestamp ? new Date(order.timestamp).toLocaleString('zh-TW') : order.orderDate || '未知'}</p>
                        <p><strong>總金額:</strong> NT$ ${order.total?.toLocaleString() || '0'}</p>
                        ${order.services && order.services.length > 0 ? `<p><strong>服務:</strong> ${order.services.join(', ')}</p>` : ''}
                    </div>
                    
                    <div class="order-items">
                        <h4>🛒 訂購商品</h4>
                        ${(order.items || []).map(item => `
                            <div style="margin-bottom: 10px; padding: 8px; background: white; border-radius: 4px;">
                                <strong>${item.name || '未知商品'}</strong><br>
                                <small>數量: ${item.quantity || 1} | 單價: NT$ ${(item.price || 0).toLocaleString()}</small>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    toggleOrderStatus(orderId) {
        console.log('toggleOrderStatus called with orderId:', orderId);
        
        try {
            const orderDataString = localStorage.getItem(orderId);
            console.log('Raw order data:', orderDataString);
            
            if (!orderDataString) {
                console.error('訂單不存在:', orderId);
                alert('找不到訂單資料！');
                return;
            }
            
            const orderData = JSON.parse(orderDataString);
            console.log('Parsed order data:', orderData);
            console.log('Current processed status:', orderData.processed);
            
            // 確保布林值正確切換
            const newStatus = orderData.processed === true ? false : true;
            orderData.processed = newStatus;
            orderData.processedAt = newStatus ? new Date().toISOString() : null;
            
            console.log('New processed status:', orderData.processed);
            
            // 保存更新的訂單資料
            const updatedOrderString = JSON.stringify(orderData);
            localStorage.setItem(orderId, updatedOrderString);
            console.log('Updated order data saved:', updatedOrderString);
            
            // 顯示成功訊息
            const statusText = newStatus ? '已處理' : '待處理';
            console.log(`訂單狀態已更新為: ${statusText}`);
            
            // 顯示用戶提示
            alert(`訂單狀態已更新為：${statusText}`);
            
            // 更新當前訂單數據
            const orderIndex = this.orders.findIndex(o => o.id === orderId);
            if (orderIndex !== -1) {
                this.orders[orderIndex] = {...orderData, id: orderId};
            }
            
            // 如果有彈窗打開，更新彈窗內容
            const existingModal = document.querySelector('.order-detail-modal');
            if (existingModal) {
                // 重新生成彈窗內容
                const modalContent = existingModal.querySelector('div[style*="max-height: 60vh"]');
                if (modalContent) {
                    modalContent.innerHTML = this.createSimpleOrderHTML({...orderData, id: orderId});
                }
            }
            
            // 重新載入訂單顯示
            this.loadOrders();
            
        } catch (error) {
            console.error('toggleOrderStatus 發生錯誤:', error);
            alert('更新訂單狀態時發生錯誤: ' + error.message);
        }
    }

    updateStats() {
        const total = this.orders.length;
        const processed = this.orders.filter(order => order.processed === true).length;
        const pending = this.orders.filter(order => order.processed === false || order.processed === undefined).length;
        
        document.getElementById('totalOrders').textContent = total;
        document.getElementById('processedOrders').textContent = processed;
        document.getElementById('pendingOrders').textContent = pending;
    }

    handleSettings() {
        const newUsername = document.getElementById('newUsername').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (newPassword !== confirmPassword) {
            alert('密碼確認不相符！');
            return;
        }
        
        const newCredentials = {
            username: newUsername,
            password: newPassword
        };
        
        localStorage.setItem('adminCredentials', JSON.stringify(newCredentials));
        alert('帳號設定已更新！請重新登入。');
        
        this.closeSettings();
        this.logout();
    }

    showOrdersByType(type) {
        this.currentOrderType = type;
        this.currentPage = 1; // 重置到第一頁
        
        let orders = [];
        let title = '';
        
        switch(type) {
            case 'all':
                orders = this.orders;
                title = '所有訂單';
                break;
            case 'pending':
                orders = this.orders.filter(order => order.processed === false || order.processed === undefined);
                title = '待處理訂單';
                break;
            case 'processed':
                orders = this.orders.filter(order => order.processed === true);
                title = '已處理訂單';
                break;
        }
        
        // 更新標題
        document.getElementById('ordersTitle').textContent = title;
        
        // 更新統計卡片的active狀態
        document.querySelectorAll('.stat-card').forEach(card => card.classList.remove('active'));
        if (type === 'all') {
            document.querySelector('[onclick="showOrders(\'all\')"]').classList.add('active');
        } else if (type === 'pending') {
            document.querySelector('[onclick="showOrders(\'pending\')"]').classList.add('active');
        } else if (type === 'processed') {
            document.querySelector('[onclick="showOrders(\'processed\')"]').classList.add('active');
        }
        
        this.displayOrdersList(orders, title);
    }

    displayOrdersList(orders, title) {
        console.log('=== displayOrdersList 被調用 ===');
        console.log('訂單數量:', orders.length);
        console.log('標題:', title);
        console.log('訂單資料:', orders);
        
        const ordersDisplay = document.getElementById('ordersDisplay');
        console.log('ordersDisplay 元素:', ordersDisplay);
        
        if (!ordersDisplay) {
            console.error('找不到 ordersDisplay 元素！');
            return;
        }
        
        if (orders.length === 0) {
            ordersDisplay.innerHTML = `
                <div style="text-align: center; padding: 60px 20px; color: #6c757d;">
                    <div style="font-size: 4rem; margin-bottom: 20px;">📭</div>
                    <h3>暫無${title}</h3>
                    <p>目前沒有符合條件的訂單</p>
                </div>
            `;
            return;
        }

        // 計算分頁
        const totalPages = Math.ceil(orders.length / this.ordersPerPage);
        const startIndex = (this.currentPage - 1) * this.ordersPerPage;
        const endIndex = startIndex + this.ordersPerPage;
        const currentOrders = orders.slice(startIndex, endIndex);

        // 生成訂單列表HTML
        const orderListHTML = currentOrders.map(order => this.createOrderRowHTML(order)).join('');
        
        // 生成分頁HTML
        const paginationHTML = this.createPaginationHTML(totalPages, orders.length);

        ordersDisplay.innerHTML = `
            <div class="orders-list">
                ${orderListHTML}
            </div>
            ${totalPages > 1 ? paginationHTML : ''}
        `;
    }

    createOrderRowHTML(order) {
        const isProcessed = order.processed === true;
        const statusText = isProcessed ? '已處理' : '待處理';
        const statusClass = isProcessed ? 'processed' : 'pending';
        
        const customerName = order.customerInfo?.name || order.customer?.name || '未知客戶';
        const customerPhone = order.customerInfo?.phone || order.customer?.phone || '';
        const customerEmail = order.customerInfo?.email || order.customer?.email || '';
        
        const itemCount = order.items ? order.items.length : 0;
        const orderDate = order.timestamp ? new Date(order.timestamp).toLocaleDateString('zh-TW') : '未知日期';
        
        return `
            <div class="order-row" onclick="showOrderDetail('${order.id}')">
                <div class="order-basic-info">
                    <div class="order-id-badge">
                        #${order.id.replace('order_', '').substring(0, 8)}...
                    </div>
                    <div class="order-customer-info">
                        <div class="customer-name">${customerName}</div>
                        <div class="customer-contact">${customerPhone} ${customerEmail ? '• ' + customerEmail : ''}</div>
                    </div>
                </div>
                <div class="order-summary">
                    <div class="order-items-count">${itemCount} 項商品</div>
                    <div class="order-amount">NT$ ${(order.total || 0).toLocaleString()}</div>
                    <div class="order-status-mini ${statusClass}">${statusText}</div>
                    <div class="order-date">${orderDate}</div>
                    <button class="view-detail-btn" onclick="event.stopPropagation(); showOrderDetail('${order.id}')">
                        查看詳細
                    </button>
                </div>
            </div>
        `;
    }

    createPaginationHTML(totalPages, totalOrders) {
        let paginationHTML = '<div class="pagination">';
        
        // 上一頁按鈕
        paginationHTML += `<button ${this.currentPage === 1 ? 'disabled' : ''} onclick="changePage(${this.currentPage - 1})">‹ 上一頁</button>`;
        
        // 頁碼按鈕
        const startPage = Math.max(1, this.currentPage - 2);
        const endPage = Math.min(totalPages, this.currentPage + 2);
        
        if (startPage > 1) {
            paginationHTML += `<button onclick="changePage(1)">1</button>`;
            if (startPage > 2) {
                paginationHTML += `<span>...</span>`;
            }
        }
        
        for (let i = startPage; i <= endPage; i++) {
            paginationHTML += `<button ${i === this.currentPage ? 'class="active"' : ''} onclick="changePage(${i})">${i}</button>`;
        }
        
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                paginationHTML += `<span>...</span>`;
            }
            paginationHTML += `<button onclick="changePage(${totalPages})">${totalPages}</button>`;
        }
        
        // 下一頁按鈕
        paginationHTML += `<button ${this.currentPage === totalPages ? 'disabled' : ''} onclick="changePage(${this.currentPage + 1})">下一頁 ›</button>`;
        
        // 頁面資訊
        const startItem = (this.currentPage - 1) * this.ordersPerPage + 1;
        const endItem = Math.min(this.currentPage * this.ordersPerPage, totalOrders);
        paginationHTML += `<div class="page-info">顯示 ${startItem}-${endItem} 項，共 ${totalOrders} 項</div>`;
        
        paginationHTML += '</div>';
        return paginationHTML;
    }

    changePage(page) {
        this.currentPage = page;
        if (this.currentOrderType) {
            this.showOrdersByType(this.currentOrderType);
        }
    }

    showOrderDetail(orderId) {
        const order = this.orders.find(o => o.id === orderId);
        if (!order) return;

        // 創建詳細視圖彈窗
        const modal = document.createElement('div');
        modal.className = 'order-detail-modal';
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

        const isProcessed = order.processed === true;
        const statusText = isProcessed ? '已處理' : '待處理';
        const buttonText = isProcessed ? '標記未處理' : '標記已處理';

        modal.innerHTML = `
            <div style="
                background: white;
                width: 90%;
                max-width: 800px;
                max-height: 90vh;
                border-radius: 15px;
                overflow: hidden;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                animation: slideIn 0.3s ease;
            ">
                <div style="
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    padding: 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                ">
                    <div>
                        <h2 style="margin: 0; font-size: 1.5rem;">訂單詳細資訊</h2>
                        <p style="margin: 5px 0 0 0; opacity: 0.9;">訂單編號: #${order.id.replace('order_', '')}</p>
                    </div>
                    <button onclick="closeOrderDetail()" style="
                        background: rgba(255,255,255,0.2);
                        border: none;
                        color: white;
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        cursor: pointer;
                        font-size: 1.2rem;
                    ">×</button>
                </div>
                <div style="padding: 20px; max-height: 60vh; overflow-y: auto;">
                    ${this.createSimpleOrderHTML(order)}
                </div>
            </div>
        `;

        // 點擊背景關閉
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeOrderDetail();
            }
        });

        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';
        
        // 將關閉函數設為全域
        window.closeOrderDetail = () => {
            modal.remove();
            document.body.style.overflow = 'auto';
            delete window.closeOrderDetail;
        };
    }

    // ===== 商品管理功能 =====

    loadProducts() {
        console.log('loadProducts called');
        // 從localStorage載入所有商品
        this.products = this.getAllProducts();
        console.log('Products loaded:', this.products.length);
        console.log('Sample product:', this.products[0]);
        
        this.filteredProducts = [...this.products];
        this.updateProductStats();
        this.updateProductFilters();
        
        // 確保預設狀態分頁是活躍的
        if (!this.currentProductStatusTab) {
            this.currentProductStatusTab = 'active';
        }
        
        // 確保分頁按鈕正確顯示
        this.setProductStatusTabActive(this.currentProductStatusTab);
        
        this.displayProducts();
        console.log('Products display completed');
    }

    getAllProducts() {
        const productsData = localStorage.getItem('productsDatabase');
        if (productsData) {
            try {
                return JSON.parse(productsData);
            } catch (e) {
                console.error('Error parsing products data:', e);
                return [];
            }
        }
        return [];
    }

    saveProducts() {
        try {
            localStorage.setItem('productsDatabase', JSON.stringify(this.products));
            return true;
        } catch (e) {
            console.error('Error saving products:', e);
            alert('保存商品數據時發生錯誤！');
            return false;
        }
    }

    updateProductStats() {
        const totalProducts = this.products.length;
        const categories = [...new Set(this.products.map(p => p.category))].filter(Boolean);
        const brands = [...new Set(this.products.map(p => p.brand))].filter(Boolean);
        
        console.log('更新商品統計 - 總數:', totalProducts, '分類數:', categories.length, '品牌數:', brands.length);
        
        // 安全更新DOM元素
        const totalProductsEl = document.getElementById('totalProducts');
        if (totalProductsEl) {
            totalProductsEl.textContent = totalProducts;
        }
        
        const totalCategoriesEl = document.getElementById('totalCategories');
        if (totalCategoriesEl) {
            totalCategoriesEl.textContent = categories.length;
        }
        
        const totalBrandsEl = document.getElementById('totalBrands');
        if (totalBrandsEl) {
            totalBrandsEl.textContent = brands.length;
        }
    }

    updateProductFilters() {
        console.log('=== 更新商品篩選器 ===');
        console.log('商品總數:', this.products.length);
        
        if (this.products.length === 0) {
            console.log('沒有商品資料，無法更新篩選器');
            return;
        }
        
        // 取得所有分類和品牌
        const categories = [...new Set(this.products.map(p => p.category))].filter(Boolean).sort();
        const brands = [...new Set(this.products.map(p => p.brand))].filter(Boolean).sort();
        
        console.log('解析出的分類:', categories);
        console.log('解析出的品牌:', brands);
        console.log('第一個商品範例:', this.products[0]);
        
        // 更新分類選項
        const categoryFilter = document.getElementById('categoryFilter');
        if (categoryFilter) {
            console.log('找到分類篩選元素，正在更新...');
            let categoryHTML = '<option value="">全部分類</option>';
            categories.forEach(category => {
                categoryHTML += `<option value="${category}">${category}</option>`;
            });
            categoryFilter.innerHTML = categoryHTML;
            console.log('分類選項已更新，選項數量:', categoryFilter.options.length);
        } else {
            console.error('找不到 categoryFilter 元素');
        }
        
        // 更新品牌選項  
        const brandFilter = document.getElementById('brandFilter');
        if (brandFilter) {
            console.log('找到品牌篩選元素，正在更新...');
            let brandHTML = '<option value="">全部品牌</option>';
            brands.forEach(brand => {
                brandHTML += `<option value="${brand}">${brand}</option>`;
            });
            brandFilter.innerHTML = brandHTML;
            console.log('品牌選項已更新，選項數量:', brandFilter.options.length);
        } else {
            console.error('找不到 brandFilter 元素');
        }
    }

    filterProducts() {
        const categoryFilter = document.getElementById('categoryFilter').value;
        const brandFilter = document.getElementById('brandFilter').value;
        const searchFilter = document.getElementById('searchFilter').value.toLowerCase();
        
        this.filteredProducts = this.products.filter(product => {
            const categoryMatch = !categoryFilter || product.category === categoryFilter;
            const brandMatch = !brandFilter || product.brand === brandFilter;
            const searchMatch = !searchFilter || 
                product.name.toLowerCase().includes(searchFilter) ||
                product.description?.toLowerCase().includes(searchFilter) ||
                product.brand.toLowerCase().includes(searchFilter);
                
            return categoryMatch && brandMatch && searchMatch;
        });
        
        this.displayProducts();
    }

    displayProducts() {
        const productsTableBody = document.getElementById('productsTableBody');
        
        // 根據當前狀態標籤過濾商品
        const currentStatusTab = this.currentProductStatusTab || 'active';
        const statusFilteredProducts = this.filteredProducts.filter(product => 
            product.status === currentStatusTab
        );
        
        if (statusFilteredProducts.length === 0) {
            productsTableBody.innerHTML = `
                <div class="no-products">
                    <div style="font-size: 4rem; margin-bottom: 20px;">📦</div>
                    <h3>尚無${currentStatusTab === 'active' ? '上架' : '下架'}商品</h3>
                    <p>點擊「發布商品」按鈕來新增商品</p>
                </div>
            `;
            return;
        }

        // 分頁邏輯
        const itemsPerPage = 10;
        const currentPage = this.currentProductPage || 1;
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const paginatedProducts = statusFilteredProducts.slice(startIndex, endIndex);
        const totalPages = Math.ceil(statusFilteredProducts.length / itemsPerPage);

        // 生成表格行
        const productRowsHTML = paginatedProducts.map(product => this.createProductRowHTML(product)).join('');
        
        productsTableBody.innerHTML = `
            <table class="products-table" style="width: 100%; border-collapse: collapse; table-layout: fixed;">
                <tbody>
                    ${productRowsHTML}
                </tbody>
            </table>
        `;

        // 更新分頁控制
        this.updateProductPagination(currentPage, totalPages);
        
        // 更新批量操作按鈕文字
        this.updateBatchOperationButtons(currentStatusTab);
    }

    setProductStatusTabActive(status) {
        // 重設所有分頁按鈕
        document.querySelectorAll('.product-status-tab').forEach(tab => {
            tab.classList.remove('active');
            tab.style.color = '#6c757d';
            tab.style.borderBottom = '3px solid transparent';
            tab.style.background = 'none';
        });
        
        // 設定活躍分頁
        const activeTab = document.querySelector(`[onclick="switchProductStatusTab('${status}')"]`);
        if (activeTab) {
            activeTab.classList.add('active');
            activeTab.style.color = '#2c3e50';
            activeTab.style.borderBottom = '3px solid #007bff';
            activeTab.style.background = 'rgba(0, 123, 255, 0.05)';
        }
    }

    createProductCardHTML(product) {
        const bgColor = product.bgColor || 'linear-gradient(135deg, #667eea, #764ba2)';
        const status = product.status || 'active';
        const statusInfo = this.getProductStatusInfo(status);
        
        return `
            <div class="product-card" style="${status === 'inactive' ? 'opacity: 0.7; border: 2px solid #dc3545;' : ''}">
                <div class="product-card-header">
                    <div>
                        <div class="product-name" style="${status === 'inactive' ? 'color: #6c757d;' : ''}">${product.name}</div>
                        <div class="product-meta">
                            <span class="product-meta-item">分類: ${product.category}</span>
                            <span class="product-meta-item">品牌: ${product.brand}</span>
                            <span class="product-meta-item">ID: ${product.id}</span>
                            <span class="product-meta-item" style="background: ${statusInfo.bgColor}; color: ${statusInfo.textColor};">
                                ${statusInfo.icon} ${statusInfo.text}
                            </span>
                        </div>
                    </div>
                    <div style="text-align: right;">
                        <div class="product-price" style="${status === 'inactive' ? 'color: #6c757d;' : ''}">NT$ ${product.price?.toLocaleString() || '0'}</div>
                        <div class="product-actions" style="margin-top: 10px;">
                            <button class="edit-product-btn" onclick="editProduct(${product.id})">
                                ✏️ 編輯
                            </button>
                            <button class="${status === 'active' ? 'toggle-status-btn-inactive' : 'toggle-status-btn-active'}" onclick="toggleProductStatus(${product.id})" style="padding: 8px 16px; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 12px; transition: all 0.2s; margin-left: 5px; ${status === 'active' ? 'background: #ffc107; color: #212529;' : 'background: #28a745; color: white;'}">
                                ${status === 'active' ? '📤 下架' : '📥 上架'}
                            </button>
                            <button class="delete-product-btn" onclick="deleteProduct(${product.id})" style="margin-left: 5px;">
                                🗑️ 刪除
                            </button>
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 15px;">
                    <p style="color: #6c757d; line-height: 1.5; margin-bottom: 10px;">
                        ${product.description || '無商品描述'}
                    </p>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        ${product.emoji ? `<div style="font-size: 2rem;">${product.emoji}</div>` : '<div></div>'}
                        ${product.images?.cover ? `<img src="${product.images.cover}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px; border: 1px solid #ddd;" onerror="this.src='./images/placeholder.svg'">` : ''}
                    </div>
                </div>
            </div>
        `;
    }

    createProductRowHTML(product) {
        const status = product.status || 'active';
        const coverImage = product.images?.cover || product.image || './images/placeholder.svg';
        
        return `
            <tr class="product-row" data-product-id="${product.id}">
                <td style="padding: 12px 15px; border-right: 1px solid #dee2e6; width: 60px;">
                    <input type="checkbox" class="product-checkbox" value="${product.id}" onchange="updateBatchOperationButtons()">
                </td>
                <td style="padding: 12px 15px; border-right: 1px solid #dee2e6; width: 40%;">
                    <div class="product-info">
                        <img src="${coverImage}" alt="${product.name}" class="product-image" onerror="this.src='./images/placeholder.svg'">
                        <div class="product-details">
                            <h6>${product.name}</h6>
                            <p>${product.brand} | 支持配送: ${product.shippingSupport ? '是' : '否'}</p>
                        </div>
                    </div>
                </td>
                <td style="padding: 12px 15px; border-right: 1px solid #dee2e6; text-align: center; width: 100px;">
                    <span class="category-badge">${product.category}</span>
                </td>
                <td style="padding: 12px 15px; border-right: 1px solid #dee2e6; text-align: center; width: 120px;">
                    <span class="product-price">NT$${product.price?.toLocaleString() || '0'}</span>
                    <br><small style="color: #6c757d; text-decoration: line-through;">NT$${((product.price || 0) * 1.2).toLocaleString()}</small>
                </td>
                <td style="padding: 12px 15px; border-right: 1px solid #dee2e6; text-align: center; width: 80px;">
                    <div class="stock-info">${product.stock || 666}</div>
                </td>
                <td style="padding: 12px 15px; border-right: 1px solid #dee2e6; text-align: center; width: 80px;">
                    <div class="sales-info">${product.totalSales || 666}</div>
                </td>
                <td style="padding: 12px 15px; text-align: center; width: 100px;">
                    <div class="action-buttons">
                        <button class="action-btn edit" onclick="editProduct(${product.id})" title="修改">修改</button>
                    </div>
                </td>
            </tr>
        `;
    }

    updateProductPagination(currentPage, totalPages) {
        const pageInfo = document.getElementById('pageInfo');
        const prevPageBtn = document.getElementById('prevPageBtn');
        const nextPageBtn = document.getElementById('nextPageBtn');
        
        if (pageInfo) {
            pageInfo.textContent = `${currentPage} / ${totalPages}`;
        }
        
        if (prevPageBtn) {
            prevPageBtn.disabled = currentPage <= 1;
        }
        
        if (nextPageBtn) {
            nextPageBtn.disabled = currentPage >= totalPages;
        }
    }

    updateBatchOperationButtons(currentStatus) {
        const batchStatusBtn = document.getElementById('batchStatusBtn');
        const batchStatusBtnBottom = document.getElementById('batchStatusBtnBottom');
        
        const buttonText = currentStatus === 'active' ? '下架' : '上架';
        
        if (batchStatusBtn) {
            batchStatusBtn.textContent = buttonText;
        }
        if (batchStatusBtnBottom) {
            batchStatusBtnBottom.textContent = buttonText;
        }
    }

    getProductStatusInfo(status) {
        switch(status) {
            case 'active':
                return { text: '上架中', icon: '🟢', bgColor: '#d4edda', textColor: '#155724' };
            case 'inactive':
                return { text: '已下架', icon: '🔴', bgColor: '#f8d7da', textColor: '#721c24' };
            case 'draft':
                return { text: '草稿', icon: '🟡', bgColor: '#fff3cd', textColor: '#856404' };
            default:
                return { text: '未知', icon: '⚪', bgColor: '#e2e3e5', textColor: '#383d41' };
        }
    }

    toggleProductStatus(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        const newStatus = product.status === 'active' ? 'inactive' : 'active';
        const statusText = newStatus === 'active' ? '上架' : '下架';
        
        if (confirm(`確定要將商品「${product.name}」設為${statusText}嗎？`)) {
            product.status = newStatus;
            product.updatedAt = new Date().toISOString();
            
            if (this.saveProducts()) {
                this.loadProducts();
                alert(`商品已${statusText}！`);
                
                // 同時更新前台顯示
                this.syncToFrontend();
            }
        }
    }

    showAddProductModal() {
        console.log('showAddProductModal called');
        
        try {
            this.currentProductId = null;
            document.getElementById('productModalTitle').textContent = '新增商品';
            document.getElementById('productForm').reset();
            
            // 重置圖片相關元素
            const coverImageFile = document.getElementById('productCoverImageFile');
            const coverImagePreview = document.getElementById('coverImagePreview');
            const galleryPreview = document.getElementById('galleryPreview');
            
            if (coverImageFile) coverImageFile.value = '';
            if (coverImagePreview) coverImagePreview.style.display = 'none';
            if (galleryPreview) galleryPreview.innerHTML = '';
            
            // 重置內頁圖片陣列
            this.currentGalleryImages = [];
            
            const modal = document.getElementById('productModal');
            if (modal) {
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
                console.log('Product modal opened successfully');
            } else {
                console.error('找不到 productModal 元素');
                alert('無法開啟商品新增視窗，請刷新頁面後重試！');
            }
        } catch (error) {
            console.error('開啟商品新增視窗時發生錯誤:', error);
            alert('開啟商品新增視窗時發生錯誤: ' + error.message);
        }
    }

    editProduct(productId) {
        this.currentProductId = productId;
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        document.getElementById('productModalTitle').textContent = '編輯商品';
        
        // 填入表單數據
        document.getElementById('productName').value = product.name || '';
        document.getElementById('productPrice').value = product.price || '';
        document.getElementById('productCategory').value = product.category || '';
        document.getElementById('productBrand').value = product.brand || '';
        document.getElementById('productEmoji').value = product.emoji || '';
        document.getElementById('productStatus').value = product.status || 'active';
        document.getElementById('productDescription').value = product.description || '';
        
        // 處理規格數據（轉換為純文字格式）
        console.log('=== 編輯商品規格載入調試 ===');
        console.log('商品ID:', productId);
        console.log('商品規格原始數據:', product.specifications);
        console.log('商品規格類型:', typeof product.specifications);
        
        if (product.specifications) {
            const entries = Object.entries(product.specifications);
            console.log('規格條目數量:', entries.length);
            console.log('規格條目:', entries);
            
            const specsLines = entries
                .map(([key, value]) => `${key}: ${value}`)
                .join('\n');
            console.log('轉換後的文字長度:', specsLines.length);
            console.log('轉換後的文字內容:', specsLines);
            
            document.getElementById('productSpecs').value = specsLines;
        } else {
            console.log('商品沒有規格數據');
            document.getElementById('productSpecs').value = '';
        }
        
        // 處理封面圖片
        if (product.images?.cover || product.image) {
            const coverImage = product.images?.cover || product.image;
            document.getElementById('productCoverImage').value = coverImage;
            if (coverImage !== './images/placeholder.svg') {
                document.getElementById('coverImagePreview').style.display = 'block';
                document.getElementById('coverPreviewImg').src = coverImage;
            }
        }
        
        // 處理內頁圖片
        if (product.images?.gallery && product.images.gallery.length > 0) {
            this.displayGalleryPreview(product.images.gallery);
        }
        
        document.getElementById('productModal').style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    deleteProduct(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        if (confirm(`確定要刪除商品「${product.name}」嗎？\n此操作無法復原！`)) {
            this.products = this.products.filter(p => p.id !== productId);
            if (this.saveProducts()) {
                this.loadProducts();
                alert('商品已刪除！');
            }
        }
    }

    handleProductSubmit() {
        const formData = new FormData(document.getElementById('productForm'));
        
        // 驗證必填欄位
        const name = formData.get('productName')?.trim();
        const price = parseInt(formData.get('productPrice'));
        const category = formData.get('productCategory');
        const brand = formData.get('productBrand')?.trim();
        
        if (!name || !price || !category || !brand) {
            alert('請填寫所有必填欄位！');
            return;
        }

        // 處理規格數據（純文字格式）
        let specifications = {};
        const specsText = formData.get('productSpecs')?.trim();
        
        console.log('=== 規格處理調試 ===');
        console.log('原始規格文字長度:', specsText ? specsText.length : 0);
        console.log('原始規格文字內容:', specsText);
        
        if (specsText) {
            // 將純文字規格轉換為物件
            const lines = specsText.split(/\r?\n/).filter(line => line.trim()); // 支援不同換行符並過濾空行
            console.log('分割後的行數:', lines.length);
            console.log('分割後的行內容:', lines);
            
            // 清空規格物件，重新處理所有行
            specifications = {};
            
            lines.forEach((line, index) => {
                const trimmedLine = line.trim();
                if (!trimmedLine) return; // 跳過空行
                
                const colonIndex = trimmedLine.indexOf(':');
                if (colonIndex > 0) {
                    const key = trimmedLine.substring(0, colonIndex).trim();
                    const value = trimmedLine.substring(colonIndex + 1).trim();
                    if (key && value) {
                        specifications[key] = value;
                        console.log(`✅ 規格 ${index + 1}: "${key}" => "${value}"`);
                    } else {
                        console.warn(`⚠️ 規格 ${index + 1} 格式錯誤 (空key或value): "${trimmedLine}"`);
                    }
                } else {
                    console.warn(`⚠️ 規格 ${index + 1} 沒有冒號分隔符: "${trimmedLine}"`);
                }
            });
        }
        
        console.log('最終規格物件:', specifications);
        console.log('規格項目數量:', Object.keys(specifications).length);

        // 處理圖片數據
        const coverImage = formData.get('productCoverImage')?.trim() || './images/placeholder.svg';
        const galleryImages = this.currentGalleryImages || [];

        // 建立或更新商品數據
        const productData = {
            id: this.currentProductId || this.getNextProductId(),
            name: name,
            price: price,
            category: category,
            brand: brand,
            emoji: formData.get('productEmoji')?.trim() || '📦',
            status: formData.get('productStatus') || 'active',
            description: formData.get('productDescription')?.trim() || '',
            specifications: Object.keys(specifications).length > 0 ? specifications : undefined,
            images: {
                cover: coverImage,
                gallery: galleryImages
            },
            bgColor: this.getBrandColor(brand),
            createdAt: this.currentProductId ? undefined : new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        if (this.currentProductId) {
            // 編輯現有商品
            const index = this.products.findIndex(p => p.id === this.currentProductId);
            if (index !== -1) {
                this.products[index] = productData;
            }
        } else {
            // 新增商品
            this.products.push(productData);
        }

        // 保存並更新界面
        if (this.saveProducts()) {
            this.closeProductModal();
            this.loadProducts();
            this.syncToFrontend();
            alert(this.currentProductId ? '商品已更新！' : '商品已新增！');
        }
    }

    // 同步到前台
    syncToFrontend() {
        // 將後台的商品數據同步到前台格式
        const activeProducts = this.products
            .filter(product => product.status === 'active')
            .map(product => ({
                ...product,
                image: product.images?.cover || product.image || './images/placeholder.svg'
            }));
        
        // 更新前台的 products 變數
        if (typeof window.products !== 'undefined') {
            window.products = activeProducts;
            
            // 觸發前台重新渲染（如果有相關函數）
            if (typeof window.renderProducts === 'function') {
                window.renderProducts();
            }
        }
        
        console.log(`已同步 ${activeProducts.length} 個上架商品到前台`);
    }

    displayGalleryPreview(galleryImages) {
        const galleryPreview = document.getElementById('galleryPreview');
        if (!galleryPreview) return;
        
        galleryPreview.innerHTML = '';
        galleryImages.forEach((imageUrl, index) => {
            const imageItem = document.createElement('div');
            imageItem.style.cssText = 'position: relative; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;';
            
            imageItem.innerHTML = `
                <img src="${imageUrl}" style="width: 100%; height: 120px; object-fit: cover;" onerror="this.src='./images/placeholder.svg'">
                <button type="button" onclick="removeGalleryImage(${index})" style="position: absolute; top: 5px; right: 5px; background: rgba(220, 53, 69, 0.9); color: white; border: none; border-radius: 50%; width: 24px; height: 24px; cursor: pointer; font-size: 12px;">×</button>
            `;
            
            galleryPreview.appendChild(imageItem);
        });
    }

    removeGalleryImage(index) {
        if (this.currentGalleryImages && this.currentGalleryImages.length > index) {
            this.currentGalleryImages.splice(index, 1);
            this.displayGalleryPreview(this.currentGalleryImages);
        }
    }

    getNextProductId() {
        const existingIds = this.products.map(p => p.id).filter(id => typeof id === 'number');
        return existingIds.length > 0 ? Math.max(...existingIds) + 1 : 1;
    }

    getBrandColor(brand) {
        const brandColors = {
            'Intel': 'linear-gradient(135deg, #0071c5, #0044aa)',
            'AMD': 'linear-gradient(135deg, #ed1c24, #b91c1c)',
            'NVIDIA': 'linear-gradient(135deg, #00d4aa, #007bff)',
            'ASUS': 'linear-gradient(135deg, #00d4aa, #007bff)',
            'MSI': 'linear-gradient(135deg, #ff6b35, #f7931e)',
            'Gigabyte': 'linear-gradient(135deg, #00d4aa, #007bff)',
            'Corsair': 'linear-gradient(135deg, #ffd700, #ffb347)',
            'Samsung': 'linear-gradient(135deg, #1f8ef1, #1565c0)',
            'PowerColor': 'linear-gradient(135deg, #ed1c24, #b91c1c)',
            'G.Skill': 'linear-gradient(135deg, #ff6b35, #f7931e)',
            'Kingston': 'linear-gradient(135deg, #000000, #333333)',
            'WD': 'linear-gradient(135deg, #000000, #333333)',
            'Seagate': 'linear-gradient(135deg, #4fc3f7, #29b6f6)',
            'Seasonic': 'linear-gradient(135deg, #4fc3f7, #29b6f6)',
            'be quiet!': 'linear-gradient(135deg, #424242, #212121)',
            'NZXT': 'linear-gradient(135deg, #667eea, #764ba2)',
            'Fractal Design': 'linear-gradient(135deg, #667eea, #764ba2)',
            'Cooler Master': 'linear-gradient(135deg, #667eea, #764ba2)',
            'Noctua': 'linear-gradient(135deg, #8d6e63, #6d4c41)',
            'Arctic': 'linear-gradient(135deg, #4fc3f7, #29b6f6)',
            'Thermal Grizzly': 'linear-gradient(135deg, #ff6b35, #f7931e)',
            'Logitech': 'linear-gradient(135deg, #00d4ff, #0099cc)',
            'Razer': 'linear-gradient(135deg, #00ff88, #00cc66)',
            'SteelSeries': 'linear-gradient(135deg, #ff6b35, #f7931e)'
        };
        return brandColors[brand] || 'linear-gradient(135deg, #667eea, #764ba2)';
    }

    closeProductModal() {
        // 檢查是否有未保存的變更
        if (this.hasUnsavedChanges()) {
            if (!confirm('您有未保存的變更，確定要關閉嗎？')) {
                return;
            }
        }
        
        document.getElementById('productModal').style.display = 'none';
        document.body.style.overflow = 'auto';
        this.currentProductId = null;
        this.resetFormChangeTracking();
    }

    hasUnsavedChanges() {
        try {
            const form = document.getElementById('productForm');
            if (!form) return false;
            
            const formData = new FormData(form);
            
            // 檢查是否有任何欄位有內容
            for (let [key, value] of formData.entries()) {
                if (value && value.toString().trim() !== '') {
                    return true;
                }
            }
            
            // 檢查檔案上傳
            const coverFileInput = document.getElementById('productCoverImageFile');
            if (coverFileInput && coverFileInput.files.length > 0) {
                return true;
            }
            
            const galleryFileInput = document.getElementById('productGalleryFiles');
            if (galleryFileInput && galleryFileInput.files.length > 0) {
                return true;
            }
            
            // 檢查是否有內頁圖片陣列
            if (this.currentGalleryImages && this.currentGalleryImages.length > 0) {
                return true;
            }
            
            return false;
        } catch (error) {
            console.error('檢查未保存變更時發生錯誤:', error);
            return false;
        }
    }

    resetFormChangeTracking() {
        // 重置表單變更追蹤
        const form = document.getElementById('productForm');
        form.reset();
        
        // 重置圖片預覽
        document.getElementById('coverImagePreview').style.display = 'none';
        document.getElementById('galleryPreview').innerHTML = '';
        
        // 重置目前的內頁圖片陣列
        this.currentGalleryImages = [];
    }

    switchTab(tabName) {
        console.log('switchTab called with:', tabName);
        this.currentTab = tabName;
        
        // 更新按鈕狀態
        document.querySelectorAll('.nav-tab-btn').forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.querySelector(`[onclick="switchTab('${tabName}')"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
            console.log('Button updated for:', tabName);
        }
        
        // 更新分頁內容
        document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
        const activeTab = document.getElementById(`${tabName}-tab`);
        if (activeTab) {
            activeTab.classList.add('active');
            console.log('Tab content updated for:', tabName);
        }
        
        // 載入對應數據
        if (tabName === 'orders') {
            this.loadOrders();
        } else if (tabName === 'products') {
            console.log('切換到商品管理分頁，延遲載入商品...');
            // 延遲載入，確保DOM元素完全渲染
            setTimeout(() => {
                this.loadProducts();
            }, 100);
        }
    }

    // 初始化商品數據庫（從現有的products陣列遷移）
    initializeProductsDatabase() {
        const existingProducts = localStorage.getItem('productsDatabase');
        if (existingProducts) {
            try {
                const parsed = JSON.parse(existingProducts);
                if (parsed && parsed.length > 0) {
                    console.log('商品數據庫已存在，商品數量:', parsed.length);
                    return;
                }
            } catch (e) {
                console.error('解析現有商品數據庫失敗:', e);
            }
        }
        
        console.log('商品數據庫不存在或為空，開始初始化...');

        // 從前台 script.js 載入現有商品數據並遷移
        console.log('初始化商品數據庫...');
        
        // 檢查 window.products 是否存在（前台已載入）
        console.log('檢查 window.products 可用性...');
        console.log('window.products 類型:', typeof window.products);
        console.log('window.products 長度:', window.products ? window.products.length : '未定義');
        
        if (typeof window.products !== 'undefined' && window.products && window.products.length > 0) {
            console.log('從 window.products 遷移商品，數量:', window.products.length);
            // 遷移現有商品數據，加入管理狀態
            const migratedProducts = window.products.map(product => ({
                ...product,
                status: 'active', // 預設為上架狀態
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                stock: product.stock || 666, // 預設庫存
                totalSales: product.totalSales || 666, // 預設銷量
                shippingSupport: true, // 預設支援配送
                shippingFee: 0, // 預設免運費
                images: {
                    cover: product.image || './images/placeholder.svg', // 封面圖片
                    gallery: [] // 內頁圖片陣列
                },
                // 移除舊的 image 欄位
                image: undefined
            }));
            
            localStorage.setItem('productsDatabase', JSON.stringify(migratedProducts));
            console.log(`商品數據庫初始化完成，遷移了 ${migratedProducts.length} 個商品`);
        } else {
            // 嘗試從前台的 localStorage 載入商品資料
            console.log('嘗試從 localStorage 載入前台商品資料...');
            
            let frontendProducts = [];
            
            // 檢查是否有前台保存的商品資料
            const frontendData = localStorage.getItem('productsDatabase') || localStorage.getItem('products');
            if (frontendData) {
                try {
                    frontendProducts = JSON.parse(frontendData);
                    console.log('從 localStorage 載入商品，數量:', frontendProducts.length);
                } catch (e) {
                    console.error('解析商品資料失敗:', e);
                }
            }
            
            // 如果還是沒有資料，從前台script.js中的products常數載入
            if (frontendProducts.length === 0 && typeof window.products !== 'undefined' && window.products.length > 0) {
                console.log('從前台腳本獲取商品，數量:', window.products.length);
                frontendProducts = window.products;
            }
            
            if (frontendProducts.length > 0) {
                // 遷移現有資料
                const migratedProducts = frontendProducts.map(product => ({
                    ...product,
                    status: product.status || 'active',
                    createdAt: product.createdAt || new Date().toISOString(),
                    updatedAt: product.updatedAt || new Date().toISOString(),
                    stock: product.stock || 666,
                    totalSales: product.totalSales || 666,
                    shippingSupport: product.shippingSupport !== false,
                    shippingFee: product.shippingFee || 0,
                    images: product.images || {
                        cover: product.image || './images/placeholder.svg',
                        gallery: []
                    }
                }));
                
                localStorage.setItem('productsDatabase', JSON.stringify(migratedProducts));
                console.log(`從現有資料初始化商品數據庫，載入了 ${migratedProducts.length} 個商品`);
            }
        }
    }
}

// 全域函數
function openSettings() {
    document.getElementById('settingsModal').style.display = 'block';
    
    // 載入現有帳號資訊
    const credentials = JSON.parse(localStorage.getItem('adminCredentials'));
    document.getElementById('newUsername').value = credentials.username;
}

function closeSettings() {
    document.getElementById('settingsModal').style.display = 'none';
    document.getElementById('settingsForm').reset();
}

function logout() {
    adminSystem.logout();
}

function loadOrders() {
    console.log('手動重新載入訂單...');
    adminSystem.loadOrders();
}

// 手動檢查 localStorage 的訂單
function debugOrders() {
    console.log('=== 手動檢查訂單 ===');
    const keys = Object.keys(localStorage);
    console.log('localStorage 所有鍵:', keys);
    
    const orderKeys = keys.filter(k => k.startsWith('order_'));
    console.log('訂單鍵:', orderKeys);
    
    orderKeys.forEach(key => {
        const data = localStorage.getItem(key);
        console.log(`${key}:`, data);
        try {
            const parsed = JSON.parse(data);
            console.log(`${key} 解析後:`, parsed);
        } catch (e) {
            console.error(`${key} 解析失敗:`, e);
        }
    });
}

// 後台頁面自動檢查訂單（每5秒檢查一次）
if (window.isAdminPage) {
    setInterval(() => {
        const keys = Object.keys(localStorage);
        const orderKeys = keys.filter(k => k.startsWith('order_'));
        
        if (orderKeys.length > 0) {
            console.log(`檢測到 ${orderKeys.length} 個訂單，自動重新載入...`);
            if (adminSystem && adminSystem.currentTab === 'orders') {
                adminSystem.loadOrders();
            }
        }
    }, 5000);
}

function showOrders(type) {
    adminSystem.showOrdersByType(type);
}

function changePage(page) {
    adminSystem.changePage(page);
}

function showOrderDetail(orderId) {
    adminSystem.showOrderDetail(orderId);
}

// 商品管理全域函數
function switchTab(tabName) {
    adminSystem.switchTab(tabName);
}

function loadProducts() {
    adminSystem.loadProducts();
}

function showProducts(type) {
    // 這裡可以實現不同類型的商品顯示邏輯
    adminSystem.loadProducts();
}

function filterProducts() {
    adminSystem.filterProducts();
}

function showAddProductModal() {
    adminSystem.showAddProductModal();
}

function editProduct(productId) {
    adminSystem.editProduct(productId);
}

function deleteProduct(productId) {
    adminSystem.deleteProduct(productId);
}

function closeProductModal() {
    adminSystem.closeProductModal();
}

function toggleProductStatus(productId) {
    adminSystem.toggleProductStatus(productId);
}

function removeGalleryImage(index) {
    adminSystem.removeGalleryImage(index);
}

// 初始化系統
const adminSystem = new AdminSystem();

// 點擊modal外部關閉
document.getElementById('settingsModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeSettings();
    }
});

// 商品modal不允許點擊外部關閉，只能通過按鈕關閉
// 此行為已移除以防止意外關閉

// 封面圖片處理函數
function handleCoverImageUpload(input) {
    const file = input.files[0];
    if (!file) return;
    
    // 檢查檔案類型
    if (!file.type.startsWith('image/')) {
        alert('請選擇圖片檔案！');
        input.value = '';
        return;
    }
    
    processImageFile(file, function(dataUrl) {
        // 更新封面圖片網址欄位
        document.getElementById('productCoverImage').value = dataUrl;
        
        // 顯示封面預覽
        const preview = document.getElementById('coverImagePreview');
        const previewImg = document.getElementById('coverPreviewImg');
        previewImg.src = dataUrl;
        preview.style.display = 'block';
        
        console.log('封面圖片已處理');
    });
}

// 內頁圖片處理函數
function handleGalleryImagesUpload(input) {
    const files = Array.from(input.files);
    if (files.length === 0) return;
    
    // 初始化內頁圖片陣列
    if (!adminSystem.currentGalleryImages) {
        adminSystem.currentGalleryImages = [];
    }
    
    let processedCount = 0;
    const totalFiles = files.length;
    
    files.forEach(file => {
        if (!file.type.startsWith('image/')) {
            alert(`檔案 ${file.name} 不是圖片檔案，已跳過`);
            processedCount++;
            if (processedCount === totalFiles) {
                input.value = ''; // 清除檔案選擇
            }
            return;
        }
        
        processImageFile(file, function(dataUrl) {
            adminSystem.currentGalleryImages.push(dataUrl);
            processedCount++;
            
            if (processedCount === totalFiles) {
                // 所有圖片處理完成，更新預覽
                adminSystem.displayGalleryPreview(adminSystem.currentGalleryImages);
                input.value = ''; // 清除檔案選擇
                console.log(`${adminSystem.currentGalleryImages.length} 張內頁圖片已處理`);
            }
        });
    });
}

// 圖片處理核心函數
function processImageFile(file, callback) {
    // 創建canvas進行圖片處理
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = function() {
        // 設定目標尺寸
        const targetWidth = 800;
        const targetHeight = 600;
        
        // 計算縮放比例，保持比例
        const scale = Math.min(targetWidth / img.width, targetHeight / img.height);
        const newWidth = Math.round(img.width * scale);
        const newHeight = Math.round(img.height * scale);
        
        // 設定canvas尺寸
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        
        // 填充白色背景
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, targetWidth, targetHeight);
        
        // 居中繪製圖片
        const x = (targetWidth - newWidth) / 2;
        const y = (targetHeight - newHeight) / 2;
        ctx.drawImage(img, x, y, newWidth, newHeight);
        
        // 轉換為WEBP格式並回傳
        canvas.toBlob(function(blob) {
            const reader = new FileReader();
            reader.onload = function(e) {
                callback(e.target.result);
            };
            reader.readAsDataURL(blob);
        }, 'image/webp', 0.85); // 85% 品質的WEBP
    };
    
    img.onerror = function() {
        alert(`圖片 ${file.name} 載入失敗，請選擇其他圖片！`);
    };
    
    // 讀取檔案
    const reader = new FileReader();
    reader.onload = function(e) {
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

// 新的商品管理功能函數

// 切換商品狀態分頁
function switchProductStatusTab(status) {
    // 更新分頁按鈕樣式
    document.querySelectorAll('.product-status-tab').forEach(tab => {
        tab.classList.remove('active');
        tab.style.color = '#6c757d';
        tab.style.borderBottom = '3px solid transparent';
        tab.style.background = 'none';
    });
    
    const activeTab = document.querySelector(`[onclick="switchProductStatusTab('${status}')"]`);
    if (activeTab) {
        activeTab.classList.add('active');
        activeTab.style.color = '#2c3e50';
        activeTab.style.borderBottom = '3px solid #007bff';
        activeTab.style.background = 'rgba(0, 123, 255, 0.05)';
    }
    
    // 更新當前狀態並重新顯示商品
    adminSystem.currentProductStatusTab = status;
    adminSystem.currentProductPage = 1; // 重設為第一頁
    adminSystem.displayProducts();
    
    // 清除所有選擇框
    const selectAllProducts = document.getElementById('selectAllProducts');
    if (selectAllProducts) {
        selectAllProducts.checked = false;
    }
    document.querySelectorAll('.product-checkbox').forEach(cb => cb.checked = false);
    
    // 更新批量操作按鈕
    if (typeof updateBatchOperationButtons === 'function') {
        updateBatchOperationButtons();
    }
}

// 切換全選
function toggleSelectAll() {
    const selectAllCheckbox = document.getElementById('selectAllProducts');
    const productCheckboxes = document.querySelectorAll('.product-checkbox');
    
    productCheckboxes.forEach(checkbox => {
        checkbox.checked = selectAllCheckbox.checked;
    });
    
    updateBatchOperationButtons();
}

// 全選當前頁面商品
function selectAllProductsInView() {
    const productCheckboxes = document.querySelectorAll('.product-checkbox');
    const allChecked = Array.from(productCheckboxes).every(cb => cb.checked);
    
    productCheckboxes.forEach(checkbox => {
        checkbox.checked = !allChecked;
    });
    
    document.getElementById('selectAllProducts').checked = !allChecked;
    updateBatchOperationButtons();
}

// 更新批量操作按鈕狀態
function updateBatchOperationButtons() {
    const checkedBoxes = document.querySelectorAll('.product-checkbox:checked');
    const hasSelection = checkedBoxes.length > 0;
    
    // 批量操作按鈕啟用/禁用
    const batchButtons = document.querySelectorAll('.batch-operations-top button, .batch-operations-bottom button');
    batchButtons.forEach(btn => {
        if (btn.textContent.includes('全選')) return; // 跳過全選按鈕
        btn.disabled = !hasSelection;
        btn.style.opacity = hasSelection ? '1' : '0.5';
    });
}

// 批量切換商品狀態
function batchToggleStatus() {
    const checkedBoxes = document.querySelectorAll('.product-checkbox:checked');
    if (checkedBoxes.length === 0) {
        alert('請先選擇要操作的商品！');
        return;
    }
    
    const productIds = Array.from(checkedBoxes).map(cb => parseInt(cb.value));
    const currentStatus = adminSystem.currentProductStatusTab;
    const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
    const actionText = newStatus === 'active' ? '上架' : '下架';
    
    if (confirm(`確定要將選中的 ${productIds.length} 個商品設為${actionText}嗎？`)) {
        let successCount = 0;
        
        productIds.forEach(productId => {
            const product = adminSystem.products.find(p => p.id === productId);
            if (product) {
                product.status = newStatus;
                product.updatedAt = new Date().toISOString();
                successCount++;
            }
        });
        
        if (adminSystem.saveProducts()) {
            adminSystem.loadProducts();
            alert(`已成功${actionText} ${successCount} 個商品！`);
            
            // 同步到前台
            adminSystem.syncToFrontend();
        }
        
        // 清除選擇
        document.getElementById('selectAllProducts').checked = false;
    }
}

// 批量刪除商品
function batchDeleteProducts() {
    const checkedBoxes = document.querySelectorAll('.product-checkbox:checked');
    if (checkedBoxes.length === 0) {
        alert('請先選擇要刪除的商品！');
        return;
    }
    
    const productIds = Array.from(checkedBoxes).map(cb => parseInt(cb.value));
    
    if (confirm(`確定要刪除選中的 ${productIds.length} 個商品嗎？\n此操作無法復原！`)) {
        adminSystem.products = adminSystem.products.filter(product => 
            !productIds.includes(product.id)
        );
        
        if (adminSystem.saveProducts()) {
            adminSystem.loadProducts();
            alert(`已成功刪除 ${productIds.length} 個商品！`);
        }
        
        // 清除選擇
        document.getElementById('selectAllProducts').checked = false;
    }
}

// 顯示批量設定運費彈窗
function showBatchShippingModal() {
    const checkedBoxes = document.querySelectorAll('.product-checkbox:checked');
    if (checkedBoxes.length === 0) {
        alert('請先選擇要設定運費的商品！');
        return;
    }
    
    const shippingFee = prompt('請輸入運費金額（元）：', '0');
    if (shippingFee === null) return;
    
    const fee = parseFloat(shippingFee);
    if (isNaN(fee) || fee < 0) {
        alert('請輸入有效的運費金額！');
        return;
    }
    
    const productIds = Array.from(checkedBoxes).map(cb => parseInt(cb.value));
    let successCount = 0;
    
    productIds.forEach(productId => {
        const product = adminSystem.products.find(p => p.id === productId);
        if (product) {
            product.shippingFee = fee;
            product.shippingSupport = fee >= 0;
            product.updatedAt = new Date().toISOString();
            successCount++;
        }
    });
    
    if (adminSystem.saveProducts()) {
        adminSystem.loadProducts();
        alert(`已成功為 ${successCount} 個商品設定運費：NT$ ${fee.toLocaleString()}`);
    }
    
    // 清除選擇
    document.getElementById('selectAllProducts').checked = false;
}

// 分頁導航
function goToPage(direction) {
    const currentPage = adminSystem.currentProductPage || 1;
    
    if (direction === 'prev' && currentPage > 1) {
        adminSystem.currentProductPage = currentPage - 1;
    } else if (direction === 'next') {
        const currentStatusTab = adminSystem.currentProductStatusTab || 'active';
        const statusFilteredProducts = adminSystem.filteredProducts.filter(product => 
            product.status === currentStatusTab
        );
        const totalPages = Math.ceil(statusFilteredProducts.length / 10);
        
        if (currentPage < totalPages) {
            adminSystem.currentProductPage = currentPage + 1;
        }
    }
    
    adminSystem.displayProducts();
}

// 跳轉到指定頁面
function jumpToPage() {
    const jumpInput = document.getElementById('jumpToPage');
    const targetPage = parseInt(jumpInput.value);
    
    if (isNaN(targetPage) || targetPage < 1) {
        alert('請輸入有效的頁碼！');
        return;
    }
    
    const currentStatusTab = adminSystem.currentProductStatusTab || 'active';
    const statusFilteredProducts = adminSystem.filteredProducts.filter(product => 
        product.status === currentStatusTab
    );
    const totalPages = Math.ceil(statusFilteredProducts.length / 10);
    
    if (targetPage > totalPages) {
        alert(`頁碼超出範圍！最大頁數為 ${totalPages}`);
        return;
    }
    
    adminSystem.currentProductPage = targetPage;
    adminSystem.displayProducts();
    
    jumpInput.value = '';
}