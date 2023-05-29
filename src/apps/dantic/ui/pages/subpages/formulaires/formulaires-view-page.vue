<template>
    <div class="tab-pane fade" id="v-pills-forms" role="tabpanel" aria-labelledby="v-pills-buy-tab-icons">
        <div class="p-2">
            <div class="d-flex align-items-center mb-2">
                <h3 class="fw-extrabold">Liste des Formulaires </h3>
                <button class="btn ml-auto btn-primary" @click="$showBsModal('configModal')"><i
                        class="flaticon-add mr-2"></i>Nouveau
                    formulaire</button>
            </div>
            <div class="input-group m-0 mb-2">
                <input type="text" v-model="searchWord" placeholder="Recherche formulaire..." class="form-control">
                <div class="input-group-append">
                    <span class="input-group-text">
                        <i class="fa fa-search search-icon"></i>
                    </span>
                </div>
            </div>

            <!-- formulaires list -->
            <ul class="list-group list-group-bordered">
                <li class="list-group-item d-lg-flex align-items-center justify-content-between"
                    v-for="(formulaire, i) in formulaires" :key="i">
                    <span><i class="flaticon-interface-6 text-info mr-1"></i>
                        {{ $filters.capitalize($filters.sortLength(formulaire.titre, 70, "...")) }} </span>
                    <div class="d-flex">
                        <bs-popover title="Modifier le titre du formulaire" trigger-class="popover-title" placement="right"
                            toggle-class="btn-icon d-block btn-success mr-1" toggle-icon="icon-pencil"
                            @onToggle="$closeBsPopover('popover-title')">
                            <template #content>
                                <form @submit.prevent="updateFormTitre(formulaire)">
                                    <div class="input-group mb-2">
                                        <input type="text" v-model="formulaire.titre" class="form-control"
                                            placeholder="Entrer formulaire titre...">
                                    </div>

                                    <div class="d-flex justify-content-between">
                                        <button :disabled="updateLoading === formulaire.formulaire_id" type="submit"
                                            class="btn btn-success flex-fill mr-2">
                                            <i v-if="updateLoading === formulaire.formulaire_id"
                                                class="fa fa-spinner fa-spin mr-2" />Sauvegarder les modification
                                        </button>
                                        <button type="button" class="btn btn-danger"
                                            @click.prevent="$closeBsPopover('popover-title')">
                                            Fermer
                                        </button>
                                    </div>
                                </form>
                            </template>
                        </bs-popover>

                        <button class="btn btn-icon btn-info mr-1" type="button" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false"><i class="icon-information"></i></button>

                        <button :disabled="deleteLoading === formulaire.formulaire_id" class="btn btn-icon btn-danger mr-1"
                            @click.prevent="deleteFormulaire(formulaire.formulaire_id)">
                            <i v-if="deleteLoading === formulaire.formulaire_id" class="fa fa-spinner fa-spin" />
                            <i v-else class="icon-trash"></i>
                        </button>
                        <ul class="dropdown-menu" role="menu" x-placement="right-start"
                            style="position: absolute; transform: translate3d(119px, 0px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <h6 class="dropdown-header fw-extrabold text-primary">
                                Formulaire sections
                            </h6>
                            <div class="dropdown-divider"></div>
                            <li v-for="(section, i) in formulaire.sections" :key="i">
                                <a class="dropdown-item d-flex justify-content-between pt-2 pb-2" href="javascript:void(0)"
                                    @click.prevent="getSection(section)">
                                    <span>{{ $filters.capitalize(section.section) }}</span><i
                                        class="fas fa-edit text-info"></i>
                                </a>
                                <div class="dropdown-divider"></div>
                            </li>
                            <li class="text-center">
                                <a href="javascript:void(0)" @click.prevent="addNewSection(formulaire)"
                                    class="btn btn-sm btn-primary"><i class="flaticon-add"></i>
                                    Ajouter section</a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
            <!--             <div v-show="viewLoading" class="d-flex justify-content-center mt-4 align-items-center w-100 h-50">
                <i class="fa fa-3x fa-spinner fa-spin text-muted"></i>
            </div> -->
            <!-- End formulaire list -->
        </div>
        <!-- formulaire edit modal -->
        <bs-modal size="modal-xl" id="formulaireEditModal" @submit="updateSectionFormulaire"
            title="Edition formulaire section">
            <template #body-content>

                <group-caption v-if="selectedSection.section !== undefined" :title="`Section ` + selectedSection.section">
                    <template #actions>
                        <button class="btn btn-icon btn-sm btn-primary btn-rounded"> <i class=" text-primary"></i></button>
                    </template>
                    <template #content>
                        <div class="row m-0">
                            <!-- Formulaire section titre -->
                            <div class="col-md-12">
                                <div class="mb-1">
                                    <label class="fw-bold mb-1">Section titre <sup class="text-danger">*</sup></label>
                                    <input type="text" class="form-control" v-model="selectedSection.section"
                                        placeholder="Entrer le titre de la section..." required>
                                </div>
                            </div>
                            <!-- End Formulaire section titre -->

                            <!-- Formulaire section inputs -->
                            <div class="col-md-12">
                                <div>
                                    <label class="fw-bold mb-1">Section contenus/Champs <sup
                                            class="text-danger">*</sup></label>

                                    <div class=" mb-2" v-for="( content, i ) in selectedSection.inputs " :key="i">
                                        <div class="input-group">
                                            <input type="text"
                                                :class="content.options !== undefined && content.options.length > 0 ? 'input-attach-btn' : ''"
                                                placeholder="Libellé" v-model="content.input" class="form-control" required>
                                            <select name="input_type" @change="addOpts(content, i)"
                                                class="custom-select form-control" id="input_type"
                                                v-model="content.input_type" required>
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
                                                    @click.prevent="selectedSection.inputs.push({ input: '', input_type: '', options: [] })"
                                                    data-toggle="tooltip" class="btn bg-grey2 btn-icon">
                                                    <i class="flaticon-add text-primary"></i>
                                                </button>
                                                <button title="Effacer ce champs" v-else
                                                    @click.prevent="selectedSection.inputs.splice(i, 1)"
                                                    data-toggle="tooltip" class="btn bg-grey2 btn-icon">
                                                    <i class="icon-trash text-danger"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <!-- Permet de voir ou ajouter des options s'ils existent -->
                                        <button type="button" title="Voir les options" @click="showOpt(content, i)"
                                            v-if="content.options !== undefined && content.options.length > 0"
                                            data-toggle="tooltip" class="btn btn-info btn-attach btn-sm">
                                            <i class="icon-list mr-2"></i> Voir/ajouter les options
                                        </button>
                                        <!-- End -->

                                    </div>
                                </div>
                            </div>
                            <!--End Formulaire section inputs -->
                        </div>
                    </template>
                </group-caption>
            </template>
            <template #footer-content>
                <button :disabled="submitLoading" id="submit-btn" type="submit" class="btn btn-success"
                    :class="submitLoading ? 'disabled' : ''" style="margin-right: 4px;"> <i v-if="submitLoading"
                        class="fa fa-spinner fa-spin" /> Sauvegarder les
                    modifications
                </button>
                <button class="btn btn-danger" data-dismiss="modal">Fermer</button>
            </template>
        </bs-modal>
        <!-- End formulaire edit modal -->

        <!-- sous options modal -->
        <bs-modal id="optionsViewModal" title="Entrer les options">
            <template #body-content v-if="selectedOptions">
                <div v-for="( opt, k ) in  selectedOptions" :key="k">
                    <div class="input-group">
                        <input type="text" v-model="opt.input_option" placeholder="Entrer une option..."
                            class="form-control input-attach-btn" required>
                        <div class="input-group-append">
                            <button class="btn btn-icon bg-grey2"
                                @click.prevent="selectedOptions.push({ input_option: '' })" v-if="k === 0">
                                <i class="flaticon-add text-primary"></i></button>
                            <button v-else class="btn btn-icon bg-grey2" @click.prevent="selectedOptions.splice(k, 1)">
                                <i class="icon-trash text-danger"></i></button>
                        </div>
                    </div>
                    <bs-popover trigger-class="pop-sousChamps" placement="left" title="Configuration sous champs"
                        toggle-class="btn btn-info btn-sm btn-attach mb-2" toggle-icon="flaticon-add"
                        toggle-label="Voir/ajouter sous champs" @onToggle="onToggleSousOptions(opt)">
                        <template #content>
                            <form @submit.prevent="$closeBsPopover('pop-sousChamps')">
                                <div v-for="( sousInput, k ) in  opt.sous_inputs " :key="k" class="mb-2">
                                    <div class="input-group">
                                        <input type="text" v-model="sousInput.sous_input" class="form-control"
                                            :class="sousInput.sous_options !== undefined && sousInput.sous_options.length > 0 ? 'input-attach-btn' : ''"
                                            placeholder="Sous champs libellé" required>
                                        <select name="input_type" @change="onChangeSousOption(sousInput)"
                                            class="custom-select form-control" id="input_type" v-model="sousInput.type"
                                            required>
                                            <option value="" selected>Sélectionner un type </option>
                                            <option value="text">Zone de texte</option>
                                            <option value="select">Liste déroulante</option>
                                            <option value="checkbox">Case à cocher</option>
                                            <option value="file">Fichier</option>
                                            <option value="date">Date</option>
                                            <option value="number">Numéro</option>
                                            <!--<option value="file">Zone de fichier</option>!-->
                                        </select>
                                        <div class="input-group-append" id="button-addon1">
                                            <button v-if="k === 0" class="btn btn-icon bg-grey2"
                                                @click.prevent="opt.sous_inputs.push({ sous_input: '', type: 'text', options: [] })"
                                                type="button">
                                                <i class="flaticon-add text-primary"></i>
                                            </button>
                                            <button v-else class="btn btn-icon bg-grey2"
                                                @click.prevent="opt.sous_inputs.splice(k, 1)" type="button">
                                                <i class="icon-trash text-danger"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <bs-popover
                                        v-if="sousInput.sous_options !== undefined && sousInput.sous_options.length > 0"
                                        title="Sous options" trigger-class="pop-sousOptions" placement="bottom"
                                        toggle-class="btn btn-info btn-sm btn-attach" toggle-icon="flaticon-add"
                                        toggle-label="Voir/ajouter sous options">
                                        <template #content>
                                            <form @submit.prevent="$closeBsPopover('pop-sousOptions')">
                                                <div class="input-group mb-2" v-for="( sopt, j ) in  sousInput.sous_options"
                                                    :key="j">
                                                    <input type="text" v-model="sopt.sous_input_option" class="form-control"
                                                        placeholder="Sous option libellé">
                                                    <div class="input-group-append" id="button-addon1">
                                                        <button v-if="j === 0" class="btn btn-icon bg-grey2"
                                                            @click.prevent="sousInput.sous_options.push({ sous_input_option: '' })"
                                                            type="button">
                                                            <i class="flaticon-add text-primary"></i>
                                                        </button>
                                                        <button v-else class="btn btn-icon bg-grey2"
                                                            @click.prevent="sousInput.sous_options.splice(j, 1)"
                                                            type="button">
                                                            <i class="icon-trash text-danger"></i>
                                                        </button>
                                                    </div>
                                                </div>

                                                <button type="submit" class="btn btn-primary mt-1 mr-2">
                                                    Valider & Fermer
                                                </button>
                                            </form>
                                        </template>
                                    </bs-popover>
                                </div>

                                <button type="submit" class="btn btn-primary mt-1 mr-2">
                                    Valider & Fermer
                                </button>
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
        <!-- End sous options modal -->

        <!-- formulaire config modal -->
        <formulaire-config-modal />
        <!-- End formulaire config modal -->

    </div>
