<template>
    <div class="tab-pane fade" id="v-pills-forms" role="tabpanel" aria-labelledby="v-pills-buy-tab-icons">
        <div class="p-2">
            <div class="d-lg-flex d-block mb-4">
                <h3 class="fw-extrabold">Liste des Formulaires </h3>
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
                <li class="list-group-item d-lg-flex justify-content-between" v-for="(formulaire, i) in formulaire"
                    :key="i">
                    <span><i class="flaticon-interface-6 text-info mr-1"></i> {{ formulaire.titre }}</span>
                    <div>
                        <button class="btn btn-icon btn-danger mr-1"><i class="icon-trash"></i></button>
                        <button class="btn btn-icon btn-info" type="button" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false"><i class="icon-share-alt"></i></button>
                        <ul class="dropdown-menu" role="menu" x-placement="right-start"
                            style="position: absolute; transform: translate3d(119px, 0px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <h6 class="dropdown-header">
                                <span class="dropdown-title fw-extrabold text-primary">Formulaire sections</span>
                            </h6>
                            <div class="dropdown-divider"></div>
                            <li>
                                <a class="dropdown-item d-flex justify-content-between" href="#">
                                    <span>Action</span><i class="icon-arrow-right text-info"></i>
                                </a>
                                <a class="dropdown-item d-flex justify-content-between" href="#">
                                    <span>Action</span><i class="icon-arrow-right text-info"></i>
                                </a>
                                <a class="dropdown-item d-flex justify-content-between" href="#">
                                    <span>Action</span><i class="icon-arrow-right text-info"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

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