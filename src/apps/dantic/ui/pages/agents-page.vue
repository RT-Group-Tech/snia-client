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
                        <div class="card full-height animated fadeIn">
                            <div class="card-header">
                                <h1 class="card-title pull-left">Liste des agents</h1>
                                <!-- <router-link :to="{ name: 'agent-create-route' }" class="btn btn-primary btn-sm pull-right">
                                                                                                                                                                                                                                                <i class="flaticon-add"></i>
                                                                                                                                                                                                                                                Nouveau agent</router-link> -->
                                <button class="btn btn-primary pull-right" @click="showAgentRegisterModal"><i
                                        class="icon-user-follow"></i>
                                    Nouveau agent</button>
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


        <!-- Agent register modal -->
        <teleport to='body'>
            <div class="modal animated zoomIn" id="agentModal" tabindex="-1" role="dialog" aria-labelledby="agentModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header bg-app-2">
                            <h5 class="modal-title text-white fw-mediumbold" id="agentModalLabel"> <i
                                    class="fa fa-user-plus mr-2"></i>
                                CREATION NOUVEAU AGENT</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" class="text-white">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form id="agent-form" @submit.prevent="submitAgent">
                                <div class="row mt-3">
                                    <div class="col-md-4">
                                        <div class="form-group form-group-default bg-light">
                                            <label>Nom</label>
                                            <input type="text" class="form-control" name="nom"
                                                placeholder="Saisir le nom de l'agent..." required>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group form-group-default bg-light">
                                            <label>Postnom</label>
                                            <input type="text" class="form-control" name="postnom"
                                                placeholder="Saisir postnom..." required>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group form-group-default bg-light">
                                            <label>Prénom</label>
                                            <input type="text" class="form-control" name="prenom"
                                                placeholder="Saisir prénom..." required>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-6">
                                        <div class="form-group form-group-default bg-light">
                                            <label>Email</label>
                                            <input type="email" class="form-control" name="email"
                                                placeholder="Saisir email..." required>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group form-group-default bg-light">
                                            <label>Téléphone</label>
                                            <input type="tel" class="form-control" name="telephone"
                                                placeholder="Saisir le n° de téléphone...(+243)" value="+243" required>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-6">
                                        <div class="form-group form-group-default bg-light">
                                            <label>Mot de passe</label>
                                            <input type="password" class="form-control" name="pass"
                                                placeholder="Saisir mot de passe..." required>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group form-group-default bg-light">
                                            <label>Confirmation mot de passe</label>
                                            <input type="password" class="form-control" name="confirm"
                                                placeholder="Confirmer mot de passe..." required>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-right mt-3">
                                    <button id="submit-btn" type="submit" class="btn btn-success"
                                        style="margin-right: 4px;">Enregistrer</button>
                                    <button class="btn btn-danger">Fermer</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </teleport>
        <!-- End Agent reg modal -->


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

    methods: {
        showAgentRegisterModal() {
            $("#agentModal").modal('show')
        },

        submitAgent(event) {
            this.$validForm("agent-form", event, (result, form) => {
                if (!result) {
                    this.$animatedFailedTask("submit-btn");
                } else {

                }
            });
        }
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
        $('#agents-datatables').scrollbar();
        this.$store.dispatch('dantic/viewAgents');
    }


}
</script>