"use strict";(self["webpackChunksnia"]=self["webpackChunksnia"]||[]).push([[785],{3268:function(a,e,o){o.r(e)},678:function(a,e){e["Z"]={async mounted(){await this.$store.dispatch("auth/refreshLoggedUser")},computed:{user(){return this.$store.getters["auth/GET_USER"]}},methods:{async logout(){await this.$router.replace({name:"login"}),await this.$store.dispatch("auth/loggedOut"),await this.$store.dispatch("auth/refreshLoggedUser")}}}},4098:function(a,e){function o(){$('*[data-background-color="custom"]').each((function(){$(this).is("[custom-color]")?($(this).css("background",$(this).attr("custom-color")),$(this).children(".nav-top").length>0&&$(this).children(".nav-top").css("background",$(this).attr("custom-color"))):$(this).is("[custom-background]")&&($(this).css("background-image","url("+$(this).attr("custom-background")+")"),$(this).children(".nav-top").length>0&&$(this).children(".nav-top").css("background-image","url("+$(this).attr("custom-background")+")"))}))}function n(){var a=0;$(window).bind("scroll",(function(){var e=$(this).scrollTop(),o=$(".main-header").outerHeight()+150;Math.abs(a-e)<=5||(e>a&&e>o?$(".main-header").removeClass("up"):e+$(window).height()<$(document).height()&&$(".main-header").addClass("up"),$(window).scrollTop()>o?$(".main-header").addClass("fixed"):($(".main-header").removeClass("fixed"),$(".main-header").removeClass("up")),a=e)}))}e["Z"]={created(){this.fixedMainHeader(),this.customBackgroundColor()},methods:{fixedMainHeader:n,customBackgroundColor:o}}},8785:function(a,e,o){o.r(e),o.d(e,{default:function(){return G}});var n=o(6252);const t={class:"wrapper scrollbar-inner horizontal-layout-3"};function r(a,e,o,r,s,i){const l=(0,n.up)("main-header"),c=(0,n.up)("router-view"),d=(0,n.up)("main-footer");return(0,n.wg)(),(0,n.iD)("div",t,[(0,n.Wm)(l),(0,n.Wm)(c),(0,n.Wm)(d)])}o(7658);var s=o(9963);const i={class:"main-header no-box-shadow","data-background-color":"blue2"},l={class:"nav-top"},c={class:"container d-flex flex-row"},d=(0,n.uE)('<button class="navbar-toggler sidenav-toggler2 ml-auto" type="button" data-toggle="collapse" data-target="collapse" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"><i class="icon-menu"></i></span></button><button class="topbar-toggler more"><i class="icon-options-vertical"></i></button>',2),u={class:"navbar navbar-header-left navbar-expand-lg p-0"},h={class:"navbar-nav page-navigation pl-md-3"},p=(0,n._)("h3",{class:"title-menu d-flex d-lg-none"},[(0,n.Uk)(" Menu "),(0,n._)("div",{class:"close-menu"},[(0,n._)("i",{class:"flaticon-cross"})])],-1),v={class:"nav-item active"},m={class:"nav-item"},g={class:"navbar navbar-header navbar-expand-lg p-0"},f={class:"container-fluid p-0"},b={class:"navbar-nav topbar-nav ml-md-auto align-items-center"},w=(0,n._)("li",{class:"nav-item dropdown hidden-caret"},[(0,n._)("a",{class:"nav-link dropdown-toggle","data-toggle":"dropdown",href:"#",role:"button","aria-expanded":"false","aria-haspopup":"true"},[(0,n._)("i",{class:"fa fa-search"})]),(0,n._)("ul",{class:"dropdown-menu dropdown-search animated fadeIn"},[(0,n._)("form",{class:"navbar-left navbar-form nav-search"},[(0,n._)("div",{class:"input-group"},[(0,n._)("input",{type:"text",placeholder:"Recherche ...",class:"form-control"})])])])],-1);function k(a,e,o,t,r,$){const k=(0,n.up)("logo"),_=(0,n.up)("user-menu");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("div",l,[(0,n._)("div",c,[d,(0,n._)("a",{href:"javascript:void(0)",onClick:e[0]||(e[0]=(0,s.iM)((e=>a.$router.push({name:"dprodv-dashboard-route"})),["prevent"])),class:"logo d-flex align-items-center justify-content-center mt-2"},[(0,n.Wm)(k)]),(0,n._)("nav",u,[(0,n._)("ul",h,[p,(0,n._)("li",v,[(0,n._)("a",{class:"nav-link",href:"javascript:void(0)",onClick:e[1]||(e[1]=(0,s.iM)((e=>a.$router.push({name:"dprodv-dashboard-route"})),["prevent"])),id:"navbarDropdown",role:"button"}," Tableau de bord ")]),(0,n._)("li",m,[(0,n._)("a",{class:"nav-link",href:"javascript:void(0)",onClick:e[2]||(e[2]=(0,s.iM)((e=>a.$router.push({name:"dprodv-collect-route"})),["prevent"])),id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}," Données collectées ")])])]),(0,n._)("nav",g,[(0,n._)("div",f,[(0,n._)("ul",b,[w,(0,n.Wm)(_)])])])])])])}var _=o(678),x={mixins:[_.Z]},C=o(3744);const M=(0,C.Z)(x,[["render",k]]);var y=M;const D={class:"footer"},Z=(0,n.uE)('<div class="container"><nav class="pull-left"><ul class="nav"><li class="nav-item"><a class="nav-link" href="#"> SNIA rdc </a></li></ul></nav><div class="copyright ml-auto"> powered <i class="icon-globe text-info"></i> by <a href="rtgroup-rdc.com">RT GROUP</a></div></div>',1),T=[Z];function U(a,e){return(0,n.wg)(),(0,n.iD)("footer",D,T)}const W={},j=(0,C.Z)(W,[["render",U]]);var E=j,H=o(4098),R={name:"DprodvModule",mixins:[H.Z],components:{mainHeader:y,mainFooter:E},mounted(){$(".scrollbar-inner").scrollbar()},beforeMount(){o(3268)},unmounted(){this.$router.go()}};const B=(0,C.Z)(R,[["render",r]]);var G=B}}]);
//# sourceMappingURL=785.afb8b969.js.map