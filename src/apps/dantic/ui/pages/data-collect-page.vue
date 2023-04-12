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
                                <input type="date" class="form-control" id="datepicker1" placeholder="Du...">
                                <input type="date" placeholder="Au..." class="form-control" id="datepicker2">
                                <div class="input-group-append">
                                    <button class="btn btn-primary" type="button">Filtrer</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="row">
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
        }
    },

    components: {
        collecteViewModal
    },
    computed: {
        collectes() {
            return this.$store.getters['dantic/GET_COLLECTES']
        }
    },

    methods: {
        showCollecte(collecte) {
            this.selectedCollecte = collecte;
            this.$nextTick(() => $('#collecte-view-modal').modal('show'))
        }
    },

    mounted() {
        this.$store.dispatch('dantic/voirCollectes')
    }
}
</script>