<template>
  <div class="row">
    <div class="col-sm-6 col-md-6">
      <div class="card ">
        <header class="card-header">
          <strong>Statistical process</strong>
        </header>
        <div class="card-body">
          <div class="form-group">
            <label for="name">Survey name</label>
            <input
              id="name"
              type="text"
              class="form-control"
              :class="{ invalid: $v.name.$error }"
              placeholder="Survey name"
              v-model="name"
            />
            <span class="help-block" :class="{ show: $v.name.$error }">
              Please enter survey name.
            </span>
          </div>
          <div class="form-group">
            <label for="acronym">Survey acronym</label>
            <input
              id="acronym"
              type="text"
              class="form-control"
              :class="{ invalid: $v.acronym.$error }"
              placeholder="Survey acronym"
              v-model="acronym"
            />
            <span class="help-block" :class="{ show: $v.acronym.$error }">
              Please enter an acronym.
            </span>
          </div>
          <div class="form-group">
            <label for="responsible">Responsible</label>
            <input
              id="responsible"
              type="text"
              class="form-control"
              :class="{ invalid: $v.responsible.$error }"
              placeholder="Survey responsible"
              v-model="responsible"
            />
            <span class="help-block" :class="{ show: $v.responsible.$error }">
              Please enter a responsible.
            </span>
          </div>
        </div>
        <div class="card-footer">
          <CButton
            color="primary"
            shape="square"
            size="sm"
            style="margin-right:0.3rem"
            @click.prevent="handleSubmit()"
            >Submit</CButton
          >
          <CButton
            color="danger"
            shape="square"
            size="sm"
            @click.prevent="handleReset()"
            >Reset</CButton
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { required } from "vuelidate/lib/validators";

export default {
  name: "StatisticalProcessAdd",
  data() {
    return {
      name: "",
      acronym: "",
      responsible: ""
    };
  },
  validations: {
    name: {
      required
    },
    acronym: {
      required
    },
    responsible: {
      required
    }
  },
  methods: {
    handleSubmit() {
      this.$v.$touch(); //validate form data
      if (!this.$v.$invalid) {
        const formData = {
          name: this.name,
          acronym: this.acronym,
          responsible: this.responsible
        };
        //this.$store.dispatch("register", formData);
        console.log(formData);
      }
    },
    handleReset() {
      this.name = "";
      this.acronym = "";
      this.responsible = "";
    }
  }
};
</script>
<style scoped>
.form-group {
  margin-bottom: 0.2rem;
}
</style>
