import AgentService from "@/database/services/dantic/agent.service";
export default {
  name: "Agent-Register-Mixin",
  data() {
    return {
      formAgent: {
        nom: "",
        prenom: "",
        photo: "",
        email: "",
        telephone: "",
        pass: "",
        adresse: "adresse",
        province: "Kinshasa",
        territoire: "",
        fonction: "Inspecteur",
      },
      confirm: "",
    };
  },

  methods: {
    /*uploading & rendering file img*/
    upload(event) {
      //this.$refs.agentFile.files[0];
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
      this.formAgent.photo = file.name;
    },

    /*This method allow to create new user*/
    createAgent(event) {
      let data = this.formAgent;
      let territoire = $("#territoireSelect").val();
      data.territoire = territoire;
      const forms = document.querySelectorAll("#form-agent");
      // Loop over them and prevent submission
      Array.from(forms).forEach((form) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          form.classList.add("was-validated");
        }

        if (form.checkValidity()) {
          if (data.pass !== this.confirm) {
            $.notify(
              {
                icon: "fa fa-info",
                title: "Erreur",
                message: "Vous devez confirmer votre mot de passe ...",
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
            return;
          }

          AgentService.create(data, (res) => {
            AgentService.getAll((result) => {
              console.log(result);
            });
            form.reset();
            $.notify(
              {
                icon: "fa fa-check-double",
                title: "Succès",
                message: "Nouveau agent créé avec succès !",
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
          });
        }
      });
    },
  },
};
