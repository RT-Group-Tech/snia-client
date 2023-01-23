import Footer from "./footer";
import IpaTables from "./ipa-expanded-list";

export default {
  install: (app, options) => {
    app.component("d-footer", Footer);
    app.component("ipa-table", IpaTables);
  },
};
