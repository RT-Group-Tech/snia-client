<template>
    <fieldset class="mb-1">
        <legend class="d-flex justify-content-between align-items-center p-1 pl-2" style="background-color: #007bff;">
            <span id="title" class="text-white">
                {{ title }}
            </span>
            <slot name="actions" />
        </legend>
        <slot name="content" />
    </fieldset>
</template>


<style scoped>
fieldset {
    font-family: sans-serif;
    border: 1px solid #cccccc;
    border-radius: 5px;
    padding: 8px;
}

fieldset legend {
    background: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    color: #010f3c;
    font-size: 15px;
    font-weight: 600;
    border-radius: 5px
}

fieldset legend span {
    text-transform: uppercase;
    font-size: 12px;
}
</style>
<script>
export default {
    name: "GroupCaption",
    props: {
        title: {
            type: String,
            default: ''
        },
    }
}
</script>