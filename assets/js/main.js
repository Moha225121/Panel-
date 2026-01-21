const i18n = {
    ar: {
        nav_home: "الرئيسية",
        nav_about: "عن الشركة",
        nav_vision: "الرؤية والأهداف",
        nav_catalog: "الكتالوج",
        nav_contact: "تواصل معنا",

        hero_title: "نصنع بيئة عمل<br><span class='text-panel-yellow'>بلمسة إبداع</span>",
        hero_desc: "حلول متكاملة للأثاث المكتبي تجمع بين التصميم والجودة",

        about_title: "عن شركة البانيل",
        about_desc: "شركة متخصصة في توفير الأثاث المكتبي وتجهيز المباني الإدارية الحديثة.",

        vision_goals_title: "رؤيتنا وأهدافنا",
        vision_title: "رؤيتنا",
        vision_desc: "أن تكون شركة البانيل الاسم الرائد والموثوق في مجال الأثاث المكتبي وتجهيز المباني الإدارية، من خلال تقديم حلول متكاملة تجمع بين التصميم العصري والجودة العالية والوظيفة العملية، والمساهمة في خلق بيئة عمل حديثة وملهمة تعزز الإنتاجية وتحقق أعلى مستويات الراحة والكفاءة لعملائنا.",

        goals_title: "أهدافنا",
        goals_desc: "نسعى في شركة البانيل إلى تلبية احتياجات المؤسسات والشركات من الأثاث المكتبي المتكامل، بدءًا من المكاتب الإدارية ومحطات العمل وطاولات الاجتماعات والكراسي المكتبية والشيبورد، وصولًا إلى تجهيز المباني الإدارية بالكامل، مع الالتزام بأعلى معايير الجودة والاحترافية، وتقديم حلول مخصصة تناسب مختلف المساحات وطبيعة الأعمال، وبناء علاقات طويلة الأمد مع عملائنا قائمة على الثقة والالتزام والتميز في التنفيذ.",

        catalog_title: "الكتالوج"
    },

    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_vision: "Vision & Goals",
        nav_catalog: "Catalog",
        nav_contact: "Contact",

        hero_title: "Designing Workspaces<br><span class='text-panel-yellow'>With Creativity</span>",
        hero_desc: "Integrated office furniture solutions blending design and quality",

        about_title: "About Alpanel",
        about_desc: "A company specialized in modern office furniture and administrative building solutions.",

        vision_goals_title: "Vision & Goals",
        vision_title: "Our Vision",
        vision_desc: "To position Alpanel as a leading and trusted name in office furniture and administrative space solutions by delivering integrated products that combine modern design, high quality, and functional excellence, while creating inspiring work environments that enhance productivity, comfort, and efficiency.",

        goals_title: "Our Goals",
        goals_desc: "At Alpanel, we aim to provide comprehensive office furniture solutions ranging from executive offices, workstations, meeting tables, office seating, and cupboards to complete administrative building fit-outs, with a strong commitment to quality, professionalism, and customized solutions that meet diverse business needs, while building long-term relationships based on trust, reliability, and superior execution.",

        catalog_title: "Catalog"
    }
};

let currentLang = "ar";

function applyLanguage(lang) {
    currentLang = lang;

    // Set page direction
    document.getElementById("html-tag").dir = lang === "ar" ? "rtl" : "ltr";

    // Toggle only the font class without removing other body classes
    document.body.classList.remove("font-ar", "font-en");
    document.body.classList.add(lang === "ar" ? "font-ar" : "font-en");

    // Apply translations only if a value exists for the key
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;
        const value = i18n[lang] && i18n[lang][key];
        if (value !== undefined) {
            el.innerHTML = value;
        }
        // If no value is defined, keep existing content (pre-filled in HTML)
    });

    // Update language toggle button labels
    const langText = document.getElementById("lang-text");
    if (langText) langText.textContent = lang === "ar" ? "English" : "العربية";

    const langTextMobile = document.getElementById("lang-text-mobile");
    if (langTextMobile) langTextMobile.textContent = lang === "ar" ? "English" : "العربية";
}

function toggleLanguage() {
    applyLanguage(currentLang === "ar" ? "en" : "ar");
}

function toggleMobileMenu() {
    document.getElementById("mobile-menu").classList.toggle("hidden");
}

document.addEventListener("DOMContentLoaded", () => applyLanguage("ar"));
