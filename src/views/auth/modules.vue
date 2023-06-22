<template>
    <div class="wrapper bubble-shadow" data-background-color="blue">
        <div class="choice-module h-100 w-100">
            <div class="container h-100 mx-5">
                <div class="container d-flex h-100">
                    <div class="row my-auto w-75 mx-auto justify-content-center align-items-center">
                        <div class="col-md-12 mb-3">
                            <h1 class="text-center text-white animated zoomIn">Bienvenue agent <strong> <i
                                        class="icon-user mx-2"></i>{{
                                            user.nom_complet }}</strong>!
                            </h1>
                            <p class="text-center text-white animated fadeInUp">Veuillez-vous connecter au module adéquat selon votre niveau d'accès</p>
                        </div>
                        <div class="col-3 col-sm-3 col-lg-2" v-for="(mod, index) in modules" :key="index">
                            <button class="card btn w-100 p-0 choice-card animated zoomIn" :disabled="!mod.enabled"
                                @click.prevent="() => toggleChoice(mod)">
                                <div class="card-body p-3 text-center">
                                    <div class="h1 m-0"><i class="icon-lock"></i></div>
                                    <div class="mb-3 title fw-mediumbold">{{ mod.name }}</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Modules',
    data() {
        let modules = [
            {
                name: "DANTIC",
                enabled: true,
            },
            {
                name: "IPA",
                enabled: false,
            },
            {
                name: "ITA",
                enabled: true,
            },
            {
                name: "SENASEM",
                enabled: true,
            },
            {
                name: "SENAFIC",
                enabled: true,
            },
            {
                name: "DPROTV",
                enabled: true,
            },
        ];
        return {
            modules: modules,
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
            let mod = choice.name.toLowerCase();
            if (this.user) {
                switch (mod) {
                    case 'dantic':
                        this.$router.push({
                            name: "dantic-secure-route",
                        });
                        break;
                    case 'ita':
                        this.$router.push({
                            name: "ita-secure-route",
                        });
                        break
                    case 'senasem':
                        this.$router.push({
                            name: "senasem-secure-route",
                        });
                        break
                    case 'dprotv':
                        this.$router.push({
                            name: "dprotv-secure-route",
                        });
                        break
                    case 'senafic':
                        this.$router.push({
                            name: "senafic-secure-route",
                        });
                        break
                    default:
                        Swal.fire({
                            title: "Module non disponible",
                            text: "Impossible de vous loguer dans cette module sélectionnée!",
                            icon: 'warning',
                            timer: 3000,
                            showConfirmButton: false,
                            showCancelButton: false,
                        });
                        break;
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
.choice-module {
    background-color: #1572E8;
    overflow-x: hidden;
    overflow-y: auto;
}

.choice-module .choice-card {
    transition: .3s ease-in-out;
}



.choice-module .choice-card:hover {
    background-color: #010f3c;
    border: none !important;
    box-shadow: 0px;
}

.choice-module .choice-card:hover .card-body {
    color: #ffffff !important;
}

.disabled {
    background-color: #dadadaeb !important;
    border: none;
    cursor: not-allowed !important;
}

.disabled:hover .card-body {
    color: #3e3c3c !important;
}
</style>

<style scoped src="@/assets/css/atlantis.css"></style>
