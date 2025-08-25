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
        this.init();
    }

    init() {
        // 檢查是否已登入
        this.checkLogin();
        
        // 設定事件監聽器
        this.setupEventListeners();
        
        // 載入預設管理員帳號（如果不存在）
        this.initDefaultAdmin();
        
        // 初始化商品數據庫
        this.initializeProductsDatabase();
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
        this.displayOrders();
        this.updateStats();
    }

    getAllOrders() {
        const orders = [];
        const keys = Object.keys(localStorage);
        
        keys.forEach(key => {
            if (key.startsWith('order_')) {
                try {
                    const order = JSON.parse(localStorage.getItem(key));
                    order.id = key;
                    orders.push(order);
                } catch (e) {
                    console.error('Error parsing order:', key, e);
                }
            }
        });
        
        // 按時間排序（最新的在前）
        return orders.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    }

    displayOrders() {
        // 初始化時不顯示任何訂單，等待用戶點擊統計卡片
        const ordersDisplay = document.getElementById('ordersDisplay');
        if (ordersDisplay) {
            ordersDisplay.innerHTML = `
                <div class="no-selection" style="text-align: center; padding: 60px 20px; color: #6c757d;">
                    <div style="font-size: 4rem; margin-bottom: 20px;">📊</div>
                    <h3>選擇要查看的訂單類型</h3>
                    <p>點擊上方的統計卡片來查看對應的訂單列表</p>
                </div>
            `;
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
        const orderData = JSON.parse(localStorage.getItem(orderId));
        // 確保布林值正確切換
        orderData.processed = orderData.processed === true ? false : true;
        orderData.processedAt = orderData.processed ? new Date().toISOString() : null;
        
        localStorage.setItem(orderId, JSON.stringify(orderData));
        this.loadOrders();
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
        const ordersDisplay = document.getElementById('ordersDisplay');
        
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
        this.filteredProducts = [...this.products];
        this.updateProductStats();
        this.updateProductFilters();
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
        const categories = [...new Set(this.products.map(p => p.category))];
        const brands = [...new Set(this.products.map(p => p.brand))];
        
        document.getElementById('totalProducts').textContent = totalProducts;
        document.getElementById('totalCategories').textContent = categories.length;
        document.getElementById('totalBrands').textContent = brands.length;
    }

    updateProductFilters() {
        const categories = [...new Set(this.products.map(p => p.category))].sort();
        const brands = [...new Set(this.products.map(p => p.brand))].sort();
        
        // 更新分類選項
        const categoryFilter = document.getElementById('categoryFilter');
        categoryFilter.innerHTML = '<option value="">全部分類</option>';
        categories.forEach(category => {
            categoryFilter.innerHTML += `<option value="${category}">${category}</option>`;
        });
        
        // 更新品牌選項
        const brandFilter = document.getElementById('brandFilter');
        brandFilter.innerHTML = '<option value="">全部品牌</option>';
        brands.forEach(brand => {
            brandFilter.innerHTML += `<option value="${brand}">${brand}</option>`;
        });
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
        const productsDisplay = document.getElementById('productsDisplay');
        
        if (this.filteredProducts.length === 0) {
            productsDisplay.innerHTML = `
                <div style="text-align: center; padding: 60px 20px; color: #6c757d;">
                    <div style="font-size: 4rem; margin-bottom: 20px;">📦</div>
                    <h3>暫無商品</h3>
                    <p>點擊上方「新增商品」按鈕來新增第一個商品</p>
                </div>
            `;
            return;
        }

        const productListHTML = this.filteredProducts.map(product => this.createProductCardHTML(product)).join('');
        
        productsDisplay.innerHTML = `
            <div class="products-list">
                ${productListHTML}
            </div>
        `;
    }

    createProductCardHTML(product) {
        const bgColor = product.bgColor || 'linear-gradient(135deg, #667eea, #764ba2)';
        
        return `
            <div class="product-card">
                <div class="product-card-header">
                    <div>
                        <div class="product-name">${product.name}</div>
                        <div class="product-meta">
                            <span class="product-meta-item">分類: ${product.category}</span>
                            <span class="product-meta-item">品牌: ${product.brand}</span>
                            <span class="product-meta-item">ID: ${product.id}</span>
                        </div>
                    </div>
                    <div style="text-align: right;">
                        <div class="product-price">NT$ ${product.price?.toLocaleString() || '0'}</div>
                        <div class="product-actions" style="margin-top: 10px;">
                            <button class="edit-product-btn" onclick="editProduct(${product.id})">
                                ✏️ 編輯
                            </button>
                            <button class="delete-product-btn" onclick="deleteProduct(${product.id})">
                                🗑️ 刪除
                            </button>
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 15px;">
                    <p style="color: #6c757d; line-height: 1.5; margin-bottom: 10px;">
                        ${product.description || '無商品描述'}
                    </p>
                    ${product.emoji ? `<div style="font-size: 2rem; margin-top: 10px;">${product.emoji}</div>` : ''}
                </div>
            </div>
        `;
    }

    showAddProductModal() {
        this.currentProductId = null;
        document.getElementById('productModalTitle').textContent = '新增商品';
        document.getElementById('productForm').reset();
        
        // 重置圖片相關元素
        document.getElementById('productImageFile').value = '';
        document.getElementById('imagePreview').style.display = 'none';
        
        document.getElementById('productModal').style.display = 'flex';
        document.body.style.overflow = 'hidden';
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
        document.getElementById('productImage').value = product.image || '';
        document.getElementById('productDescription').value = product.description || '';
        
        // 處理規格數據（轉換為純文字格式）
        if (product.specifications) {
            const specsLines = Object.entries(product.specifications)
                .map(([key, value]) => `${key}: ${value}`)
                .join('\n');
            document.getElementById('productSpecs').value = specsLines;
        } else {
            document.getElementById('productSpecs').value = '';
        }
        
        // 處理圖片預覽
        if (product.image && product.image !== './images/placeholder.svg') {
            document.getElementById('imagePreview').style.display = 'block';
            document.getElementById('previewImg').src = product.image;
        } else {
            document.getElementById('imagePreview').style.display = 'none';
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
        if (specsText) {
            // 將純文字規格轉換為物件
            const lines = specsText.split('\n');
            lines.forEach(line => {
                const colonIndex = line.indexOf(':');
                if (colonIndex > 0) {
                    const key = line.substring(0, colonIndex).trim();
                    const value = line.substring(colonIndex + 1).trim();
                    if (key && value) {
                        specifications[key] = value;
                    }
                }
            });
        }

        // 建立或更新商品數據
        const productData = {
            id: this.currentProductId || this.getNextProductId(),
            name: name,
            price: price,
            category: category,
            brand: brand,
            emoji: formData.get('productEmoji')?.trim() || '📦',
            image: formData.get('productImage')?.trim() || './images/placeholder.svg',
            description: formData.get('productDescription')?.trim() || '',
            specifications: Object.keys(specifications).length > 0 ? specifications : undefined,
            bgColor: this.getBrandColor(brand)
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
            alert(this.currentProductId ? '商品已更新！' : '商品已新增！');
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
        const form = document.getElementById('productForm');
        const formData = new FormData(form);
        
        // 檢查是否有任何欄位有內容
        for (let [key, value] of formData.entries()) {
            if (value && value.toString().trim() !== '') {
                return true;
            }
        }
        
        // 檢查檔案上傳
        const fileInput = document.getElementById('productImageFile');
        if (fileInput && fileInput.files.length > 0) {
            return true;
        }
        
        return false;
    }

    resetFormChangeTracking() {
        // 重置表單變更追蹤
        const form = document.getElementById('productForm');
        form.reset();
        document.getElementById('imagePreview').style.display = 'none';
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
            console.log('Loading products...');
            this.loadProducts();
        }
    }

    // 初始化商品數據庫（從現有的products陣列遷移）
    initializeProductsDatabase() {
        const existingProducts = localStorage.getItem('productsDatabase');
        if (existingProducts) {
            console.log('商品數據庫已存在，跳過初始化');
            return;
        }

        // 這裡應該包含所有現有的商品數據
        // 從 script.js 中遷移過來
        console.log('初始化商品數據庫...');
        
        // 先設置一個空的數組，稍後會從 script.js 中遷移數據
        localStorage.setItem('productsDatabase', JSON.stringify([]));
        
        console.log('商品數據庫初始化完成');
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
    adminSystem.loadOrders();
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

// 圖片處理函數
function handleImageUpload(input) {
    const file = input.files[0];
    if (!file) return;
    
    // 檢查檔案類型
    if (!file.type.startsWith('image/')) {
        alert('請選擇圖片檔案！');
        input.value = '';
        return;
    }
    
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
        
        // 轉換為WEBP格式並顯示預覽
        canvas.toBlob(function(blob) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const dataUrl = e.target.result;
                
                // 更新圖片網址欄位
                document.getElementById('productImage').value = dataUrl;
                
                // 顯示預覽
                const preview = document.getElementById('imagePreview');
                const previewImg = document.getElementById('previewImg');
                previewImg.src = dataUrl;
                preview.style.display = 'block';
                
                console.log('圖片已處理：', newWidth + 'x' + newHeight, '轉換為WEBP格式');
            };
            reader.readAsDataURL(blob);
        }, 'image/webp', 0.85); // 85% 品質的WEBP
    };
    
    img.onerror = function() {
        alert('圖片載入失敗，請選擇其他圖片！');
        input.value = '';
    };
    
    // 讀取檔案
    const reader = new FileReader();
    reader.onload = function(e) {
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}