// إصلاح مشكلة حقل إدخال العميل
// هذا الملف يحتوي على حلول شاملة لمشكلة عدم القدرة على الكتابة في حقل العميل

(function() {
    'use strict';
    
    // دالة لإصلاح حقل العميل
    function fixCustomerInput() {
        const customerInput = document.getElementById('rental-customer');
        
        if (!customerInput) {
            console.warn('حقل العميل غير موجود');
            return false;
        }
        
        console.log('بدء إصلاح حقل العميل...');
        
        // إزالة جميع الخصائص التي قد تمنع الكتابة
        customerInput.removeAttribute('readonly');
        customerInput.removeAttribute('disabled');
        customerInput.removeAttribute('tabindex');
        
        // تعيين الخصائص بشكل مباشر
        customerInput.readOnly = false;
        customerInput.disabled = false;
        customerInput.contentEditable = true;
        
        // إصلاح CSS بقوة
        customerInput.style.setProperty('pointer-events', 'auto', 'important');
        customerInput.style.setProperty('user-select', 'text', 'important');
        customerInput.style.setProperty('-webkit-user-select', 'text', 'important');
        customerInput.style.setProperty('-moz-user-select', 'text', 'important');
        customerInput.style.setProperty('-ms-user-select', 'text', 'important');
        customerInput.style.setProperty('cursor', 'text', 'important');
        customerInput.style.setProperty('background-color', '#fff', 'important');
        customerInput.style.setProperty('opacity', '1', 'important');
        customerInput.style.setProperty('color', '#000', 'important');
        
        // إزالة أي أحداث قد تتداخل
        customerInput.onkeydown = null;
        customerInput.onkeyup = null;
        customerInput.onkeypress = null;
        customerInput.oninput = null;
        customerInput.onchange = null;
        customerInput.onclick = null;
        customerInput.onfocus = null;
        customerInput.onblur = null;
        
        // إعادة إضافة الأحداث المطلوبة
        customerInput.addEventListener('input', function(e) {
            console.log('✓ تم إدخال نص في حقل العميل:', e.target.value);
        });
        
        customerInput.addEventListener('focus', function() {
            console.log('✓ تم التركيز على حقل العميل');
            this.style.setProperty('background-color', '#fff', 'important');
        });
        
        customerInput.addEventListener('keydown', function(e) {
            console.log('✓ تم الضغط على مفتاح:', e.key);
        });
        
        // اختبار الحقل
        setTimeout(() => {
            customerInput.focus();
            customerInput.value = 'اختبار';
            if (customerInput.value === 'اختبار') {
                console.log('✅ تم إصلاح حقل العميل بنجاح');
                customerInput.value = '';
                customerInput.placeholder = 'اكتب اسم العميل أو اختر من القائمة';
            } else {
                console.error('❌ فشل في إصلاح حقل العميل');
            }
        }, 100);
        
        return true;
    }
    
    // دالة لمراقبة النموذج
    function watchModal() {
        const modal = document.getElementById('addRentalModal');
        if (!modal) return;
        
        // مراقبة ظهور النموذج
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                    if (modal.style.display === 'block' || modal.classList.contains('show')) {
                        console.log('تم فتح نموذج الكراء - إصلاح حقل العميل...');
                        setTimeout(fixCustomerInput, 200);
                    }
                }
            });
        });
        
        observer.observe(modal, {
            attributes: true,
            attributeFilter: ['style', 'class']
        });
    }
    
    // تشغيل الإصلاحات عند تحميل الصفحة
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(() => {
                fixCustomerInput();
                watchModal();
            }, 1000);
        });
    } else {
        setTimeout(() => {
            fixCustomerInput();
            watchModal();
        }, 1000);
    }
    
    // إضافة دالة عامة للإصلاح
    window.fixCustomerInputField = fixCustomerInput;
    
    console.log('تم تحميل ملف إصلاح حقل العميل');
})();