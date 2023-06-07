<!--
 Props:
  dataLoaded => true | false (pour afficher ou cacher le loader).
  height => int (optionnel, pour configurer la taille du widget ).
 slot:
  Le slot pour contenir le contenu à afficher une fois que le loader est caché .
-->
<template>
  <div>
    <!-- loader !-->
    <div id="loader" v-if="loading" :style="`min-height:${height}px; display:flex; justify-content:center;`">
      <img src="assets/img/doc_gif_2.gif" class="mfp-img-mobile"
        style="width: 270px; height: 200px; display: block; margin: auto" />
    </div>
    <!-- End- loader !-->
    <slot v-else></slot>
    <!-- slot pour contenir le contenu à afficher une fois chargée !-->
  </div>
</template>

<script>
export default {
  props: {
    loading:{
      type: Boolean,
      default:true
    },
    dataLoaded:{
      type:Boolean,
      default:false
    },
    height:{
      type:Number,
      default:300
    }
  },
  mounted() { },
};
</script>
