// إدارة اللغة والترجمة
class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'ar';
        this.translations = {
            ar: {
                // الشريط الجانبي
                dashboard: 'الرئيسية',
                fleet: 'إدارة الأسطول',
                customers: 'العملاء',
                finance: 'الإيرادات والمصاريف',
                alerts: 'التنبيهات',
                settings: 'الإعدادات',
                
                // الصفحة الرئيسية
                dashboardTitle: 'لوحة التحكم الرئيسية',
                dashboardSubtitle: 'نظرة عامة على أداء الشركة',
                totalCars: 'إجمالي السيارات',
                rentedCars: 'السيارات المؤجرة',
                activeCustomers: 'العملاء النشطين',
                monthlyRevenue: 'الإيرادات الشهرية',
                recentAlerts: 'التنبيهات الحديثة',
                
                // إدارة الأسطول
                fleetManagement: 'إدارة الأسطول',
                addNewCar: 'إضافة سيارة جديدة',
                plateNumber: 'رقم اللوحة',
                brand: 'الماركة',
                model: 'الموديل',
                year: 'السنة',
                status: 'الحالة',
                dailyPrice: 'السعر اليومي (د.م)',
                actions: 'الإجراءات',
                available: 'متاحة',
                rented: 'مؤجرة',
                maintenance: 'صيانة',
                
                // العملاء
                customersManagement: 'إدارة العملاء',
                addNewCustomer: 'إضافة عميل جديد',
                customerName: 'الاسم',
                phone: 'رقم الهاتف',
                email: 'البريد الإلكتروني',
                idNumber: 'رقم الهوية',
                registrationDate: 'تاريخ التسجيل',
                bookingsCount: 'عدد الحجوزات',
                
                // المالية
                financeManagement: 'الإيرادات والمصاريف',
                addTransaction: 'إضافة معاملة',
                totalIncome: 'إجمالي الإيرادات',
                totalExpenses: 'إجمالي المصاريف',
                netProfit: 'صافي الربح',
                income: 'إيراد',
                expense: 'مصروف',
                
                // كراء السيارات
                rental: 'كراء السيارات',
                rentalManagement: 'إدارة كراء السيارات',
                addNewRental: 'إضافة كراء جديد',
                rentalId: 'رقم الكراء',
                carInfo: 'السيارة',
                startDate: 'تاريخ البداية',
                endDate: 'تاريخ النهاية',
                totalDays: 'عدد الأيام',
                totalAmount: 'المبلغ الإجمالي',
                activeRentals: 'الكراءات النشطة',
                completedRentals: 'الكراءات المكتملة',
                todayRevenue: 'إيرادات اليوم',
                
                // التنبيهات
                alertsNotifications: 'التنبيهات والتذكيرات',
                insuranceAlerts: 'تنبيهات التأمين',
                inspectionAlerts: 'تنبيهات الفحص الفني',
                
                // عام
                search: 'بحث',
                cancel: 'إلغاء',
                save: 'حفظ',
                delete: 'حذف',
                edit: 'تعديل',
                currency: 'د.م',
                days: 'يوم',
                
                // رسائل
                confirmDelete: 'هل أنت متأكد من الحذف؟',
                addedSuccessfully: 'تم الإضافة بنجاح!',
                fillAllFields: 'يرجى ملء جميع الحقول المطلوبة',
                welcome: 'مرحباً، المدير'
            },
            en: {
                // Sidebar
                dashboard: 'Dashboard',
                fleet: 'Fleet Management',
                customers: 'Customers',
                finance: 'Revenue & Expenses',
                alerts: 'Alerts',
                settings: 'Settings',
                
                // Dashboard
                dashboardTitle: 'Main Dashboard',
                dashboardSubtitle: 'Company performance overview',
                totalCars: 'Total Cars',
                rentedCars: 'Rented Cars',
                activeCustomers: 'Active Customers',
                monthlyRevenue: 'Monthly Revenue',
                recentAlerts: 'Recent Alerts',
                
                // Fleet Management
                fleetManagement: 'Fleet Management',
                addNewCar: 'Add New Car',
                plateNumber: 'Plate Number',
                brand: 'Brand',
                model: 'Model',
                year: 'Year',
                status: 'Status',
                dailyPrice: 'Daily Price (MAD)',
                actions: 'Actions',
                available: 'Available',
                rented: 'Rented',
                maintenance: 'Maintenance',
                
                // Customers
                customersManagement: 'Customer Management',
                addNewCustomer: 'Add New Customer',
                customerName: 'Name',
                phone: 'Phone Number',
                email: 'Email',
                idNumber: 'ID Number',
                registrationDate: 'Registration Date',
                bookingsCount: 'Bookings Count',
                
                // Finance
                financeManagement: 'Revenue & Expenses',
                addTransaction: 'Add Transaction',
                totalIncome: 'Total Income',
                totalExpenses: 'Total Expenses',
                netProfit: 'Net Profit',
                income: 'Income',
                expense: 'Expense',
                
                // Car Rental
                rental: 'Car Rental',
                rentalManagement: 'Rental Management',
                addNewRental: 'Add New Rental',
                rentalId: 'Rental ID',
                carInfo: 'Car',
                startDate: 'Start Date',
                endDate: 'End Date',
                totalDays: 'Total Days',
                totalAmount: 'Total Amount',
                activeRentals: 'Active Rentals',
                completedRentals: 'Completed Rentals',
                todayRevenue: 'Today Revenue',
                
                // Alerts
                alertsNotifications: 'Alerts & Notifications',
                insuranceAlerts: 'Insurance Alerts',
                inspectionAlerts: 'Inspection Alerts',
                
                // General
                search: 'Search',
                cancel: 'Cancel',
                save: 'Save',
                delete: 'Delete',
                edit: 'Edit',
                currency: 'MAD',
                days: 'days',
                
                // Messages
                confirmDelete: 'Are you sure you want to delete?',
                addedSuccessfully: 'Added successfully!',
                fillAllFields: 'Please fill all required fields',
                welcome: 'Welcome, Admin'
            }
        };
        this.applyLanguage();
    }

    setLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('language', lang);
        this.applyLanguage();
        
        // تحديث اتجاه الصفحة
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
        
        // تحديث حالة أزرار اللغة
        document.querySelectorAll('.language-switcher .btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.getElementById(`btn-${lang}`).classList.add('active');
        
        // إعادة تحميل البيانات بالترجمة الجديدة
        if (window.navigationManager) {
            navigationManager.updatePageContent(navigationManager.currentPage);
        }
    }

    translate(key) {
        return this.translations[this.currentLanguage][key] || key;
    }

    applyLanguage() {
        // تطبيق الترجمة على العناصر الثابتة
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            element.textContent = this.translate(key);
        });
        
        // تطبيق اتجاه الصفحة
        document.documentElement.dir = this.currentLanguage === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = this.currentLanguage;
    }

    formatCurrency(amount) {
        const currency = this.translate('currency');
        return `${amount.toLocaleString()} ${currency}`;
    }
}

// إدارة البيانات المحلية
class LocalDataManager {
    constructor() {
        this.initializeData();
    }

