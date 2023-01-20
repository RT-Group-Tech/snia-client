import { createApp } from "vue";
/* dantic main app component */
import DantiApp from "./App-Dantic";
import routes from "./routes";
import getRouter from "@/router";

/*app instance*/
const app = createApp(DantiApp);

/*app routes*/
app.use(getRouter(routes));

/*monte l'appli sur l'identifiant dont l'ID est dantic-app */
app.mount("#app-dantic");
