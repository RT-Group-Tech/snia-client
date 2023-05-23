<template>
    <bs-modal @submit="submitted" title="Configuration formulaire" id="configModal" size="modal-xl">
        <template #body-content>
            <fieldset
                style="box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px; border-radius: 5px;"
                class="p-1 pt-0  mb-2">
                <div class="row pb-2 px-2">
                    <!-- Formulaire liaison avec le sujet -->
                    <div class="col-md-6">
                        <div>
                            <label class="fw-bold mb-1">Formulaire titre <sup class="text-danger">*</sup></label>
                            <input type="text" v-model="form.titre" placeholder="Entrer le titre du formulaire..."
                                class="form-control" required>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div>
                            <label class="fw-bold mb-1">Sélectionner un sujet de liaison <sup
                                    class="text-danger">*</sup></label>
                            <select v-model="form.sujet_id" class="form-control custom-select" id="defaultSelect" required>
                                <option value="" selected>Sélectionner un sujet</option>
                                <option value="1" selected>Sélectionner un sujet</option>
                                <option value="2" selected>Sélectionner un sujet</option>
                            </select>
                        </div>
                    </div>


                    <!-- End formulaire liaison -->
                </div>
            </fieldset>
            <group-caption :title="`Section ` + (index + 1)" v-for="(section, index) in form.sections" :key="index">
                <template #actions>
                    <button v-if="index === 0" class="btn btn-icon btn-sm btn-light btn-rounded"
                        @click.prevent="addNewSection"> <i class="flaticon-add text-primary"></i></button>
                    <button v-else class="btn btn-icon btn-sm btn-light btn-rounded"
                        @click.prevent="form.sections.splice(index, 1)"> <i class="icon-trash text-danger"></i></button>
                </template>
                <template #content>
                    <div class="row m-0">
                        <!-- Formulaire section titre -->
                        <div class="col-md-12">
                            <div class="mb-1">
                                <label class="fw-bold mb-1">Section titre <sup class="text-danger">*</sup></label>
                                <input type="text" class="form-control" v-model="section.section"
                                    placeholder="Entrer le titre de la section..." required>
                            </div>
                        </div>
                        <!-- End Formulaire section titre -->

                        <!-- Formulaire section inputs -->
                        <div class="col-md-12">
                            <div>
                                <label class="fw-bold mb-1">Section contenus/Champs <sup class="text-danger">*</sup></label>
                                <div class="input-group mb-2" v-for="(content, i) in section.inputs" :key="i">
                                    <input type="text" placeholder="Libellé" v-model="content.input" class="form-control"
                                        required>
                                    <select name="input_type"
                                        @change="onChangeValue({ sectionIndex: index, contentIndex: i, value: content.input_type })"
                                        class="custom-select form-control" id="input_type" v-model="content.input_type"
                                        required>
                                        <option value="">Sélectionner un type de champs</option>
                                        <option value="text">Zone de texte</option>
                                        <option value="select">Liste déroulante</option>
                                        <option value="checkbox">Case à cocher</option>
                                        <option value="file">Fichier</option>
                                        <option value="date">Date</option>
                                        <option value="number">Numéro</option>
                                        <!--<option value="file">Zone de fichier</option>!-->
                                    </select>
                                    <div class="input-group-append">
                                        <button title="Ajouter un champs" v-if="i === 0"
                                            @click.prevent="section.inputs.push({ input: '', input_type: '', options: [] })"
                                            data-toggle="tooltip" class="btn bg-grey2 btn-icon">
                                            <i class="flaticon-add text-primary"></i>
                                        </button>
                                        <button title="Effacer ce champs" v-else
                                            @click.prevent="section.inputs.splice(i, 1)" data-toggle="tooltip"
                                            class="btn bg-grey2 btn-icon">
                                            <i class="icon-trash text-danger"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--End Formulaire section inputs -->
                    </div>
                </template>
            </group-caption>
        </template>
        <template #footer-content>
            <button type="submit" :disabled="formLoading" id="forms-submit-btn" class="btn btn-success"><i
                    v-if="formLoading" class="fa fa-spinner fa-spin mr-2"></i>Soumettre la configuration</button>
        </template>
    </bs-modal>
    <bs-modal v-if="selectedContentIndex !== null && selectedSectionIndex !== null" id="optionsModal"
        title="Entrer les options">
        <template #body-content>
            <div v-for="(opt, index) in form.sections[selectedSectionIndex].inputs[selectedContentIndex].options"
                :key="index">
                <div class="input-group">
                    <input type="text" v-model="opt.input_option" placeholder="Entrer une option..." class="form-control"
                        required>
                    <div class="input-group-append">
                        <button class="btn btn-icon bg-grey2"
                            @click.prevent="form.sections[selectedSectionIndex].inputs[selectedContentIndex].options.push({ input_option: '' })"
                            v-if="index === 0">
                            <i class="flaticon-add text-primary"></i></button>
                        <button v-else class="btn btn-icon bg-grey2"
                            @click.prevent="form.sections[selectedSectionIndex].inputs[selectedContentIndex].options.splice(index, 1)">
                            <i class="icon-trash text-danger"></i></button>
                    </div>
                </div>
                <bs-popover title="Configuration sous champs" toggle-class="btn-outline-dark btn-sm border-top-0 mb-2"
                    toggle-icon="flaticon-add" toggle-label="Ajouter sous champs (optionnel)"
                    @onToggle="addSousOptions(index)">
                    <template #content>
                        <form @submit.prevent="submitSousOptions">
                            <div class="input-group mb-2" v-for="(sousInput, k) in opt.sousInputs" :key="k">
                                <input type="text" v-model="sousInput.sous_input" class="form-control"
                                    placeholder="Sous champs libellé">
                                <div class="input-group-append" id="button-addon1">
                                    <button v-if="k === 0" class="btn btn-icon bg-grey2"
                                        @click.prevent="opt.sousInputs.push({ sous_input: '', type: 'text', options: [] })"
                                        type="button">
                                        <i class="flaticon-add text-primary"></i>
                                    </button>
                                    <button v-else class="btn btn-icon bg-grey2"
                                        @click.prevent="opt.sousInputs.splice(k, 1)" type="button">
                                        <i class="icon-trash text-danger"></i>
                                    </button>
                                </div>
                            </div>

                            <div class="d-flex justify-content-between mb-2">
                                <button type="submit" class="btn btn-primary mt-1 mr-2 flex-fill text-uppercase">
                                    Valider & sauvegarder</button>
                                <button class="btn btn-dark text-uppercase mt-1"
                                    @click.prevent="closePopover(index)">Annuler</button>
                            </div>
                        </form>
                    </template>
                </bs-popover>
            </div>
        </template>
        <template #footer-content>
            <button type="button" data-dismiss="modal" class="btn btn-primary mr-2">
                <i class="flaticon-add"></i> Valider les options
            </button>
        </template>
    </bs-modal>
