import { CreateElement, VNodeChildren } from "vue";

export default {
  functional: true,
  name: "admin-fragment",
  render(h: CreateElement, { children }: { children: VNodeChildren }) {
    return children;
  },
};
