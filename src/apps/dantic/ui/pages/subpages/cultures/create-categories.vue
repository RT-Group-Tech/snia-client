<template>
    <div class="tab-pane fade active show" id="v-pills-categories" role="tabpanel" aria-labelledby="v-pills-home-tab-icons">
        <form @submit.prevent="submitForm" id="form-categorie">
            <div class="accordion accordion-secondary">
                <div class="card">
                    <div class="card-header" aria-expanded="true" aria-controls="collapseOne" role="button">

                        <div class="span-title text-uppercase">
                            Création catégories
                        </div>
                    </div>

                    <div class="card-body">
                        <div class="form-group">
                            <label for="to" class="col-form-label mb-2">Catégorie</label>
                            <div class="input-group mb-3" v-for="(form, index) in forms" :key="index">
                                <input type="text" v-model="form.categorie" placeholder="Entrer une catégorie..."
                                    class="form-control" required>
                                <div class="input-group-append">
                                    <button @click.prevent="forms.push({ categorie: '' })" v-if="index === forms.length - 1"
                                        class="btn btn-primary btn-icon" type="submit"> <i class="flaticon-add"></i>
                                    </button>
                                    <button @click.prevent="forms.splice(index, 1)" v-else class="btn btn-dark btn-icon">
                                        <i class="icon-trash"></i>
                                    </button>
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
            forms: [],
            formLoading: false,
        }
    },


    created() {
        this.forms.push({
            categorie: ''
        });
    },

    methods: {
        submitForm(event) {
            this.$validForm('form-categorie', event, async (result, form) => {
                if (!result) {
                    this.$animatedFailedTask("submit-btn");
                }
                else {
                    this.formLoading = true;
                    for (let i = 0; i < this.forms.length; i++) {
                        await Api.creerCategorie(this.forms[i], (res) => {
                            console.log(JSON.stringify(res));
                        });
                    }
                    this.cleanForm();
                    this.formLoading = false;
                    $.notify(
                        {
                            icon: "fas fa-check",
                            title: "Succès !",
                            message: "Création des catégories effectués avec succès !",
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

                }
            })
        },

        cleanForm() {
            for (let i = 0; i < this.forms.length; i++) {
                this.forms[i].categorie = "";
            }
        }
    },
}
</script>