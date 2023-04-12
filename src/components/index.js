import MapSvg from "./svg-map";
import BsComponents from "./bs4";

export default {
  install: (app, options) => {
    app.component("map-svg", MapSvg);
    app.use(BsComponents);
  },
};
