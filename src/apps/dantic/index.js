import { createApp } from "vue";
/* dantic main app component */
import App from "./App";
import Router from "@/router";
import routes from "./routes";
import store from "@/store";
import Components from "./ui/components";
import GlobalComponents from "@/components";
import Prototypes from "../dantic/global";

/*app instance*/
const app = createApp(App);

/*app routes*/
app.use(Router(routes));

/** Before app router each check if user is authorized */
app.use(Components);
app.use(GlobalComponents);
app.use(Prototypes);

/*app vuex store*/
app.use(store);

/*monte l'appli sur l'identifiant dont l'ID est dantic-app */
app.mount("#app");
