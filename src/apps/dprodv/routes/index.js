import { beforeAuth } from "@/middlewares/auth";

const routes = [{
    path: "/dprodv/secure",
    component: () =>
        import ("@/apps/dprodv/ui/layouts"),
    name: "dprodv-secure-route",
    beforeEnter: beforeAuth,
    meta: {
        authRequired: true,
    },
    redirect: { name: "dprodv-dashboard-route" },
    children: [{
            path: "",
            name: "dprodv-dashboard-route",
            component: () =>
                import ("@/apps/dprodv/ui/pages/dprodv.dashboard"),
            meta: {
                authRequired: true,
            },
        },
        {
            path: "/dprodv/secure/collectes",
            component: () =>
                import ("@/views/public/pages/data-collect-page"),
            name: "dprodv-collect-route",
            meta: {
                authRequired: true,
            },
        },
    ],
}, ];

export default routes;