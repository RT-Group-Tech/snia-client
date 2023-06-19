import MapSvg from "./others/svg-map";
import GroupCaption from "./others/group-caption";
import SubmitBtn from "./others/submit-btn";
import BsComponents from "./bs4";

export default {
  install: (app, options) => {
    app.component("map-svg", MapSvg);
    app.component("group-caption", GroupCaption);
    app.component("submit-btn", SubmitBtn);
    app.use(BsComponents);
  },
};
