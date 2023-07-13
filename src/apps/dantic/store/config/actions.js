import AgentService from "@/database/services/dantic/agent.service";
import IpaService from "@/database/services/dantic/ipa.service";
import Api from "@/apps/dantic/api";

const actions = {
  /*Permet de voir tous les agent via la dbTable locale*/
  viewAgents({ commit, state }) {
    return new Promise((resolve, reject) => {
      Api.voirAgents((data) => {
        commit("SET_AGENTS", data.reverse());
        resolve(data);
      });
    });
  },

  viewIpas({ commit }) {
    return new Promise((resolve, reject) => {
      Api.voirIpas((data) => {
        commit("SET_IPAS", data.reponse);
        resolve(data);
      });
    });
  },

  viewItas({ commit }) {
    return new Promise((resolve, reject) => {
      Api.voirItas((data) => {
        commit("SET_ITAS", data.reponse);
        resolve(data);
      });
    });
  },

  getItasOfIpa({ commit }, id) {
    return new Promise((resolve) => {
      Api.voirItasDeIpa(id, (data) => {
        let ipas = data.reponse.datas;
        commit("SET_ITAOfIPA", ipas.reverse());
        resolve(true);
      });
    });
  },

  voirCategories({ commit }) {
    return new Promise((resolve) => {
      Api.voirCategories((res) => {
        let categories = res.reponse.data;
        commit("SET_CATEGORIES", categories);
        resolve(categories);
      });
    });
  },

  voirFormulaires({ commit, state }) {
    return new Promise((resolve, reject) => {
      try {
        Api.voirFormulaires((data) => {
          let formulaires = data.formulaires;
          commit("SET_FORMULAIRES", formulaires.reverse());
          resolve(formulaires);
        });
      } catch (error) {
        reject(error);
      }
    });
  },

  getSection({ commit }, payload) {
    commit("SET_SECTION", payload);
  },
  refreshDashboard({ commit, state }) {
    Api.refreshDashboard(state).then((result) => {
      commit("SET_DASHBOARD", result);
    });
  },
};

export default actions;
