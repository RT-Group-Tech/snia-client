"use strict";(self["webpackChunksnia"]=self["webpackChunksnia"]||[]).push([[532],{1532:function(e,t,n){n.r(t),n.d(t,{default:function(){return D}});var r=n(6252),s=n(9963);const a={class:"main-panel"},o={class:"container"},i=(0,r._)("div",{class:"panel-header"},[(0,r._)("div",{class:"page-inner"},[(0,r._)("div",{class:"page-header"},[(0,r._)("h4",{class:"page-title"},"Générer Rapport")])])],-1),l={class:"page-inner mt--5"},p={class:"row"},c={class:"col-md-12"},d={class:"form-group mb-4 p-0"},u=(0,r._)("label",null,[(0,r._)("span",{class:"fa fa-calendar-alt"}),(0,r.Uk)(" Sélectionner dates")],-1),g={class:"input-group"},h=(0,r.uE)('<div class="input-group-prepend"><span class="input-group-text bg-light text-muted"><i class="icon-magnifier"></i></span></div><input type="date" class="form-control" id="datepicker1" placeholder="Du..."><input type="date" placeholder="Au..." class="form-control" id="datepicker2">',3),v={class:"input-group-append"},f={key:0,class:"row"},m={class:"col-md-12"},_={style:{"min-height":"300px",display:"flex","justify-content":"center"}},b=["href"],k=(0,r._)("span",{class:"fa fa-download"},null,-1);function y(e,t,n,y,R,w){const G=(0,r.up)("section-loader"),x=(0,r.up)("d-footer");return(0,r.wg)(),(0,r.iD)("div",a,[(0,r._)("div",o,[i,(0,r._)("div",l,[(0,r._)("div",p,[(0,r._)("div",c,[(0,r._)("div",d,[u,(0,r._)("div",g,[h,(0,r._)("div",v,[(0,r._)("button",{type:"button",class:"btn btn-success",style:{"text-transform":"uppercase","font-weight":"bold"},onClick:t[0]||(t[0]=(0,s.iM)(((...e)=>w.generateReport&&w.generateReport(...e)),["prevent"]))}," Générer")])])])])]),R.launchedReportGeneration?((0,r.wg)(),(0,r.iD)("div",f,[(0,r._)("div",m,[(0,r.Wm)(G,{loading:R.processing},{default:(0,r.w5)((()=>[(0,r._)("div",_,[(0,r._)("div",null,[(0,r._)("a",{href:R.reportGenerated,target:"_blank",class:"btn btn",style:{border:"1px solid blue","border-radius":"5px","margin-top":"120px"}},[k,(0,r.Uk)(" Télécharger rapport")],8,b)])])])),_:1},8,["loading"])])])):(0,r.kq)("",!0)])]),"ipa-collect-route"===e.$route.name?((0,r.wg)(),(0,r.j4)(x,{key:0})):(0,r.kq)("",!0)])}var R=n(3096),w={name:"reporting-page",components:{sectionLoader:R.Z},data(){return{reportDocumentReady:!1,launchedReportGeneration:!1,reportGenerated:null,processing:!0}},methods:{generateReport(){this.reset(),this.launchedReportGeneration=!0,this.$store.dispatch("generateReporting").then((e=>{console.log("res:"),console.log(e),void 0!==e.reponse&&(e=e.reponse,void 0!==e.status&&"success"===e.status&&(this.processing=!1,this.reportGenerated=e.document))}))},reset(){this.reportDocumentReady=!1,this.launchedReportGeneration=!1,this.reportGenerated=null,this.processing=!0}}},G=n(3744);const x=(0,G.Z)(w,[["render",y]]);var D=x}}]);
//# sourceMappingURL=532.68dd9196.js.map