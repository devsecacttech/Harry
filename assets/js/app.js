import { loadLanguage, applyTranslations } from './modules/i18n.js';

const switcher = document.getElementById('lang-switcher');

async function setLang(lang) {
  const translations = await loadLanguage(lang);
  applyTranslations(translations);

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
}

switcher.addEventListener('change', e => {
  setLang(e.target.value);
});

// Idioma por defecto
setLang('es');

/**
 * NAVEGACIÓN TIPO SLIDER
 */

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

menu.querySelectorAll('li').forEach(item => {
  item.addEventListener('click', () => {
    const target = item.dataset.target;
    const section = document.querySelector(`.${target}`);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }

    menu.classList.remove('active');
  });
});
