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
    redirect: { name: "ita-dashboard-route" },
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
      {
        path: "/ita/secure/secteurs",
        component: () => import("@/apps/ita/ui/pages/ita.secteurs"),
        name: "ita-secteurs-route",
        meta: {
          authRequired: true,
        },
      },
      {
        path: "/ita/secure/reporting",
        component: () => import("@/views/public/pages/reporting-page"),
        name: "reporting-route",
        meta: {
          authRequired: true,
        },
      },
    ],
  },
];

export default routes;
