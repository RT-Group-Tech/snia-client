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
        adresse: "",
        province: "Kinshasa",
        territoire: "",
        fonction: "Inspecteur",
      },
      confirm: "",
    };
  },

  mounted() {
    /*create & init client side Agent DbTable*/
    AgentService.init((res) => {
      console.log(JSON.stringify(res));
    });
  },

  methods: {
    /*uploading & rendering file img*/
    upload(event) {
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
    submitAgent(event) {
      let data = this.formAgent;
      const forms = document.querySelectorAll("#form-agent");
      // Loop over them and prevent submission
      Array.from(forms).forEach((form) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          form.classList.add("was-validated");
        }

        if (form.checkValidity()) {
          if (this.formAgent.pass !== this.confirm) {
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
          } else {
            console.log(data);
            AgentService.create(data, (res) => {
              console.log(JSON.stringify(res));
            });
          }
        }
      });
    },
  },
};
