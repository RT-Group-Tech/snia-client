<template>
    <div class="main-panel">
        <div class="container">
            <div class="page-inner">
                <h4 class="page-title">Profil utilisateur</h4>
                <div class="row">
                    <div class="col-md-4">
                        <div class="card card-profile full-height">
                            <div class="card-header card-primary">
                                <div class="profile-picture">
                                    <div class="avatar avatar-xl">
                                        <img src="assets/img/picture_placeholder.png" alt="..."
                                            class="avatar-img rounded-circle">
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="user-profile text-center">
                                    <div class="name">{{ user.nom_complet }}</div>
                                    <div class="job">{{ user.fonction }} | {{ user.fonction_publique_status }}</div>
                                    <div class="desc"> <i class="fas fa-circle text-success" style="font-size: 6px;"></i> {{
                                        user.access.access }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="card card-with-nav">
                            <div class="card-header">
                                <div class="row row-nav-line">
                                    <ul class="nav nav-tabs nav-line nav-color-primary w-100 pl-3" role="tablist">
                                        <li class="nav-item"> <a class="nav-link"
                                                :class="$route.params.task === 'view' ? 'active show' : ''"
                                                data-toggle="tab" href="#profile" role="tab"
                                                aria-selected="false">Profil</a> </li>
                                        <li class="nav-item"> <a class="nav-link"
                                                :class="$route.params.task === 'config' ? 'active show' : ''"
                                                data-toggle="tab" href="#settings" role="tab"
                                                aria-selected="false">Paramètres du compte</a> </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="tab-content mt-2 mb-3">
                                    <div class="tab-pane fade" :class="$route.params.task === 'view' ? 'show active' : ''"
                                        id="profile" role="tabpanel" aria-labelledby="pills-home-tab">
                                        <div class="row mt-3">
                                            <div class="col-md-6">
                                                <InputWidget label="Nom complet" placeholder="Nom complet" :val="user.nom_complet" input-name="nom_complet" :agent-id="user.agent_id"></InputWidget>
                                            </div>
                                            <div class="col-md-6">

                                              <InputWidget label="Email" placeholder="email" :val="user.email" input-name="email" :agent-id="user.agent_id"></InputWidget>
                                            </div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-md-4">
                                                <div class="form-group form-group-default">
                                                    <label>Date de naissance</label>
                                                    <input type="text" disabled class="form-control" id="datepicker"
                                                        name="datepicker" :value="user.date_naissance"
                                                        placeholder="Birth Date">
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group form-group-default">
                                                    <label>Genre</label>
                                                    <input type="text" disabled class="form-control" id="datepicker"
                                                        name="datepicker" :value="user.sexe" placeholder="Birth Date">
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                              <InputWidget label="Téléphone" placeholder="téléphone" :val="user.telephone" input-name="telephone" :agent-id="user.agent_id"></InputWidget>
                                            </div>
                                        </div>
                                        <div class="row mt-3">

                                            <div class="col-md-6">
                                              <InputWidget label="Fonction" placeholder="fonction" :val="user.fonction" input-name="fonction" :agent-id="user.agent_id"></InputWidget>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group form-group-default">
                                                    <label>Status fonction publique</label>
                                                    <input disabled type="text" class="form-control"
                                                        :value="user.fonction_publique_status" name="address"
                                                        placeholder="Grade">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group form-group-default">
                                                    <label>Grade</label>
                                                    <input disabled type="text" class="form-control" :value="user.grade"
                                                        name="address" placeholder="Grade">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group form-group-default">
                                                    <label>Accès</label>
                                                    <input disabled type="text" class="form-control"
                                                        :value="user.access.access" name="address" placeholder="Grade">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade h-100"
                                        :class="$route.params.task === 'config' ? 'show active' : ''" id="settings"
                                        role="tabpanel" aria-labelledby="pills-profile-tab">


                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group form-group-default">
                                                    <label>Nom complet</label>
                                                    <input type="text" disabled class="form-control" name="name"
                                                        placeholder="Adresse email" :value="user.nom_complet">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group form-group-default">
                                                    <label>Adresse email</label>
                                                    <input type="text" disabled :value="user.email" class="form-control"
                                                        name="name" placeholder="Email">
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <form id="formRequest" class="needs-validation"
                                                    @submit.prevent="submitReset" novalidate>

                                                    <div class="form-group form-group-default">
                                                        <label>Ancien mot de passe <sup class="text-danger">*</sup></label>
                                                        <input type="text" class="form-control" name="name"
                                                            placeholder="Entrez votre ancien mot de passe..."
                                                            v-model="userData.current_pass" required>
                                                        <div class="invalid-feedback">
                                                            Entrez votre ancien mot de passe !
                                                        </div>
                                                    </div>
                                                    <div class="form-group form-group-default">
                                                        <label>Nouveau mot de passe <sup class="text-danger">*</sup></label>
                                                        <input type="text" class="form-control" name="name"
                                                            placeholder="Saisir un nouveau mot de passe..."
                                                            v-model="userData.new_pass" required>
                                                        <div class="invalid-feedback">
                                                            Entrez votre nouveau mot de passe !
                                                        </div>
                                                    </div>
                                                    <div class="form-group form-group-default">
                                                        <label>Confirmation nouveau mot de passe <sup
                                                                class="text-danger">*</sup></label>
                                                        <input type="text" class="form-control" name="name"
                                                            placeholder="Retapez le nouveau mot de passe..."
                                                            v-model="userData.confirm"
                                                            :required="userData.new_pass !== userData.confirm">
                                                        <div class="invalid-feedback">
                                                            Confirmez votre nouveau mot de passe !
                                                        </div>
                                                    </div>

                                                    <button type="submit" :disabled="requestLoading"
                                                        class="btn btn-primary btn-block" id="btnRequest">
                                                        <i v-if="requestLoading" class="fa fa-spinner fa-spin mr-2"></i>
                                                        <i v-else class="icon-pencil"></i>
                                                        Soumettre les
                                                        modifications</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import GlobalApi from '@/api';
import InputWidget from "@/views/public/widgets/InputWidget";
export default {
    name: 'UserProfile',
    components:{
      InputWidget
    },
    data() {
        return {
            userData: {
                current_pass: '',
                new_pass: '',
                confirm: '',
                agent_id: ''
            },
            requestLoading: false
        }
    },

    methods: {
        submitReset(event) {
            this.$validForm("formRequest", event, (result, form) => {
                if (!result) {
                    /*create a simple animation shake when task is failed */
                    this.$animatedFailedTask("btnRequest");
                    /*end shake animation*/
                } else {

                    /**
                     * Login request
                     */
                    this.requestLoading = true;
                    this.userData.agent_id = this.user.agent_id;
                    GlobalApi.resetPassword(this.userData)
                        .then((result) => {
                            this.requestLoading = false;
                            if (result != null) {
                                Swal({
                                    title: 'Opération effectuée !',
                                    text: 'Le nouveau mot de passe a été mis à jour avec succès !',
                                    icon: 'success',
                                    timer: 2000,
                                    showConfirmButton: false,
                                    showCancelButton: false,
                                });
                                this.userData.current_pass = '';
                                this.userData.new_pass = '';
                                this.userData.confirm = '';
                            }
                            else {
                                Swal({
                                    title: 'Echec de l\'opération !',
                                    text: 'Ancien mot de passe saisi est erroné !',
                                    icon: 'warning',
                                    timer: 2000,
                                    showConfirmButton: false,
                                    showCancelButton: false,
                                });
                            }
                        })
                        .catch((e) => {
                            console.log(e);
                            this.requestLoading = false;
                            $.notify(
                                {
                                    icon: "fas fa-info",
                                    title: "Opération echoué!",
                                    message:
                                        "Une erreur est survenue lors de traitement des informations de l'utilisateur !",
                                },
                                {
                                    type: "danger",
                                    placement: {
                                        from: "bottom",
                                        align: "right",
                                    },
                                    time: 5000,
                                }
                            );
                        });
                }
            });
        }
    },


    computed: {
        /**...mapGetters({
            //user: "auth/GET_USER"
        })*/
      user:function(){
          var agent=this.$store.getters.GET_USERPROFILE;
          if(agent===undefined)
          {
            //TODO: Get user.
          }

          return agent;
      }
    },
  mounted() {

  }
}
</script>