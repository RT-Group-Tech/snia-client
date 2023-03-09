<template>
    <div class="card p-3 animated zoomIn">
        <div class="d-flex align-items-center">
            <span class="stamp stamp-md mr-3" :class="bgColor">
                <i :class="icon"></i>
            </span>
            <div>
                <small class="text-muted">{{ title }}</small>
                <h5 class="mb-1"><b><a href="#">{{ value }} <small>{{ leading }}</small></a></b></h5>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Dashboard-card",

    props: {
        bgColor: {
            type: String,
            default: 'bg-primary'
        },
        icon: {
            type: String,
            default: 'far fa-circle'
        },
        title: {
            type: String,
            default: 'Lorem ipsum'
        },
        value: {
            type: String,
            default: '000'
        },
        leading: {
            type: String,
            default: 'hab.'
        },
    }
}
</script>