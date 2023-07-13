import { beforeAuth } from "@/middlewares/auth";
const routes = [
  //redirect to home
  {
    path: "/dantic/secure",
    component: () => import("@/apps/dantic/ui/layouts"),
    name: "dantic-secure-route",
    beforeEnter: beforeAuth,
    redirect: { name: "dashboard-route" },
    children: [
      {
        path: "",
        component: () => import("@/apps/dantic/ui/pages/dashboard"),
        name: "dashboard-route",
        beforeEnter: beforeAuth,
      },
      {
        path: "/dantic/secure/ipa-view",
        component: () => import("@/apps/dantic/ui/pages/ipa-view"),
        name: "ipa-view-route",
        beforeEnter: beforeAuth,
      },
      {
        path: "/dantic/secure/ita-view",
        component: () => import("@/apps/dantic/ui/pages/ita-view"),
        name: "ita-view-route",
        beforeEnter: beforeAuth,
      },
      {
        path: "/dantic/secure/agents",
        component: () => import("@/apps/dantic/ui/pages/agents-page"),
        name: "agents-route",
        beforeEnter: beforeAuth,
      },
      {
        path: "/dantic/secure/agent-view",
        component: () => import("@/apps/dantic/ui/pages/agents-page"),
        name: "agents-view-route",
        beforeEnter: beforeAuth,
      },
      {
        path: "/dantic/secure/test",
        component: () => import("@/apps/dantic/ui/test"),
        name: "test-route",
        beforeEnter: beforeAuth,
      },
      {
        path: "/dantic/secure/config.formulaires",
        component: () => import("@/apps/dantic/ui/pages/config-form-page"),
        name: "config-form-route",
        beforeEnter: beforeAuth,
      },
      {
        path: "/dantic/secure/cultures",
        component: () => import("@/apps/dantic/ui/pages/cultures-page.vue"),
        name: "culture-route",
        beforeEnter: beforeAuth,
      },
      {
        path: "/dantic/secure/collectes",
        component: () => import("@/views/public/pages/data-collect-page"),
        name: "dantic-collect-route",
        beforeEnter: beforeAuth,
      },
    ],
  },
];
export default routes;
