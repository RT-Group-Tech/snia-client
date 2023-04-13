<template>
    <div class="nav-bottom">
        <div class="container">
            <h3 class="title-menu d-flex d-lg-none">
                Menu
                <div class="close-menu"> <i class="flaticon-cross"></i></div>
            </h3>
            <ul class="nav page-navigation page-navigation-info bg-white">
                <li class="nav-item submenu" :class="`${currentRoute === 'ita-dashboard-route' ? 'active' : ''}`">
                    <router-link class="nav-link" :to="{ name: 'ita-dashboard-route' }">
                        <i class="link-icon icon-screen-desktop"></i>
                        <span class="menu-title">Tableau de bord</span>
                    </router-link>

                </li>
                <li class="nav-item submenu"
                    :class="`${currentRoute === 'ita-secteurs-route' || currentRoute === 'ita-secteurs-create-route' ? 'active' : ''}`">
                    <a class="nav-link" href="javascript:void(0)">
                        <i class="link-icon icon-home"></i>
                        <span class="menu-title">Secteur</span>
                    </a>
                    <div class="navbar-dropdown animated fadeIn">
                        <ul>
                            <li>
                                <a href="javascript:void(0)" @click="showCreateSecteurModal">Nouveau secteur</a>
                            </li>
                            <li>
                                <router-link :to="{ name: 'ita-secteurs-route' }">Liste des secteurs</router-link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item submenu">
                    <a class="nav-link" href="javascript:void(0)">
                        <i class="link-icon icon-people"></i>
                        <span class="menu-title">Agents</span>
                    </a>
                    <div class="navbar-dropdown animated fadeIn">
                        <ul>
                            <li>
                                <a href="javascript:void(0)">Nouveau agent</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Liste des agents</a>
                            </li>

                        </ul>
                    </div>
                </li>

                <li class="nav-item submenu">
                    <a class="nav-link" href="javascript:void(0)">
                        <i class="link-icon icon-people"></i>
                        <span class="menu-title">Agriculteur</span>
                    </a>
                    <div class="navbar-dropdown animated fadeIn">
                        <ul>
                            <li>
                                <a href="javascript:void(0)">Création</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Liste</a>
                            </li>

                        </ul>
                    </div>
                </li>

                <li class="nav-item submenu" :class="`${currentRoute === 'ita-collect-route' ? 'active' : ''}`">
                    <router-link class="nav-link" :to="{ name: 'ita-collect-route' }">
                        <i class="link-icon icon-folder-alt"></i>
                        <span class="menu-title">Données collectées</span>
                    </router-link>
                </li>
            </ul>
        </div>

        <!-- Modal allow to create new secteur -->
        <secteur-create-modal />
        <!-- End modal -->
    </div>
</template>

<script>
import SecteurCreateModal from "../../modals/ita.secteurs-create-modal"
export default {
    name: "NavigationBar",
    data() {
        return {
            currentRoute: ''
        }
    },

    components: {
        SecteurCreateModal
    },

    mounted() {
        setInterval(() => {
            this.currentRoute = this.$route.name;
        }, 50);
    },

    methods: {
        async showCreateSecteurModal() {
            await this.$router.push({ name: 'ita-secteurs-route' })
            $("#secteurCreateModal").modal('show');
        }
    }


}
</script>