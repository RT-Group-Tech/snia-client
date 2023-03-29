<template>
  <li class="nav-item" data-toggle="tooltip" :title="`Menu ${title}`" data-placement="bottom"
    :class="currentRoute === routeName ? 'active' : ''">
    <router-link :to="{ name: routeName }">
      <i :class="icon"></i>
      <p>{{ title }}</p>
    </router-link>
  </li>
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
    this.$initBsTooltip();
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
    }
  }
}
</script>

<style scoped></style>