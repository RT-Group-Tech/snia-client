const getters = {
  getCount: (state) => state.count,
  GET_AGENTS: (state) => state.agents,
  GET_IPAS: (state) => state.ipas,
  GET_ITAS: (state) => state.itas,
  GET_ITAOfIPA: (state) => state.itasOfIpa,
  GET_FORMULAIRES: (state) => state.formulaires,
  GET_CATEGORIES: (state) => state.categories,
  GET_DASHBOARD: (state) => state.dashboard,
  GET_ACCESS: (state) =>state.access
};

export default getters;
