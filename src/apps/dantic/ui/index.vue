<template>
    <router-view />
</template>

<script>
import ParentMixin from "../mixins/parent"
export default {
    name: "main-ui",
    extends: ParentMixin
}
</script>