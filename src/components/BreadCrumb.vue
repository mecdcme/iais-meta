<template>
  <ol class="breadcrumb border-0 mb-0">
    <li
      role="presentation"
      class="breadcrumb-item"
      v-for="(breadcrumb, index) in breadcrumbs"
      :key="breadcrumb.path"
    >
      <router-link
        v-if="index < breadcrumbs.length - 1"
        tag="a"
        :to="breadcrumb.to"
        >{{ upperCaseFirst(breadcrumb.path) }}</router-link
      >
      <template v-else>{{ upperCaseFirst(breadcrumb.path) }}</template>
    </li>
  </ol>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [
        {
          path: "metadata",
          to: "/metadata"
        }
      ]
    };
  },
  methods: {
    upperCaseFirst(str) {
      return str.replace(/^\w/, c => c.toUpperCase());
    }
  },
  watch: {
    $route() {
      let pathArray = this.$route.path.split("/");
      pathArray.shift();
      let breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
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
