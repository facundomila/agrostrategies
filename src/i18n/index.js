import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es_ARTranslations from "./locales/es_AR.json";
import en_USTranslations from "./locales/en_US.json";
import pt_BRTranslations from "./locales/pt_BR.json";

//Definimos los idiomas a los que vamos a traducir la extensión

const resources = {
  en_US: {
    translation: en_USTranslations,
  },
  es_AR: {
    translation: es_ARTranslations,
  },
  pt_BR: {
    translation: pt_BRTranslations,
  },
};

//Iniciamos i18n y definimos un idioma por defecto, en este caso Español de Argentina
i18n.use(initReactI18next).init({
  resources,
  lng: "es_AR",
  fallbackLng: "es_AR",
});

export default i18n;
