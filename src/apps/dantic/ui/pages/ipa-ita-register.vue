<template>
    <div class="main-panel">
        <div class="container">
            <div class="panel-header bg-primary-gradient">
                <div class="page-inner py-5 skew-shadow">
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
                <form novalidate v-if="step === 1" class="needs-validation" id="form-ipa" @submit.prevent="submittedStepI">
                    <div class="row mt--2">

                        <div class="col-md-12">
                            <div class="card full-height animated fadeIn">
                                <div class="card-header">
                                    <h4 class="card-title"><i class="fa fa-archway mr-0"></i> IPA</h4>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Province <sup class="text-danger">*</sup></label>
                                                <div class="select2-input">
                                                    <select id="provinceSelect" name="basic" class="form-control">
                                                        <option value="">&nbsp;</option>
                                                        <option v-for="( province, index) in provinces" :value="province"
                                                            :key="index">{{ province }}</option>
                                                    </select>
                                                    {{ ipa.province }}
                                                </div>
                                                <div class="invalid-feedback">
                                                    Sélectionnez une province !
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Superficie <sup class="text-danger">*</sup> </label>
                                                <div class="input-group">
                                                    <input type="text" v-model="ipa.superficie" class="form-control"
                                                        placeholder="Superficie..." required>
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
                                                    <input type="number" v-model="ipa.habitant" class="form-control"
                                                        placeholder="habitant..." required>
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">
                                                            <i class="fa fa-users"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="invalid-feedback">
                                                    Nombre d'habitant requis !
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Coordonnée GPS / LONGITUDE <sup class="text-danger">*</sup></label>
                                                <div class="input-group">
                                                    <input type="number" v-model="ipa.habitant" class="form-control"
                                                        placeholder="Longitude..." required>
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">
                                                            <i class="fa fa-map-marker-alt"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="invalid-feedback">
                                                    Longitude requis !
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Coordonnée GPS / LATITUDE <sup class="text-danger">*</sup></label>
                                                <div class="input-group">
                                                    <input type="number" v-model="ipa.habitant" class="form-control"
                                                        placeholder="Latitude..." required>
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">
                                                            <i class="fa fa-map-marker-alt"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="invalid-feedback">
                                                    Nombre d'habitant requis !
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="card full-height animated fadeIn">
                                <div class="card-header">
                                    <h4 class="card-title"><i class="fa fa-user mr-0"></i> INSPECTEUR</h4>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Nom <sup class="text-danger">*</sup></label>
                                                <div class="input-group">
                                                    <input type="text" v-model="isp.nom" class="form-control"
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
                                                    <input type="email" v-model="isp.email" class="form-control"
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
                                                    <input type="text" v-model="isp.portable" class="form-control"
                                                        placeholder="N° portable..." required>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="card full-height animated fadeIn">
                                <div class="card-header">
                                    <h4 class="card-title"><i class="fa fa-cloud"></i> Climats</h4>
                                </div>
                                <div class="card-body">
                                    <div class="form-group">
                                        <label class="form-label">Sélectionnez un climat !</label>
                                        <div class="selectgroup-pills">
                                            <label class="selectgroup-item">
                                                <input type="radio" name="value" value="Tropical" class="selectgroup-input">
                                                <span class="selectgroup-button">Tropical</span>
                                            </label>
                                            <label class="selectgroup-item">
                                                <input type="radio" name="value" value="Equatorial"
                                                    class="selectgroup-input">
                                                <span class="selectgroup-button">Equatorial</span>
                                            </label>
                                            <label class="selectgroup-item">
                                                <input type="radio" name="value" value="Montagne" class="selectgroup-input">
                                                <span class="selectgroup-button">Montagne</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="card full-height animated fadeIn">
                                <div class="card-header">
                                    <h4 class="card-title"><i class="fa fa-info-circle"></i> Caractéristiques
                                        ou
                                        Spécificités</h4>
                                </div>
                                <div class="card-body">
                                    <div class="form-group">
                                        <label class="form-label">Sélectionnez une caractéristique !</label>
                                        <div class="selectgroup-pills">
                                            <label class="selectgroup-item">
                                                <input type="checkbox" name="value" value="hypographie"
                                                    class="selectgroup-input">
                                                <span class="selectgroup-button">Hydrographie dense</span>
                                            </label>
                                            <label class="selectgroup-item">
                                                <input type="checkbox" name="value" value="Equatorial"
                                                    class="selectgroup-input">
                                                <span class="selectgroup-button">Caractéristique II</span>
                                            </label>
                                            <label class="selectgroup-item">
                                                <input type="checkbox" name="value" value="Montagne"
                                                    class="selectgroup-input">
                                                <span class="selectgroup-button">Autres Caractéristiques</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div class="card-footer">
                                    <!-- Submit buttons -->
                                    <div class="wizard-action">

                                        <div class="pull-left">
                                            <button type="submit" id="btn-next" class="btn btn-next btn-primary">
                                                <i class="flaticon-next"></i>
                                                Suivant
                                            </button>
                                        </div>

                                        <div class="clearfix"></div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </form>
                <form novalidate @submit.prevent="submittedStepII" v-else id="form-ita" class="needs-validation">
                    <div class="row mt--2">

                        <div class="col-md-12">
                            <div class="card full-height animated fadeIn">
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
                                                    <input type="number" class="form-control" v-model="ita.superficie"
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
                                                        placeholder="Nombre d'habitants..." required>
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">
                                                            <i class="fa fa-users"></i>
                                                        </span>
                                                    </div>
                                                    <button v-if="index === itas.length - 1" class="btn btn-info"
                                                        @click.prevent="addIta" style="margin-left: 2px;"><i
                                                            class="flaticon-add"></i></button>
                                                    <button v-else class="btn btn-danger" @click.prevent="removeIta(index)"
                                                        style="margin-left: 2px;"><i class="fa fa-minus"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <div class="wizard-action">
                                        <div class="pull-left">
                                            <button @click="step = 1" type="button"
                                                class="btn btn-next btn-secondary btn-block"><i class="flaticon-back"></i>
                                                Précédent</button>
                                        </div>
                                        <div class="pull-right">
                                            <button type="submit" class="btn btn-next btn-success btn-block"><i
                                                    class="flaticon-check"></i>
                                                Enregistrer</button>
                                        </div>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </div>


        <!-- Global footer component -->
        <d-footer></d-footer>
        <!-- end Global footer component -->

        <!-- <div class="modal fade bd-example-modal-lg" id="modal" tabindex="-1" role="dialog"
                                                aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-lg">
                                                    <div class="modal-content">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor hic voluptates similique? Dolores
                                                        adipisci eligendi ab culpa nobis, amet porro provident! Laboriosam, voluptates magnam quidem ut
                                                        omnis explicabo officiis impedit.
                                                    </div>
                                                </div>
                                            </div> -->
