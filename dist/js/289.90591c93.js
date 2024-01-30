"use strict";(self["webpackChunksnia"]=self["webpackChunksnia"]||[]).push([[289],{1289:function(e,a,l){l.r(a),l.d(a,{default:function(){return Ae}});var s=l(6252),t=l(3577),i=l(9963);const n={class:"main-panel"},o={class:"container"},r={class:"page-inner"},d=(0,s._)("h4",{class:"page-title"},"Profil utilisateur",-1),u={class:"row"},c={class:"col-md-4"},p={class:"card card-profile full-height"},m=(0,s._)("div",{class:"card-header card-primary"},[(0,s._)("div",{class:"profile-picture"},[(0,s._)("div",{class:"avatar avatar-xl"},[(0,s._)("img",{src:"assets/img/picture_placeholder.png",alt:"...",class:"avatar-img rounded-circle"})])])],-1),v={class:"card-body"},_={class:"user-profile text-center"},f={class:"name"},g={class:"job"},b={class:"desc"},h=(0,s._)("i",{class:"fas fa-circle text-success",style:{"font-size":"6px"}},null,-1),w={class:"col-md-8"},y={class:"card card-with-nav"},k={class:"card-header"},D={class:"row row-nav-line"},x={class:"nav nav-tabs nav-line nav-color-primary w-100 pl-3",role:"tablist"},S={class:"nav-item"},q={class:"nav-item"},C={class:"card-body"},E={class:"tab-content mt-2 mb-3"},U={class:"row mt-3"},z={class:"col-md-6"},V={class:"col-md-6"},R={class:"row mt-3"},L={class:"col-md-4"},N={class:"form-group form-group-default"},B=(0,s._)("label",null,"Date de naissance",-1),A=["value"],G={class:"col-md-4"},I={class:"form-group form-group-default"},P=(0,s._)("label",null,"Genre",-1),W=["value"],F={class:"col-md-4"},Z={class:"row mt-3"},O={class:"col-md-6"},T={class:"col-md-6"},j={class:"form-group form-group-default"},M=(0,s._)("label",null,"Status fonction publique",-1),H=["value"],J={class:"col-md-6"},K={class:"form-group form-group-default"},Q=(0,s._)("label",null,"Grade",-1),X=["value"],Y={class:"col-md-6"},ee={class:"form-group form-group-default"},ae=(0,s._)("label",null,"Accès",-1),le=["value"],se={class:"row"},te={class:"col-md-6"},ie={class:"form-group form-group-default"},ne=(0,s._)("label",null,"Nom complet",-1),oe=["value"],re={class:"col-md-6"},de={class:"form-group form-group-default"},ue=(0,s._)("label",null,"Adresse email",-1),ce=["value"],pe={class:"col-md-12"},me={class:"form-group form-group-default"},ve=(0,s._)("label",null,[(0,s.Uk)("Ancien mot de passe "),(0,s._)("sup",{class:"text-danger"},"*")],-1),_e=(0,s._)("div",{class:"invalid-feedback"}," Entrez votre ancien mot de passe ! ",-1),fe={class:"form-group form-group-default"},ge=(0,s._)("label",null,[(0,s.Uk)("Nouveau mot de passe "),(0,s._)("sup",{class:"text-danger"},"*")],-1),be=(0,s._)("div",{class:"invalid-feedback"}," Entrez votre nouveau mot de passe ! ",-1),he={class:"form-group form-group-default"},we=(0,s._)("label",null,[(0,s.Uk)("Confirmation nouveau mot de passe "),(0,s._)("sup",{class:"text-danger"},"*")],-1),ye=["required"],ke=(0,s._)("div",{class:"invalid-feedback"}," Confirmez votre nouveau mot de passe ! ",-1),De=["disabled"],xe={key:0,class:"fa fa-spinner fa-spin mr-2"},Se={key:1,class:"icon-pencil"};function qe(e,a,l,$,qe,Ce){const Ee=(0,s.up)("InputWidget");return(0,s.wg)(),(0,s.iD)("div",n,[(0,s._)("div",o,[(0,s._)("div",r,[d,(0,s._)("div",u,[(0,s._)("div",c,[(0,s._)("div",p,[m,(0,s._)("div",v,[(0,s._)("div",_,[(0,s._)("div",f,(0,t.zw)(Ce.user.nom_complet),1),(0,s._)("div",g,(0,t.zw)(Ce.user.fonction)+" | "+(0,t.zw)(Ce.user.fonction_publique_status),1),(0,s._)("div",b,[h,(0,s.Uk)(" "+(0,t.zw)(Ce.user.access.access),1)])])])])]),(0,s._)("div",w,[(0,s._)("div",y,[(0,s._)("div",k,[(0,s._)("div",D,[(0,s._)("ul",x,[(0,s._)("li",S,[(0,s._)("a",{class:(0,t.C_)(["nav-link","view"===e.$route.params.task?"active show":""]),"data-toggle":"tab",href:"#profile",role:"tab","aria-selected":"false"},"Profil",2)]),(0,s._)("li",q,[(0,s._)("a",{class:(0,t.C_)(["nav-link","config"===e.$route.params.task?"active show":""]),"data-toggle":"tab",href:"#settings",role:"tab","aria-selected":"false"},"Paramètres du compte",2)])])])]),(0,s._)("div",C,[(0,s._)("div",E,[(0,s._)("div",{class:(0,t.C_)(["tab-pane fade","view"===e.$route.params.task?"show active":""]),id:"profile",role:"tabpanel","aria-labelledby":"pills-home-tab"},[(0,s._)("div",U,[(0,s._)("div",z,[(0,s.Wm)(Ee,{label:"Nom complet",placeholder:"Nom complet",val:Ce.user.nom_complet,"input-name":"nom_complet","agent-id":Ce.user.agent_id},null,8,["val","agent-id"])]),(0,s._)("div",V,[(0,s.Wm)(Ee,{label:"Email",placeholder:"email",val:Ce.user.email,"input-name":"email","agent-id":Ce.user.agent_id},null,8,["val","agent-id"])])]),(0,s._)("div",R,[(0,s._)("div",L,[(0,s._)("div",N,[B,(0,s._)("input",{type:"text",disabled:"",class:"form-control",id:"datepicker",name:"datepicker",value:Ce.user.date_naissance,placeholder:"Birth Date"},null,8,A)])]),(0,s._)("div",G,[(0,s._)("div",I,[P,(0,s._)("input",{type:"text",disabled:"",class:"form-control",id:"datepicker",name:"datepicker",value:Ce.user.sexe,placeholder:"Birth Date"},null,8,W)])]),(0,s._)("div",F,[(0,s.Wm)(Ee,{label:"Téléphone",placeholder:"téléphone",val:Ce.user.telephone,"input-name":"telephone","agent-id":Ce.user.agent_id},null,8,["val","agent-id"])])]),(0,s._)("div",Z,[(0,s._)("div",O,[(0,s.Wm)(Ee,{label:"Fonction",placeholder:"fonction",val:Ce.user.fonction,"input-name":"fonction","agent-id":Ce.user.agent_id},null,8,["val","agent-id"])]),(0,s._)("div",T,[(0,s._)("div",j,[M,(0,s._)("input",{disabled:"",type:"text",class:"form-control",value:Ce.user.fonction_publique_status,name:"address",placeholder:"Grade"},null,8,H)])]),(0,s._)("div",J,[(0,s._)("div",K,[Q,(0,s._)("input",{disabled:"",type:"text",class:"form-control",value:Ce.user.grade,name:"address",placeholder:"Grade"},null,8,X)])]),(0,s._)("div",Y,[(0,s._)("div",ee,[ae,(0,s._)("input",{disabled:"",type:"text",class:"form-control",value:Ce.user.access.access,name:"address",placeholder:"Grade"},null,8,le)])])])],2),(0,s._)("div",{class:(0,t.C_)(["tab-pane fade h-100","config"===e.$route.params.task?"show active":""]),id:"settings",role:"tabpanel","aria-labelledby":"pills-profile-tab"},[(0,s._)("div",se,[(0,s._)("div",te,[(0,s._)("div",ie,[ne,(0,s._)("input",{type:"text",disabled:"",class:"form-control",name:"name",placeholder:"Adresse email",value:Ce.user.nom_complet},null,8,oe)])]),(0,s._)("div",re,[(0,s._)("div",de,[ue,(0,s._)("input",{type:"text",disabled:"",value:Ce.user.email,class:"form-control",name:"name",placeholder:"Email"},null,8,ce)])]),(0,s._)("div",pe,[(0,s._)("form",{id:"formRequest",class:"needs-validation",onSubmit:a[3]||(a[3]=(0,i.iM)(((...e)=>Ce.submitReset&&Ce.submitReset(...e)),["prevent"])),novalidate:""},[(0,s._)("div",me,[ve,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",name:"name",placeholder:"Entrez votre ancien mot de passe...","onUpdate:modelValue":a[0]||(a[0]=e=>qe.userData.current_pass=e),required:""},null,512),[[i.nr,qe.userData.current_pass]]),_e]),(0,s._)("div",fe,[ge,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",name:"name",placeholder:"Saisir un nouveau mot de passe...","onUpdate:modelValue":a[1]||(a[1]=e=>qe.userData.new_pass=e),required:""},null,512),[[i.nr,qe.userData.new_pass]]),be]),(0,s._)("div",he,[we,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",name:"name",placeholder:"Retapez le nouveau mot de passe...","onUpdate:modelValue":a[2]||(a[2]=e=>qe.userData.confirm=e),required:qe.userData.new_pass!==qe.userData.confirm},null,8,ye),[[i.nr,qe.userData.confirm]]),ke]),(0,s._)("button",{type:"submit",disabled:qe.requestLoading,class:"btn btn-primary btn-block",id:"btnRequest"},[qe.requestLoading?((0,s.wg)(),(0,s.iD)("i",xe)):((0,s.wg)(),(0,s.iD)("i",Se)),(0,s.Uk)(" Soumettre les modifications")],8,De)],32)])])],2)])])])])])])])])}var Ce=l(7877);const Ee={class:"form-group form-group-default"},Ue=["disabled","placeholder"];function ze(e,a,l,n,o,r){return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("div",Ee,[o.disableState?((0,s.wg)(),(0,s.iD)("span",{key:0,style:{cursor:"pointer"},onClick:a[0]||(a[0]=e=>r.toggleEdit()),class:"fa fa-pencil-alt pull-right"})):((0,s.wg)(),(0,s.iD)("span",{key:1,style:{cursor:"pointer"},onClick:a[1]||(a[1]=e=>r.updateValue()),class:"fa fa-check pull-right"})),(0,s._)("label",null,(0,t.zw)(l.label),1),(0,s.wy)((0,s._)("input",{type:"text",disabled:o.disableState,class:"form-control",name:"name",placeholder:l.placeholder,"onUpdate:modelValue":a[2]||(a[2]=e=>o.inputValue=e)},null,8,Ue),[[i.nr,o.inputValue]])])])}var Ve={name:"input",data(){return{disableState:!0,inputValue:this.val}},props:{label:String,agentId:Number,inputName:String,val:String,placeholder:String,disabled:{type:Boolean,default:!0},mounted(){}},methods:{enableEdit(){this.disableState=!1},toggleEdit(){this.disableState?this.disableState=!1:this.disableState=!0},updateValue(){console.log("update value..."),console.log(this.agentId),console.log(this.inputName),console.log(this.inputValue);var e=new FormData;e.append("agent_id",this.agentId),e.append(this.inputName,this.inputValue),this.toggleEdit(),Ce.Z.editAgent(e,(e=>{console.log("agent updated..."),console.log(e)}))}}},Re=l(3744);const Le=(0,Re.Z)(Ve,[["render",ze]]);var Ne=Le,$e={name:"UserProfile",components:{InputWidget:Ne},data(){return{userData:{current_pass:"",new_pass:"",confirm:"",agent_id:""},requestLoading:!1}},methods:{submitReset(e){this.$validForm("formRequest",e,((e,a)=>{e?(this.requestLoading=!0,this.userData.agent_id=this.user.agent_id,Ce.Z.resetPassword(this.userData).then((e=>{this.requestLoading=!1,null!=e?(Swal({title:"Opération effectuée !",text:"Le nouveau mot de passe a été mis à jour avec succès !",icon:"success",timer:2e3,showConfirmButton:!1,showCancelButton:!1}),this.userData.current_pass="",this.userData.new_pass="",this.userData.confirm=""):Swal({title:"Echec de l'opération !",text:"Ancien mot de passe saisi est erroné !",icon:"warning",timer:2e3,showConfirmButton:!1,showCancelButton:!1})})).catch((e=>{console.log(e),this.requestLoading=!1,$.notify({icon:"fas fa-info",title:"Opération echoué!",message:"Une erreur est survenue lors de traitement des informations de l'utilisateur !"},{type:"danger",placement:{from:"bottom",align:"right"},time:5e3})}))):this.$animatedFailedTask("btnRequest")}))}},computed:{user:function(){var e=this.$store.getters.GET_USERPROFILE;return e}},mounted(){}};const Be=(0,Re.Z)($e,[["render",qe]]);var Ae=Be}}]);
//# sourceMappingURL=289.90591c93.js.map