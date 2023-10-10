import { createStore } from "vuex";

/*modules imports*/
import danticStore from "@/apps/dantic/store";
import senaficStore from "@/apps/senafic/store";
import senasemStore from "@/apps/senasem/store";
import dprotvStore from "@/apps/dprotv/store";
import itaStore from "@/apps/ita/store";
import ipaStore from "@/apps/ipa/store";
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
    ipa: ipaStore,
  },
  getters: {
    GET_COLLECTES: (state) => state.collectes,
    GET_SUJETS: (state) => state.sujets,
    GET_CULTURES: (state) => state.cultures,
    GET_USERPROFILE:function(state){
      var ag=localStorage.getItem("agent_profile");
      if(ag===undefined || ag===null || ag.length<1)
      {
        state.userProfile=null;
      }
      else
      {
        state.userProfile=JSON.parse(ag);
      }

      return state.userProfile;
    }
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
    SET_USERPROFILE(state,data){
      state.userProfile=data;
    }
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
        name: "MINISTRE",
        enabled: false,
      },
      {
        name: "SG",
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
      {
        name: "DPRODV",
        enabled: false,
      },
    ],
    userProfile:{}
  },
  actions: {
    voirSujets({ commit }) {
      return new Promise((resolve) => {
        Api.voirFormulairesSujets((data) => {
          let sujets = data.reponse;
          commit("SET_SUJETS", sujets.reverse());
          resolve(sujets);
        });
      });
    },
    /****
     *
     */
    voirCollectes({ commit, state },filter) {
      return new Promise((resolve, reject) => {
        console.log("fil..."); console.log(filter);
        Api.voirDonneesCollectes((data) => {
          commit("SET_COLLECTES", data);
          if (data.reponse != undefined) {
            resolve(data);
          } else {
            reject(false);
          }
        },filter);
      });
    },
    voirCultures({ commit }) {
      console.log("##Voir cultures");
      return new Promise((resolve, reject) => {
        GlobalApi.voirCultures((data) => {
          commit("SET_CULTURES", data);
          if (data.reponse != undefined) resolve(data);
          else reject(data);
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