</template>

<style scoped>
.btn-attach {
    border-top-left-radius: 0px !important;
    border-top-right-radius: 0px !important;
}
</style>

<script>
import Api from '@/apps/dantic/api';
import formulaireConfigModal from '@/apps/dantic/ui/modals/formulaire-config-modal.vue'
export default {
    name: 'Formulaires-View-Page',

    components: {
        formulaireConfigModal
    },
    data() {
        return {
            searchWord: '',
            selectedSection: {},
            deleteLoading: '',
            updateLoading: '',
            isNew: false, //Quand l'on crée un nouveau formulaire...
            submitLoading: false,
            selectedOptions: [],
            optionIndex: null,
            timer: null
        }
    },

    mounted() {
        /*Quick loading data...*/
        this.$store.dispatch('dantic/voirFormulaires');
        /*End*/
        /*Pour permettre de recuperer la totalité des infos sur une section nouvellement crée */
        /*Vue la lentance du serveur lors de l'enregistrements des nouvelles options de la sections...*/
        /* this.timer = setInterval(() => { this.$store.dispatch('dantic/voirFormulaires') }, 4000) */
    },
    unmounted() {
        /*Cancel runtime statment*/
        clearInterval(this.timer);
    },

    computed: {
        formulaires() {
            if (this.searchWord) {
                let filtered = this.$store.getters['dantic/GET_FORMULAIRES'];
                return filtered.filter((f) => f.titre.toLowerCase().includes(this.searchWord.toLowerCase()));
            }
            return this.$store.getters['dantic/GET_FORMULAIRES']
        },
    },

    methods: {
        /** Method pour mettre à jour le titre d'un formulaire */
        updateFormTitre(formulaire) {
            /**
                     * Lancer la requete de mise a jour du titre.
                     */
            var data = {
                formulaire_id: formulaire.formulaire_id,
                titre: formulaire.titre
            };

            /**
             * Call to the Api.
             */
            this.updateLoading = formulaire.formulaire_id;
            Api.editFormTitre(data).then((_) => {
                this.updateLoading = ''
                this.$closeBsPopover("popover-title");
            });

        },

        /*Ajoute une nouvelle section à un formulaire  existant*/
        addNewSection(formulaire) {
            this.isNew = false; /*Pour valider si c'est un nouveau formulaire ou une modif.*/
            this.selectedSection = {
                section: '',
                formulaire_id: formulaire.formulaire_id,
                inputs: [
                    {
                        input: '',
                        input_type: '',
                        options: []
                    }
                ]
            }
            this.$nextTick(() => {
                $("#formulaireEditModal").modal('show');
            });
        },

        /*Permet d'ajouter des options pour les champs y afferent */
        addOpts(content, index) {
            if (content.input_type.includes('select') || content.input_type.includes('checkbox')) {
                content.options = [];
                content.options.push({ input_option: '' });
                this.optionIndex = index;
                this.$nextTick(() => { this.showOpt(content, index) });
            }
            else {
                content.options = [];
            }

        },

        onChangeSousOption(sousInput) {
            if (sousInput.type.includes('checkbox') || sousInput.type.includes('select')) {
                if (sousInput.sous_options === undefined) {
                    sousInput.sous_options = [];
                }
                sousInput.sous_options.push({ sous_input_option: '' });
            }
            else {
                sousInput.sous_options = [];
            }
        },
        /*ajoute les sous options si possible*/
        onToggleSousOptions(opt) {
            if (opt.sous_inputs === undefined || opt.sous_inputs.length === 0) {
                opt.sous_inputs = [];
                opt.sous_inputs.push({ sous_input: '' })
            }
        },
        /*Affiche le modal des options */
        showOpt(content, index) {
            this.optionIndex = index;
            this.selectedOptions = content.options;
            this.$nextTick(() => { $("#optionsViewModal").modal('show') });
        },

        /* Renvoie une section sélectionnée */
        getSection(section) {
            /*Lorsqu'il s'agit de l'affichage de la section pour une eventuelle modification*/
            this.selectedSection = section;
            this.$nextTick(() => {
                $("#formulaireEditModal").modal('show');
            })
        },

        /*Met à jour une section du formulaire sélectionné !*/
        updateSectionFormulaire(event) {
            Swal.fire({
                title: 'Etes-vous sûr ?',
                text: "Voulez vous vraiment effecteur ces modifications sur cette section ?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#31ce36',
                cancelButtonColor: '#f25961',
                confirmButtonText: 'Oui, modifier',
                cancelButtonText: "Non, fermer",
            }).then(async (result) => {
                if (result.isConfirmed) {
                    this.submitLoading = true;
                    if (this.selectedSection.formulaire_section_id === undefined) {
                        let { formulaire_section_id } = await Api.creerSectionFormulaire(this.selectedSection);
                        if (formulaire_section_id !== null) {
                            for (let i = 0; i < this.selectedSection.inputs.length; i++) {
                                let input = this.selectedSection.inputs[i];
                                input.formulaire_section_id = formulaire_section_id;
                                await Api.creerFormulaireSectionDetails(input);
                            }
                            this.submitLoading = false;
                            this.$store.dispatch('dantic/voirFormulaires');
                            Swal.fire({
                                title: 'Success',
                                text: "Nouvelles section ajoutée avec succès !",
                                icon: 'success',
                                showCancelButton: false,
                                showConfirmButton: false,
                                timer: 3000
                            })
                            $('#formulaireEditModal').modal('hide');
                        }
                        return;
                    }
                    else {
                        Api.modifierSectionFormulaire(this.selectedSection).then((res) => {
                            this.submitLoading = false;
                            console.log(res);
                            if (res) {
                                this.$store.dispatch('dantic/voirFormulaires');
                                Swal.fire({
                                    title: 'Success',
                                    text: "Les modifications ont été effectuées avec succès !",
                                    icon: 'success',
                                    showCancelButton: false,
                                    showConfirmButton: false,
                                    timer: 3000
                                })
                                $('#formulaireEditModal').modal('hide');


                            }
                        })
                    }

                }
            });

        },

        /*Suppression d'un formulaire...*/
        deleteFormulaire(id) {
            Swal.fire({
                title: 'Etes-vous sûr ?',
                text: "Voulez vous supprimer définitivement ce formulaire ?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#31ce36',
                cancelButtonColor: '#f25961',
                confirmButtonText: 'Oui, supprimer',
                cancelButtonText: "Non, fermer",
            }).then((result) => {
                if (result.isConfirmed) {
                    this.deleteLoading = id;
                    Api.supprimerFormulaire(id, (isDone) => {
                        this.deleteLoading = false;
                        if (isDone) {
                            this.$store.dispatch('dantic/voirFormulaires');
                            Swal.fire({
                                title: 'Success',
                                text: "Formulaire supprimé avec succès !",
                                icon: 'success',
                                showCancelButton: false,
                                showConfirmButton: false,
                                timer: 3000
                            })
                        }
                    })
                }
            });
        },
    }
}
</script>