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