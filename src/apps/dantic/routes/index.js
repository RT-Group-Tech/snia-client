import { beforeAuth } from "@/middlewares/auth";
const routes = [
  //redirect to home
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/public/error/404"),
  },

  {
    path: "/",
    name: "login",
    component: () => import("@/views/auth/login"),
  },
  {
    path: "/dantic/secure",
    component: () => import("@/apps/dantic/ui/layouts"),
    name: "dantic-secure-route",
    beforeEnter: beforeAuth,
    meta: {
      authRequired: true,
    },
    children: [
      {
        path: "",
        component: () => import("@/apps/dantic/ui/pages/dashboard"),
        name: "dashboard-route",
        meta: {
          authRequired: true,
        },
      },
      {
        path: "/dantic/secure/ipa-ita-register",
        component: () => import("@/apps/dantic/ui/pages/ipa-ita-register"),
        name: "ipa-ita-reg-route",
        meta: {
          authRequired: true,
        },
      },
      {
        path: "/dantic/secure/ipa-view",
        component: () => import("@/apps/dantic/ui/pages/ipa-view"),
        name: "ipa-view-route",
        meta: {
          authRequired: true,
        },
      },
      {
        path: "/dantic/secure/ita-view",
        component: () => import("@/apps/dantic/ui/pages/ita-view"),
        name: "ita-view-route",
        meta: {
          authRequired: true,
        },
      },
      {
        path: "/dantic/secure/agents",
        component: () => import("@/apps/dantic/ui/pages/agents-page"),
        name: "agents-route",
        meta: {
          authRequired: true,
        },
      },
      {
        path: "/dantic/secure/agent-view",
        component: () => import("@/apps/dantic/ui/pages/agents-page"),
        name: "agents-view-route",
        meta: {
          authRequired: true,
        },
      },
      {
        path: "/dantic/secure/test",
        component: () => import("@/apps/dantic/ui/test"),
        name: "test-route",
        meta: {
          authRequired: true,
        },
      },
      {
        path: "/dantic/secure/config.formulaires",
        component: () => import("@/apps/dantic/ui/pages/config-form-page"),
        name: "config-form-route",
        meta: {
          authRequired: true,
        },
      },
    ],
  },
];
export default routes;
