export default {
  name: "login-mixins",

  data() {
    return {
      inputType: "password",
    };
  },

  methods: {
    /*SHOW HIDE password*/
    toggleVisibility() {
      if (this.inputType === "password") {
        this.inputType = "text";
      } else {
        this.inputType = "password";
      }
    },
    showMessage() {
      $.notify(
        {
          icon: "flaticon-alarm-1",
          title: "Info",
          message: "Message is still here...",
        },
        {
          type: "success",
          placement: {
            from: "bottom",
            align: "right",
          },
          time: 1000,
        }
      );
    },
  },
};
