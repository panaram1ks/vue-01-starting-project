<template>
    <!-- <button @click="addOne">Add 3</button> -->
    <button @click="increment">Add 3</button>
    <button @click="increase({ value: 11 })">Add 11</button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    methods: {
        // addOne() {
        //     // this.$store.commit('increment');
        //     this.$store.dispatch('increment');
        // }
        ...mapActions(['increment', 'increase'])
    }
}
</script>