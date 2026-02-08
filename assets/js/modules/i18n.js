export async function loadLanguage(lang) {
  const response = await fetch(`/content/i18n/${lang}.json`);

  if (!response.ok) {
    console.error(`No se pudo cargar el idioma: ${lang}`);
    return {};
  }

  return await response.json();
}

export function applyTranslations(translations) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;

    if (translations[key]) {
      el.textContent = translations[key];
    } else {
      // Opcional: ayuda a depurar claves faltantes
      console.warn(`Falta traducción para: ${key}`);
    }
  });
}
