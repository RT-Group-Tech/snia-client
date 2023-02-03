<template>
    <div class="main-panel">
        <div class="container">
            <div class="panel-header bg-app-gradient">
                <div class="page-inner py-5">
                    <div class="d-flex align-items-left align-items-md-center flex-column flex-md-row">
                        <div>
                            <h2 class="text-white pb-2 fw-bold">DANTIC</h2>
                            <h5 class="text-white op-7 mb-2 fw-bold">Liste des Inspections Provinciales à L'Agriculture
                                (IPA) & des Inspections Territoriales (ITA) y afferents !
                            </h5>
                        </div>
                        <div class="ml-md-auto py-2 py-md-0">

                            <router-link :to="{ name: 'ipa-ita-reg-route' }" class="btn btn-light"> <i
                                    class="flaticon-add"></i>
                                Créer IPA & ITA</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page-inner mt--5">
                <div class="row mt--2">
                    <div class="col-md-12">
                        <div class="card full-height animated fadeInUp">
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
}
</script>