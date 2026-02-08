import { loadLanguage, applyTranslations } from './modules/i18n.js';

/* ==========================
   I18N
========================== */

const langSwitcher = document.getElementById('lang-switcher');

async function setLang(lang) {
  const translations = await loadLanguage(lang);
  applyTranslations(translations);

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
}

langSwitcher.addEventListener('change', (e) => {
  setLang(e.target.value);
});

// Idioma por defecto
setLang('es');

/* ==========================
   MOBILE MENU
========================== */

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

/* Cierra el menú al navegar */
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});
