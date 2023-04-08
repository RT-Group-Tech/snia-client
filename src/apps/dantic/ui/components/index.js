import Footer from "./src/footer";
import IpaTables from "./src/ipa-table";
import ITables from "./src/ita-table";
import SidebarItem from "./src/sidebar-item.vue";
import DashboardCard from "./src/dashboard-card.vue";

export default {
  install: (app, options) => {
    app.component("d-footer", Footer);
    app.component("ipa-table", IpaTables);
    app.component("ita-table", ITables);
    app.component("sidebar-item", SidebarItem);
    app.component("dashboard-card", DashboardCard);
  },
};
