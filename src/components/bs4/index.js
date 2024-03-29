import MultiSelect from "./src/multi-select.vue";
import CustomModal from "./src/bs_modal.vue";
import BsPopover from "./src/bs_popover.vue";
import OtpInput from "./src/pin_code";

export default {
    install: (app, options) => {
        app.component("multi-select", MultiSelect);
        app.component("bs-modal", CustomModal);
        app.component("bs-popover", BsPopover);
        app.component("pin-input", OtpInput);
    },
};