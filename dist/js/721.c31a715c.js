"use strict";(self["webpackChunksnia"]=self["webpackChunksnia"]||[]).push([[721],{3268:function(a,e,n){n.r(e)},678:function(a,e){e["Z"]={async mounted(){await this.$store.dispatch("auth/refreshLoggedUser")},computed:{user(){return this.$store.getters["auth/GET_USER"]}},methods:{async logout(){await this.$router.replace({name:"login"}),await this.$store.dispatch("auth/loggedOut"),await this.$store.dispatch("auth/refreshLoggedUser")}}}},4098:function(a,e){function n(){$('*[data-background-color="custom"]').each((function(){$(this).is("[custom-color]")?($(this).css("background",$(this).attr("custom-color")),$(this).children(".nav-top").length>0&&$(this).children(".nav-top").css("background",$(this).attr("custom-color"))):$(this).is("[custom-background]")&&($(this).css("background-image","url("+$(this).attr("custom-background")+")"),$(this).children(".nav-top").length>0&&$(this).children(".nav-top").css("background-image","url("+$(this).attr("custom-background")+")"))}))}function o(){var a=0;$(window).bind("scroll",(function(){var e=$(this).scrollTop(),n=$(".main-header").outerHeight()+150;Math.abs(a-e)<=5||(e>a&&e>n?$(".main-header").removeClass("up"):e+$(window).height()<$(document).height()&&$(".main-header").addClass("up"),$(window).scrollTop()>n?$(".main-header").addClass("fixed"):($(".main-header").removeClass("fixed"),$(".main-header").removeClass("up")),a=e)}))}e["Z"]={created(){this.fixedMainHeader(),this.customBackgroundColor()},methods:{fixedMainHeader:o,customBackgroundColor:n}}},2721:function(a,e,n){n.r(e),n.d(e,{default:function(){return G}});var o=n(6252);const t={class:"wrapper scrollbar-inner horizontal-layout-3"};function r(a,e,n,r,s,i){const l=(0,o.up)("min-main-header"),c=(0,o.up)("router-view"),d=(0,o.up)("min-main-footer");return(0,o.wg)(),(0,o.iD)("div",t,[(0,o.Wm)(l),(0,o.Wm)(c),(0,o.Wm)(d)])}n(7658);var s=n(9963);const i={class:"main-header no-box-shadow","data-background-color":"blue2"},l={class:"nav-top"},c={class:"container d-flex flex-row"},d=(0,o.uE)('<button class="navbar-toggler sidenav-toggler2 ml-auto" type="button" data-toggle="collapse" data-target="collapse" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"><i class="icon-menu"></i></span></button><button class="topbar-toggler more"><i class="icon-options-vertical"></i></button>',2),u={class:"navbar navbar-header-left navbar-expand-lg p-0"},h={class:"navbar-nav page-navigation pl-md-3"},p=(0,o._)("h3",{class:"title-menu d-flex d-lg-none"},[(0,o.Uk)(" Menu "),(0,o._)("div",{class:"close-menu"},[(0,o._)("i",{class:"flaticon-cross"})])],-1),m={class:"nav-item active"},v=(0,o._)("li",{class:"nav-item dropdown"},[(0,o._)("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}," Menu ")],-1),g={class:"navbar navbar-header navbar-expand-lg p-0"},f={class:"container-fluid p-0"},b={class:"navbar-nav topbar-nav ml-md-auto align-items-center"},w=(0,o._)("li",{class:"nav-item dropdown hidden-caret"},[(0,o._)("a",{class:"nav-link dropdown-toggle","data-toggle":"dropdown",href:"#",role:"button","aria-expanded":"false","aria-haspopup":"true"},[(0,o._)("i",{class:"fa fa-search"})]),(0,o._)("ul",{class:"dropdown-menu dropdown-search animated fadeIn"},[(0,o._)("form",{class:"navbar-left navbar-form nav-search"},[(0,o._)("div",{class:"input-group"},[(0,o._)("input",{type:"text",placeholder:"Recherche ...",class:"form-control"})])])])],-1);function _(a,e,n,t,r,$){const _=(0,o.up)("logo"),k=(0,o.up)("user-menu");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("div",l,[(0,o._)("div",c,[d,(0,o._)("a",{href:"javascript:void(0)",onClick:e[0]||(e[0]=(0,s.iM)((e=>a.$router.push({name:"ministre-dashboard-route"})),["prevent"])),class:"logo d-flex align-items-center justify-content-center mt-2"},[(0,o.Wm)(_)]),(0,o._)("nav",u,[(0,o._)("ul",h,[p,(0,o._)("li",m,[(0,o._)("a",{class:"nav-link",href:"javascript:void(0)",onClick:e[1]||(e[1]=(0,s.iM)((e=>a.$router.push({name:"ministre-dashboard-route"})),["prevent"])),id:"navbarDropdown",role:"button"}," Tableau de bord ")]),v])]),(0,o._)("nav",g,[(0,o._)("div",f,[(0,o._)("ul",b,[w,(0,o.Wm)(k)])])])])])])}var k=n(678),x={mixins:[k.Z]},C=n(3744);const M=(0,C.Z)(x,[["render",_]]);var y=M;const Z={class:"footer"},T=(0,o.uE)('<div class="container"><nav class="pull-left"><ul class="nav"><li class="nav-item"><a class="nav-link" href="#"> SNIA rdc </a></li></ul></nav><div class="copyright ml-auto"> powered <i class="icon-globe text-info"></i> by <a href="rtgroup-rdc.com">RT GROUP</a></div></div>',1),D=[T];function U(a,e){return(0,o.wg)(),(0,o.iD)("footer",Z,D)}const W={},E=(0,C.Z)(W,[["render",U]]);var H=E,R=n(4098),j={name:"minModule",mixins:[R.Z],components:{minMainHeader:y,minMainFooter:H},mounted(){$(".scrollbar-inner").scrollbar()},beforeMount(){n(3268)},unmounted(){this.$router.go()}};const B=(0,C.Z)(j,[["render",r]]);var G=B}}]);
//# sourceMappingURL=721.c31a715c.js.map