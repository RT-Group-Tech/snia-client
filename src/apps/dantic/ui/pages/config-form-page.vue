<template>
    <div class="main-panel">
        <div class="container container-full">
            <div class="page-inner page-inner-fill">
                <div class="page-with-aside mail-wrapper bg-white">
                    <div class="page-aside bg-grey1">
                        <div class="aside-header">
                            <div class="description text-uppercase">Configuration formulaires
                            </div>
                            <a class="btn btn-primary toggle-email-nav" data-toggle="collapse" href="#email-app-nav"
                                role="button" aria-expanded="false" aria-controls="email-nav">
                                <span class="btn-label">
                                    <i class="icon-menu"></i>
                                </span>
                                Menu
                            </a>
                        </div>
                        <div class="aside-nav collapse" id="email-app-nav">
                            <ul class="nav">
                                <li :class="currentRoute === 'create-subject-subroute' ? 'active' : ''">
                                    <router-link :to="{ name: 'create-subject-subroute' }">
                                        <i class="flaticon-pen"></i> Création sujets
                                    </router-link>
                                </li>

                                <li :class="currentRoute === 'create-forms-subroute' ? 'active' : ''">
                                    <router-link :to="{ name: 'create-forms-subroute' }">
                                        <i class="flaticon-interface-4"></i> Création formulaires
                                    </router-link>
                                </li>

                                <li :class="currentRoute === 'formulaire-view-subroute' ? 'active' : ''">
                                    <router-link :to="{ name: 'formulaire-view-subroute' }">
                                        <i class="flaticon-interface-6"></i> Voir Formulaires
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <router-view></router-view>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            currentRoute: ""
        }
    },

    mounted() {
        setInterval(() => {
            this.currentRoute = this.$route.name;
        }, 50);
        this.$store.dispatch("dantic/voirSujets");
    },

    created() {
        this.$router.push({ name: 'create-subject-subroute' })
    },
}
</script>