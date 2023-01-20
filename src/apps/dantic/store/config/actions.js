const actions = {
  increment({ commit, state }) {
    let n = state.count;
    n++;

    commit("setCount", n);
  },
  decrement({ commit, state }) {
    let n = state.count;
    if (n >= 1) {
      n--;
    }
    commit("setCount", n);
  },
};

export default actions;
