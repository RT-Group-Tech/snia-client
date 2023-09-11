<template>
    <bs-modal @submit="submitForm" id="importationModal" title="Enregistrement importations" size="modal-lg">
        <template #body-content>
            <div class="row m-0">
                <div class="col-md-12">
                    <div class="mb-1">
                        <label class="fw-bold mb-1">Libellé produit <sup class="text-danger">*</sup></label>
                        <input type="text" v-model="form.libelle" class="form-control" placeholder="Entrer le titre..."
                            required>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="mb-1">
                        <label class="fw-bold mb-1">Quantité <sup class="text-danger">*</sup></label>
                        <input type="number" class="form-control" placeholder="Entrer la quantité..." required>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="mb-1">
                        <label class="fw-bold mb-1">Pays de provenance <sup class="text-danger">*</sup></label>
                        <select class="form-control custom-select">
                            <option label="--Sélectionnez pays--" selected></option>
                            <option value="Gabon">Gabon</option>
                            <option value="Gambie">Gambie</option>
                        </select>
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
    name: 'PublicationModal',
    data() {
        return {
            formLoading: false,
            form: {
                libelle: '',
            }
        }
    },

    beforeMount() {
        this.cleanField();
    },

    methods: {
        cleanField() {
            this.form.libelle = '';
        },

        submitForm(event) {

        }
    },
}
</script>