<template>
    <div class="main-panel">
        <div class="container">
            <div class="panel-header">
                <div class=" page-inner py-5">
                    <div class="page-header">
                        <h4 class="page-title"> Inspection Territorial Agricole </h4>
                        <ul class="breadcrumbs">
                            <li class="nav-home">
                                <router-link :to="{ name: 'dashboard-route' }">
                                    <i class="flaticon-home"></i>
                                </router-link>
                            </li>
                            <li class="separator">
                                <i class="flaticon-right-arrow"></i>
                            </li>
                            <li class="nav-item">
                                <a href="#">Liste des ITAs</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="page-inner mt--5">
                <div class="row mt--2">
                    <!-- <div class="col-md-12">
                        <div class="d-flex justify-content-between">
                            <div class="d-md-inline-block">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white">
                                            <i class="fa fa-search search-icon"></i>
                                        </span>
                                    </div>
                                    <input type="text" v-model="searchword" placeholder="Rechercher un ITA..."
                                        class="form-control" aria-label="Text input with dropdown button">
                                    <div class="input-group-append">
                                        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">Filtrer </button>
                                        <div class="dropdown-menu" x-placement="bottom-start"
                                            style="position: absolute; transform: translate3d(229px, 43px, 0px); top: 0px; left: 0px; will-change: transform;">
                                            <a class="dropdown-item" href="#">ITA</a>
                                            <a class="dropdown-item" href="#">Population</a>
                                            <a class="dropdown-item" href="#">Supérficie</a>
                                            <a class="dropdown-item" href="#">IPA</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" title="Création d'une nouvelle ita" data-toggle="tooltip"
                                class="btn btn-success d-none d-sm-inline-block" @click="showCreateItaModal">
                                <i class="flaticon-add mr-1"></i>Nouvelle ITA
                            </button>
                        </div>
                    </div> -->
                    <div class="col-md-12">
                        <div class="card full-height mt-4 animated fadeIn">
                            <div class="card-header d-flex justify-content-between">
                                <h4 class="card-title">Liste des ITAs</h4>
                                <button type="button" title="Enregistrer ITA" data-toggle="tooltip"
                                    class="btn btn-success d-none d-sm-inline-block" @click="showCreateItaModal">
                                    <i class="flaticon-add mr-1"></i>Nouvelle ITA
                                </button>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="itasTable" class="display table table-striped table-hover">

                                    </table>
                                </div>
                                <!-- table pour afficher les ipa & ita -->
                                <!-- end table -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal Create ITA -->

        <ita-create-modal @reload-data="onReloadData" />

        <!-- End Modal Create ITA -->

        <!-- Agent register modal -->
        <!-- <agent-create-modal /> -->
        <!-- End Agent reg modal -->

        <!-- Global footer component -->
        <d-footer></d-footer>
        <!-- end Global footer component -->

    </div>
</template>
<script>

import ItaCreateModal from "../modals/ita-create-modal.vue";
import Api from "@/apps/dantic/api";

