const i18n = {
    ar: {
        nav_home: "الرئيسية",
        nav_about: "عن الشركة",
        nav_catalog: "الكتالوج",
        nav_contact: "تواصل معنا",
        hero_tag: "بنغازي - مقابل الجامعة الليبية الدولية",
        hero_title: "نصنع الفراغ..<br><span>بلمسة إبداع</span>",
        hero_desc: "تجربة بصرية وهندسية فريدة في صناعة الأثاث المودرن بأعلى المعايير.",
        btn_explore: "تصفح الكتالوج",
        btn_contact: "اطلب الآن"
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_catalog: "Catalog",
        nav_contact: "Contact",
        hero_tag: "Benghazi - Opposite LIMU University",
        hero_title: "Crafting Spaces,<br><span>Defining Style</span>",
        hero_desc: "A unique visual and engineering experience in modern furniture crafting.",
        btn_explore: "View Catalog",
        btn_contact: "Order Now"
    }
};

let currentLang = 'ar';

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';

    const html = document.getElementById('html-tag');
    const body = document.body;
    const langText = document.getElementById('lang-text');

    html.lang = currentLang;
    html.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    body.className = currentLang === 'ar'
        ? 'bg-panel-light text-gray-900 font-ar transition-all duration-300'
        : 'bg-panel-light text-gray-900 font-en transition-all duration-300';

    langText.textContent = currentLang === 'ar' ? 'English' : 'العربية';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.innerHTML = i18n[currentLang][el.dataset.i18n];
    });
}

/* Navbar shrink */
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    nav.classList.toggle('py-2', window.scrollY > 50);
});

function toggleMobileMenu() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
}