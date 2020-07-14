<template>
  <div v-bar>
    <div>
      <button @click="test()"></button>
      <form action v-autocomplete-off>
        <input type="email" name="email" id="email" />
        <input type="password" name id="password" />
        <button type="submit">Send form</button>
      </form>
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  components: {},
  created() {
    this.$eventBus.$on("hello", () => {
      console.log("Hello Event Bus");
    });
  },
  methods: {
    test() {
      this.$eventBus.$emit("hello");
    }
  }
});
</script>
<style lang="stylus"></style>
