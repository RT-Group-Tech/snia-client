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
import { nSQL } from "nano-sql";
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
        this.createTable();
    },

    methods: {
        async createTable() {
            let model = [
                { key: "id", type: "int", props: ["pk", "ai"] },
                { key: "name", type: "string" },
                { key: "email", type: "string" },
                { key: "password", type: "string" },
            ]
            nSQL("userdb").model(model).connect().then((res) => {
                let data = localStorage.getItem("userdb");
                if (data !== null || data !== undefined) {
                    let fields = JSON.parse(data)
                    nSQL("userdb").query("upsert", fields).exec().then((res) => {
                        this.getAllUsers();
                    })

                }
            })
        },
        getAllUsers() {
            nSQL("userdb").query("select").exec().then((res) => {
                localStorage.setItem("userdb", JSON.stringify(res))
                this.users = res;
            })
        },
        async addUser() {
            let data = { name: this.form.name, email: this.form.email, password: this.form.pwd };
            nSQL("userdb").query("upsert", data).exec().then((_) => {
                this.getAllUsers()
            })
        }
    },
}
</script>