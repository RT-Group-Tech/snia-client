import MapSvg from "./svg-map";

export default {
  install: (app, options) => {
    app.component("map-svg", MapSvg);
  },
};
