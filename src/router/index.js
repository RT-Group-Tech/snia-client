import { createRouter, createWebHashHistory } from "vue-router";
import { checkUser } from "@/middlewares/auth";
//import { getCurrentInstance } from "vue";

/* const instace = getCurrentInstance();

console.log(instace.attrs); */

function getRouter(routes) {
    const router = createRouter({
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
    return router;
}

export default getRouter;