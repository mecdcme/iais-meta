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
                <p class="text-muted">Sign In to your account</p>
                <CInput
                  placeholder="Email"
                  autocomplete="username email"
                  v-model="email"
                >
                  <template #prepend-content><CIcon name="cil-user"/></template>
                </CInput>
                <CInput
                  placeholder="Password"
                  type="password"
                  autocomplete="curent-password"
                  v-model="password"
                >
                  <template #prepend-content
                    ><CIcon name="cil-lock-locked"
                  /></template>
                </CInput>
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
                      Register now
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
.description {
  padding-top: 0.5rem;
}
</style>
