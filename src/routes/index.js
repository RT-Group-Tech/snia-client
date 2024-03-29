import danticRoutes from "@/apps/dantic/routes";
import itaRoutes from "@/apps/ita/routes";
import senasemRoutes from "@/apps/senasem/routes";
import senaficRoutes from "@/apps/senafic/routes";
import dprotvRoutes from "@/apps/dprotv/routes";
import ipaRoutes from "@/apps/ipa/routes";
import dprodvRoutes from "@/apps/dprodv/routes";
import ministreRoutes from "@/apps/ministre/routes";
import sgRoutes from "@/apps/sg/routes";
import { beforeAuth } from "@/middlewares/auth";

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
    path: "/password/reset/request",
    name: "reset-pass",
    component: () => import("@/views/auth/resetpassword"),
  },
  {
    path: "/modules/view",
    name: "modules",
    component: () => import("@/views/auth/modules"),
    beforeEnter: beforeAuth,
  },

  /*modules routes */
  ...danticRoutes, //dantic routes

  ...ministreRoutes, //Ministre module routes

  ...sgRoutes, //Secretaire général module routes

  ...ipaRoutes, //ipa routes

  ...itaRoutes, //ita routes

  ...senasemRoutes, //senasem routes

  ...senaficRoutes, //senafic routes

  ...dprotvRoutes, //dprotv routes

  ...dprodvRoutes, //dprodv routes

];

export default routes;
