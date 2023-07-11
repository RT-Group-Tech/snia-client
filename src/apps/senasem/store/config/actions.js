import Api from "@/apps/senasem/api";

const actions = {
    /**Permet de voir les semences via le store
     * @callback
     */
    viewSemences({ commit }) {
        return new Promise((resolve, reject) => {
            try {
                Api.voirSemences((data) => {
                    if (data !== null) {
                        if (data.semences !== undefined) {
                            commit("SET_SEMENCES", data.semences.reverse());
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