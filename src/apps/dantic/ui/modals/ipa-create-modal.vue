<template>
  <teleport to="body">
    <div class="modal animated zoomIn" id="agentModal" tabindex="-1" role="dialog" aria-labelledby="agentModalLabel"
         aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header bg-app-2">
            <h5 class="modal-title text-white fw-mediumbold" id="agentModalLabel"> <i
                class="fa fa-user-plus mr-2"></i>
              CREATION DE LA NOUVELLE INSPECTION AGRICOLE PROVINCIALE</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" class="text-white">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form id="agent-form" @submit.prevent="submitIpa">

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