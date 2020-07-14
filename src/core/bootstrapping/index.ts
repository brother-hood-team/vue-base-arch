import Vue from "vue";
import VueHead from "vue-head";
import Vuebar from "vuebar";
import { apolloProvider } from "../apollo";
import App from "../App.vue";
import { Applications } from "../application";
import * as I18n from "./i18n";
import * as Router from "./router";
import { IRouterBootstrappingPagesConfig } from "./router";
import * as Store from "./store";
import { Directives, EventBus } from "@/core/utils/pluggins";

interface IBootstrappingConfig {
  applications: Applications;
  pages: IRouterBootstrappingPagesConfig;
}

export const bootstrap = (config: IBootstrappingConfig) => {
  const i18n = I18n.bootstrap({
    applications: config.applications,
  });

  const router = Router.bootstrap({
    applications: config.applications,
    pages: config.pages,
  });

  const store = Store.bootstrap({
    applications: config.applications,
    router,
  });

  Vue.use(VueHead);
  Vue.use(Vuebar);
  Vue.use(Directives);
  Vue.use(EventBus);

  return new Vue({
    i18n,
    apolloProvider,
    render: (h: any) => h(App) as any,
    router,
    store,
  } as any) as any;
};
