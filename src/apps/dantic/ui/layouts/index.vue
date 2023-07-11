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
/* Layouts imports */
import HeaderLayout from "./src/header"
import SidebarLayout from "./src/sidebar"

export default {
    name: "Main-Layout",
    components: {
        HeaderLayout,
        SidebarLayout
    },
    beforeMount() {
        require('@/assets/css/atlantis.css');
    },

    mounted() {
        this.$store.dispatch("auth/refreshLoggedUser");
        $('.scrollbar-inner').scrollbar();
    },
    unmounted() {
        this.$router.go();
    },
    methods: {
        /*Load web font*/

    },

}
</script>