<template>
    <div class="main-panel">
        <div class="container">
            <div class="panel-header">
                <div class=" page-inner py-5">
                    <div class="page-header">
                        <h4 class="page-title">Component</h4>
                        <ul class="breadcrumbs">
                            <li class="nav-home">
                                <router-link :to="{ name: 'dashboard-route' }">
                                    <i class="flaticon-home"></i>
                                </router-link>
                            </li>
                            <li class="separator">
                                <i class="flaticon-right-arrow"></i>
                            </li>
                            <li class="nav-item">
                                <a href="#">testing</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <div class="page-inner mt--5">
                <div class="row mt--2">
                    <div class="col-md-12">
                        <div class="card full-height animated fadeInUp">
                            <div class="card-header">
                                <h1 class="card-title pull-left">Components & packages testing</h1>
                            </div>
                            <div class="card-body">
                                <!-- Button trigger modal -->
                                <button type="button" @click="showBsModal" class="btn btn-primary">
                                    Launch demo modal
                                </button>

                                <button class="btn btn-warning" data-placement="top" data-toggle="popover"
                                    title="Popover Header" data-content="Some content inside the popover">Popover
                                </button>

                                <button class="btn btn-default" id="btn-popover"
                                    data-content="Some content inside the popover">Popover trigger
                                </button>

                                <button class="btn btn-default" @click="checkDevice">Check browser
                                </button>



                                <!-- Modal -->
                                <teleport to='body'>
                                    <div class="modal animated flipInY" id="testModal" tabindex="-1" role="dialog"
                                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                                    <button type="button" class="close" data-dismiss="modal"
                                                        aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
                                                    eaque
                                                    tenetur commodi quam hic error corporis, voluptate ipsum excepturi?
                                                    Saepe odio illo in laudantium hic. Laboriosam quo officiis ex ipsam?
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary"
                                                        data-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </teleport>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Global footer component -->
        <d-footer></d-footer>
        <!-- end Global footer component -->
    </div>
</template>
<script>
import { onMounted } from "vue"
export default {
    name: "Test",

    setup(props) {
        const showBsModal = () => {
            $("#testModal").modal('show')
        }

        const showBsPopover = () => {
            $('[data-toggle="popover"]').popover('show')
        }

        const hideBsPopover = () => {
            $('[data-toggle="popover"]').popover('hide')
        }
        const checkDevice = () => {
            if ((/Android/i.test(navigator.userAgent))) {
                alert("android")
            }
            if (/iPad|iPhone|iPod/i.test(navigator.userAgent)) {
                alert("Iphone and other of apple")
            }
            else {
                alert("Desktop browser !")
            }
        }
        onMounted(() => {
            $(document).ready(function () {
                $('[data-toggle="popover"]').popover();

                $("#btn-popover").mouseover(() => {
                    showBsPopover()
                })

                $("#btn-popover").mouseout(() => {
                    hideBsPopover()
                })

            });
        })

        return { showBsModal, showBsPopover, hideBsPopover, checkDevice }
    }
}
</script>