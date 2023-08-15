import { beforeAuth } from "@/middlewares/auth";

const routes = [{
    path: "/dprodv/secure",
    component: () =>
        import ("@/apps/dprodv/ui/layouts"),
    name: "dprodv-secure-route",
    beforeEnter: beforeAuth,

    redirect: { name: "dprodv-dashboard-route" },
    children: [{
            path: "",
            name: "dprodv-dashboard-route",
            component: () =>
                import ("@/apps/dprodv/ui/pages/dprodv.dashboard"),
            beforeEnter: beforeAuth,
        },
        {
            path: "/dprodv/secure/collectes",
            component: () =>
                import ("@/views/public/pages/data-collect-page"),
            name: "dprodv-collect-route",
            beforeEnter: beforeAuth,
        },
        {
            path: "/dprodv/user/profile",
            component: () =>
                import ("@/views/public/pages/user-profile"),
            name: "dprodv-profile-route",
            beforeEnter: beforeAuth,
        },
    ],
}, ];

export default routes;