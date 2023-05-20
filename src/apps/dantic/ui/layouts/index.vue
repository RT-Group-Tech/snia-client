<template>
    <div class="wrapper scrollbar-inner">
        <!-- Header Layout -->
        <header-layout />
        <!-- End Header Layout -->

        <!-- Sidebar -->
        <sidebar-layout />
        <!-- End Sidebar -->

        <!-- Router view -->
        <router-view />
        <!-- End Router view -->
    </div>
</template>
 
<script>
import '@/assets/css/atlantis.css'

/* Layouts imports */
import HeaderLayout from "./src/header"
import SidebarLayout from "./src/sidebar"

export default {
    name: "Main-Layout",
    components: {
        HeaderLayout,
        SidebarLayout
    },

    async mounted() {
        this.$router.push({ name: "dashboard-route" });
        this.$store.dispatch('dantic/viewIpas')
        $('.scrollbar-inner').scrollbar();
        this.$store.dispatch("auth/refreshLoggedUser");
    },
    methods: {
        /*Load web font*/

    },

}
</script>