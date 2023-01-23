<template>
    <div class="login">
        <div class="wrapper wrapper-login">
            <div class="container container-login animated fadeIn">
                <h3 class="text-center"><img src="assets/img/logo_snia.png" class="img-login-snia" alt="SNIA"></h3>
                <form class="needs-validation" id="form-login" @submit.prevent="loggedIn" novalidate>
                    <div class="login-form">
                        <div class="form-group form-floating-label">
                            <input id="username" name="username" type="text" class=" form-control input-border-bottom"
                                required>
                            <label for="username" class="placeholder text-color-snia">Identifiant</label>
                            <div class="invalid-feedback">
                                votre idantifiant est requis !
                            </div>
                        </div>
                        <div class="form-group form-floating-label">
                            <input id="password" name="password" :type="inputType"
                                class="form-control input-border-bottom" required>
                            <label for="password" class="placeholder text-color-snia">Mot de passe</label>
                            <div class="show-password" @click="toggleVisibility">
                                <i class="icon-eye"></i>
                            </div>
                            <div class="invalid-feedback">
                                mot de passe requis pour se connecter !
                            </div>
                        </div>
                        <div class=" row form-sub m-0">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="rememberme">
                                <label class="text-color-snia custom-control-label " for="rememberme">Souvenir de
                                    moi</label>
                            </div>

                            <a href="#" class="link  float-right ">Mot de passe perdu?</a>
                        </div>
                        <div class="form-action mb-3">
                            <button type="submit" class="btn btn-snia  btn-full btn-login">
                                <i class="icon-login"></i> &nbsp;
                                Connexion</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import LoginMixin from "@/mixins/auth/login"
export default {
    name: "Login",
    extends: LoginMixin
}
</script>