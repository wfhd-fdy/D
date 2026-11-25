// التأكد من أن المتصفح قام بتحميل جميع عناصر الصفحة أولاً
document.addEventListener('DOMContentLoaded', () => {
    
    // جلب الزر والعنوان من صفحة HTML عن طريق الـ ID
    const button = document.getElementById('action-btn');
    const title = document.getElementById('main-title');

    // مصفوفة تحتوي على مجموعة ألوان متناسقة ومميزة ليتغير إليها العنوان
    const colors = ['#27ae60', '#9b59b6', '#e67e22', '#e74c3c', '#16a085', '#2c3e50'];
    let lastColorIndex = -1;

    if (button && title) {
        // إضافة حدث عند الضغط على الزر
        button.addEventListener('click', () => {
            
            // اختيار لون عشوائي مختلف عن اللون الحالي من المصفوفة
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * colors.length);
            } while (randomIndex === lastColorIndex);
            
            lastColorIndex = randomIndex;
            const newColor = colors[randomIndex];

            // تطبيق اللون الجديد على العنوان وإضافة حركة تكبير سريعة
            title.style.color = newColor;
            title.style.transform = 'scale(1.08)';
            
            // إعادة حجم الخط الطبيعي بعد انتهاء الضغطة بـ 200 جزء من الثانية
            setTimeout(() => {
                title.style.transform = 'scale(1)';
            }, 200);

            console.log("%c تم تغيير اللون بنجاح إلى: " + newColor, `color: ${newColor}; font-weight: bold;`);
        });
    }
});
