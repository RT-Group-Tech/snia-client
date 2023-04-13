<template>
    <teleport to="body">
        <div class="modal fade" id="secteurCreateModal" tabindex="-1" role="dialog" aria-labelledby="ipaModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header bg-primary">
                        <h5 class="modal-title text-white fw-mediumbold" id="ipaModalLabel">
                            CRÉATION SECTEURS</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" class="text-white">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form id="agent-form" @submit.prevent="submitSecteur">
                            <div class="form-group">
                                <label for="to" class="col-form-label mb-2">Désignation secteur</label>
                                <div class="input-group mb-3" v-for="(form, index) in forms" :key="index">
                                    <input type="text" v-model="form.secteur" placeholder="Entrer la désignation secteur..."
                                        class="form-control" required>
                                    <div class="input-group-append">
                                        <button @click.prevent="addField" v-if="index === 0"
                                            class="btn btn-primary btn-icon" type="submit"> <i class="flaticon-add"></i>
                                        </button>
                                        <button @click.prevent="forms.splice(index, 1)" v-else
                                            class="btn btn-dark btn-icon">
                                            <i class="icon-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="text-right mt-3">
                                <button id="submit-btn" type="submit" class="btn btn-success"
                                    :class="submitLoading ? 'disabled' : ''" style="margin-right: 4px;"> <i
                                        v-if="submitLoading" class="fa fa-spinner fa-spin" /> Valider & sauvegarder
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