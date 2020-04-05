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
  setStatisticalProcesses({ commit, getters }) {
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
  getStatisticalProcesses: state => {
    return state.statisticalProcesses;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
