import AgentService from "@/database/services/dantic/agent.service";
import IpaService from "@/database/services/dantic/ipa.service";

const actions = {
  /*Permet de voir tous les agent via la dbTable locale*/
  viewAgents({ commit }) {
    AgentService.getAll((data) => {
      commit("SET_AGENTS", data);
    });
  },
  viewIpas({ commit }) {
    IpaService.getAll((data) => {
      commit("SET_IPAS", data);
    });
  },
};

export default actions;
