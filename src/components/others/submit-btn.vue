<template>
    <button type="submit" :disabled="isLoading" id="forms-submit-btn" class="btn mr-1" :class="type"><i v-if="isLoading"
            class="fa fa-spinner fa-spin mr-2"></i>{{ title }}</button>
</template>

<script>
export default {
    name: "SubmitBtn",

    props: {
        isLoading: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: 'btn-success'
        }
    }
}
</script>