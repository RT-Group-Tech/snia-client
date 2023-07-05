<template>
    <div class="main-panel">
        <div class="container">
            <div class="panel-header">
                <div class=" page-inner py-5">
                    <div class="page-header">
                        <h4 class="page-title"> Inspection Territorial Agricole </h4>
                        <ul class="breadcrumbs">
                            <li class="nav-home">
                                <router-link :to="{ name: 'dashboard-route' }">
                                    <i class="flaticon-home"></i>
                                </router-link>
                            </li>
                            <li class="separator">
                                <i class="flaticon-right-arrow"></i>
                            </li>
                            <li class="nav-item">
                                <a href="#">Liste des ITAs</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="page-inner mt--5">
                <div class="row mt--2">
                    <div class="col-md-12">
                        <div class="d-flex justify-content-between">
                            <div class="d-md-inline-block">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white">
                                            <i class="fa fa-search search-icon"></i>
                                        </span>
                                    </div>
                                    <input type="text" v-model="searchword" placeholder="Rechercher un ITA..."
                                        class="form-control" aria-label="Text input with dropdown button">
                                    <div class="input-group-append">
                                        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">Filtrer </button>
                                        <div class="dropdown-menu" x-placement="bottom-start"
                                            style="position: absolute; transform: translate3d(229px, 43px, 0px); top: 0px; left: 0px; will-change: transform;">
                                            <a class="dropdown-item" href="#">ITA</a>
                                            <a class="dropdown-item" href="#">Population</a>
                                            <a class="dropdown-item" href="#">Supérficie</a>
                                            <a class="dropdown-item" href="#">IPA</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" title="Création d'une nouvelle ita" data-toggle="tooltip"
                                class="btn btn-success d-none d-sm-inline-block" @click="showCreateItaModal">
                                <i class="flaticon-add mr-1"></i>Nouvelle ITA
                            </button>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="card full-height mt-4 animated fadeIn">
                            <div class="card-body">
                                <section-loader :loading="dataLoading">
                                    <div class="table-responsive">
                                        <table id="ipa-datatables" class="display table table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th>ITA</th>
                                                    <th>Population</th>
                                                    <th>Superficie</th>
                                                    <th>IPA</th>
                                                    <!-- <th></th> -->
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(ita, index) in itas" :key="index">
                                                    <td>{{ ita.ita }}</td>
                                                    <td>{{ ita.total_population }}</td>
                                                    <td>{{ ita.superficie }}</td>

                                                    <td><span class="fw-bold">{{ ita.ipa_id }}
                                                            <!-- //TODO:Afficher le nom de l'IPA --></span></td>
                                                    <!-- <td style="display: none;">
                                                    <button type="button" data-toggle="tooltip" title="Voir agent info."
                                                        class="btn btn-info btn-sm btn-lg"
                                                        data-original-title="Voir agent & modification">
                                                        Afficher IPA
                                                    </button>
                                                </td> -->
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </section-loader>
                                <!-- table pour afficher les ipa & ita -->
                                <!-- end table -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal Create ITA -->

        <ita-create-modal />

        <!-- End Modal Create ITA -->

        <!-- Agent register modal -->
        <!-- <agent-create-modal /> -->
        <!-- End Agent reg modal -->

        <!-- Global footer component -->
        <d-footer></d-footer>
        <!-- end Global footer component -->

    </div>
</template>

<script>

import ItaCreateModal from "../modals/ita-create-modal.vue";

export default {
    name: "Ipa-view",
    components: { ItaCreateModal },

    data() {
        return {
            searchword: '',
            dataLoading: true,
        }
    },

    mounted() {
        this.$initBsTooltip();
        if (this.itas.length > 0) {
            this.dataLoading = false;
        }
        this.$store.dispatch('dantic/viewItas').then((_) => this.dataLoading = false).catch((_) => this.dataLoading = false)

    },
    methods: {
        showCreateItaModal() {

            this.$store.state.dantic.selectedIpa = null;
            $("#itaCreateModal").modal('show');
        }
    },

    computed: {
        itas() {
            if (this.searchword) {
                let filtered = this.$store.getters['dantic/GET_ITAS'];
                return filtered.filter((ita) => ita.ita.toLowerCase().includes(this.searchword.toLowerCase()));
            }
            else {
                return this.$store.getters['dantic/GET_ITAS'];
            }
        }
    }
}
</script>