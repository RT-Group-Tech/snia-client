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
  SET_ITAS(state, data) {
    state.itas = data;
  },
  SET_ITAOfIPA(state, data) {
    state.itasOfIpa = data;
  },

  SET_FORMULAIRES(state, data) {
    state.formulaires = data;
  },

  SET_CATEGORIES(state, data) {
    state.categories = data;
  },
  SET_SECTION(state, data) {
    state.formulaireSection = data;
  },
  SET_DASHBOARD(state, data) {
    state.dashboard = data;
  },
};

export default setters;
