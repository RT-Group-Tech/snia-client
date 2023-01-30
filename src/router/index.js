import { createRouter, createWebHashHistory } from "vue-router";
import store from "@/store";
//import { getCurrentInstance } from "vue";

/* const instace = getCurrentInstance();

console.log(instace.attrs); */

function getRouter(routes) {
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });

  router.beforeEach((from, to, next) => {
    if (to.meta.authRequired) {
      const user = store.getters.GET_USER;
      if (user === null || user === undefined) {
        next({ name: "login" });
      } else {
        next();
      }
    }
    next();
  });
  return router;
}

export default getRouter;
