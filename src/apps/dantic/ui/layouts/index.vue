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
import HeaderLayout from "./header"
import SidebarLayout from "./sidebar"

export default {
    name: "Main-Layout",
    components: {
        HeaderLayout,
        SidebarLayout
    },

    async mounted() {
        this.$router.push({ name: "dashboard-route" });
        this.$store.dispatch('dantic/viewIpas')
        $(document).ready(() => {
            $('.scrollbar-inner').scrollbar();
        });
    },

}
</script>