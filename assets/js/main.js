const i18n = {
    ar: {
        nav_home: "الرئيسية",
        nav_about: "عن الشركة",
        nav_catalog: "الكتالوج",
        nav_contact: "تواصل معنا",
        hero_tag: "بنغازي - مقابل الجامعة الليبية الدولية",
        hero_title: "نصنع بيئات العمل..<br><span>بلمسة إبداع</span>",
        hero_desc: "حلول متكاملة للأثاث المكتبي تجمع بين التصميم والجودة والدقة الهندسية.",
        btn_explore: "تصفح الكتالوج",
        btn_contact: "اطلب الآن",
        about_title: "عن البانيل للاثاث المكتبي",
        about_desc: "البانيل للاثاث المكتبي تقدم حلولاً مكتبية متكاملة تجمع بين الجمال والجودة والدقة الهندسية لتناسب بيئات العمل الحديثة.",
        catalog_title: "الكتالوج",
        catalog_subtitle: "مكاتب عمل · مساحات عمل · مفروشات · شيبورد · كراسي مكتبية",
        contact_title: "تواصل معنا"
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_catalog: "Catalog",
        nav_contact: "Contact",
        hero_tag: "Benghazi - Opposite LIMU University",
        hero_title: "Designing Workspaces,<br><span>Elevating Offices</span>",
        hero_desc: "Integrated office furniture solutions that blend design, quality, and engineering precision.",
        btn_explore: "View Catalog",
        btn_contact: "Order Now",
        about_title: "About Panel for Office Furniture",
        about_desc: "Panel for office furniture delivers integrated solutions that combine aesthetics, quality, and engineering accuracy for modern work environments.",
        catalog_title: "Catalog",
        catalog_subtitle: "Office desks · Workspaces · Furniture · Chipboards · Office chairs",
        contact_title: "Contact Us"
    }
};

let currentLang = 'ar';

function applyLanguage(lang = currentLang) {
    currentLang = lang;

    const html = document.getElementById('html-tag');
    const body = document.body;
    const langText = document.getElementById('lang-text');

    html.lang = currentLang;
    html.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    body.className = currentLang === 'ar'
        ? 'bg-panel-light text-gray-900 font-ar transition-all duration-300'
        : 'bg-panel-light text-gray-900 font-en transition-all duration-300';

    if (langText) {
        langText.textContent = currentLang === 'ar' ? 'English' : 'العربية';
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (i18n[currentLang] && i18n[currentLang][key] !== undefined) {
            el.innerHTML = i18n[currentLang][key];
        }
    });
}

function toggleLanguage() {
    applyLanguage(currentLang === 'ar' ? 'en' : 'ar');
}

/* Navbar shrink */
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    nav.classList.toggle('py-2', window.scrollY > 50);
});

function toggleMobileMenu() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
}

/* Apply initial language on load so buttons/text are visible immediately */
document.addEventListener('DOMContentLoaded', () => applyLanguage('ar'));
