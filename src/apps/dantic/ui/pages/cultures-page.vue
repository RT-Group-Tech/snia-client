<template>
    <div class="main-panel">
        <div class="container">
            <div class="panel-header">
                <div class=" page-inner py-5">
                    <div class="page-header">
                        <h4 class="page-title">Cultures</h4>
                        <ul class="breadcrumbs">
                            <li class="nav-home">
                                <router-link :to="{ name: 'dashboard-route' }">
                                    <i class="flaticon-home"></i>
                                </router-link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            <div class="page-inner mt--5">

                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title fw-bold">Menu Culture</h4>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12 col-md-3">
                                        <div class="nav flex-column nav-pills nav-info nav-pills-no-bd nav-pills-icons"
                                            id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                            <a class="nav-link active show" id="v-pills-home-tab-icons" data-toggle="pill"
                                                href="#v-pills-categories" role="tab" aria-controls="v-pills-categories"
                                                aria-selected="true">
                                                <i class="flaticon-add"></i>
                                                Création catégories
                                            </a>
                                            <a class="nav-link" id="v-pills-profile-tab-icons" data-toggle="pill"
                                                href="#v-pills-cultures" role="tab" aria-controls="v-pills-cultures"
                                                aria-selected="false">
                                                <i class="flaticon-add"></i>
                                                Création cultures
                                            </a>

                                        </div>
                                    </div>
                                    <div class="col-12 col-md-9">
                                        <div class="tab-content" id="v-pills-tabContent">
                                            <categorie-tab></categorie-tab>
                                            <culture-tab></culture-tab>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CategorieTab from './subpages/cultures/create-categories.vue'
import CultureTab from './subpages/cultures/create-cultures.vue'
export default {
    name: 'CulturePage',

    components: {
        CategorieTab,
        CultureTab
    },

    async mounted() {
        await this.$store.dispatch('dantic/voirCategories')
    }
}
</script>