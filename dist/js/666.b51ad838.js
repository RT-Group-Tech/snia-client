"use strict";(self["webpackChunksnia"]=self["webpackChunksnia"]||[]).push([[666,908],{3446:function(t,e,s){s.d(e,{Z:function(){return k}});var a=s(6252),n=s(9963);const i=(0,a._)("label",{for:"to",class:"col-form-label mb-2"},"Désignation secteur",-1),o=["onUpdate:modelValue"],r={class:"input-group-append"},c=(0,a._)("i",{class:"flaticon-add"},null,-1),l=[c],u=["onClick"],d=(0,a._)("i",{class:"icon-trash"},null,-1),m=[d],p=["disabled"],b={key:0,class:"fa fa-spinner fa-spin mr-2"},f=(0,a._)("button",{type:"button",class:"btn btn-danger","data-dismiss":"modal"},"Fermer",-1);function g(t,e,s,c,d,g){const h=(0,a.up)("bs-modal");return(0,a.wg)(),(0,a.j4)(h,{onSubmit:g.submitSecteur,id:"secteurCreateModal",title:"Création secteur",size:"modal-lg"},{"body-content":(0,a.w5)((()=>[(0,a._)("div",null,[i,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(d.forms,((t,s)=>((0,a.wg)(),(0,a.iD)("div",{class:"input-group mb-3",key:s},[(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":e=>t.secteur=e,placeholder:"Entrer la désignation secteur...",class:"form-control",required:""},null,8,o),[[n.nr,t.secteur]]),(0,a._)("div",r,[0===s?((0,a.wg)(),(0,a.iD)("button",{key:0,onClick:e[0]||(e[0]=(0,n.iM)(((...t)=>g.addField&&g.addField(...t)),["prevent"])),class:"btn btn-primary btn-icon",type:"submit"},l)):((0,a.wg)(),(0,a.iD)("button",{key:1,onClick:(0,n.iM)((t=>d.forms.splice(s,1)),["prevent"]),class:"btn btn-dark btn-icon"},m,8,u))])])))),128))])])),"footer-content":(0,a.w5)((()=>[(0,a._)("button",{type:"submit",disabled:d.submitLoading,id:"forms-submit-btn",class:"btn btn-success mr-1"},[d.submitLoading?((0,a.wg)(),(0,a.iD)("i",b)):(0,a.kq)("",!0),(0,a.Uk)("Soumettre les données")],8,p),f])),_:1},8,["onSubmit"])}s(7658);var h=s(5549),_={name:"ita-secteurs-create-modal",data(){return{submitLoading:!1,forms:[]}},mounted(){this.addField()},computed:{ita(){return this.$store.state.ita.currentIta}},methods:{submitSecteur(t){this.submitLoading=!0,h.Z.creerSecteur(this.forms,(t=>{this.submitLoading=!1,t&&($("#secteurCreateModal").modal("hide"),this.$store.dispatch("ita/voirSecteurs"),Swal({title:"Succès !",text:"Opération effectuée avec succès !",icon:"success",timer:3e3,showCancelButton:!1,showConfirmButton:!1}))}))},addField(){this.forms.push({secteur:"",ita_id:this.ita.ita_id})}}},v=s(3744);const w=(0,v.Z)(_,[["render",g]]);var k=w},3441:function(t,e,s){s.r(e),s.d(e,{default:function(){return D}});var a=s(6252),n=s(3577),i=s(9963);const o={class:"main-panel"},r={class:"bg-primary2 pt-4 pb-5"},c={class:"container text-white py-2"},l={class:"d-flex align-items-center"},u={class:"mr-3"},d={class:"mb-3"},m=(0,a._)("h5",{class:"op-7 mb-3"},"Inspéction Territoriale Agricole de la Rép. Dém du Congo",-1),p={class:"ml-auto"},b=(0,a._)("i",{class:"icon-docs"},null,-1),f={class:"container mt--5"},g=(0,a._)("div",{class:"page-inner mt--3"},null,-1),h={class:"row"};function _(t,e,s,_,v,w){const k=(0,a.up)("data-collect-page"),y=(0,a.up)("secteur-create-modal"),C=(0,a.up)("report-modal");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",o,[(0,a._)("div",r,[(0,a._)("div",c,[(0,a._)("div",l,[(0,a._)("div",u,[(0,a._)("h1",d,"Bienvenue sur le module "+(0,n.zw)(w.user.access.access),1),m]),(0,a._)("div",p,[(0,a._)("button",{type:"button",class:"btn btn-light",onClick:e[0]||(e[0]=(0,i.iM)((e=>t.$showBsModal("report-modal")),["prevent"]))},[b,(0,a.Uk)(" Rapport")])])])])]),(0,a._)("div",f,[g,(0,a._)("div",h,[(0,a.Wm)(k)])])]),(0,a.Wm)(y),(0,a.Wm)(C)],64)}var v=s(8016),w=s(3446),k=s(9404),y={name:"ItaDashboard",components:{SecteurCreateModal:w.Z,reportModal:k.Z,dataCollectPage:v["default"]},computed:{user(){return this.$store.getters["auth/GET_USER"]}}},C=s(3744);const S=(0,C.Z)(y,[["render",_]]);var D=S}}]);
//# sourceMappingURL=666.b51ad838.js.map