<template>
    <bs-modal @submit="submitForm" id="createSemenceModal" title="Nouvelle Semence certifié" size="modal-lg">
        <template #body-content>
            <div class="row m-0">
                <div class="col-md-6">
                    <div>
                        <label class="fw-bold mb-1">Sélectionnez une culture <sup class="text-danger">*</sup></label>
                        <div class="mb-2">
                            <select class="custom-select form-control" v-model="form.culture_id" required>
                                <option value="">---Sélectionnez une culture---</option>
                                <option value="text">Culture 1</option>
                                <option value="text">Culture 2</option>
                                <option value="text">Culture 3</option>
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
                        <input type="file" @change="uploadImage" class="form-control" required>
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
            Api.creerSemence(this.form).then((result) => {
                if (result) {
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
}
</script>