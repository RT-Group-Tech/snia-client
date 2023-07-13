const states = {
  user: null,
};

const setters = {
  SET_USER(state, data) {
    state.user = data;
  },
};

const getters = {
  GET_USER: (state) => state.user,
};

const actions = {
  async refreshLoggedUser({ commit }) {
    let token = localStorage.getItem("userToken");
    let user = JSON.parse(token);
    commit("SET_USER", user);
  },

  async loggedOut({ commit }) {
    localStorage.setItem("userToken", null);
    commit("SET_USER", null);
  },
};

const auth = {
  namespaced: true,
  state: states,
  mutations: setters,
  getters: getters,
  actions: actions,
};

export default auth;
