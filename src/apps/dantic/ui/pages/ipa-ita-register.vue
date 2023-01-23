<template>
    <div class="main-panel">
        <div class="container">
            <div class="panel-header bg-success-gradient">
                <div class="page-inner py-5">
                    <div class="d-flex align-items-left align-items-md-center flex-column flex-md-row">
                        <div>
                            <h2 class="text-white pb-2 fw-bold">ENREGISTREMENT IPA & ITA</h2>
                            <h5 class="text-white op-7 mb-2 fw-bold">Veuillez saisir les informations des Inspections
                                Provinciales à l'Agriculture (IPA) & des Inspections Territoriales (ITA) y afferents.
                            </h5>
                        </div>

                    </div>
                </div>
            </div>
            <div class="page-inner mt--5">
                <form novalidate v-if="step === 1" class="needs-validation" id="form-ipa"
                    @submit.prevent="submittedStepI">
                    <div class="row mt--2">
                        <!-- Données IPA -->
                        <div class="col-md-12">
                            <div class="card full-height">
                                <div class="card-header">
                                    <h4 class="card-title"><i class="fa fa-archway mr-0"></i> IPA</h4>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Province <sup class="text-danger">*</sup></label>
                                                <div class="select2-input">
                                                    <select id="basic" name="basic" class="form-control" required>
                                                        <option value="">&nbsp;</option>
                                                        <optgroup label="Sélectionner une province...">
                                                            <option v-for="( province, index) in provinces"
                                                                :value="province" :key="index">{{ province }}</option>

                                                        </optgroup>
                                                    </select>
                                                </div>
                                                <div class="invalid-feedback">
                                                    Selectionnez une province !
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Superficie <sup class="text-danger">*</sup> </label>
                                                <div class="input-group">
                                                    <input type="text" class="form-control" placeholder="Superficie..."
                                                        required>
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">
                                                            <i class="fa fa-map"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="invalid-feedback">
                                                    Superficie requise !
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Habitant <sup class="text-danger">*</sup></label>
                                                <div class="input-group">
                                                    <input type="number" class="form-control" placeholder="habitant..."
                                                        required>
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">
                                                            <i class="fa fa-users"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="invalid-feedback">
                                                    nombre d'habitant requis !
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End Données IPA -->

                        <!--  Données Inspecteur -->
                        <div class="col-md-12">
                            <div class="card full-height">
                                <div class="card-header">
                                    <h4 class="card-title"><i class="fa fa-user mr-0"></i> INSPECTEUR</h4>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Nom <sup class="text-danger">*</sup></label>
                                                <div class="input-group">
                                                    <input type="text" class="form-control"
                                                        placeholder="Nom de l'inspecteur..." required>
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">
                                                            <i class="flaticon-user-1"></i>
                                                        </span>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>E-mail <sup class="text-danger">*</sup></label>
                                                <div class="input-group">
                                                    <input type="text" class="form-control"
                                                        placeholder="Adresse e-mail..." required>
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">
                                                            <i class="flaticon-envelope"></i>
                                                        </span>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Portable <sup class="text-danger">*</sup></label>
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text">
                                                            +243
                                                        </span>
                                                    </div>
                                                    <input type="numeric" class="form-control"
                                                        placeholder="n° portable..." required>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card-footer">
                                    <!-- Submit buttons -->
                                    <div class="wizard-action">
                                        <div class="pull-left">
                                            <button type="submit" class="btn btn-next btn-primary"><i
                                                    class="flaticon-next"></i>
                                                Suivant</button>
                                        </div>
                                        <div class="clearfix"></div>
                                    </div>
                                    <!-- end submit -->
                                </div>
                            </div>
                        </div>
                        <!-- End Inspecteur -->


                    </div>
                </form>

                <form novalidate v-else id="form-ita" class="needs-validation">
                    <div class="row mt--2">
                        <!-- Données ITA -->
                        <div class="col-md-12">
                            <div class="card full-height">
                                <div class="card-header">
                                    <h4 class="card-title"><i class="fa fa-warehouse mr-0"></i> ITA</h4>
                                </div>
                                <div class="card-body">
                                    <div class="row" v-for="(ita, index) in itas" :key="index">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Territoire<sup class="text-danger">*</sup> </label>
                                                <div class="input-group">
                                                    <input type="text" v-model="ita.nom" class="form-control"
                                                        placeholder="Territoire..." required>
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">
                                                            <i class="fa fa-warehouse"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Superficie <sup class="text-danger">*</sup> </label>
                                                <div class="input-group">
                                                    <input type="text" class="form-control" v-model="ita.superficie"
                                                        placeholder="Superficie..." required>
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">
                                                            <i class="fa fa-map"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Habitant <sup class="text-danger">*</sup></label>
                                                <div class="input-group">
                                                    <input type="number" v-model="ita.habitant" class="form-control"
                                                        placeholder="habitant..." required>
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">
                                                            <i class="fa fa-users"></i>
                                                        </span>
                                                    </div>
                                                    <button v-if="index === itas.length - 1" class="btn btn-info"
                                                        @click.prevent="addIta" style="margin-left: 2px;"><i
                                                            class="flaticon-add"></i></button>
                                                    <button v-else class="btn btn-danger"
                                                        @click.prevent="removeIta(index)" style="margin-left: 2px;"><i
                                                            class="fa fa-minus"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <div class="wizard-action">
                                        <div class="pull-left">
                                            <button @click="step = 1" type="button"
                                                class="btn btn-next btn-secondary btn-block"><i
                                                    class="flaticon-back"></i>
                                                Précédent</button>
                                        </div>
                                        <div class="pull-right">
                                            <button type="button" @click.prevent="submitted"
                                                class="btn btn-next btn-success btn-block"><i
                                                    class="flaticon-check"></i>
                                                Enregistrer</button>
                                        </div>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End Données ITA-->


                    </div>
                </form>

            </div>
        </div>


        <!-- Global footer component -->
        <d-footer></d-footer>
        <!-- end Global footer component -->
    </div>
</template>

<script>
import IpaItaRegMixin from "../../mixins/ipa.ita.register"
export default {
    name: "Ipa-Ipa-Register",
    extends: IpaItaRegMixin,


    data() {
        return {
            itas: [],
            step: 1,
        }
    },
    mounted() {
        this.addIta()
    },

    methods: {
        /*Ajoute un objet des champs pour un Ita*/
        addIta() {
            let ita = {
                nom: "",
                superficie: "",
                habitant: ""
            }
            this.itas.push(ita)
        },
        /*Suprime le champ index*/
        removeIta(index) {
            this.itas.splice(index, 1)
        },
        /*Lorsque l'on valide la premiere etape*/
        submittedStepI(event) {
            this.step = 2;
            const forms = document.querySelectorAll("#form-ipa");
            // Loop over them and prevent submission
            Array.from(forms).forEach((form) => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                    form.classList.add("was-validated");
                }

                if (form.checkValidity()) {
                    this.step = 2;
                }
            });
        },
        /*Validation de la dexieme etape*/
        submittedStepII() {
            const forms = document.querySelectorAll("#form-ita");
            Array.from(forms).forEach((form) => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                    form.classList.add("was-validated");
                }
                if (form.checkValidity()) {
                    console.log("form validated");
                }
            });
            for (let i = 0; i < this.itas.length; i++) {

                // Loop over them and prevent submission

                console.log(JSON.stringify(this.itas[i]));
            }
        }
    },

}
</script>