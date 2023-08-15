import { beforeAuth } from "@/middlewares/auth";

const routes = [{
    path: "/senasem/secure",
    component: () =>
        import ("@/apps/senasem/ui/layouts"),
    name: "senasem-secure-route",
    beforeEnter: beforeAuth,

    children: [{
            path: "",
            name: "senasem-dashboard-route",
            component: () =>
                import ("@/apps/senasem/ui/pages/senasem.dashboard"),
            beforeEnter: beforeAuth,
        },

        {
            path: "/senasem/secure/collectes",
            component: () =>
                import ("@/views/public/pages/data-collect-page"),
            name: "senasem-collect-route",
            beforeEnter: beforeAuth,
        },
        {
            path: "/senasem/user/profile",
            component: () =>
                import ("@/views/public/pages/user-profile"),
            name: "senasem-profile-route",
            beforeEnter: beforeAuth,
        },
    ],
}, ];

export default routes;