/* ============================================================
   OLK — i18n Language Engine
   Translation files:
   - js/lang-en.js
   - js/lang-pt.js
   - js/lang-es.js
   ============================================================ */

const OLK_I18N = (() => {
  const DEFAULT_LANG = "en";
  const STORAGE_KEY = "olk_lang";

  function getTranslations() {
    return window.OLK_TRANSLATIONS || {};
  }

  function getLang() {
    const savedLang = localStorage.getItem(STORAGE_KEY);
    const translations = getTranslations();

    if (savedLang && translations[savedLang]) {
      return savedLang;
    }

    return DEFAULT_LANG;
  }

  function setLang(lang) {
    const translations = getTranslations();

    if (!translations[lang]) return;

    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
    updateSwitcher(lang);
  }

  function applyLang(lang = getLang()) {
    const translations = getTranslations();
    const dictionary = translations[lang] || translations[DEFAULT_LANG];

    if (!dictionary) return;

    document.documentElement.setAttribute(
      "lang",
      lang === "pt" ? "pt-BR" : lang === "es" ? "es" : "en"
    );

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");

      if (dictionary[key] !== undefined) {
        element.textContent = dictionary[key];
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const key = element.getAttribute("data-i18n-html");

      if (dictionary[key] !== undefined) {
        element.innerHTML = dictionary[key];
      }
    });

    document.querySelectorAll("[data-i18n-ph]").forEach((element) => {
      const key = element.getAttribute("data-i18n-ph");

      if (dictionary[key] !== undefined) {
        element.placeholder = dictionary[key];
      }
    });

    document.querySelectorAll("[data-i18n-val]").forEach((element) => {
      const key = element.getAttribute("data-i18n-val");

      if (dictionary[key] !== undefined) {
        element.textContent = dictionary[key];
      }
    });
  }

  function updateSwitcher(lang = getLang()) {
    document.querySelectorAll(".lang-btn").forEach((button) => {
      button.classList.toggle("active", button.getAttribute("data-lang") === lang);
    });
  }

  function bindSwitcherButtons() {
    document.querySelectorAll(".lang-btn").forEach((button) => {
      if (button.dataset.i18nBound === "true") return;

      button.dataset.i18nBound = "true";

      button.addEventListener("click", () => {
        setLang(button.getAttribute("data-lang"));
      });
    });
  }

  function init() {
    const lang = getLang();

    applyLang(lang);
    updateSwitcher(lang);
    bindSwitcherButtons();
  }

  return {
    init,
    setLang,
    getLang,
    applyLang
  };
})();

document.addEventListener("DOMContentLoaded", OLK_I18N.init);
document.addEventListener("componentsLoaded", OLK_I18N.init);
