<template>
    <p>static text</p>
    <h3>{{ userIsAuthenticated }}</h3>
    <h3>{{ this.$store.state.isLoggedIn }}</h3>
    <button @click="login" v-if="!userIsAuthenticated">Login</button>
    <button @click="logout" v-if="userIsAuthenticated">Logout</button>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
    computed: {
        ...mapGetters(['userIsAuthenticated']), // invoke getter from store
    },
    methods: {
        ...mapActions(['login', 'logout']),
    }
}
</script>