<template>
  <bs-modal title="Création nouveau agent" @submit.prevent="submitAgent" id="agentModal" size="modal-xl"
    :form-novalidate="true">
    <template #body-content>
      <div class="row">
        <div class="col-md-4">
          <div class="form-group form-group-default">
            <label class="fw-extrabold">Nom <sup class="text-danger">*</sup></label>
            <input type="text" v-model="name.first" class="form-control" name="nom"
              placeholder="Saisir le nom de l'agent..." required>
            <div class="invalid-feedback">
              Nom de l'agent requis !
            </div>
          </div>

        </div>
        <div class="col-md-4">
          <div class="form-group form-group-default">
            <label class="fw-extrabold">Postnom <sup class="text-danger">*</sup></label>
            <input type="text" v-model="name.last" class="form-control" name="postnom" placeholder="Saisir postnom..."
              required>
            <div class="invalid-feedback">
              Postnom de l'agent requis !
            </div>
          </div>

        </div>
        <div class="col-md-4">
          <div class="form-group form-group-default ">
            <label class="fw-extrabold">Prénom <sup class="text-danger">*</sup></label>
            <input type="text" v-model="name.nick" class="form-control" name="prenom" placeholder="Saisir prénom..."
              required>
            <div class="invalid-feedback">
              Prénom de l'agent requis !
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group form-group-default">
            <label class="fw-extrabold">Status <sup class="text-danger">*</sup></label>
            <select class="form-control" v-model="form.statut" required>
              <option value="">------</option>
              <option value="Matricule">Matricule <sup class="text-danger">*</sup></option>
              <option value="Nouvelle unite">Nouvelle unité</option>
            </select>
            <div class="invalid-feedback">
              Sélectionnez le status de l'agent !
            </div>
          </div>

        </div>
        <div class="col-md-4">
          <div class="form-group form-group-default ">
            <label class="fw-extrabold">Grade <sup class="text-danger">*</sup></label>
            <select name="" id="" class="form-control" v-model="form.grade" required>
              <option value="">-------</option>
              <option v-for="(grade, index) in grades" :key="index" :value="grade">{{ grade }}</option>
            </select>
            <div class="invalid-feedback">
              Sélectionnez le grade de l'agent !
            </div>
          </div>

        </div>
        <div class="col-md-4">
          <div class="form-group form-group-default">
            <label class="fw-extrabold">Fonction <sup class="text-danger">*</sup></label>
            <input type="text" v-model="form.fonction" class="form-control" name="prenom" placeholder="Saisir prénom..."
              required>
            <div class="invalid-feedback">
              Fonction de l'agent requis !
            </div>
          </div>
        </div>
        <div class="col-md-4" v-if="form.statut === 'Matricule'">
          <div class="form-group form-group-default">
            <label class="fw-extrabold">Numéro Matricule <sup class="text-danger">*</sup></label>
            <input type="text" v-model="form.numero_reference" class="form-control" name="email"
              placeholder="Saisir le numéro matricule..." required>
            <div class="invalid-feedback">
              Numéro matricule de l'agent requis !
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group form-group-default">
            <label class="fw-extrabold">Sexe <sup class="text-danger">*</sup></label>
            <select name="" id="" class="form-control" v-model="form.sexe" required>
              <option value="Masculin">Masculin</option>
              <option value="Feminin">Feminin</option>
            </select>
            <div class="invalid-feedback">
              Sélectionnez le genre/sexe de l'agent !
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group form-group-default ">
            <label class="fw-extrabold">Date de naissance <sup class="text-danger">*</sup></label>
            <input type="date" class="form-control" v-model="form.date_naissance" required>
            <div class="invalid-feedback">
              Date de naissance de l'agent requis !
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group form-group-default ">
            <label class="fw-extrabold">Email <sup class="text-danger">*</sup></label>
            <input type="email" v-model="form.email" class="form-control" name="email" placeholder="Saisir email..."
              required>
            <div class="invalid-feedback">
              Adresse email de l'agent requis !
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group form-group-default">
            <label class="fw-extrabold">Téléphone <sup class="text-danger">*</sup></label>
            <input type="tel" v-model="form.telephone" class="form-control" name="telephone"
              placeholder="Saisir le n° de téléphone...(+243)" required>
            <div class="invalid-feedback">
              Numéro de téléphone de l'agent requis !
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="form-group form-group-default">
            <label class="fw-extrabold">Mot de passe <sup class="text-danger">*</sup></label>
            <input type="password" v-model="form.pass" class="form-control" name="pass"
              placeholder="Saisir le mot de passe..." required>
            <div class="invalid-feedback">
              Veuillez saisir un mot de passe pour cet agent !
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group form-group-default">
            <label class="fw-extrabold">Confirmation mot de passe <sup class="text-danger">*</sup></label>
            <input type="password" v-model="form.confirm" class="form-control" name="confirm"
              placeholder="Confirmer mot de passe..." :required="form.pass !== form.confirm || form.confirm === ''">
            <div class="invalid-feedback">
              Vous devez retaper le mot de passe attribué à l'agent !
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group form-group-default">
            <label class="fw-extrabold">Accès système <sup class="text-danger">*</sup></label>
            <select name="" id="" class="form-control" v-model="form.access" required>
              <option value="">-------</option>
              <option v-for="(ac, index) in access" :key="index" :value="ac">{{ ac }}</option>
            </select>
            <div class="invalid-feedback">
              Veuillez sélectionner un accès système pour cet agent !
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #footer-content>
      <button id="submit-btn" type="submit" class="btn btn-success" :disabled="submitLoading"> <i v-if="submitLoading"
          class="fa fa-spinner fa-spin"></i> Enregistrer Agent
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
      grades: ["Directeur ", "Chef de division", "Chef de bureau", "ATA1", "ATA2", "AGA1", "AGA2", "AA1", "AA2", "HUISSIER"],
      access: ["dantic", "ministre", "sg", "ita", "ipa", "dprotv", "dprodv", "senasem", "senafic", "tablette"],
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
        confirm: '',
        access: ''
      }
    }
  },
  methods: {
    submitAgent(event) {
      /* agent name splitting */
      this.form.nom_complet = `${this.name.first.toUpperCase()} ${this.name.last.toUpperCase()} ${this.name.nick.toLowerCase()}`;
      /*End agent name splitting*/
      this.$validForm("agentModal", event, async (result, form) => {
        if (!result) {
          this.$animatedFailedTask("submit-btn");
        }
        else {
          this.submitLoading = true;
          Api.creerAgent(this.form, (data) => {
            this.submitLoading = false;
            $("#agentModal").modal('hide')
            this.$emit('reloadData');
            this.$store.dispatch("dantic/viewAgents");
          })
        }
      });
    }
  },
  mounted() {
    /**
     * GeT ACCESS.
     */
    Api.getAccess((access)=>{
      this.access=access;
    });
  }
}
</script>
