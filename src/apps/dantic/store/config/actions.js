import AgentService from "@/database/services/dantic/agent.service";
import IpaService from "@/database/services/dantic/ipa.service";
import Api from "@/apps/dantic/api";

const actions = {
    /*Permet de voir tous les agent via la dbTable locale*/
    viewAgents({ commit, state }) {
        state.dataLoading = true;
        Api.voirAgents((data) => {
            state.dataLoading = false;
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
                let categories = res.result.reponse.data;
                commit("SET_CATEGORIES", categories);
                resolve(categories);
            });
        });
    },

    voirFormulaires({ commit, state }) {
        return new Promise((resolve) => {
            state.dataLoading = true;
            Api.voirFormulaires((data) => {
                state.dataLoading = false;
                let formulaires = data.result.formulaires;
                commit("SET_FORMULAIRES", formulaires.reverse());
                resolve(formulaires);
            });
        });
    },

    getSection({ commit }, payload) {
        commit("SET_SECTION", payload);
    },
};

export default actions;