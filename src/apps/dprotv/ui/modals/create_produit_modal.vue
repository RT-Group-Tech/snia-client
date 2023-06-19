<template>
    <bs-modal @submit="submitForm" id="createProduitModal" title="Nouveau produit phyto sanitaire" size="modal-lg">
        <template #body-content>
            <div class="row m-0">

                <div class="col-md-12">
                    <div class="mb-1">
                        <label class="fw-bold mb-1">Libellé du produit phytosanitaires <sup
                                class="text-danger">*</sup></label>
                        <input type="text" v-model="form.libelle" class="form-control"
                            placeholder="Entrer le libellé du fertilisant..." required>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="mb-1">
                        <label class="fw-bold mb-1">L'image du produit <sup class="text-danger">*</sup></label>
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
    name: 'CreateProduitModal',
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
            Api.creerProduitPhyto(this.form).then((result) => {
                if (result) {
                    Swal({
                        icon: 'success',
                        title: 'Effectué avec succès !',
                        text: 'Le nouveau produit phytosanitaire a été ajouté avec success !',
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