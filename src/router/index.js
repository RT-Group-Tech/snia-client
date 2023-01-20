import { createRouter, createWebHashHistory } from "vue-router";
import { getCurrentInstance } from "vue";

const instace = getCurrentInstance();

console.log(instace.attrs);

function getRouter(routes) {
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });
  return router;
}

export default getRouter;
