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
    ],
  },
];

export default routes;
