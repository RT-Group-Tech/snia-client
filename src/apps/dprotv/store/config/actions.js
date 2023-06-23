import Api from "@/apps/dprotv/api";

const actions = {
  /**Permet de voir les semences via le store
   * @callback
   */
  viewProduitsPhyto({ commit }) {
    Api.voirProduitsPhyto((data) => {
      if (data !== null) {
        if (data.produit_phytosanitaires !== undefined) {
          commit("SET_PROD", data.produit_phytosanitaires.reverse());
        }
      }
    });
  },
};

export default actions;
