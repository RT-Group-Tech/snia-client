import Api from "@/apps/ita/api";

const actions = {
  /*Permet de voir tous les agent via la dbTable locale*/
  voirSecteurs({ commit, state }) {
    Api.voirSecteurs(state.currentIta.ita_id, (data) => {
      commit("SET_SECTEURS", data.reverse());
    });
  },
};

export default actions;
