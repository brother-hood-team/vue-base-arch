import { LocaleMessages } from "vue-i18n";
import { RouteConfig } from "vue-router";
import { Module } from "vuex";

type URLPath = string;

interface IApplicationRouterConfig {
  urlPath: URLPath;
  routes: RouteConfig;
}

interface IApplicationStoreConfig {
  module: Module<any, any>
  moduleName: string;
}

interface IApplicationI18nConfig {
  key: string;
  locales: LocaleMessages;
}

interface IBaseApplication {
  logo: string;
  category: string;
  description: string;
  displayName: string;
  id: string;
  icon:string;
}

export interface IApplicationStore extends IBaseApplication {
  router: {
    urlPath: URLPath;
  }
}

export interface IApplication extends IBaseApplication {
  i18n: IApplicationI18nConfig,
  store: IApplicationStoreConfig;
  router: IApplicationRouterConfig;
}

export type ApplicationsStore = IApplicationStore[];
export type Applications = IApplication[];
