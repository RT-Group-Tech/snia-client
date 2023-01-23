export default {
  name: "Agent-Register-Mixin",

  data() {
    return {
      formAgent: {
        nom_complet: "",
        prenom: "",
        photo: "",
        email: "",
        telephone: "",
        password: "",
        confirm: "",
        territoire: "",
        adresse: "",
      },
    };
  },

  methods: {
    /*uploading & rendering file img*/
    upload(event) {
      //fileSet = this.$refs.fichier.files[0];
      let file = event.target.files[0];
      if (file.size > 3048576) {
        $.notify(
          {
            icon: "fa fa-info",
            title: "Avertissement",
            message: "Image trop large...!",
          },
          {
            type: "warning",
            placement: {
              from: "bottom",
              align: "right",
            },
            time: 1000,
          }
        );
      } else {
        let reader = new FileReader();
        reader.onload = (event) => {
          this.agentImg = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    },

    /*This method allow to create new user*/
    submitAgent(event) {
      const forms = document.querySelectorAll("#form-agent");
      // Loop over them and prevent submission
      Array.from(forms).forEach((form) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          form.classList.add("was-validated");
        }

        if (form.checkValidity()) {
          if (this.formAgent.password !== this.formAgent.confirm) {
            $.notify(
              {
                icon: "fa fa-info",
                title: "Mot de passe incorrect",
                message: "vous devez confirmer votre mot de passe !",
              },
              {
                type: "error",
                placement: {
                  from: "bottom",
                  align: "right",
                },
                time: 1000,
              }
            );
          }
        }
      });
    },
  },
};
