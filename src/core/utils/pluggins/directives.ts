import { loadCustomDirectives } from "@/core/utils/directives";
import $EventBus from "@core/event-bus";
import Vue from "vue";

export const Directives = {
  install: (Vue: any, options?: Object) => {
    loadCustomDirectives(Vue);
  }
};

export const EventBus = {
  install: function ($Vue: typeof Vue, options?: any) {
    $Vue.prototype.$eventBus = $EventBus;
  }
};

declare module 'vue/types/vue' {
  interface Vue {
    $eventBus: typeof $EventBus
  }
}
