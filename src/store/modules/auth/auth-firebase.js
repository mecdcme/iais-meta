import axios from "@/axios-auth";
import router from "@/router/index";

const state = {
  idToken: localStorage.getItem("token") || null,
  userId: localStorage.getItem("userId") || null,
  status: null //This variable stores Login and Register error statuses, status = [INVALID_CREDENTIALS, USER_EXISTS]
};

const mutations = {
  AUTH_USER(state, userData) {
    state.idToken = userData.token;
    state.userId = userData.userId;
  },
  CLEAR_AUTH_DATA(state) {
    state.idToken = null;
    state.userId = null;
  },
  SET_STATUS(state, status) {
    state.status = status;
  }
};
const actions = {
  login({ commit }, authData) {
    axios
      .post(
        "/accounts:signInWithPassword?key=" +
          process.env.VUE_APP_DEV_SERVER_API_KEY,
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }
      )
      .then(res => {
        console.log(res);
        commit("AUTH_USER", {
          token: res.data.idToken,
          userId: res.data.localId
        });

        localStorage.setItem("token", res.data.idToken); //store token in browser storage
        localStorage.setItem("userId", res.data.localId); //store token in browser storage

        router.push("/"); //Go to main page
      })
      .catch(error => {
        //console.log(error.response.data.error.code);
        //console.log(error.response.data.error.message);
        const code = error.response.data.error.code;
        if (code == 400) {
          commit("SET_STATUS", "INVALID_CREDENTIALS");
        }
      });
  },
  register({ commit }, authData) {
    axios
      .post("/accounts:signUp?key=" + process.env.VUE_APP_DEV_SERVER_API_KEY, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
      .then(res => {
        console.log(res);
        commit("AUTH_USER", {
          token: res.data.idToken,
          userId: res.data.localId
        });
        localStorage.setItem("token", res.data.idToken); //store token in browser storage
        localStorage.setItem("userId", res.data.localId); //store token in browser storage

        router.push("/"); //Go to main page
      })
      .catch(error => {
        //console.log(error.response.data.error.code);
        //console.log(error.response.data.error.message);
        const code = error.response.data.error.code;
        if (code == 400) {
          commit("SET_STATUS", "USER_EXISTS");
        }
      });
  },
  logout({ commit }) {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    commit("CLEAR_AUTH_DATA");
    router.push("/login");
  }
};
const getters = {
  user(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.idToken !== null;
  },
  token(state) {
    return state.idToken;
  },
  status(state){
    return state.status;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
