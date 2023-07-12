<template>
    <div class="main-panel">

        <div class="bg-primary2 pt-4 pb-5">
            <div class="container text-white py-2">
                <div class="d-flex align-items-center">
                    <div class="mr-3">
                        <h1 class="mb-3">Bienvenue sur le module DPROTV</h1>
                        <h5 class="op-7 mb-3">La Direction des Produits Phytosanitaires de la Rép. Dém
                            du Congo</h5>
                    </div>
                    <div class="ml-auto">
                        <button type="button" class="btn btn-success" @click.prevent="$showBsModal('createProduitModal')">
                            <i class="flaticon-add"></i> Nouveau produit phyto certifié
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mt--5">
            <div class="page-inner mt--3">
                <div class="row">
                    <div class="col-6 col-sm-4 col-lg-2">
                        <div class="card animated zoomIn">
                            <div class="card-body p-3 text-center">
                                <div class="text-muted m-0">Nombre des produits phyto</div>
                                <div class="h1 mb-3 fw-extrabold ">0</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-sm-4 col-lg-2">
                        <div class="card animated zoomIn">
                            <div class="card-body p-3 text-center">
                                <div class="text-muted m-0">Nombres des agents</div>
                                <div class="h1 mb-3 fw-extrabold">0</div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="row row-card-no-pd">
                    <div class="col-md-12">
                        <div class="card animated fadeInUp">
                            <div class="card-header">
                                <div class="card-head-row d-flex justify-content-between">
                                    <h4 class="card-title">Liste des produits phytosanitaires certifiés</h4>
                                    <form>
                                        <div class="input-group">
                                            <input type="text" v-model="searchWord" placeholder="Recherche ..."
                                                class="form-control">
                                            <div class="input-group-append">
                                                <button type="submit" class="btn btn-search">
                                                    <i class="fa fa-search search-icon"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <p class="card-category">
                                    il s'agit de la liste exhaustive de tous les produits phytosanitaires certifiés
                                    repertoriés !</p>
                            </div>
                            <div class="card-body m-0">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="table-responsive table-hover table-sales">
                                            <table class="table">
                                                <thead>
                                                    <th>
                                                        Image
                                                    </th>
                                                    <th>
                                                        Libellé du produit phyto.
                                                    </th>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(prod, i) in produits" :key="i">
                                                        <td>
                                                            <div class="flag">
                                                                <img :src="prod.media" alt="image">
                                                            </div>
                                                        </td>
                                                        <td>{{ prod.titre }}</td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                </div>
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
    name: "Dashboard",

    data() {
        return {
            searchWord: ''
        }
    },

    computed: {
        produits() {
            if (this.searchWord) {
                let filtered = this.$store.getters['dprotv/GET_PROD'];
                return filtered.filter((prod) => prod.titre.toLowerCase().includes(this.searchWord.toLowerCase()));
            }
            else {
                return this.$store.getters['dprotv/GET_PROD'];
            }
        }
    },
}
</script>

