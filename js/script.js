// 1. الانتظار حتى يتم تحميل عناصر الصفحة بالكامل
document.addEventListener('DOMContentLoaded', () => {
    
    // 2. جلب العناصر من صفحة الHTML باستخدام الـ ID
    const button = document.getElementById('action-btn');
    const title = document.getElementById('main-title');

    // التأكد من وجود العناصر في الصفحة لتجنب الأخطاء
    if (button && title) {
        
        // 3. إضافة ميزة التفاعل عند الضغط على الزر
        button.addEventListener('click', () => {
            
            // تغيير لون العنوان بشكل عشوائي عند كل ضغطة
            const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            title.style.color = randomColor;
            
            // إضافة حركة اهتزاز خفيفة للعنوان
            title.style.transform = 'scale(1.1)';
            setTimeout(() => {
                title.style.transform = 'scale(1)';
            }, 200);

            console.log('تم تغيير اللون بنجاح إلى: ' + randomColor);
        });
    }
});

