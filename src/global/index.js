import animatedFailedTask from "@/utils/ring.button.error";
import validForm from "@/utils/form.validator";
import notify from "@/utils/notification";
import "sweetalert2/dist/sweetalert2.min.css";
import VueSweetalert2 from "vue-sweetalert2";

export default {
  install: (app, options) => {
    app.config.globalProperties.$animatedFailedTask = animatedFailedTask;
    app.config.globalProperties.$validForm = validForm;
    app.config.globalProperties.$notify = notify;
    app.use(VueSweetalert2);

    window.Swal = app.config.globalProperties.$swal;
    app.config.globalProperties.$initBsTooltip = () => {
      $(document).ready(() => {
        $('[data-toggle="tooltip"]').tooltip();
      });
    };

    app.config.globalProperties.$filters = {
      sortLength(text, length, suffix) {
        var sorted =
          text.length > length ? text.substring(0, length) + suffix : text;
        return sorted;
      },

      capitalize(text) {
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
      },
    };
  },
};
