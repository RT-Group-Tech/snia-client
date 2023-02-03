import Footer from "./footer";
import IpaTables from "./ipa-table";
import ITables from "./ita-table";

export default {
  install: (app, options) => {
    app.component("d-footer", Footer);
    app.component("ipa-table", IpaTables);
    app.component("ita-table", ITables);
  },
};
