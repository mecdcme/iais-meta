<template>
  <div class="d-flex align-items-center min-vh-100">
    <CContainer fluid>
      <CRow class="justify-content-center">
        <CCol md="6" lg="4">
          <CCard class="mx-4 mb-0">
            <CCardBody class="p-4">
              <CForm>
                <h3>Register</h3>
                <p class="global-welcome">Create your account</p>
                <div class="global-feedback" :class="{ show: showGlobalError }">
                  Account already exists! Please go to
                  <router-link tag="a" to="/login">
                    <span>login page</span>
                  </router-link>
                </div>
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
                    type="password"
                    class="form-control"
                    :class="{ invalid: $v.password.$error }"
                    placeholder="Password"
                    v-model="password"
                  />
                </div>
                <div class="feedback" :class="{ show: $v.password.$error }">
                  Password should contain at least 6 characters.
                </div>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <CIcon name="cil-lock-locked"></CIcon>
                    </div>
                  </div>
                  <input
                    type="password"
                    class="form-control"
                    :class="{ invalid: $v.confirmPassword.$error }"
                    placeholder="Repeat password"
                    @input="$v.confirmPassword.$touch()"
                    v-model="confirmPassword"
                  />
                </div>
                <div
                  class="feedback"
                  :class="{ show: $v.confirmPassword.$error }"
                >
                  Passwords are different
                </div>
                <CButton color="success" block @click.prevent="handleSubmit()"
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
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  name: "Register",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  computed: {
    showGlobalError() {
      const status = this.$store.getters.status;
      //console.log(status);
      if (status == "USER_EXISTS") {
        return true;
      }
      return false;
    }
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
      required,
      minLen: minLength(6)
    },
    confirmPassword: {
      sameAs: sameAs("password")
    }
  },
  methods: {
    handleSubmit() {
      this.$v.$touch(); //validate form data
      if (!this.$v.$invalid) {
        const formData = {
          username: this.username,
          email: this.email,
          password: this.password
        };
        this.$store.dispatch("register", formData);
      }
    }
  }
};
</script>

<style scoped>
h3 {
  margin-bottom: 0.1rem;
}

a {
  color: #e55353;
}

a:hover {
  color: #e55353;
  text-decoration: underline;
}

.form-control:focus {
  outline: 0;
  box-shadow: none;
  color: #768192;
  background-color: #fff;
  border-color: #d8dbe0;
}

.global-welcome {
  margin-bottom: 0px;
}
.global-feedback {
  visibility: hidden;
  width: 100%;
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
  font-size: 100%;
  color: #e55353;
  font-style: italic;
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
