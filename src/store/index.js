import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth.module";
import coreui from "./coreui.module";
import statisticalProcess from "./statisticalProcess.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    coreui,
    statisticalProcess
  }
});
