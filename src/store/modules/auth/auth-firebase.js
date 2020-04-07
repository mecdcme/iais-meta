import axios from "@/axios-auth";
import router from "@/router/index";

const state = {
  idToken: localStorage.getItem("token") || null,
  userId: localStorage.getItem("userId") || null
};

const mutations = {
  AUTH_USER(state, userData) {
    state.idToken = userData.token;
    state.userId = userData.userId;
  },
  CLEAR_AUTH_DATA(state) {
    state.idToken = null;
    state.userId = null;
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
        localStorage.setItem("userId", res.data.localId); //store userid in browser storage

        router.push("/"); //Go to main page
      })
      .catch(error => console.log(error));
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
      .catch(error => console.log(error));
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
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
