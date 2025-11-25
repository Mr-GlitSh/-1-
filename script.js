// وظيفة بسيطة لتعديل محتوى عنصر HTML وإضافة التفاعل
function setupPage() {
    const welcomeElement = document.getElementById('welcome-message');
    // الحصول على الوقت الحالي لتخصيص رسالة الترحيب
    const hour = new Date().getHours();
    let greeting;

    if (hour >= 4 && hour < 12) {
        greeting = "☀️ صباح الخير! ابدأ يومك بالتعلم والتركيز.";
    } else if (hour >= 12 && hour < 17) {
        greeting = "📚 وقت رائع للمراجعة والدراسة بعد الظهر.";
    } else {
        greeting = "🌙 مساء الخير! نتمنى لك دراسة ممتعة ومثمرة.";
    }

    welcomeElement.textContent = greeting;

    // إضافة وظيفة لإظهار رسالة عند الضغط على رابط الفيديو
    const videoLinks = document.querySelectorAll('.video-link');
    videoLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const materialCard = event.target.closest('.material-card');
            const materialName = materialCard.getAttribute('data-material');
            // استخدام confirm بدلاً من alert لفتح مجال للمستخدم للإلغاء
            const confirmation = confirm(`هل أنت متأكد من رغبتك في فتح فيديو مادة: ${materialName}؟`);
            
            if (!confirmation) {
                event.preventDefault(); // منع فتح الرابط إذا ضغط المستخدم "إلغاء"
            }
        });
    });
}

// استدعاء الوظيفة عند تحميل الصفحة
window.onload = setupPage;
