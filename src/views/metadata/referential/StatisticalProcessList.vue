<template>
  <div class="row">
    <div class="col-12">
      <div class="card ">
        <header class="card-header">
          Statistical processes
          <div class="card-header-actions">
            <router-link
              tag="a"
              to="/metadata/referential/add"
              class="card-header-action"
            >
              <CIcon name="cilPlus"></CIcon>
              <span>New process</span>
            </router-link>
          </div>
        </header>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Survey Name</th>
                  <th scope="col">Acronym</th>
                  <th scope="col">Responsible</th>
                  <th scope="col" colspan="3" width="5%"></th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="statisticalProcess in statisticalProcesses"
                  :key="statisticalProcess.id"
                >
                  <th scope="row">{{ statisticalProcess.id }}</th>
                  <td>{{ statisticalProcess.name }}</td>
                  <td>{{ statisticalProcess.acronym }}</td>
                  <td>{{ statisticalProcess.respFullName }}</td>
                  <td>
                    <router-link
                      tag="a"
                      :to="{
                        name: 'StatisticalProcessEdit',
                        params: { id: statisticalProcess.id }
                      }"
                    >
                      <CIcon name="cilPencil"></CIcon>
                    </router-link>
                  </td>
                  <td>
                    <router-link
                      tag="a"
                      :to="{
                        name: 'StatisticalProcessEdit',
                        params: { id: statisticalProcess.id }
                      }"
                    >
                      <CIcon name="cilMagnifyingGlass"></CIcon>
                    </router-link>
                  </td>
                  <td>
                    <router-link
                      tag="a"
                      :to="{
                        name: 'StatisticalProcessEdit',
                        params: { id: statisticalProcess.id }
                      }"
                    >
                      <CIcon name="cilTrash"></CIcon>
                    </router-link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["statisticalProcesses"])
  },
  created() {
    this.$store.dispatch("storeStatisticalProcesses");
  }
};
</script>