export default {
    name: "Ipa-view",
    components: { ItaCreateModal },

    data() {
        return {
            searchword: '',
            dataLoading: true,
            table: null
        }
    },

    async mounted() {
        let table = await this.initAjaxDataTable();
        this.table = table;
        $('#itasTable tbody').on('click', '.btn-info', function (e) {
            let data = table.row(e.target.closest('tr')).data();
            console.log(JSON.stringify(data));
        });
        $('#itasTable tbody').on('click', '.btn-danger', (e)=> {
            let data = table.row(e.target.closest('tr')).data();
            console.log("delete ita", data.ita_ip);
          this.deleteIta(data.ita_ip);
        });
        this.$initBsTooltip();
    },
    methods: {
        async deleteIta(itaIp){
          this.$swal(
              {
                title:"Etes-vous sure?",
                showCancelButton:true,
                showCloseButton:true,
                confirmButtonText:"Oui",
                cancelButtonText:"Annuler"
              }
          ).then(async (result) => {

            if (result.value) {
              var data = new FormData();
              data.append("ita_ip", itaIp);

              await Api.deleteIta(data,function(res){
                console.log("finished..");
                console.log(res);
              });

              /**
               * reload page.
               */
              window.location.reload();
            }
          });
        },
        showCreateItaModal() {
            this.$store.state.dantic.selectedIpa = null;
            $("#itaCreateModal").modal('show');
        },

        async initAjaxDataTable() {
            const lang =
            {
                "emptyTable": "Aucune donnée disponible dans le tableau",
                "loadingRecords": "Chargement...",
                "processing": "Traitement...",
                "autoFill": {
                    "cancel": "Annuler",
                    "fill": "Remplir toutes les cellules avec <i>%d<\/i>",
                    "fillHorizontal": "Remplir les cellules horizontalement",
                    "fillVertical": "Remplir les cellules verticalement"
                },
                "searchBuilder": {
                    "conditions": {
                        "date": {
                            "after": "Après le",
                            "before": "Avant le",
                            "between": "Entre",
                            "empty": "Vide",
                            "not": "Différent de",
                            "notBetween": "Pas entre",
                            "notEmpty": "Non vide",
                            "equals": "Égal à"
                        },
                        "number": {
                            "between": "Entre",
                            "empty": "Vide",
                            "gt": "Supérieur à",
                            "gte": "Supérieur ou égal à",
                            "lt": "Inférieur à",
                            "lte": "Inférieur ou égal à",
                            "not": "Différent de",
                            "notBetween": "Pas entre",
                            "notEmpty": "Non vide",
                            "equals": "Égal à"
                        },
                        "string": {
                            "contains": "Contient",
                            "empty": "Vide",
                            "endsWith": "Se termine par",
                            "not": "Différent de",
                            "notEmpty": "Non vide",
                            "startsWith": "Commence par",
                            "equals": "Égal à",
                            "notContains": "Ne contient pas",
                            "notEndsWith": "Ne termine pas par",
                            "notStartsWith": "Ne commence pas par"
                        },
                        "array": {
                            "empty": "Vide",
                            "contains": "Contient",
                            "not": "Différent de",
                            "notEmpty": "Non vide",
                            "without": "Sans",
                            "equals": "Égal à"
                        }
                    },
                    "add": "Ajouter une condition",
                    "button": {
                        "0": "Recherche avancée",
                        "_": "Recherche avancée (%d)"
                    },
                    "clearAll": "Effacer tout",
                    "condition": "Condition",
                    "data": "Donnée",
                    "deleteTitle": "Supprimer la règle de filtrage",
                    "logicAnd": "Et",
                    "logicOr": "Ou",
                    "title": {
                        "0": "Recherche avancée",
                        "_": "Recherche avancée (%d)"
                    },
                    "value": "Valeur",
                    "leftTitle": "Désindenter le critère",
                    "rightTitle": "Indenter le critère"
                },
                "searchPanes": {
                    "clearMessage": "Effacer tout",
                    "count": "{total}",
                    "title": "Filtres actifs - %d",
                    "collapse": {
                        "0": "Volet de recherche",
                        "_": "Volet de recherche (%d)"
                    },
                    "countFiltered": "{shown} ({total})",
                    "emptyPanes": "Pas de volet de recherche",
                    "loadMessage": "Chargement du volet de recherche...",
                    "collapseMessage": "Réduire tout",
                    "showMessage": "Montrer tout"
                },
                "buttons": {
                    "collection": "Collection",
                    "colvis": "Visibilité colonnes",
                    "colvisRestore": "Rétablir visibilité",
                    "copy": "Copier",
                    "copySuccess": {
                        "1": "1 ligne copiée dans le presse-papier",
                        "_": "%d lignes copiées dans le presse-papier"
                    },
                    "copyTitle": "Copier dans le presse-papier",
                    "csv": "CSV",
                    "excel": "Excel",
                    "pageLength": {
                        "-1": "Afficher toutes les lignes",
                        "_": "Afficher %d lignes",
                        "1": "Afficher 1 ligne"
                    },
                    "pdf": "PDF",
                    "print": "Imprimer",
                    "copyKeys": "Appuyez sur ctrl ou u2318 + C pour copier les données du tableau dans votre presse-papier.",
                    "createState": "Créer un état",
                    "removeAllStates": "Supprimer tous les états",
                    "removeState": "Supprimer",
                    "renameState": "Renommer",
                    "savedStates": "États sauvegardés",
                    "stateRestore": "État %d",
                    "updateState": "Mettre à jour"
                },
                "decimal": ",",
                "datetime": {
                    "previous": "Précédent",
                    "next": "Suivant",
                    "hours": "Heures",
                    "minutes": "Minutes",
                    "seconds": "Secondes",
                    "unknown": "-",
                    "amPm": [
                        "am",
                        "pm"
                    ],
                    "months": {
                        "0": "Janvier",
                        "2": "Mars",
                        "3": "Avril",
                        "4": "Mai",
                        "5": "Juin",
                        "6": "Juillet",
                        "8": "Septembre",
                        "9": "Octobre",
                        "10": "Novembre",
                        "1": "Février",
                        "11": "Décembre",
                        "7": "Août"
                    },
                    "weekdays": [
                        "Dim",
                        "Lun",
                        "Mar",
                        "Mer",
                        "Jeu",
                        "Ven",
                        "Sam"
                    ]
                },

                "info": "Affichage de _START_ à _END_ sur _TOTAL_ entrées",
                "infoEmpty": "Affichage de 0 à 0 sur 0 entrées",
                "infoFiltered": "(filtrées depuis un total de _MAX_ entrées)",
                "lengthMenu": "Afficher _MENU_ entrées",
                "paginate": {
                    "first": "Première",
                    "last": "Dernière",
                    "next": "Suivante",
                    "previous": "Précédente"
                },
                "zeroRecords": "Aucune entrée correspondante trouvée",
                "aria": {
                    "sortAscending": " : activer pour trier la colonne par ordre croissant",
                    "sortDescending": " : activer pour trier la colonne par ordre décroissant"
                },
                "infoThousands": " ",
                "search": "Rechercher :",
                "thousands": " "
            };
            var table = $('#itasTable').DataTable({
                dom: 'Blfrtip',
                "language": lang,
                buttons: [
                    {
                        extend: 'excel',
                        className: 'bg-primary mr-1 mb-0'
                    },
                    {
                        extend: 'pdf',
                        customize: function (doc) {
                            doc.content[0].text = "Liste des Inspéctions Territoriales Agricoles";
                            doc.styles.title.alignment = "center";
                            doc.styles.title.fontSize = 20;
                            doc.content[1].table.widths = Array(doc.content[1].table.body[0].length + 1).join('*').split('');
                        },
                        className: 'bg-primary mr-1 mb-0'
                    },
                    {
                        extend: 'print',
                        className: 'bg-primary mb-0'
                    }
                ],
                lengthChange: false,
                ajax: {
                    url: 'http://snia.edgeverifed.com/dantic/ita_url/viewIta',
                    dataSrc: 'reponse'
                },
                columns: [
                    {
                        title: 'Libellé ITA',
                        data: 'ita'
                    },

                    {
                        title: 'Supérficie',
                        data: 'superficie'
                    },
                    {
                        title: '',
                        data: null,
                        defaultContent: ' <div class="d-flex"><button class="btn btn-icon btn-info mr-2" type="button""> <i class="icon-note"></i> </button>  <button class="btn btn-icon btn-danger" type="button""> <i class="icon-trash"></i> </button></div>  '
                    }
                ]
            });
            table.buttons().container()
                .appendTo('#agentsTable_wrapper .col-md-6:eq(0)');

            /* setInterval(() => {
                table.ajax.reload();
            }, 4000) */
            return table;
        },

        onReloadData() {
            this.table.ajax.reload();
        }
    },
}
</script>