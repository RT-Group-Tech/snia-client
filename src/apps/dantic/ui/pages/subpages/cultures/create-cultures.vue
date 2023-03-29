<template>
    <div class="tab-pane fade" id="v-pills-cultures" role="tabpanel" aria-labelledby="v-pills-home-tab-icons">
        <form @submit.prevent="submitForm" id="form-culture">
            <div class="accordion accordion-secondary">
                <div class="card">
                    <div class="card-header" aria-expanded="true" aria-controls="collapseOne" role="button">
                        <div class="span-title text-uppercase">
                            Création cultures
                        </div>
                    </div>

                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="col-form-label">Désignation<sup class="text-danger">*</sup></label>
                                    <input type="text" placeholder="Entrer le titre du formulaire..." class="form-control"
                                        required>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="col-form-label">Sélectionner une catégorie <sup
                                            class="text-danger">*</sup></label>
                                    <select class="form-control custom-select" id="defaultSelect" required>
                                        <option selected>Sélectionner une catégorie</option>
                                        <option>option 1</option>
                                        <option>option 2</option>
                                        <option>option 3</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="col-form-label">Détail<sup class="text-danger">*</sup></label>
                                    <input type="text" placeholder="Entrer un détail..." class="form-control" required>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="col-form-label">Valeur<sup class="text-danger">*</sup></label>
                                    <input type="text" placeholder="Entrer une valeur..." class="form-control" required>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="card-footer">
                        <button type="submit" :disabled="formLoading" class="btn btn-success mr-2"><i v-if="formLoading"
                                class="fa fa-spinner fa-spin mr-2"></i>Sauvegarder</button>
                        <button type="reset" class="btn btn-danger">Annuler</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import Api from '@/apps/dantic/api';
export default {
    name: "Create-Categorie",
    data() {
        return {
            form: {
                culture_categorie_id: '',
                nom: '',
                detail: '',
                valeur: ''
            },
            formLoading: false,
        }
    },

    computed: {
        categories() {
            return this.$store.getters['dantic/GET_CATEGORIES']
        }
    },

    methods: {
        submitForm(event) {
            this.$validForm('form-culture', event, async (result, form) => {
                if (!result) {
                    this.$animatedFailedTask("submit-btn");
                }
                else {
                    this.formLoading = true;
                    /*request here...*/
                    await Api.creerCulture(this.form, (res) => {
                        console.log(JSON.stringify(res));
                        this.cleanForm();
                        this.formLoading = false;
                        $.notify(
                            {
                                icon: "fas fa-check",
                                title: "Succès !",
                                message: "Création culture effectuée avec succès !",
                            },
                            {
                                type: "success",
                                placement: {
                                    from: "bottom",
                                    align: "right",
                                },
                                time: 1000,
                            }
                        );
                    })
                }
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