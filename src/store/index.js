import { createStore } from "vuex";

/*modules imports*/
import danticStore from "@/apps/dantic/store";
import senaficStore from "@/apps/senafic/store";
import senasemStore from "@/apps/senasem/store";
import dprotvStore from "@/apps/dprotv/store";
import itaStore from "@/apps/ita/store";
import authStore from "./modules/auth";

import Api from "@/api";
import GlobalApi from "../api";

/*Crée un store central global qui permet d'ajouter des tiers modules */
const store = createStore({
  modules: {
    dantic: danticStore,
    senasem: senasemStore,
    senafic: senaficStore,
    dprotv: dprotvStore,
    auth: authStore,
    ita: itaStore,
  },
  getters: {
    GET_COLLECTES: (state) => state.collectes,
    GET_SUJETS: (state) => state.sujets,
    GET_CULTURES: (state) => state.cultures,
  },
  mutations: {
    SET_SUJETS(state, data) {
      state.sujets = data;
    },
    SET_COLLECTES(state, data) {
      state.collectes = data;
    },
    SET_CULTURES(state, data) {
      state.cultures = data;
    },
  },
  state: {
    collectes: [] /*Liste des données collectées */,
    sujets: [] /* Formulaire sujets */,
    cultures: [], //*Liste des cultures * */,
    modules: [
      {
        name: "DANTIC",
        enabled: false,
      },
      {
        name: "IPA",
        enabled: false,
      },
      {
        name: "ITA",
        enabled: false,
      },
      {
        name: "SENASEM",
        enabled: false,
      },
      {
        name: "SENAFIC",
        enabled: false,
      },
      {
        name: "DPROTV",
        enabled: false,
      },
    ],
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
    /****
     *
     */
    voirCollectes({ commit, state }) {
      return new Promise((resolve) => {
        state.dataLoading = true;
        Api.voirDonneesCollectes((data) => {
          state.dataLoading = false;
          commit("SET_COLLECTES", data);
          resolve(data);
        });
      });
    },
    voirCultures({ commit }) {
      return new Promise((resolve) => {
        GlobalApi.voirCultures((data) => {
          commit("SET_CULTURES", data);
          resolve(data);
        });
      });
    },
    generateReporting() {
      return new Promise((resolve, reject) => {
        GlobalApi.genererRaport((data) => {
          if (data.reponse !== undefined) {
            resolve(data);
          } else {
            reject(false);
          }
        });
      });
    },
  },
});

export default store;
