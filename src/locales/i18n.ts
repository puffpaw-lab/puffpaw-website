import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

/**
 * - 英语     "en": "English"
 * - 汉语     "zh": "中文"
 */
import en from "./en.json";

//语言资源包
const resources = {
  en: { translations: en },
};
window.lngList = Object.keys(resources);

//设置默认语言
const defaultLng = window.localStorage.getItem("i18nextLng") || "en";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: resources,
    lng: defaultLng,
    fallbackLng: "en",
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
