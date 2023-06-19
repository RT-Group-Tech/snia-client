<template>
    <div class="main-panel scrollbar-inner">

        <div class="bg-primary2 pt-4 pb-5">
            <div class="container text-white py-2">
                <div class="d-flex align-items-center">
                    <div class="mr-3">
                        <h1 class="mb-3">Bienvenue sur le module SENASEM</h1>
                        <h5 class="op-7 mb-3">Le Service national de semences de la Rép. Dém du Congo</h5>
                    </div>
                    <div class="ml-auto">
                        <button type="button" class="btn btn-success" @click.prevent="$showBsModal('createSemenceModal')">
                            <i class="flaticon-add"></i> Nouvelle semence
                            certifiée</button>
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
                                <div class="text-muted m-0">Nombre des semences</div>
                                <div class="h1 mb-3 fw-extrabold ">43</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-sm-4 col-lg-2">
                        <div class="card animated zoomIn">
                            <div class="card-body p-3 text-center">
                                <div class="text-muted m-0">Nombre d'agents SENASEM</div>
                                <div class="h1 mb-3 fw-extrabold">17</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-sm-4 col-lg-2">
                        <div class="card animated zoomIn">
                            <div class="card-body p-3 text-center">
                                <div class="text-muted m-0">Semences certifiées</div>
                                <div class="h1 mb-3 fw-extrabold">700</div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="row row-card-no-pd">
                    <div class="col-md-12">
                        <div class="card animated fadeInUp">
                            <div class="card-header">
                                <div class="card-head-row d-flex justify-content-between">
                                    <h4 class="card-title">Liste de semences certifiées</h4>
                                    <form>
                                        <div class="input-group">
                                            <input type="text" placeholder="Recherche ..." class="form-control">
                                            <div class="input-group-append">
                                                <button type="submit" class="btn btn-search">
                                                    <i class="fa fa-search search-icon"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <p class="card-category">
                                    il s'agit de la liste exhaustive de toutes les semences certifiées répertoriées</p>
                            </div>
                            <div class="card-body m-0">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="table-responsive table-hover table-sales">
                                            <table class="table">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div class="flag">
                                                                <img src="assets/img/flags/id.png" alt="indonesia">
                                                            </div>
                                                        </td>
                                                        <td>Indonesia</td>
                                                        <td class="text-right">
                                                            2.320
                                                        </td>
                                                        <td class="text-right">
                                                            42.18%
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="flag">
                                                                <img src="assets/img/flags/us.png" alt="united states">
                                                            </div>
                                                        </td>
                                                        <td>USA</td>
                                                        <td class="text-right">
                                                            240
                                                        </td>
                                                        <td class="text-right">
                                                            4.36%
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="flag">
                                                                <img src="assets/img/flags/au.png" alt="australia">
                                                            </div>
                                                        </td>
                                                        <td>Australia</td>
                                                        <td class="text-right">
                                                            119
                                                        </td>
                                                        <td class="text-right">
                                                            2.16%
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="flag">
                                                                <img src="assets/img/flags/ru.png" alt="russia">
                                                            </div>
                                                        </td>
                                                        <td>Russia</td>
                                                        <td class="text-right">
                                                            1.081
                                                        </td>
                                                        <td class="text-right">
                                                            19.65%
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="flag">
                                                                <img src="assets/img/flags/cn.png" alt="china">
                                                            </div>
                                                        </td>
                                                        <td>China</td>
                                                        <td class="text-right">
                                                            1.100
                                                        </td>
                                                        <td class="text-right">
                                                            20%
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="flag">
                                                                <img src="assets/img/flags/br.png" alt="brazil">
                                                            </div>
                                                        </td>
                                                        <td>Brasil</td>
                                                        <td class="text-right">
                                                            640
                                                        </td>
                                                        <td class="text-right">
                                                            11.63%
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
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

export default {
    name: "Dashboard",
}
</script>