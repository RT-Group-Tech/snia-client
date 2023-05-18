<template>
    <div class="main-panel">
        <div class="container">
            <div class="panel-header">
                <div class=" page-inner py-5">
                    <div class="page-header">
                        <h4 class="page-title">Formulaires</h4>
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
                                <a href="#">Configuration formulaires</a>
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
                                <h4 class="card-title fw-bold">Menu Configuration formulaire</h4>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12 col-md-3">
                                        <div class="nav flex-column nav-pills nav-info nav-pills-no-bd nav-pills-icons"
                                            id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                            <a class="nav-link active show" id="v-pills-home-tab-icons" data-toggle="pill"
                                                href="#v-pills-topic" role="tab" aria-controls="v-pills-topic"
                                                aria-selected="true">
                                                <i class="fas fa-pen-square"></i>
                                                Création sujets
                                            </a>
                                            <a class="nav-link" id="v-pills-profile-tab-icons" data-toggle="pill"
                                                href="#v-pills-forms-config" role="tab" aria-controls="v-pills-forms-config"
                                                aria-selected="false">
                                                <i class="flaticon-interface-4"></i>
                                                Création formulaires
                                            </a>
                                            <a class="nav-link" id="v-pills-buy-tab-icons" data-toggle="pill"
                                                href="#v-pills-forms" role="tab" aria-controls="v-pills-forms"
                                                aria-selected="false">
                                                <i class="flaticon-interface-6"></i>
                                                Liste des formulaires
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-9">
                                        <div class="tab-content" id="v-pills-tabContent">
                                            <topic-tab></topic-tab>
                                            <form-create-tab></form-create-tab>
                                            <forms-view></forms-view>
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
import topicTab from "./subpages/formulaires/create-subjects-page.vue"
import formCreateTab from "./subpages/formulaires/create-forms-page.vue"
import formsView from "./subpages/formulaires/formulaires-view-page.vue"
export default {
    components: {
        topicTab,
        formCreateTab,
        formsView
    },
    mounted() {
        this.$store.dispatch("voirSujets");
    },
}
</script>