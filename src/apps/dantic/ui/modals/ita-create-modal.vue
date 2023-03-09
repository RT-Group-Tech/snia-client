<template>
    <div class="modal animated zoomIn bd-create-ita-modal-xl" id="itaModal" tabindex="-1" role="dialog"
            aria-labelledby="itaModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header bg-app-2">
                        <h5 class="modal-title text-white fw-mediumbold" id="itaModalLabel">
                            CRÉATION DE LA NOUVELLE INSPECTION TERRITORIALE AGRICOLE </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" class="text-white">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form id="agent-form" @submit.prevent="submitIta">
                            <div class="form-group form-group-default bg-light">
                                <label class="fw-extrabold">Nom ita</label>
                                <input type="text" class="form-control" name="nom" placeholder="Saisir le nom de l'ita..."
                                    required>
                            </div>

                            <div class="form-group form-group-default bg-light">
                                <label class="fw-extrabold">Population</label>
                                <input type="text" class="form-control" name="population"
                                    placeholder="Saisir le nombre de la population..." required>
                            </div>
                            <div class="form-group form-group-default bg-light">
                                <label class="fw-extrabold">Superficie</label>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" name="postnom"
                                        placeholder="Saisir la superficie..." required>
                                    <div class="input-group-append p-md-0 bg-transparent">
                                        <span class="input-group-text">Km<sup>2</sup> </span>
                                    </div>
                                </div>

                            </div>
                            <div class="form-group form-group-default bg-light">
                                <label class="fw-extrabold">IPA</label>

                            </div>
                            <div class="text-right mt-3">
                                <button id="submit-btn" type="submit" class="btn btn-success" data-toggle="modal"
                            data-target=".bd-ita-modal-xl"
                                    :class="submitLoading ? 'disabled' : ''" style="margin-right: 4px;"> 
                                    <i v-if="submitLoading" class="fa fa-spinner fa-spin" /> Enregistrer ITA
                                </button>
                                <button class="btn btn-danger" data-dismiss="modal">Fermer</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: "ita-create-modal",
}
</script>

<style>
</style>