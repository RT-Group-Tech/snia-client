<template>
    <div class="tab-pane fade" id="v-pills-forms" role="tabpanel" aria-labelledby="v-pills-buy-tab-icons">
        <div class="p-2">
            <div class="d-flex align-items-center mb-2">
                <h3 class="fw-extrabold">Liste des Formulaires </h3>
                <button class="btn ml-auto btn-primary" @click="openFormulaireConfigModal"><i
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
                    <div>
                        <button class="btn btn-icon btn-success mr-1" type="button"><i class="icon-pencil"
                                @click.prevent="updateFormTitre(formulaire)"></i></button>

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

                                    <div class="input-group mb-2" v-for="( content, i ) in selectedSection.inputs "
                                        :key="i">
                                        <input type="text" placeholder="Libellé" v-model="content.input"
                                            class="form-control" required>
                                        <select name="input_type" @change="addOpts(content)"
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
                                            <button type="button" title="Voir les champs" @click="showOpt"
                                                v-if="content.options !== undefined" data-toggle="tooltip"
                                                class="btn btn-info btn-icon">
                                                <i class="icon-list"></i>
                                            </button>

                                            <!-- sous options modal -->
                                            <bs-modal id="optionsModal" title="Entrer les options">
                                                <template #body-content v-if="content.options !== undefined">
                                                    <div v-for="( opt, index ) in  content.options" :key="index">
                                                        <div class="input-group">
                                                            <input type="text" v-model="opt.input_option"
                                                                placeholder="Entrer une option..." class="form-control"
                                                                required>
                                                            <div class="input-group-append">
                                                                <button class="btn btn-icon bg-grey2"
                                                                    @click.prevent="content.options.push({ input_option: '' })"
                                                                    v-if="index === 0">
                                                                    <i class="flaticon-add text-primary"></i></button>
                                                                <button v-else class="btn btn-icon bg-grey2"
                                                                    @click.prevent="content.options.splice(index, 1)">
                                                                    <i class="icon-trash text-danger"></i></button>
                                                            </div>
                                                        </div>
                                                        <bs-popover title="Configuration sous champs"
                                                            toggle-class="btn-outline-dark btn-sm border-top-0 mb-2"
                                                            toggle-icon="flaticon-add"
                                                            toggle-label="Ajouter sous champs (optionnel)">
                                                            <template #content>
                                                                <div class="input-group mb-2"
                                                                    v-for="( sousInput, k ) in  opt.sousInputs " :key="k">
                                                                    <input type="text" v-model="sousInput.sous_input"
                                                                        class="form-control"
                                                                        placeholder="Sous champs libellé">
                                                                    <div class="input-group-append" id="button-addon1">
                                                                        <button v-if="k === 0" class="btn btn-icon bg-grey2"
                                                                            @click.prevent="opt.sousInputs.push({ sous_input: '', type: 'text', options: [] })"
                                                                            type="button">
                                                                            <i class="flaticon-add text-primary"></i>
                                                                        </button>
                                                                        <button v-else class="btn btn-icon bg-grey2"
                                                                            @click.prevent="opt.sousInputs.splice(k, 1)"
                                                                            type="button">
                                                                            <i class="icon-trash text-danger"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>

                                                                <div class="d-flex justify-content-between mb-2">
                                                                    <button type="submit"
                                                                        class="btn btn-primary mt-1 mr-2 flex-fill text-uppercase">
                                                                        Valider & sauvegarder</button>
                                                                    <button
                                                                        class="btn btn-dark text-uppercase mt-1">Annuler</button>
                                                                </div>
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
                                            <button title="Ajouter un champs" v-if="i === 0"
                                                @click.prevent="selectedSection.inputs.push({ input: '', input_type: '', options: [] })"
                                                data-toggle="tooltip" class="btn bg-grey2 btn-icon">
                                                <i class="flaticon-add text-primary"></i>
                                            </button>
                                            <button title="Effacer ce champs" v-else
                                                @click.prevent="selectedSection.inputs.splice(i, 1)" data-toggle="tooltip"
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
                <button :disabled="submitLoading" id="submit-btn" type="submit" class="btn btn-success"
                    :class="submitLoading ? 'disabled' : ''" style="margin-right: 4px;"> <i v-if="submitLoading"
                        class="fa fa-spinner fa-spin" /> Sauvegarder les
                    modifications
                </button>
                <button class="btn btn-danger" data-dismiss="modal">Fermer</button>
            </template>
        </bs-modal>
        <!-- End formulaire edit modal -->




        <!-- formulaire config modal -->
        <formulaire-config-modal />
        <!-- End formulaire config modal -->

    </div>
