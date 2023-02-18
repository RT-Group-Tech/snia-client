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
                                <div class="row">
                                    <div class="col-md-9">
                                        <div class="form-group">
                                            <div class="input-group">
                                                <input type="text" v-model="searchword" class="form-control"
                                                    placeholder="Recherche agent..." aria-label="Username"
                                                    aria-describedby="basic-addon1">
                                                <div class="input-group-append">
                                                    <span class="input-group-text" id="basic-addon1"><i
                                                            class="flaticon-search-1"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="table-responsive">
                                    <table id="agents-datatables" class="display table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th>Nom complet</th>
                                                <th>E-mail</th>
                                                <th>Téléphone</th>
                                                <th>Status</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(agent, index) in agents" :key="index">
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
                                            <input type="text" v-model="name.first" class="form-control" name="nom"
                                                placeholder="Saisir le nom de l'agent..." required>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group form-group-default bg-light">
                                            <label>Postnom</label>
                                            <input type="text" v-model="name.last" class="form-control" name="postnom"
                                                placeholder="Saisir postnom..." required>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group form-group-default bg-light">
                                            <label>Prénom</label>
                                            <input type="text" v-model="name.nick" class="form-control" name="prenom"
                                                placeholder="Saisir prénom..." required>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-6">
                                        <div class="form-group form-group-default bg-light">
                                            <label>Email</label>
                                            <input type="email" v-model="form.email" class="form-control" name="email"
                                                placeholder="Saisir email..." required>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group form-group-default bg-light">
                                            <label>Téléphone</label>
                                            <input type="tel" v-model="form.telephone" class="form-control" name="telephone"
                                                placeholder="Saisir le n° de téléphone...(+243)" required>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-6">
                                        <div class="form-group form-group-default bg-light">
                                            <label>Mot de passe</label>
                                            <input type="password" v-model="form.pass" class="form-control" name="pass"
                                                placeholder="Saisir mot de passe..." required>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group form-group-default bg-light">
                                            <label>Confirmation mot de passe</label>
                                            <input type="password" v-model="form.confirm" class="form-control"
                                                name="confirm" placeholder="Confirmer mot de passe..." required>
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
import servicesMixins from '../../mixins/services.mixins';
import Api from "@/apps/dantic/api"
export default {
    name: "Ipa-view",
    mixins: [servicesMixins],

    data() {
        return {
            /*  filter word */
            searchword: '',
            /* split full name */
            name: {
                first: '',
                last: '',
                nick: ''
            },
            form: {
                nom_complet: '',
                telephone: '',
                email: '',
                pass: '',
                confirm: ''
            }
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

        submitAgent(event) {
            /* agent name completion */
            this.form.nom_complet = `${this.name.first.toUpperCase()} ${this.name.last.toUpperCase()} ${this.name.nick.toLowerCase()}`;
            this.$validForm("agent-form", event, async (result, form) => {
                if (!result) {
                    this.$animatedFailedTask("submit-btn");
                } else {
                    if (this.form.pass !== this.form.confirm) {
                        return
                    }
                    Api.creerAgent(this.form, (data) => {
                        $("#agentModal").modal('hide')
                        console.log(data);
                        this.$store.dispatch("dantic/viewAgents")
                    })
                }
            });
        }
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