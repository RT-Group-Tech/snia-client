import danticRoutes from "@/apps/dantic/routes";
import itaRoutes from "@/apps/ita/routes";
import senasemRoutes from "@/apps/senasem/routes";
import senaficRoutes from "@/apps/senafic/routes";
import dprotvRoutes from "@/apps/dprotv/routes";
/* import { beforeAuth } from "@/middlewares/auth"; */

const routes = [
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/public/error/404"),
  },
  {
    path: "/",
    name: "login",
    component: () => import("@/views/auth/login"),
  },
  {
    path: "/modules/view",
    name: "modules",
    component: () => import("@/views/auth/modules"),
    beforeEnter: (to, from, next) => {
      let user = localStorage.getItem("userToken");
      if (user === null || user === undefined) {
        next({ name: "login" });
      } else {
        next();
      }
    },
  },

  /*modules routes */
  ...danticRoutes, //dantic routes

  ...itaRoutes, //ita routes

  ...senasemRoutes, //senasem routes

  ...senaficRoutes, //senafic routes

  ...dprotvRoutes, //dprotv routes
];

export default routes;
