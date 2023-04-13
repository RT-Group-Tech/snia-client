<template>
    <div class="main-panel">
        <div class="container">
            <div class="page-inner">
                <div class="page-header">
                    <h4 class="page-title">ITA Secteurs</h4>
                    <ul class="breadcrumbs">
                        <li class="nav-home">
                            <router-link :to="{ name: 'ita-dashboard-route' }">
                                <i class="flaticon-home"></i>
                            </router-link>
                        </li>
                    </ul>
                </div>

                <ul class="list-group list-group-bordered" v-if="secteurs.length > 0">
                    <li class="list-group-item bg-light d-flex justify-content-between align-items-center">
                        <h3 class="fw-extrabold">Liste des secteurs</h3>
                        <button class="btn btn-info" @click="showSecteurCreateModal"> <i class="flaticon-add mr-1 fs-2"></i>
                            Créer les secteurs</button>
                    </li>

                    <li v-for="(data, i) in secteurs" :key="i"
                        class="list-group-item d-flex justify-content-between align-items-center">
                        {{ data.secteur }}
                        <button class="btn btn-dark btn-icon btn-sm" data-toggle="tooltip" title="Suppression secteur">
                            <i class="icon-trash"></i>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <secteur-create-modal />
    </div>
</template>

<script>
import SecteurCreateModal from "../modals/ita.secteurs-create-modal"
export default {
    name: 'Ita-secteurs-page',

    components: {
        SecteurCreateModal
    },

    mounted() {
        this.$initBsTooltip();
        this.$store.dispatch('ita/voirSecteurs');
    },

    computed: {
        secteurs() {
            return this.$store.getters['ita/GET_SECTEURS'];
        }
    },
    methods: {
        showSecteurCreateModal() {
            $("#secteurCreateModal").modal('show');
        }
    }
}
</script>