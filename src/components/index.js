import MapSvg from "./others/svg-map";
import GroupCaption from "./others/group-caption";
import BsComponents from "./bs4";

export default {
  install: (app, options) => {
    app.component("map-svg", MapSvg);
    app.component("group-caption", GroupCaption);
    app.use(BsComponents);
  },
};
