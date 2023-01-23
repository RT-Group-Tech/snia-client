import { authorize } from "@/middlewares/auth";
const routes = [
  {
    path: "/",
    component: () => import("@/views/auth/login"),
    beforeEnter: authorize,
  },
  {
    path: "/dantic/secure",
    component: () => import("@/apps/dantic/ui/layouts"),
    name: "dantic-secure-route",
    beforeEnter: authorize,
    children: [
      {
        path: "",
        component: () => import("@/apps/dantic/ui/pages/dashboard"),
        name: "dashboard-route",
        beforeEnter: authorize,
      },
      {
        path: "/dantic/secure/ipa-ita-register",
        component: () => import("@/apps/dantic/ui/pages/ipa-ita-register"),
        name: "ipa-ita-reg-route",
        beforeEnter: authorize,
      },
      {
        path: "/dantic/secure/ipa-view",
        component: () => import("@/apps/dantic/ui/pages/ipa-view"),
        name: "ipa-view-route",
        beforeEnter: authorize,
      },
      {
        path: "/dantic/secure/ita-view",
        component: () => import("@/apps/dantic/ui/pages/ita-view"),
        name: "ita-view-route",
        beforeEnter: authorize,
      },
      {
        path: "/dantic/secure/agent-creation",
        component: () => import("@/apps/dantic/ui/pages/agent-register"),
        name: "agent-create-route",
        beforeEnter: authorize,
      },
      {
        path: "/dantic/secure/agent-view",
        component: () => import("@/apps/dantic/ui/pages/agents-view"),
        name: "agents-view-route",
        beforeEnter: authorize,
      },
    ],
  },
];
export default routes;
