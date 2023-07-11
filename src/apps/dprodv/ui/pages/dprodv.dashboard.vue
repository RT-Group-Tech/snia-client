<template>
    <div class="main-panel">
        <div class="bg-primary2 pt-4 pb-5">
            <div class="container text-white py-2">
                <div class="d-flex align-items-center">
                    <div class="mr-3">
                        <h1 class="mb-3">Bienvenue sur le module DPRODV</h1>
                        <h5 class="op-7 mb-3">Direction de la Production des Végétaux de la Rép. Dém du Congo</h5>
                    </div>
                    <div class="ml-auto">
                        <button type="button" class="btn btn-light" @click.prevent="$showBsModal('report-modal')">
                            <i class="icon-docs"></i> Générer un rapport</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mt--5">
            <div class="page-inner mt--3">
                <div
                    class="card mt--2 d-flex m-5 p-5 justify-content-center align-content-center align-items-center flex-column">
                    <img src="assets/img/armoirie_rdc.png" alt="armoirie rdc" class="img-fluid">
                    <h4 class="display-4 text-center mt-2">Direction de la production des végétaux</h4>
                </div>
            </div>
        </div>
    </div>
    <report-modal />
</template>

<script>
import reportModal from "@/views/public/modals/generate-report-modal";
export default {
    name: 'DprodvDashboard',
    components: {
        reportModal
    }
}
</script>