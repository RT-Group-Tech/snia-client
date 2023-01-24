import UserService from "@/database/services/user.service";

export default {
  name: "login-mixin",
  data() {
    return {
      inputType: "password",
      user: {
        email: "",
        password: "",
      },
    };
  },
  beforeUnmount() {
    this.$router.go();
  },

  async mounted() {
    await UserService.init((res) => console.log(JSON.stringify(res)));
    await this.initDefaultUsers();
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
          let user = {
            email: this.user.email,
            password: this.user.password,
          };
          UserService.login(user, (result) => {
            if (result) {
              this.$router.replace({ name: "dantic-secure-route" });
            } else {
              $.notify(
                {
                  icon: "fa fa-info",
                  title: "Opération echoué!",
                  message: "identifiant ou mot de passe erroné !",
                },
                {
                  type: "error",
                  placement: {
                    from: "bottom",
                    align: "right",
                  },
                  time: 2000,
                }
              );
            }
          });
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

    async initDefaultUsers() {
      await UserService.all(async (rows) => {
        if (rows.length === 0) {
          let users = [
            {
              name: "Gaston Delimond",
              email: "gaston@gmail.com",
              password: "12345",
            },
            {
              name: "Chris Tenday",
              email: "chris@gmail.com",
              password: "12345",
            },
            {
              name: "Lionnel Nawej",
              email: "lionnel@gmail.com",
              password: "12345",
            },
          ];
          for (let i = 0; i < users.length; i++) {
            await UserService.create(users[i], (res) => console.log(res));
          }
        }
      });
    },
  },
};
