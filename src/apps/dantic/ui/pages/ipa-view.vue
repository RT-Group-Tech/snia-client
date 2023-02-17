<template>
    <div class="main-panel">
        <div class="container">
            <div class="panel-header bg-primary-gradient">
                <div class="page-inner py-5">
                    <div class="d-flex align-items-left align-items-md-center flex-column flex-md-row">
                        <div>
                            <h2 class="text-white pb-2 fw-bold">DANTIC</h2>
                            <h5 class="text-white op-7 mb-2 fw-bold">Liste des Inspections Provinciales à L'Agriculture
                                (IPA) & des Inspections Territoriales (ITA) y afferents !
                            </h5>
                        </div>
                        <div class="ml-md-auto py-2 py-md-0">

                            <!-- <router-link :to="{ name: 'ipa-ita-reg-route' }" class="btn btn-light"> <i
                                                                        class="flaticon-add"></i>
                                                                    Créer IPA & ITA</router-link> -->
                            <button class="btn btn-light" @click="showIpaRegisterModal">
                                <i class="flaticon-add"></i>
                                Créer IPA & ITA
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page-inner mt--5">
                <div class="row mt--2">
                    <div class="col-md-12">
                        <div class="card full-height animated fadeIn">
                            <div class="card-body">
                                <!-- table pour afficher les ipa & ita -->
                                <ipa-table :data="ipas"></ipa-table>
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




        <!-- IPA register modal -->
        <teleport to='body'>
            <div class="modal animated fadeInUp" id="ipaModal" tabindex="-1" role="dialog" aria-labelledby="ipaModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header bg-app-2">
                            <h5 class="modal-title text-white fw-mediumbold" id="agentModalLabel"> <i
                                    class="fa fa-user-plus mr-2"></i>
                                CREATION INSPECTION PROVINCIALE</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" class="text-white">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="row row-nav-line">
                                <ul class="nav nav-tabs nav-line nav-color-secondary w-100 pl-3" role="tablist">
                                    <li class="nav-item submenu"> <a class="nav-link active show" data-toggle="tab"
                                            href="#home" role="tab" aria-selected="true">IPA</a> </li>
                                    <li class="nav-item submenu"> <a class="nav-link" data-toggle="tab" href="#profile"
                                            role="tab" aria-selected="false">INSPECTEUR</a> </li>
                                    <li class="nav-item submenu"> <a class="nav-link" data-toggle="tab" href="#settings"
                                            role="tab" aria-selected="false">ITA</a> </li>
                                </ul>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-4">
                                    <div class="form-group form-group-default">
                                        <label>Nom</label>
                                        <input type="text" class="form-control" name="name" placeholder="Name"
                                            value="Hizrian">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group form-group-default">
                                        <label>Postnom</label>
                                        <input type="email" class="form-control" name="email" placeholder="Name"
                                            value="hello@example.com">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group form-group-default">
                                        <label>Prénom</label>
                                        <input type="email" class="form-control" name="email" placeholder="Name"
                                            value="hello@example.com">
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-6">
                                    <div class="form-group form-group-default">
                                        <label>Email</label>
                                        <input type="text" class="form-control" name="name" placeholder="Name"
                                            value="Hizrian">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group form-group-default">
                                        <label>Téléphone</label>
                                        <input type="email" class="form-control" name="email" placeholder="Name"
                                            value="hello@example.com">
                                    </div>
                                </div>


                            </div>
                            <div class="row mt-3">
                                <div class="col-md-6">
                                    <div class="form-group form-group-default">
                                        <label>Mot de passe</label>
                                        <input type="text" class="form-control" name="name" placeholder="Name"
                                            value="Hizrian">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group form-group-default">
                                        <label>Confirmation mot de passe</label>
                                        <input type="email" class="form-control" name="email" placeholder="Name"
                                            value="hello@example.com">
                                    </div>
                                </div>

                            </div>
                            <div class="text-right mt-3">
                                <button class="btn btn-success" style="margin-right: 4px;">Enregistrer</button>
                                <button class="btn btn-danger">Fermer</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </teleport>
        <!-- End IPA reg modal -->

</div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
    name: "Ipa-view",

    computed: {
        ...mapGetters({
            ipas: 'dantic/GET_IPAS'
        })
    },
    methods: {
        showIpaRegisterModal() {
            $("#ipaModal").modal('show');
        }
    },
}
</script>