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
                                                <div class="form-group form-group-default">
                                                    <label>Nom complet</label>
                                                    <input type="text" disabled class="form-control" name="name"
                                                        placeholder="Name" :value="user.nom_complet">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group form-group-default">
                                                    <label>Adresse Email</label>
                                                    <input type="email" disabled class="form-control" name="email"
                                                        placeholder="Name" :value="user.email">
                                                </div>
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
                                                <div class="form-group form-group-default">
                                                    <label>Téléphone</label>
                                                    <input type="text" class="form-control" disabled :value="user.telephone"
                                                        name="phone" placeholder="Phone">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-3">

                                            <div class="col-md-6">
                                                <div class="form-group form-group-default">
                                                    <label>Fonction</label>
                                                    <input disabled type="text" class="form-control" :value="user.fonction"
                                                        name="address" placeholder="Grade">
                                                </div>
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

                                        <div class="row d-flex flex-column justify-content-center align-content-center">
                                            <div class="col-md-12">
                                                <div class="form-group form-group-default">
                                                    <label>Nom complet</label>
                                                    <input type="text" disabled class="form-control" name="name"
                                                        placeholder="Adresse email" :value="user.nom_complet">
                                                </div>
                                                <div class="form-group form-group-default">
                                                    <label>Adresse email</label>
                                                    <input type="text" disabled :value="user.email" class="form-control"
                                                        name="name" placeholder="Email">
                                                </div>

                                                <div class="form-group form-group-default">
                                                    <label>Ancien mot de passe <sup class="text-danger">*</sup></label>
                                                    <input type="text" class="form-control" name="name"
                                                        placeholder="Entrez votre ancien mot de passe...">
                                                </div>
                                                <div class="form-group form-group-default">
                                                    <label>Nouveau mot de passe <sup class="text-danger">*</sup></label>
                                                    <input type="text" class="form-control" name="name"
                                                        placeholder="Saisir un nouveau mot de passe...">
                                                </div>

                                                <a href="#" class="btn btn-primary btn-block"> <i class="icon-pencil"></i>
                                                    Soumettre les
                                                    modifications</a>
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
export default {
    name: 'UserProfile',


    computed: {
        ...mapGetters({
            user: "auth/GET_USER"
        })
    },
}
</script>