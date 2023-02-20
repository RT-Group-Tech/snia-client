<template>
    <div class="main-panel">
        <div class="container">
            <div class="panel-header bg-primary-gradient">
                <div class="page-inner py-5 curves-shadow">
                    <div class="d-flex align-items-left align-items-md-center flex-column flex-md-row">
                        <div>
                            <h2 class="text-white pb-2 fw-bold">ENREGISTREMENT AGENT</h2>
                            <h5 class="text-white op-7 mb-2 fw-bold">Veuillez remplir les informations concernant
                                l'agent.
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page-inner mt--5">
                <form id="form-agent" enctype="multipart/form-data" @submit.prevent="createAgent"
                    class="needs-validation" novalidate>
                    <div class="row mt--2">
                        <!-- Infos personnelles agent -->
                        <div class="col-md-6">
                            <div class="card full-height animated fadeIn">
                                <div class="card-header">
                                    <h4 class="card-title"><i class="fa fa-user"></i> Informations personnelles
                                    </h4>
                                </div>
                                <div class="card-body">
                                    <div class="form-group">
                                        <label>Nom & Postnom <sup class="text-danger">*</sup> </label>
                                        <div class="input-group">
                                            <input type="text" v-model="formAgent.nom" class="form-control"
                                                placeholder="nom & postnom..." required>
                                            <div class="input-group-append">
                                                <span class="input-group-text">
                                                    <i class="flaticon-user"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Prenom <sup class="text-danger">*</sup> </label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" v-model="formAgent.prenom"
                                                placeholder="prenom..." required>
                                            <div class="input-group-append">
                                                <span class="input-group-text">
                                                    <i class="flaticon-user"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Picture :</label>
                                        <div class="input-file input-file-image">
                                            <img class="img-upload-preview img-circle img-fluid" style="height:100px;"
                                                :src="agentImg !== '' ? agentImg : 'assets/img/picture_placeholder.png'"
                                                alt="photo">
                                            <input @change="upload" type="file" ref="agentFile"
                                                class="form-control form-control-file" id="uploadImg" name="uploadImg"
                                                accept="image/*">
                                            <label for="uploadImg" class=" label-input-file btn btn-secondary">Charger
                                                une photo</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End infos personnelles  -->

                        <!--  Infos compte utilisateur-->
                        <div class="col-md-6">
                            <div class="card full-height animated fadeIn">
                                <div class="card-header">
                                    <h4 class="card-title"><i class="fa fa-user-circle"></i> Informations liées au
                                        compte agent</h4>
                                </div>
                                <div class="card-body">
                                    <div class="form-group">
                                        <label>Email <sup class="text-danger">*</sup> </label>
                                        <div class="input-group">
                                            <input type="email" v-model="formAgent.email" class="form-control"
                                                placeholder="Adresse e-mail..." required>
                                            <div class="input-group-append">
                                                <span class="input-group-text">
                                                    <i class="flaticon-envelope-1"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Téléphone <sup class="text-danger">*</sup> </label>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">
                                                    +243
                                                </span>
                                            </div>
                                            <input type="text" v-model="formAgent.telephone" class="form-control"
                                                placeholder="Téléphone..." required>
                                            <div class="input-group-append">
                                                <span class="input-group-text">
                                                    <i class="fa fa-phone"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Mot de passe <sup class="text-danger">*</sup> </label>
                                        <div class="input-group">
                                            <input type="password" v-model="formAgent.pass" class="form-control"
                                                placeholder="Mot de passe..." required>
                                            <div class="input-group-append">
                                                <span class="input-group-text">
                                                    <i class="flaticon-lock"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label>Confirmation mot de passe <sup class="text-danger">*</sup> </label>
                                        <div class="input-group">
                                            <input type="password" class="form-control" v-model="confirm"
                                                placeholder="Confirmation mot de passe..." required>
                                            <div class="input-group-append">
                                                <span class="input-group-text">
                                                    <i class="flaticon-lock-1"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <div class="wizard-action">
                                        <div class="pull-left ">
                                            <button type="submit" class="btn btn-next btn-success mx-2"><i
                                                    class="flaticon-check"></i>
                                                Enregistrer</button>
                                            <button type="button" class="btn btn-next btn-dark"><i
                                                    class="flaticon-close"></i>
                                                Annuler</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End infos compte utilisateur -->

                        <div class="col-md-12" style="display:none;">
                            <div class="card full-height animated fadeInUp">
                                <div class="card-header">
                                    <h4 class="card-title"><i class="fa fa-map-signs mr-0"></i> Adresse</h4>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Territoire<sup class="text-danger">*</sup></label>
                                                <div class="select2-input">
                                                    <select id="territoireSelect" name="basic" class="form-control">
                                                        <option value="">&nbsp;</option>
                                                        <option value="Dibaya">Dibaya</option>
                                                        <option value="Demba">Demba</option>
                                                        <option value="Idiofa">Idiofa</option>
                                                        <option value="Dibelenge">Dibelenge</option>
                                                    </select>
                                                </div>
                                                <div class="invalid-feedback">
                                                    Selectionnez une province !
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Adresse <sup class="text-danger">*</sup> </label>
                                                <div class="input-group">
                                                    <input type="text" v-model="formAgent.adresse" class="form-control"
                                                        placeholder="Adresse...">
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">
                                                            <i class="fa fa-map-signs"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <div class="wizard-action">
                                        <div class="pull-left ">
                                            <button type="submit" id="btn-submit"
                                                class="btn btn-next btn-success mx-2"><i class="flaticon-check"></i>
                                                Enregistrer</button>
                                            <button type="button" class="btn btn-next btn-dark"><i
                                                    class="flaticon-close"></i>
                                                Annuler</button>
                                        </div>
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
    </div>
</template>

<script>
import "@/assets/vendor/select2/select2.full.min.js";
import AgentRegMixin from "../../mixins/agent-register"
import servicesMixins from '../../mixins/services.mixins';
export default {
    name: 'Agent-register',
    extends: AgentRegMixin,
    mixins: [servicesMixins],
    data() {
        return {
            agentImg: ''
        }
    },

    mounted() {
        $("#territoireSelect").select2({
            theme: "bootstrap",
        });
    },
}
</script>