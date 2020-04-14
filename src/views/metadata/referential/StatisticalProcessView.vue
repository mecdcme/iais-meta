<template>
  <div class="row" v-if="statisticalProcess">
    <div class="col-sm-6 col-md-4">
      <div class="card ">
        <header class="card-header">
          Statistical process
        </header>
        <div class="card-body">View me {{ statisticalProcess.name }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["statisticalProcess"])
  },
  created() {
    this.$store.dispatch("getStatisticalProcessById", this.$route.params.id);
  }
};
</script>
<style></style>
