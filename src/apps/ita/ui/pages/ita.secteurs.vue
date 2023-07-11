<template>
    <div class="main-panel">
        <div class="bg-primary2 pt-4 pb-5">
            <div class="container text-white py-2">
                <div class="d-flex align-items-center">
                    <div class="mr-3">
                        <h1 class="mb-3">Secteur</h1>
                        <h5 class="op-7 mb-3">Créer & voir les secteurs !</h5>
                    </div>
                    <div class="ml-auto">
                        <button type="button" class="btn btn-success" @click.prevent="$showBsModal('secteurCreateModal')">
                            <i class="flaticon-add"></i> Nouveau secteur</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mt--5">
            <div class="page-inner mt--3">
                <div class="row">
                    <div class="col-12 col-sm-12 col-lg-12">
                        <div class="row row-card-no-pd">
                            <div class="col-md-12">
                                <div class="card full-height">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <section-loader :loading="dataLoading" :data="secteurs">
                                                    <ul class="list-group list-group-bordered" v-if="secteurs.length > 0">
                                                        <li v-for="(data, i) in secteurs" :key="i"
                                                            class="list-group-item d-flex justify-content-between align-items-center">
                                                            {{ data.secteur }}
                                                            <button class="btn btn-dark btn-icon btn-sm"
                                                                data-toggle="tooltip" title="Suppression secteur">
                                                                <i class="icon-trash"></i>
                                                            </button>
                                                        </li>
                                                    </ul>

                                                    <div v-else class="p-5">
                                                        <empty-state></empty-state>
                                                    </div>
                                                </section-loader>


                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <secteur-create-modal />
</template>

<script>
import SecteurCreateModal from "../modals/ita.secteurs-create-modal"
export default {
    name: 'Ita-secteurs-page',

    data() {
        return {
            dataLoading: false
        }
    },

    components: {
        SecteurCreateModal
    },

    mounted() {
        this.$initBsTooltip();
        this.dataLoading = true;
        this.$store.dispatch('ita/voirSecteurs').then(() => this.dataLoading = false).catch(() => this.dataLoading = false);
    },

    computed: {
        secteurs() {
            return this.$store.getters['ita/GET_SECTEURS'];
        }
    },
    methods: {
        showSecteurCreateModal() {
            $("#secteurCreateModal").modal('show');
        }
    }
}
</script>