    // تهيئة البيانات الافتراضية
    initializeData() {
        if (!localStorage.getItem('cars')) {
            const defaultCars = [
                {
                    id: 1,
                    plate: '12345 أ 16',
                    brand: 'toyota',
                    model: 'كامري',
                    year: 2022,
                    price: 300,
                    status: 'available',
                    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5TaWFyYTwvdGV4dD48L3N2Zz4=',
                    insuranceExpiry: '2024-12-31',
                    inspectionExpiry: '2024-11-30'
                },
                {
                    id: 2,
                    plate: '67890 ب 06',
                    brand: 'hyundai',
                    model: 'إلنترا',
                    year: 2021,
                    price: 250,
                    status: 'rented',
                    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5TaWFyYTwvdGV4dD48L3N2Zz4=',
                    insuranceExpiry: '2024-10-15',
                    inspectionExpiry: '2024-12-15'
                },
                {
                    id: 3,
                    plate: '11111 ج 01',
                    brand: 'nissan',
                    model: 'التيما',
                    year: 2023,
                    price: 400,
                    status: 'available',
                    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5TaWFyYTwvdGV4dD48L3N2Zz4=',
                    insuranceExpiry: '2025-03-20',
                    inspectionExpiry: '2025-01-10'
                }
            ];
            localStorage.setItem('cars', JSON.stringify(defaultCars));
        }

        if (!localStorage.getItem('customers')) {
            const defaultCustomers = [
                {
                    id: 1,
                    name: 'أحمد محمد علي',
                    phone: '0661234567',
                    email: 'ahmed@email.com',
                    idNumber: '1234567890',
                    address: 'الرباط، حي أكدال',
                    registrationDate: '2024-01-15',
                    bookingsCount: 5
                },
                {
                    id: 2,
                    name: 'فاطمة سالم',
                    phone: '0679876543',
                    email: 'fatima@email.com',
                    idNumber: '0987654321',
                    address: 'الدار البيضاء، حي المعاريف',
                    registrationDate: '2024-02-20',
                    bookingsCount: 3
                }
            ];
            localStorage.setItem('customers', JSON.stringify(defaultCustomers));
        }

        if (!localStorage.getItem('rentals')) {
            const defaultRentals = [
                {
                    id: 1,
                    customerId: 1,
                    customerName: 'أحمد محمد علي',
                    carId: 1,
                    carInfo: 'تويوتا كامري 2022 - 12345 أ 16',
                    startDate: '2024-08-15',
                    endDate: '2024-08-25',
                    totalDays: 10,
                    dailyPrice: 300,
                    totalAmount: 3000,
                    deposit: 500,
                    paymentMethod: 'cash',
                    status: 'active',
                    notes: 'كراء لمدة 10 أيام',
                    createdDate: '2024-08-15'
                },
                {
                    id: 2,
                    customerId: 2,
                    customerName: 'فاطمة سالم',
                    carId: 3,
                    carInfo: 'نيسان التيما 2023 - 11111 ج 01',
                    startDate: '2024-08-10',
                    endDate: '2024-08-20',
                    totalDays: 10,
                    dailyPrice: 400,
                    totalAmount: 4000,
                    deposit: 600,
                    paymentMethod: 'card',
                    status: 'completed',
                    notes: 'كراء مكتمل بنجاح',
                    createdDate: '2024-08-10'
                }
            ];
            localStorage.setItem('rentals', JSON.stringify(defaultRentals));
        }

        if (!localStorage.getItem('transactions')) {
            const defaultTransactions = [
                {
                    id: 1,
                    type: 'income',
                    amount: 3000,
                    description: 'إيجار سيارة تويوتا كامري - 10 أيام',
                    category: 'rental',
                    date: '2024-08-01'
                },
                {
                    id: 2,
                    type: 'expense',
                    amount: 600,
                    description: 'صيانة دورية لسيارة هيونداي إلنترا',
                    category: 'maintenance',
                    date: '2024-08-05'
                },
                {
                    id: 3,
                    type: 'income',
                    amount: 8000,
                    description: 'إيجار سيارة نيسان التيما - 20 يوم',
                    category: 'rental',
                    date: '2024-08-10'
                }
            ];
            localStorage.setItem('transactions', JSON.stringify(defaultTransactions));
        }
    }

    // الحصول على البيانات
    getCars() {
        return JSON.parse(localStorage.getItem('cars') || '[]');
    }

    getCustomers() {
        return JSON.parse(localStorage.getItem('customers') || '[]');
    }

    getTransactions() {
        return JSON.parse(localStorage.getItem('transactions') || '[]');
    }

    // حفظ البيانات
    saveCars(cars) {
        localStorage.setItem('cars', JSON.stringify(cars));
    }

    saveCustomers(customers) {
        localStorage.setItem('customers', JSON.stringify(customers));
    }

    saveTransactions(transactions) {
        localStorage.setItem('transactions', JSON.stringify(transactions));
    }

    // إضافة عنصر جديد
    addCar(car) {
        const cars = this.getCars();
        car.id = Date.now();
        cars.push(car);
        this.saveCars(cars);
        return car;
    }

    addCustomer(customer) {
        const customers = this.getCustomers();
        customer.id = Date.now();
        customer.registrationDate = new Date().toISOString().split('T')[0];
        customer.bookingsCount = 0;
        customers.push(customer);
        this.saveCustomers(customers);
        return customer;
    }

    addTransaction(transaction) {
        const transactions = this.getTransactions();
        transaction.id = Date.now();
        transactions.push(transaction);
        this.saveTransactions(transactions);
        return transaction;
    }

    // حذف عنصر
    deleteCar(id) {
        const cars = this.getCars().filter(car => car.id !== id);
        this.saveCars(cars);
    }

    deleteCustomer(id) {
        const customers = this.getCustomers().filter(customer => customer.id !== id);
        this.saveCustomers(customers);
    }

    deleteTransaction(id) {
        const transactions = this.getTransactions().filter(transaction => transaction.id !== id);
        this.saveTransactions(transactions);
    }

    // وظائف إدارة الكراء
    getRentals() {
        return JSON.parse(localStorage.getItem('rentals') || '[]');
    }

    saveRentals(rentals) {
        localStorage.setItem('rentals', JSON.stringify(rentals));
    }

    addRental(rental) {
        const rentals = this.getRentals();
        rental.id = Date.now();
        rentals.push(rental);
        this.saveRentals(rentals);
        return rental;
    }

    deleteRental(id) {
        const rentals = this.getRentals().filter(rental => rental.id !== id);
        this.saveRentals(rentals);
    }

    // تحديث عنصر
    updateCar(id, updatedCar) {
        const cars = this.getCars();
        const index = cars.findIndex(car => car.id === id);
        if (index !== -1) {
            cars[index] = { ...cars[index], ...updatedCar };
            this.saveCars(cars);
        }
    }

    updateCustomer(id, updatedCustomer) {
        const customers = this.getCustomers();
        const index = customers.findIndex(customer => customer.id === id);
        if (index !== -1) {
            customers[index] = { ...customers[index], ...updatedCustomer };
            this.saveCustomers(customers);
        }
    }
}

// إنشاء مثيل من مدير البيانات
const dataManager = new LocalDataManager();

