<template>
    <div class="page-content mail-content">
        <div class="inbox-head d-lg-flex d-block">
            <h3><i class="flaticon-interface-6 mr-1"></i>Liste des Formulaires </h3>
            <form action="#" class="ml-auto">
                <div class="input-group">
                    <input type="text" placeholder="Search Email" class="form-control">
                    <div class="input-group-append">
                        <span class="input-group-text">
                            <i class="fa fa-search search-icon"></i>
                        </span>
                    </div>
                </div>
            </form>
        </div>
        <div class="inbox-body">
            <div class="email-list">
                <div class="email-list-item" v-for="(formulaire, i) in formulaires" :key="i">
                    <div class="email-list-detail"><span class="date float-right"></span><span class="date float-right">
                            <button class="btn btn-info btn-sm"><i class="fas fa-external-link-alt"></i></button></span>
                        <span class="from"><i class="flaticon-interface-6 text-info mr-1"></i> {{ formulaire.titre }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'Formulaires-View-Page',

    async mounted() {
        await this.$store.dispatch('dantic/voirFormulaires')
    },

    computed: {
        formulaires() {
            return this.$store.getters['dantic/GET_FORMULAIRES']
        }
    },
}
</script>