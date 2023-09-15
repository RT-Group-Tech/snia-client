import { beforeAuth } from "@/middlewares/auth";

const routes = [
  {
    path: "/dprotv/secure",
    component: () => import("@/apps/dprotv/ui/layouts"),
    name: "dprotv-secure-route",
    beforeEnter: beforeAuth,

    redirect: { name: "dprotv-dashboard-route" },
    children: [
      {
        path: "",
        name: "dprotv-dashboard-route",
        component: () => import("@/apps/dprotv/ui/pages/dprotv.dashboard"),
        beforeEnter: beforeAuth,
      },
      {
        path: "/dprotv/secure/exportations",
        name: "dprotv-exportations-route",
        component: () => import("@/apps/dprotv/ui/pages/dprotv.exportations"),
        beforeEnter: beforeAuth,
      },
      {
        path: "/dprotv/secure/importations",
        name: "dprotv-importations-route",
        component: () => import("@/apps/dprotv/ui/pages/dprotv.importations"),
        beforeEnter: beforeAuth,
      },
      {
        path: "/dprotv/secure/view/alerts",
        component: () => import("@/apps/dprotv/ui/pages/dprotv.alerts"),
        name: "dprotv-alertes-route",
        beforeEnter: beforeAuth,
      },
      {
        path: "/dprotv/secure/collectes",
        component: () => import("@/views/public/pages/data-collect-page"),
        name: "dprotv-collect-route",
        beforeEnter: beforeAuth,
      },
      {
        path: "/dprotv/user/profile",
        component: () => import("@/views/public/pages/user-profile"),
        name: "dprotv-profile-route",
        beforeEnter: beforeAuth,
      },
    ],
  },
];

export default routes;
