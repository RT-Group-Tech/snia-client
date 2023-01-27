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
    beforeEnter: (to, from, next) => {
      console.log("login route");
      next();
    },
  },
  {
    path: "/dantic/secure",
    component: () => import("@/apps/dantic/ui/layouts"),
    name: "dantic-secure-route",
    children: [
      {
        path: "",
        component: () => import("@/apps/dantic/ui/pages/dashboard"),
        name: "dashboard-route",
      },
      {
        path: "/dantic/secure/ipa-ita-register",
        component: () => import("@/apps/dantic/ui/pages/ipa-ita-register"),
        name: "ipa-ita-reg-route",
      },
      {
        path: "/dantic/secure/ipa-view",
        component: () => import("@/apps/dantic/ui/pages/ipa-view"),
        name: "ipa-view-route",
      },
      {
        path: "/dantic/secure/ita-view",
        component: () => import("@/apps/dantic/ui/pages/ita-view"),
        name: "ita-view-route",
      },
      {
        path: "/dantic/secure/agent-creation",
        component: () => import("@/apps/dantic/ui/pages/agent-register"),
        name: "agent-create-route",
      },
      {
        path: "/dantic/secure/agent-view",
        component: () => import("@/apps/dantic/ui/pages/agents-view"),
        name: "agents-view-route",
      },
    ],
  },
];
export default routes;
