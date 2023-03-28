<template>
    <div class="main-panel">
        <div class="container">
            <div class="panel-header">
                <div class=" page-inner py-5">
                    <div class="page-header">
                        <h4 class="page-title">Agents</h4>
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
                                <a href="#">Liste des agents</a>
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
                                    <input type="text" class="form-control" v-model="searchword"
                                        placeholder="recherche agent..." aria-label="Text input with dropdown button">
                                    <div class="input-group-append">
                                        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">Filtrer</button>
                                        <div class="dropdown-menu" x-placement="bottom-start"
                                            style="position: absolute; transform: translate3d(229px, 43px, 0px); top: 0px; left: 0px; will-change: transform;">
                                            <a class="dropdown-item" href="#">Nom</a>
                                            <a class="dropdown-item" href="#">Status</a>
                                            <a class="dropdown-item" href="#">Rôle</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" @click="showAgentRegisterModal"
                                class="btn btn-success d-none d-sm-inline-block"><i
                                    class="icon-user-follow mr-2"></i>Nouveau agent</button>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="card full-height mt-4 animated fadeIn">
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="agents-datatables" class="display table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th>Nom complet</th>
                                                <th>Numero référence</th>
                                                <th>Fonction</th>
                                                <th>Grade</th>
                                                <th>Sexe</th>
                                                <th>Email</th>
                                                <th>Téléphone</th>
                                                <th>Status</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(agent, index) in agents" :key="index">
                                                <td>{{agent.nom_complet}}</td>
                                                <td>{{agent.numero_reference}}</td>
                                                <td>{{agent.fonction}}</td>
                                                <td>{{agent.grade}}</td>
                                                <td>{{agent.sexe}}</td>
                                                <td>{{ agent.nom_complet }}</td>
                                                <td>{{ agent.email }}</td>
                                                <td>{{ agent.telephone }}</td>

                                                <td><span class="text-success fw-bold">{{ agent.agent_status }}</span></td>
                                                <td>
                                                    <button type="button" data-toggle="tooltip" title="Voir agent info."
                                                        class="btn btn-info btn-sm btn-lg"
                                                        data-original-title="Voir agent & modification">
                                                        Afficher agent
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

        <!-- Agent register modal -->
        <agent-create-modal />
        <!-- End Agent reg modal -->

        <!-- Global footer component -->
        <d-footer></d-footer>
        <!-- end Global footer component -->

    </div>
</template>

<script>
import servicesMixins from '../../mixins/services.mixins';

import AgentCreateModal from "../modals/agent-create-modal.vue";
export default {
    name: "Ipa-view",
    components: { AgentCreateModal },
    mixins: [servicesMixins],

    data() {
        return {
            /*  filter word */
            searchword: '',
        }
    },

    computed: {
        /* filter agent from list */
        agents() {
            if (this.searchword) {
                let filtered = this.$store.getters['dantic/GET_AGENTS'];
                return filtered.filter((agent) => agent.nom_complet.toLowerCase().includes(this.searchword.toLowerCase()));
            }
            else {
                return this.$store.getters['dantic/GET_AGENTS'];
            }
        }
    },

    methods: {
        showAgentRegisterModal() {
            $("#agentModal").modal('show')
        },
    },
    mounted() {
        /*  $('#agents-datatables').DataTable({
             "language": {
                 "paginate": {
                     "previous": "Précédent",
                     "next": "Suivant"
                 },
                 "zeroRecords": "Aucune données trouvés !",
                 "info": "Afficher _PAGE_ sur _PAGES_",
                 "search": "Recherche"
             }
         }) */
        $(document).ready(function () {
            $('[data-toggle="tooltip"]').tooltip();
        });
        this.$store.dispatch('dantic/viewAgents');
        /*init dataTable*/
    }
}
</script>