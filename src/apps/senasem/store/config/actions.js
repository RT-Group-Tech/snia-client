import Api from "@/apps/senasem/api";

const actions = {
  /**Permet de voir les semences via le store
   * @callback
   */
  viewSemences({ commit }) {
    Api.voirSemences((data) => {
      if (data !== null) {
        if (data.semences !== undefined) {
          commit("SET_SEMENCES", data.semences.reverse());
        }
      }
    });
  },
};

export default actions;
