"use strict";(self["webpackChunksnia"]=self["webpackChunksnia"]||[]).push([[33],{33:function(e,t,o){o.r(t),o.d(t,{default:function(){return jt}});var l=o(6252);const n={class:"main-panel"},a=(0,l.uE)('<div class="bg-primary2 pt-4 pb-5"><div class="container text-white py-2"><div class="d-flex align-items-center"><div class="mr-3"><h1 class="mb-3">Alertes Phytosanitaires</h1></div></div></div></div>',1),r={class:"container-fluid"},s={class:"page-inner"},i={class:"row full-height"},u={class:"col-md-12"},d={class:"w-100",style:{height:"600px"}};function p(e,t,o,p,c,y){const v=(0,l.up)("l-geo-json"),b=(0,l.up)("l-map");return(0,l.wg)(),(0,l.iD)("div",n,[a,(0,l._)("div",r,[(0,l._)("div",s,[(0,l._)("div",i,[(0,l._)("div",u,[(0,l._)("div",null,[(0,l._)("div",d,[(0,l.Wm)(b,{useGlobalLeaflet:!1},{default:(0,l.w5)((()=>[(0,l.Wm)(v,{geojson:c.geojson,options:c.geojsonOptions},null,8,["geojson","options"])])),_:1})])])])])])])])}var c=o(2262),y=o(9963);const v=(e,t)=>{for(const o of Object.keys(t))e.on(o,t[o])},b=e=>{for(const t of Object.keys(e)){const o=e[t];o&&m(o.cancel)&&o.cancel()}},f=e=>e&&"function"==typeof e.charAt?e.charAt(0).toUpperCase()+e.slice(1):e,m=e=>"function"==typeof e,g=(e,t,o)=>{for(const n in o){const a="set"+f(n);e[a]?(0,l.YP)((()=>o[n]),((t,o)=>{e[a](t,o)})):t[a]&&(0,l.YP)((()=>o[n]),(e=>{t[a](e)}))}},h=(e,t,o={})=>{const l={...o};for(const n in e){const o=t[n],a=e[n];o&&(o&&!0===o.custom||void 0!==a&&(l[n]=a))}return l},O=e=>{const t={},o={};for(const l in e)if(l.startsWith("on")&&!l.startsWith("onUpdate")&&"onReady"!==l){const o=l.slice(2).toLocaleLowerCase();t[o]=e[l]}else o[l]=e[l];return{listeners:t,attrs:o}},S=async e=>{const t=await Promise.all([o.e(431).then(o.t.bind(o,6431,17)),o.e(93).then(o.t.bind(o,7093,17)),o.e(858).then(o.t.bind(o,8858,17))]);delete e.Default.prototype._getIconUrl,e.Default.mergeOptions({iconRetinaUrl:t[0].default,iconUrl:t[1].default,shadowUrl:t[2].default})},j=e=>{const t=(0,c.iH)(((...t)=>console.warn(`Method ${e} has been invoked without being replaced`))),o=(...e)=>t.value(...e);return o.wrapped=t,(0,l.JJ)(e,o),o},L=(e,t)=>e.wrapped.value=t,_="object"==typeof self&&self.self===self&&self||"object"==typeof o.g&&o.g.global===o.g&&o.g||globalThis,P=e=>{const t=(0,l.f3)(e);if(void 0===t)throw new Error(`Attempt to inject ${e.description} before it was provided.`);return t},T=(Symbol.toStringTag,Symbol("useGlobalLeaflet")),C=Symbol("addLayer"),w=Symbol("removeLayer"),B=Symbol("registerControl"),A=Symbol("registerLayerControl"),M=Symbol("canSetParentHtml"),R=Symbol("setParentHtml"),H=Symbol("setIcon"),z=Symbol("bindPopup"),N=Symbol("bindTooltip"),J=Symbol("unbindPopup"),Z=Symbol("unbindTooltip"),I=(Symbol.toStringTag,{options:{type:Object,default:()=>({}),custom:!0}}),k=e=>({options:e.options,methods:{}}),Y=Object.freeze(Object.defineProperty({__proto__:null,componentProps:I,setupComponent:k},Symbol.toStringTag,{value:"Module"})),x={...I,pane:{type:String},attribution:{type:String},name:{type:String,custom:!0},layerType:{type:String,custom:!0},visible:{type:Boolean,custom:!0,default:!0}},G=(e,t,o)=>{const n=P(C),a=P(w),{options:r,methods:s}=k(e),i=h(e,x,r),u=()=>n({leafletObject:t.value}),d=()=>a({leafletObject:t.value}),p={...s,setAttribution(o){d(),t.value.options.attribution=o,e.visible&&u()},setName(){d(),e.visible&&u()},setLayerType(){d(),e.visible&&u()},setVisible(e){t.value&&(e?u():d())},bindPopup(e){t.value&&m(t.value.bindPopup)?t.value.bindPopup(e):console.warn("Attempt to bind popup before bindPopup method available on layer.")},bindTooltip(e){t.value&&m(t.value.bindTooltip)?t.value.bindTooltip(e):console.warn("Attempt to bind tooltip before bindTooltip method available on layer.")},unbindTooltip(){t.value&&(m(t.value.closeTooltip)&&t.value.closeTooltip(),m(t.value.unbindTooltip)&&t.value.unbindTooltip())},unbindPopup(){t.value&&(m(t.value.closePopup)&&t.value.closePopup(),m(t.value.unbindPopup)&&t.value.unbindPopup())},updateVisibleProp(e){o.emit("update:visible",e)}};return(0,l.JJ)(z,p.bindPopup),(0,l.JJ)(N,p.bindTooltip),(0,l.JJ)(J,p.unbindPopup),(0,l.JJ)(Z,p.unbindTooltip),(0,l.Ah)((()=>{p.unbindPopup(),p.unbindTooltip(),d()})),{options:i,methods:p}},X=(e,t)=>{if(e&&t.default)return(0,l.h)("div",{style:{display:"none"}},t.default())},$=Object.freeze(Object.defineProperty({__proto__:null,layerProps:x,render:X,setupLayer:G},Symbol.toStringTag,{value:"Module"})),F={...x,interactive:{type:Boolean,default:void 0},bubblingMouseEvents:{type:Boolean,default:void 0}},U=(e,t,o)=>{const{options:l,methods:n}=G(e,t,o);return{options:h(e,F,l),methods:n}},D=Object.freeze(Object.defineProperty({__proto__:null,interactiveLayerProps:F,setupInteractiveLayer:U},Symbol.toStringTag,{value:"Module"})),E={...F,stroke:{type:Boolean,default:void 0},color:{type:String},weight:{type:Number},opacity:{type:Number},lineCap:{type:String},lineJoin:{type:String},dashArray:{type:String},dashOffset:{type:String},fill:{type:Boolean,default:void 0},fillColor:{type:String},fillOpacity:{type:Number},fillRule:{type:String},className:{type:String}},q=(e,t,o)=>{const{options:n,methods:a}=U(e,t,o),r=h(e,E,n),s=P(w),i={...a,setStroke(e){t.value.setStyle({stroke:e})},setColor(e){t.value.setStyle({color:e})},setWeight(e){t.value.setStyle({weight:e})},setOpacity(e){t.value.setStyle({opacity:e})},setLineCap(e){t.value.setStyle({lineCap:e})},setLineJoin(e){t.value.setStyle({lineJoin:e})},setDashArray(e){t.value.setStyle({dashArray:e})},setDashOffset(e){t.value.setStyle({dashOffset:e})},setFill(e){t.value.setStyle({fill:e})},setFillColor(e){t.value.setStyle({fillColor:e})},setFillOpacity(e){t.value.setStyle({fillOpacity:e})},setFillRule(e){t.value.setStyle({fillRule:e})},setClassName(e){t.value.setStyle({className:e})}};return(0,l.Jd)((()=>{s({leafletObject:t.value})})),{options:r,methods:i}},W=Object.freeze(Object.defineProperty({__proto__:null,pathProps:E,setupPath:q},Symbol.toStringTag,{value:"Module"})),V={...E,radius:{type:Number},latLng:{type:[Object,Array],required:!0,custom:!0}},K=(e,t,o)=>{const{options:l,methods:n}=q(e,t,o),a=h(e,V,l),r={...n,setRadius(e){t.value.setRadius(e)},setLatLng(e){t.value.setLatLng(e)}};return{options:a,methods:r}},Q=Object.freeze(Object.defineProperty({__proto__:null,circleMarkerProps:V,setupCircleMarker:K},Symbol.toStringTag,{value:"Module"})),ee={...V,radius:{type:Number}},te=(e,t,o)=>{const{options:l,methods:n}=K(e,t,o),a=h(e,ee,l),r={...n};return{options:a,methods:r}},oe=Object.freeze(Object.defineProperty({__proto__:null,circleProps:ee,setupCircle:te},Symbol.toStringTag,{value:"Module"})),le=((0,l.aZ)({name:"LCircle",props:ee,setup(e,t){const n=(0,c.iH)(),a=(0,c.iH)(!1),r=(0,l.f3)(T),s=P(C),{options:i,methods:u}=te(e,n,t);return(0,l.bv)((async()=>{const{circle:d}=r?_.L:await o.e(633).then(o.bind(o,6633));n.value=(0,c.Xl)(d(e.latLng,i));const{listeners:p}=O(t.attrs);n.value.on(p),g(u,n.value,e),s({...e,...u,leafletObject:n.value}),a.value=!0,(0,l.Y3)((()=>t.emit("ready",n.value)))})),{ready:a,leafletObject:n}},render(){return X(this.ready,this.$slots)}}),(0,l.aZ)({name:"LCircleMarker",props:V,setup(e,t){const n=(0,c.iH)(),a=(0,c.iH)(!1),r=(0,l.f3)(T),s=P(C),{options:i,methods:u}=K(e,n,t);return(0,l.bv)((async()=>{const{circleMarker:d}=r?_.L:await o.e(633).then(o.bind(o,6633));n.value=(0,c.Xl)(d(e.latLng,i));const{listeners:p}=O(t.attrs);n.value.on(p),g(u,n.value,e),s({...e,...u,leafletObject:n.value}),a.value=!0,(0,l.Y3)((()=>t.emit("ready",n.value)))})),{ready:a,leafletObject:n}},render(){return X(this.ready,this.$slots)}}),{...I,position:{type:String}}),ne=(e,t)=>{const{options:o,methods:n}=k(e),a=h(e,le,o),r={...n,setPosition(e){t.value&&t.value.setPosition(e)}};return(0,l.Ah)((()=>{t.value&&t.value.remove()})),{options:a,methods:r}},ae=e=>e.default?(0,l.h)("div",{ref:"root"},e.default()):null,re=Object.freeze(Object.defineProperty({__proto__:null,controlProps:le,renderLControl:ae,setupControl:ne},Symbol.toStringTag,{value:"Module"})),se=((0,l.aZ)({name:"LControl",props:{...le,disableClickPropagation:{type:Boolean,custom:!0,default:!0},disableScrollPropagation:{type:Boolean,custom:!0,default:!1}},setup(e,t){const n=(0,c.iH)(),a=(0,c.iH)(),r=(0,l.f3)(T),s=P(B),{options:i,methods:u}=ne(e,n);return(0,l.bv)((async()=>{const{Control:d,DomEvent:p}=r?_.L:await o.e(633).then(o.bind(o,6633)),y=d.extend({onAdd(){return a.value}});n.value=(0,c.Xl)(new y(i)),g(u,n.value,e),s({leafletObject:n.value}),e.disableClickPropagation&&a.value&&p.disableClickPropagation(a.value),e.disableScrollPropagation&&a.value&&p.disableScrollPropagation(a.value),(0,l.Y3)((()=>t.emit("ready",n.value)))})),{root:a,leafletObject:n}},render(){return ae(this.$slots)}}),{...le,prefix:{type:String}}),ie=(e,t)=>{const{options:o,methods:l}=ne(e,t),n=h(e,se,o),a={...l,setPrefix(e){t.value.setPrefix(e)}};return{options:n,methods:a}},ue=Object.freeze(Object.defineProperty({__proto__:null,controlAttributionProps:se,setupControlAttribution:ie},Symbol.toStringTag,{value:"Module"})),de=((0,l.aZ)({name:"LControlAttribution",props:se,setup(e,t){const n=(0,c.iH)(),a=(0,l.f3)(T),r=P(B),{options:s,methods:i}=ie(e,n);return(0,l.bv)((async()=>{const{control:u}=a?_.L:await o.e(633).then(o.bind(o,6633));n.value=(0,c.Xl)(u.attribution(s)),g(i,n.value,e),r({leafletObject:n.value}),(0,l.Y3)((()=>t.emit("ready",n.value)))})),{leafletObject:n}},render(){return null}}),{...le,collapsed:{type:Boolean,default:void 0},autoZIndex:{type:Boolean,default:void 0},hideSingleBase:{type:Boolean,default:void 0},sortLayers:{type:Boolean,default:void 0},sortFunction:{type:Function}}),pe=(e,t)=>{const{options:o}=ne(e,t);return{options:h(e,de,o),methods:{addLayer(e){"base"===e.layerType?t.value.addBaseLayer(e.leafletObject,e.name):"overlay"===e.layerType&&t.value.addOverlay(e.leafletObject,e.name)},removeLayer(e){t.value.removeLayer(e.leafletObject)}}}},ce=Object.freeze(Object.defineProperty({__proto__:null,controlLayersProps:de,setupControlLayers:pe},Symbol.toStringTag,{value:"Module"})),ye=((0,l.aZ)({name:"LControlLayers",props:de,setup(e,t){const n=(0,c.iH)(),a=(0,l.f3)(T),r=P(A),{options:s,methods:i}=pe(e,n);return(0,l.bv)((async()=>{const{control:u}=a?_.L:await o.e(633).then(o.bind(o,6633));n.value=(0,c.Xl)(u.layers(void 0,void 0,s)),g(i,n.value,e),r({...e,...i,leafletObject:n.value}),(0,l.Y3)((()=>t.emit("ready",n.value)))})),{leafletObject:n}},render(){return null}}),{...le,maxWidth:{type:Number},metric:{type:Boolean,default:void 0},imperial:{type:Boolean,default:void 0},updateWhenIdle:{type:Boolean,default:void 0}}),ve=(e,t)=>{const{options:o,methods:l}=ne(e,t);return{options:h(e,ye,o),methods:l}},be=Object.freeze(Object.defineProperty({__proto__:null,controlScaleProps:ye,setupControlScale:ve},Symbol.toStringTag,{value:"Module"})),fe=((0,l.aZ)({name:"LControlScale",props:ye,setup(e,t){const n=(0,c.iH)(),a=(0,l.f3)(T),r=P(B),{options:s,methods:i}=ve(e,n);return(0,l.bv)((async()=>{const{control:u}=a?_.L:await o.e(633).then(o.bind(o,6633));n.value=(0,c.Xl)(u.scale(s)),g(i,n.value,e),r({leafletObject:n.value}),(0,l.Y3)((()=>t.emit("ready",n.value)))})),{leafletObject:n}},render(){return null}}),{...le,zoomInText:{type:String},zoomInTitle:{type:String},zoomOutText:{type:String},zoomOutTitle:{type:String}}),me=(e,t)=>{const{options:o,methods:l}=ne(e,t);return{options:h(e,fe,o),methods:l}},ge=Object.freeze(Object.defineProperty({__proto__:null,controlZoomProps:fe,setupControlZoom:me},Symbol.toStringTag,{value:"Module"})),he=((0,l.aZ)({name:"LControlZoom",props:fe,setup(e,t){const n=(0,c.iH)(),a=(0,l.f3)(T),r=P(B),{options:s,methods:i}=me(e,n);return(0,l.bv)((async()=>{const{control:u}=a?_.L:await o.e(633).then(o.bind(o,6633));n.value=(0,c.Xl)(u.zoom(s)),g(i,n.value,e),r({leafletObject:n.value}),(0,l.Y3)((()=>t.emit("ready",n.value)))})),{leafletObject:n}},render(){return null}}),{...x}),Oe=(e,t,o)=>{const{options:n,methods:a}=G(e,t,o),r=h(e,he,n),s={...a,addLayer(e){t.value.addLayer(e.leafletObject)},removeLayer(e){t.value.removeLayer(e.leafletObject)}};return(0,l.JJ)(C,s.addLayer),(0,l.JJ)(w,s.removeLayer),{options:r,methods:s}},Se=Object.freeze(Object.defineProperty({__proto__:null,layerGroupProps:he,setupLayerGroup:Oe},Symbol.toStringTag,{value:"Module"})),je={...he},Le=(e,t,o)=>{const{options:l,methods:n}=Oe(e,t,o),a=h(e,je,l),r={...n};return{options:a,methods:r}},_e=Object.freeze(Object.defineProperty({__proto__:null,featureGroupProps:je,setupFeatureGroup:Le},Symbol.toStringTag,{value:"Module"})),Pe=((0,l.aZ)({props:je,setup(e,t){const n=(0,c.iH)(),a=(0,c.iH)(!1),r=(0,l.f3)(T),s=P(C),{methods:i,options:u}=Le(e,n,t);return(0,l.bv)((async()=>{const{featureGroup:d}=r?_.L:await o.e(633).then(o.bind(o,6633));n.value=(0,c.Xl)(d(void 0,u));const{listeners:p}=O(t.attrs);n.value.on(p),g(i,n.value,e),s({...e,...i,leafletObject:n.value}),a.value=!0,(0,l.Y3)((()=>t.emit("ready",n.value)))})),{ready:a,leafletObject:n}},render(){return X(this.ready,this.$slots)}}),{...he,geojson:{type:[Object,Array],custom:!0},optionsStyle:{type:Function,custom:!0}}),Te=(e,t,o)=>{const{options:l,methods:n}=Oe(e,t,o),a=h(e,Pe,l);Object.prototype.hasOwnProperty.call(e,"optionsStyle")&&(a.style=e.optionsStyle);const r={...n,setGeojson(e){t.value.clearLayers(),t.value.addData(e)},setOptionsStyle(e){t.value.setStyle(e)},getGeoJSONData(){return t.value.toGeoJSON()},getBounds(){return t.value.getBounds()}};return{options:a,methods:r}},Ce=Object.freeze(Object.defineProperty({__proto__:null,geoJSONProps:Pe,setupGeoJSON:Te},Symbol.toStringTag,{value:"Module"})),we=(0,l.aZ)({props:Pe,setup(e,t){const n=(0,c.iH)(),a=(0,c.iH)(!1),r=(0,l.f3)(T),s=P(C),{methods:i,options:u}=Te(e,n,t);return(0,l.bv)((async()=>{const{geoJSON:d}=r?_.L:await o.e(633).then(o.bind(o,6633));n.value=(0,c.Xl)(d(e.geojson,u));const{listeners:p}=O(t.attrs);n.value.on(p),g(i,n.value,e),s({...e,...i,leafletObject:n.value}),a.value=!0,(0,l.Y3)((()=>t.emit("ready",n.value)))})),{ready:a,leafletObject:n}},render(){return X(this.ready,this.$slots)}}),Be={...x,opacity:{type:Number},zIndex:{type:Number},tileSize:{type:[Number,Array,Object]},noWrap:{type:Boolean,default:void 0},minZoom:{type:Number},maxZoom:{type:Number},className:{type:String}},Ae=(e,t,o)=>{const{options:n,methods:a}=G(e,t,o),r=h(e,Be,n),s={...a,setTileComponent(){var e;null==(e=t.value)||e.redraw()}};return(0,l.Ah)((()=>{t.value.off()})),{options:r,methods:s}},Me=(e,t,o,n)=>e.extend({initialize(e){this.tileComponents={},this.on("tileunload",this._unloadTile),o.setOptions(this,e)},createTile(e){const o=this._tileCoordsToKey(e);this.tileComponents[o]=t.create("div");const a=(0,l.h)({setup:n,props:["coords"]},{coords:e});return(0,y.sY)(a,this.tileComponents[o]),this.tileComponents[o]},_unloadTile(e){const t=this._tileCoordsToKey(e.coords);this.tileComponents[t]&&(this.tileComponents[t].innerHTML="",this.tileComponents[t]=void 0)}}),Re=Object.freeze(Object.defineProperty({__proto__:null,CreateVueGridLayer:Me,gridLayerProps:Be,setupGridLayer:Ae},Symbol.toStringTag,{value:"Module"})),He=((0,l.aZ)({props:{...Be,childRender:{type:Function,required:!0}},setup(e,t){const n=(0,c.iH)(),a=(0,c.iH)(null),r=(0,c.iH)(!1),s=(0,l.f3)(T),i=P(C),{options:u,methods:d}=Ae(e,n,t);return(0,l.bv)((async()=>{const{GridLayer:a,DomUtil:p,Util:y}=s?_.L:await o.e(633).then(o.bind(o,6633)),v=Me(a,p,y,e.childRender);n.value=(0,c.Xl)(new v(u));const{listeners:b}=O(t.attrs);n.value.on(b),g(d,n.value,e),i({...e,...d,leafletObject:n.value}),r.value=!0,(0,l.Y3)((()=>t.emit("ready",n.value)))})),{root:a,ready:r,leafletObject:n}},render(){return this.ready?(0,l.h)("div",{style:{display:"none"},ref:"root"}):null}}),{iconUrl:{type:String},iconRetinaUrl:{type:String},iconSize:{type:[Object,Array]},iconAnchor:{type:[Object,Array]},popupAnchor:{type:[Object,Array]},tooltipAnchor:{type:[Object,Array]},shadowUrl:{type:String},shadowRetinaUrl:{type:String},shadowSize:{type:[Object,Array]},shadowAnchor:{type:[Object,Array]},bgPos:{type:[Object,Array]},className:{type:String}}),ze=Object.freeze(Object.defineProperty({__proto__:null,iconProps:He},Symbol.toStringTag,{value:"Module"})),Ne=((0,l.aZ)({name:"LIcon",props:{...He,...I},setup(e,t){const n=(0,c.iH)(),a=(0,l.f3)(T),r=P(M),s=P(R),i=P(H);let u,d,p,y,v;const b=(o,l,n)=>{const a=o&&o.innerHTML;if(!l)return void(n&&v&&r()&&s(a));const{listeners:c}=O(t.attrs);v&&d(v,c);const{options:b}=k(e),f=h(e,He,b);a&&(f.html=a),v=f.html?p(f):y(f),u(v,c),i(v)},f=()=>{(0,l.Y3)((()=>b(n.value,!0,!1)))},m=()=>{(0,l.Y3)((()=>b(n.value,!1,!0)))},S={setIconUrl:f,setIconRetinaUrl:f,setIconSize:f,setIconAnchor:f,setPopupAnchor:f,setTooltipAnchor:f,setShadowUrl:f,setShadowRetinaUrl:f,setShadowAnchor:f,setBgPos:f,setClassName:f,setHtml:f};return(0,l.bv)((async()=>{const{DomEvent:t,divIcon:l,icon:r}=a?_.L:await o.e(633).then(o.bind(o,6633));u=t.on,d=t.off,p=l,y=r,g(S,{},e),new MutationObserver(m).observe(n.value,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),f()})),{root:n}},render(){const e=this.$slots.default?this.$slots.default():void 0;return(0,l.h)("div",{ref:"root"},e)}}),{...x,opacity:{type:Number},alt:{type:String},interactive:{type:Boolean,default:void 0},crossOrigin:{type:Boolean,default:void 0},errorOverlayUrl:{type:String},zIndex:{type:Number},className:{type:String},url:{type:String,required:!0,custom:!0},bounds:{type:[Array,Object],required:!0,custom:!0}}),Je=(e,t,o)=>{const{options:l,methods:n}=G(e,t,o),a=h(e,Ne,l),r={...n,setOpacity(e){return t.value.setOpacity(e)},setUrl(e){return t.value.setUrl(e)},setBounds(e){return t.value.setBounds(e)},getBounds(){return t.value.getBounds()},getElement(){return t.value.getElement()},bringToFront(){return t.value.bringToFront()},bringToBack(){return t.value.bringToBack()},setZIndex(e){return t.value.setZIndex(e)}};return{options:a,methods:r}},Ze=Object.freeze(Object.defineProperty({__proto__:null,imageOverlayProps:Ne,setupImageOverlay:Je},Symbol.toStringTag,{value:"Module"}));(0,l.aZ)({name:"LImageOverlay",props:Ne,setup(e,t){const n=(0,c.iH)(),a=(0,c.iH)(!1),r=(0,l.f3)(T),s=P(C),{options:i,methods:u}=Je(e,n,t);return(0,l.bv)((async()=>{const{imageOverlay:d}=r?_.L:await o.e(633).then(o.bind(o,6633));n.value=(0,c.Xl)(d(e.url,e.bounds,i));const{listeners:p}=O(t.attrs);n.value.on(p),g(u,n.value,e),s({...e,...u,leafletObject:n.value}),a.value=!0,(0,l.Y3)((()=>t.emit("ready",n.value)))})),{ready:a,leafletObject:n}},render(){return X(this.ready,this.$slots)}}),(0,l.aZ)({props:he,setup(e,t){const n=(0,c.iH)(),a=(0,c.iH)(!1),r=(0,l.f3)(T),s=P(C),{methods:i}=Oe(e,n,t);return(0,l.bv)((async()=>{const{layerGroup:u}=r?_.L:await o.e(633).then(o.bind(o,6633));n.value=(0,c.Xl)(u(void 0,e.options));const{listeners:d}=O(t.attrs);n.value.on(d),g(i,n.value,e),s({...e,...i,leafletObject:n.value}),a.value=!0,(0,l.Y3)((()=>t.emit("ready",n.value)))})),{ready:a,leafletObject:n}},render(){return X(this.ready,this.$slots)}});function Ie(e,t,o){var l,n,a;void 0===t&&(t=50),void 0===o&&(o={});var r=null!=(l=o.isImmediate)&&l,s=null!=(n=o.callback)&&n,i=o.maxWait,u=Date.now(),d=[];function p(){if(void 0!==i){var e=Date.now()-u;if(e+t>=i)return i-e}return t}var c=function(){var t=[].slice.call(arguments),o=this;return new Promise((function(l,n){var i=r&&void 0===a;if(void 0!==a&&clearTimeout(a),a=setTimeout((function(){if(a=void 0,u=Date.now(),!r){var l=e.apply(o,t);s&&s(l),d.forEach((function(e){return(0,e.resolve)(l)})),d=[]}}),p()),i){var c=e.apply(o,t);return s&&s(c),l(c)}d.push({resolve:l,reject:n})}))};return c.cancel=function(e){void 0!==a&&clearTimeout(a),d.forEach((function(t){return(0,t.reject)(e)})),d=[]},c}const ke={...I,center:{type:[Object,Array]},bounds:{type:[Array,Object]},maxBounds:{type:[Array,Object]},zoom:{type:Number},minZoom:{type:Number},maxZoom:{type:Number},paddingBottomRight:{type:[Object,Array]},paddingTopLeft:{type:Object},padding:{type:Object},worldCopyJump:{type:Boolean,default:void 0},crs:{type:[String,Object]},maxBoundsViscosity:{type:Number},inertia:{type:Boolean,default:void 0},inertiaDeceleration:{type:Number},inertiaMaxSpeed:{type:Number},easeLinearity:{type:Number},zoomAnimation:{type:Boolean,default:void 0},zoomAnimationThreshold:{type:Number},fadeAnimation:{type:Boolean,default:void 0},markerZoomAnimation:{type:Boolean,default:void 0},noBlockingAnimations:{type:Boolean,default:void 0},useGlobalLeaflet:{type:Boolean,default:!0,custom:!0}},Ye=(0,l.aZ)({inheritAttrs:!1,emits:["ready","update:zoom","update:center","update:bounds"],props:ke,setup(e,t){const n=(0,c.iH)(),a=(0,c.qj)({ready:!1,layersToAdd:[],layersInControl:[]}),{options:r}=k(e),s=h(e,ke,r),{listeners:i,attrs:u}=O(t.attrs),d=j(C),p=j(w),y=j(B),f=j(A);(0,l.JJ)(T,e.useGlobalLeaflet);const m=(0,l.Fl)((()=>{const t={};return e.noBlockingAnimations&&(t.animate=!1),t})),P=(0,l.Fl)((()=>{const t=m.value;return e.padding&&(t.padding=e.padding),e.paddingTopLeft&&(t.paddingTopLeft=e.paddingTopLeft),e.paddingBottomRight&&(t.paddingBottomRight=e.paddingBottomRight),t})),M={moveend:Ie((e=>{a.leafletRef&&(t.emit("update:zoom",a.leafletRef.getZoom()),t.emit("update:center",a.leafletRef.getCenter()),t.emit("update:bounds",a.leafletRef.getBounds()))})),overlayadd(e){const t=a.layersInControl.find((t=>t.name===e.name));t&&t.updateVisibleProp(!0)},overlayremove(e){const t=a.layersInControl.find((t=>t.name===e.name));t&&t.updateVisibleProp(!1)}};(0,l.bv)((async()=>{e.useGlobalLeaflet&&(_.L=_.L||await o.e(243).then(o.t.bind(o,5243,23)));const{map:r,CRS:u,Icon:b,latLngBounds:h,latLng:O,stamp:j}=e.useGlobalLeaflet?_.L:await o.e(633).then(o.bind(o,6633));try{s.beforeMapMount&&await s.beforeMapMount()}catch(w){console.error(`The following error occurred running the provided beforeMapMount hook ${w.message}`)}await S(b);const T="string"==typeof s.crs?u[s.crs]:s.crs;s.crs=T||u.EPSG3857;const C={addLayer(e){void 0!==e.layerType&&(void 0===a.layerControl?a.layersToAdd.push(e):a.layersInControl.find((t=>j(t.leafletObject)===j(e.leafletObject)))||(a.layerControl.addLayer(e),a.layersInControl.push(e))),!1!==e.visible&&a.leafletRef.addLayer(e.leafletObject)},removeLayer(e){void 0!==e.layerType&&(void 0===a.layerControl?a.layersToAdd=a.layersToAdd.filter((t=>t.name!==e.name)):(a.layerControl.removeLayer(e.leafletObject),a.layersInControl=a.layersInControl.filter((t=>j(t.leafletObject)!==j(e.leafletObject))))),a.leafletRef.removeLayer(e.leafletObject)},registerLayerControl(e){a.layerControl=e,a.layersToAdd.forEach((e=>{a.layerControl.addLayer(e)})),a.layersToAdd=[],y(e)},registerControl(e){a.leafletRef.addControl(e.leafletObject)},setZoom(e){const t=a.leafletRef.getZoom();e!==t&&a.leafletRef.setZoom(e,m.value)},setCrs(e){const t=a.leafletRef.getBounds();a.leafletRef.options.crs=e,a.leafletRef.fitBounds(t,{animate:!1,padding:[0,0]})},fitBounds(e){a.leafletRef.fitBounds(e,P.value)},setBounds(e){if(!e)return;const t=h(e);t.isValid()&&!(a.lastSetBounds||a.leafletRef.getBounds()).equals(t,0)&&(a.lastSetBounds=t,a.leafletRef.fitBounds(t))},setCenter(e){if(null==e)return;const t=O(e),o=a.lastSetCenter||a.leafletRef.getCenter();(o.lat!==t.lat||o.lng!==t.lng)&&(a.lastSetCenter=t,a.leafletRef.panTo(t,m.value))}};L(d,C.addLayer),L(p,C.removeLayer),L(y,C.registerControl),L(f,C.registerLayerControl),a.leafletRef=(0,c.Xl)(r(n.value,s)),g(C,a.leafletRef,e),v(a.leafletRef,M),v(a.leafletRef,i),a.ready=!0,(0,l.Y3)((()=>t.emit("ready",a.leafletRef)))})),(0,l.Jd)((()=>{b(M),a.leafletRef&&(a.leafletRef.off(),a.leafletRef.remove())}));const R=(0,l.Fl)((()=>a.leafletRef)),H=(0,l.Fl)((()=>a.ready));return{root:n,ready:H,leafletObject:R,attrs:u}},render({attrs:e}){return e.style||(e.style={}),e.style.width||(e.style.width="100%"),e.style.height||(e.style.height="100%"),(0,l.h)("div",{...e,ref:"root"},this.ready&&this.$slots.default?this.$slots.default():{})}}),xe=["Symbol(Comment)","Symbol(Text)"],Ge=["LTooltip","LPopup"],Xe={...x,draggable:{type:Boolean,default:void 0},icon:{type:[Object]},zIndexOffset:{type:Number},latLng:{type:[Object,Array],custom:!0,required:!0}},$e=(e,t,o)=>{const{options:l,methods:n}=G(e,t,o),a=h(e,Xe,l),r={...n,setDraggable(e){t.value.dragging&&(e?t.value.dragging.enable():t.value.dragging.disable())},latLngSync(e){o.emit("update:latLng",e.latlng),o.emit("update:lat-lng",e.latlng)},setLatLng(e){if(null!=e&&t.value){const o=t.value.getLatLng();(!o||!o.equals(e))&&t.value.setLatLng(e)}}};return{options:a,methods:r}},Fe=(e,t)=>{const o=t.slots.default&&t.slots.default();return o&&o.length&&o.some(Ue)};function Ue(e){return!(xe.includes(e.type.toString())||Ge.includes(e.type.name))}const De=Object.freeze(Object.defineProperty({__proto__:null,markerProps:Xe,setupMarker:$e,shouldBlankIcon:Fe},Symbol.toStringTag,{value:"Module"})),Ee=((0,l.aZ)({name:"LMarker",props:Xe,setup(e,t){const n=(0,c.iH)(),a=(0,c.iH)(!1),r=(0,l.f3)(T),s=P(C);(0,l.JJ)(M,(()=>{var e;return!(null==(e=n.value)||!e.getElement())})),(0,l.JJ)(R,(e=>{var t,o;const l=m(null==(t=n.value)?void 0:t.getElement)&&(null==(o=n.value)?void 0:o.getElement());l&&(l.innerHTML=e)})),(0,l.JJ)(H,(e=>{var t;return(null==(t=n.value)?void 0:t.setIcon)&&n.value.setIcon(e)}));const{options:i,methods:u}=$e(e,n,t),d={moveHandler:Ie(u.latLngSync)};return(0,l.bv)((async()=>{const{marker:p,divIcon:y}=r?_.L:await o.e(633).then(o.bind(o,6633));Fe(i,t)&&(i.icon=y({className:""})),n.value=(0,c.Xl)(p(e.latLng,i));const{listeners:v}=O(t.attrs);n.value.on(v),n.value.on("move",d.moveHandler),g(u,n.value,e),s({...e,...u,leafletObject:n.value}),a.value=!0,(0,l.Y3)((()=>t.emit("ready",n.value)))})),(0,l.Jd)((()=>b(d))),{ready:a,leafletObject:n}},render(){return X(this.ready,this.$slots)}}),{...E,smoothFactor:{type:Number},noClip:{type:Boolean,default:void 0},latLngs:{type:Array,required:!0,custom:!0}}),qe=(e,t,o)=>{const{options:l,methods:n}=q(e,t,o),a=h(e,Ee,l),r={...n,setSmoothFactor(e){t.value.setStyle({smoothFactor:e})},setNoClip(e){t.value.setStyle({noClip:e})},addLatLng(e){t.value.addLatLng(e)}};return{options:a,methods:r}},We=Object.freeze(Object.defineProperty({__proto__:null,polylineProps:Ee,setupPolyline:qe},Symbol.toStringTag,{value:"Module"})),Ve={...Ee},Ke=(e,t,o)=>{const{options:l,methods:n}=qe(e,t,o),a=h(e,Ve,l),r={...n,toGeoJSON(e){return t.value.toGeoJSON(e)}};return{options:a,methods:r}},Qe=Object.freeze(Object.defineProperty({__proto__:null,polygonProps:Ve,setupPolygon:Ke},Symbol.toStringTag,{value:"Module"})),et=((0,l.aZ)({name:"LPolygon",props:Ve,setup(e,t){const n=(0,c.iH)(),a=(0,c.iH)(!1),r=(0,l.f3)(T),s=P(C),{options:i,methods:u}=Ke(e,n,t);return(0,l.bv)((async()=>{const{polygon:d}=r?_.L:await o.e(633).then(o.bind(o,6633));n.value=(0,c.Xl)(d(e.latLngs,i));const{listeners:p}=O(t.attrs);n.value.on(p),g(u,n.value,e),s({...e,...u,leafletObject:n.value}),a.value=!0,(0,l.Y3)((()=>t.emit("ready",n.value)))})),{ready:a,leafletObject:n}},render(){return X(this.ready,this.$slots)}}),(0,l.aZ)({name:"LPolyline",props:Ee,setup(e,t){const n=(0,c.iH)(),a=(0,c.iH)(!1),r=(0,l.f3)(T),s=P(C),{options:i,methods:u}=qe(e,n,t);return(0,l.bv)((async()=>{const{polyline:d}=r?_.L:await o.e(633).then(o.bind(o,6633));n.value=(0,c.Xl)(d(e.latLngs,i));const{listeners:p}=O(t.attrs);n.value.on(p),g(u,n.value,e),s({...e,...u,leafletObject:n.value}),a.value=!0,(0,l.Y3)((()=>t.emit("ready",n.value)))})),{ready:a,leafletObject:n}},render(){return X(this.ready,this.$slots)}}),{...I,content:{type:String,default:null}}),tt=(e,t)=>{const{options:o,methods:l}=k(e),n={...l,setContent(e){t.value&&null!==e&&void 0!==e&&t.value.setContent(e)}};return{options:o,methods:n}},ot=e=>e.default?(0,l.h)("div",{ref:"root"},e.default()):null,lt=Object.freeze(Object.defineProperty({__proto__:null,popperProps:et,render:ot,setupPopper:tt},Symbol.toStringTag,{value:"Module"})),nt={...et,latLng:{type:[Object,Array],default:()=>[]}},at=(e,t)=>{const{options:o,methods:l}=tt(e,t);return{options:o,methods:l}},rt=Object.freeze(Object.defineProperty({__proto__:null,popupProps:nt,setupPopup:at},Symbol.toStringTag,{value:"Module"})),st=((0,l.aZ)({name:"LPopup",props:nt,setup(e,t){const n=(0,c.iH)(),a=(0,c.iH)(null),r=(0,l.f3)(T),s=P(z),i=P(J),{options:u,methods:d}=at(e,n);return(0,l.bv)((async()=>{const{popup:i}=r?_.L:await o.e(633).then(o.bind(o,6633));n.value=(0,c.Xl)(i(u)),void 0!==e.latLng&&n.value.setLatLng(e.latLng),g(d,n.value,e);const{listeners:p}=O(t.attrs);n.value.on(p),n.value.setContent(e.content||a.value||""),s(n.value),(0,l.Y3)((()=>t.emit("ready",n.value)))})),(0,l.Jd)((()=>{i()})),{root:a,leafletObject:n}},render(){return ot(this.$slots)}}),{...Ve,latLngs:{...Ve.latLngs,required:!1},bounds:{type:Object,custom:!0}}),it=(e,t,o)=>{const{options:l,methods:n}=Ke(e,t,o),a=h(e,st,l),r={...n,setBounds(e){t.value.setBounds(e)},setLatLngs(e){t.value.setBounds(e)}};return{options:a,methods:r}},ut=Object.freeze(Object.defineProperty({__proto__:null,rectangleProps:st,setupRectangle:it},Symbol.toStringTag,{value:"Module"})),dt=((0,l.aZ)({name:"LRectangle",props:st,setup(e,t){const n=(0,c.iH)(),a=(0,c.iH)(!1),r=(0,l.f3)(T),s=P(C),{options:i,methods:u}=it(e,n,t);return(0,l.bv)((async()=>{const{rectangle:d,latLngBounds:p}=r?_.L:await o.e(633).then(o.bind(o,6633)),y=e.bounds?p(e.bounds):p(e.latLngs||[]);n.value=(0,c.Xl)(d(y,i));const{listeners:v}=O(t.attrs);n.value.on(v),g(u,n.value,e),s({...e,...u,leafletObject:n.value}),a.value=!0,(0,l.Y3)((()=>t.emit("ready",n.value)))})),{ready:a,leafletObject:n}},render(){return X(this.ready,this.$slots)}}),{...Be,tms:{type:Boolean,default:void 0},subdomains:{type:[String,Array],validator:e=>"string"==typeof e||!!Array.isArray(e)&&e.every((e=>"string"==typeof e))},detectRetina:{type:Boolean,default:void 0},url:{type:String,required:!0,custom:!0}}),pt=(e,t,o)=>{const{options:l,methods:n}=Ae(e,t,o),a=h(e,dt,l),r={...n};return{options:a,methods:r}},ct=Object.freeze(Object.defineProperty({__proto__:null,setupTileLayer:pt,tileLayerProps:dt},Symbol.toStringTag,{value:"Module"})),yt=((0,l.aZ)({props:dt,setup(e,t){const n=(0,c.iH)(),a=(0,l.f3)(T),r=P(C),{options:s,methods:i}=pt(e,n,t);return(0,l.bv)((async()=>{const{tileLayer:u}=a?_.L:await o.e(633).then(o.bind(o,6633));n.value=(0,c.Xl)(u(e.url,s));const{listeners:d}=O(t.attrs);n.value.on(d),g(i,n.value,e),r({...e,...i,leafletObject:n.value}),(0,l.Y3)((()=>t.emit("ready",n.value)))})),{leafletObject:n}},render(){return null}}),{...et}),vt=(e,t)=>{const{options:o,methods:n}=tt(e,t),a=P(Z);return(0,l.Jd)((()=>{a()})),{options:o,methods:n}},bt=Object.freeze(Object.defineProperty({__proto__:null,setupTooltip:vt,tooltipProps:yt},Symbol.toStringTag,{value:"Module"})),ft=((0,l.aZ)({name:"LTooltip",props:yt,setup(e,t){const n=(0,c.iH)(),a=(0,c.iH)(null),r=(0,l.f3)(T),s=P(N),{options:i,methods:u}=vt(e,n);return(0,l.bv)((async()=>{const{tooltip:d}=r?_.L:await o.e(633).then(o.bind(o,6633));n.value=(0,c.Xl)(d(i)),g(u,n.value,e);const{listeners:p}=O(t.attrs);n.value.on(p),n.value.setContent(e.content||a.value||""),s(n.value),(0,l.Y3)((()=>t.emit("ready",n.value)))})),{root:a,leafletObject:n}},render(){return ot(this.$slots)}}),{...dt,layers:{type:String,required:!0},styles:{type:String},format:{type:String},transparent:{type:Boolean,default:void 0},version:{type:String},crs:{type:Object},uppercase:{type:Boolean,default:void 0}}),mt=(e,t,o)=>{const{options:l,methods:n}=pt(e,t,o);return{options:h(e,ft,l),methods:{...n}}},gt=Object.freeze(Object.defineProperty({__proto__:null,setupWMSTileLayer:mt,wmsTileLayerProps:ft},Symbol.toStringTag,{value:"Module"}));(0,l.aZ)({props:ft,setup(e,t){const n=(0,c.iH)(),a=(0,l.f3)(T),r=P(C),{options:s,methods:i}=mt(e,n,t);return(0,l.bv)((async()=>{const{tileLayer:u}=a?_.L:await o.e(633).then(o.bind(o,6633));n.value=(0,c.Xl)(u.wms(e.url,s));const{listeners:d}=O(t.attrs);n.value.on(d),g(i,n.value,e),r({...e,...i,leafletObject:n.value}),(0,l.Y3)((()=>t.emit("ready",n.value)))})),{leafletObject:n}},render(){return null}}),Symbol.toStringTag;var ht={name:"AlertsPage",components:{LMap:Ye,LGeoJson:we},data(){return{geojson:{type:"FeatureCollection",features:[]},geojsonOptions:{}}},async beforeMount(){const{circleMarker:e}=await o.e(633).then(o.bind(o,6633));this.geojsonOptions.pointToLayer=(t,o)=>e(o,{radius:8}),this.mapIsReady=!0}},Ot=o(3744);const St=(0,Ot.Z)(ht,[["render",p]]);var jt=St}}]);
//# sourceMappingURL=33.d44096a9.js.map