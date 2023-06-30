<template>
    <div class="main-panel">
        <div class="container">
            <div class="panel-header bg-primary-gradient">
                <div class="page-inner py-5">
                    <div class="d-flex align-items-left align-items-md-center flex-column flex-md-row">
                        <div>
                            <h2 class="text-white pb-2 fw-extrabold">DANTIC</h2>
                            <h5 class="text-white op-7 mb-2"> Direction Archives et Nouvelles Technologies
                                de l'Information et de la Communication</h5>
                        </div>
                        <div class="ml-md-auto py-2 py-md-0">
                            <button class="btn btn-light" @click="testRequests"> <i class="icon-user-follow"></i>
                                Utilisateur</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page-inner mt--5">
                <div class="row mt--2">
                    <div class="col-md-6">
                        <div class="card full-height animated zoomIn">
                            <div class="card-body">
                                <div class="card-title">Statistiques</div>
                                <div class="card-category">Stastisques globales</div>
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
                        <div class="card full-height animated zoomIn">
                            <div class="card-body">
                                <div class="card-title">Total des statistiques du module</div>
                                <div class="row py-3">
                                    <div class="col-md-4 d-flex flex-column justify-content-around">
                                        <div>
                                            <h6 class="fw-bold text-uppercase text-success op-8">Total IPA</h6>
                                            <h3 class="fw-bold">0
                                                <!-- TODO: Calculer et afficher le vrai nombre total des ipas enregistre dans le systeme -->
                                            </h3>
                                        </div>
                                        <div>
                                            <h6 class="fw-bold text-uppercase text-danger op-8">Total ITA</h6>
                                            <h3 class="fw-bold">
                                                0<!-- TODO: Calculer et afficher le vrai nombre total des itas enregistr dans le systeme -->
                                            </h3>
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
                    <!--  TODO: Dans chaque dashboard-card , calculer et afficher les chiffres reel -->
                    <div class="col-sm-6 col-lg-3">
                        <dashboard-card title="Total ipas" value="234" leading="ipas" icon="fab fa-fort-awesome"
                            bg-color="bg-info">
                        </dashboard-card>
                    </div>

                    <div class="col-sm-6 col-lg-3">
                        <dashboard-card title="Total itas" value="234" leading="itas" icon="fab fa-fort-awesome-alt"
                            bg-color="bg-secondary">
                        </dashboard-card>
                    </div>

                    <div class="col-sm-6 col-lg-3">
                        <dashboard-card title="Nombre agents" value="100" leading="agents" icon="icon-people"
                            bg-color="bg-warning">
                        </dashboard-card>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <dashboard-card title="Nbre agriculteurs" value="100" leading="agric." icon="icon-people"
                            bg-color="bg-success">
                        </dashboard-card>
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
                                                    T<!-- ODO:Recuperer et afficher les vrais ipas enregistre dans le systeme -->
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
                                                            20000 habitants
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <div id="myChartLegend">
                                            <ul class="0-legend html-legend">
                                                <li title="Climat & zone équatoriale" data-toggle="tooltip"><span
                                                        style="background-color:#038a41"></span>Equatoriale</li>
                                                <li title="Climat & zone tropicale" data-toggle="tooltip"><span
                                                        style="background-color:#f2d930"></span>Tropicale</li>
                                                <li title="Climat & zone montagneuse" data-toggle="tooltip"><span
                                                        style="background-color:#00a5ec"></span>Montagne</li>
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

import Api from "../../api"


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
    },
    methods: {
        testRequests() {
            /* Api.login({ identifiant: "lionnes@gmail.com", pass: "1234" }, (res) => {
                console.log(res);
            }) */
            Api.voirAgents((res) => {
                console.log(res);
            });
        }
    },

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