<template>
    <bs-modal @submit="submitForm" id="createSemenceModal" title="Nouvelle Semence certifié" size="modal-lg">
        <template #body-content>
            <div class="row m-0">
                <div class="col-md-6">
                    <div>
                        <label class="fw-bold mb-1">Sélectionnez une culture <sup class="text-danger">*</sup></label>
                        <div class="mb-2">
                            <select class="custom-select form-control" v-model="form.culture_id" required>
                                <option value="" selected>---Sélectionnez une culture---</option>
                                <option v-for="(culture, index) in cultures" :key="index" :value="culture.culture_id">{{
                                    culture.nom }}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="mb-1">
                        <label class="fw-bold mb-1">Libellé de la semence <sup class="text-danger">*</sup></label>
                        <input type="text" v-model="form.libelle" class="form-control"
                            placeholder="Entrer le libellé de la semence..." required>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="mb-1">
                        <label class="fw-bold mb-1">L'image de la semence <sup class="text-danger">*</sup></label>
                        <input type="file" ref="fileInput" @change="uploadImage" class="form-control" required>
                    </div>
                </div>
            </div>
        </template>
        <template #footer-content>
            <button type="submit" :disabled="formLoading" id="forms-submit-btn" class="btn btn-success mr-1"><i
                    v-if="formLoading" class="fa fa-spinner fa-spin mr-2"></i>Soumettre les données</button>
            <button type="button" class="btn btn-danger" data-dismiss="modal" @click.prevent="cleanField">Fermer</button>
        </template>
    </bs-modal>
</template>

<script>
import Api from "../../api"
export default {
    name: 'CreateSemenceModal',
    data() {
        return {
            formLoading: false,
            form: {
                libelle: '',
                culture_id: '',
                image: ''
            }
        }
    },

    beforeMount() {
        this.cleanField();
    },

    methods: {
        cleanField() {
            this.form.image = '';
            this.form.culture_id = '';
            this.form.libelle = '';
        },

        uploadImage(event) {
            this.form.image = event.target.files[0];
        },

        submitForm(event) {
            this.formLoading = true;
            Api.creerSemence(this.form).then((result) => {
                this.formLoading = false;
                if (result) {
                    this.cleanField();
                    this.$refs.fileInput.value = null;
                    this.$store.dispatch('senasem/viewSemences');
                    Swal({
                        icon: 'success',
                        title: 'Effectué avec succès !',
                        text: 'La nouvelle semence a été créée avec success !',
                        timer: 3000,
                        showConfirmButton: false,
                    });
                }
            })
                .catch((e) => {
                    this.formLoading = false;
                    Swal({
                        icon: 'warning',
                        title: 'Echec de l\'Opération !',
                        text: 'Une erreur est servenue lors de l\'envoi de données au serveur!',
                        timer: 3000,
                        showConfirmButton: false,
                    });
                })
        }
    },

    computed: {
        cultures() {
            return this.$store.getters.GET_CULTURES
        }
    },
}
</script>