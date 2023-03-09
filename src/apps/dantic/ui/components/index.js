import Footer from "./footer";
import IpaTables from "./ipa-table";
import ITables from "./ita-table";
import SidebarItem from "./sidebar-item.vue";
import DashboardCard from "./dashboard-card.vue";

export default {
  install: (app, options) => {
    app.component("d-footer", Footer);
    app.component("ipa-table", IpaTables);
    app.component("ita-table", ITables);
    app.component("sidebar-item", SidebarItem);
    app.component("dashboard-card", DashboardCard);
  },
};
