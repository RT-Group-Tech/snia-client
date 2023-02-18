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
    IpaService.getAll((data) => {
      commit("SET_IPAS", data);
    });
  },
};

export default actions;
