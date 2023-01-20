import { createApp } from "vue";
/* dantic main app component */
import DantiApp from "./App-Dantic";
import Router from "@/router";
import routes from "./routes";
import store from "@/store";

/*app instance*/
const app = createApp(DantiApp);

/*app routes*/
app.use(Router(routes));

/*app vuex store*/
app.use(store);

/*monte l'appli sur l'identifiant dont l'ID est dantic-app */
app.mount("#app-dantic");
