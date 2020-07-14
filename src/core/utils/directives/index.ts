import {autocompleteOff} from "@/core/utils/directives/autocomplete-off";
import {permisos} from "@/core/utils/directives/permisos";

export const loadCustomDirectives = (Vue: any) => {
  Vue.directive('autocomplete-off', autocompleteOff);
  Vue.directive('permisos', permisos);
};


