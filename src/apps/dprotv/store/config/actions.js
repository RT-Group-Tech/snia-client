import Api from "@/apps/dprotv/api";

const actions = {
  /**Permet de voir les semences via le store
   * @callback
   */
  viewProduitsPhyto({ commit }) {
    Api.voirProduitsPhyto((data) => {
      if (data !== null) {
        commit("SET_PROD", data.reverse());
      }
    });
  },
};

export default actions;
