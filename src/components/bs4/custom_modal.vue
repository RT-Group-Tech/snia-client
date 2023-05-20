<template>
    <teleport to="body">
        <!-- The Modal -->
        <div class="modal fade" :id="id">
            <div :class="size" class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title fw-bold">{{ title }}</h4>
                        <button type="button" class="close" data-dismiss="modal"><i
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
        </div>
    </teleport>
</template>


<style scoped>
.ps__rail-x,
.ps__rail-y {
    opacity: 1;
}
</style>
<script>

export default {
    name: "Custom-modal",

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
    }
}
</script>