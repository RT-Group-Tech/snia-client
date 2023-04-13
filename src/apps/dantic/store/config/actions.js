import AgentService from "@/database/services/dantic/agent.service";
import IpaService from "@/database/services/dantic/ipa.service";
import Api from "@/apps/dantic/api";

const actions = {
  /*Permet de voir tous les agent via la dbTable locale*/
  viewAgents({ commit }) {
    Api.voirAgents((data) => {
      commit("SET_AGENTS", data.reverse());
    });
  },

  viewIpas({ commit }) {
    Api.voirIpas((data) => {
      commit("SET_IPAS", data.result.reponse);
    });
  },

  viewItas({ commit }) {
    Api.voirItas((data) => {
      commit("SET_ITAS", data.result.reponse);
    });
  },

  getItasOfIpa({ commit }, id) {
    return new Promise((resolve) => {
      Api.voirItasDeIpa(id, (data) => {
        let ipas = data.result.reponse.datas;
        commit("SET_ITAOfIPA", ipas.reverse());
        resolve(true);
      });
    });
  },

  voirCategories({ commit }) {
    return new Promise((resolve) => {
      Api.voirCategories((res) => {
        let categories = res.result.culture_categories;
        commit("SET_CATEGORIES", categories);
        resolve(categories);
      });
    });
  },

  voirFormulaires({ commit }) {
    return new Promise((resolve) => {
      Api.voirFormulaires((data) => {
        let formulaires = data.result.formulaires;
        commit("SET_FORMULAIRES", formulaires.reverse());
        resolve(formulaires);
      });
    });
  },
};

export default actions;