// إدارة التنقل
class NavigationManager {
    constructor() {
        this.currentPage = 'dashboard';
        this.initializeNavigation();
    }

    initializeNavigation() {
        // إضافة مستمعي الأحداث لعناصر القائمة
        document.querySelectorAll('.menu-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const page = e.currentTarget.getAttribute('data-page');
                this.navigateToPage(page);
                
                // إغلاق الشريط الجانبي على الهاتف بعد النقر
                if (window.innerWidth <= 768) {
                    this.closeSidebar();
                }
            });
        });

        // إضافة مستمع لزر إخفاء/إظهار الشريط الجانبي
        document.getElementById('sidebar-toggle').addEventListener('click', () => {
            this.toggleSidebar();
        });
        
        // إضافة مستمع لتغيير حجم الشاشة
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                this.closeSidebar();
            }
        });
    }

    navigateToPage(page) {
        // إخفاء جميع الصفحات
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.querySelectorAll('.menu-item').forEach(item => item.classList.remove('active'));

        // إظهار الصفحة المحددة
        document.getElementById(`${page}-page`).classList.add('active');
        document.querySelector(`[data-page="${page}"]`).classList.add('active');

        this.currentPage = page;

        // تحديث محتوى الصفحة
        this.updatePageContent(page);
    }

    updatePageContent(page) {
        switch(page) {
            case 'dashboard':
                dashboardManager.updateDashboard();
                break;
            case 'fleet':
                fleetManager.updateFleetTable();
                break;
            case 'customers':
                customerManager.updateCustomersTable();
                break;
            case 'rental':
                rentalManager.updateRentalPage();
                break;
            case 'finance':
                financeManager.updateFinanceData();
                break;
            case 'alerts':
                alertsManager.updateAlerts();
                break;
        }
    }

    toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        const body = document.body;
        
        sidebar.classList.toggle('show');
        overlay.classList.toggle('show');
        
        // إضافة/إزالة class للجسم لمنع التمرير
        if (window.innerWidth <= 768) {
            if (sidebar.classList.contains('show')) {
                body.classList.add('sidebar-open');
                body.style.overflow = 'hidden';
                body.style.position = 'fixed';
                body.style.width = '100%';
            } else {
                body.classList.remove('sidebar-open');
                body.style.overflow = '';
                body.style.position = '';
                body.style.width = '';
            }
        }
        
        // إضافة مستمع للنقر على overlay لإغلاق الشريط الجانبي
        if (sidebar.classList.contains('show')) {
            const closeHandler = () => {
                this.closeSidebar();
                overlay.removeEventListener('click', closeHandler);
            };
            overlay.addEventListener('click', closeHandler);
        }
    }
    
    closeSidebar() {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        const body = document.body;
        
        sidebar.classList.remove('show');
        overlay.classList.remove('show');
        
        // إزالة منع التمرير
        if (window.innerWidth <= 768) {
            body.classList.remove('sidebar-open');
            body.style.overflow = '';
            body.style.position = '';
            body.style.width = '';
        }
    }
}

// إدارة لوحة التحكم
class DashboardManager {
    updateDashboard() {
        this.updateStats();
        this.updateCharts();
        this.updateRentalStats();
    }

    updateStats() {
        const cars = dataManager.getCars();
        const customers = dataManager.getCustomers();
        const transactions = dataManager.getTransactions();

        // إحصائيات السيارات
        document.getElementById('total-cars').textContent = cars.length;
        document.getElementById('rented-cars').textContent = cars.filter(car => car.status === 'rented').length;
        document.getElementById('active-customers').textContent = customers.length;

        // حساب الإيرادات الشهرية
        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();
        const monthlyRevenue = transactions
            .filter(t => {
                const transactionDate = new Date(t.date);
                return t.type === 'income' && 
                       transactionDate.getMonth() === currentMonth && 
                       transactionDate.getFullYear() === currentYear;
            })
            .reduce((sum, t) => sum + t.amount, 0);

        document.getElementById('monthly-revenue').textContent = languageManager.formatCurrency(monthlyRevenue);
    }

    updateRentalStats() {
        const rentals = dataManager.getRentals();
        
        // تحديث عدد السيارات المؤجرة في الصفحة الرئيسية
        const rentedCars = rentals.filter(r => r.status === 'active').length;
        document.getElementById('rented-cars').textContent = rentedCars;
        
        // تحديث إحصائيات الكراء إذا كانت الصفحة مفتوحة
        if (document.getElementById('active-rentals-count')) {
            const activeRentals = rentals.filter(r => r.status === 'active').length;
            const completedRentals = rentals.filter(r => r.status === 'completed').length;
            
            document.getElementById('active-rentals-count').textContent = activeRentals;
            document.getElementById('completed-rentals-count').textContent = completedRentals;
        }
    }

    updateCharts() {
        this.createRevenueChart();
        this.createFleetChart();
    }

    createRevenueChart() {
        const ctx = document.getElementById('revenueChart').getContext('2d');
        const transactions = dataManager.getTransactions();
        
        // تجميع البيانات حسب الشهر
        const monthlyData = {};
        transactions.forEach(transaction => {
            const date = new Date(transaction.date);
            const monthKey = `${date.getFullYear()}-${date.getMonth() + 1}`;
            
            if (!monthlyData[monthKey]) {
                monthlyData[monthKey] = { income: 0, expenses: 0 };
            }
            
            if (transaction.type === 'income') {
                monthlyData[monthKey].income += transaction.amount;
            } else {
                monthlyData[monthKey].expenses += transaction.amount;
            }
        });

        const labels = Object.keys(monthlyData).sort();
        const incomeData = labels.map(key => monthlyData[key].income);
        const expenseData = labels.map(key => monthlyData[key].expenses);

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels.map(label => {
                    const [year, month] = label.split('-');
                    return `${month}/${year}`;
                }),
                datasets: [{
                    label: 'الإيرادات',
                    data: incomeData,
                    borderColor: '#27ae60',
                    backgroundColor: 'rgba(39, 174, 96, 0.1)',
                    tension: 0.4
                }, {
                    label: 'المصاريف',
                    data: expenseData,
                    borderColor: '#e74c3c',
                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    createFleetChart() {
        const ctx = document.getElementById('fleetChart').getContext('2d');
        const cars = dataManager.getCars();
        
        const statusCounts = {
            available: cars.filter(car => car.status === 'available').length,
            rented: cars.filter(car => car.status === 'rented').length,
            maintenance: cars.filter(car => car.status === 'maintenance').length
        };

        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['متاحة', 'مؤجرة', 'صيانة'],
                datasets: [{
                    data: [statusCounts.available, statusCounts.rented, statusCounts.maintenance],
                    backgroundColor: ['#27ae60', '#e74c3c', '#f39c12'],
                    borderWidth: 2,
                    borderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                    }
                }
            }
        });
    }
}

