import Api from "@/apps/senasem/api";

const actions = {
  /**Permet de voir les semences via le store
   * @callback
   */
  viewSemences({ commit }) {
    Api.voirSemences((data) => {
      if (data !== null) {
        commit("SET_SEMENCES", data.reverse());
      }
    });
  },
};

export default actions;
