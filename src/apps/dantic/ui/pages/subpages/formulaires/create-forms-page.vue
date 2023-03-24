<template>
    <div class="page-content mail-content">
        <div class="email-head d-lg-flex d-block">
            <h3>
                <i class="flaticon-interface-4 mr-1"></i>
                Création Formulaires
            </h3>
        </div>

        <form @submit.prevent="submitForm" id="form" @reset.prevent="cleanForm">
            <div class="email-compose-fields">
                <div class="row">

                    <!-- Formulaire liaison avec le sujet -->
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="col-form-label">Formulaire titre</label>
                            <input type="text" v-model="form.titre" placeholder="Entrer le titre du formulaire..."
                                class="form-control" required>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="col-form-label">Sélectionner un sujet de liaison</label>
                            <select v-model="form.sujet_id" class="form-control form-control" id="defaultSelect" required>
                                <option selected>Sélectionner un sujet</option>
                                <option v-for="data in sujets" :key="data.sujet_id" :value="data.sujet_id">{{ data.sujet }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <!-- End formulaire liaison -->


                    <!-- Formulaire sections -->
                    <div class="col-md-12 mt-2" v-for="(section, i) in form.sections" :key="i">
                        <div
                            class="d-flex p-2 border-bottom border-top bg-grey2 align-items-center justify-contents-center w-100">
                            <h4 class=" fw-extrabold">Section {{ i + 1 }}</h4>
                            <div class="ml-auto">
                                <button v-if="i === form.sections.length - 1" class="btn btn-success"
                                    @click.prevent="addNewSection"> <i class="flaticon-add"></i> Ajouter</button>
                                <button v-else class="btn btn-danger" @click.prevent="form.sections.splice(i, 1)">
                                    <i class="flaticon-cross"></i> Reduire</button>
                            </div>
                        </div>
                        <div class="row">

                            <!-- Formulaire section titre -->
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label>Section {{ i + 1 }} titre</label>
                                    <input type="text" v-model="section.section" class="form-control"
                                        placeholder="Entrer le titre de la section..." required>
                                </div>
                            </div>
                            <!-- End Formulaire section titre -->

                            <!-- Formulaire section contents -->
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label>Section {{ i + 1 }} contenus</label>
                                    <div class="input-group mb-2" v-for="(content, j) in section.contents" :key="j">
                                        <input type="text" v-model="content.detail" placeholder="Détail"
                                            class="form-control" required>
                                        <input type="text" v-model="content.valeur" placeholder="Valeur"
                                            class="form-control" required>
                                        <div class="input-group-append">
                                            <button v-if="j === section.contents.length - 1" class="btn btn-primary "
                                                @click.prevent="section.contents.push({ detail: '', valeur: '' })"> <i
                                                    class="flaticon-add"></i></button>
                                            <button v-else class="btn btn-danger "
                                                @click.prevent="section.contents.splice(j, 1)"> <i
                                                    class="flaticon-cross"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--End Formulaire section contents -->
                        </div>
                    </div>
                    <!-- End Formulaire sections -->
                </div>
            </div>
            <div class="email-editor">
                <div id="editor"></div>
                <div class="email-action">
                    <button type="submit" :disabled="formLoading" id="submit-btn" class="btn btn-success"><i
                            v-if="formLoading" class="fa fa-spinner fa-spin mr-2"></i>Sauvegarder</button>
                    <button type="reset" class="btn btn-danger">Annuler</button>
                </div>
            </div>
        </form>

    </div>
</template>

<script>
import Api from '@/apps/dantic/api';
export default {
    name: 'Create-Forms-Page',
    data() {
        return {
            form: {
                titre: '',
                sujet_id: '',
                sections: []
            },
            formLoading: false
        }
    },

    computed: {
        sujets() {
            return this.$store.getters['dantic/GET_SUJETS']
        }
    },
    created() {
        this.addNewSection();
    },

    methods: {
        addNewSection() {
            this.form.sections.push({
                section: '',
                contents: [
                    {
                        detail: '',
                        valeur: ''
                    }
                ]
            });
        },

        submitForm(event) {

            this.$validForm('form', event, async (result, form) => {
                if (!result) {
                    this.$animatedFailedTask("submit-btn");
                } else {
                    this.formLoading = true
                    Api.configurerFormulaire(this.form, (res) => {
                        this.formLoading = false
                        this.cleanForm(event);
                        $.notify(
                            {
                                icon: "fas fa-check",
                                title: "Succès !",
                                message: "Configuration du formulaire effectué avec succès !",
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

        cleanForm(e) {
            this.form.titre = "";
            this.form.sujet_id = "";
            this.form.sections = [];
            this.addNewSection();
        }
    },
}
</script>