// إدارة الأسطول
class FleetManager {
    updateFleetTable() {
        const cars = dataManager.getCars();
        const tbody = document.getElementById('cars-tbody');
        
        tbody.innerHTML = cars.map(car => `
            <tr>
                <td>
                    <img src="${car.image}" alt="صورة السيارة" class="car-image">
                </td>
                <td>${car.plate}</td>
                <td>${this.getBrandName(car.brand)} ${car.model}</td>
                <td>${car.year}</td>
                <td>
                    <span class="status-badge status-${car.status}">
                        ${this.getStatusName(car.status)}
                    </span>
                </td>
                <td>${languageManager.formatCurrency(car.price)}</td>
                <td>
                    ${car.status === 'available' ? `
                        <button class="btn btn-sm btn-success me-2" onclick="quickRentCar(${car.id})" title="كراء السيارة">
                            <i class="bi bi-calendar-plus"></i>
                        </button>
                    ` : ''}
                    <button class="btn btn-sm btn-warning me-2" onclick="fleetManager.editCar(${car.id})" title="تعديل">
                        <i class="bi bi-pencil"></i>
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="fleetManager.deleteCar(${car.id})" title="حذف">
                        <i class="bi bi-trash"></i>
                    </button>
                </td>
            </tr>
        `).join('');
    }

    getBrandName(brand) {
        const brands = {
            toyota: 'تويوتا',
            hyundai: 'هيونداي',
            nissan: 'نيسان',
            honda: 'هوندا'
        };
        return brands[brand] || brand;
    }

    getStatusName(status) {
        const statuses = {
            available: 'متاحة',
            rented: 'مؤجرة',
            maintenance: 'صيانة'
        };
        return statuses[status] || status;
    }

    deleteCar(id) {
        if (confirm(languageManager.translate('confirmDelete'))) {
            dataManager.deleteCar(id);
            this.updateFleetTable();
            dashboardManager.updateDashboard();
        }
    }

    quickRentCar(carId) {
        console.log('تم الضغط على زر الكراء السريع للسيارة:', carId);
        const car = dataManager.getCars().find(c => c.id === carId);
        if (!car) {
            console.error('لم يتم العثور على السيارة');
            return;
        }
        console.log('بيانات السيارة:', car);

        // ملء بيانات السيارة في النموذج السريع
        document.getElementById('quick-rent-car-info').textContent = `${this.getBrandName(car.brand)} ${car.model} ${car.year} - ${car.plate}`;
        document.getElementById('quick-rent-daily-price').value = car.price;
        document.getElementById('quick-rent-car-id').value = carId;
        
        // تعيين تاريخ اليوم كتاريخ بداية افتراضي
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('quick-rent-start-date').value = today;
        
        // إعادة تعيين الحقول الأخرى
        document.getElementById('quick-rent-end-date').value = '';
        document.getElementById('quick-rent-days').value = '';
        document.getElementById('quick-rent-total-amount').value = '';
        
        // ملء قائمة العملاء
        populateQuickRentalCustomers();
        
        // إظهار النموذج السريع
        const modalElement = document.getElementById('quickRentModal');
        console.log('عنصر النموذج:', modalElement);
        
        if (modalElement) {
            const modal = new SimpleModal(modalElement);
            modal.show();
            console.log('تم إظهار النموذج');
        } else {
            console.error('لم يتم العثور على عنصر النموذج');
            alert('خطأ: لم يتم العثور على نموذج الكراء السريع');
        }
    }

    editCar(id) {
        // يمكن إضافة وظيفة التعديل لاحقاً
        alert('وظيفة التعديل ستكون متاحة قريباً');
    }
}

// إدارة العملاء
class CustomerManager {
    updateCustomersTable() {
        const customers = dataManager.getCustomers();
        const tbody = document.getElementById('customers-tbody');
        
        tbody.innerHTML = customers.map(customer => `
            <tr>
                <td>${customer.name}</td>
                <td>${customer.phone}</td>
                <td>${customer.email || 'غير محدد'}</td>
                <td>${customer.idNumber}</td>
                <td>${customer.registrationDate}</td>
                <td>${customer.bookingsCount}</td>
                <td>
                    <button class="btn btn-sm btn-warning me-2" onclick="customerManager.editCustomer(${customer.id})">
                        <i class="bi bi-pencil"></i>
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="customerManager.deleteCustomer(${customer.id})">
                        <i class="bi bi-trash"></i>
                    </button>
                </td>
            </tr>
        `).join('');
    }

    deleteCustomer(id) {
        if (confirm(languageManager.translate('confirmDelete'))) {
            dataManager.deleteCustomer(id);
            this.updateCustomersTable();
            dashboardManager.updateDashboard();
        }
    }

    editCustomer(id) {
        alert('وظيفة التعديل ستكون متاحة قريباً');
    }
}

// إدارة الشؤون المالية
class FinanceManager {
    updateFinanceData() {
        this.updateFinancialSummary();
        this.updateTransactionsTable();
    }

    updateFinancialSummary() {
        const transactions = dataManager.getTransactions();
        
        const totalIncome = transactions
            .filter(t => t.type === 'income')
            .reduce((sum, t) => sum + t.amount, 0);
            
        const totalExpenses = transactions
            .filter(t => t.type === 'expense')
            .reduce((sum, t) => sum + t.amount, 0);
            
        const netProfit = totalIncome - totalExpenses;

        document.getElementById('total-income').textContent = languageManager.formatCurrency(totalIncome);
        document.getElementById('total-expenses').textContent = languageManager.formatCurrency(totalExpenses);
        document.getElementById('net-profit').textContent = languageManager.formatCurrency(netProfit);
    }

    updateTransactionsTable() {
        const transactions = dataManager.getTransactions().sort((a, b) => new Date(b.date) - new Date(a.date));
        const tbody = document.getElementById('transactions-tbody');
        
        tbody.innerHTML = transactions.map(transaction => `
            <tr>
                <td>${transaction.date}</td>
                <td>
                    <span class="badge ${transaction.type === 'income' ? 'bg-success' : 'bg-danger'}">
                        ${transaction.type === 'income' ? 'إيراد' : 'مصروف'}
                    </span>
                </td>
                <td>${transaction.description}</td>
                <td class="${transaction.type === 'income' ? 'text-success' : 'text-danger'}">
                    ${transaction.type === 'income' ? '+' : '-'}${languageManager.formatCurrency(transaction.amount)}
                </td>
                <td>${this.getCategoryName(transaction.category)}</td>
                <td>
                    <button class="btn btn-sm btn-danger" onclick="financeManager.deleteTransaction(${transaction.id})">
                        <i class="bi bi-trash"></i>
                    </button>
                </td>
            </tr>
        `).join('');
    }

    getCategoryName(category) {
        const categories = {
            rental: 'إيجار سيارات',
            maintenance: 'صيانة',
            fuel: 'وقود',
            insurance: 'تأمين',
            other: 'أخرى'
        };
        return categories[category] || category;
    }

    deleteTransaction(id) {
        if (confirm(languageManager.translate('confirmDelete'))) {
            dataManager.deleteTransaction(id);
            this.updateFinanceData();
            dashboardManager.updateDashboard();
        }
    }
}

// إدارة الكراء
class RentalManager {
    constructor() {
        this.dataManager = dataManager;
    }

    updateRentalPage() {
        this.updateRentalStats();
        this.updateRentalsTable();
        this.populateCustomerSelect();
        this.populateCarSelect();
    }

