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
        <bs-modal title="Custom modal" id="myModal" size="modal-lg">
            <template #body-content>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates inventore cupiditate sunt porro
                    reiciendis amet, incidunt impedit laboriosam quod, voluptas, distinctio dolore ad quibusdam! Ipsa
                    doloribus totam deserunt debitis illo?</p>

                <fieldset>
                    <legend class="d-flex justify-content-between align-items-center p-1">
                        <span id="title">
                            Section title
                        </span>
                        <button class="btn btn-icon btn-sm btn-primary"> <i class="flaticon-add"></i></button>
                    </legend>

                    <div class="form-inline">
                        <div class="form-group">
                            <label for="name"></label>
                            <input type="text" class="form-control" id="name" placeholder="enter your name..." required>
                        </div>
                        <div class="form-group">
                            <label for="nick"></label>
                            <input type="text" class="form-control" id="nick" placeholder="enter nick name..." required>
                        </div>
                    </div>
                </fieldset>

            </template>
            <template #footer-content>
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </template>
        </bs-modal>

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
                    this.showModal();
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

        showModal() {
            let modal = $("#myModal");
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

fieldset {
    font-family: sans-serif;
    border: 1px solid #eee;
    border-radius: 5px;
    padding: 8px;
}

fieldset legend {
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    color: #010f3c;
    font-size: 15px;
    font-weight: 600;
    border-radius: 5px
}

fieldset legend span {
    text-transform: uppercase;
    font-size: 12px;
}

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
