import animatedFailedTask from "@/utils/ring.button.error";
import validForm from "@/utils/form.validator";

export default {
  install: (app, options) => {
    app.config.globalProperties.$animatedFailedTask = animatedFailedTask;
    app.config.globalProperties.$validForm = validForm;
  },
};
