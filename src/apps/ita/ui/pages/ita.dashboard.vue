<template>
    <div class="main-panel">
        <div class="bg-primary2 pt-4 pb-5">
            <div class="container text-white py-2">
                <div class="d-flex align-items-center">
                    <div class="mr-3">
                        <h1 class="mb-3">Bienvenue sur le module {{user.access.access}}</h1>
                        <h5 class="op-7 mb-3">Inspéction Territoriale Agricole de la Rép. Dém du Congo</h5>
                    </div>
                    <div class="ml-auto">
                        <button type="button" class="btn btn-light" @click.prevent="$showBsModal('report-modal')">
                            <i class="icon-docs"></i> Rapport</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mt--5">
            <div class="page-inner mt--3">
            </div>
          <div class="row">
            <data-collect-page></data-collect-page>
          </div>
        </div>
    </div>
    <secteur-create-modal />
    <report-modal />
</template>

<script>
import dataCollectPage from "@/views/public/pages/data-collect-page";
import SecteurCreateModal from "../modals/ita.secteurs-create-modal"
import reportModal from "@/views/public/modals/generate-report-modal";
export default {
    name: 'ItaDashboard',
    components: {
        SecteurCreateModal,
        reportModal,
        dataCollectPage
    },
    computed:{
      user() {
        return this.$store.getters['auth/GET_USER']
      },
    }
}
</script>