<template>
    <div class="nav-top">
        <div class="container d-flex flex-row">
            <button class="navbar-toggler sidenav-toggler ml-auto" type="button" data-toggle="collapse"
                data-target="collapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon">
                    <i class="icon-menu"></i>
                </span>
            </button>
            <button class="topbar-toggler more"><i class="icon-options-vertical"></i></button>
            <!-- Logo Header -->
            <div class="logo-holder logo-1">
                <router-link :to="{ name: 'ita-dashboard-route' }">
                    <h3>SNIA RDC</h3>
                    <p>Interface ita</p>
                </router-link>
            </div>
            <!-- End Logo Header -->

            <!-- Navbar Header -->
            <nav class="navbar navbar-header navbar-expand-lg p-0">

                <div class="container-fluid p-0">
                    <div class="collapse focus" id="search-nav">
                        <form class="navbar-left navbar-form nav-search ml-md-3">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <button type="submit" class="btn btn-search pr-1">
                                        <i class="fa fa-search search-icon"></i>
                                    </button>
                                </div>
                                <input type="text" placeholder="Recherche ..." class="form-control">
                            </div>
                        </form>
                    </div>
                    <ul class="navbar-nav topbar-nav ml-md-auto align-items-center">
                        <li class="nav-item toggle-nav-search hidden-caret">
                            <a class="nav-link" data-toggle="collapse" href="#search-nav" role="button"
                                aria-expanded="false" aria-controls="search-nav">
                                <i class="fa fa-search"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="javascript:void(0)" class="nav-link quick-sidebar-toggler">
                                <i class="fa fa-th"></i>
                            </a>
                        </li>
                        <li class="nav-item dropdown hidden-caret">
                            <a class="dropdown-toggle profile-pic" data-toggle="dropdown" href="javascript:void(0)"
                                aria-expanded="false">
                                <div class="avatar-sm">
                                    <img src="assets/img/picture_placeholder.png" alt="..."
                                        class="avatar-img rounded-circle">
                                </div>
                            </a>
                            <ul class="dropdown-menu dropdown-user animated fadeIn">
                                <div class="dropdown-user-scroll scrollbar-outer">
                                    <li>
                                        <div class="user-box">
                                            <div class="avatar-lg"><img src="assets/img/picture_placeholder.png"
                                                    alt="image profile" class="avatar-img rounded"></div>
                                            <div class="u-text">
                                                <h4 class="fw-bold">{{ user.name }}</h4>
                                                <p class="text-muted">{{ user.email }}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="javascript:void(0)">Mon profl</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="javascript:void(0)">Parametres comptes</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="javascript:void(0)" @click="logout">Me
                                            Déconnecter</a>
                                    </li>
                                </div>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
            <!-- End Navbar -->
        </div>
    </div>
</template>

<script>
import '@/assets/css/logo.css'
export default {
    name: "ItaHeader",

    async mounted() {
        await this.$store.dispatch("auth/refreshLoggedUser")
    },

    computed: {
        user() {
            return this.$store.getters['auth/GET_USER']
        }
    },

    methods: {
        async logout() {
            await this.$router.replace({ name: 'login' })
            await this.$store.dispatch("auth/loggedOut")
            await this.$store.dispatch("auth/refreshLoggedUser")
        }
    }
}
</script>
