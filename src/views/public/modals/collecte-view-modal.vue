<template>
    <bs-modal id="collecte-view-modal" size="modal-xl" :title="`Collècte du ${collecte.date_enregistrement}`">
        <template #body-content>
            <!-- <div class="row">
                <div class="col-md-9">
                    <h6 class="card-title fw-extrabold"><span class="fa fa-calendar-check"></span> Collecte du
                        {{ collecteView.date_enregistrement }}</h6>
                </div>
                <div class="col-md-3">
                    <select class="form-control" v-model="collecteView">
                        <option v-for="d in collecte.collectes" :key="d" :value="d">{{ d.date_enregistrement }}
                        </option>
                    </select>
                </div>
            </div>
            <hr> -->
            <div class="row" v-if="collecte.collecte_status==='pending'">
                <div class="col-md-12">
                  <button @click.prevent="validateData(false,collecte.collecte_id)" class="btn pull-right"><i class="icon-dislike"></i> Rejeter</button>
                  <button @click.prevent="validateData(true,collecte.collecte_id)" class="btn pull-right" style=" margin-right: 5px;"> <i class="icon-like mr-1"></i> Approuver</button>
                </div>
            </div>
          <hr>
            <div class="row">
                <div class="col-md-6" v-for="(data, i) in collecte.data" :key="i">
                    <div class="form-group form-group-default">
                        <label class="text-info fw-extrabold">{{ data.input }}</label>
                        <div class="input-group">
                            <input type="text" class="form-control fw-extrabold text-dark" name="name" placeholder="Name"
                                :value="data.valeur" disabled>
                            <div class="input-group-append p-md-0 bg-transparent">
                                <span class="input-group-text fa fa-ban" @click.prevent="reportData(data)"
                                    style="cursor:pointer;"> </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template #footer-content>
            <button class="btn btn-success"> <i class="icon-printer mr-1"></i> Imprimer</button>
            <button class="btn btn-danger" data-dismiss="modal">Fermer</button>
        </template>
    </bs-modal>
</template>

<script>
import Api from '@/api'

export default {
    name: "CollecteViewModal",
    props: {
        collecte: {
            type: Object,
            default: () => { },
        }
    },
    methods: {
        reportData(data) {
            console.log(JSON.stringify(data));
            Swal.fire({
                title: 'Signaler & corriger les données',
                text: 'Veuillez signaler et corriger cette donnée !',
                input: 'text',
                inputAttributes: {
                    autocapitalize: 'off'
                },
                showCancelButton: true,
                cancelButtonText: 'Annuler',
                confirmButtonText: 'Confirmer & soummettre',
                showLoaderOnConfirm: true,
                allowOutsideClick: () => !Swal.isLoading()
            }).then((result) => {
                if (result.isConfirmed) {
                    let form = {
                        collecte_detail_id: data.formulaire_input_id,
                        correction: result.value,
                    }
                    Api.signalerDonnee(form).then((res) => {
                        if (res !== null) {
                            this.$closeBsModal('collecte-view-modal');
                            Swal({
                                icon: "success",
                                text: "La correction a été effectué !",
                                timer: 2000,
                                showCancelButton: false,
                                showConfirmButton: false,
                            });
                        }
                    });

                }
            })
        },
        setCollecteView(collecteData) {
            this.collecteView = collecteData;
        },
        validateData(validate,collecteId)
        {
          var text="approbation";
          var validation=0;
          if(validate)
          {
            /**
             * Approuver.
             */
            text="approbation";
            validation=1;
          }
          else
          {
            /**
             * Rejeter.
             */
            text="rejet";
            validation=0;
          }

          this.$swal(
              {
                title:"Etes-vous sur de votre "+text+"?",
                showCancelButton:true,
                cancelButtonText:"Annuler",
                confirmButtonText:"Continuer"
              }
          ).then((res)=>{
            console.log(res);
            if(res.isConfirmed)
            {
              /**
               * Poursuivre.
               */
                var form=new FormData();
                form.append("validation",validation);
                form.append("collecte_id",collecteId);

                Api.validateCollecte(form,(result)=>{

            });
                $("#collecte-view-modal").modal('hide');
            }
          });
        }
    },
    mounted() {

    },
    /*  watch: {
         collecte(newValue) {
             this.collecteView = newValue.collectes[0];
         }
     } */
}

</script>

<style></style>