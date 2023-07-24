<template>
    <bs-modal id="report-modal" size="modal-lg" title="Générer un rapport" @on-close="reset">
        <template #body-content>
            <h4>Sélectionnez les dates pour filtrer le rapport !</h4>
            <form @submit.prevent="loadGenerate">
                <div class="input-group m-0 p-0">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <i class="icon-calendar"></i>
                        </span>
                    </div>
                    <input type="date" class="form-control" id="datepicker1" name="datepicker" placeholder="Date du..."
                        required>
                    <input type="date" class="form-control" id="datepicker2" name="datepicker" placeholder="au" required>
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="submit" :disabled="isLoader"> <i class="icon-docs"></i>
                            Générer rapport</button>
                    </div>
                </div>
            </form>
            <div class="p-3 d-flex justify-content-center align-content-center align-items-center">
                <div v-if="isLoader"
                    class="d-flex justify-content-center align-content-center align-items-center flex-column">
                    <lottie-animation :json="json" lottie-size="200"></lottie-animation>
                </div>
                <div v-else>
                    <a :href="document" v-if="document !== null" target="_blank"
                        class="btn btn-success btn-lg w-100 p-4 m-2 text-white"><i class="icon-cloud-download mr-1"></i>
                        Télécharger
                        le
                        rapport</a>
                    <div v-else class="d-flex justify-content-center align-content-center align-items-center">
                        <lottie-animation :json="json2" lottie-size="250"></lottie-animation>
                        <h4 class="display-4">Veuillez générer un rapport !</h4>
                    </div>
                </div>
            </div>
        </template>
    </bs-modal>
</template>
<script>
import jsonLoader from "@/assets/json/loading-1.json";
import jsonReport from "@/assets/json/report.json";

export default {
    name: "ReportModal",

    data() {
        return {
            isLoader: false,
            document: null,
            json: jsonLoader,
            json2: jsonReport
        }
    },

    unmounted() {
        this.reset();
    },

    methods: {
        loadGenerate(event) {
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
        },
        reset() {
            this.document = null;
            this.isLoader = false;
        }
    },
}
</script>