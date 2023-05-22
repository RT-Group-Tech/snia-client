<template>
    <div ref="container" class="Popover__Container">
        <div ref="content" class="Popover__Content">
            <slot name="content">

            </slot>
        </div>
        <button ref="caller" @click.prevent="$emit('onToggle')" :class="toggleClass" class="btn Popover__Caller"> <i
                :class="toggleIcon"></i> {{ toggleLabel
                }}</button>
    </div>
</template>

<style scoped src="@/assets/css/atlantis.css"></style>
<style scope>
.popover-body {
    max-height: 200px !important;
    overflow-y: auto !important;
    white-space: pre-wrap !important;
}
</style>
<script>
export default {
    props: {
        title: {
            type: String,
            required: false,
            default: ''
        },
        toggleClass: {
            type: String,
            default: ""
        },
        toggleLabel: {
            type: String,
            default: ""
        },
        toggleIcon: {
            type: String,
            default: ""
        },
        reference: {
            type: String,
            default: ''
        }
    },
    mounted() {
        const content = this.$refs.content;
        // PopOver Definition
        const popover = $(this.$refs.caller).popover({
            container: 'body',
            title: this.title,
            html: true,
            trigger: 'click',
            placement: 'auto',
            sanitize: false,
            content: content,
            offset: 10,
            animation: true,
        });
        $(this.$refs.caller).on('hidden.bs.popover', () => {
            this.$refs.container.prepend(content);
        });
    },

}
</script>

<style scoped>
.Popover__Container>.Popover__Content {
    display: none;
}
</style>
