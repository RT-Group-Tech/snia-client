import store from "@/store";

export function beforeAuth(to, from, next) {
    const user = store.getters["auth/GET_USER"];
    if (user === null || user === undefined) {
        next({ name: "login" });
    } else {
        next();
    }
    if (user === null || user === undefined) {
        next({ name: "login" });
    } else {
        next();
    }
}

export function checkUser(from, to, next) {
    console.log("check user is called");
    if (to.meta.authRequired) {
        const user = store.getters["auth/GET_USER"];
        if (user === null || user === undefined) {
            next({ name: "login" });
        } else {
            next();
        }
    }
    next();
}