<template>
    <div class="wrapper scrollbar-inner horizontal-layout-3">

        <!--  main header -->
        <ipa-main-header />
        <!-- End main header -->

        <router-view />

        <!-- main footer -->
        <!-- End footer -->


    </div>
</template>

<script>
import ipaMainHeader from './src/ipa-main-header';
import ipaMainFooter from './src/ipa-main-footer';
import utilities from '@/mixins/public/utils';


export default {
    name: "IpaModule",
    mixins: [utilities],
    components: {
        ipaMainHeader,
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