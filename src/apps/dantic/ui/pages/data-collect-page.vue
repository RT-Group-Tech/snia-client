<template>
    <div class="main-panel">
        <div class="container">
            <div class="panel-header">
                <div class=" page-inner py-5">
                    <div class="page-header">
                        <h4 class="page-title">Données collectées</h4>
                        <ul class="breadcrumbs">
                            <li class="nav-home">
                                <router-link :to="{ name: 'dashboard-route' }">
                                    <i class="flaticon-home"></i>
                                </router-link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            <div class="page-inner mt--5">
                <div class="row ">
                    <div class="col-md-6">
                        <div class="form-group mb-4 p-0">
                            <label>Filtrer par date</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text bg-light text-muted"><i class="icon-magnifier"></i></span>
                                </div>

                                <input type="date" class="form-control" id="datepicker1" placeholder="Du...">
                                <input type="date" placeholder="Au..." class="form-control" id="datepicker2">
                                <div class="input-group-append">
                                    <button class="btn btn-info">Filtrer</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group mb-4 p-0 m-0">
                            <label>Filtrer par sujet</label>
                            <div class="d-flex">
                                <multi-select :options="sujets" display-property="sujet" value-property="sujet_id"
                                    placeholder="Cliquer pour filtrer..." v-model="selectSujet" />

                            </div>
                        </div>

                    </div>
                </div>
                <div v-if="collectes.length < 1"
                    class="card w-100 p-5 h-75 d-flex align-items-center justify-content-center">
                    <svg width="100px" height="100px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#edeff5"
                        class="bi bi-cloud-slash">
                        <path fill-rule="evenodd"
                            d="M3.112 5.112a3.125 3.125 0 0 0-.17.613C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13H11l-1-1H3.781C2.231 12 1 10.785 1 9.318c0-1.365 1.064-2.513 2.46-2.666l.446-.05v-.447c0-.075.006-.152.018-.231l-.812-.812zm2.55-1.45-.725-.725A5.512 5.512 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773a3.2 3.2 0 0 1-1.516 2.711l-.733-.733C14.498 11.378 15 10.626 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3c-.875 0-1.678.26-2.339.661z" />
                        <path d="m13.646 14.354-12-12 .708-.708 12 12-.707.707z" />
                    </svg>
                    <h4 class="mt-2">Aucune donnée trouvée !</h4>
                </div>
                <div class="row" v-else>
                    <div class="col-6 col-sm-4 col-lg-2" v-for="(collecte, i) in collectes" :key="i">
                        <div class="card folder-card rounded" @click.prevent="showCollecte(collecte)">
                            <div class="card-body p-3 text-center">
                                <div class="h1 m-0"> <i class="fas fa-folder fa-2x" style="color: #1572e8"></i> </div>
                                <div class="text-muted mb-2">{{ $filters.sortLength(collecte.titre, 22, '...') }}</div>
                                <div class="text-right text-muted">
                                    <small style="font-size: 10px;" class="fw-mediumbold"><i
                                            class="icon-calendar mr-1"></i>20/12/2023</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Global footer component -->
        <d-footer></d-footer>
        <!-- end Global footer component -->


        <!--  Modal pour voir les détails de la collecte -->
        <collecte-view-modal :collecte="selectedCollecte"></collecte-view-modal>
        <!-- End modal -->


    </div>
</template>

<script>
import collecteViewModal from '../modals/collecte-view-modal.vue'
export default {
    name: "Data-Collected",

    data() {
        return {
            selectedCollecte: {},
            selectSujet: [],
        }
    },

    components: {
        collecteViewModal
    },
    computed: {
        collectes() {
            if (this.selectSujet.length > 0) {
                let filtered = this.$store.getters['dantic/GET_COLLECTES'];
                return filtered;
            }
            else {
                return this.$store.getters['dantic/GET_COLLECTES']
            }

        },
        sujets() {
            return this.$store.getters['dantic/GET_SUJETS']
        }
    },

    methods: {
        showCollecte(collecte) {
            this.selectedCollecte = collecte;
            this.$nextTick(() => $('#collecte-view-modal').modal('show'))
        }
    },

    mounted() {
        this.$store.dispatch('dantic/voirCollectes');
        this.$store.dispatch("dantic/voirSujets");
    }
}
</script>