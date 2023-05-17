<template>
    <teleport to='body'>
        <div style="width:300px;" class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="agentModalLabel"
             aria-hidden="true">
            <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable" role="document">
                <div class="modal-content">
                    <div class="modal-header bg-app-2">
                        <h5 class="modal-title text-white fw-mediumbold" id="agentModalLabel">
                            <i class="fa fa-user-plus mr-2"></i>
                            CRÉATION NOUVEAU AGENT
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" class="text-white">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <!-- section reservée pour le chargement du body du modal !-->
                        <h1>dsdksdjsk</h1>
                        <slot name="body"></slot>
                    </div>
                </div>
            </div>
        </div>
    </teleport>
</template>


<script>
    export default {
        name: "modal",
        props:{
            display:{
                type:Boolean,
                default:true
            }
        },
        watch:{
            display(newVal)
            {
                if(newVal===true)
                {
                    /**
                     * Afficher le modal.
                     */
                    $("#modal").modal('show')
                }
                else
                {
                    /**
                     * Cacher le modal.
                     */
                    $("#modal").modal('hide')
                }
            }
        },
        mounted(){

            if(this.display===true)
            {
                /**
                 * Afficher le modal.
                 */
                $("#modal").modal('show')
            }
            else
            {

                /**
                 * Cacher le modal.
                 */
                $("#modal").modal('hide')
            }
        }
    }
</script>

<style scoped>

</style>