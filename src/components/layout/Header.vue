<template>
  <CHeader fixed with-subheader light>
    <CToggler
      in-header
      class="ml-3 d-lg-none"
      @click="$store.commit('toggleSidebarMobile')"
    />
    <CToggler
      in-header
      class="ml-3 d-md-down-none"
      @click="$store.commit('toggleSidebarDesktop')"
    />
    <CHeaderBrand class="mx-auto d-lg-none" to="/">
      <img src="img/logo.png" height="40" />
    </CHeaderBrand>
    <CHeaderNav class="d-md-down-none mr-auto">
      <CHeaderNavItem class="px-3">
        <CHeaderNavLink>
          Settings
        </CHeaderNavLink>
      </CHeaderNavItem>
    </CHeaderNav>
    <CHeaderNav class="mr-4">
      <app-header-dropdown-account />
    </CHeaderNav>
    <CSubheader class="justify-content-between px-3">
      <CBreadcrumbRouter class="border-0 mb-0" />
      <!-- Right navigation menu -->
      <div class="c-subheader-nav d-md-down-none mfe-2">
        <a class="c-subheader-nav-link" href="#" v-if="show" @click="goBack()">
          <CIcon name="cilXCircle"></CIcon
          ><span class="header-link">Close</span>
        </a>
      </div>
    </CSubheader>
  </CHeader>
</template>

<script>
import HeaderDropdownAccnt from "./HeaderDropdownAccnt";

export default {
  name: "Header",
  data() {
    return {
      show: false
    };
  },
  components: {
    "app-header-dropdown-account": HeaderDropdownAccnt
  },
  watch: {
    $route() {
      const show = this.$router.currentRoute.name != "Home";
      console.log(show);
      this.show = show;
    }
  },
  methods: {
    goBack() {
      this.$router.back(); //DEBUG
    }
  }
};
</script>

<style scoped>
.c-header.c-header-fixed {
  border: 0;
  -webkit-box-shadow: 0 2px 2px 0 rgba(60, 75, 100, 0.14),
    0 3px 1px -2px rgba(60, 75, 100, 0.12), 0 1px 5px 0 rgba(60, 75, 100, 0.2);
  box-shadow: 0 2px 2px 0 rgba(60, 75, 100, 0.14),
    0 3px 1px -2px rgba(60, 75, 100, 0.12), 0 1px 5px 0 rgba(60, 75, 100, 0.2);
  -webkit-clip-path: inset(0 0 -1000px 0);
  clip-path: inset(0 0 -1000px 0);
}
.c-header .c-header-toggler-icon:focus {
  outline: none;
}
button:focus {
  outline: none;
}
.header-link {
  padding-left: 0.2rem;
}
</style>