</template>

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
            isNew: false, //Quand l'on crée un nouveau formulaire...
            submitLoading: false,
        }
    },

    async mounted() {
        await this.$store.dispatch('dantic/voirFormulaires')
    },

    computed: {
        formulaires() {
            if (this.searchWord) {
                let filtered = this.$store.getters['dantic/GET_FORMULAIRES'];
                return filtered.filter((f) => f.titre.toLowerCase().includes(this.searchWord.toLowerCase()));
            }
            return this.$store.getters['dantic/GET_FORMULAIRES']
        },
        viewLoading() {
            return this.$store.state.dantic.dataLoading;
        }
    },

    methods: {
        updateFormTitre(formulaire) /** Method pour mettre à jour le titre d'un formulaire */ {
            this.$swal({
                text: "Modifier le titre du formulaire",
                input: 'text',
                inputValue: formulaire.titre,
                showConfirmButton: true,
                showCancelButton: true,
                confirmButtonText: "Modifier",
                cancelButtonText: "Annuler"
            }).then((result) => {
                if (result.isConfirmed) {
                    /**
                     * Lancer la requete de mise a jour du titre.
                     */

                    formulaire.titre = result.value;
                    var data = {
                        formulaire_id: formulaire.formulaire_id,
                        titre: formulaire.titre
                    };

                    /**
                     * Call to the Api.
                     */
                    Api.editFormTitre(data);


                    console.log(result);
                }
            });
        },
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
        addOpts(content) {
            if (content.input_type.includes('select') || content.input_type.includes('checkbox')) {
                content.options = [];
                content.options.push({ input_option: '' })
            }
            else {
                if (content.options !== undefined) {
                    content.options = [];
                }
            }
        },
        showOpt() {
            $("#optionsModal").modal('show');
        },
        getSection(section) {
            /*Lorsqu'il s'agit de l'affichage de la section pour une eventuelle modification*/
            this.selectedSection = section;
            this.$nextTick(() => {
                $("#formulaireEditModal").modal('show');
            })
        },
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
                            $('#formulaireEditModal').modal('hide');
                            this.$store.dispatch('dantic/voirFormulaires');
                            Swal.fire({
                                title: 'Success',
                                text: "Nouvelles section ajoutée avec succès !",
                                icon: 'success',
                                showCancelButton: false,
                                showConfirmButton: false,
                                timer: 3000
                            })
                        }
                        return;
                    }
                    else {
                        Api.modifierSectionFormulaire(this.selectedSection).then((res) => {
                            this.submitLoading = false;
                            console.log(res);
                            if (res) {
                                $('#formulaireEditModal').modal('hide');
                                this.$store.dispatch('dantic/voirFormulaires');
                                Swal.fire({
                                    title: 'Success',
                                    text: "Les modifications ont été effectuées avec succès !",
                                    icon: 'success',
                                    showCancelButton: false,
                                    showConfirmButton: false,
                                    timer: 3000
                                })
                            }
                        })
                    }

                }
            });

        },
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
        openFormulaireConfigModal() {
            this.$store.dispatch('dantic/getSection', null)
            $('#configModal').modal('show');
        }
    }
}
</script>