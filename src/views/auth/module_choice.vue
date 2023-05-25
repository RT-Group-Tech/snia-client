<template>
    <div class="wrapper bubble-shadow" data-background-color="blue">
        <div class="choice-module h-100 w-100">
            <div class="container d-flex h-100">
                <div class="row my-auto w-100 mx-auto justify-content-center align-items-center">
                    <div class="col-md-12 mb-3">
                        <h1 class="text-center text-white">Bienvenue agent <strong> <i class="icon-user mx-2"></i>{{
                            user.name }}</strong>!
                        </h1>
                        <p class="text-center text-white">Veuillez sélectionner une module dans laquelle vs voulez vous
                            loguer !</p>
                    </div>
                    <div class="col-6 col-sm-4 col-lg-2" v-for="(mod, index) in modules" :key="index">
                        <div class="card choice-card" @click.prevent="() => toggleChoice(mod)">
                            <div class="card-body p-3 text-center">
                                <div class="h1 m-0"><i class="icon-lock"></i></div>
                                <div class="mb-3 title fw-mediumbold">{{ mod }}</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <formulaire-config-modal></formulaire-config-modal>
    </div>
</template>

<script>
import FormulaireConfigModal from '../../apps/dantic/ui/modals/formulaire-config-modal'

export default {

    name: 'ModuleChoice',

    components: {
        FormulaireConfigModal,

    },
    data() {
        return {
            modules: ["DANTIC", "IPA", "ITA", "Autres"],
        };
    },
    async mounted() {

        await this.$store.dispatch("auth/refreshLoggedUser")
    },
    computed: {
        user() {
            return this.$store.getters['auth/GET_USER']
        }
    },
    methods: {
        toggleChoice(choice) {
            let module = choice.toLowerCase();
            if (this.user) {
                if (module.includes('dantic')) {
                    this.$router.push({
                        name: "dantic-secure-route",
                    });
                } else if (module.includes('ita')) {
                    this.$router.push({
                        name: "ita-secure-route",
                    });
                }
                else if (module.includes('autres')) {
                    console.log("others");
                }
                else {
                    Swal.fire({
                        title: "Module non disponible",
                        text: "Impossible de vous loguer dans cette module sélectionnée!",
                        icon: 'warning',
                        timer: 3000,
                        showConfirmButton: false,
                        showCancelButton: false,
                    });
                }
            }
        },

        triggerSubmit(e) {
            $('#myForm').submit((e) => {
                console.log(JSON.stringify(e.target.value));
            })
        },

        showModal() {
            let modal = $("#configModal");
            modal.modal('show');
        }
    },
}
</script>

<style scoped>
/* fieldset {
    border: 1px solid#eee;
    border-radius: 5px;
    padding: 10px;
}

legend {
    padding: 0 10px;
    font-size: 15px;
    font-weight: 600;
} */



.choice-module {
    background-color: #1572E8;
    overflow-x: hidden;
    overflow-y: auto;
}

.choice-module .choice-card {
    transition: .3s ease-in-out;
    cursor: pointer;
}

.choice-module .choice-card:hover {
    background-color: #010f3c;
    border: none !important;
    box-shadow: 0px;
}

.choice-module .choice-card:hover .card-body {
    color: #ffffff !important;
}
</style>

<style scoped src="@/assets/css/atlantis.css"></style>
