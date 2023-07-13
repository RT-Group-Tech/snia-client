import { beforeAuth } from "@/middlewares/auth";

const routes = [
  {
    path: "/senafic/secure",
    component: () => import("@/apps/senafic/ui/layouts"),
    name: "senafic-secure-route",
    beforeEnter: beforeAuth,

    redirect: { name: "senafic-dashboard-route" },
    children: [
      {
        path: "",
        name: "senafic-dashboard-route",
        component: () => import("@/apps/senafic/ui/pages/senafic.dashboard"),
        beforeEnter: beforeAuth,
      },
      {
        path: "/senafic/secure/collectes",
        component: () => import("@/views/public/pages/data-collect-page"),
        name: "senafic-collect-route",
        beforeEnter: beforeAuth,
      },
    ],
  },
];

export default routes;
