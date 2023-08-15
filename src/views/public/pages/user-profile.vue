<template>
    <div class="main-panel">
        <div class="container">
            <div class="page-inner">
                <h4 class="page-title">User Profile</h4>
                <div class="row">
                    <div class="col-md-4">
                        <div class="card card-profile">
                            <div class="card-header">
                                <div class="profile-picture">
                                    <div class="avatar avatar-xl">
                                        <img src="assets/img/picture_placeholder.png" alt="..."
                                            class="avatar-img rounded-circle">
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="user-profile text-center">
                                    <div class="name">Gaston Delimond</div>
                                    <div class="job">Agent de terrain</div>
                                    <div class="desc">A man who hates loneliness</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="card card-with-nav">
                            <div class="card-header">
                                <div class="row row-nav-line">
                                    <ul class="nav nav-tabs nav-line nav-color-primary w-100 pl-3" role="tablist">

                                        <li class="nav-item"> <a class="nav-link active show" data-toggle="tab"
                                                href="#profile" role="tab" aria-selected="false">Profil</a> </li>
                                        <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#settings"
                                                role="tab" aria-selected="false">Paramètre</a> </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="row mt-3">
                                    <div class="col-md-6">
                                        <div class="form-group form-group-default">
                                            <label>Nom complet</label>
                                            <input type="text" class="form-control" name="name" placeholder="Name"
                                                value="Gaston Delimond Kayembe">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group form-group-default">
                                            <label>Adresse Email</label>
                                            <input type="email" class="form-control" name="email" placeholder="Name"
                                                value="hello@example.com">
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-4">
                                        <div class="form-group form-group-default">
                                            <label>Date de naissance</label>
                                            <input type="text" class="form-control" id="datepicker" name="datepicker"
                                                value="03/21/1998" placeholder="Birth Date">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group form-group-default">
                                            <label>Genre</label>
                                            <select class="form-control" id="gender">
                                                <option>Masculin</option>
                                                <option>Féminin</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group form-group-default">
                                            <label>Téléphone</label>
                                            <input type="text" class="form-control" value="+62008765678" name="phone"
                                                placeholder="Phone">
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-12">
                                        <div class="form-group form-group-default">
                                            <label>Adresse</label>
                                            <input type="text" class="form-control"
                                                value="st Merdeka Putih, Jakarta Indonesia" name="address"
                                                placeholder="Address">
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3 mb-1">
                                    <div class="col-md-12">
                                        <div class="form-group form-group-default">
                                            <label>A propos</label>
                                            <textarea class="form-control" name="about" placeholder="About Me"
                                                rows="3">A man who hates loneliness</textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-right mt-3 mb-3">
                                    <button class="btn btn-success mr-1">Mettre à jour</button>
                                    <button class="btn btn-danger">Annuler</button>
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
export default {
    name: 'UserProfile'
}
</script>