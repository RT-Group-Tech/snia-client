<template>
    <div class="main-panel">
        <div class="container">
            <div class="panel-header bg-success-gradient">
                <div class="page-inner py-5">
                    <div class="page-header">
                        <h4 class="page-title">Agents</h4>
                        <ul class="breadcrumbs">
                            <li class="nav-home">
                                <a href="#">
                                    <i class="flaticon-home"></i>
                                </a>
                            </li>
                            <li class="separator">
                                <i class="flaticon-right-arrow"></i>
                            </li>
                            <li class="nav-item">
                                <a href="#">Agents</a>
                            </li>
                            <li class="separator">
                                <i class="flaticon-right-arrow"></i>
                            </li>
                            <li class="nav-item">
                                <a href="#">liste des agents</a>
                            </li>
                        </ul>
                        <router-link :to="{ name: 'agent-create-route' }" class="btn btn-primary btn-sm"> <i
                                class="flaticon-add"></i>
                            Nouveau agent</router-link>
                    </div>
                </div>
            </div>
            <div class="page-inner mt--5">
                <div class="row mt--2">
                    <div class="col-md-12">
                        <div class="card full-height animated fadeInUp">
                            <div class="card-body">
                                <!-- table pour afficher les ipa & ita -->

                                <!-- end table -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Global footer component -->
        <d-footer></d-footer>
        <!-- end Global footer component -->
    </div>
</template>

<script>
export default {
    name: "Ipa-view"
}
</script>