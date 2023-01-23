<template>
    <div class="main-panel">
        <div class="container">
            <div class="panel-header bg-success-gradient">
                <div class="page-inner py-5">
                    <div class="d-flex align-items-left align-items-md-center flex-column flex-md-row">
                        <div>
                            <h2 class="text-white pb-2 fw-bold">DANTIC</h2>
                            <h5 class="text-white op-7 mb-2 fw-bold"> Direction Archives et Nouvelles Technologies
                                de l'Information et de la Communication</h5>
                        </div>
                        <div class="ml-md-auto py-2 py-md-0">

                            <a href="#" class="btn btn-light"> <i class="flaticon-add-user"></i>
                                utilisateur</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page-inner mt--5">
                <div class="row mt--2">
                    <div class="col-md-6">
                        <div class="card full-height animated fadeInUp">
                            <div class="card-body">
                                <div class="card-title">Statistiques</div>
                                <div class="card-category">Informations à propos des statistiques du module</div>
                                <div class="d-flex flex-wrap justify-content-around pb-2 pt-4">
                                    <div class="px-2 pb-2 pb-md-0 text-center">
                                        <div id="circles-1"></div>
                                        <h6 class="fw-bold mt-3 mb-0">IPA</h6>
                                    </div>
                                    <div class="px-2 pb-2 pb-md-0 text-center">
                                        <div id="circles-2"></div>
                                        <h6 class="fw-bold mt-3 mb-0">ITA</h6>
                                    </div>
                                    <div class="px-2 pb-2 pb-md-0 text-center">
                                        <div id="circles-3"></div>
                                        <h6 class="fw-bold mt-3 mb-0">AGENTS</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card full-height animated fadeInUp">
                            <div class="card-body">
                                <div class="card-title">Total des statistiques du module</div>
                                <div class="row py-3">
                                    <div class="col-md-4 d-flex flex-column justify-content-around">
                                        <div>
                                            <h6 class="fw-bold text-uppercase text-success op-8">Total IPA</h6>
                                            <h3 class="fw-bold">9</h3>
                                        </div>
                                        <div>
                                            <h6 class="fw-bold text-uppercase text-danger op-8">Total ITA</h6>
                                            <h3 class="fw-bold">20</h3>
                                        </div>

                                    </div>
                                    <div class="col-md-8">
                                        <div id="chart-container">
                                            <canvas id="totalIncomeChart"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row row-card-no-pd">
                    <div class="col-md-12">
                        <div class="card animated fadeInUp">
                            <div class="card-header">
                                <div class="card-head-row card-tools-still-right">
                                    <h4 class="card-title">Geolocalisation des IPA & ITA</h4>
                                    <div class="card-tools">
                                        <button class="btn btn-icon btn-link btn-primary btn-xs"
                                            @click="isExpanded = !isExpanded"><span class="fa"
                                                :class="isExpanded ? 'fa-angle-up' : 'fa-angle-down'"></span></button>

                                    </div>
                                </div>
                                <p class="card-category">
                                    Ci-apres la liste des IPA, leurs adresses ainsi que leur haute hierarchie</p>
                            </div>
                            <div class="card-body animated fadeInUp" v-if="isExpanded">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="table-responsive table-hover table-sales">
                                            <table class="table">
                                                <tbody>
                                                    <tr v-for="(region, index) in regions" :key="index"
                                                        id="table-ipa-item">
                                                        <td>
                                                            <div class="flag">
                                                                <img src="assets/img/flags/cd.png" alt="rdc">
                                                            </div>
                                                        </td>
                                                        <td>IPA</td>
                                                        <td class="text-right">
                                                            {{ region.getAttribute('title') }}
                                                        </td>
                                                        <td class="text-right">
                                                            DELIMOND GASTON
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="map--view">
                                            <map-svg @getRegions="regions = $event" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <p>
            
            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample"
                aria-expanded="false" aria-controls="collapseExample">
                Button with data-target
            </button>
        </p>
        <div class="collapse" id="collapseExample">
            <div class="card card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil
                anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </div>
        </div> -->


        <!-- Global footer component -->
        <d-footer></d-footer>
        <!-- end Global footer component -->
    </div>
</template>

<script>
import DashboardMixin from "../../mixins/dashboard"
export default {
    name: "Dashboard",
    extends: DashboardMixin,
    data() {
        return {
            regions: [],
            isExpanded: true,
        }
    },

}
</script>