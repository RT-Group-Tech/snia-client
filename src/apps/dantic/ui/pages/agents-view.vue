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
                                <a href="#">Agents</a>
                            </li>
                            <li class="separator">
                                <i class="flaticon-right-arrow"></i>
                            </li>
                            <li class="nav-item">
                                <a href="#">liste des agents</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <div class="page-inner mt--5">
                <div class="row mt--2">
                    <div class="col-md-12">
                        <div class="card full-height animated fadeInUp">
                            <div class="card-header">
                                <h1 class="card-title pull-left">Liste des agents</h1>
                                <router-link :to="{ name: 'agent-create-route' }"
                                    class="btn btn-primary btn-sm pull-right"> <i class="flaticon-add"></i>
                                    Nouveau agent</router-link>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="agents-datatables" class="display table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th>Photo</th>
                                                <th>Nom complet</th>
                                                <th>Téléphone</th>
                                                <th>E-mail</th>
                                                <th>Adresse</th>
                                                <th>Territoire</th>
                                                <th>Province</th>
                                                <th>Fonction</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>Photo</th>
                                                <th>Nom complet</th>
                                                <th>Téléphone</th>
                                                <th>E-mail</th>
                                                <th>Adresse</th>
                                                <th>Territoire</th>
                                                <th>Province</th>
                                                <th>Fonction</th>
                                                <th></th>
                                            </tr>
                                        </tfoot>
                                        <tbody>
                                            <tr v-for="(agent, index) in agents" :key="index">
                                                <td>
                                                    <div class="avatar avatar-sm">
                                                        <img src="assets/img/picture_placeholder.png" alt="photo"
                                                            class="avatar-img rounded">
                                                    </div>

                                                </td>

                                                <td>{{ agent.nom }}</td>
                                                <td>{{ agent.telephone }}</td>
                                                <td>{{ agent.email }}</td>
                                                <td>{{ agent.adresse }}</td>
                                                <td>{{ agent.territoire }}</td>
                                                <td>{{ agent.province }}</td>
                                                <td>{{ agent.fonction }}</td>
                                                <td>
                                                    <button type="button" data-toggle="tooltip"
                                                        title=" Voir agent & modification"
                                                        class="btn btn-link btn-primary btn-lg"
                                                        data-original-title="Voir agent & modification">
                                                        <i class="fa fa-edit"></i>
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
        <!-- Global footer component -->
        <d-footer></d-footer>
        <!-- end Global footer component -->
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import servicesMixins from '../../mixins/services.mixins';
export default {
    name: "Ipa-view",
    mixins: [servicesMixins],

    computed: {
        ...mapGetters({
            agents: 'dantic/GET_AGENTS'
        })

    },

    mounted() {

        /*init dataTable*/
        $('#agents-datatables').DataTable({
            "language": {
                "paginate": {
                    "previous": "Précédent",
                    "next": "Suivant"
                },
                "lengthMenu": "Afficher _MENU_ enregistrements / page",
                "zeroRecords": "Aucune données trouvés !",
                "info": "Afficher _PAGE_ pour _PAGES_",
                "infoEmpty": "Aucune données à afficher !",
                "search": "Recherche"
            }
        })
        this.$store.dispatch('dantic/viewAgents')
    }


}
</script>