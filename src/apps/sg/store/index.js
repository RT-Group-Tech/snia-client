import actions from "./config/actions";
import setters from "./config/setters";
import getters from "./config/getters";
import states from "./config/states";

const ipaStore = {
  namespaced: true,
  state: states,
  getters: getters,
  actions: actions,
  mutations: setters,
};
export default ipaStore;
