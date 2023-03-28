<template>
    <div class="tab-pane fade" id="v-pills-forms" role="tabpanel" aria-labelledby="v-pills-buy-tab-icons">
        <div class="p-2">
            <div class="d-lg-flex d-block mb-4">
                <h3><i class="flaticon-interface-6 mr-1"></i>Liste des Formulaires </h3>
                <form action="#" class="ml-auto">
                    <div class="input-group">
                        <input type="text" placeholder="Recherche formulaire..." class="form-control">
                        <div class="input-group-append">
                            <span class="input-group-text">
                                <i class="fa fa-search search-icon"></i>
                            </span>
                        </div>
                    </div>
                </form>
            </div>

            <ul class="list-group list-group-bordered">
                <li class="list-group-item d-lg-flex justify-content-between" v-for="(formulaire, i) in formulaires"
                    :key="i">
                    <span><i class="flaticon-interface-6 text-info mr-1"></i> {{ formulaire.titre }}</span>
                    <button class="btn btn-icon btn-info"><i class="flaticon-right-arrow"></i></button>
                </li>
            </ul>
        </div>
    </div>
</template>



<script>
export default {
    name: 'Formulaires-View-Page',

    async mounted() {
        await this.$store.dispatch('dantic/voirFormulaires')
    },

    computed: {
        formulaires() {
            return this.$store.getters['dantic/GET_FORMULAIRES']
        }
    },
}
</script>