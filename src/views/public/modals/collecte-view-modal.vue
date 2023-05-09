<template>
    <div class="modal fade" id="collecte-view-modal" tabindex="-1" role="dialog" aria-labelledby="itaModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="card-title fw-extrabold">
                        <i class="fas fa-folder-open mr-1"></i>
                        {{ collecte.titre }}
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" class="text-white">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-9">
                            <h6 class="card-title fw-extrabold"><span class="fa fa-calendar-check"></span> Collecte du  {{collecteView.date_enregistrement}}</h6>
                        </div>
                        <div class="col-md-3">
                            <select name="" id="" class="form-control" >
                                <option value="" v-for="d in collecte.collectes" :key="d" @click.prevent="setCollecteView(d)">{{d.date_enregistrement}}</option>
                            </select>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-md-6" v-for="(data, i) in collecteView.data" :key="i">
                            <div class="form-group form-group-default">
                                <label class="text-info fw-extrabold">{{ data.input }}</label>
                                <div class="input-group">
                                    <input type="text" class="form-control fw-extrabold text-dark" name="name"
                                           placeholder="Name" :value="data.valeur" disabled>
                                    <div class="input-group-append p-md-0 bg-transparent">
                                        <span class="input-group-text fa fa-ban" @click.prevent="reportData" style="cursor:pointer;"> </span>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button class="btn btn-success"> <i class="icon-printer mr-1"></i> Imprimer</button>
                    <button class="btn btn-danger" data-dismiss="modal">Fermer</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "CollecteViewModal",
    data(){
        return {
            collecteView:{}
        }
    },
    props: {
        collecte: {
            type: Object,
            default: () => {

            },
        }
    },
    computed:{

    },
    methods:{
        reportData()
        {
            this.$swal({
                text:"Voulez-vous signaler cette donnée?",
                showConfirmButton:true,
                showCancelButton:true,
                confirmButtonText:"Oui",
                cancelButtonText:"Non",
                confirmButtonColor:'green',
                cancelButtonColor:'red'
            }).then((result)=>{

                if(result.isConfirmed)
                {
                    /**
                     * Signaler cette donnée.
                     */
                }

            });
        },
        setCollecteView(collecteData)
        {
            this.collecteView=collecteData;
        }
    },
    mounted(){

    },
    watch:{
        collecte(newValue)
        {
            this.collecteView=newValue.collectes[0];
        }
    }
}

</script>

<style></style>