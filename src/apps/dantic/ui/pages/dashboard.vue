<template>
    <div class="main-panel">
        <div class="container">
            <div class="panel-header bg-primary-gradient">
                <div class="page-inner py-5">
                    <div class="d-flex align-items-left align-items-md-center flex-column flex-md-row">
                        <div>
                            <h2 class="text-white pb-2 fw-bold">DANTIC</h2>
                            <h5 class="text-white op-7 mb-2"> Direction Archives et Nouvelles Technologies
                                de l'Information et de la Communication</h5>
                        </div>
                        <div class="ml-md-auto py-2 py-md-0">

                            <button class="btn btn-light" @click="checkDevice"> <i class="flaticon-add-user"></i>
                                utilisateur</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page-inner mt--5">
                <div class="row mt--2">
                    <div class="col-md-6">
                        <div class="card full-height animated flipInX">
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
                        <div class="card full-height animated flipInX">
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

                <div class="row mt--2">
                    <div class="col-sm-6 col-lg-3">
                        <div class="card p-3 animated zoomIn">
                            <div class="d-flex align-items-center">
                                <span class="stamp stamp-md bg-secondary mr-3">
                                    <i class="fa fa-dollar-sign"></i>
                                </span>
                                <div>
                                    <h5 class="mb-1"><b><a href="#">132 <small>Sales</small></a></b></h5>
                                    <small class="text-muted">12 payments</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <div class="card p-3 animated zoomIn">
                            <div class="d-flex align-items-center">
                                <span class="stamp stamp-md bg-success mr-3">
                                    <i class="fa fa-shopping-cart"></i>
                                </span>
                                <div>
                                    <h5 class="mb-1"><b><a href="#">78 <small>Orders</small></a></b></h5>
                                    <small class="text-muted">32 shipped</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <div class="card p-3 animated zoomIn">
                            <div class="d-flex align-items-center">
                                <span class="stamp stamp-md bg-danger mr-3">
                                    <i class="fa fa-users"></i>
                                </span>
                                <div>
                                    <h5 class="mb-1"><b><a href="#">1,352 <small>Members</small></a></b></h5>
                                    <small class="text-muted">163 reg. today</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <div class="card p-3 animated zoomIn">
                            <div class="d-flex align-items-center">
                                <span class="stamp stamp-md bg-warning mr-3">
                                    <i class="fa fa-comment-alt"></i>
                                </span>
                                <div>
                                    <h5 class="mb-1"><b><a href="#">132 <small>Comments</small></a></b></h5>
                                    <small class="text-muted">16 waiting</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row ">
                    <div class="col-md-12">
                        <div class="card animated fadeInUp">
                            <div class="card-header">
                                <div class="card-head-row card-tools-still-right">
                                    <h4 class="card-title">Geolocalisation des IPA & ITA</h4>
                                </div>
                                <p class="card-category">
                                    Ci-apres la liste des IPA, leurs adresses ainsi que leur haute hierarchie</p>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-7">
                                        <div class="table-responsive table-hover table-sales"
                                            style="height: 400px; overflow-y: scroll;">
                                            <table class="table">
                                                <tbody>
                                                    <tr v-for="(region, index) in regions" :key="index"
                                                        :id="`${region.getAttribute('id')}-item`" class="table-item">
                                                        <td>
                                                            <div class="flag">
                                                                <img src="assets/img/flags/cd.png" alt="rdc">
                                                            </div>
                                                        </td>
                                                        <td>IPA</td>
                                                        <td class="text-right">
                                                            {{ region.getAttribute('ipa-name') }}
                                                        </td>
                                                        <td class="text-right">
                                                            Dan Beya | dan@gmail.com
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <div id="myChartLegend">
                                            <ul class="0-legend html-legend">
                                                <li><span style="background-color:#038a41"></span>Equatoriale</li>
                                                <li><span style="background-color:#f2d930"></span>Tropicale</li>
                                                <li><span style="background-color:#00a5ec"></span>Montagne</li>
                                            </ul>
                                        </div>
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



        <!-- Global footer component -->
        <d-footer></d-footer>
        <!-- end Global footer component -->
</div>
</template>

<script>
import DashboardMixin from "../../mixins/dashboard"
import servicesMixins from "../../mixins/services.mixins";


export default {
    name: "Dashboard",
    extends: DashboardMixin,
    mixins: [servicesMixins],
    data() {
        return {
            regions: [],
            isExpanded: true,
            user: {
                nom_complet: 'Djoper',
                email: 'mail@mail.com',
                telephone: '123456789',
                pass: '1243655',
            },
        }
    }

}
</script>

<style>
table tr.table-item {
    cursor: pointer;
}

table tr.table-item:hover {
    background-color: rgb(218, 220, 221);
}

table tr.isHover {
    background-color: rgb(218, 220, 221) !important;
}

.hovered {
    fill: #131252 !important;
}
</style>