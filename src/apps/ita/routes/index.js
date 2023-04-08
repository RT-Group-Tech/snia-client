import { beforeAuth } from "@/middlewares/auth";

const routes = [
  {
    path: "/ita/secure/",
    component: () => import("@/apps/ita/ui/layouts"),
    name: "ita-secure-route",
    children: [
      {
        path: "",
        name: "ita-dashboard-route",
        component: () => import("@/apps/ita/ui/pages/ita.dashboard"),
      },
    ],
  },
];

export default routes;
