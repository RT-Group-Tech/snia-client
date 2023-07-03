<template>
    <bs-modal id="report-modal" size="modal-md" title="Générer un rapport">
        <template #body-content>
            <div class="p-3 d-flex justify-content-center align-content-center align-items-center">
                <div v-if="isLoader" class="d-flex justify-content-center align-content-center align-items-center">
                    <p class="text-center">Chargement rapport</p>
                    <img src="assets/img/processing_loader.gif" style="height: 20px;" alt="loader" class="img-fluid">
                </div>
                <div v-else>
                    <a :href="document" v-if="document !== null" target="_blank" class="btn btn-success btn-lg"><i
                            class="icon-cloud-download mr-1"></i> Télécharger le
                        rapport</a>
                    <a href="javascript:void(0)" @click.prevent="loadGenerate" v-else target="_blank"
                        class="btn btn-primary btn-lg"><i class="icon-refresh mr-1"></i> Relancer le téléchargement</a>
                </div>
            </div>
        </template>
    </bs-modal>
</template>
<script>
export default {
    name: "ReportModal",

    data() {
        return {
            isLoader: false,
            document: null
        }
    },

    mounted() {
        if (navigator.onLine) {
            this.loadGenerate();
        }
        else {
            this.$closeBsModal('report-modal');
            this.isLoader = false;
        }
    },

    methods: {
        loadGenerate() {
            this.isLoader = true;
            this.$store.dispatch("generateReporting").then((result) => {
                if (result.reponse.status === 'success') {
                    this.isLoader = false;
                    this.document = result.reponse.document;
                }
            }).catch((e) => {
                this.isLoader = false;
                this.document = null;
            });
        }
    },
}
</script>