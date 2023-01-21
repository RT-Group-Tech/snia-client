<template>
    <div>
        <!-- <h1>Store data : {{ $store.state.dantic.session.msg }}</h1>
        <h1>Store data : {{ $store.state.auth.token }}</h1> -->
        <form @submit.prevent="addUser">
            <input type="text" placeholder="name... " v-model="form.name">
            <input type="email" placeholder="email..." v-model="form.email">
            <input type="password" placeholder="password..." v-model="form.pwd">
            <br>
            <br>
            <button type="submit">Submit</button>
        </form>

        <ul v-if="users.length > 0">
            <li v-for="(user, index) in users" :key="index">{{ user.name }} | {{ user.email }} | {{ user.password }}
            </li>
        </ul>
    </div>
</template>

<script>
import UserService from "@/database/services/user.service";
export default {
    name: "Home-Page",

    data() {
        return {

            form: {
                name: '',
                email: '',
                pwd: ''
            },
            users: [],
        }
    },

    mounted() {
        console.log(process.env.VUE_APP_AUTH_TOKEN);
        UserService.init((res) => this.users = res);
    },

    methods: {

        getAllUsers() {
            UserService.all((results) => this.users = results)
        },
        addUser() {
            UserService.create(this.form, (res) => {
                console.log(res);
                this.getAllUsers()
            })
        }
    },
}
</script>