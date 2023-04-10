<template>
    <div class="main-panel">
        <div class="container">
            <div class="panel-header">
                <div class=" page-inner py-5">
                    <div class="page-header">
                        <h4 class="page-title">Données collectées</h4>
                        <ul class="breadcrumbs">
                            <li class="nav-home">
                                <router-link :to="{ name: 'dashboard-route' }">
                                    <i class="flaticon-home"></i>
                                </router-link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            <div class="page-inner mt--5">

            </div>
        </div>

        <!-- Global footer component -->
        <d-footer></d-footer>
        <!-- end Global footer component -->

    </div>
</template>

<script>
export default {
    name: "Data-Collected"
}
</script>