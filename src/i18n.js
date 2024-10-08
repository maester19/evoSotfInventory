// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationFR from "./locales/fr.json";
import translationEN from "./locales/en.json";

i18n
  .use(LanguageDetector) 
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        translation: translationFR,
      },
      en: {
        translation: translationEN,
      },
    },
    fallbackLng: "en", 
    debug: true, 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
