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
};

export default setters;