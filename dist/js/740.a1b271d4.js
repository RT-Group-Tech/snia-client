"use strict";(self["webpackChunksnia"]=self["webpackChunksnia"]||[]).push([[740],{3268:function(a,e,t){t.r(e)},678:function(a,e){e["Z"]={async mounted(){await this.$store.dispatch("auth/refreshLoggedUser")},computed:{user(){return this.$store.getters["auth/GET_USER"]}},methods:{async logout(){await this.$router.replace({name:"login"}),await this.$store.dispatch("auth/loggedOut"),await this.$store.dispatch("auth/refreshLoggedUser")}}}},4098:function(a,e){function t(){$('*[data-background-color="custom"]').each((function(){$(this).is("[custom-color]")?($(this).css("background",$(this).attr("custom-color")),$(this).children(".nav-top").length>0&&$(this).children(".nav-top").css("background",$(this).attr("custom-color"))):$(this).is("[custom-background]")&&($(this).css("background-image","url("+$(this).attr("custom-background")+")"),$(this).children(".nav-top").length>0&&$(this).children(".nav-top").css("background-image","url("+$(this).attr("custom-background")+")"))}))}function n(){var a=0;$(window).bind("scroll",(function(){var e=$(this).scrollTop(),t=$(".main-header").outerHeight()+150;Math.abs(a-e)<=5||(e>a&&e>t?$(".main-header").removeClass("up"):e+$(window).height()<$(document).height()&&$(".main-header").addClass("up"),$(window).scrollTop()>t?$(".main-header").addClass("fixed"):($(".main-header").removeClass("fixed"),$(".main-header").removeClass("up")),a=e)}))}e["Z"]={created(){this.fixedMainHeader(),this.customBackgroundColor()},methods:{fixedMainHeader:n,customBackgroundColor:t}}},8740:function(a,e,t){t.r(e),t.d(e,{default:function(){return ea}});var n=t(6252);const o={class:"wrapper horizontal-layout-3"};function s(a,e,t,s,r,i){const l=(0,n.up)("main-header"),d=(0,n.up)("router-view"),c=(0,n.up)("main-footer"),u=(0,n.up)("create-fertilisant-modal");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n.Wm)(l),(0,n.Wm)(d),(0,n.Wm)(c),(0,n.Wm)(u)])}t(7658);var r=t(9963);const i={class:"main-header no-box-shadow","data-background-color":"blue2"},l={class:"nav-top"},d={class:"container d-flex flex-row"},c=(0,n.uE)('<button class="navbar-toggler sidenav-toggler2 ml-auto" type="button" data-toggle="collapse" data-target="collapse" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"><i class="icon-menu"></i></span></button><button class="topbar-toggler more"><i class="icon-options-vertical"></i></button>',2),u={href:"",class:"logo d-flex align-items-center justify-content-center mt-2"},m={class:"navbar navbar-header-left navbar-expand-lg p-0"},p={class:"navbar-nav page-navigation pl-md-3"},h=(0,n._)("h3",{class:"title-menu d-flex d-lg-none"},[(0,n.Uk)(" Menu "),(0,n._)("div",{class:"close-menu"},[(0,n._)("i",{class:"flaticon-cross"})])],-1),f={class:"nav-item active"},v={class:"nav-item"},g={class:"nav-item dropdown"},b=(0,n._)("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}," Menu ",-1),w={class:"dropdown-menu animated fadeIn","aria-labelledby":"navbarDropdown"},_=(0,n._)("a",{class:"dropdown-item",href:"javascript:void(0)"},"Voir fertilisants",-1),$={class:"navbar navbar-header navbar-expand-lg p-0"},k={class:"container-fluid p-0"},x={class:"navbar-nav topbar-nav ml-md-auto align-items-center"},C=(0,n._)("li",{class:"nav-item dropdown hidden-caret"},[(0,n._)("a",{class:"nav-link dropdown-toggle","data-toggle":"dropdown",href:"#",role:"button","aria-expanded":"false","aria-haspopup":"true"},[(0,n._)("i",{class:"fa fa-search"})]),(0,n._)("ul",{class:"dropdown-menu dropdown-search animated fadeIn"},[(0,n._)("form",{class:"navbar-left navbar-form nav-search"},[(0,n._)("div",{class:"input-group"},[(0,n._)("input",{type:"text",placeholder:"Recherche ...",class:"form-control"})])])])],-1);function y(a,e,t,o,s,y){const F=(0,n.up)("logo"),M=(0,n.up)("user-menu");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("div",l,[(0,n._)("div",d,[c,(0,n._)("a",u,[(0,n.Wm)(F)]),(0,n._)("nav",m,[(0,n._)("ul",p,[h,(0,n._)("li",f,[(0,n._)("a",{class:"nav-link",href:"javascript:void(0)",onClick:e[0]||(e[0]=(0,r.iM)((e=>a.$router.push({name:"senafic-dashboard-route"})),["prevent"])),id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}," Tableau de bord ")]),(0,n._)("li",v,[(0,n._)("a",{class:"nav-link",href:"javascript:void(0)",onClick:e[1]||(e[1]=(0,r.iM)((e=>a.$router.push({name:"senafic-collect-route"})),["prevent"])),id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}," Données collectées ")]),(0,n._)("li",g,[b,(0,n._)("div",w,[(0,n._)("a",{class:"dropdown-item",href:"javascript:void(0)",onClick:e[2]||(e[2]=(0,r.iM)((e=>a.$showBsModal("createFertilisantModal")),["prevent"]))},"Ajouter fertilisant"),_])])])]),(0,n._)("nav",$,[(0,n._)("div",k,[(0,n._)("ul",x,[C,(0,n.Wm)(M)])])])])])])}var F=t(678),M={mixins:[F.Z]},L=t(3744);const U=(0,L.Z)(M,[["render",y]]);var D=U;const Z={class:"footer"},j=(0,n.uE)('<div class="container"><nav class="pull-left"><ul class="nav"><li class="nav-item"><a class="nav-link" href="#"> SNIA rdc </a></li></ul></nav><div class="copyright ml-auto"> powered <i class="icon-globe text-info"></i> by <a href="rtgroup-rdc.com">RT GROUP</a></div></div>',1),S=[j];function E(a,e){return(0,n.wg)(),(0,n.iD)("footer",Z,S)}const I={},T=(0,L.Z)(I,[["render",E]]);var W=T;const B={class:"row m-0"},H={class:"col-md-12"},R={class:"mb-1"},q=(0,n._)("label",{class:"fw-bold mb-1"},[(0,n.Uk)("Libellé du fertilisant "),(0,n._)("sup",{class:"text-danger"},"*")],-1),O={class:"col-md-12"},z={class:"mb-1"},A=(0,n._)("label",{class:"fw-bold mb-1"},[(0,n.Uk)("L'image du fertilisant "),(0,n._)("sup",{class:"text-danger"},"*")],-1),G=["disabled"],N={key:0,class:"fa fa-spinner fa-spin mr-2"};function V(a,e,t,o,s,i){const l=(0,n.up)("bs-modal");return(0,n.wg)(),(0,n.j4)(l,{onSubmit:i.submitForm,id:"createFertilisantModal",title:"Nouveau fertilisant",size:"modal-lg"},{"body-content":(0,n.w5)((()=>[(0,n._)("div",B,[(0,n._)("div",H,[(0,n._)("div",R,[q,(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>s.form.libelle=a),class:"form-control",placeholder:"Entrer le libellé du fertilisant...",required:""},null,512),[[r.nr,s.form.libelle]])])]),(0,n._)("div",O,[(0,n._)("div",z,[A,(0,n._)("input",{type:"file",ref:"inputFile",onChange:e[1]||(e[1]=(...a)=>i.uploadImage&&i.uploadImage(...a)),class:"form-control",required:""},null,544)])])])])),"footer-content":(0,n.w5)((()=>[(0,n._)("button",{type:"submit",disabled:s.formLoading,id:"forms-submit-btn",class:"btn btn-success mr-1"},[s.formLoading?((0,n.wg)(),(0,n.iD)("i",N)):(0,n.kq)("",!0),(0,n.Uk)("Soumettre les données")],8,G),(0,n._)("button",{type:"button",class:"btn btn-danger","data-dismiss":"modal",onClick:e[2]||(e[2]=(0,r.iM)(((...a)=>i.cleanField&&i.cleanField(...a)),["prevent"]))},"Fermer")])),_:1},8,["onSubmit"])}var P=t(6007),J={name:"CreateFertilisantModal",data(){return{formLoading:!1,form:{libelle:"",image:""}}},methods:{cleanField(){this.form.image="",this.form.libelle=""},uploadImage(a){this.form.image=a.target.files[0]},submitForm(a){this.formLoading=!0,P.Z.creerFertilisant(this.form).then((a=>{this.formLoading=!1,a&&(this.cleanField(),this.$refs.inputFile.value=null,this.$store.dispatch("senafic/viewFertilisants"),Swal({icon:"success",title:"Effectué avec succès !",text:"Le nouveau fertilisant a été ajouté avec success !",timer:3e3,showConfirmButton:!1}))})).catch((a=>{this.formLoading=!1,Swal({icon:"warning",title:"Echec de l'Opération !",text:"Une erreur est servenue lors de l'envoi de données au serveur!",timer:3e3,showConfirmButton:!1})}))}}};const K=(0,L.Z)(J,[["render",V]]);var Q=K,X=t(4098),Y={name:"SenaficModule",mixins:[X.Z],components:{mainHeader:D,mainFooter:W,createFertilisantModal:Q},beforeMount(){t(3268)},unmounted(){this.$router.go()}};const aa=(0,L.Z)(Y,[["render",s]]);var ea=aa}}]);
//# sourceMappingURL=740.a1b271d4.js.map