<template>
    <div class="tab-pane fade" id="v-pills-forms-config" role="tabpanel" aria-labelledby="v-pills-home-tab-icons">
        <form @submit.prevent="submitForm" id="form-formulaires">
            <div class="accordion accordion-secondary">
                <div class="card">
                    <div class="card-body p-0">
                        <div class="row mb-2">
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

            <!-- section !-->
            <div class="accordion" :id="`section${i}`" v-for="(section, i) in form.sections" :key="i">
                <div class="card">
                    <div class="card-header p-0 d-flex justify-content-between" aria-expanded="true"
                        aria-controls="collapseOne" role="button">
                        <div class="span-icon">
                            <div class="flaticon-interface-4"></div>
                        </div>
                        <div class="span-title">
                            SECTION {{ i + 1 }}
                        </div>
                        <div>
                            <button v-if="i === form.sections.length - 1" class="btn m-1 btn-icon btn-success"
                                @click.prevent="addNewSection"> <i class="flaticon-add"></i></button>
                            <button v-else class="btn m-1 btn-icon btn-dark" @click.prevent="form.sections.splice(i, 1)">
                                <i class="icon-trash"></i> </button>
                        </div>
                    </div>
                    <div class="card-body p-0">
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
                                            <label>Section {{ i + 1 }} contenus/Champs</label>
                                            <div class="input-group mb-2" v-for="(content, j) in section.contents" :key="j">
                                                <input type="text" v-model="content.input" placeholder="Détail"
                                                    class="form-control" required>
                                                <select name="input_type"
                                                    @change="onChangeValue({ sectionIndex: i, contentIndex: j, value: content.input_type })"
                                                    class="custom-select form-control" id="input_type" required
                                                    v-model="content.input_type">
                                                    <option value="">Sélectionner </option>
                                                    <option value="text">Zone de texte</option>
                                                    <option value="select">Liste déroulante</option>
                                                    <option value="checkbox">Case à cocher</option>
                                                    <option value="file">Fichier</option>
                                                    <option value="date">Date</option>
                                                    <option value="number">Numéro</option>
                                                    <!--<option value="file"
                                                    >Zone de fichier</option>!-->
                                                </select>
                                                <div class="input-group-append">
                                                    <button v-if="j === section.contents.length - 1"
                                                        class="btn btn-primary btn-icon"
                                                        @click.prevent="section.contents.push({ input: '', input_type: '', options: [] })">
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

        <div class="quick-sidebar animated fadeInRight"
            v-if="selectedContentIndex !== null && selectedSectionIndex !== null">
            <a href="javascript:void(0)" @click="closeQuickActionPanel" class="close-quick-sidebar">
                <i class="flaticon-cross"></i>
            </a>
            <div class="quick-sidebar-wrapper">
                <div class="quick-wrapper tasks-wrapper">
                    <div class="tasks-scroll scrollbar-outer">
                        <form @submit.prevent="submitFormOptions">
                            <div class="tasks-content">
                                <span class="category-title">Entrer les options</span>
                                <div class="input-group mb-2"
                                    v-for="(opt, index) in form.sections[selectedSectionIndex].contents[selectedContentIndex].options"
                                    :key="index">
                                    <input type="text" v-model="opt.input_option" placeholder="Entrer une option..."
                                        class="form-control" required>
                                    <div class="input-group-append">
                                        <button class="btn btn-icon btn-primary" @click.prevent="addOptions"
                                            v-if="index === form.sections[selectedSectionIndex].contents[selectedContentIndex].options.length - 1">
                                            <i class="flaticon-add"></i></button>
                                        <button v-else class="btn btn-icon btn-dark"
                                            @click.prevent="form.sections[selectedSectionIndex].contents[selectedContentIndex].options.splice(index, 1)">
                                            <i class="icon-trash"></i></button>
                                    </div>
                                    <div class="input-group" style="padding-top: 10px; padding-bottom: 10px;">
                                        <button @click.prevent="configSousInputs(opt)" type="button" style="border: 0; background-color: transparent; cursor: pointer; border:1px solid black; border-radius:3px;"><span class="fa fa-plus-circle"></span> Parametrage sous champs</button>
                                    </div>
                                    <!-- sous inputs !-->
                                    <sous-inputs @onsave="saveSousInputs" :index="index" v-if="opt.configSousInputs!==undefined || opt.configSousInputs===true "></sous-inputs>
                                    <!-- end sous inputs !-->
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
import sousInputs from './sous-inputs'
export default {
    name: 'Create-Forms-Page',
    components:{
        sousInputs
    },
    data() {
        return {
            form: {
                titre: '',
                sujet_id: '',
                sections: [],
            },
            selectedSectionIndex: null,
            selectedContentIndex: null,
            options: [],
            formLoading: false,
            test:"Hello",
            op:null
        }
    },

    computed: {
        sujets() {
            return this.$store.getters.GET_SUJETS
        }
    },
    created() {
        this.cleanForm('');
    },

    methods: {
        saveSousInputs(data,index)
        {
            var option=this.form.sections[this.selectedSectionIndex].contents[this.selectedContentIndex].options[index];
            option.sousInputs=data;

        }
        ,
        configSousInputs(option,val=true)
        {
            option.configSousInputs=val;
        }
        ,
        async onChangeValue({ sectionIndex, contentIndex, value }) {
            console.log(value, sectionIndex, contentIndex);
            if (value.includes('checkbox') || value.includes('select')) {
                this.selectedContentIndex = contentIndex;
                this.selectedSectionIndex = sectionIndex;
                this.$nextTick(async () => {
                    await this.addOptions();
                    await this.openQuickPanelAction();
                })
            }
        },
        addNewSection() {
            this.form.sections.push({
                section: '',
                contents: [
                    {
                        input: '',
                        input_type: '',
                        options: []
                    }

                ]
            });
        },

        async addOptions() {
            let i = this.selectedSectionIndex;
            let j = this.selectedContentIndex;
            this.form.sections[i].contents[j].options.push({ input_option: '' });
        },

        async openQuickPanelAction() {
            $("html").addClass("quick_sidebar_open");
            /* $('.scrollbar-outer').scrollbar() */
            /* $('<div class="quick-sidebar-overlay"></div>').insertAfter(
                ".quick-sidebar"
            ); */
        },
        closeQuickActionPanel() {
            $("html").removeClass("quick_sidebar_open");
            this.selectedContentIndex = null;
            this.selectedSectionIndex = null;
            /* $(".quick-sidebar-overlay").remove(); */
        },


        /*envoie des données formulaires au serveur*/
        submitForm(event) {

            this.$validForm('form-formulaires', event, async (result, form) => {
                if (!result) {
                    this.$animatedFailedTask("forms-submit-btn");
                } else {
                    this.formLoading = true
                    Api.configurerFormulaire(this.form, async (res) => {
                        this.formLoading = false
                        this.cleanForm(event);
                        Swal.fire({
                            title: 'Succès !',
                            text: "Formulaire créé avec succès !",
                            icon: 'success',
                            timer: 4000,
                            showCancelButton: false,
                            showConfirmButton: false,
                        });
                        await this.$store.dispatch('dantic/voirFormulaires')
                    })
                }
            })

        },

        submitFormOptions(event) {
            /*  let i = this.selectedSectionIndex;
             let j = this.selectedContentIndex;
             let parseOptions = this.form.sections[i].contents[j].options;
             let options = [];
             parseOptions.forEach((el) => {
                 options.push(el.model);
             })
             console.log(options.toString()); */
            this.closeQuickActionPanel();
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