</template>

<style scoped src="@/assets/css/atlantis.css"></style>
<script>

export default {
    name: 'FormulaireCongigModal',
    data() {
        return {
            form: {
                titre: '',
                sujet_id: '',
                sections: [],
            },
            selectedSectionIndex: null,
            selectedContentIndex: null,
            formLoading: false,
        }
    },
    mounted() {
        this.addNewSection();
        this.$initBsTooltip();
    },
    unmounted() {
        this.cleanField();
    },
    methods: {
        submitted(event) {
            console.log(JSON.stringify(this.form));
            this.formLoading = true;
            setTimeout(() => {
                this.formLoading = false;
                this.cleanField();
            }, 3000)

        },
        /*Lorsque l'on selectionne un type de champs*/
        onChangeValue({ sectionIndex, contentIndex, value }) {
            if (value.includes('checkbox') || value.includes('select')) {
                this.selectedContentIndex = contentIndex;
                this.selectedSectionIndex = sectionIndex;
                this.$nextTick(async () => {
                    await this.addOptions();
                    $("#optionsModal").modal('show');
                })
            }
        },
        /* Ajout d'une nouvelle section */
        addNewSection() {
            this.form.sections.push({
                section: '',
                inputs: [
                    {
                        input: '',
                        input_type: '',
                        options: []
                    }
                ]
            });
        },

        /*Ajout d'une options à une section*/
        async addOptions() {
            let i = this.selectedSectionIndex;
            let j = this.selectedContentIndex;
            if (this.form.sections[i].inputs[j].options.length === 0) {
                this.form.sections[i].inputs[j].options.push({ input_option: '' });
            }
        },

        /*Ajout des sous options à une option d'une section*/
        addSousOptions(optIndex) {
            let option = this.form.sections[this.selectedSectionIndex].inputs[this.selectedContentIndex].options[optIndex];
            if (option.sousInputs === undefined) {
                option.sousInputs = [];
                this.$nextTick(() => {
                    option.sousInputs.push({
                        sous_input: "",
                        type: "text",
                        options: []
                    })
                });
            }
            else {
                if (option.sousInputs.length === 0) {
                    option.sousInputs.push({
                        sous_input: "",
                        type: "text",
                        options: []
                    })
                }
            }
        },

        /*Soumettre le formulaire*/
        submitForm(event) {
            Api.configurerFormulaire(this.form, async (res) => {
                this.formLoading = false
                Swal.fire({
                    title: 'Succès !',
                    text: "Formulaire créé avec succès !",
                    icon: 'success',
                    timer: 4000,
                    showCancelButton: false,
                    showConfirmButton: false,
                });
                await this.$store.dispatch('dantic/voirFormulaires');
                $("configModal").modal('hide');
                this.form = {
                    titre: '',
                    sujet_id: '',
                    sections: [],
                };
            });
        },

        submitSousOptions(event) {
            $('.bs-popover-auto').popover('hide');
        },

        /* close sous options popover */
        closePopover(index) {
            $('.bs-popover-auto').popover('hide');
            let option = this.form.sections[this.selectedSectionIndex].inputs[this.selectedContentIndex].options[index];
            option.sousInputs = [];
        },
        /* close options modal */
        closeOptionsModal() {
            $('optionsModal').modal('hide');
        },

        cleanField() {
            $("#configModal").modal("hide");
            this.form = {
                titre: '',
                sujet_id: '',
                sections: [],
            };
            this.addNewSection();
        }
    }
}
</script>

