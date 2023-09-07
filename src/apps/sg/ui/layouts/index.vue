<template>
    <div class="wrapper scrollbar-inner horizontal-layout-3">

        <!--  main header -->
        <sg-main-header />
        <!-- End main header -->

        <router-view />

        <!-- main footer -->
        <sg-main-footer />
        <!-- End footer -->


    </div>
</template>

<script>
import sgMainHeader from './src/sg-main-header';
import sgMainFooter from './src/sg-main-footer';
import utilities from '@/mixins/public/utils';


export default {
    name: "sgModule",
    mixins: [utilities],
    components: {
        sgMainHeader,
        sgMainFooter
    },
    mounted() {
        $('.scrollbar-inner').scrollbar();
    },

    beforeMount() {
        require('@/assets/css/atlantis2.css');
    },
    unmounted() {
        this.$router.go();
    },
}
</script>