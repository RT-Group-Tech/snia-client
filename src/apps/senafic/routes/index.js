import { beforeAuth } from "@/middlewares/auth";

const routes = [
  {
    path: "/senafic/secure",
    component: () => import("@/apps/senafic/ui/layouts"),
    name: "senafic-secure-route",
    beforeEnter: beforeAuth,
    meta: {
      authRequired: true,
    },
    redirect: { name: "senafic-dashboard-route" },
    children: [
      {
        path: "",
        name: "senafic-dashboard-route",
        component: () => import("@/apps/senafic/ui/pages/senafic.dashboard"),
        meta: {
          authRequired: true,
        },
      },
      {
        path: "/senafic/secure/collectes",
        component: () => import("@/views/public/pages/data-collect-page"),
        name: "senafic-collect-route",
        meta: {
          authRequired: true,
        },
      },
    ],
  },
];

export default routes;
