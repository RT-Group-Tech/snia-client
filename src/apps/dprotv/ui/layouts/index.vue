<template>
    <div class="wrapper horizontal-layout-3">
        <!--  main header -->
        <main-header />
        <!-- End main header -->

        <router-view />

        <!-- main footer -->
        <main-footer />
        <!-- End footer -->
        <create-produit-modal />

    </div>
</template>

<script>
import mainHeader from './src/main-header';
import mainFooter from './src/main-footer';
import utilities from '@/mixins/public/utils';
import createProduitModal from '../modals/create_produit_modal';

export default {
    name: "SenasemModule",
    mixins: [utilities],
    components: {
        mainHeader,
        mainFooter,
        createProduitModal
    },
    beforeMount() {
        require('@/assets/css/atlantis2.css');
    },
    unmounted() {
        this.$router.go();
    },
}
</script>