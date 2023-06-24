import store from "@/store";

export function beforeAuth(to, from, next) {
  const user = store.getters["auth/GET_USER"];
  if (user === null || user === undefined) {
    next({ name: "login" });
  } else {
    next();
  }
}

export function checkUser(from, to, next) {
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
