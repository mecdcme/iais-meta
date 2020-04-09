<template>
  <CContainer class="d-flex content-center min-vh-100">
    <CRow class="justify-content-center">
      <CCol class="col-lg-8 col-md-12">
        <CCardGroup>
          <CCard
            color="gradient-primary"
            text-color="white"
            class="p-2 d-md-down-none"
            body-wrapper
          >
            <h3>IAIS</h3>
            <p class="description">
              Welcome to IAIS, the Integrated Automated Information System
              developed in the context of PARSTAT project.
            </p>
            <p class="description">
              IAIS offers a set of functionalities to document surveys,
              according to GSBPM and GSIM standards.
            </p>
          </CCard>
          <CCard class="p-2">
            <CCardBody>
              <CForm>
                <h3>Login</h3>
                <p class="global-welcome">Sign In to your account</p>
                <div class="global-feedback" :class="{ show: showGlobalError }">
                  Invalid email or password
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <CIcon name="cilAt"></CIcon>
                      </div>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Email"
                      v-model="email"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <CIcon name="cil-lock-locked"></CIcon>
                      </div>
                    </div>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      v-model="password"
                    />
                  </div>
                </div>
                <CRow>
                  <CCol col="6" class="text-left">
                    <CButton
                      color="primary"
                      class="px-4"
                      @click.prevent="handleSubmit"
                      >Login</CButton
                    >
                  </CCol>
                  <CCol col="6" class="text-right" style="padding-top:8px">
                    <router-link tag="a" to="/register">
                      Register
                    </router-link>
                  </CCol>
                </CRow>
              </CForm>
            </CCardBody>
          </CCard>
        </CCardGroup>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    showGlobalError() {
      const status = this.$store.getters.status;
      //console.log(status);
      if (status == "INVALID_CREDENTIALS") {
        return true;
      }
      return false;
    }
  },
  methods: {
    handleSubmit() {
      const formData = {
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("login", formData);
    }
  }
};
</script>

<style scoped>
h3 {
  margin-bottom: 0.1rem;
}

.description {
  padding-top: 0.5rem;
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

.show {
  visibility: visible;
}
</style>
