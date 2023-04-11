<template>
    <div class="modal fade" id="collecte-view-modal" tabindex="-1" role="dialog" aria-labelledby="itaModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="card-title fw-extrabold">
                        <i class="fas fa-folder-open mr-1"></i>
                        {{ collecte.titre }}
                    </h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" class="text-white">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6" v-for="(data, i) in collecte.data" :key="i">
                            <div class="form-group form-group-default">
                                <label class="text-info fw-extrabold">{{ data.input }}</label>
                                <input type="text" class="form-control fw-extrabold text-dark" name="name"
                                    placeholder="Name" :value="data.valeur" disabled>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button class="btn btn-success"> <i class="icon-printer mr-1"></i> Imprimer</button>
                    <button class="btn btn-danger" data-dismiss="modal">Fermer</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>



export default {
    name: "CollecteViewModal",

    props: {
        collecte: {
            type: Object,
            default: () => { },
        }
    }



}

</script>

<style></style>