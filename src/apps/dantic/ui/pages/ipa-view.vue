<template>
  <div class="main-panel">
    <div class="container">
      <div class="panel-header">
        <div class=" page-inner py-5">
          <div class="page-header">
            <h4 class="page-title">Inspection Provinciale Agricole</h4>
            <ul class="breadcrumbs">
              <li class="nav-home">
                <router-link :to="{ name: 'dashboard-route' }">
                  <i class="flaticon-home"></i>
                </router-link>
              </li>
              <li class="separator">
                <i class="flaticon-right-arrow"></i>
              </li>
              <li class="nav-item">
                <a href="#">Liste des IPAs</a>
              </li>
            </ul>

          </div>
        </div>
      </div>
      <div class="page-inner mt--5">

        <div class="row mt--2">
          <div class="col-md-12">
            <div class="d-flex justify-content-between">
              <div class="d-md-inline-block">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-white">
                      <i class="fa fa-search search-icon"></i>
                    </span>
                  </div>
                  <input type="text" v-model="searchword" placeholder="Rechercher un IPA ..." class="form-control"
                    aria-label="Text input with dropdown button">
                  <div class="input-group-append">
                    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">Filtrer </button>
                    <div class="dropdown-menu" x-placement="bottom-start"
                      style="position: absolute; transform: translate3d(229px, 43px, 0px); top: 0px; left: 0px; will-change: transform;">
                      <a class="dropdown-item" href="#">IPA</a>
                      <a class="dropdown-item" href="#">Population</a>
                      <a class="dropdown-item" href="#">Superficie</a>

                    </div>
                  </div>
                </div>
              </div>
              <button type="button" @click="showIpaRegisterModal" class="btn btn-success d-none d-sm-inline-block">
                <i class="flaticon-add mr-1"></i>Nouvelle IPA
              </button>
            </div>
          </div>
          <div class="col-md-12">
            <div class="row mt-4">
              <div class="col-md-3" v-for="(ipa, i) in ipas" :key="i">
                <div class="card card-pricing">
                  <div class="card-header bg-transparent">
                    <h4 class="card-title">
                      <img src="assets/img/icons/city.png" height="20" width="20" class="img-fluid mr-1">
                      {{ ipa.province }}
                    </h4>
                  </div>
                  <div class="card-body">
                    <ul class="specification-list">
                      <li>
                        <span class="name-specification">Population</span>
                        <span class="status-specification">{{ ipa.total_population }}</span>
                      </li>
                      <li>
                        <span class="name-specification">Superficie</span>
                        <span class="status-specification">{{ ipa.superficie }} km<sup>2</sup> </span>
                      </li>
                      <li>
                        <span class="name-specification">Total IPA</span>
                        <span class="status-specification">130
                          <button type="button" :disabled="itaLoading === ipa.ipa_id" @click.prevent="getItas(ipa)"
                            title="Voir la liste des itas" class="btn btn-icon btn-sm ml-2 btn-info"
                            data-toggle="tooltip">
                            <i v-if="itaLoading === ipa.ipa_id" class="fa fa-spinner fa-spin"></i>
                            <i v-else class="fas fa-th-list"></i>
                          </button>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->

    <ita-list-modal />

    <!-- End Modal -->

    <!-- Modal Entry -->

    <ita-create-modal />

    <!-- End Modal -->


    <!--Ipa register modal -->
    <ipa-create-modal />
    <!-- End Ipa reg modal -->


    <!-- Global footer component -->
    <d-footer></d-footer>
    <!-- end Global footer component -->
  </div>
</template>

<script>
import IpaCreateModal from "../modals/ipa-create-modal.vue";
import ItaCreateModal from "../modals/ita-create-modal.vue";
import ItaListModal from "../modals/ita-list-modal.vue"
export default {
  name: "Ipa-view",
  components: { IpaCreateModal, ItaCreateModal, ItaListModal },
  data() {
    return {
      searchword: '',
      itaLoading: ''
    }
  },

  computed: {
    ipas() {
      if (this.searchword) {
        let filtered = this.$store.getters['dantic/GET_IPAS'];
        return filtered.filter((ipa) => ipa.province.toLowerCase().includes(this.searchword.toLowerCase()));
      }
      else {
        return this.$store.getters['dantic/GET_IPAS'];
      }
    },
  },
  mounted() {
    this.$initBsTooltip();
    this.$store.dispatch('dantic/viewIpas')
  },
  methods: {
    showIpaRegisterModal() {
      $("#ipaCreateModal").modal('show');
    },

    /*Permet d'afficher les itas relatives à une ipa en envoyant son ID*/
    getItas(ipa) {
      this.$store.state.dantic.selectedIpa = ipa;
      this.itaLoading = ipa.ipa_id
      this.$store.dispatch('dantic/getItasOfIpa', ipa.ipa_id).then((res) => {
        this.itaLoading = '';
        $('#ita-view-modal').modal('show');

      });
    }

  },
}
</script>