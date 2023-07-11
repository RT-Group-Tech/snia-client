import Api from "@/apps/senafic/api";

const actions = {
    /**Permet de voir les semences via le store
     * @callback
     */
    viewFertilisants({ commit }) {
        return new Promise((resolve, reject) => {
            try {
                Api.voirFertilisants((data) => {
                    if (data !== null) {
                        if (data.fertilisants !== undefined) {
                            commit("SET_FERT", data.fertilisants.reverse());
                        }
                        resolve(data);
                    }
                });
            } catch (error) {
                reject(error);
            }
        });
    },
};

export default actions;