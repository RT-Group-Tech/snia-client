<template>
  <!-- data-toggle="tooltip" :title="`Menu ${title}`" data-placement="bottom" -->
  <li v-show="!hidden" class="nav-item" :class="currentRoute === routeName ? 'active' : ''">
    <router-link :to="{ name: routeName }" :disabled="true">
      <i :class="icon"></i>
      <p>{{ title }}</p>
    </router-link>
  </li>
  <!-- <li v-else :disabled="disabled" class="nav-item" :class="currentRoute === routeName ? 'active' : ''">
    <a href="javascript:void(0)">
      <i :class="icon"></i>
      <p>{{ title }}</p>
    </a>
  </li> -->
</template>

<script>
export default {
  name: "sidebar-item",

  data() {
    return {
      currentRoute: ""
    }
  },

  mounted() {
    setInterval(() => {
      this.currentRoute = this.$route.name;
    }, 50);
    /*Global function allow to initialize bootstrap tooltip*/
    /* this.$initBsTooltip(); */
  },

  props: {
    icon: {
      type: String,
      required: true,
      default: 'fas fa-circle'
    },
    title: {
      type: String,
      required: true
    },
    routeName: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    hidden: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style scoped></style>