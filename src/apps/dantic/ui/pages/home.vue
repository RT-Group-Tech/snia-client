<template>
    <div>
        <h1>Store data : {{ $store.state.dantic.session.msg }}</h1>
        <h1>Store data : {{ $store.state.auth.token }}</h1>
        <button>increment</button>
    </div>
</template>

<script>
export default {
    name: "Home-Page"
}
</script>