import Api from "@/apps/ita/api";

const actions = {
    /*Permet de voir tous les agent via la dbTable locale*/
    voirSecteurs({ commit, state }) {
        return new Promise((resolve, reject) => {
            try {
                Api.voirSecteurs(state.currentIta.ita_id, (data) => {
                    commit("SET_SECTEURS", data.reverse());
                    resolve(data);
                });
            } catch (error) {
                reject(error);
            }
        });
    },
};

export default actions;