import { createApp } from "vue";
/* dantic main app component */
import Entry from "./Entry";
import Router from "@/router";
import routes from "./routes";
import store from "@/store";
import Components from "./ui/components";

/*app instance*/
const app = createApp(Entry);

/*app routes*/
app.use(Router(routes));
app.use(Components);

/*app vuex store*/
app.use(store);

/*monte l'appli sur l'identifiant dont l'ID est dantic-app */
app.mount("#app-dantic");
