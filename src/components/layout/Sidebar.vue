<template>
  <CSidebar
    fixed
    :minimize="minimize"
    :show="show"
    @update:show="value => $store.commit('set', ['sidebarShow', 'responsive'])"
  >
    <CSidebarBrand class="d-md-down-none" to="/">
      <span class="brand">IAIS Meta</span>
    </CSidebarBrand>

    <CRenderFunction flat :content-to-render="$options.nav" />
  </CSidebar>
</template>

<script>
import nav from "./_nav";

export default {
  name: "Sidebar",
  nav,
  computed: {
    show() {
      return this.$store.state.coreui.sidebarShow;
    },
    minimize() {
      return this.$store.state.coreui.sidebarMinimize;
    }
  }
};
</script>
<style scoped>
.brand{
    font-size: 1.2em;
}
</style>