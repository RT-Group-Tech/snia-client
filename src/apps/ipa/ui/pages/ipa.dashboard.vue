<template>
    <div class="main-panel">
        <div class="bg-primary2 pt-4 pb-5">
            <div class="container text-white py-2">
                <div class="d-flex align-items-center">
                    <div class="mr-3">
                        <h1 class="mb-3">Bienvenue sur le module IPA</h1>
                        <h5 class="op-7 mb-3">Inspéction Provinciale Agricole de la Rép. Dém du Congo</h5>
                    </div>
                    <div class="ml-auto">
                        <button type="button" class="btn btn-light" @click.prevent="$showBsModal('report-modal')">
                            <i class="icon-chart"></i> Générer un rapport</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mt--5">
            <div class="page-inner mt--3">
                <div class="row">
                    <div class="col-6 col-sm-4 col-lg-2">
                        <div class="card animated zoomIn">
                            <div class="card-body p-3 text-center">
                                <div class="text-muted m-0">Nombre agents de ipa</div>
                                <div class="h1 mb-3 fw-extrabold ">43</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-sm-4 col-lg-2">
                        <div class="card animated zoomIn">
                            <div class="card-body p-3 text-center">
                                <div class="text-muted m-0">Nombre de itas de ipa</div>
                                <div class="h1 mb-3 fw-extrabold">17</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-sm-4 col-lg-2">
                        <div class="card animated zoomIn">
                            <div class="card-body p-3 text-center">
                                <div class="text-muted m-0">Nombre agriculteurs</div>
                                <div class="h1 mb-3 fw-extrabold">700</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-sm-4 col-lg-2">
                        <div class="card animated zoomIn">
                            <div class="card-body p-3 text-center">
                                <div class="text-muted m-0">Nombre utilisateurs</div>
                                <div class="h1 mb-3 fw-extrabold">30</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <report-modal />
</template>

<script>
import reportModal from "@/views/public/modals/generate-report-modal";
export default {
    name: 'ItaDashboard',
    components: {
        reportModal
    }
}
</script>