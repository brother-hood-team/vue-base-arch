// tslint:disable no-empty-interface interface-name

import Vue, { VNode } from "vue";
declare global {
  namespace JSX {
    interface Element extends VNode {}

    interface ElementClass extends Vue {}

    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
