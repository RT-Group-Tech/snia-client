<template>
    <div class="tab-pane fade" id="v-pills-forms" role="tabpanel" aria-labelledby="v-pills-buy-tab-icons">
        <div class="p-2">
            <div class="d-lg-flex d-block mb-4">
                <h3 class="fw-extrabold">Liste des Formulaires </h3>
                <form action="#" class="ml-auto">
                    <div class="input-group">
                        <input type="text" v-model="searchWord" placeholder="Recherche formulaire..." class="form-control">
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
                    <div>
                        <button class="btn btn-icon btn-danger mr-1" @click.prevent="deleteFormulaire(i)"><i
                                class="icon-trash"></i></button>
                        <button class="btn btn-icon btn-info" type="button" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false"><i class="icon-share-alt"></i></button>
                        <ul class="dropdown-menu" role="menu" x-placement="right-start"
                            style="position: absolute; transform: translate3d(119px, 0px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <h6 class="dropdown-header fw-extrabold text-primary">
                                Formulaire sections
                            </h6>
                            <div class="dropdown-divider"></div>
                            <li v-for="(section, i) in formulaire.sections" :key="i">
                                <a class="dropdown-item d-flex justify-content-between" href="javascript:void(0)"
                                    @click.prevent="getSection(section)">
                                    <span>{{ section.section }}</span><i class="icon-arrow-right text-info"></i>
                                </a>
                                <div class="dropdown-divider"></div>
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
    data() {
        return {
            searchWord: ''
        }
    },

    async mounted() {
        await this.$store.dispatch('dantic/voirFormulaires')
    },

    computed: {
        formulaires() {
            if (this.searchWord) {
                let filtered = this.$store.getters['dantic/GET_FORMULAIRES'];
                return filtered.filter((f) => f.titre.toLowerCase().includes(this.searchWord.toLowerCase()));
            }
            return this.$store.getters['dantic/GET_FORMULAIRES']
        }
    },

    methods: {
        getSection(section) {
            console.log(JSON.stringify(section));
        },
        deleteFormulaire(id) {
            Swal.fire({
                title: 'Etes-vous sûr ?',
                text: "Voulez vous supprimer définitivement ce formulaire ?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#31ce36',
                cancelButtonColor: '#f25961',
                confirmButtonText: 'Oui, supprimer',
                cancelButtonText: "Non, fermer",
            }).then((result) => {
                if (result.isConfirmed) {

                }
            });
        }
    }
}
</script>