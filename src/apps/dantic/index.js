import { createApp } from "vue";
/* dantic main app component */
import App from "./App";
import Router from "@/router";
import routes from "./routes";
import store from "@/store";
import Components from "./ui/components";
import GlobalComponents from "@/components";
import Prototypes from "@/global";

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
if (/Android/i.test(navigator.userAgent)) {
  alert("Veuillez utiliser un ordinateur pour exécuter cette plateforme !");
  app.unmount("#app");
}
if (/iPad|iPhone|iPod/i.test(navigator.userAgent)) {
  alert("Veuillez utiliser un ordinateur pour exécuter cette plateforme !");
  app.unmount("#app");
} else {
  app.mount("#app");
}
