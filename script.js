// منوی موبایل
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

// باز و بسته کردن منو
mobileMenuBtn.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    // تغییر آیکون همبرگر به X و بالعکس
    const icon = this.querySelector('i');
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// بستن منو هنگام کلیک روی آیتم‌های منو
navItems.forEach(item => {
    item.addEventListener('click', function() {
        navLinks.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// فرم درخواست مشاوره
(function () {
    emailjs.init("8aIxYi009_KprVgY7");
})();

const form = document.getElementById("consultation-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    // ارسال ایمیل
    emailjs.sendForm(
        "hashemiannikta@gmail.com",
        "template_hnlrpv7",
        this
    ).then(() => {
        alert("✅ درخواست شما ثبت شد");

        // متن پیام
        const text =
`📌 درخواست مشاوره جدید

👤 نام: ${name}
📞 تماس: ${phone}
📧 ایمیل: ${email || "—"}
📂 موضوع: ${subject}

📝 توضیحات:
${message || "—"}`;

        // واتساپ
        const whatsappNumber = "989036305679";
        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
        window.open(whatsappURL, "_blank");

        // تلگرام
        const telegramUser = "@nikiii1379";
        const telegramURL =
            `https://t.me/${telegramUser}?text=${encodeURIComponent(text)}`;
        window.open(telegramURL, "_blank");

        form.reset();

    }).catch(() => {
        alert("❌ خطا در ارسال پیام");
    });
});

// اسکرول نرم به بخش‌ها
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});