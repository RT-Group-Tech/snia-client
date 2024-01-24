import { beforeAuth } from "@/middlewares/auth";

const routes = [
  {
    path: "/ministre/secure",
    component: () => import("@/apps/ministre/ui/layouts"),
    name: "service-ministre-secure-route",
    beforeEnter: beforeAuth,
    redirect: { name: "ministre-dashboard-route" },
    children: [
      {
        path: "",
        name: "ministre-dashboard-route",
        component: () => import("@/apps/ministre/ui/pages/ministre.dashboard"),
        beforeEnter: beforeAuth,
      },
      {
        path: "/ministre/secure/collectes",
        component: () => import("@/views/public/pages/data-collect-page"),
        name: "ministre-collect-route",
        beforeEnter: beforeAuth,
      },
      {
        path: "/ministre/user/profile",
        component: () => import("@/views/public/pages/user-profile"),
        name: "ministre-profile-route",
        beforeEnter: beforeAuth,
      },
    ],
  },
];

export default routes;
