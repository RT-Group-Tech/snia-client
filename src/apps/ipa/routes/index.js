import { beforeAuth } from "@/middlewares/auth";

const routes = [
  {
    path: "/ipa/secure",
    component: () => import("@/apps/ipa/ui/layouts"),
    name: "ipa-secure-route",
    beforeEnter: beforeAuth,
    meta: {
      authRequired: true,
    },
    redirect: { name: "ipa-dashboard-route" },
    children: [
      {
        path: "",
        name: "ipa-dashboard-route",
        component: () => import("@/apps/ipa/ui/pages/ipa.dashboard"),
        meta: {
          authRequired: true,
        },
      },
      {
        path: "/ipa/secure/collectes",
        component: () => import("@/views/public/pages/data-collect-page"),
        name: "ipa-collect-route",
        meta: {
          authRequired: true,
        },
      },
    ],
  },
];

export default routes;
