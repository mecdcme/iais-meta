import router from "@/router";
import { statisticalProcessService } from "@/services";

const state = {
  statisticalProcesses: [],
  statisticalProcess: null
};

const mutations = {
  SET_STATISTICAL_PROCESSES(state, statisticalProcesses) {
    state.statisticalProcesses = statisticalProcesses;
  },
  SET_STATISTICAL_PROCESS(state, statisticalProcess) {
    state.statisticalProcess = statisticalProcess;
  }
};

const actions = {
  getStatisticalProcesses({ commit, getters }) {
    statisticalProcessService.getAll(getters.token).then(
      data => {
        const statisticalProcesses = data;
        commit("SET_STATISTICAL_PROCESSES", statisticalProcesses);
        commit("SET_STATISTICAL_PROCESS", null); //clear statistical process
      },
      error => {
        console.log(error);
      }
    );
  },
  getStatisticalProcessById({ commit, getters }, id) {
    statisticalProcessService.getById(getters.token, id).then(
      data => {
        const statisticalProcess = data;
        commit("SET_STATISTICAL_PROCESS", statisticalProcess);
      },
      error => {
        console.log(error);
      }
    );
  },
  saveStatisticalProcess({ getters, dispatch }, formData) {
    statisticalProcessService.getById(getters.token, formData).then(
      data => {
        console.log(data);
        dispatch("success", data.name + " saved!");
        router.push("/metadata/referential");
      },
      error => {
        console.log(error);
      }
    );
  }
};

const getters = {
  statisticalProcesses: state => {
    return state.statisticalProcesses;
  },
  statisticalProcess: state => {
    return state.statisticalProcess;
  }
};

export const statisticalProcess = {
  state,
  mutations,
  actions,
  getters
};
