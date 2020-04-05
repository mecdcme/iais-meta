<template>
  <div class="row">
    <div class="col-sm-6 col-md-4">
      <div class="card ">
        <header class="card-header">
          Business processes
        </header>
        <div class="card-body">
          <ul>
            <li
              v-for="businessProcess in businessProcesses"
              :key="businessProcess.id"
            >
              {{ businessProcess.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      businessProcesses: "getBusinessProcesses"
    })
  },
  created() {
    this.$store.dispatch("setBusinessProcesses");
  }
};
</script>

<style></style>
