export default {
    async mounted() {
        await this.$store.dispatch("auth/refreshLoggedUser");
    },

    computed: {
        user() {
            return this.$store.getters["auth/GET_USER"];
        },
    },

    methods: {
        async logout() {
            await this.$router.replace({ name: "login" });
            await this.$store.dispatch("auth/loggedOut");
            await this.$store.dispatch("auth/refreshLoggedUser");
        },
    },
};