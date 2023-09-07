<template>
    <div class="wrapper scrollbar-inner horizontal-layout-3">

        <!--  main header -->
        <min-main-header />
        <!-- End main header -->

        <router-view />

        <!-- main footer -->
        <min-main-footer />
        <!-- End footer -->


    </div>
</template>

<script>
import minMainHeader from './src/min-main-header';
import minMainFooter from './src/min-main-footer';
import utilities from '@/mixins/public/utils';


export default {
    name: "minModule",
    mixins: [utilities],
    components: {
        minMainHeader,
        minMainFooter
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