import Vue, { AsyncComponent } from "vue";
import Router from "vue-router";
import { Applications, IApplication } from "../application";
import ApplicationsPage from "../pages/Applications.vue";

export interface IRouterBootstrappingPagesConfig {
  notFoundPage: AsyncComponent
  homePage: AsyncComponent
  page401Page: AsyncComponent
}

export interface IRouterBootstrappingConfig {
  applications: Applications;
  pages: IRouterBootstrappingPagesConfig;
}

const getRoutes = (applications: Applications) =>
  applications.map((application: IApplication) => application.router.routes);

export const bootstrap = (config: IRouterBootstrappingConfig) => {
  Vue.use(Router);

  const applicationRoutes = getRoutes(config.applications);

  return new Router({
    mode: "history",
    routes: [

      { component: config.pages.homePage, name: "home", path: "/" },
      { component: ApplicationsPage, path: "/sistema", children: applicationRoutes },
      { path: "/404", component: config.pages.notFoundPage, name: "notFound" },
      {path: "/401", component: config.pages.page401Page, name: "notAccess"},
      { path: "*", redirect: { name: "notFound" } },
    ],
  });
};
