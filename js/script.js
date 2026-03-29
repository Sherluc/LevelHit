const translations = {
    fr: { welcome: "Bienvenue", goPage1: "Aller au premier jeu", text: "Bientôt disponible", legal: "Mentions légales", privacy: "Politique de confidentialité", terms: "Conditions générales d'utilisation", rights: "© 2026 Level Hit — Tous droits réservés" },
    en: { welcome: "Welcome", goPage1: "Go to first game", text: "Coming soon", legal: "Legal Notice", privacy: "Privacy Policy", "terms": "Terms of service", rights: "© 2026 Level Hit — All rights reserved" },
};

function setLanguage(lang) {
    localStorage.setItem('siteLang', lang);
    applyLanguage(lang);
}

function setLanguageAndRedirect(lang, path) {
    setLanguage(lang);
    window.location.replace(path);
}

function applyLanguage(lang) {
    if (document.getElementById('currentLang')) {
        document.getElementById('currentLang').innerText = lang.toUpperCase();
    }
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerText = translations[lang][key];
    });
    if (document.getElementById('langMenu')) {
        document.getElementById('langMenu').style.display = 'none';
    }
}

function toggleLang() { const m = document.getElementById('langMenu'); m.style.display = m.style.display === 'flex' ? 'none' : 'flex' }
function toggleMenu() { document.getElementById('mobileMenu').classList.toggle('active') }
function scrollToSection(num) { document.getElementById('section' + num).scrollIntoView({ behavior: 'smooth' }) }
function showHeader() { document.getElementById('mainHeader').classList.remove('hide') }

let lastScroll = 0;
window.addEventListener('scroll', () => {
    const current = window.pageYOffset;
    const header = document.getElementById('mainHeader');
    if (!header) return
    if (current === 0) { header.classList.remove('hide'); return }
    if (current > lastScroll) { header.classList.add('hide'); }
    else { header.classList.remove('hide'); }
    lastScroll = current;
});

window.onclick = function (e) { if (!e.target.closest('.lang-container')) { document.getElementById('langMenu').style.display = 'none' } }

window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('siteLang') || 'fr';
    applyLanguage(savedLang);
});
