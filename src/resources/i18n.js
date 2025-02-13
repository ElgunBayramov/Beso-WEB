import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          administer_business: "Administer your business",
        },
      },
      az: {
        translation: {
          administer_business: "Biznesinizi idarə edin",
        },
      },
      es: {
        translation: {
          administer_business: "Administra tu negocio",
        },
      },
      tr: {
        translation: {
          administer_business: "İşletmenizi yönetin",
        },
      },
    },
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
