import { bootstrap } from "@core/bootstrapping";
import * as ServiceWorker from "@core/service-worker";

const {$store, $i18n} = bootstrap({
  applications: [],
  pages: {
    homePage: () => import("@core/pages/Home.vue"),
    notFoundPage: () => import("@core/pages/NotFoundPage.vue"),
    page401Page: () => import("@core/pages/401.vue"),
  },
}).$mount("#app");

export {$store, $i18n};

ServiceWorker.bootstrap();
