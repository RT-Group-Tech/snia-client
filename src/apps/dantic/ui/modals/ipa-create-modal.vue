<template>
  <bs-modal id="ipaCreateModal" title="Enregistrer une Inspéction Provinciale Agricole"
    @submit.prevent="submitIpa" size="modal-lg">
    <template #body-content>
      <div class="form-group form-group-default bg-light">
        <label class="fw-extrabold">Sélectionner la province</label>
        <!--<input type="text" v-model="form.province" class="form-control" name="nom"
                  placeholder="Saisir le nom de l'ipa..." required>!-->
        <select name="province" id="province" class="form-control" v-model="form.province">
          <option value="">-------</option>
          <option :value="province" v-for="(province, index) in provinces" :key="index">{{ province }}</option>
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
      <div class="row">
        <div class="col-md-6">
          <div class="form-group form-group-default bg-light">
            <label class="fw-extrabold">Bureau IPA: GPS/Longitude</label>
            <div class="input-group">
              <input type="text" v-model="form.longitude" class="form-control" name="postnom"
                placeholder="Saisir la longitude..." required>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group form-group-default bg-light">
            <label class="fw-extrabold">Bureau IPA: GPS/Latitude</label>
            <div class="input-group">
              <input type="text" v-model="form.latitude" class="form-control" name="postnom"
                placeholder="Saisir la latitude..." required>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #footer-content>
      <button id="submit-btn" type="submit" class="btn btn-success" :class="submitLoading ? 'disabled' : ''"
        style="margin-right: 4px;"> <i v-if="submitLoading" class="fa fa-spinner fa-spin" /> Enregistrer IPA
      </button>
      <button class="btn btn-danger" data-dismiss="modal">Fermer</button>
    </template>
  </bs-modal>
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
      code_ipa: '',
      superficie: '',
      longitude: '',
      latitude: ''
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
        this.$store.dispatch('dantic/viewIpas');
        $("#ipaCreateModal").modal('hide')
        this.cleanFields();
      })
    },

    cleanFields() {
      this.form.province = '';
      this.form.superficie = '';
      this.form.code_ipa = "";
      this.form.longitude = '';
      this.form.latitude = '';
    }
  },
}
</script>
