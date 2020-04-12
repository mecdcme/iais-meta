<template>
  <div id="app" class="c-app">
    <div v-if="message" :class="`alert ${type}`">{{ message }}</div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "app",
  computed: {
    ...mapGetters(["type", "message"])
  },
  methods: {
    ...mapActions({
      clearMessage: "clear"
    })
  },
  watch: {
    $route() {
      // clear alert on location change
      this.clearMessage();
    }
  }
};
</script>
