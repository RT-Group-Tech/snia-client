import MapSvg from "./others/svg-map";
import GroupCaption from "./others/group-caption";
import SubmitBtn from "./others/submit-btn";
import UserMenu from "./others/user-menu";
import BsComponents from "./bs4";

export default {
  install: (app, options) => {
    app.component("map-svg", MapSvg);
    app.component("group-caption", GroupCaption);
    app.component("submit-btn", SubmitBtn);
    app.component("user-menu", UserMenu);
    app.use(BsComponents);
  },
};
