<template>
  <bs-modal title="Création nouveau agent" @submit.prevent="submitAgent" id="agentModal" size="modal-xl">
    <template #body-content>
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
            <input type="text" v-model="name.last" class="form-control" name="postnom" placeholder="Saisir postnom..."
              required>
          </div>

        </div>
        <div class="col-md-4">
          <div class="form-group form-group-default bg-light">
            <label class="fw-extrabold">Prénom</label>
            <input type="text" v-model="name.nick" class="form-control" name="prenom" placeholder="Saisir prénom..."
              required>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-4">
          <div class="form-group form-group-default bg-light">
            <label class="fw-extrabold">Statut</label>
            <select name="" id="" class="form-control" v-model="form.statut">
              <option value="">------</option>
              <option value="Matricule">Matricule</option>
              <option value="Nouvelle unite">Nouvelle unité</option>
            </select>
          </div>

        </div>
        <div class="col-md-4">
          <div class="form-group form-group-default bg-light">
            <label class="fw-extrabold">Grade</label>
            <select name="" id="" class="form-control" v-model="form.grade">
              <option value="">-------</option>
              <option v-for="(grade, index) in grades" :key="index" :value="grade">{{ grade }}</option>
            </select>
          </div>

        </div>
        <div class="col-md-4">
          <div class="form-group form-group-default bg-light">
            <label class="fw-extrabold">Fonction</label>
            <input type="text" v-model="form.fonction" class="form-control" name="prenom" placeholder="Saisir prénom..."
              required>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-4" v-if="form.statut === 'Matricule'">
          <div class="form-group form-group-default bg-light">
            <label class="fw-extrabold">Numéro Matricule</label>
            <input type="text" v-model="form.numero_reference" class="form-control" name="email"
              placeholder="Saisir le numéro matricule..." required>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group form-group-default bg-light">
            <label class="fw-extrabold">Sexe</label>
            <select name="" id="" class="form-control" v-model="form.sexe">
              <option value="Masculin">Masculin</option>
              <option value="Feminin">Feminin</option>
            </select>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group form-group-default bg-light">
            <label class="fw-extrabold">Date de naissance</label>
            <input type="date" class="form-control" v-model="form.date_naissance">
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-6">
          <div class="form-group form-group-default bg-light">
            <label class="fw-extrabold">Email</label>
            <input type="email" v-model="form.email" class="form-control" name="email" placeholder="Saisir email..."
              required>
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
              placeholder="Saisir le mot de passe..." required>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group form-group-default bg-light">
            <label class="fw-extrabold">Confirmation mot de passe</label>
            <input type="password" v-model="form.confirm" class="form-control" name="confirm"
              placeholder="Confirmer mot de passe..." required>
          </div>
        </div>
      </div>
    </template>
    <template #footer-content>
      <button id="submit-btn" type="submit" class="btn btn-success" :class="submitLoading ? 'disabled' : ''"
        style="margin-right: 4px;"> <i v-if="submitLoading" class="fa fa-spinner fa-spin" /> Enregistrer Agent
      </button>
      <button class="btn btn-danger" data-dismiss="modal">Fermer</button>
    </template>
  </bs-modal>
</template>

<script>
import Api from "../../api";
export default {
  name: "agent-create-modal",
  data() {
    return {
      submitLoading: false,
      /* split full name */
      name: {
        first: '',
        last: '',
        nick: ''
      },
      grades: ["Grade 1", "Grade 2"],
      form: {
        nom_complet: '',
        telephone: '',
        statut: 'Matricule',
        fonction: '',
        grade: '',
        sexe: 'Masculin',
        date_naissance: '',
        numero_reference: '',
        email: '',
        pass: '',
        confirm: ''
      }
    }
  },
  methods: {
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
