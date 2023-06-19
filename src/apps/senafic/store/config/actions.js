import Api from "@/apps/senasem/api";

const actions = {
  /**Permet de voir les semences via le store
   * @callback
   */
  viewFertilisants({ commit }) {
    Api.voirSemences((data) => {
      if (data !== null) {
        commit("SET_FERT", data.reverse());
      }
    });
  },
};

export default actions;
