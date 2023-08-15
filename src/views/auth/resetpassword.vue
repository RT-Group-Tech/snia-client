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
                <div class="container container-login bg-white" id="reset-box">
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
                            <pin-input v-if="hasOtpReady"></pin-input>
                            <div class="form-action mb-3">
                                <button :disabled="requestLoading" v-show="!hasOtpReady" type="submit" id="btn-request"
                                    class="btn btn-snia  btn-full btn-login mb-2">
                                    <i v-if="requestLoading" class="fa fa-spinner fa-spin mr-2"></i>
                                    <i v-else class="icon-login"></i> &nbsp;
                                    Soumettre la requête reinitialisation
                                </button>
                                <button :disabled="requestLoading" v-show="hasOtpReady" type="submit" id="btn-request"
                                    class="btn btn-snia  btn-full btn-login mb-2">
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
export default {
    name: "ResetPass",

    mounted() {
        this.$initBsTooltip();
    },

    data() {
        return {
            requestLoading: false,
            hasOtpReady: false,
            form: {
                email: ''
            }
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
                    this.hasOtpReady = true;
                    console.log("otp is ready !");
                    if (!this.hasOtpReady) {
                        this.$animatedFailedTask("reset-box");
                    }
                }
            });
        }
    }
}
</script>