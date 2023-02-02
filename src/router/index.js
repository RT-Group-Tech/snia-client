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
      const user = store.getters["auth/GET_USER"];
      if (user === null || user === undefined) {
        next({ name: "login" });
      } else {
        next();
      }
    }
    next();
  });

  router.beforeResolve((to, from, next) => {
    if (to.name) {
      NProgress.start();
    }
    next();
  });

  router.afterEach((to, from) => {
    NProgress.done();
  });
  return router;
}

export default getRouter;
