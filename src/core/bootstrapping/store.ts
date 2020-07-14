import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';
import * as VueRouterSync from "vuex-router-sync";
import { Applications, ApplicationsStore, IApplication } from "../application";

export interface IStoreBootstrappingConfig {
  applications: Applications;
  router: VueRouter;
}

export interface IAdministratorStore {
  applications: ApplicationsStore;
}

const getModules = (applications: Applications) => {
  return applications.reduce((modules: any, currentValue: IApplication) => {
    const { moduleName, module } = currentValue.store;
    modules[moduleName] = module;
    return modules;
  }, {});
};

const getPersistedStates = (state: any, applications: Applications) => {
  return applications.reduce((persisted: any, currentValue: any) => {
    const { moduleName } = currentValue.store;
    const persistedValues = currentValue.store.module.persistedState;

    if (persistedValues) {
      persisted[`${moduleName}`] = {};
      persistedValues.map((values: any) => persisted[`${moduleName}`][values] = (state[moduleName])[values]);
    }
    return persisted;
  }, {});
};

const getApplications = (applications: Applications) => {
  return applications.map((currentValue: IApplication) => {
    const { i18n, store, router, ...baseApplication } = currentValue;
    return {
      router: {
        urlPath: router.urlPath,
      },
      ...baseApplication,
    };
  });
};

export const bootstrap = (config: IStoreBootstrappingConfig) => {
  Vue.use(Vuex);

  const modules = getModules(config.applications);
  const applications = getApplications(config.applications);
  const state: IAdministratorStore = {
    applications
  };

  const store = new Vuex.Store({
    actions: {
    },
    modules,
    mutations: {
    },
    getters: {
    },
    plugins: [createPersistedState({
      reducer: (state) => getPersistedStates(state, config.applications),
    })],
    state,
    strict: process.env.NODE_ENV !== "production",
  });

  VueRouterSync.sync(store, config.router, { moduleName: "@router" });

  return store;
};

