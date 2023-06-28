<template>
    <div class="main-panel">
        <div class="container">
            <div class="panel-header">
                <div class=" page-inner">
                    <div class="page-header">
                        <h4 class="page-title">Générer Rapport</h4>
                    </div>
                </div>
            </div>
            <div class="page-inner mt--5">
                <div class="row ">
                    <div class="col-md-12">
                        <div class="form-group mb-4 p-0">
                            <label><span class="fa fa-calendar-alt"></span> Sélectionner dates</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text bg-light text-muted"><i class="icon-magnifier"></i></span>
                                </div>

                                <input type="date" class="form-control" id="datepicker1" placeholder="Du...">
                                <input type="date" placeholder="Au..." class="form-control" id="datepicker2">
                                <div class="input-group-append">
                                    <button type="button" class="btn btn-success"
                                        style="text-transform: uppercase; font-weight: bold;"
                                        @click.prevent="generateReport"> Générer</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="row" v-if="launchedReportGeneration">
                    <div class="col-md-12">
                        <section-loader :loading="processing">
                            <div style="min-height:300px; display:flex; justify-content:center;">
                                <div>
                                    <a :href="reportGenerated" target="_blank" class="btn btn"
                                        style="border:1px solid blue; border-radius:5px; margin-top: 120px;"><span
                                            class="fa fa-download"></span> Télécharger rapport</a>
                                </div>
                            </div>
                        </section-loader>
                    </div>
                </div>
                <!--<div class="row" v-else>
                    <div class="col-6 col-sm-4 col-lg-2" v-for="(collecte, i) in collectes" :key="i">
                        <div class="card folder-card rounded" @click.prevent="showCollecte(collecte)">
                            <div class="card-body p-3 text-center">
                                <div class="h1 m-0"> <i class="fas fa-folder fa-2x" style="color: #1572e8"></i> </div>
                                <div class="text-muted mb-2">{{ $filters.capitalize($filters.sortLength(collecte.titre, 22,
                                    '...')) }}</div>
                                <div class="text-right text-muted">
                                    <small style="display:none; font-size: 10px;" class="fw-mediumbold"><i
                                            class="icon-calendar mr-1"></i>20/12/2023</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>!-->
            </div>
        </div>

        <!-- Global footer component -->
        <d-footer v-if="$route.name === 'ipa-collect-route'"></d-footer>
        <!-- end Global footer component -->
    </div>
</template>

<script>
import sectionLoader from "@/views/utilities/section_loader";

export default {
    name: "reporting-page",
    components: { sectionLoader },
    data() {
        return {
            reportDocumentReady: false,
            launchedReportGeneration: false,
            reportGenerated: null,
            processing: true
        }
    },
    methods: {
        generateReport() {
            this.reset();

            this.launchedReportGeneration = true;
            this.$store.dispatch("generateReporting").then((reponse) => {
                console.log("res:");
                console.log(reponse);
                if (reponse.reponse !== undefined) {
                    reponse = reponse.reponse;

                    if (reponse.status !== undefined && reponse.status === "success") {
                        this.processing = false;
                        this.reportGenerated = reponse.document;
                    }
                }
            });
        },
        reset() {
            this.reportDocumentReady = false;
            this.launchedReportGeneration = false;
            this.reportGenerated = null;
            this.processing = true;
        }
    }

}
</script>

<style scoped></style>