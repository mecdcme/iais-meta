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
      this.show = this.$router.currentRoute.name != "Home";
    }
  },
  methods: {
    goBack() {
      var pathArray = this.$router.currentRoute.path.split("/");
      var parentPath = "";
      for (let i = 0; i < pathArray.length - 1; i++) {
        parentPath += pathArray[i] + "/";
      }
      //console.log(parentPath);
      this.$router.push(parentPath);
    }
  }
};
</script>
