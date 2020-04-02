import Vue from "vue";
import Vuex from "vuex";

import coreui from "./modules/layout/coreui";
import businessProcess from "./modules/businessProcess";
import statisticalProcess from "./modules/statisticalProcess";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    coreui,
    statisticalProcess,
    businessProcess
  }
});
