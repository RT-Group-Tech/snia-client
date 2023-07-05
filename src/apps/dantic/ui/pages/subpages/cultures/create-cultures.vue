<template>
    <div class="tab-pane fade" id="v-pills-cultures" role="tabpanel" aria-labelledby="v-pills-home-tab-icons">
        <div class="p-2">
            <div class="d-flex align-items-center mb-2">
                <h3 class="fw-extrabold">Liste des Cultures </h3>
                <button class="btn ml-auto btn-primary" @click="$showBsModal('cultureCreateModal')"><i
                        class="flaticon-add mr-2"></i>Nouvelles cultures</button>
            </div>
            <div class="input-group m-0 mb-2">
                <input type="text" v-model="searchWord" placeholder="Recherche culture..." class="form-control">
                <div class="input-group-append">
                    <span class="input-group-text">
                        <i class="fa fa-search search-icon"></i>
                    </span>
                </div>
            </div>

            <!-- formulaires list -->
            <section-loader :loading="dataLoading">
                <ul class="list-group list-group-bordered">
                    <li class="list-group-item d-lg-flex align-items-center justify-content-between"
                        v-for="(culture, i) in cultures" :key="i">
                        <span> {{ $filters.capitalize(culture.nom) }} </span>
                        <div class="d-flex">
                            <button :disabled="deleteLoading === culture.culture_id" class="btn btn-icon btn-danger mr-1"
                                @click.prevent="deleteCulture(culture.culture_id)">
                                <i v-if="deleteLoading === culture.culture_id" class="fa fa-spinner fa-spin" />
                                <i v-else class="icon-trash"></i>
                            </button>
                        </div>
                    </li>
                </ul>
            </section-loader>
        </div>
    </div>
    <create-culture-modal />
</template>

<script>
import createCultureModal from "../../../modals/culture-create-modal"
export default {
    name: "Create-Categorie",

    data() {
        return {
            deleteLoading: '',
            dataLoading: true,
            searchWord: ''
        }
    },

    components: {
        createCultureModal
    },
    created() {
        this.$store.dispatch('voirCultures').then((s) => this.dataLoading = false).catch((err) => this.dataLoading = false);
    },
    computed: {
        cultures() {
            if (this.searchWord) {
                let filtered = this.$store.getters.GET_CULTURES;
                return filtered.filter((c) => c.nom.toLowerCase().includes(this.searchWord.toLowerCase()));
            }
            return this.$store.getters.GET_CULTURES
        }
    },

}
</script>