    updateRentalStats() {
        const rentals = this.dataManager.getRentals();
        const activeRentals = rentals.filter(r => r.status === 'active').length;
        const completedRentals = rentals.filter(r => r.status === 'completed').length;
        
        // إيرادات اليوم
        const today = new Date().toISOString().split('T')[0];
        const todayRevenue = rentals
            .filter(r => r.createdDate === today && r.status !== 'cancelled')
            .reduce((sum, r) => sum + r.totalAmount, 0);
        
        // الإيرادات الشهرية
        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();
        const monthlyRevenue = rentals
            .filter(r => {
                const rentalDate = new Date(r.createdDate);
                return rentalDate.getMonth() === currentMonth && 
                       rentalDate.getFullYear() === currentYear &&
                       r.status !== 'cancelled';
            })
            .reduce((sum, r) => sum + r.totalAmount, 0);

        document.getElementById('active-rentals-count').textContent = activeRentals;
        document.getElementById('completed-rentals-count').textContent = completedRentals;
        document.getElementById('today-revenue').textContent = languageManager.formatCurrency(todayRevenue);
        document.getElementById('rental-monthly-revenue').textContent = languageManager.formatCurrency(monthlyRevenue);
    }

    updateRentalsTable() {
        const rentals = this.dataManager.getRentals().sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));
        const tbody = document.getElementById('rentals-tbody');
        
        tbody.innerHTML = rentals.map(rental => `
            <tr>
                <td>#${rental.id}</td>
                <td>${rental.customerName}</td>
                <td>${rental.carInfo}</td>
                <td>${rental.startDate}</td>
                <td>${rental.endDate}</td>
                <td>${rental.totalDays} ${languageManager.translate('days')}</td>
                <td>${languageManager.formatCurrency(rental.totalAmount)}</td>
                <td>
                    <span class="status-badge status-${rental.status}">
                        ${this.getStatusName(rental.status)}
                    </span>
                </td>
                <td>
                    <button class="btn btn-sm btn-info me-2" onclick="rentalManager.viewRental(${rental.id})" title="عرض التفاصيل">
                        <i class="bi bi-eye"></i>
                    </button>
                    ${rental.status === 'active' ? `
                        <button class="btn btn-sm btn-success me-2" onclick="rentalManager.completeRental(${rental.id})" title="إنهاء الكراء">
                            <i class="bi bi-check-circle"></i>
                        </button>
                    ` : ''}
                    <button class="btn btn-sm btn-danger" onclick="rentalManager.deleteRental(${rental.id})" title="حذف">
                        <i class="bi bi-trash"></i>
                    </button>
                </td>
            </tr>
        `).join('');
    }

    populateCustomerSelect() {
        const customers = this.dataManager.getCustomers();
        const datalist = document.getElementById('customers-list');
        datalist.innerHTML = customers.map(customer => `<option value="${customer.name}"></option>`).join('');
    }

    populateCarSelect() {
        const cars = this.dataManager.getCars().filter(car => car.status === 'available');
        const select = document.getElementById('rental-car');
        select.innerHTML = '<option value="">اختر السيارة</option>' + 
            cars.map(car => `<option value="${car.id}" data-price="${car.price}">${car.brand} ${car.model} ${car.year} - ${car.plate}</option>`).join('');
    }

    getStatusName(status) {
        const statuses = {
            'active': 'نشط',
            'completed': 'مكتمل',
            'cancelled': 'ملغي'
        };
        return statuses[status] || status;
    }

    completeRental(id) {
        if (confirm('هل تريد إنهاء هذا الكراء؟')) {
            const rentals = this.dataManager.getRentals();
            const rental = rentals.find(r => r.id === id);
            if (rental) {
                rental.status = 'completed';
                
                // تحديث حالة السيارة إلى متاحة
                const cars = this.dataManager.getCars();
                const car = cars.find(c => c.id === rental.carId);
                if (car) {
                    car.status = 'available';
                    this.dataManager.saveCars(cars);
                }
                
                this.dataManager.saveRentals(rentals);
                this.updateRentalPage();
                dashboardManager.updateDashboard();
            }
        }
    }

    deleteRental(id) {
        if (confirm(languageManager.translate('confirmDelete'))) {
            this.dataManager.deleteRental(id);
            this.updateRentalPage();
            dashboardManager.updateDashboard();
        }
    }

    viewRental(id) {
        const rental = this.dataManager.getRentals().find(r => r.id === id);
        if (rental) {
            alert(`تفاصيل الكراء #${rental.id}:\n\nالعميل: ${rental.customerName}\nالسيارة: ${rental.carInfo}\nمن: ${rental.startDate}\nإلى: ${rental.endDate}\nعدد الأيام: ${rental.totalDays}\nالمبلغ الإجمالي: ${languageManager.formatCurrency(rental.totalAmount)}\nمبلغ التأمين: ${languageManager.formatCurrency(rental.deposit)}\nطريقة الدفع: ${rental.paymentMethod}\nالحالة: ${this.getStatusName(rental.status)}\nملاحظات: ${rental.notes || 'لا توجد'}`);
        }
    }
}

