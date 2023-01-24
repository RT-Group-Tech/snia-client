export default function authorize(to, from, next) {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    let userToken = localStorage.getItem("AUTH_TOKEN");
    if (userToken === undefined && userToken === null) {
      next({ name: "login" });
    } else {
      next();
    }
  } else {
    next();
  }
}
