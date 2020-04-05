const state = {
  businessProcesses: []
};

const mutations = {
  SET_BUSINESS_PROCESSES(state, businessProcesses) {
    state.businessProcesses = businessProcesses;
  }
};

const actions = {
  setBusinessProcesses({ commit }) {
    //CALL SERVER
    var businessProcesses = [];
    businessProcesses.push({ id: 1, name: "Mauro" });
    businessProcesses.push({ id: 2, name: "Paolo" });
    businessProcesses.push({ id: 3, name: "Pina" });
    commit("SET_BUSINESS_PROCESSES", businessProcesses);
  }
};

const getters = {
  getBusinessProcesses: state => {
    return state.businessProcesses;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
