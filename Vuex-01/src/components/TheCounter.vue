<template>
    <!-- <h3>{{ counter }}</h3> -->
    <h3>{{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    // computed: {
    //     counter() {
    //         return this.$store.getters.finalCounter          
    //     }
    // ...mapGetters(['finalCounter']) // invoke getter from store
    // }

    computed: {
        ...mapGetters('myModulName', ['finalCounter']) // invoke getter from store
    }
}
</script>