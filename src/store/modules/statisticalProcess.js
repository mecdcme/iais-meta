import axios from "axios";

const state = {
  statisticalProcesses: []
};

const mutations = {
  SET_STATISTICAL_PROCESSES(state, statisticalProcesses) {
    state.statisticalProcesses = statisticalProcesses;
  }
};

const actions = {
  storeStatisticalProcesses({ commit, getters }) {
    axios
      .get("/statisticalProcesses.json" + "?auth=" + getters.token)
      .then(response => {
        const statisticalProcesses = response.data;
        console.log(statisticalProcesses);
        commit("SET_STATISTICAL_PROCESSES", statisticalProcesses);
      })
      .catch(error => console.log(error));
  }
};

const getters = {
  statisticalProcesses: state => {
    return state.statisticalProcesses;
  }
};

export const statisticalProcess = {
  state,
  mutations,
  actions,
  getters
};
