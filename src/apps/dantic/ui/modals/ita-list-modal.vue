<template>
    <div class="modal fade" id="ita-view-modal" tabindex="-1" role="dialog" aria-labelledby="itaModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="col-md-12">
                        <div class="d-flex justify-content-between">
                            <div class="d-md-inline-block">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white">
                                            <i class="fa fa-search search-icon"></i>
                                        </span>
                                    </div>
                                    <input type="text" class="form-control" aria-label="Text input with dropdown button">
                                    <div class="input-group-append">
                                        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">Filtrer </button>
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
                                <i class="flaticon-add mr-1"></i>Nouvelle ITA
                            </button>
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
                                            <tr v-for="(agent, index) in agents" :key="index">
                                                <!-- <td>{{ agent.nom_complet }}</td>
                                                <td>{{ agent.email }}</td>
                                                <td>{{ agent.telephone }}</td> -->

                                                <td>
                                                    <span class="text-success fw-bold">
                                                        {{ agent.agent_status }}
                                                    </span>
                                                </td>
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

                <div class="modal-footer">

                </div>

            </div>
        </div>
    </div>
</template>

<script>

export default {
    methods: {
        showItaCreateModal() {
            $('#itaCreateModal').modal('show');
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

<style></style>