import { beforeAuth } from "@/middlewares/auth";

const routes = [
  {
    path: "/sg/secure",
    component: () => import("@/apps/sg/ui/layouts"),
    name: "sg-secure-route",
    beforeEnter: beforeAuth,
    redirect: { name: "sg-dashboard-route" },
    children: [
      {
        path: "",
        name: "sg-dashboard-route",
        component: () => import("@/apps/sg/ui/pages/sg.dashboard"),
        beforeEnter: beforeAuth,
      },
      {
        path: "/sg/user/profile",
        component: () => import("@/views/public/pages/user-profile"),
        name: "sg-profile-route",
        beforeEnter: beforeAuth,
      },
    ],
  },
];

export default routes;
