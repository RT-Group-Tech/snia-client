<template>
    <bs-modal :title="selectedIpa ? `Création des ITAs pour ${selectedIpa.province.toUpperCase()}` : 'Création des ITAs'"
        id="itaCreateModal" @submit.prevent="createIta" size="modal-lg">
        <template #body-content>
            <div class="form-group form-group-default bg-light">
                <label class="fw-extrabold">Nom ITA</label>
                <input type="text" v-model="form.ita" class="form-control" name="nom"
                    placeholder="Saisir le nom de l'ITA..." required>
            </div>

            <div class="form-group form-group-default bg-light">
                <label class="fw-extrabold">CODE ITA</label>
                <input type="text" v-model="form.code_ita" class="form-control" name="population"
                    placeholder="Saisir le code de l'ITA" required>
            </div>


            <div class="row">
                <div class="col-md-6">
                    <div class="form-group form-group-default bg-light">
                        <label class="fw-extrabold">Superficie</label>
                        <div class="input-group">
                            <input type="text" v-model="form.superficie" class="form-control" name="postnom"
                                placeholder="Saisir la superficie..." required>
                            <div class="input-group-append p-md-0 bg-transparent">
                                <span class="input-group-text">Km<sup>2</sup> </span>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="col-md-6" v-if="!selectedIpa">
                    <div class="form-group form-group-default bg-light">
                        <label>Province <sup class="text-danger">*</sup></label>
                        <div class="select2-input">
                            <select id="provinceSelect" v-model="form.ipa_id" name="basic" class="form-control" required>
                                <option value="">&nbsp;</option>
                                <option v-for="( ipa, index) in ipas" :value="ipa.ipa_id" :key="index">
                                    {{ ipa.province }}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <div class="form-group form-group-default bg-light">
                        <label class="fw-extrabold">GPS/Longitude</label>
                        <div class="input-group">
                            <input type="text" v-model="form.longitude" class="form-control" name="postnom"
                                placeholder="Saisir la longitude..." required>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group form-group-default bg-light">
                        <label class="fw-extrabold">GPS/Latitude</label>
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
                style="margin-right: 4px;">
                <i v-if="submitLoading" class="fa fa-spinner fa-spin" /> Enregistrer ITA
            </button>
            <button class="btn btn-danger" data-dismiss="modal">Fermer</button>
        </template>
    </bs-modal>
</template>

<script>

import Api from '@/apps/dantic/api'

export default {
    name: "ita-create-modal",
    data() {
        let form = {
            ipa_id: '',
            ita: '',
            code_ita: '',
            superficie: '',
            longitude: '',
            latitude: ''
        }
        return {
            form: form,
            submitLoading: false,
        }
    },

    methods: {
        /*Fonction permettant de fermer le modal*/
        closeModal() {
            $("#itaCreateModal").modal("hide")
        },
        /*Soumettre les données relatives à la création d'une ipa */
        createIta(event) {
            console.log(JSON.stringify(this.form));
            this.submitLoading = true
            if (this.selectedIpa !== null) {
                this.form.ipa_id = this.selectedIpa.ipa_id
            }
            Api.creerIta(this.form, (res) => {
                this.submitLoading = false;
                this.$store.dispatch('dantic/viewItas');
                if (this.selectedIpa !== null) {
                    this.$store.dispatch('dantic/getItasOfIpa', this.selectedIpa.ipa_id);
                }
                $("#itaCreateModal").modal('hide')
                this.cleanFields();
            })
        },
        cleanFields() {
            this.form.ita = '';
            this.form.superficie = '';
            this.form.code_ita = '';
            this.form.longitude = '';
            this.form.latitude = '';
        }
    },

    computed: {
        ipas() {
            return this.$store.getters['dantic/GET_IPAS'];
        },
        selectedIpa() {
            return this.$store.state.dantic.selectedIpa;
        }
    }
}
</script>

<style></style>