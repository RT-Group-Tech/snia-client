import UserService from "@/database/services/user.service";
import Api from "@/apps/dantic/api";
import GlobalApi from "@/api/index";

export default {
  name: "login-mixin",
  data() {
    return {
      inputType: "password",
      loginLoading: false,
      user: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    loggedIn(event) {
      /***check empty form inputs before execute request @param: formId, formEvent, callback(boolean) */
      this.$validForm("form-login", event, (result, form) => {
        if (!result) {
          /*create a simple animation shake when task is failed */
          this.$animatedFailedTask("btn-login");
          /*end shake animation*/
        } else {
          let user = {
            identifiant: this.user.email,
            pass: this.user.password,
          };

          /**
           * Login request
           */
          this.loginLoading = true;
          GlobalApi.login(user)
            .then(async (result) => {
              this.loginLoading = false;
              if (
                result.reponse !== undefined &&
                result.reponse.status === "success"
              ) {
                let reponse = result.reponse;
                let access = reponse.data.access.access;
                this.$store.dispatch("auth/refreshLoggedUser");
                this.$router.push({
                  name: `${access}-secure-route`,
                });
              } else {
                /*create a simple animation shake when task is failed */
                this.$animatedFailedTask("login-box");
                /*end shake animation*/
                form.reset();
                $.notify(
                  {
                    icon: "fas fa-info",
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
            })
            .catch((e) => {
              this.loginLoading = false;
              $.notify(
                {
                  icon: "fas fa-info",
                  title: "Opération echoué!",
                  message:
                    "Une erreur est survenue lors de traitement des informations de l'utilisateur !",
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
            });
        }
      });
    },
    /*Login submit method*/
    loggedIn_old(event) {
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

          UserService.login(user, async (result, res) => {
            if (result) {
              await this.$store.dispatch("auth/refreshLoggedUser");
              this.$router.push({
                name: "modules",
              });
            } else {
              /*create a simple animation shake when task is failed */
              this.$animatedFailedTask("login-box");
              /*end shake animation*/
              form.reset();
              $.notify(
                {
                  icon: "fas fa-info",
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

    /*async initDefaultUsers() {
                                                                                                                  localStorage.clear("userToken");
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
                                                                                                                          name: "Tenday Chris",
                                                                                                                          email: "chris@ita.com",
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
                                                                                                                },*/
  },
};
