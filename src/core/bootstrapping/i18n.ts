import Vue from "vue";
import VueI18n from "vue-i18n";
import { Applications, IApplication } from "../application";
import globalLocales, { IAdministratorI18n } from "../i18n";

export interface II18nBootstrappingConfig {
  applications: Applications;
}

const setApplicationLocales = (currentGlobalLocales: IAdministratorI18n, applications: Applications) => {
  return applications.reduce((locales, application: IApplication) => {
    const key: string = application.i18n.key;
    locales.es.applications[key] = application.i18n.locales.es;
    return locales;
  }, currentGlobalLocales);
};

export const bootstrap = (config: II18nBootstrappingConfig) => {
  Vue.use(VueI18n);

  const messages = setApplicationLocales(
    globalLocales,
    config.applications,
  );

  return new VueI18n({
    fallbackLocale: "es",
    locale: "es",
    messages,
  });
};
