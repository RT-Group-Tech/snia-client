<template>
    <div class="modal fade" id="ita-view-modal" tabindex="-1" role="dialog" aria-labelledby="itaModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 v-if="selectIpa" class="card-title fw-extrabold">
                        <img src="assets/img/icons/city.png" height="20" width="20" class="img-fluid mr-1">
                        {{ selectIpa.province }}
                    </h4>


                    <div class="row">
                        <div class="col-md-12">
                            <div class="d-flex justify-content-between">
                                <div class="d-md-inline-block mr-2">

                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text bg-white">
                                                <i class="fa fa-search search-icon"></i>
                                            </span>
                                        </div>
                                        <input type="text" v-model="searchword" placeholder="recherche ipa..."
                                            class="form-control" aria-label="Text input with dropdown button">
                                        <div class="input-group-append">
                                            <button class="btn btn-primary dropdown-toggle" type="button"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Filtrer
                                            </button>
                                            <div class="dropdown-menu" x-placement="bottom-start"
                                                style="position: absolute; transform: translate3d(229px, 43px, 0px); top: 0px; left: 0px; will-change: transform;">
                                                <a class="dropdown-item" href="#">ITA</a>
                                                <a class="dropdown-item" href="#">Population</a>
                                                <a class="dropdown-item" href="#">Superficie</a>
                                                <!-- <a class="dropdown-item" href="#">IPA</a> -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="button" @click.prevent="showItaCreateModal"
                                    class="btn btn-success d-none d-sm-inline-block">
                                    <i class="flaticon-add mr-1"></i>Nouvelle ita
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-body">

                    <div class="col-md-12">
                        <div class="card full-height mt-4 animated fadeIn">
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="agents-datatables" class="display table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th>ITA</th>
                                                <th>Population</th>
                                                <th>Superficie</th>
                                                <th>IPA</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(ita, index) in itas" :key="index">
                                                <td>{{ ita.ita }}</td>
                                                <td>{{ ita.total_population }}</td>
                                                <td>{{ ita.superficie }}</td>
                                                <td>
                                                    <button type="button" data-toggle="tooltip" title="Voir agent info."
                                                        class="btn btn-info btn-sm btn-lg"
                                                        data-original-title="Voir ITA & Modification">
                                                        Afficher ITA
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <!-- table pour afficher les ipa & ita -->
                                <!-- end table -->
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "ItaOfIpaList",
    data() {
        return {
            searchword: ''
        }
    },
    methods: {
        showItaCreateModal() {
            $('#itaCreateModal').modal('show');
        }
    },

    computed: {
        itas() {
            if (this.searchword) {
                let filtered = this.$store.getters['dantic/GET_ITAOfIPA'];
                return filtered.filter((ita) => ita.ita.toLowerCase().includes(this.searchword.toLowerCase()));
            }
            else {
                return this.$store.getters['dantic/GET_ITAOfIPA'];
            }
        },

        selectIpa() {
            return this.$store.state.dantic.selectedIpa;
        }
    }


}

</script>

<style></style>