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
        path: "/dprotv/secure/collectes",
        component: () => import("@/views/public/pages/data-collect-page"),
        name: "dprotv-collect-route",
        beforeEnter: beforeAuth,
      },
    ],
  },
];

export default routes;
