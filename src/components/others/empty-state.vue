<template>
    <div>
        <lottie-animation :json="json" lottie-size="180"></lottie-animation>
        <h1 class="display-4" style="font-size: 1.6em;">Aucune donnée disponible !</h1>
    </div>
</template>

<script>
import emptyStateJson from "@/assets/json/folder-empty.json";
export default {
    name: 'EmptyState',
    data() {
        return {
            json: emptyStateJson
        }
    }
}
</script>