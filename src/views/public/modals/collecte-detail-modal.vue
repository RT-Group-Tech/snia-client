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
                            <input id="dateField" type="text" class="form-control" placeholder="Sélectionnez la date"
                                @change="date = $event">
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
    mounted() {
        $('#dateField').datetimepicker({
            format: 'MM/DD/YYYY',
        })
    },
    methods: {
        showDetail(collecte) {
            if (collecte.data.length > 0) {
                this.$nextTick(() => {
                    this.selectedCollecte = collecte;
                    this.$showBsModal('collecte-view-modal');
                });
            }
            else {
                Swal.fire({
                    title: 'Information manquante',
                    text: 'Aucune information repertorié pour cette collècte ! ',
                    icon: 'info',
                    showConfirmButton: false,
                    showCancelButton: false,
                    timer: 2000
                });
                return
            }

        },
        onChangedDate(date) {
            console.log(date);
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