import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json";
import zu from "./locales/zu/translation.json";
import de from "./locales/de/translation.json";
import fr from "./locales/fr/translation.json";
import nl from "./locales/nl/translation.json";
import zh from "./locales/zh/translation.json";
import ru from "./locales/ru/translation.json";
import hi from "./locales/hi/translation.json";
import es from "./locales/es/translation.json";
import pt from "./locales/pt/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    zu: { translation: zu },
    de: { translation: de },
    fr: { translation: fr },
    nl: { translation: nl },
    zh: { translation: zh },
    ru: { translation: ru },
    hi: { translation: hi },
    es: { translation: es },
    pt: { translation: pt },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
