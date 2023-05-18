import danticRoutes from "@/apps/dantic/routes";
import itaRoutes from "@/apps/ita/routes";
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
    path: "/choices",
    name: "choices",
    component: () => import("@/views/auth/module_choice"),
    /* beforeEnter: beforeAuth,
        meta: {
          authRequired: true,
        }, */
  },

  /*modules routes */
  ...danticRoutes,

  ...itaRoutes,
];

export default routes;
