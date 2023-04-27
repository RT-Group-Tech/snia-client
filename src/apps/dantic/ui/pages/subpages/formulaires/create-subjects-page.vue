<template>
    <div class="tab-pane fade active show" id="v-pills-topic" role="tabpanel" aria-labelledby="v-pills-home-tab-icons">
        <form @submit.prevent="submitForm" id="form-sujet">
            <div class="accordion accordion-secondary">
                <div class="card">
                    <div class="card-body p-0">
                        <div class="form-group">
                            <label for="to" class="col-form-label mb-2">Sujet</label>
                            <div class="input-group mb-2" v-for="(form, index) in forms" :key="index">
                                <input type="text" v-model="form.data" placeholder="Entrer le sujet..." class="form-control"
                                    required>
                                <div class="input-group-append">
                                    <button @click.prevent="forms.push({ data: '' })" v-if="index === forms.length - 1"
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
    name: "SubCreate-Subject-Page",
    data() {
        return {
            forms: [],
            formLoading: false,
        }
    },


    created() {
        this.forms.push({
            data: ''
        });
    },

    methods: {
        submitForm(event) {
            this.$validForm('form-sujet', event, async (result, form) => {
                if (!result) {
                    this.$animatedFailedTask("submit-btn");
                }
                else {
                    this.formLoading = true;
                    for (let i = 0; i < this.forms.length; i++) {
                        await Api.creerSujet(this.forms[i].data, (res) => {
                            console.log(JSON.stringify(res));
                        });
                    }
                    this.cleanForm();
                    this.formLoading = false;
                    $.notify(
                        {
                            icon: "fas fa-check",
                            title: "Succès !",
                            message: "Création des sujets effectués avec succès !",
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
                    await this.$store.dispatch('voirSujets')
                }


            })
        },

        cleanForm() {
            for (let i = 0; i < this.forms.length; i++) {
                this.forms[i].data = "";
            }
        }
    },
}
</script>