import { createStore } from "vuex";

/*modules imports*/
import danticStore from "@/apps/dantic/store";
import authStore from "./modules/auth";

/*Crée un store central global qui permet d'ajouter des tiers modules */
const store = createStore({
  modules: {
    dantic: danticStore,
    auth: authStore,
  },
  getters: {
    GET_USER: (state) => state.user,
  },
  mutations: {
    SET_USER(state, data) {
      state.user = data;
    },
  },
  state: {
    user: {},
  },
  actions: {
    refreshLoggedUser({ commit }) {
      let token = localStorage.getItem("userToken");
      let user = JSON.parse(token);
      commit("SET_USER", user);
    },
  },
});

export default store;
