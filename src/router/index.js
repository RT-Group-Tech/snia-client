import { createRouter, createWebHashHistory } from "vue-router";
import { checkUser } from "@/middlewares/auth";
//import { getCurrentInstance } from "vue";

/* const instace = getCurrentInstance();
  console.log(instace.attrs);
*/
import routes from "@/routes";
const router = createRouter({
  /* base: process.env.BASE_URL, */
  history: createWebHashHistory(),
  routes,
});
router.beforeEach(checkUser);
router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});
router.afterEach((to, from) => {
  NProgress.done();
});
router.onError((error) => {
  if (/loading chunk \d* failed./i.test(error.message) && navigator.onLine) {
    window.location.reload();
  }
});

export default router;
