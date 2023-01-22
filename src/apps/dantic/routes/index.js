import { authorize } from "@/middlewares/auth";

const routes = [
  {
    path: "/",
    component: () => import("@/views/auth/login"),
    beforeEnter: authorize,
  },
  {
    path: "/dantic-home",
    component: () => import("@/apps/dantic/ui/layouts"),
    name: "home-secure-dantic-route",
    beforeEnter: authorize,
    children: [
      {
        path: "",
        component: () => import("@/apps/dantic/ui/pages/dashboard"),
        name: "dashboard-route",
        beforeEnter: authorize,
      },
    ],
  },
];
export default routes;
