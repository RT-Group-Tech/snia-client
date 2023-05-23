<template>
    <teleport to="body">
        <!-- The Modal -->
        <form class="modal fade" :id="id" data-backdrop="static" @submit.prevent="$emit('submit', $event)">
            <div :class="size" class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header bg-light">
                        <h4 class="modal-title"> <strong>{{ title }}</strong></h4>
                        <button type="button" class="close" @click.prevent="$emit('onClose')" data-dismiss="modal"><i
                                class="icon-close text-danger"></i></button>
                    </div>

                    <!-- Modal body -->
                    <perfect-scrollbar class="modal-body" tag="div" ref="scroll">
                        <slot name="body-content"></slot>

                    </perfect-scrollbar>
                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <slot name="footer-content"></slot>
                    </div>
                </div>
            </div>
        </form>
    </teleport>
</template>


<style scoped>
.ps__rail-x,
.ps__rail-y {
    opacity: 1;
}

.modal .modal-dialog .modal-content {
    border-radius: 0px !important;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
}
</style>
<script>

export default {
    name: "Custom-modal",

    mounted() {
        this.$emit('onLoad')
    },

    props: {
        id: {
            type: String,
            default: ''
        },

        title: {
            type: String,
            default: ""
        },
        size: {
            type: String,
            default: '',
            validator: (val) => {
                return ['modal-sm', 'modal-lg', 'modal-xl'].includes(val)
            }
        }
    },
    methods: {
        hideModal() {
            $(`${this.id}`).modal('hide')
        }
    },
}
</script>