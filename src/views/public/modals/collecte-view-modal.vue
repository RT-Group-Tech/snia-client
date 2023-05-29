<template>
    <bs-modal id="collecte-view-modal" size="modal-xl" :title="collecte.titre">
        <template #body-content>
            <div class="row">
                <div class="col-md-9">
                    <h6 class="card-title fw-extrabold"><span class="fa fa-calendar-check"></span> Collecte du
                        {{ collecteView.date_enregistrement }}</h6>
                </div>
                <div class="col-md-3">
                    <select name="" id="" class="form-control" v-model="collecteView">
                        <option v-for="d in collecte.collectes" :key="d" :value="d">{{ d.date_enregistrement }}
                        </option>
                    </select>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-md-6" v-for="(data, i) in collecteView.data" :key="i">
                    <div class="form-group form-group-default">
                        <label class="text-info fw-extrabold">{{ data.input }}</label>
                        <div class="input-group">
                            <input type="text" class="form-control fw-extrabold text-dark" name="name" placeholder="Name"
                                :value="data.valeur" disabled>
                            <div class="input-group-append p-md-0 bg-transparent">
                                <span class="input-group-text fa fa-ban" @click.prevent="reportData"
                                    style="cursor:pointer;"> </span>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </template>
        <template #footer-content>
            <button class="btn btn-success"> <i class="icon-printer mr-1"></i> Imprimer</button>
            <button class="btn btn-danger" data-dismiss="modal">Fermer</button>
        </template>
    </bs-modal>
</template>

<script>

export default {
    name: "CollecteViewModal",
    data() {
        return {
            collecteView: {}
        }
    },
    props: {
        collecte: {
            type: Object,
            default: () => {

            },
        }
    },
    computed: {

    },
    methods: {
        reportData() {
            this.$swal({
                text: "Voulez-vous signaler cette donnée?",
                showConfirmButton: true,
                showCancelButton: true,
                confirmButtonText: "Oui",
                cancelButtonText: "Non",
                confirmButtonColor: 'green',
                cancelButtonColor: 'red'
            }).then((result) => {

                if (result.isConfirmed) {
                    /**
                     * Signaler cette donnée.
                     */
                }

            });
        },
        setCollecteView(collecteData) {
            this.collecteView = collecteData;
        }
    },
    mounted() {

    },
    watch: {
        collecte(newValue) {
            this.collecteView = newValue.collectes[0];
        }
    }
}

</script>

<style></style>