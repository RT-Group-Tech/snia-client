<template>
    <bs-modal @submit="submitForm" id="publicationModal"
        title="Publication des fiches de vulgarisation et conseil phytosanitaire" size="modal-lg">
        <template #body-content>
            <div class="row m-0">
                <div class="col-md-12">
                    <div class="mb-1">
                        <label class="fw-bold mb-1">Titre <sup class="text-danger">*</sup></label>
                        <input type="text" v-model="form.libelle" class="form-control" placeholder="Entrer le titre..."
                            required>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="mb-1">
                        <label class="fw-bold mb-1">Document(pdf)<sup class="text-danger">*</sup></label>
                        <input type="file" ref="inputFile" accept="application/pdf" @change="uploadImage"
                            class="form-control" required>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="mb-1">
                        <label class="fw-bold mb-1">Tags <sup class="text-danger">*</sup></label>
                        <input type="text" v-model="form.tags" class="form-control" required>
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
                fichier: '',
                tags: ''
            }
        }
    },

    beforeMount() {
        this.cleanField();
    },

    methods: {
        cleanField() {
            this.form.fichier = '';
            this.form.libelle = '';
            this.form.tags = '';
        },

        uploadImage(event) {
            this.form.fichier = event.target.files[0];
        },

        submitForm(event) {

        }
    },
}
</script>