</div>
</template>

<script>
import IpaService from "@/database/services/dantic/ipa.service"
import IpaItaRegMixin from "../../mixins/ipa.ita.register"
import servicesMixins from '../../mixins/services.mixins'
export default {
    name: "Ipa-Ipa-Register",
    extends: IpaItaRegMixin,
    mixins: [servicesMixins],

    data() {
        return {
            itas: [],
            ipa: {
                province: '',
                superficie: '',
                habitant: '',
                inspecteur: {},
                territoires: []
            },
            isp: {
                nom: '',
                email: '',
                portable: ''
            },
            step: 1,
        }
    },
    mounted() {
        this.addIta()
    },

    methods: {
        /* showModal() {
            $("#modal").modal()
        }, */

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

        resetForms() {
            this.ipa.province = ''
            this.ipa.habitant = ''
            this.ipa.superficie = ''
            this.ipa.inspecteur = {}
            this.ipa.territoires = []
            this.isp = {}
            this.itas = []
        },
        /*Lorsque l'on valide la premiere etape*/
        submittedStepI(event) {
            this.$validForm('form-ipa', event, (result, form) => {
                console.log("validator called");
                if (!result) {
                    this.$animatedFailedTask('btn-next')
                }
                else {
                    let province = $("#provinceSelect").val()
                    this.ipa.province = province
                    this.step = 2;
                }
            })


        },
        /*Validation de la dexieme etape*/
        submittedStepII(event) {
            let data = this.ipa;
            this.$validForm('form-ita', event, (result, form) => {
                if (result) {
                    data.territoires = this.itas;
                    data.inspecteur = this.isp;
                    IpaService.create(data, (res) => {
                        form.reset();
                        this.resetForms();
                        this.step = 1
                        IpaService.getAll((result) => console.log(result))
                        $.notify(
                            {
                                icon: "fa fa-check-double",
                                title: "Opération effectuée!",
                                message: "Nouvelle IPA créée avec succès!",
                            },
                            {
                                type: "success",
                                placement: {
                                    from: "bottom",
                                    align: "right",
                                },
                                time: 2000,
                            }
                        );
                    })
                }
            })


        }
    },

}
</script>