import { createApp } from "vue";
import Router from "@/router";

/*app imports */
import "@/apps/dantic";

/* const methodThatForcesUpdate = () => {
  const instance = getCurrentInstance();
  instance.proxy.forceUpdate();
}; */

/*entry app*/
import App from "./App.vue";
const app = createApp(App);
const routes = [
  {
    path: "/",
    component: () => import("@/views/auth/login"),
  },
];
app.use(Router(routes));
app.mount("#entry-app");
