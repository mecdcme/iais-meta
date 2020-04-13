<template>
  <div class="c-subheader-nav d-md-down-none mfe-2">
    <router-link tag="a" :to="back" class="c-subheader-nav-link" v-if="show">
      <CIcon name="cilXCircle"></CIcon><span class="header-link">Close</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      back: "/"
    };
  },
  watch: {
    $route(to) {
      this.show = this.$router.currentRoute.name != "Metadata";
      var pathArray = to.path.split("/");
      var parentPath = "";
      for (let i = 0; i < pathArray.length - 1; i++) {
        parentPath += pathArray[i] + "/";
      }
      this.back = parentPath == "/" ? "/" : parentPath.slice(0, -1);
    }
  }
};
</script>
