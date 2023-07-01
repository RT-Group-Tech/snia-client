<template>
    <div class="wrapper horizontal-layout-3">

        <!--  main header -->
        <main-header />
        <!-- End main header -->

        <router-view />

        <!-- main footer -->
        <main-footer />
        <!-- End footer -->
        <create-semence-modal />

    </div>
</template>

<script>
import mainHeader from './src/main-header';
import mainFooter from './src/main-footer';
import createSemenceModal from '../modals/create_semence_modal'
import utilities from '@/mixins/public/utils';
export default {
    name: "SenasemModule",
    mixins: [utilities],
    components: {
        mainHeader,
        mainFooter,
        createSemenceModal
    },

    beforeMount() {
        require('@/assets/css/atlantis2.css');
    },
    mounted() {
        this.$store.dispatch('voirCultures');
    },
    unmounted() {
        this.$router.go();
    },
}
</script>