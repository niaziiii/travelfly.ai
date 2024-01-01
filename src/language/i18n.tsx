import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const enTranslations = {};
const frTranslation = {};
// the translations in order to avoid the error: " Type 'DefaultTFuncReturn' is not assignable to type 'string' "
declare module "i18next" {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

// Function to get selected language from local storage
const getSelectedLang = () => {
  // Check if the code is running in a browser environment
  if (typeof window !== "undefined") {
    // Get language from local storage
    const lang = localStorage.getItem("i18nextLng");
    if (lang) {
      return lang;
    }
  }
  return null;
};

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: enTranslations, //english translation
  },
  fr: {
    translation: frTranslation, //french translation
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: getSelectedLang() || "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    returnNull: false, // function t() returns DefaultTFuncReturn instead of string, so we need to set this to false
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
