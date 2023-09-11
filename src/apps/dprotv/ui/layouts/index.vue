<template>
    <div class="wrapper horizontal-layout-3">
        <!--  main header -->
        <main-header />
        <!-- End main header -->

        <router-view />

        <!-- main footer -->
        <main-footer />
        <!-- End footer -->
    </div>
</template>

<script>
import mainHeader from './src/main-header';
import mainFooter from './src/main-footer';
import utilities from '@/mixins/public/utils';

export default {
    name: "DprotvModule",
    mixins: [utilities],
    components: {
        mainHeader,
        mainFooter,
    },
    beforeMount() {
        require('@/assets/css/atlantis2.css');
    },
    unmounted() {
        this.$router.go();
    },
}
</script>