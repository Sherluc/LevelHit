const translations = {
    fr: {
        welcome: "Bienvenue",
        goRoundPopBubble: "Round Pop Bubble",
        text: "Bientôt disponible",
        legal: "Mentions légales",
        privacy: "Politique de confidentialité",
        terms: "Conditions générales d'utilisation",
        rights: "© 2026 Level Hit — Tous droits réservés",
        rpbDescription: "Fais tomber des bulles, enchaîne des combos monstrueux et pulvérise ton meilleur score dans ce jeu de puzzle coloré !",
        rpbFeatureTitle: "Fonctionnalités",
        rpbFeatureDescription: "Pourquoi vous allez l'adorer",
        rpbFeature1Title: "Gameplay",
        rpbFeature1Description: "Atteins l'objectif du niveau pour débloquer la prochaine étape",
        rpbFeature2Title: "Défis",
        rpbFeature2Description: "Plus tu montes dans les niveaux plus les objectifs deviennent impitoyables",
        rpbFeature3Title: "Graphismes",
        rpbFeature3Description: "Des visuels lumineux et joyeux parfaits pour tous les âges",
        rpbFeature4Title: "Multiplayer",
        rpbFeature4Description: "Lance un défi directement à tes amis depuis le même appareil",
        rpbScreenshots: "Aperçu",
        rpbScreenshotsDescription: "Des visuels soignés pour une expérience unique",
        rpbCTATitle: "Prêt à jouer ?",
        rpbCTADescription: "Disponible maintenant"
    },
    en: {
        welcome: "Welcome",
        goRoundPopBubble: "Round Pop Bubble",
        text: "Coming soon", legal: "Legal Notice",
        privacy: "Privacy Policy",
        terms: "Terms of service",
        rights: "© 2026 Level Hit — All rights reserved",
        rpbDescription: "Drop bubbles, chain massive combos, and beat your high score in this colorful puzzle game!",
        rpbFeatureTitle: "Features",
        rpbFeatureDescription: "Why you'll love it",
        rpbFeature1Title: "Gameplay",
        rpbFeature1Description: "Hit the level target to unlock the next stage",
        rpbFeature2Title: "Challenges",
        rpbFeature2Description: "As you climb through the levels the objectives get fiercer",
        rpbFeature3Title: "Graphics",
        rpbFeature3Description: "Bright cheerful visuals perfect for all ages",
        rpbFeature4Title: "Multiplayer",
        rpbFeature4Description: "Challenge your friends directly using the same device",
        rpbScreenshots: "Sneak peek",
        rpbScreenshotsDescription: "Carefully crafted visuals for a unique experience",
        rpbCTATitle: "Ready to play?",
        rpbCTADescription: "Available now"
    },
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
