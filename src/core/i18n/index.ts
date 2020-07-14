import { LocaleMessageObject, LocaleMessages } from "vue-i18n";
import en from "./locales/en";
import es from "./locales/es";

export interface IAdministratorI18n extends LocaleMessages {
  en: {
    administrator: LocaleMessageObject;
    applications: LocaleMessageObject;
    categories: LocaleMessageObject;
  },
  es: {
    administrator: LocaleMessageObject;
    applications: LocaleMessageObject;
    categories: LocaleMessageObject;
  }
}

const i18n: IAdministratorI18n = { en, es };

export default i18n;
