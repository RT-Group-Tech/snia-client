<template>
    <div class="main-header no-box-shadow" data-background-color="blue2">
        <div class="nav-top">
            <div class="container d-flex flex-row">
                <button class="navbar-toggler sidenav-toggler2 ml-auto" type="button" data-toggle="collapse"
                    data-target="collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon">
                        <i class="icon-menu"></i>
                    </span>
                </button>
                <button class="topbar-toggler more"><i class="icon-options-vertical"></i></button>
                <!-- Logo Header -->
                <a href="javascript:void(0)" @click.prevent="$router.push({ name: 'senasem-dashboard-route' })"
                    class="logo d-flex align-items-center justify-content-center mt-2">
                    <h2 class="fw-bold text-white">SENASEM</h2>
                </a>
                <!-- End Logo Header -->

                <!-- Navbar Header -->
                <nav class="navbar navbar-header-left navbar-expand-lg p-0">
                    <ul class="navbar-nav page-navigation pl-md-3">
                        <h3 class="title-menu d-flex d-lg-none">
                            Menu
                            <div class="close-menu"> <i class="flaticon-cross"></i></div>
                        </h3>
                        <li class="nav-item active">
                            <a class="nav-link" href="javascript:void(0)"
                                @click.prevent="$router.push({ name: 'senasem-dashboard-route' })" id="navbarDropdown"
                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Tableau de bord
                            </a>

                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Menu
                            </a>
                            <div class="dropdown-menu animated fadeIn" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="javascript:void(0)"
                                    @click.prevent="$showBsModal('createSemenceModal')">Créer semences</a>
                                <a class="dropdown-item" href="javascript:void(0)">Voir semences</a>
                            </div>
                        </li>
                    </ul>
                </nav>
                <nav class="navbar navbar-header navbar-expand-lg p-0">
                    <div class="container-fluid p-0">
                        <ul class="navbar-nav topbar-nav ml-md-auto align-items-center">
                            <li class="nav-item dropdown hidden-caret">
                                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                                    aria-expanded="false" aria-haspopup="true">
                                    <i class="fa fa-search"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-search animated fadeIn">
                                    <form class="navbar-left navbar-form nav-search">
                                        <div class="input-group">
                                            <input type="text" placeholder="Recherche ..." class="form-control">
                                        </div>
                                    </form>
                                </ul>
                            </li>

                            <user-menu></user-menu>
                        </ul>
                    </div>
                </nav>
                <!-- End Navbar -->
            </div>
        </div>
    </div>
</template>

<script>
import AuthView from '@/mixins/auth/logview'
export default {
    mixins: [AuthView]
}
</script>
&

