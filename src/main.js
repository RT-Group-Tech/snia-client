/* import { createApp } from "vue"; */
/* import Router from "@/router"; */

/*app imports */
import "@/utils/ui";
import { createApp } from "vue";
import App from "@/views/App.vue";
import Router from "@/router";
import Store from "@/store";
import Globals from "@/global";
import Components from "@/components";

/*App Module Setups imports*/
import DanticApp from "@/apps/dantic";

/*Setup perfect scroll bar*/
import PerfectScrollbar from "vue3-perfect-scrollbar";
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";

/*App instance*/
const app = createApp(App);

/*Router init*/
app.use(Router);

/*Vuex init*/
app.use(Store);

/*All Globals Prototypes*/
app.use(Globals);

/*All Components*/
app.use(Components);

/*use perfect scrollbar*/
app.use(PerfectScrollbar, {
  watchOptions: true,
});

/*Modules init*/
app.use(DanticApp);

/*Devices restrictions */
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
