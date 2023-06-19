<template>
    <div class="page-not-found bg-grey2">
        <div class="wrapper not-found">
            <h1 class="animated fadeIn text-muted">404</h1>
            <div class="desc animated fadeIn text-muted"><span>ATTENTION!</span><br />
                <p>Page non existant</p>
            </div>
            <a href="javascript:void(0)" @click="redirectToHome"
                class="btn btn-primary btn-back-home mt-4 animated fadeInUp">
                <span class="btn-label mr-2">
                    <i class="flaticon-home"></i>
                </span>
                Retour à l'accueil
            </a>
        </div>
    </div>
</template>
<style scoped src="@/assets/css/atlantis.css"></style>
<script>
export default {
    name: "NotFound",
    data() {
        return {
            prevRoute: ''
        }
    },

    methods: {
        redirectToHome() {
            let userToken = localStorage.getItem("user-token")
            if (userToken === undefined || userToken === null) {
                this.$router.replace({ name: "login" })
            }
            else {
                this.$router.replace({ name: "dantic-secure-route" })
            }
        }
    }
}
</script>