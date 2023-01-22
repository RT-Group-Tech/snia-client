import { createApp } from "vue";
/* import Router from "@/router"; */

/*app imports */
import "@/apps/dantic";
import "expose-loader?exposes=$,jQuery!jquery";
/* const methodThatForcesUpdate = () => {
  const instance = getCurrentInstance();
  instance.proxy.forceUpdate();
}; */

/*entry app*/
import App from "./App.vue";
const app = createApp(App);
app.mount("#entry-app");
app.unmount();
