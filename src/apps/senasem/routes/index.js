import { beforeAuth } from "@/middlewares/auth";

const routes = [
  {
    path: "/senasem/secure",
    component: () => import("@/apps/senasem/ui/layouts"),
    name: "senasem-secure-route",
    beforeEnter: beforeAuth,
    meta: {
      authRequired: true,
    },
    children: [
      {
        path: "",
        name: "senasem-dashboard-route",
        component: () => import("@/apps/senasem/ui/pages/senasem.dashboard"),
        meta: {
          authRequired: true,
        },
      },

      {
        path: "/senasem/secure/collectes",
        component: () => import("@/views/public/pages/data-collect-page"),
        name: "senasem-collect-route",
        meta: {
          authRequired: true,
        },
      },
    ],
  },
];

export default routes;
