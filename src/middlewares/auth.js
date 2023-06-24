import store from "@/store";

export function beforeAuth(to, from, next) {
  const userToken = localStorage.getItem("userToken");
  if (userToken === undefined || userToken === null) {
    next({ name: "login" });
  } else {
    next();
  }
}

export function checkUser(from, to, next) {
  if (to.meta.authRequired) {
    const userToken = localStorage.getItem("userToken");
    if (userToken === undefined || userToken === null) {
      next({ name: "login" });
    } else {
      next();
    }
  }
  next();
}
