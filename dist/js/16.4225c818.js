"use strict";(self["webpackChunksnia"]=self["webpackChunksnia"]||[]).push([[16],{5016:function(e,a,t){t.r(a),t.d(a,{default:function(){return ea}});var s=t(6252);const l={class:"main-panel"},n={class:"container"},o={class:"panel-header"},r={class:"page-inner py-5"},i={class:"page-header"},d=(0,s._)("h4",{class:"page-title"},"Agents",-1),c={class:"breadcrumbs"},u={class:"nav-home"},m=(0,s._)("i",{class:"flaticon-home"},null,-1),p=(0,s._)("li",{class:"separator"},[(0,s._)("i",{class:"flaticon-right-arrow"})],-1),f=(0,s._)("li",{class:"nav-item"},[(0,s._)("a",{href:"#"},"Liste des agents")],-1),g={class:"page-inner mt--5"},_={class:"row mt--2"},b={class:"col-md-12"},v={class:"card full-height animated fadeIn"},h={class:"card-header d-flex justify-content-between"},w=(0,s._)("h4",{class:"card-title"},"Liste des agents",-1),y=(0,s._)("i",{class:"icon-user-follow mr-2"},null,-1),x=(0,s._)("div",{class:"card-body"},[(0,s._)("div",{class:"table-responsive"},[(0,s._)("table",{id:"agentsTable",class:"display table table-striped table-hover"})])],-1);function A(e,a,t,A,k,S){const M=(0,s.up)("router-link"),U=(0,s.up)("agent-create-modal"),q=(0,s.up)("d-footer");return(0,s.wg)(),(0,s.iD)("div",l,[(0,s._)("div",n,[(0,s._)("div",o,[(0,s._)("div",r,[(0,s._)("div",i,[d,(0,s._)("ul",c,[(0,s._)("li",u,[(0,s.Wm)(M,{to:{name:"dashboard-route"}},{default:(0,s.w5)((()=>[m])),_:1})]),p,f])])])]),(0,s._)("div",g,[(0,s._)("div",_,[(0,s._)("div",b,[(0,s._)("div",v,[(0,s._)("div",h,[w,(0,s._)("button",{type:"button",onClick:a[0]||(a[0]=(...e)=>S.showAgentRegisterModal&&S.showAgentRegisterModal(...e)),class:"btn btn-success d-none d-sm-inline-block"},[y,(0,s.Uk)("Nouveau agent")])]),x])])])])]),(0,s.Wm)(U,{onReloadData:S.reloadData},null,8,["onReloadData"]),(0,s.Wm)(q)])}t(7658);var k=t(9963),S=t(3577);const M={class:"row"},U={class:"col-md-4"},q={class:"form-group form-group-default"},D=(0,s._)("label",{class:"fw-extrabold"},[(0,s.Uk)("Nom "),(0,s._)("sup",{class:"text-danger"},"*")],-1),C=(0,s._)("div",{class:"invalid-feedback"}," Nom de l'agent requis ! ",-1),V={class:"col-md-4"},T={class:"form-group form-group-default"},N=(0,s._)("label",{class:"fw-extrabold"},[(0,s.Uk)("Postnom "),(0,s._)("sup",{class:"text-danger"},"*")],-1),R=(0,s._)("div",{class:"invalid-feedback"}," Postnom de l'agent requis ! ",-1),E={class:"col-md-4"},P={class:"form-group form-group-default"},z=(0,s._)("label",{class:"fw-extrabold"},[(0,s.Uk)("Prénom "),(0,s._)("sup",{class:"text-danger"},"*")],-1),F=(0,s._)("div",{class:"invalid-feedback"}," Prénom de l'agent requis ! ",-1),L={class:"col-md-4"},j={class:"form-group form-group-default"},I=(0,s._)("label",{class:"fw-extrabold"},[(0,s.Uk)("Status "),(0,s._)("sup",{class:"text-danger"},"*")],-1),W=(0,s._)("option",{value:""},"------",-1),J=(0,s._)("option",{value:"Matricule"},[(0,s.Uk)("Matricule "),(0,s._)("sup",{class:"text-danger"},"*")],-1),O=(0,s._)("option",{value:"Nouvelle unite"},"Nouvelle unité",-1),B=[W,J,O],H=(0,s._)("div",{class:"invalid-feedback"}," Sélectionnez le status de l'agent ! ",-1),Z={class:"col-md-4"},G={class:"form-group form-group-default"},K=(0,s._)("label",{class:"fw-extrabold"},[(0,s.Uk)("Grade "),(0,s._)("sup",{class:"text-danger"},"*")],-1),Y=(0,s._)("option",{value:""},"-------",-1),X=["value"],Q=(0,s._)("div",{class:"invalid-feedback"}," Sélectionnez le grade de l'agent ! ",-1),ee={class:"col-md-4"},ae={class:"form-group form-group-default"},te=(0,s._)("label",{class:"fw-extrabold"},[(0,s.Uk)("Fonction "),(0,s._)("sup",{class:"text-danger"},"*")],-1),se=(0,s._)("div",{class:"invalid-feedback"}," Fonction de l'agent requis ! ",-1),le={key:0,class:"col-md-4"},ne={class:"form-group form-group-default"},oe=(0,s._)("label",{class:"fw-extrabold"},[(0,s.Uk)("Numéro Matricule "),(0,s._)("sup",{class:"text-danger"},"*")],-1),re=(0,s._)("div",{class:"invalid-feedback"}," Numéro matricule de l'agent requis ! ",-1),ie={class:"col-md-4"},de={class:"form-group form-group-default"},ce=(0,s._)("label",{class:"fw-extrabold"},[(0,s.Uk)("Sexe "),(0,s._)("sup",{class:"text-danger"},"*")],-1),ue=(0,s._)("option",{value:"Masculin"},"Masculin",-1),me=(0,s._)("option",{value:"Feminin"},"Feminin",-1),pe=[ue,me],fe=(0,s._)("div",{class:"invalid-feedback"}," Sélectionnez le genre/sexe de l'agent ! ",-1),ge={class:"col-md-4"},_e={class:"form-group form-group-default"},be=(0,s._)("label",{class:"fw-extrabold"},[(0,s.Uk)("Date de naissance "),(0,s._)("sup",{class:"text-danger"},"*")],-1),ve=(0,s._)("div",{class:"invalid-feedback"}," Date de naissance de l'agent requis ! ",-1),he={class:"col-md-6"},we={class:"form-group form-group-default"},ye=(0,s._)("label",{class:"fw-extrabold"},[(0,s.Uk)("Email "),(0,s._)("sup",{class:"text-danger"},"*")],-1),xe=(0,s._)("div",{class:"invalid-feedback"}," Adresse email de l'agent requis ! ",-1),Ae={class:"col-md-6"},ke={class:"form-group form-group-default"},Se=(0,s._)("label",{class:"fw-extrabold"},[(0,s.Uk)("Téléphone "),(0,s._)("sup",{class:"text-danger"},"*")],-1),Me=(0,s._)("div",{class:"invalid-feedback"}," Numéro de téléphone de l'agent requis ! ",-1),Ue={class:"col-md-4"},qe={class:"form-group form-group-default"},De=(0,s._)("label",{class:"fw-extrabold"},[(0,s.Uk)("Mot de passe "),(0,s._)("sup",{class:"text-danger"},"*")],-1),Ce=(0,s._)("div",{class:"invalid-feedback"}," Veuillez saisir un mot de passe pour cet agent ! ",-1),Ve={class:"col-md-4"},Te={class:"form-group form-group-default"},Ne=(0,s._)("label",{class:"fw-extrabold"},[(0,s.Uk)("Confirmation mot de passe "),(0,s._)("sup",{class:"text-danger"},"*")],-1),Re=["required"],Ee=(0,s._)("div",{class:"invalid-feedback"}," Vous devez retaper le mot de passe attribué à l'agent ! ",-1),Pe={class:"col-md-4"},ze={class:"form-group form-group-default"},$e=(0,s._)("label",{class:"fw-extrabold"},[(0,s.Uk)("Accès système "),(0,s._)("sup",{class:"text-danger"},"*")],-1),Fe=(0,s._)("option",{value:""},"-------",-1),Le=["value"],je=(0,s._)("div",{class:"invalid-feedback"}," Veuillez sélectionner un accès système pour cet agent ! ",-1),Ie=["disabled"],We={key:0,class:"fa fa-spinner fa-spin"},Je=(0,s._)("button",{class:"btn btn-danger","data-dismiss":"modal"},"Fermer",-1);function Oe(e,a,t,l,n,o){const r=(0,s.up)("bs-modal");return(0,s.wg)(),(0,s.j4)(r,{title:"Création nouveau agent",onSubmit:(0,k.iM)(o.submitAgent,["prevent"]),id:"agentModal",size:"modal-xl","form-novalidate":!0},{"body-content":(0,s.w5)((()=>[(0,s._)("div",M,[(0,s._)("div",U,[(0,s._)("div",q,[D,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>n.name.first=e),class:"form-control",name:"nom",placeholder:"Saisir le nom de l'agent...",required:""},null,512),[[k.nr,n.name.first]]),C])]),(0,s._)("div",V,[(0,s._)("div",T,[N,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":a[1]||(a[1]=e=>n.name.last=e),class:"form-control",name:"postnom",placeholder:"Saisir postnom...",required:""},null,512),[[k.nr,n.name.last]]),R])]),(0,s._)("div",E,[(0,s._)("div",P,[z,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":a[2]||(a[2]=e=>n.name.nick=e),class:"form-control",name:"prenom",placeholder:"Saisir prénom...",required:""},null,512),[[k.nr,n.name.nick]]),F])]),(0,s._)("div",L,[(0,s._)("div",j,[I,(0,s.wy)((0,s._)("select",{class:"form-control","onUpdate:modelValue":a[3]||(a[3]=e=>n.form.statut=e),required:""},B,512),[[k.bM,n.form.statut]]),H])]),(0,s._)("div",Z,[(0,s._)("div",G,[K,(0,s.wy)((0,s._)("select",{name:"",id:"",class:"form-control","onUpdate:modelValue":a[4]||(a[4]=e=>n.form.grade=e),required:""},[Y,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.grades,((e,a)=>((0,s.wg)(),(0,s.iD)("option",{key:a,value:e},(0,S.zw)(e),9,X)))),128))],512),[[k.bM,n.form.grade]]),Q])]),(0,s._)("div",ee,[(0,s._)("div",ae,[te,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":a[5]||(a[5]=e=>n.form.fonction=e),class:"form-control",name:"prenom",placeholder:"Saisir prénom...",required:""},null,512),[[k.nr,n.form.fonction]]),se])]),"Matricule"===n.form.statut?((0,s.wg)(),(0,s.iD)("div",le,[(0,s._)("div",ne,[oe,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":a[6]||(a[6]=e=>n.form.numero_reference=e),class:"form-control",name:"email",placeholder:"Saisir le numéro matricule...",required:""},null,512),[[k.nr,n.form.numero_reference]]),re])])):(0,s.kq)("",!0),(0,s._)("div",ie,[(0,s._)("div",de,[ce,(0,s.wy)((0,s._)("select",{name:"",id:"",class:"form-control","onUpdate:modelValue":a[7]||(a[7]=e=>n.form.sexe=e),required:""},pe,512),[[k.bM,n.form.sexe]]),fe])]),(0,s._)("div",ge,[(0,s._)("div",_e,[be,(0,s.wy)((0,s._)("input",{type:"date",class:"form-control","onUpdate:modelValue":a[8]||(a[8]=e=>n.form.date_naissance=e),required:""},null,512),[[k.nr,n.form.date_naissance]]),ve])]),(0,s._)("div",he,[(0,s._)("div",we,[ye,(0,s.wy)((0,s._)("input",{type:"email","onUpdate:modelValue":a[9]||(a[9]=e=>n.form.email=e),class:"form-control",name:"email",placeholder:"Saisir email...",required:""},null,512),[[k.nr,n.form.email]]),xe])]),(0,s._)("div",Ae,[(0,s._)("div",ke,[Se,(0,s.wy)((0,s._)("input",{type:"tel","onUpdate:modelValue":a[10]||(a[10]=e=>n.form.telephone=e),class:"form-control",name:"telephone",placeholder:"Saisir le n° de téléphone...(+243)",required:""},null,512),[[k.nr,n.form.telephone]]),Me])]),(0,s._)("div",Ue,[(0,s._)("div",qe,[De,(0,s.wy)((0,s._)("input",{type:"password","onUpdate:modelValue":a[11]||(a[11]=e=>n.form.pass=e),class:"form-control",name:"pass",placeholder:"Saisir le mot de passe...",required:""},null,512),[[k.nr,n.form.pass]]),Ce])]),(0,s._)("div",Ve,[(0,s._)("div",Te,[Ne,(0,s.wy)((0,s._)("input",{type:"password","onUpdate:modelValue":a[12]||(a[12]=e=>n.form.confirm=e),class:"form-control",name:"confirm",placeholder:"Confirmer mot de passe...",required:n.form.pass!==n.form.confirm||""===n.form.confirm},null,8,Re),[[k.nr,n.form.confirm]]),Ee])]),(0,s._)("div",Pe,[(0,s._)("div",ze,[$e,(0,s.wy)((0,s._)("select",{name:"",id:"",class:"form-control","onUpdate:modelValue":a[13]||(a[13]=e=>n.form.access=e),required:""},[Fe,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.access,((e,a)=>((0,s.wg)(),(0,s.iD)("option",{key:a,value:e},(0,S.zw)(e),9,Le)))),128))],512),[[k.bM,n.form.access]]),je])])])])),"footer-content":(0,s.w5)((()=>[(0,s._)("button",{id:"submit-btn",type:"submit",class:"btn btn-success",disabled:n.submitLoading},[n.submitLoading?((0,s.wg)(),(0,s.iD)("i",We)):(0,s.kq)("",!0),(0,s.Uk)(" Enregistrer Agent ")],8,Ie),Je])),_:1},8,["onSubmit"])}var Be=t(243),He={name:"agent-create-modal",data(){return{submitLoading:!1,name:{first:"",last:"",nick:""},grades:["Directeur ","Chef de division","Chef de bureau","ATA1","ATA2","AGA1","AGA2","AA1","AA2","HUISSIER"],access:["dantic","ministre","sg","ita","ipa","dprotv","dprodv","senasem","senafic","tablette"],form:{nom_complet:"",telephone:"",statut:"Matricule",fonction:"",grade:"",sexe:"Masculin",date_naissance:"",numero_reference:"",email:"",pass:"",confirm:"",access:""}}},methods:{submitAgent(e){this.form.nom_complet=`${this.name.first.toUpperCase()} ${this.name.last.toUpperCase()} ${this.name.nick.toLowerCase()}`,this.$validForm("agentModal",e,(async(e,a)=>{e?(this.submitLoading=!0,Be.Z.creerAgent(this.form,(e=>{this.submitLoading=!1,$("#agentModal").modal("hide"),this.$emit("reloadData"),this.$store.dispatch("dantic/viewAgents")}))):this.$animatedFailedTask("submit-btn")}))}},mounted(){Be.Z.getAccess((e=>{this.access=e}))}},Ze=t(3744);const Ge=(0,Ze.Z)(He,[["render",Oe]]);var Ke=Ge,Ye=t(7255),Xe={name:"AgentPage",components:{AgentCreateModal:Ke},data(){return{searchword:"",table:null}},methods:{viewAgentProfile(e){localStorage.setItem("agent_profile",JSON.stringify(e));window.location.host;this.$router.push({path:"/dantic/user/profile/view"}).then((()=>{this.$router.go()}))},showAgentRegisterModal(){$("#agentModal").modal("show")},reloadData(){this.table.ajax.reload()},async initAjaxDataTable(){const e={emptyTable:"Aucune donnée disponible dans le tableau",loadingRecords:"Chargement...",processing:"Traitement...",autoFill:{cancel:"Annuler",fill:"Remplir toutes les cellules avec <i>%d</i>",fillHorizontal:"Remplir les cellules horizontalement",fillVertical:"Remplir les cellules verticalement"},searchBuilder:{conditions:{date:{after:"Après le",before:"Avant le",between:"Entre",empty:"Vide",not:"Différent de",notBetween:"Pas entre",notEmpty:"Non vide",equals:"Égal à"},number:{between:"Entre",empty:"Vide",gt:"Supérieur à",gte:"Supérieur ou égal à",lt:"Inférieur à",lte:"Inférieur ou égal à",not:"Différent de",notBetween:"Pas entre",notEmpty:"Non vide",equals:"Égal à"},string:{contains:"Contient",empty:"Vide",endsWith:"Se termine par",not:"Différent de",notEmpty:"Non vide",startsWith:"Commence par",equals:"Égal à",notContains:"Ne contient pas",notEndsWith:"Ne termine pas par",notStartsWith:"Ne commence pas par"},array:{empty:"Vide",contains:"Contient",not:"Différent de",notEmpty:"Non vide",without:"Sans",equals:"Égal à"}},add:"Ajouter une condition",button:{0:"Recherche avancée",_:"Recherche avancée (%d)"},clearAll:"Effacer tout",condition:"Condition",data:"Donnée",deleteTitle:"Supprimer la règle de filtrage",logicAnd:"Et",logicOr:"Ou",title:{0:"Recherche avancée",_:"Recherche avancée (%d)"},value:"Valeur",leftTitle:"Désindenter le critère",rightTitle:"Indenter le critère"},searchPanes:{clearMessage:"Effacer tout",count:"{total}",title:"Filtres actifs - %d",collapse:{0:"Volet de recherche",_:"Volet de recherche (%d)"},countFiltered:"{shown} ({total})",emptyPanes:"Pas de volet de recherche",loadMessage:"Chargement du volet de recherche...",collapseMessage:"Réduire tout",showMessage:"Montrer tout"},buttons:{collection:"Collection",colvis:"Visibilité colonnes",colvisRestore:"Rétablir visibilité",copy:"Copier",copySuccess:{1:"1 ligne copiée dans le presse-papier",_:"%d lignes copiées dans le presse-papier"},copyTitle:"Copier dans le presse-papier",csv:"CSV",excel:"Excel",pageLength:{"-1":"Afficher toutes les lignes",_:"Afficher %d lignes",1:"Afficher 1 ligne"},pdf:"PDF",print:"Imprimer",copyKeys:"Appuyez sur ctrl ou u2318 + C pour copier les données du tableau dans votre presse-papier.",createState:"Créer un état",removeAllStates:"Supprimer tous les états",removeState:"Supprimer",renameState:"Renommer",savedStates:"États sauvegardés",stateRestore:"État %d",updateState:"Mettre à jour"},decimal:",",datetime:{previous:"Précédent",next:"Suivant",hours:"Heures",minutes:"Minutes",seconds:"Secondes",unknown:"-",amPm:["am","pm"],months:{0:"Janvier",2:"Mars",3:"Avril",4:"Mai",5:"Juin",6:"Juillet",8:"Septembre",9:"Octobre",10:"Novembre",1:"Février",11:"Décembre",7:"Août"},weekdays:["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"]},info:"Affichage de _START_ à _END_ sur _TOTAL_ entrées",infoEmpty:"Affichage de 0 à 0 sur 0 entrées",infoFiltered:"(filtrées depuis un total de _MAX_ entrées)",lengthMenu:"Afficher _MENU_ entrées",paginate:{first:"Première",last:"Dernière",next:"Suivante",previous:"Précédente"},zeroRecords:"Aucune entrée correspondante trouvée",aria:{sortAscending:" : activer pour trier la colonne par ordre croissant",sortDescending:" : activer pour trier la colonne par ordre décroissant"},infoThousands:" ",search:"Rechercher :",thousands:" "};var a=$("#agentsTable").DataTable({dom:"Blfrtip",language:e,buttons:[{extend:"excel",className:"bg-primary mr-1 mb-0"},{extend:"pdf",customize:function(e){e.content[0].text="Liste des Agents",e.styles.title.alignment="center",e.styles.title.fontSize=20,e.content[1].table.widths=Array(e.content[1].table.body[0].length+1).join("*").split("")},className:"bg-primary mr-1 mb-0"},{extend:"print",className:"bg-primary mb-0"}],lengthChange:!1,ajax:{url:Ye.Z.url+"/dantic/agent_url/viewAgent",dataSrc:"reponse"},columns:[{title:"Accès",data:"access.access"},{title:"Nom Complet",data:"nom_complet"},{title:"Fonction",data:"fonction"},{title:"Grade",data:"grade"},{title:"Sexe",data:"sexe"},{title:"Email",data:"email"},{title:"Téléphone",data:"telephone"},{title:"",data:null,defaultContent:' <div class="d-flex"><button class="btn btn-icon btn-info mr-2" type="button""> <i class="icon-note"></i> </button>  <button style="display: none" class="btn btn-icon btn-danger" type="button""> <i class="icon-trash"></i> </button></div>  '}]});return a.buttons().container().appendTo("#agentsTable_wrapper .col-md-6:eq(0)"),a}},async mounted(){let e=await this.initAjaxDataTable();this.table=e,$("#agentsTable tbody").on("click",".btn-info",(a=>{let t=e.row(a.target.closest("tr")).data();this.viewAgentProfile(t),console.log(JSON.stringify(t))})),$("#agentsTable tbody").on("click",".btn-danger",(function(a){let t=e.row(a.target.closest("tr")).data();console.log("delete user ",t.agent_id)})),this.$initBsTooltip()}};const Qe=(0,Ze.Z)(Xe,[["render",A]]);var ea=Qe}}]);
//# sourceMappingURL=16.4225c818.js.map