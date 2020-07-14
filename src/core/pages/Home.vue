<template>
  <div>
    <h1>Home</h1>
  </div>
</template>

<script lang="ts">
import { ILogin, IToken } from "@core/interfaces/ILogin";
import Vue from "vue";
export default Vue.extend({
  name: "login-home-page",
  components: {},
  head: {
    title: {
      inner: "Welcome home"
    }
  },
  data() {
    const defaultLoginForm: ILogin = {
      username: "",
      password: "",
      grant_type: ""
    };
    const defaultToken: IToken = {
      access_token: "",
      expires_in: -1,
      jti: "",
      refresh_token: "",
      scope: "",
      token_type: ""
    };
    return {};
  },
  computed: {},
  methods: {}
});
</script>
<style lang="stylus"></style>