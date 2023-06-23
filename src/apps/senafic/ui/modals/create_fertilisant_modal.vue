<template>
    <bs-modal @submit="submitForm" id="createFertilisantModal" title="Nouveau fertilisant" size="modal-lg">
        <template #body-content>
            <div class="row m-0">

                <div class="col-md-12">
                    <div class="mb-1">
                        <label class="fw-bold mb-1">Libellé du fertilisant <sup class="text-danger">*</sup></label>
                        <input type="text" v-model="form.libelle" class="form-control"
                            placeholder="Entrer le libellé du fertilisant..." required>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="mb-1">
                        <label class="fw-bold mb-1">L'image du fertilisant <sup class="text-danger">*</sup></label>
                        <input type="file" ref="inputFile" @change="uploadImage" class="form-control" required>
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
    name: 'CreateFertilisantModal',
    data() {
        return {
            formLoading: false,
            form: {
                libelle: '',
                image: ''
            }
        }
    },

    methods: {
        cleanField() {
            this.form.image = '';
            this.form.libelle = '';
        },

        uploadImage(event) {
            this.form.image = event.target.files[0];
        },

        submitForm(event) {
            this.formLoading = true;
            Api.creerFertilisant(this.form).then((result) => {
                this.formLoading = false;
                if (result) {
                    this.cleanField();
                    this.$refs.inputFile.value = null;
                    this.$store.dispatch("senafic/viewFertilisants");
                    Swal({
                        icon: 'success',
                        title: 'Effectué avec succès !',
                        text: 'Le nouveau fertilisant a été ajouté avec success !',
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
}
</script>