<template>
    <lottie-animation :style="`height:${lottieSize}px`" :animation-data="json" :auto-play="true" :loop="true" :speed="1"
        ref="anim" />
</template>
<script>
import { onMounted, ref } from "vue"
import { LottieAnimation } from "lottie-web-vue";

export default {
    name: 'Lottie-animation',
    props: ["json", "lottieSize"],
    components: {
        LottieAnimation
    },
    setup(props) {
        let anim = ref()
        onMounted(() => {
            setTimeout(() => {
                anim.value
            }, 500);
        });
    }
}
</script>