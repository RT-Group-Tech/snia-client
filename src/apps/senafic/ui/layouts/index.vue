<template>
    <div class="wrapper horizontal-layout-3">

        <!--  main header -->
        <main-header />
        <!-- End main header -->

        <router-view />

        <!-- main footer -->
        <main-footer />
        <!-- End footer -->
        <create-fertilisant-modal />

    </div>
</template>

<script>
import mainHeader from './src/main-header';
import mainFooter from './src/main-footer';
import createFertilisantModal from '../modals/create_fertilisant_modal';
import utilities from '@/mixins/public/utils';

export default {
    name: "SenaficModule",
    mixins: [utilities],
    components: {
        mainHeader,
        mainFooter,
        createFertilisantModal
    },

    mounted() {

        this.$router.push({ name: 'senafic-dashboard-route' })
    },

    beforeMount() {
        require('@/assets/css/atlantis2.css');
    },
    unmounted() {
        this.$router.go();
    },
}
</script>