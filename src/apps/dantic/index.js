import { createApp } from "vue";
/* dantic main app component */
import Entry from "./Entry";
import Router from "@/router";
import routes from "./routes";
import store from "@/store";
import Components from "./ui/components";
import GlobalComponents from "@/components";

/*auth middleware */
import { authorize } from "@/middlewares/auth";
/*app instance*/
const app = createApp(Entry);

/*app routes*/
app.use(Router(routes));

/** Before app router each check if user is authorized */
app.use(Components);
app.use(GlobalComponents);

/*app vuex store*/
app.use(store);

/*monte l'appli sur l'identifiant dont l'ID est dantic-app */
app.mount("#app-dantic");
