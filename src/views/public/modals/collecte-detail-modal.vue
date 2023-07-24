<template>
    <bs-modal id="collecte-detail-modal" size="modal-lg" :title="data.titre">
        <template #body-content>
            <div class="row">
                <div class="col-md-6">
                    <h2>Filtrer par date {{ date }}</h2>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1"><i class="icon-calendar"></i></span>
                            </div>
                            <input type="date" v-model="date" class="form-control" placeholder="Select date">
                        </div>
                    </div>
                </div>
            </div>
            <div class="list-group list-group-bordered">
                <a class="list-group-item d-flex justify-content-between align-items-center"
                    @click.prevent="() => showDetail(collecte)" href="javascript:void(0)"
                    v-for="(collecte, index) in data.collectes" :key="index">
                    Collècte du {{ collecte.date_enregistrement }}
                    <i class="icon-arrow-right"></i>
                </a>
            </div>
        </template>
        <template #footer-content>
            <button class="btn btn-danger" data-dismiss="modal">Fermer</button>
        </template>
    </bs-modal>
    <collecte-view-modal :collecte="selectedCollecte"></collecte-view-modal>
</template>

<script>
import collecteViewModal from './collecte-view-modal.vue'
export default {
    name: "CollectDetails",
    data() {
        return {
            selectedCollecte: {},
            date: ''
        }
    },
    components: {
        collecteViewModal
    },
    methods: {
        showDetail(collecte) {
            console.log(JSON.stringify(this.selectedCollecte));
            this.$nextTick(() => {
                this.selectedCollecte = collecte;
                this.$showBsModal('collecte-view-modal');
            });
        }
    },
    props: {
        data: {
            type: Object,
            default: () => { }
        }
    }
}
</script>


<style>
.list-group a:hover {
    background: #177dff !important;
    color: #ffffff;
}

.list-group a:hover.icon-arrow-right {
    color: #ffffff;
}
</style>