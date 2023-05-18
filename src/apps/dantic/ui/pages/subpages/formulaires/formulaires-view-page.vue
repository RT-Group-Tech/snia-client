<template>
    <div class="tab-pane fade" id="v-pills-forms" role="tabpanel" aria-labelledby="v-pills-buy-tab-icons">
        <div class="p-2">
            <div class="d-lg-flex d-block mb-4">
                <h3 class="fw-extrabold">Liste des Formulaires </h3>
                <form action="#" class="ml-auto">
                    <div class="input-group">
                        <input type="text" v-model="searchWord" placeholder="Recherche formulaire..." class="form-control">
                        <div class="input-group-append">
                            <span class="input-group-text">
                                <i class="fa fa-search search-icon"></i>
                            </span>
                        </div>
                    </div>
                </form>
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
        <teleport to="body">
            <div class="modal fade" id="formulaireEditModal" tabindex="-1" role="dialog" aria-labelledby="ipaModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl" role="document">
                    <form class="modal-content" @submit.prevent="updateSectionFormulaire">
                        <div class="modal-header bg-app-2">
                            <h4 class="modal-title text-white fw-mediumbold" id="ipaModalLabel">
                                <i class="fas fa-edit mr-1"></i>Edition formulaire
                            </h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" class="text-white">&times;</span>
                            </button>
                        </div>

                        <div class="modal-body" v-if="selectedSection.section !== undefined">
                            <div class="row">
                                <!-- Formulaire section titre -->
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label>Section <sup class="text-danger">*</sup></label>
                                        <input type="text" v-model="selectedSection.section" class="form-control"
                                            placeholder="Entrer le titre de la section..." required>
                                    </div>
                                </div>
                                <!-- Formulaire section contents -->
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label class="d-flex justify-content-between"
                                            :class="`${selectedSection.inputs.length > 0 ? 'border-bottom' : ''}`"><span>Contenus/Champs
                                                <sup class="text-danger">*</sup></span> <button
                                                v-if="selectedSection.inputs.length == 0"
                                                class="btn btn-icon btn-sm btn-info"
                                                @click.prevent="selectedSection.inputs.push({ input: '', input_type: '' })">
                                                <i class="flaticon-add"></i></button></label>
                                        <div v-for="(content, j) in selectedSection.inputs" :key="j">
                                            <div class="input-group mb-2">
                                                <input type="text" v-model="content.input" placeholder="Détail"
                                                    class="form-control text-capitalize" required>
                                                <select name="valeur" @change="addOpts(content)"
                                                    class="custom-select form-control" id="valeur" required
                                                    v-model="content.input_type">
                                                    <option value="">Sélectionner valeur</option>
                                                    <option value="text">Zone de texte</option>
                                                    <option value="select">Liste déroulante</option>
                                                    <option value="checkbox">Case à cocher</option>
                                                    <option value="file">Fichier</option>
                                                    <option value="date">Date</option>
                                                    <option value="number">Numéro</option>
                                                </select>
                                                <div class="input-group-append">
                                                    <button class="btn btn-icon btn-info" v-if="(j === 0)"
                                                        @click.prevent="selectedSection.inputs.push({ input: '', input_type: '' })">
                                                        <i class="flaticon-add"></i></button>
                                                    <button v-else class="btn btn-icon btn-dark"
                                                        @click.prevent="selectedSection.inputs.splice(j, 1)"> <i
                                                            class="icon-trash"></i></button>
                                                </div>
                                            </div>
                                            <div v-if="content.options !== undefined" class="row align-items-end">
                                                <div class="offset-md-4 col-md-8" v-if="content.options.length > 0">
                                                    <div class="card p-2">
                                                        <h6 class="fw-extrabold text-capitalize">{{ content.input }} options
                                                        </h6>

                                                        <div v-for="(opt, k) in content.options" :key="k">
                                                            <div class="input-group mb-1 mt-2">
                                                                <input type="text" v-model="opt.input_option"
                                                                    placeholder="Entrer une option..." class="form-control"
                                                                    required>
                                                                <div class="input-group-append">
                                                                    <button class="btn btn-icon btn-info" v-if="k === 0"
                                                                        @click.prevent="content.options.push({ input_option: '' })">
                                                                        <i class="flaticon-add"></i>
                                                                    </button>
                                                                    <button v-else class="btn btn-icon btn-dark"
                                                                        @click.prevent="content.options.splice(k, 1)"> <i
                                                                            class="icon-trash"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <!--  <button v-if="opt.sous_inputs === undefined"
                                                                class="btn btn-sm btn-outline-dark"> <i
                                                                    class="flaticon-add mr-1"></i> Parametrage sous
                                                                champs</button> -->
                                                            <div class="card p-2 bg-light mt-1 mb-0"
                                                                v-if="opt.sous_inputs !== undefined && opt.sous_inputs.length > 0">
                                                                <h6 class="fw-extrabold text-capitalize">{{ opt.input_option
                                                                }} champs
                                                                </h6>
                                                                <div class="input-group mt-2"
                                                                    v-for="(child, index) in opt.sous_inputs" :key="index">
                                                                    <input type="text" v-model="child.sous_input"
                                                                        placeholder="Détail"
                                                                        class="form-control text-capitalize" required
                                                                        disabled>
                                                                    <select name="valeur" disabled
                                                                        class="custom-select form-control" id="valeur"
                                                                        required v-model="child.type">
                                                                        <option value="">Sélectionner valeur</option>
                                                                        <option value="text">Zone de texte</option>
                                                                        <option value="select">Liste déroulante</option>
                                                                        <option value="checkbox">Case à cocher</option>
                                                                        <option value="file">Fichier</option>
                                                                        <option value="date">Date</option>
                                                                        <option value="number">Numéro</option>
                                                                    </select>
                                                                    <!-- <div class="input-group-append">
                                                                        <button class="btn btn-icon btn-dark">
                                                                            <i class="icon-trash"></i>
                                                                        </button>
                                                                    </div> -->
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--End Formulaire section contents -->
                            </div>
                        </div>
                        <div class="modal-footer">
                            <div class="text-right mt-3">
                                <button :disabled="submitLoading" id="submit-btn" type="submit" class="btn btn-success"
                                    :class="submitLoading ? 'disabled' : ''" style="margin-right: 4px;"> <i
                                        v-if="submitLoading" class="fa fa-spinner fa-spin" /> Sauvegarder les
                                    modifications
                                </button>
                                <button class="btn btn-danger" data-dismiss="modal">Fermer</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </teleport>
        <!-- end edit modal -->

    </div>
</template>

<script>
import Api from '@/apps/dantic/api'
export default {
    name: 'Formulaires-View-Page',
    data() {
        return {
            searchWord: '',
            selectedSection: {

            },
            deleteLoading: '',
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
            console.log(content.input_type);
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
        getSection(section) {

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
        }
    }
}
</script>