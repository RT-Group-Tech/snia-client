<template>
    <div class="sidebar sidebar-style-2">
        <div class="sidebar-wrapper scrollbar scrollbar-inner">
            <div class="sidebar-content">
                <div class="user">
                    <div class="avatar-sm float-left mr-2">
                        <img src="assets/img/picture_placeholder.png" alt="..." class="avatar-img rounded-circle">
                    </div>
                    <div class="info">
                        <a data-toggle="collapse" href="#collapseExample" aria-expanded="true">
                            <span>
                                {{ user.name }}
                                <span class="user-level text-primary">Administrateur</span>
                                <span class="caret"></span>
                            </span>
                        </a>
                        <div class="clearfix"></div>

                        <div class="collapse in" id="collapseExample">
                            <ul class="nav">
                                <li>
                                    <a href="#profile">
                                        <span class="link-collapse">Mon profile</span>
                                    </a>
                                </li>

                                <li>
                                    <a href="#settings">
                                        <span class="link-collapse">Parametres</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <ul class="nav nav-primary">
                    <li class="nav-section">
                        <span class="sidebar-mini-icon">
                            <i class="fa fa-ellipsis-h"></i>
                        </span>
                        <h4 class="text-section">Navigations</h4>
                    </li>
                    <li class="nav-item" :class="currentRoute === 'dashboard-route' ? 'active' : ''">
                        <router-link :to="{ name: 'dashboard-route' }" href="#dashboard" class="collapsed"
                            aria-expanded="false">
                            <i class="icon-home"></i>
                            <p>Tableau de bord</p>
                        </router-link>
                    </li>

                    <li class="nav-item"
                        :class="(currentRoute === 'ipa-ita-reg-route') || (currentRoute === 'ipa-view-route') ? 'active' : ''">
                        <a data-toggle="collapse" href="#base">
                            <i class="icon-screen-desktop"></i>
                            <p>Ipa</p>
                            <span class="caret"></span>
                        </a>
                        <div class="collapse" id="base">
                            <ul class="nav nav-collapse">
                                <li>
                                    <router-link :to="{ name: 'ipa-ita-reg-route' }">
                                        <span class="sub-item">Enregistrer IPA</span>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: 'ipa-view-route' }">
                                        <span class="sub-item">Voir IPA</span>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item" :class="currentRoute === 'ita-view-route' ? 'active' : ''">
                        <a data-toggle="collapse" href="#sidebarLayouts">
                            <i class="icon-screen-desktop"></i>
                            <p>Ita</p>
                            <span class="caret"></span>
                        </a>
                        <div class="collapse" id="sidebarLayouts">
                            <ul class="nav nav-collapse">
                                <li>
                                    <router-link :to="{ name: 'ita-view-route' }">
                                        <span class="sub-item">Voir ITA</span>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li class="nav-item" :class="currentRoute === 'agents-route' ? 'active' : ''">
                        <router-link :to="{ name: 'agents-route' }" href="#dashboard" class="collapsed"
                            aria-expanded="false">
                            <i class="icon-people"></i>
                            <p>Agents</p>
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <a href="#" class="collapsed" aria-expanded="false">
                            <i class="fas fa-cog"></i>
                            <p>Configurations</p>
                        </a>
                    </li>
                    <li class="nav-item" :class="currentRoute === 'test-route' ? 'active' : ''">
                        <router-link :to="{ name: 'test-route' }" class="collapsed" aria-expanded="false">
                            <i class="fas fa-home"></i>
                            <p>Components test</p>
                        </router-link>
                    </li>


                </ul>
            </div>
        </div>
</div>
</template>
<script>
import { mapGetters } from "vuex"
export default {
    name: "Sidebar-Layout",
    data() {
        return {
            currentRoute: ''
        }
    },

    mounted() {
        setInterval(() => {
            let route = this.$route.name;
            this.currentRoute = route
        }, 100);
        var scrollbarDashboard = $(".sidebar .scrollbar");
        if (scrollbarDashboard.length > 0) {
            scrollbarDashboard.scrollbar();
        }
    },

    computed: {
        ...mapGetters({
            user: "auth/GET_USER"
        })
    },

}
</script>