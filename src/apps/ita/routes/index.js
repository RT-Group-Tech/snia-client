import { beforeAuth } from "@/middlewares/auth";

const routes = [{
    path: "/ita/secure",
    component: () =>
        import ("@/apps/ita/ui/layouts"),
    name: "ita-secure-route",
    beforeEnter: beforeAuth,

    redirect: { name: "ita-dashboard-route" },
    children: [{
            path: "",
            name: "ita-dashboard-route",
            component: () =>
                import ("@/apps/ita/ui/pages/ita.dashboard"),
            beforeEnter: beforeAuth,
        },
        {
            path: "/ita/secure/collectes",
            component: () =>
                import ("@/views/public/pages/data-collect-page"),
            name: "ita-collect-route",
            beforeEnter: beforeAuth,
        },
        {
            path: "/ita/secure/secteurs",
            component: () =>
                import ("@/apps/ita/ui/pages/ita.secteurs"),
            name: "ita-secteurs-route",
            beforeEnter: beforeAuth,
        },
        {
            path: "/ita/secure/reporting",
            component: () =>
                import ("@/views/public/pages/reporting-page"),
            name: "reporting-route",
            beforeEnter: beforeAuth,
        },
        {
            path: "/ita/user/profile/:task",
            component: () =>
                import ("@/views/public/pages/user-profile"),
            name: "ITA-MWEKA-profile-route",
            beforeEnter: beforeAuth,
        },
        {
            path: "/ita/user/profile/:task",
            component: () =>
                import ("@/views/public/pages/user-profile"),
            name: "ITA-DEKESE-profile-route",
            beforeEnter: beforeAuth,
        },
        {
            path: "/ita/user/profile/:task",
            component: () =>
                import ("@/views/public/pages/user-profile"),
            name: "ITA-KAMONIA-profile-route",
            beforeEnter: beforeAuth,
        },
        {
            path: "/ita/user/profile/:task",
            component: () =>
                import ("@/views/public/pages/user-profile"),
            name: "ITA-KASENGA-profile-route",
            beforeEnter: beforeAuth,
        },
        {
            path: "/ita/user/profile/:task",
            component: () =>
                import ("@/views/public/pages/user-profile"),
            name: "ITA-LUEBO-profile-route",
            beforeEnter: beforeAuth,
        },
        {
            path: "/ita/user/profile/:task",
            component: () =>
                import ("@/views/public/pages/user-profile"),
            name: "ITA-MITWABA-profile-route",
            beforeEnter: beforeAuth,
        },
        {
            path: "/ita/user/profile/:task",
            component: () =>
                import ("@/views/public/pages/user-profile"),
            name: "ITA-PWETO-profile-route",
            beforeEnter: beforeAuth,
        },
        {
            path: "/ita/user/profile/:task",
            component: () =>
                import ("@/views/public/pages/user-profile"),
            name: "ITA-SAKANIA-profile-route",
            beforeEnter: beforeAuth,
        },



    ],
}, ];

export default routes;