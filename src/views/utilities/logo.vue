<template>
    <div class="navbar-brand d-flex justify-content-center align-content-center align-items-center">
        <img src="assets/img/armoirie_rdc.png" class="flex-fill" style="height: 45px;" alt="logo">
        <div class="d-flex align-content-center justify-content-center align-items-center flex-column flex-fill mx-1"
            style="height: 45px;">
            <div class="flex-fill" style="background-color: #00aeef; width: 2.5px;"></div>
            <div class="flex-fill" style="background-color: #fff200; width: 2.5px;"></div>
            <div class="flex-fill" style="background-color: #ed1c24; width: 2.5px;"></div>
        </div>
        <h4 class="fw-bold text-white mb-2 mt-2 text-uppercase flex-wrap flex-fill"
            style="font-family: Arial, Helvetica, sans-serif; font-size: .55em;">
            Ministère de<br>
            l'agriculture
        </h4>
    </div>
    <!-- <img src="assets/img/logo.png" :style="`height: ${size}px;`" alt="navbar brand" class="navbar-brand"> -->
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