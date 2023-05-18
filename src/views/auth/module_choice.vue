<template>
    <div class="wrapper bubble-shadow" data-background-color="blue">
        <div class="choice-module">
            <div class="container">
                <div class="row mt-5 vertical-center flex align-items-center justify-content-center">
                    <div class="col-md-12 mb-3">
                        <h1 class="text-center text-white">Bienvenue agent <strong>{{ user }}</strong>!</h1>
                        <p class="text-center text-white">Dans quelle module voulez-vous vous loguer ??</p>
                    </div>
                    <div class="col-6 col-sm-4 col-lg-2" v-for="(mod, index) in modules" :key="index">
                        <div class="card choice-card">
                            <div class="card-body p-3 text-center">
                                <div class="h1 m-0"><i class="icon-lock-open"></i></div>
                                <div class="mb-3 title">{{ mod }}</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModuleChoice',

    data() {
        return {
            modules: ["DANTIC", "IPA", "ITA", "Autres"],
        };
    },

    mounted() {
        this.$store.dispatch('refreshLoggedUser');
    },
    computed: {
        user() {
            return this.$store.getters['auth/GET_USER']
        }
    }
}
</script>

<style scoped src="@/assets/css/atlantis.css"></style>
<style scoped>
.choice-module {
    height: 100vh;
    width: 100%;
    background-color: #1572E8;
    overflow-x: hidden;
    overflow-y: auto;
}

.choice-module .choice-card {
    transition: .3s ease-in-out;
    cursor: pointer;
}

.choice-module .choice-card:hover {
    background-color: #3f0252;
    box-shadow: 0px;
}

.choice-module .choice-card:hover .card-body {
    color: #ffffff !important;
}

.vertical-center {
    margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}
</style>