import store from "@/store";
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
    beforeEnter: (to, from, next) => {
      const user = store.getters.GET_USER;
      if (user === null || user === undefined) {
        next({ name: "login" });
      } else {
        next();
      }
    },
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
        path: "/dantic/secure/agent-creation",
        component: () => import("@/apps/dantic/ui/pages/agent-register"),
        name: "agent-create-route",
        meta: {
          authRequired: true,
        },
      },
      {
        path: "/dantic/secure/agent-view",
        component: () => import("@/apps/dantic/ui/pages/agents-view"),
        name: "agents-view-route",
        meta: {
          authRequired: true,
        },
      },
    ],
  },
];
export default routes;
