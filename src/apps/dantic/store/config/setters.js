const setters = {
  setCount(state, data) {
    state.count = data;
  },
  SET_AGENTS(state, data) {
    state.agents = data;
  },
  SET_IPAS(state, data) {
    state.ipas = data;
  },
};

export default setters;
