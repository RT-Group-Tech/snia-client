<template>
    <bs-modal @submit.prevent="submitSecteur" id="secteurCreateModal" title="Création secteur">
        <template #body-content>
            <div>
                <label for="to" class="col-form-label mb-2">Désignation secteur</label>
                <div class="input-group mb-3" v-for="(form, index) in forms" :key="index">
                    <input type="text" v-model="form.secteur" placeholder="Entrer la désignation secteur..."
                        class="form-control" required>
                    <div class="input-group-append">
                        <button @click.prevent="addField" v-if="index === 0" class="btn btn-primary btn-icon" type="submit">
                            <i class="flaticon-add"></i>
                        </button>
                        <button @click.prevent="forms.splice(index, 1)" v-else class="btn btn-dark btn-icon">
                            <i class="icon-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        </template>
        <template #footer-content>
            <button type="submit" :disabled="submitLoading" id="forms-submit-btn" class="btn btn-success mr-1"><i
                    v-if="submitLoading" class="fa fa-spinner fa-spin mr-2"></i>Soumettre les données</button>
            <button type="button" class="btn btn-danger" data-dismiss="modal">Fermer</button>
        </template>
    </bs-modal>
</template>

<script>
import Api from "@/apps/ita/api"
export default {
    name: 'ita-secteurs-create-modal',
    data() {
        return {
            submitLoading: false,
            forms: []
        }
    },
    mounted() {
        this.addField()
    },
    computed: {
        ita() {
            return this.$store.state.ita.currentIta;
        }
    },
    methods: {
        submitSecteur(e) {
            this.submitLoading = true;
            Api.creerSecteur(this.forms, (res) => {
                this.submitLoading = false;
                if (res) {
                    $("#secteurCreateModal").modal('hide');
                    this.$store.dispatch('ita/voirSecteurs');
                    Swal({
                        title: "Succès !",
                        text: "Opération effectuée avec succès !",
                        icon: "success",
                        timer: 3000,
                        showCancelButton: false,
                        showConfirmButton: false
                    });
                }
            })
        },
        addField() {
            this.forms.push({ secteur: '', ita_id: this.ita.ita_id });
        }
    }
}
</script>