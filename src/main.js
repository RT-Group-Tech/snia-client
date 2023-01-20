import { createApp, getCurrentInstance } from "vue";

/*app imports */
import "@/apps/dantic";

/* const methodThatForcesUpdate = () => {
  const instance = getCurrentInstance();
  instance.proxy.forceUpdate();
}; */

/*entry app*/
import App from "./App.vue";
const app = createApp(App);
app.mount("#entry-app");
app.unmount();
