<template>
  <li class="nav-item" :class="currentRoute === routeName ? 'active' : ''">
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
  },

  props:{
    icon:{
      type:String,
      required:true,
      default:'fas fa-circle'
    },
    title:{
      type:String,
      required:true
    },
    routeName:{
      type:String,
      required:true
    }
  }
}
</script>

<style scoped>

</style>