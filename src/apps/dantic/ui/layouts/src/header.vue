<template>
    <div class="main-header">
        <!-- Logo Header -->
        <div class="logo-header" data-background-color="blue2">
            <div class="logo-holder logo-1">
                <router-link :to="{ name: 'dashboard-route' }" class="logo">
                    <h3>SNIA RDC</h3>
                    <p>Interface dantic</p>
                </router-link>
            </div>
            <button class="navbar-toggler sidenav-toggler ml-auto" type="button" data-toggle="collapse"
                data-target="collapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon">
                    <i class="icon-menu"></i>
                </span>
            </button>
            <button class="topbar-toggler more"><i class="icon-options-vertical"></i></button>
            <div class="nav-toggle">
                <button class="btn btn-toggle toggle-sidebar" @click.prevent="minimizeSidebar">
                    <i class="icon-menu"></i>
                </button>
            </div>
        </div>
        <!-- End Logo Header -->

        <!-- Navbar Header -->
        <nav class="navbar navbar-header navbar-expand-lg" data-background-color="blue">
            <div class="container-fluid">
                <div class="collapse" id="search-nav">
                    <form class="navbar-left navbar-form nav-search mr-md-3">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <button type="submit" class="btn btn-search pr-1">
                                    <i class="fa fa-search search-icon"></i>
                                </button>
                            </div>
                            <input type="text" @focus="focusSearch" placeholder="Recherche ..." class="form-control">
                        </div>
                    </form>
                </div>
                <ul class="navbar-nav topbar-nav ml-md-auto align-items-center">
                    <user-menu></user-menu>
                </ul>
            </div>
        </nav>
        <!-- End Navbar -->
    </div>
</template>
<script>
import '@/assets/css/logo.css'
export default {
    name: 'Header-Layout',

    data() {
        return {
            sidebarMinimized: false
        }
    },

    methods: {
        focusSearch() {
            $('#search-nav').toggleClass("focus");
        },

        /* Minimize sidebar */
        minimizeSidebar() {
            if (this.sidebarMinimized) {
                $(".wrapper").removeClass("sidebar_minimize");
                $(".toggle-sidebar").removeClass("toggled");
                $(".toggle-sidebar").html('<i class="icon-menu"></i>');
                this.sidebarMinimized = false;
            }
            else {

                $(".wrapper").addClass("sidebar_minimize");
                $(".toggle-sidebar").addClass("toggled");
                $(".toggle-sidebar").html('<i class="icon-options-vertical"></i>');
                this.sidebarMinimized = true;
            }

        },
        maximizeSidebar() { },

        /* async searchBar() {

        }, */
    },

}
</script>