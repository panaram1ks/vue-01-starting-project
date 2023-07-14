<template>
    <!-- <button @click="addOne">Add 3</button> -->
    <button @click="inc">Add 3</button>
    <button @click="incr({ value: 11 })">Add 11</button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    methods: {
        // addOne() {
        //     // this.$store.commit('increment');
        //     this.$store.dispatch('increment');
        // }

        // ...mapActions(['increment', 'increase'])
        ...mapActions({
            inc: 'increment',
            incr: 'increase',
        })
    }
}
</script>