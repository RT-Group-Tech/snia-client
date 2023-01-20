import actions from "./config/actions";
import setters from "./config/setters";
import getters from "./config/getters";
import states from "./config/states";

import session from "./modules/session";

const danticStore = {
  namespaced: true,
  modules: {
    session: session,
  },
  state: states,
  getters: getters,
  actions: actions,
  mutations: setters,
};
export default danticStore;
