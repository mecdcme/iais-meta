import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import CoreuiVue from "@coreui/vue";
import { iconsSet as icons } from "@/assets/icons/icons.js";
import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_DEV_SERVER;

Vue.config.productionTip = false;
Vue.use(CoreuiVue);

new Vue({
  router,
  store,
  icons,
  render: h => h(App)
}).$mount("#app");
