import { autocompleteOff } from "@/core/utils/directives/autocomplete-off";
import $EventBus from "@core/event-bus";
import Vue from "vue";

export const CustomsDirectives = {
  install: function ($Vue: typeof Vue, options?: any) {
    $Vue.directive('autocomplete-off', autocompleteOff);
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