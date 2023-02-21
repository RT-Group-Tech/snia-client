<template>
  <teleport to='body'>
    <div class="modal animated zoomIn" id="agentModal" tabindex="-1" role="dialog" aria-labelledby="agentModalLabel"
         aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header bg-app-2">
            <h5 class="modal-title text-white fw-mediumbold" id="agentModalLabel"> <i
                class="fa fa-user-plus mr-2"></i>
              CREATION NOUVEAU AGENT</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" class="text-white">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form id="agent-form" @submit.prevent="submitAgent">
              <div class="row mt-3">
                <div class="col-md-4">
                  <div class="form-group form-group-default bg-light">
                    <label class="fw-extrabold">Nom</label>
                    <input type="text" v-model="name.first" class="form-control" name="nom"
                           placeholder="Saisir le nom de l'agent..." required>
                  </div>

                </div>
                <div class="col-md-4">
                  <div class="form-group form-group-default bg-light">
                    <label class="fw-extrabold">Postnom</label>
                    <input type="text" v-model="name.last" class="form-control" name="postnom"
                           placeholder="Saisir postnom..." required>
                  </div>

                </div>
                <div class="col-md-4">
                  <div class="form-group form-group-default bg-light">
                    <label class="fw-extrabold">Prénom</label>
                    <input type="text" v-model="name.nick" class="form-control" name="prenom"
                           placeholder="Saisir prénom..." required>
                  </div>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <div class="form-group form-group-default bg-light">
                    <label class="fw-extrabold">Email</label>
                    <input type="email" v-model="form.email" class="form-control" name="email"
                           placeholder="Saisir email..." required>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group form-group-default bg-light">
                    <label class="fw-extrabold">Téléphone</label>
                    <input type="tel" v-model="form.telephone" class="form-control" name="telephone"
                           placeholder="Saisir le n° de téléphone...(+243)" required>
                  </div>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <div class="form-group form-group-default bg-light">
                    <label class="fw-extrabold">Mot de passe</label>
                    <input type="password" v-model="form.pass" class="form-control" name="pass"
                           placeholder="Saisir mot de passe..." required>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group form-group-default bg-light">
                    <label class="fw-extrabold">Confirmation mot de passe</label>
                    <input type="password" v-model="form.confirm" class="form-control"
                           name="confirm" placeholder="Confirmer mot de passe..." required>
                  </div>
                </div>
              </div>
              <div class="text-right mt-3">
                <button id="submit-btn" type="submit" class="btn btn-success"
                        :class="submitLoading ? 'disabled' : ''" style="margin-right: 4px;"> <i
                    v-if="submitLoading" class="fa fa-spinner fa-spin" /> Enregistrer agent
                </button>
                <button class="btn btn-danger">Fermer</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import Api from "../../api";
export default {
  name: "agent-create-modal",

  data(){
    return {
      submitLoading: false,
      /* split full name */
      name: {
        first: '',
        last: '',
        nick: ''
      },
      form: {
        nom_complet: '',
        telephone: '',
        email: '',
        pass: '',
        confirm: ''
      }
    }
  },

  methods:{
    submitAgent(event) {
      /* agent name splitting */
      this.form.nom_complet = `${this.name.first.toUpperCase()} ${this.name.last.toUpperCase()} ${this.name.nick.toLowerCase()}`;
      /*End agent name splitting*/

      this.$validForm("agent-form", event, async (result, form) => {
        if (!result) {
          this.$animatedFailedTask("submit-btn");
        } else {
          if (this.form.pass !== this.form.confirm) {
            return
          }
          this.submitLoading = true;
          await Api.creerAgent(this.form, (data) => {
            this.submitLoading = false;
            $("#agentModal").modal('hide')
            console.log(data);
            this.$store.dispatch("dantic/viewAgents")
          })
        }
      });
    }
  }
}
</script>
