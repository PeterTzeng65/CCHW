// 後台管理系統 JavaScript

class AdminSystem {
    constructor() {
        this.currentUser = null;
        this.orders = [];
        this.currentPage = 1;
        this.ordersPerPage = 10;
        this.currentOrderType = null;
        this.init();
    }

    init() {
        // 檢查是否已登入
        this.checkLogin();
        
        // 設定事件監聽器
        this.setupEventListeners();
        
        // 載入預設管理員帳號（如果不存在）
        this.initDefaultAdmin();
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
        this.updateTabCounts();
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

// 初始化系統
const adminSystem = new AdminSystem();

// 點擊modal外部關閉
document.getElementById('settingsModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeSettings();
    }
});