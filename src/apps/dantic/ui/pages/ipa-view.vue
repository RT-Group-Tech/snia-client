<template>
  <div class="main-panel">
    <div class="container">
      <div class="panel-header">
        <div class=" page-inner py-5">
          <div class="page-header">
            <h4 class="page-title">Insp. Agri. Prov.</h4>
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
                <a href="#">liste des ipas</a>
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
                  <input type="text" class="form-control" aria-label="Text input with dropdown button">
                  <div class="input-group-append">
                    <button class="btn btn-primary dropdown-toggle" type="button"
                            data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">Filtrer</button>
                    <div class="dropdown-menu" x-placement="bottom-start"
                         style="position: absolute; transform: translate3d(229px, 43px, 0px); top: 0px; left: 0px; will-change: transform;">
                      <a class="dropdown-item" href="#">Nom</a>
                      <a class="dropdown-item" href="#">Status</a>
                      <a class="dropdown-item" href="#">Rôle</a>
                    </div>
                  </div>
                </div>
              </div>
              <button type="button" @click="showIpaRegisterModal" class="btn btn-success d-none d-sm-inline-block"><i
                  class="icon-user-follow mr-2"></i>Nouvelle ipa</button>
            </div>
          </div>
          <div class="col-md-12">
            <div class="card full-height mt-4 animated fadeIn">
              <div class="card-body">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- Agent register modal -->
    <agent-create-modal></agent-create-modal>
    <!-- End Agent reg modal -->


    <!-- Global footer component -->
    <d-footer></d-footer>
    <!-- end Global footer component -->
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
    name: "Ipa-view",

    computed: {
        ...mapGetters({
            ipas: 'dantic/GET_IPAS'
        })
    },
    methods: {
        showIpaRegisterModal() {
            $("#ipaModal").modal('show');
        }
    },
}
</script>