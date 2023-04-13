<template>
    <div class="wrapper horizontal-layout-2 scrollbar-inner">
        <div class="main-header" data-background-color="blue">
            <top-header />
            <navigation-bar />
        </div>
        <!-- layout routes view here... -->
        <router-view />
        <bottom-footer />

    </div>
</template>
<script>
import '@/assets/css/atlantis2.css'
import TopHeader from "./src/topheader.vue"
import NavigationBar from "./src/navigationbar.vue"
import BottomFooter from "./src/bottomfooter.vue"
export default {
    name: "Layouts",
    components: {
        TopHeader,
        NavigationBar,
        BottomFooter,
    },

    mounted() {
        this.$router.push({ name: "ita-dashboard-route" });
        /* $('.wrapper .scrollbar-inner').scrollbar(); */
    }
}
</script>