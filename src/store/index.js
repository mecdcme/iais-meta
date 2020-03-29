import Vue from "vue";
import Vuex from "vuex";

import coreui from "./modules/coreui";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    coreui
  }
});
