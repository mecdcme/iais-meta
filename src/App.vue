<template>
  <div id="app">
    <app-sidebar></app-sidebar>
    <CWrapper>
      <app-header />
      <div class="c-body">
        <main class="c-main">
          <CContainer fluid>
            <transition name="fade">
              <router-view></router-view>
            </transition>
          </CContainer>
        </main>
        <app-footer />
      </div>
    </CWrapper>
  </div>
</template>

<script>
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Sidebar from "./components/layout/Sidebar";

export default {
  name: "App",
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-sidebar": Sidebar
  }
};
</script>

<style lang="scss">
// Import Main styles for this application
@import "assets/scss/style";
</style>
