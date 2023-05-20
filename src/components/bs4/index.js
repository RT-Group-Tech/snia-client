import MultiSelect from "./multi-select.vue";
import CustomModal from "./custom_modal.vue";

export default {
  install: (app, options) => {
    app.component("multi-select", MultiSelect);
    app.component("bs-modal", CustomModal);
  },
};
