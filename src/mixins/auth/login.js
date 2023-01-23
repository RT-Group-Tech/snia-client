export default {
  name: "login-mixin",
  data() {
    return {
      inputType: "password",
      form: {
        email: "",
        pass: "",
      },
    };
  },

  methods: {
    /*Login submit method*/
    loggedIn(event) {
      console.clear();
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.querySelectorAll("#form-login");
      // Loop over them and prevent submission
      Array.from(forms).forEach((form) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          form.classList.add("was-validated");
        }

        if (form.checkValidity()) {
          console.log("form validated");
        }
      });
    },

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
