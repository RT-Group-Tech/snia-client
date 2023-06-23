import Api from "@/apps/senafic/api";

const actions = {
  /**Permet de voir les semences via le store
   * @callback
   */
  viewFertilisants({ commit }) {
    Api.voirFertilisants((data) => {
      if (data !== null) {
        if (data.fertilisants !== undefined) {
          commit("SET_FERT", data.fertilisants.reverse());
        }
      }
    });
  },
};

export default actions;
