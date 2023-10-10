<template>
    <div class="main-panel">
        <div class="container">
            <div class="panel-header">
                <div class=" page-inner">
                    <div class="page-header">
                        <h4 class="page-title">Données collectées</h4>
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

                                <input v-model="filter.from" type="date" class="form-control" id="datepicker1" placeholder="Du...">
                                <input v-model="filter.to" type="date" placeholder="Au..." class="form-control" id="datepicker2">
                                <div class="input-group-append">
                                    <button @click.prevent="filterData" class="btn btn-info">Filtrer</button>
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
                <section-loader :loading="dataLoading" :data="collectes">
                    <div>
                        <div v-if="collectes.length < 1"
                            class="card w-100 p-5 h-75 d-flex align-items-center justify-content-center">
                            <lottie-animation :json="json" lottie-size="180"></lottie-animation>
                            <h1 class="display-4" style="font-size: 1.6em;">Aucune donnée disponible !</h1>
                        </div>
                        <div class="row" v-else>
                            <div class="col-6 col-sm-4 col-lg-2" v-for="(collecte, i) in collectes" :key="i"
                                v-show="collecte.collectes.length > 0">
                                <div class="card folder-card rounded animated zoomIn"
                                    @click.prevent="showCollecte(collecte)">
                                    <div class="card-body p-3 text-center">
                                        <div class="h1 m-0"> <i class="fas fa-folder fa-2x" style="color: #1572e8"></i>
                                        </div>
                                        <div class="text-muted mb-2">{{
                                            $filters.capitalize($filters.sortLength(collecte.titre,
                                                22,
                                                '...')) }}</div>
                                        <div class="text-right text-muted">
                                            <small style="display:none; font-size: 10px;" class="fw-mediumbold"><i
                                                    class="icon-calendar mr-1"></i>20/12/2023</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section-loader>
            </div>
        </div>


        <!-- Global footer component -->
        <d-footer v-if="$route.name === 'dantic-collect-route'"></d-footer>
        <!-- end Global footer component -->


        <!--  Modal pour voir les détails de la collecte -->

        <collecte-detail-modal :data="selectedCollecte"></collecte-detail-modal>
        <!-- End modal -->

    </div>
</template>

<script>
import collecteDetailModal from '../modals/collecte-detail-modal.vue'
import emptyStateJson from "@/assets/json/folder-empty.json";
export default {
    name: "Data-Collected",

    data() {
        return {
            selectedCollecte: {},
            selectSujet: [],
            dataLoading: false,
            json: emptyStateJson,
            filter:{
              from:"",
              to:""
            }
        }
    },

    components: {
        collecteDetailModal,
    },
    computed: {
        collectes() {
            if (this.selectSujet.length > 0) {
                /*Filter les données en fonction de sujets sélectionnés par l'utilisateur*/
                let arr = this.$store.getters.GET_COLLECTES;
                let arr2 = this.selectSujet;
                let filtered = arr.filter(function (arr_el) {
                    return arr2.filter(function (sujetId) {
                        return sujetId.includes(arr_el.sujets[0].sujet_id) && (arr_el.collectes.length > 0);
                    }).length > 0
                })
                return filtered;
            }
            else {
                return this.$store.getters.GET_COLLECTES
            }

        },
        sujets() {
            return this.$store.getters.GET_SUJETS
        }
    },

    methods: {
        filterData(){

          var d=this.filter.from.split("-");
          this.filter.from=d[2]+"/"+d[1]+"/"+d[0];
          d=this.filter.to.split("-");
          this.filter.to=d[2]+"/"+d[1]+"/"+d[0];

          this.viewData();
        },
        showCollecte(collecte) {
            this.selectedCollecte = collecte;
            this.$nextTick(() => this.$showBsModal('collecte-detail-modal'))
        },
        viewData(){
          this.dataLoading = true;
          var filter=(this.filter.from!==null)? this.filter : null ;
          this.$store.dispatch('voirCollectes',filter).then((rs) => this.dataLoading = false).catch(() => this.dataLoading = false);
          this.$store.dispatch("voirSujets");
        }
    },
    mounted() {
        this.viewData();
    },
}
</script>