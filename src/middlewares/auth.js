import store from "@/store";

export async function beforeAuth(to, from, next) {
  let isAuthenticated = false;
  await store.dispatch("auth/refreshLoggedUser");
  const user = store.getters["auth/GET_USER"];
  if (user !== null)
  {
    isAuthenticated = true;
  }
  if (to.name !== "login" && !isAuthenticated) {
    next({ path: "/" });
    $.notify(
      {
        icon: "fas fa-info",
        title: "Accès Interdit!",
        message: "Vous n'êtes pas connectés pour effectuer cette opération !",
      },
      {
        type: "danger",
        placement: {
          from: "bottom",
          align: "right",
        },
        time: 5000,
      }
    );
  } else next();
}

export function checkUser(from, to, next) {
  let isAuthenticated = false;
  const user = store.getters["auth/GET_USER"];
  if (user !== null) {
    isAuthenticated = true;
  }
  if (to.name !== "login" && !isAuthenticated) next({ path: "/" });
  else next();
}
