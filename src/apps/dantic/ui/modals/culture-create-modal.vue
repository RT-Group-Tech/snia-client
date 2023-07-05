<template>
  <bs-modal id="cultureCreateModal" title="Création des cultures" @submit.prevent="submitForm" size="modal-lg">
    <template #body-content>
      <div class="row">
        <div class="col-md-12 col-12">
          <label class="mb-3"><b>Veuillez renseigner tous les champs requis !</b></label>
          <div class="form-group form-group-default">
            <label>Culture désignation</label>
            <input v-model="form.nom" required id="Name" type="text" class="form-control"
              placeholder="Entrez la désignation de la culture...">
          </div>
          <div class="form-group form-group-default">
            <label>Catégorie culture</label>
            <select v-model="form.culture_categorie_id" required class="form-control" id="formGroupDefaultSelect">
              <option selected value="">Sélectionnez une catégorie...</option>
              <option v-for="cat in categories" :key="cat" :value="cat.culture_categorie_id">{{ cat.categorie }}</option>
            </select>
          </div>

        </div>
        <div class="col-md-6">
          <div class="form-group form-group-default">
            <label>Détail</label>
            <input v-model="form.detail" required id="detail" type="text" class="form-control"
              placeholder="Saisir le detail...">
          </div>
        </div>
        <div class="col-md-6">
          <div class=" form-group form-group-default">
            <label>Valeur</label>
            <input v-model="form.valeur" required id="detail" type="text" class="form-control"
              placeholder="Saisir la valeur...">
          </div>
        </div>
      </div>
    </template>
    <template #footer-content>
      <button id="submit-btn" type="submit" class="btn btn-success" :class="submitLoading ? 'disabled' : ''"
        style="margin-right: 4px;"> <i v-if="submitLoading" class="fa fa-spinner fa-spin" /> Soumettre les données
      </button>
      <button class="btn btn-danger" data-dismiss="modal">Fermer</button>
    </template>
  </bs-modal>
</template>

<script>
import Api from '@/apps/dantic/api'
export default {
  name: "culture-create-modal",
  data() {
    return {
      form: {
        culture_categorie_id: '',
        nom: '',
        detail: '',
        valeur: ''
      },
      submitLoading: false,
    }
  },
  computed: {
    categories() {
      return this.$store.getters['dantic/GET_CATEGORIES']
    }
  },
  methods: {
    submitForm(event) {
      this.submitLoading = true;
      Api.creerCulture(this.form, (res) => {
        console.log(JSON.stringify(res));
        this.cleanForm();
        this.submitLoading = false;
        this.$store.dispatch('voirCultures');
        Swal({
          icon: 'success',
          title: "Succès !",
          text: "Création culture effectuée avec succès !",
          showConfirmButton: false,
          timer: 3000,
        });
      })
    },

    cleanForm() {
      this.form.culture_categorie_id = '';
      this.form.nom = '';
      this.form.valeur = '';
      this.form.detail = '';
    }
  },
}
</script>
