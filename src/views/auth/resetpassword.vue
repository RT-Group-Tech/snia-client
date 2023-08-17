<template>
    <div class="login bubble-shadow">
        <div class="wrapper wrapper-login bg-app-gradient wrapper-login-full p-0 ">
            <div class="login-aside w-50 d-flex flex-column align-items-center justify-content-center text-center">
                <img src="assets/img/armoirie_rdc.png" alt="" class="img-fluid">
                <h1 class="fw-bold display-4 text-white mb-2 mt-2 text-uppercase"
                    style="font-family: Arial, Helvetica, sans-serif;">
                    Ministère de l'agriculture
                </h1>

                <div class="d-flex align-content-center justify-content-center align-items-center w-25">
                    <div class="flex-fill" style="background-color: #00aeef; height: 4px;"></div>
                    <div class="flex-fill" style="background-color: #fff200; height: 4px;"></div>
                    <div class="flex-fill" style="background-color: #ed1c24; height: 4px;"></div>
                </div>

            </div>
            <div class="login-aside w-50 d-flex flex-column align-items-center justify-content-center">
                <!-- <h2 class="text-white fw-extrabold text-uppercase"><i class="icon-lock mr-1"></i> Authentification</h2> -->
                <div class="container container-login bg-white" v-if="showUpdatePassFields" id="reset-box">
                    <h3 class="text-center mb-3 title fadeIn">Veuillez réinitialiser votre mot de passe utilisateur !</h3>

                    <form class="needs-validation" id="form-request" @submit.prevent="handleRequestUpdate" novalidate>
                        <div class="login-form">
                            <div class="form-group form-floating-label">
                                <input id="npass" data-toggle="tooltip" placeholder="Saisir le nouveau mot de passe..."
                                    v-model="form2.new_pass" title="Saisir le nouveau mot de passe..." name="npass"
                                    type="password" class=" form-control input-border-bottom" data-placement="right"
                                    required>
                                <label for="email" class="placeholder text-color-snia">Nouveau mot de passe</label>
                                <div class="invalid-feedback">
                                    Veuillez entrer le nouveau mot de passe !
                                </div>
                            </div>

                            <div class="form-group form-floating-label">
                                <input id="confirm" data-toggle="tooltip" v-model="form2.confirm"
                                    placeholder="Confirmer le nouveau mot de passe ..."
                                    title="Confirmation nouveau mot de passe ..." name="confirm" type="password"
                                    class=" form-control input-border-bottom" data-placement="right"
                                    :required="form2.new_pass !== form2.confirm || form2.confirm !== ''">
                                <label for="email" class="placeholder text-color-snia">Confirmation Nouveau mot de
                                    passe</label>
                                <div class="invalid-feedback">
                                    Veuillez retaper le nouveau mot de passe !
                                </div>
                            </div>

                            <div class="form-action mb-3">
                                <button :disabled="requestLoading" type="submit" id="btn-request"
                                    class="btn btn-snia  btn-full btn-login mb-2">
                                    <i v-if="requestLoading" class="fa fa-spinner fa-spin mr-2"></i>
                                    <i v-else class="icon-login"></i> &nbsp;
                                    Soumettre la modification du nouveau mot de passe
                                </button>

                                <a href="javascript:void(0)" @click="$router.go(-1)" class="link fw-mediumbold">Retour
                                    à la boite de connexion</a>
                            </div>
                        </div>
                    </form>
                </div>
                <div v-else class="container container-login bg-white" id="reset-box">
                    <h3 class="text-center mb-3 title fadeIn" v-show="!hasOtpReady">Votre mot de passe est perdu ? Veuillez
                        envoyer
                        une requête de reinitialisation de mot de passe !</h3>
                    <h3 class="text-center mb-3 title fadeIn" v-show="hasOtpReady">Veuillez entrer le code OTP reussi à
                        votre adresse email <small class="text-primary">{{ form.email.substring(0, 5)
                        }}.....{{ form.email.slice(-10) }}</small> </h3>
                    <form class="needs-validation" id="form-request" @submit.prevent="handleRequestOtp" novalidate>
                        <div class="login-form">
                            <div v-if="!hasOtpReady" class="form-group form-floating-label">
                                <input id="username" v-model="form.email" data-toggle="tooltip"
                                    title="Saisir votre adresse email..." name="email" type="email"
                                    class=" form-control input-border-bottom" data-placement="right" required>
                                <label for="email" class="placeholder text-color-snia">Adresse email</label>
                                <div class="invalid-feedback">
                                    votre adresse email est requis !
                                </div>
                            </div>
                            <pin-input v-if="hasOtpReady" @onComplete="checkOtp"></pin-input>
                            <div class="form-action mb-3">
                                <button :disabled="requestLoading" v-show="!hasOtpReady" type="submit" id="btn-request"
                                    class="btn btn-snia  btn-full btn-login mb-2">
                                    <i v-if="requestLoading" class="fa fa-spinner fa-spin mr-2"></i>
                                    <i v-else class="icon-login"></i> &nbsp;
                                    Soumettre la requête reinitialisation
                                </button>
                                <lottie-animation v-if="requestOtpLoading" :json="json" lottie-size="70"></lottie-animation>
                                <button v-else :disabled="requestLoading" v-show="hasOtpReady" type="submit"
                                    id="btn-request" class="btn btn-snia  btn-full btn-login mb-2">
                                    <i v-if="requestLoading" class="fa fa-spinner fa-spin mr-2"></i>
                                    <i v-else class="icon-refresh"></i> &nbsp;
                                    Renvoyer le code
                                </button>

                                <a href="javascript:void(0)" @click="$router.go(-1)" class="link fw-mediumbold">Retour
                                    à la boite de connexion</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped src="@/assets/css/atlantis.css"></style>

