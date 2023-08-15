import { beforeAuth } from "@/middlewares/auth";

const routes = [{
    path: "/ipa/secure",
    component: () =>
        import ("@/apps/ipa/ui/layouts"),
    name: "ipa-secure-route",
    beforeEnter: beforeAuth,
    redirect: { name: "ipa-dashboard-route" },
    children: [{
            path: "",
            name: "ipa-dashboard-route",
            component: () =>
                import ("@/apps/ipa/ui/pages/ipa.dashboard"),
            beforeEnter: beforeAuth,
        },
        {
            path: "/ipa/secure/collectes",
            component: () =>
                import ("@/views/public/pages/data-collect-page"),
            name: "ipa-collect-route",
            beforeEnter: beforeAuth,
        },
        {
            path: "/ipa/user/profile",
            component: () =>
                import ("@/views/public/pages/user-profile"),
            name: "ipa-profile-route",
            beforeEnter: beforeAuth,
        },
    ],
}, ];

export default routes;