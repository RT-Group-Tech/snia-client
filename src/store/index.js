import { createStore } from "vuex";

/*modules imports*/
import danticStore from "@/apps/dantic/store";
import authStore from "./modules/auth";

/*Crée un store central global qui permet d'ajouter des tiers modules */
const store = createStore({
  modules: {
    dantic: danticStore,
    auth: authStore,
  },
  getters: {
    
  },
  mutations: {},
  state: {},
  actions: {},
});

export default store;
