import animatedFailedTask from "@/utils/ring.button.error";
import validForm from "@/utils/form.validator";
import notify from "@/utils/notification";

export default {
  install: (app, options) => {
    app.config.globalProperties.$animatedFailedTask = animatedFailedTask;
    app.config.globalProperties.$validForm = validForm;
    app.config.globalProperties.$notify = notify;
  },
};
