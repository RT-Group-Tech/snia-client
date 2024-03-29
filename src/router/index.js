import { createRouter, createWebHashHistory } from "vue-router";

import routes from "@/routes";
const router = createRouter({
  /* base: process.env.BASE_URL, */
  history: createWebHashHistory(),
  routes,
});

/* router.beforeEach(checkUser); */
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
    //console.log("router error");
    window.location.reload();
  }
});
export default router;
