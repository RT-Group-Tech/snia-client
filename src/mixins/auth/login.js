import UserService from "@/database/services/user.service";
import apidantic from "@/apps/dantic/api";

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

  /* async unmounted() {
    this.$router.go();
  }, */

  async mounted() {
    await UserService.init((res) => console.log(JSON.stringify(res)));
    await this.initDefaultUsers();
  },

  methods: {
    login() {
      let user = this.user;

      apidantic.login(user, (result) => {
        console.log("USER LOGGED IS", result);
      });
    },

    /*Login submit method*/
    loggedIn(event) {
      /***check empty form inputs before execute request @param: formId, formEvent, callback(boolean) */
      this.$validForm("form-login", event, (result, form) => {
        if (!result) {
          /*create a simple animation shake when task is failed */
          this.$animatedFailedTask("btn-login");
          /*end shake animation*/
        } else {
          let user = {
            email: this.user.email,
            password: this.user.password,
          };
          UserService.login(user, async (result) => {
            if (result) {
              await this.$store.dispatch("auth/refreshLoggedUser");
              await this.$router.push({ name: "dantic-secure-route" });
            } else {
              /*create a simple animation shake when task is failed */
              this.$animatedFailedTask("login-box");
              /*end shake animation*/
              form.reset();
              $.notify(
                {
                  icon: "fa fa-info",
                  title: "Opération echoué!",
                  message: "identifiant ou mot de passe erroné !",
                },
                {
                  type: "danger",
                  placement: {
                    from: "bottom",
                    align: "right",
                  },
                  time: 5000,
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
