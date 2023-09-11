<template>
    <div class="main-panel">

        <div class="bg-primary2 pt-4 pb-5">
            <div class="container text-white py-2">
                <div class="d-flex align-items-center">
                    <div class="mr-3">
                        <h1 class="mb-3">Importations Produits Phytosanitaires</h1>
                    </div>
                    <div class="ml-auto">
                        <button type="button" class="btn btn-success" @click.prevent="$showBsModal('importationModal')">
                            <i class="flaticon-add"></i> Enregistrement importations
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mt--5">
            <div class="page-inner mt--3">
                <div class="row row-card-no-pd">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <div class="card-head-row">
                                    <h4 class="card-title">Liste des Importations</h4>
                                </div>
                                <p class="card-category">
                                    il s'agit de la liste exhaustive de toutes les importations des produits phytosanitaires
                                    certifiés
                                    repertoriés !</p>
                            </div>
                            <div class="card-body m-0">
                                <div class="row">
                                    <div class="col-md-12">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <importation-modal></importation-modal>
</template>

<script>
import importationModal from '../modals/importation_modal';
export default {
    name: 'ExportationsPage',

    components: {
        importationModal,
    },
}
</script>