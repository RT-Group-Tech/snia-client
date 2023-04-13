import { beforeAuth } from "@/middlewares/auth";

const routes = [
  {
    path: "/ita/secure",
    component: () => import("@/apps/ita/ui/layouts"),
    name: "ita-secure-route",
    beforeEnter: beforeAuth,
    meta: {
      authRequired: true,
    },
    children: [
      {
        path: "",
        name: "ita-dashboard-route",
        component: () => import("@/apps/ita/ui/pages/ita.dashboard"),
        meta: {
          authRequired: true,
        },
      },
      {
        path: "/ita/secure/collectes",
        component: () => import("@/views/public/pages/data-collect-page"),
        name: "ita-collect-route",
        meta: {
          authRequired: true,
        },
      },
    ],
  },
];

export default routes;
