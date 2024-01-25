<template>
    <div class="wrapper scrollbar-inner horizontal-layout-3">

        <!--  main header -->
        <ita-main-header />
        <!-- End main header -->

        <router-view />

        <!-- main footer -->
        <!-- End footer -->


    </div>
</template>

<script>
import itaMainHeader from './src/ita-main-header';
import itaMainFooter from './src/ita-main-footer';
import utilities from '@/mixins/public/utils';


export default {
    name: "ItaModule",
    mixins: [utilities],
    components: {
        itaMainHeader,
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