import { createStore } from "vuex";

/*modules imports*/
import danticStore from "@/apps/dantic/store";
import itaStore from "@/apps/ita/store";
import authStore from "./modules/auth";

import Api from "@/api";

/*Crée un store central global qui permet d'ajouter des tiers modules */
const store = createStore({
  modules: {
    dantic: danticStore,
    auth: authStore,
    ita: itaStore,
  },
  getters: {
    GET_COLLECTES: (state) => state.collectes,
    GET_SUJETS: (state) => state.sujets,
  },
  mutations: {
    SET_SUJETS(state, data) {
      state.sujets = data;
    },
    SET_COLLECTES(state, data) {
      state.collectes = data;
    },
  },
  state: {
    collectes: [] /*Liste des données collectées */,
    sujets: [] /* Formulaire sujets */,
    dataLoading: false,
  },
  actions: {
    voirSujets({ commit, state }) {
      return new Promise((resolve) => {
        state.dataLoading = true;
        Api.voirFormulairesSujets((data) => {
          state.dataLoading = false;
          let sujets = data.result.reponse;
          commit("SET_SUJETS", sujets.reverse());
          resolve(sujets);
        });
      });
    },
    voirCollectes({ commit, state }) {
      return new Promise((resolve) => {
        state.dataLoading = true;
        Api.voirDonneesCollectes((data) => {
          state.dataLoading = false;
          commit("SET_COLLECTES", data.reverse());
          resolve(data);
        });
      });
    },
  },
});

export default store;
