@echo off
echo ========================================
echo رفع التحسينات إلى GitHub
echo ========================================
cd /d "c:\Users\hp\Desktop\18.08.2025"

echo.
echo إضافة الملفات المحدثة...
git add .

echo.
echo إنشاء commit...
git commit -m "تحسينات الهاتف المحمول - إصلاح الشريط الجانبي والأزرار"

echo.
echo رفع الملفات إلى GitHub...
echo ملاحظة: قد تحتاج لإدخال اسم المستخدم وكلمة المرور
git push -u origin master

echo.
echo ========================================
echo تم الانتهاء! تحقق من GitHub Pages خلال 10-20 دقيقة
echo الرابط: https://jado-ghali.github.io/Boughae-Car-Agadir/18.08.2025/admin.html
echo ========================================
pause