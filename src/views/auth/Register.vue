<template>
  <div class="d-flex align-items-center min-vh-100">
    <CContainer fluid>
      <CRow class="justify-content-center">
        <CCol md="6" lg="4">
          <CCard class="mx-4 mb-0">
            <CCardBody class="p-4">
              <CForm>
                <h3>Register</h3>
                <p class="text-muted">Create your account</p>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <CIcon name="cilUser"></CIcon>
                    </div>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    :class="{ invalid: $v.username.$error }"
                    placeholder="User name"
                    @input="$v.username.$touch()"
                    v-model="username"
                  />
                </div>
                <div class="feedback" :class="{ show: $v.username.$error }">
                  Please enter your username.
                </div>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <CIcon name="cilAt"></CIcon>
                    </div>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    :class="{ invalid: $v.email.$error }"
                    placeholder="Email"
                    @input="$v.email.$touch()"
                    v-model="email"
                  />
                </div>
                <div class="feedback" :class="{ show: $v.email.$error }">
                  Please enter a valid email address.
                </div>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <CIcon name="cil-lock-locked"></CIcon>
                    </div>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    :class="{ invalid: $v.password.$error }"
                    placeholder="Password"
                    @input="$v.password.$touch()"
                    v-model="password"
                  />
                </div>
                <div class="feedback" :class="{ show: $v.username.$error }">
                  Please provide a password.
                </div>
                <CInput
                  placeholder="Repeat password"
                  type="password"
                  class="mb-4"
                  v-model="repeatPassword"
                >
                  <template #prepend-content
                    ><CIcon name="cil-lock-locked"
                  /></template>
                </CInput>
                <CButton color="success" block @click.prevent="handleSubmit"
                  >Create Account</CButton
                >
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "Register",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      repeatPassword: ""
    };
  },
  validations: {
    username: {
      required
    },
    email: {
      required,
      email
    },
    password: {
      required
    }
  },
  methods: {
    handleSubmit() {
      const formData = {
        username: this.username,
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("register", formData);
    }
  }
};
</script>

<style scoped>
.form-control:focus {
  outline: 0;
  box-shadow: none;
  color: #768192;
  background-color: #fff;
  border-color: #d8dbe0;
}

.feedback {
  visibility: hidden;
  width: 100%;
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
  font-size: 80%;
  color: #e55353;
  font-style: italic;
}

.invalid {
  border-color: #e55353 !important;
}

.show {
  visibility: visible;
}
</style>
