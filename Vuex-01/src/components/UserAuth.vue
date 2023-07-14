<template>
    <p>static text</p>
    <h3>{{ getIsLogin }}</h3>
    <h3>{{ this.$store.state.isLogin }}</h3>
    <button @click="actionCheckIn">Login</button>
    <button @click="actionCheckOut">Logout</button>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
    computed: {
        ...mapGetters(['getIsLogin']), // invoke getter from store
    },
    methods: {
        ...mapActions(['actionCheckIn', 'actionCheckOut']),
    }
}
</script>