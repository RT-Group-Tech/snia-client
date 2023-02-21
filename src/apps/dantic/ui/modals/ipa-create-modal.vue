<template>
  <teleport to="body">
    <div class="modal animated zoomIn" id="ipaModal" tabindex="-1" role="dialog" aria-labelledby="agentModalLabel"
         aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header bg-app-2">
            <h5 class="modal-title text-white fw-mediumbold" id="agentModalLabel">
              CREATION DE LA NOUVELLE INSPECTION AGRICOLE PROVINCIALE</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" class="text-white">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form id="agent-form" @submit.prevent="submitIpa">
                <div class="form-group form-group-default bg-light">
                    <label class="fw-extrabold">Nom ipa</label>
                    <input type="text" class="form-control" name="nom"
                           placeholder="Saisir le nom de l'ipa..." required>
                </div>
                <div class="form-group form-group-default bg-light">
                    <label class="fw-extrabold">Population</label>
                    <input type="text" class="form-control" name="population"
                           placeholder="Saisir le nbre de la population..." required>
                </div>
                <div class="form-group form-group-default bg-light">
                    <label class="fw-extrabold">Superficie</label>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" name="postnom"
                               placeholder="Saisir la sperficie..." required>
                        <div class="input-group-append p-md-0 bg-transparent">
                            <span class="input-group-text">Km<sup>2</sup> </span>
                        </div>
                    </div>

                </div>
              <div class="text-right mt-3">
                <button id="submit-btn" type="submit" class="btn btn-success"
                        :class="submitLoading ? 'disabled' : ''" style="margin-right: 4px;"> <i
                    v-if="submitLoading" class="fa fa-spinner fa-spin" /> Enregistrer agent
                </button>
                <button class="btn btn-danger">Fermer</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  name: "ipa-create-modal",

  data() {
    return {
      submitLoading: false
    }
  },
  methods:{
    submitIpa(event){
      this.submitLoading = true;

      setTimeout(()=>{
        this.submitLoading = false;
      }, 1000)
    }
  }
}
</script>

<style scoped>

</style>