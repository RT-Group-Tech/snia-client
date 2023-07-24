<template>
    <div class="sidebar sidebar-style-2">
        <div class="sidebar-wrapper scrollbar scrollbar-inner">
            <div class="sidebar-content">
                <div class="user">
                    <!-- <div class="avatar-sm float-left mr-2">
                        <img src="assets/img/picture_placeholder.png" alt="..." class="avatar-img rounded-circle">
                    </div> -->
                    <div class="info">
                        <a data-toggle="collapse" href="#collapseExample" aria-expanded="true">
                            <!-- <span>
                                {{ $filters.sortLength($filters.capitalize(user.nom_complet), 15, '...') }}
                                <span class="user-level text-success">Accès : {{ user.access.access }}</span>
                                <span class="caret"></span>
                            </span> -->
                        </a>
                        <div class="clearfix"></div>

                        <div class="collapse in" id="collapseExample">
                            <ul class="nav">
                                <li>
                                    <a href="javascript:void(0)">
                                        <span class="link-collapse">Mon profile</span>
                                    </a>
                                </li>

                                <li>
                                    <a href="javascript:void(0)">
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

                    <!-- sidebar item navigation -->
                    <sidebar-item title="Tableau de bord" route-name="dashboard-route" icon="icon-grid" />

                    <sidebar-item title="Ipa" route-name="ipa-view-route" icon="fab fa-fort-awesome" />

                    <sidebar-item title="Ita" route-name="ita-view-route" icon="fab fa-fort-awesome-alt" />

                    <sidebar-item title="Agents" route-name="agents-route" icon="icon-people" />

                    <!--  <sidebar-item title="Cultures" route-name="culture-route" icon="icon-share-alt" /> -->
                    <sidebar-item title="Cultures" :hidden="true" icon="icon-share-alt" />

                    <!--  <sidebar-item title="Formulaires" route-name="config-form-route" icon="icon-note" /> -->
                    <sidebar-item title="Formulaires" :hidden="true" icon="icon-note" />

                    <sidebar-item title="Données" route-name="dantic-collect-route" icon="icon-folder-alt" />

                    <!-- <sidebar-item title="Test" route-name="test-route" icon="icon-settings"/> -->
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
        var scrollbarDashboard = $(".sidebar .scrollbar");
        if (scrollbarDashboard.length > 0) {
            scrollbarDashboard.scrollbar();
        }
    },

    computed: {
        user() {
            return this.$store.getters['auth/GET_USER'];
        }
    },

}
</script>