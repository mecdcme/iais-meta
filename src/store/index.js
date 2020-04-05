import Vue from "vue";
import Vuex from "vuex";

import auth from "./modules/auth/auth-firebase";
import coreui from "./modules/layout/coreui";
import businessProcess from "./modules/metadata/businessProcess";
import statisticalProcess from "./modules/metadata/statisticalProcess";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    coreui,
    statisticalProcess,
    businessProcess
  }
});
