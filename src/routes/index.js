import danticRoutes from "@/apps/dantic/routes";
import itaRoutes from "@/apps/ita/routes";

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

  /*modules routes */
  ...danticRoutes,

  ...itaRoutes,
];

export default routes;
