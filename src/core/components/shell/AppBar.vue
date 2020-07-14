<template>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "admin-app-bar",
  components: {},
  props: {
    title: {
      type: String,
      required: true
    },
    value: Boolean
  },
  methods: {}
});
</script>
