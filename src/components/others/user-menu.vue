<template>
    <li class="nav-item dropdown hidden-caret">
        <a class="dropdown-toggle profile-pic" data-toggle="dropdown" href="#" aria-expanded="false">
            <div class="avatar-sm">
                <img src="assets/img/picture_placeholder.png" alt="..." class="avatar-img rounded-circle">
            </div>
        </a>
        <ul class="dropdown-menu dropdown-user animated fadeIn">
            <div class="dropdown-user-scroll scrollbar-outer">
                <li>
                    <div class="user-box">
                        <div class="avatar-lg" style="width: 80px;"><img src="assets/img/picture_placeholder.png"
                                alt="image profile" class="avatar-img rounded"></div>
                        <div class="u-text">
                            <h4 class="fw-bold">{{ user.nom_complet
                            }}</h4>
                            <p class="text-muted">{{ user.email }}</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="dropdown-divider"></div>
                    <router-link class="dropdown-item" :to="{ name: 'dantic-profile-route' }">Mon profil</router-link>
                    <div class="dropdown-divider"></div>
                    <router-link class="dropdown-item" :to="{ name: 'dantic-profile-route' }">Paramètre du
                        compte</router-link>
                    <div class="dropdown-divider"></div>
                    <!-- <a class="dropdown-item" @click.prevent="$router.push({ name: 'modules' })"
                        href="javascript:void(0)">Retour aux modules</a> -->
                    <a class="dropdown-item" href="javascript:void(0)" @click="logout">Me
                        Déconnecter</a>
                </li>
            </div>
        </ul>

    </li>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: "UserMenu",

    methods: {
        async logout() {
            await this.$router.replace({ name: 'login' })
            await this.$store.dispatch("auth/loggedOut")
            await this.$store.dispatch("auth/refreshLoggedUser")
        }
    },

    computed: {
        ...mapGetters({
            user: "auth/GET_USER"
        })
    },
}
</script>