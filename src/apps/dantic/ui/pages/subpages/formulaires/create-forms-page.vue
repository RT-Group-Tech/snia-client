<template>
    <div class="tab-pane fade" id="v-pills-forms-config" role="tabpanel" aria-labelledby="v-pills-home-tab-icons">
        <form @submit.prevent="submitForm" id="form-formulaires">
            <div class="accordion accordion-secondary">
                <div class="card">
                    <div class="card-body">
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
                                    <select v-model="form.sujet_id" class="form-control custom-select" id="defaultSelect"
                                        required>
                                        <option selected>Sélectionner un sujet</option>
                                        <option v-for="data in sujets" :key="data.sujet_id" :value="data.sujet_id">{{
                                            data.sujet }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <!-- End formulaire liaison -->
                        </div>
                    </div>
                </div>
            </div>

            <div class="accordion" :id="`section${i}`" v-for="(section, i) in form.sections" :key="i">
                <div class="card">
                    <div class="card-header d-flex justify-content-between" aria-expanded="true" aria-controls="collapseOne"
                        role="button">
                        <div class="span-icon">
                            <div class="flaticon-interface-4"></div>
                        </div>
                        <div class="span-title">
                            SECTION {{ i + 1 }}
                        </div>
                        <div>
                            <button v-if="i === form.sections.length - 1" class="btn btn-icon btn-success"
                                @click.prevent="addNewSection"> <i class="flaticon-add"></i></button>
                            <button v-else class="btn btn-icon btn-dark" @click.prevent="form.sections.splice(i, 1)">
                                <i class="icon-trash"></i> </button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <!-- Formulaire sections -->
                            <div class="col-md-12 mt-2">

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
                                                <select name="valeur" @change="onChangeValue"
                                                    class="custom-select form-control" id="valeur" required
                                                    v-model="content.valeur">
                                                    <option value="">Valeur</option>
                                                    <option value="text">Zone de texte</option>
                                                    <option value="select">Liste déroulante</option>
                                                    <option value="checkbox">Zone à cocher</option>
                                                    <option value="file">Zone de fichier</option>
                                                </select>
                                                <div class="input-group-append">
                                                    <button v-if="j === section.contents.length - 1"
                                                        class="btn btn-primary btn-icon"
                                                        @click.prevent="section.contents.push({ detail: '', valeur: '' })">
                                                        <i class="flaticon-add"></i></button>
                                                    <button v-else class="btn btn-icon btn-dark"
                                                        @click.prevent="section.contents.splice(j, 1)"> <i
                                                            class="icon-trash"></i></button>
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
                    <div class="card-footer" v-if="(i === form.sections.length - 1)">
                        <button type="submit" :disabled="formLoading" id="forms-submit-btn" class="btn btn-success mr-2"><i
                                v-if="formLoading" class="fa fa-spinner fa-spin mr-2"></i>Sauvegarder</button>
                        <button type="reset" class="btn btn-danger">Annuler</button>
                    </div>
                </div>
            </div>
        </form>

        <div class="quick-sidebar">
            <a href="javascript:void(0)" @click="closeQuickActionPanel" class="close-quick-sidebar">
                <i class="flaticon-cross"></i>
            </a>
            <div class="quick-sidebar-wrapper">
                <div class="quick-wrapper tasks-wrapper">
                    <div class="tasks-scroll scrollbar-outer">
                        <form @submit.prevent="submitFormOptions">
                            <div class="tasks-content">
                                <span class="category-title">Entrer les options</span>
                                <div class="input-group mb-2" v-for="(opt, index) in options" :key="index">
                                    <input type="text" v-model="opt.val" placeholder="Entrer une option..."
                                        class="form-control" required>
                                    <div class="input-group-append">
                                        <button class="btn btn-icon btn-primary" @click.prevent="options.push({ val: '' })"
                                            v-if="index === options.length - 1">
                                            <i class="flaticon-add"></i></button>
                                        <button v-else class="btn btn-icon btn-dark"
                                            @click.prevent="options.splice(index, 1)">
                                            <i class="icon-trash"></i></button>
                                    </div>
                                </div>
                                <span class="category-title"></span>
                                <div class="d-flex">
                                    <button class="btn btn-success mr-2" type="submit">Valider & sauvegarder </button>
                                    <button class="btn btn-secondary" @click.prevent="closeQuickActionPanel">Fermer</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
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
                sections: [],
            },
            options: [],
            formLoading: false
        }
    },

    computed: {
        sujets() {
            return this.$store.getters['dantic/GET_SUJETS']
        }
    },
    created() {
        this.cleanForm('');
    },

    methods: {
        onChangeValue(event) {
            if (event.target.value.includes('checkbox') || event.target.value.includes('select')) {
                this.options = [];
                this.options.push({ val: '' });
                this.openQuickPanelAction();
            }
        },
        addNewSection() {
            this.form.sections.push({
                section: '',
                contents: [
                    {
                        detail: '',
                        valeur: '',
                    }
                ]
            });
        },

        openQuickPanelAction() {
            $("html").addClass("quick_sidebar_open");
            /* $('.scrollbar-outer').scrollbar() */
            /* $('<div class="quick-sidebar-overlay"></div>').insertAfter(
                ".quick-sidebar"
            ); */
        },
        closeQuickActionPanel() {
            this.options = [];
            $("html").removeClass("quick_sidebar_open");
            /* $(".quick-sidebar-overlay").remove(); */
        },
        submitForm(event) {
            this.$validForm('form-formulaires', event, async (result, form) => {
                if (!result) {
                    this.$animatedFailedTask("forms-submit-btn");
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

        submitFormOptions(event) {
            this.closeQuickActionPanel()
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