// وظائف البحث والفلترة للكراء
function filterRentals() {
    const customerSearch = document.getElementById('search-rental-customer').value.toLowerCase();
    const statusFilter = document.getElementById('filter-rental-status').value;
    const dateFilter = document.getElementById('filter-rental-date').value;
    
    const rentals = dataManager.getRentals();
    const filteredRentals = rentals.filter(rental => {
        const matchesCustomer = !customerSearch || rental.customerName.toLowerCase().includes(customerSearch);
        const matchesStatus = !statusFilter || rental.status === statusFilter;
        const matchesDate = !dateFilter || rental.startDate === dateFilter || rental.endDate === dateFilter;
        
        return matchesCustomer && matchesStatus && matchesDate;
    });
    
    // تحديث الجدول بالنتائج المفلترة
    const tbody = document.getElementById('rentals-tbody');
    tbody.innerHTML = filteredRentals.map(rental => `
        <tr>
            <td>#${rental.id}</td>
            <td>${rental.customerName}</td>
            <td>${rental.carInfo}</td>
            <td>${rental.startDate}</td>
            <td>${rental.endDate}</td>
            <td>${rental.totalDays} ${languageManager.translate('days')}</td>
            <td>${languageManager.formatCurrency(rental.totalAmount)}</td>
            <td>
                <span class="status-badge status-${rental.status}">
                    ${rentalManager.getStatusName(rental.status)}
                </span>
            </td>
            <td>
                <button class="btn btn-sm btn-info me-2" onclick="rentalManager.viewRental(${rental.id})" title="عرض التفاصيل">
                    <i class="bi bi-eye"></i>
                </button>
                ${rental.status === 'active' ? `
                    <button class="btn btn-sm btn-success me-2" onclick="rentalManager.completeRental(${rental.id})" title="إنهاء الكراء">
                        <i class="bi bi-check-circle"></i>
                    </button>
                ` : ''}
                <button class="btn btn-sm btn-danger" onclick="rentalManager.deleteRental(${rental.id})" title="حذف">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

// إدارة التنبيهات
class AlertsManager {
    updateAlerts() {
        this.updateInsuranceAlerts();
        this.updateInspectionAlerts();
    }

    updateInsuranceAlerts() {
        const cars = dataManager.getCars();
        const tbody = document.getElementById('insurance-alerts-tbody');
        
        const alertsData = cars.map(car => {
            const expiryDate = new Date(car.insuranceExpiry);
            const today = new Date();
            const daysRemaining = Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24));
            
            return {
                ...car,
                daysRemaining,
                status: daysRemaining <= 0 ? 'expired' : daysRemaining <= 30 ? 'warning' : 'ok'
            };
        }).sort((a, b) => a.daysRemaining - b.daysRemaining);

        tbody.innerHTML = alertsData.map(car => `
            <tr class="${car.status === 'expired' ? 'table-danger' : car.status === 'warning' ? 'table-warning' : ''}">
                <td>${car.plate}</td>
                <td>${this.getBrandName(car.brand)} ${car.model}</td>
                <td>${car.insuranceExpiry}</td>
                <td>${car.daysRemaining} يوم</td>
                <td>
                    <span class="badge ${this.getAlertBadgeClass(car.status)}">
                        ${this.getAlertStatusName(car.status)}
                    </span>
                </td>
            </tr>
        `).join('');
    }

    updateInspectionAlerts() {
        const cars = dataManager.getCars();
        const tbody = document.getElementById('inspection-alerts-tbody');
        
        const alertsData = cars.map(car => {
            const expiryDate = new Date(car.inspectionExpiry);
            const today = new Date();
            const daysRemaining = Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24));
            
            return {
                ...car,
                daysRemaining,
                status: daysRemaining <= 0 ? 'expired' : daysRemaining <= 30 ? 'warning' : 'ok'
            };
        }).sort((a, b) => a.daysRemaining - b.daysRemaining);

        tbody.innerHTML = alertsData.map(car => `
            <tr class="${car.status === 'expired' ? 'table-danger' : car.status === 'warning' ? 'table-warning' : ''}">
                <td>${car.plate}</td>
                <td>${this.getBrandName(car.brand)} ${car.model}</td>
                <td>${car.inspectionExpiry}</td>
                <td>${car.daysRemaining} يوم</td>
                <td>
                    <span class="badge ${this.getAlertBadgeClass(car.status)}">
                        ${this.getAlertStatusName(car.status)}
                    </span>
                </td>
            </tr>
        `).join('');
    }

    getBrandName(brand) {
        const brands = {
            toyota: 'تويوتا',
            hyundai: 'هيونداي',
            nissan: 'نيسان',
            honda: 'هوندا'
        };
        return brands[brand] || brand;
    }

    getAlertBadgeClass(status) {
        return {
            expired: 'bg-danger',
            warning: 'bg-warning',
            ok: 'bg-success'
        }[status];
    }

    getAlertStatusName(status) {
        return {
            expired: 'منتهي',
            warning: 'تحذير',
            ok: 'سليم'
        }[status];
    }
}

// إنشاء مثيلات من المدراء
const languageManager = new LanguageManager();
const navigationManager = new NavigationManager();
const dashboardManager = new DashboardManager();
const fleetManager = new FleetManager();
const customerManager = new CustomerManager();
const rentalManager = new RentalManager();
const financeManager = new FinanceManager();
const alertsManager = new AlertsManager();

// وظائف إضافة البيانات الجديدة
function addCar() {
    const form = document.getElementById('add-car-form');
    const formData = new FormData(form);
    
    const carData = {
        plate: document.getElementById('car-plate').value,
        brand: document.getElementById('car-brand').value,
        model: document.getElementById('car-model').value,
        year: parseInt(document.getElementById('car-year').value),
        price: parseFloat(document.getElementById('car-price').value),
        status: document.getElementById('car-status').value,
        insuranceExpiry: document.getElementById('insurance-expiry').value,
        inspectionExpiry: document.getElementById('inspection-expiry').value,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5TaWFyYTwvdGV4dD48L3N2Zz4='
    };

    // التحقق من صحة البيانات
    if (!carData.plate || !carData.brand || !carData.model || !carData.year || !carData.price) {
        alert(languageManager.translate('fillAllFields'));
        return;
    }

    // معالجة الصورة إذا تم رفعها
    const imageFile = document.getElementById('car-image').files[0];
    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            carData.image = e.target.result;
            dataManager.addCar(carData);
            form.reset();
            bootstrap.Modal.getInstance(document.getElementById('addCarModal')).hide();
            fleetManager.updateFleetTable();
            dashboardManager.updateDashboard();
            alert(languageManager.translate('addedSuccessfully'));
        };
        reader.readAsDataURL(imageFile);
    } else {
        dataManager.addCar(carData);
        form.reset();
        bootstrap.Modal.getInstance(document.getElementById('addCarModal')).hide();
        fleetManager.updateFleetTable();
        dashboardManager.updateDashboard();
        alert(languageManager.translate('addedSuccessfully'));
    }
}

function addCustomer() {
    const customerData = {
        name: document.getElementById('customer-name').value,
        phone: document.getElementById('customer-phone').value,
        email: document.getElementById('customer-email').value,
        idNumber: document.getElementById('customer-id').value,
        address: document.getElementById('customer-address').value
    };

    // التحقق من صحة البيانات
    if (!customerData.name || !customerData.phone || !customerData.idNumber) {
        alert(languageManager.translate('fillAllFields'));
        return;
    }

    dataManager.addCustomer(customerData);
    document.getElementById('add-customer-form').reset();
    bootstrap.Modal.getInstance(document.getElementById('addCustomerModal')).hide();
    customerManager.updateCustomersTable();
    dashboardManager.updateDashboard();
    alert(languageManager.translate('addedSuccessfully'));
}

function addTransaction() {
    const transactionData = {
        type: document.getElementById('transaction-type').value,
        amount: parseFloat(document.getElementById('transaction-amount').value),
        description: document.getElementById('transaction-description').value,
        category: document.getElementById('transaction-category').value,
        date: document.getElementById('transaction-date').value
    };

    // التحقق من صحة البيانات
    if (!transactionData.type || !transactionData.amount || !transactionData.description || !transactionData.category || !transactionData.date) {
        alert(languageManager.translate('fillAllFields'));
        return;
    }

    dataManager.addTransaction(transactionData);
    document.getElementById('add-transaction-form').reset();
    bootstrap.Modal.getInstance(document.getElementById('addTransactionModal')).hide();
    financeManager.updateFinanceData();
    dashboardManager.updateDashboard();
    alert(languageManager.translate('addedSuccessfully'));
}

// وظائف البحث والفلترة
function filterCars() {
    const searchPlate = document.getElementById('search-plate').value.toLowerCase();
    const filterBrand = document.getElementById('filter-brand').value;
    const filterStatus = document.getElementById('filter-status').value;
    
    const cars = dataManager.getCars();
    const filteredCars = cars.filter(car => {
        const matchesPlate = !searchPlate || car.plate.toLowerCase().includes(searchPlate);
        const matchesBrand = !filterBrand || car.brand === filterBrand;
        const matchesStatus = !filterStatus || car.status === filterStatus;
        
        return matchesPlate && matchesBrand && matchesStatus;
    });
    
    // تحديث الجدول بالنتائج المفلترة
    const tbody = document.getElementById('cars-tbody');
    tbody.innerHTML = filteredCars.map(car => `
        <tr>
            <td>
                <img src="${car.image}" alt="صورة السيارة" class="car-image">
            </td>
            <td>${car.plate}</td>
            <td>${fleetManager.getBrandName(car.brand)} ${car.model}</td>
            <td>${car.year}</td>
            <td>
                <span class="status-badge status-${car.status}">
                    ${fleetManager.getStatusName(car.status)}
                </span>
            </td>
            <td>${languageManager.formatCurrency(car.price)}</td>
            <td>
                <button class="btn btn-sm btn-warning me-2" onclick="fleetManager.editCar(${car.id})">
                    <i class="bi bi-pencil"></i>
                </button>
                <button class="btn btn-sm btn-danger" onclick="fleetManager.deleteCar(${car.id})">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function filterCustomers() {
    const searchName = document.getElementById('search-customer-name').value.toLowerCase();
    const searchPhone = document.getElementById('search-customer-phone').value;
    
    const customers = dataManager.getCustomers();
    const filteredCustomers = customers.filter(customer => {
        const matchesName = !searchName || customer.name.toLowerCase().includes(searchName);
        const matchesPhone = !searchPhone || customer.phone.includes(searchPhone);
        
        return matchesName && matchesPhone;
    });
    
    // تحديث الجدول بالنتائج المفلترة
    const tbody = document.getElementById('customers-tbody');
    tbody.innerHTML = filteredCustomers.map(customer => `
        <tr>
            <td>${customer.name}</td>
            <td>${customer.phone}</td>
            <td>${customer.email || 'غير محدد'}</td>
            <td>${customer.idNumber}</td>
            <td>${customer.registrationDate}</td>
            <td>${customer.bookingsCount}</td>
            <td>
                <button class="btn btn-sm btn-warning me-2" onclick="customerManager.editCustomer(${customer.id})">
                    <i class="bi bi-pencil"></i>
                </button>
                <button class="btn btn-sm btn-danger" onclick="customerManager.deleteCustomer(${customer.id})">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

// وظائف الكراء
function addRental() {
    const customerName = document.getElementById('rental-customer').value.trim();
    const carId = document.getElementById('rental-car').value;
    const startDate = document.getElementById('rental-start-date').value;
    const endDate = document.getElementById('rental-end-date').value;
    const deposit = parseFloat(document.getElementById('rental-deposit').value) || 0;
    const paymentMethod = document.getElementById('rental-payment-method').value;
    const notes = document.getElementById('rental-notes').value;

    // التحقق من صحة البيانات
    if (!customerName || !carId || !startDate || !endDate || !paymentMethod) {
        alert(languageManager.translate('fillAllFields'));
        return;
    }

    // التحقق من التواريخ
    if (new Date(startDate) >= new Date(endDate)) {
        alert('تاريخ النهاية يجب أن يكون بعد تاريخ البداية');
        return;
    }

    // حساب عدد الأيام والمبلغ الإجمالي
    const days = Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24));
    const dailyPrice = parseFloat(document.getElementById('rental-daily-price').value);
    const totalAmount = days * dailyPrice;

    // البحث عن العميل أو إنشاء عميل جديد
    let customer = dataManager.getCustomers().find(c => c.name.toLowerCase() === customerName.toLowerCase());
    let customerId;
    
    if (!customer) {
        // إنشاء عميل جديد
        const newCustomerData = {
            name: customerName,
            phone: '', // يمكن إضافة حقول إضافية لاحقاً
            email: '',
            idNumber: '',
            registrationDate: new Date().toISOString().split('T')[0]
        };
        customerId = dataManager.addCustomer(newCustomerData);
        customer = { id: customerId, name: customerName };
        
        // تحديث قائمة العملاء في النموذج
        rentalManager.populateCustomerSelect();
    } else {
        customerId = customer.id;
    }

    // الحصول على بيانات السيارة
    const car = dataManager.getCars().find(c => c.id == carId);

    const rentalData = {
        customerId: parseInt(customerId),
        customerName: customerName,
        carId: parseInt(carId),
        carInfo: `${car.brand} ${car.model} ${car.year} - ${car.plate}`,
        startDate,
        endDate,
        totalDays: days,
        dailyPrice,
        totalAmount,
        deposit,
        paymentMethod,
        status: 'active',
        notes,
        createdDate: new Date().toISOString().split('T')[0]
    };

    // إضافة الكراء
    dataManager.addRental(rentalData);

    // تحديث حالة السيارة إلى مؤجرة
    car.status = 'rented';
    dataManager.updateCar(car.id, car);

    // إضافة معاملة مالية
    const transactionData = {
        type: 'income',
        amount: totalAmount,
        description: `كراء ${car.brand} ${car.model} - ${customerName} (${days} أيام)`,
        category: 'rental',
        date: startDate
    };
    dataManager.addTransaction(transactionData);

    // إعادة تعيين النموذج وإغلاق النافذة
    document.getElementById('add-rental-form').reset();
    closeAddRentalModal();
    
    // تحديث الصفحات
    rentalManager.updateRentalPage();
    fleetManager.updateFleetTable();
    customerManager.updateCustomersTable(); // تحديث جدول العملاء أيضاً
    dashboardManager.updateDashboard();
    
    alert(languageManager.translate('addedSuccessfully'));
}

// حساب التواريخ والمبالغ تلقائياً
function setupRentalCalculations() {
    const startDateInput = document.getElementById('rental-start-date');
    const endDateInput = document.getElementById('rental-end-date');
    const carSelect = document.getElementById('rental-car');
    const daysInput = document.getElementById('rental-days');
    const dailyPriceInput = document.getElementById('rental-daily-price');
    const totalAmountInput = document.getElementById('rental-total-amount');

    function calculateRental() {
        const startDate = startDateInput.value;
        const endDate = endDateInput.value;
        const selectedOption = carSelect.options[carSelect.selectedIndex];
        const dailyPrice = selectedOption ? parseFloat(selectedOption.dataset.price) : 0;

        if (startDate && endDate && dailyPrice) {
            const days = Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24));
            if (days > 0) {
                daysInput.value = days;
                dailyPriceInput.value = dailyPrice;
                totalAmountInput.value = days * dailyPrice;
            }
        }
    }

    startDateInput.addEventListener('change', calculateRental);
    endDateInput.addEventListener('change', calculateRental);
    carSelect.addEventListener('change', calculateRental);
}

// وظيفة الكراء السريع العامة
function quickRentCar(carId) {
    console.log('تم الضغط على زر الكراء السريع للسيارة:', carId);
    const car = dataManager.getCars().find(c => c.id === carId);
    if (!car) {
        console.error('لم يتم العثور على السيارة');
        alert('خطأ: لم يتم العثور على السيارة');
        return;
    }
    console.log('بيانات السيارة:', car);

    // ملء بيانات السيارة في النموذج السريع
    const brandName = fleetManager.getBrandName(car.brand);
    document.getElementById('quick-rent-car-info').textContent = `${brandName} ${car.model} ${car.year} - ${car.plate}`;
    document.getElementById('quick-rent-daily-price').value = car.price;
    document.getElementById('quick-rent-car-id').value = carId;
    
    // تعيين تاريخ اليوم كتاريخ بداية افتراضي
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('quick-rent-start-date').value = today;
    
    // إعادة تعيين الحقول الأخرى
    document.getElementById('quick-rent-end-date').value = '';
    document.getElementById('quick-rent-days').value = '';
    document.getElementById('quick-rent-total-amount').value = '';
    
    // ملء قائمة العملاء
    populateQuickRentalCustomers();
    
    // إظهار النموذج السريع
    const modalElement = document.getElementById('quickRentModal');
    console.log('عنصر النموذج:', modalElement);
    
    if (modalElement) {
        const modal = new SimpleModal(modalElement);
        modal.show();
        console.log('تم إظهار النموذج');
    } else {
        console.error('لم يتم العثور على عنصر النموذج');
        alert('خطأ: لم يتم العثور على نموذج الكراء السريع');
    }
}

// وظائف الكراء السريع
function processQuickRental() {
    const carId = document.getElementById('quick-rent-car-id').value;
    const customerId = document.getElementById('quick-rent-customer').value;
    const startDate = document.getElementById('quick-rent-start-date').value;
    const endDate = document.getElementById('quick-rent-end-date').value;
    const paymentMethod = document.getElementById('quick-rent-payment-method').value;
    const deposit = parseFloat(document.getElementById('quick-rent-deposit').value) || 0;
    const notes = document.getElementById('quick-rent-notes').value;

    // التحقق من صحة البيانات
    if (!customerId || !startDate || !endDate || !paymentMethod) {
        alert('يرجى ملء جميع الحقول المطلوبة');
        return;
    }

    // التحقق من التواريخ
    if (new Date(startDate) >= new Date(endDate)) {
        alert('تاريخ النهاية يجب أن يكون بعد تاريخ البداية');
        return;
    }

    // حساب عدد الأيام والمبلغ الإجمالي
    const days = Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24));
    const dailyPrice = parseFloat(document.getElementById('quick-rent-daily-price').value);
    const totalAmount = days * dailyPrice;

    // الحصول على بيانات العميل والسيارة
    const customer = dataManager.getCustomers().find(c => c.id == customerId);
    const car = dataManager.getCars().find(c => c.id == carId);

    const rentalData = {
        customerId: parseInt(customerId),
        customerName: customer.name,
        carId: parseInt(carId),
        carInfo: `${car.brand} ${car.model} ${car.year} - ${car.plate}`,
        startDate,
        endDate,
        totalDays: days,
        dailyPrice,
        totalAmount,
        deposit,
        paymentMethod,
        status: 'active',
        notes,
        createdDate: new Date().toISOString().split('T')[0]
    };

    // إضافة الكراء
    dataManager.addRental(rentalData);

    // تحديث حالة السيارة إلى مؤجرة
    car.status = 'rented';
    dataManager.updateCar(car.id, car);

    // إضافة معاملة مالية
    const transactionData = {
        type: 'income',
        amount: totalAmount,
        description: `كراء ${car.brand} ${car.model} - ${customer.name} (${days} أيام)`,
        category: 'rental',
        date: startDate
    };
    dataManager.addTransaction(transactionData);

    // إعادة تعيين النموذج وإغلاق النافذة
    document.getElementById('quick-rent-form').reset();
    const modalElement = document.getElementById('quickRentModal');
    const modal = new SimpleModal(modalElement);
    modal.hide();
    
    // تحديث الصفحات
    fleetManager.updateFleetTable();
    if (typeof rentalManager !== 'undefined') {
        rentalManager.updateRentalPage();
    }
    dashboardManager.updateDashboard();
    
    alert('تم إضافة الكراء بنجاح!');
}

// تهيئة الكراء السريع
function setupQuickRental() {
    const startDateInput = document.getElementById('quick-rent-start-date');
    const endDateInput = document.getElementById('quick-rent-end-date');
    const daysInput = document.getElementById('quick-rent-days');
    const dailyPriceInput = document.getElementById('quick-rent-daily-price');
    const totalAmountInput = document.getElementById('quick-rent-total-amount');

    function calculateQuickRental() {
        const startDate = startDateInput.value;
        const endDate = endDateInput.value;
        const dailyPrice = parseFloat(dailyPriceInput.value) || 0;

        if (startDate && endDate && dailyPrice) {
            const days = Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24));
            if (days > 0) {
                daysInput.value = days;
                totalAmountInput.value = days * dailyPrice;
            }
        }
    }

    startDateInput.addEventListener('change', calculateQuickRental);
    endDateInput.addEventListener('change', calculateQuickRental);
}

// ملء قائمة العملاء في الكراء السريع
function populateQuickRentalCustomers() {
    const customers = dataManager.getCustomers();
    const select = document.getElementById('quick-rent-customer');
    select.innerHTML = '<option value="">اختر العميل</option>' + 
        customers.map(customer => `<option value="${customer.id}">${customer.name}</option>`).join('');
}

// وظيفة تغيير اللغة
function changeLanguage(lang) {
    languageManager.setLanguage(lang);
}

// فتح نموذج إضافة كراء جديد
function openAddRentalModal() {
    // تهيئة النموذج
    document.getElementById('add-rental-form').reset();
    
    // تحديث قوائم العملاء والسيارات
    rentalManager.populateCustomerSelect();
    rentalManager.populateCarSelect();
    
    // إظهار النموذج
    const modal = document.getElementById('addRentalModal');
    modal.style.display = 'block';
    modal.classList.add('show');
    
    // إضافة overlay
    const overlay = document.createElement('div');
    overlay.className = 'modal-backdrop fade show';
    overlay.id = 'modal-backdrop';
    overlay.onclick = closeAddRentalModal;
    document.body.appendChild(overlay);
    
    // التأكد من أن حقل العميل قابل للكتابة
    setTimeout(() => {
        const customerInput = document.getElementById('rental-customer');
        if (customerInput) {
            customerInput.removeAttribute('readonly');
            customerInput.removeAttribute('disabled');
            customerInput.focus();
        }
    }, 100);
}

// إغلاق نموذج إضافة كراء
function closeAddRentalModal() {
    const modal = document.getElementById('addRentalModal');
    modal.style.display = 'none';
    modal.classList.remove('show');
    
    // إزالة overlay
    const overlay = document.getElementById('modal-backdrop');
    if (overlay) {
        overlay.remove();
    }
}

// تهيئة التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // تحديث لوحة التحكم الرئيسية
    dashboardManager.updateDashboard();
    
    // تعيين التاريخ الحالي في نماذج إضافة المعاملات
    document.getElementById('transaction-date').value = new Date().toISOString().split('T')[0];
    
    // تطبيق اللغة المحفوظة
    languageManager.applyLanguage();
    
    // تعيين الزر النشط للغة الحالية
    document.getElementById(`btn-${languageManager.currentLanguage}`).classList.add('active');
    
    // تهيئة حسابات الكراء
    setupRentalCalculations();
    
    // تهيئة الكراء السريع
    setupQuickRental();
    
    // ملء قائمة العملاء في الكراء السريع
    populateQuickRentalCustomers();
    
    console.log('تم تحميل نظام إدارة BOUGHAE CAR بنجاح!');
});