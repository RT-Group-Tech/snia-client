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
    <div id="loader"
      class="d-flex justify-content-center flex-column align-content-center align-items-center w-100 border-light rounded"
      v-if="loading" :style="`min-height:${height}px;`">
      <lottie-animation :json="json"></lottie-animation>
      <!-- <h4 class="mt-2 fw-bold d-flex justify-content-center align-items-end align-content-end">chargement en cours
        <img style="height: 20px;" src="assets/img/processing_loader.gif" alt="" class="img-fluid">
      </h4> -->
    </div>
    <!-- End- loader !-->
    <slot v-else></slot>
    <!-- slot pour contenir le contenu à afficher une fois chargée !-->
  </div>
</template>

<script>
import jsonLoader from "@/assets/json/loading-1.json";
export default {
  data() {
    return {
      json: jsonLoader
    }
  },
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    dataLoaded: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number,
      default: 300
    }
  },
  mounted() { },
};
</script>
