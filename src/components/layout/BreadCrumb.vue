<template>
  <ol class="breadcrumb border-0 mb-0">
    <li role="presentation" class="breadcrumb-item">
      <router-link tag="a" to="/">
        Home
      </router-link>
    </li>
    <li
      role="presentation"
      class="active breadcrumb-item"
      v-for="breadcrumb in breadcrumbs"
      :key="breadcrumb.path"
    >
      <router-link tag="a" :to="breadcrumb.to">
        {{ breadcrumb.path }}
      </router-link>
    </li>
  </ol>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: []
    };
  },
  watch: {
    $route() {
      console.log("crumbs");
      let pathArray = this.$route.path.split("/");
      pathArray.shift();
      console.log(pathArray);
      let breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
        console.log(breadcrumbArray);
        breadcrumbArray.push({
          path: path,
          to: breadcrumbArray[idx - 1]
            ? "/" + breadcrumbArray[idx - 1].path + "/" + path
            : "/" + path
        });
        return breadcrumbArray;
      }, []);
      this.breadcrumbs = breadcrumbs;
    }
  }
};
</script>

<style></style>
