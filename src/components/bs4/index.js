import MultiSelect from "./multi-select.vue";

export default {
  install: (app, options) => {
    app.component("multi-select", MultiSelect);
  },
};