<script>
import Api from "@/api"
import jsonLoader from "@/assets/json/loading-1.json";
export default {
    name: "ResetPass",

    mounted() {
        this.$initBsTooltip();
    },

    data() {
        return {
            requestLoading: false,
            requestOtpLoading: false,
            hasOtpReady: false,
            showUpdatePassFields: false,
            agent: null,
            form: {
                email: ''
            },
            form2: {
                new_pass: '',
                confirm: ''
            },
            json: jsonLoader
        }
    },
    methods: {
        handleRequestOtp(event) {
            this.$validForm("form-request", event, (result, form) => {
                if (!result) {
                    /*create a simple animation shake when task is failed */
                    this.$animatedFailedTask("btn-request");
                    /*end shake animation*/
                } else {
                    this.requestLoading = true;
                    Api.handleResetPass(this.form).then((res) => {
                        this.requestLoading = false;
                        if (res !== null) {
                            this.hasOtpReady = true;
                        }
                        else {
                            this.$animatedFailedTask("login-box");
                            $.notify(
                                {
                                    icon: "fas fa-info",
                                    title: "Opération echoué!",
                                    message: "utilisateur non reconnu !",
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
                        }
                    }).catch((e) => console.log('error request:::', e))
                }
            });
        },

        checkOtp(otp) {
            this.requestOtpLoading = true;
            let udata = {
                agent_id: this.agent.agent_id,
                otp: otp
            }
            Api.checkOtp(udata).then((res) => {
                this.requestOtpLoading = false;
                if (res !== null) {
                    this.showUpdatePassFields = true;
                    this.hasOtpReady = false;
                }
                else {
                    $.notify(
                        {
                            icon: "fas fa-info",
                            title: "Opération echoué!",
                            message: "Veuillez entrer un code valide !",
                        },
                        {
                            type: "danger",
                            placement: {
                                from: "bottom",
                                align: "right",
                            },
                            time: 3000,
                        }
                    );
                }

            });
            console.log("handle otp ::: ", otp);
        },

        handleRequestUpdate(event) {
            this.$validForm("form-request", event, (result, form) => {
                if (!result) {
                    /*create a simple animation shake when task is failed */
                    this.$animatedFailedTask("btn-request");
                    /*end shake animation*/
                } else {
                    this.requestLoading = true;
                    let udata = {
                        agent_id: agent.agent_id,
                        new_pass: this.form2.new_pass
                    }
                    Api.updatePassword(udata).then((res) => {
                        if (res != null) {
                            Swal({
                                icon: 'success',
                                title: 'Opération reussie',
                                text: 'La réinitialisation du mot de passe effectué, veuillez désormais utiliser le nouveau mot de passe pour vous connecter dans système !',
                                timer: 4000,
                                showConfirmButton: false,
                                showCancelButton: false,
                            });
                        }
                    }).catch((e) => {
                        console.log("error request:::", e);
                    })
                }
            });
        },
    }
}
</script>