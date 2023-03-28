<template>
  <teleport to="body">
    <div class="modal fade" id="ipaCreateModal" tabindex="-1" role="dialog" aria-labelledby="ipaModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header bg-app-2">
            <h5 class="modal-title text-white fw-mediumbold" id="ipaModalLabel">
              CRÉATION DE LA NOUVELLE INSPECTION PROVINCIALE AGRICOLE</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" class="text-white">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form id="agent-form" @submit.prevent="submitIpa">
              <div class="form-group form-group-default bg-light">
                <label class="fw-extrabold">Sélectionner la province</label>
                <!--<input type="text" v-model="form.province" class="form-control" name="nom"
                  placeholder="Saisir le nom de l'ipa..." required>!-->
                <select name="province" id="province" class="form-control" v-model="form.province">
                  <option value="">-------</option>
                  <option :value="province" v-for="(province,index) in provinces" :key="index">{{province}}</option>
                </select>
              </div>
              <div class="form-group form-group-default bg-light">
                <label class="fw-extrabold">CODE IPA</label>
                <input type="text" class="form-control" v-model="form.code_ipa" name="population"
                  placeholder="Saisir le code de l'ipa..." required>
              </div>
              <div class="form-group form-group-default bg-light">
                <label class="fw-extrabold">Superficie</label>
                <div class="input-group mb-3">
                  <input type="text" v-model="form.superficie" class="form-control" name="postnom"
                    placeholder="Saisir la superficie..." required>
                  <div class="input-group-append p-md-0 bg-transparent">
                    <span class="input-group-text">Km<sup>2</sup> </span>
                  </div>
                </div>

              </div>
              <div class="text-right mt-3">
                <button id="submit-btn" type="submit" class="btn btn-success" :class="submitLoading ? 'disabled' : ''"
                  style="margin-right: 4px;"> <i v-if="submitLoading" class="fa fa-spinner fa-spin" /> Enregistrer IPA
                </button>
                <button class="btn btn-danger" data-dismiss="modal">Fermer</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import Api from '@/apps/dantic/api'
import IpaItaRegMixin from "../../mixins/ipa.ita.register"
export default {
  name: "ipa-create-modal",
  extends: IpaItaRegMixin,
  data() {
    let form = {
      province: '',
      code_ipa:'',
      superficie: ''
    };

    return {
      submitLoading: false,
      form: form
    }
  },
  methods: {
    submitIpa(event) {
      this.submitLoading = true;
      Api.creerIpa(this.form, (res) => {
        this.submitLoading = false;
        this.$store.dispatch('dantic/viewIpas')
        this.cleanFields();
      })
    },

    cleanFields() {
      //this.form.province = '';
      this.form.superficie = '';
      this.form.code_ipa="";
    }
  },
}
</script>
