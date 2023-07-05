<template>
    <img src="assets/img/logo.png" :style="`height: ${size}px;`" alt="navbar brand" class="navbar-brand">
</template>

<script>
export default {
    name: 'Logo',
    props: {
        size: {
            default: 70
        }
    }
}
</script>