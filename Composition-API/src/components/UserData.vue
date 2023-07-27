<template>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
</template>

<script>
import { computed, inject } from 'vue';

export default {
    // inject: [], // we do not use inject like this
    props: ['firstName', 'lastName'],
    setup(props, context) {
        const uName = computed(() => {
            // return this.firstName + this.lastName // error, do not work using setup!!!
            return props.firstName + ' ' + props.lastName
        })

        const age = inject('userAge');

        console.log(context);
        // we can emit custom event
        // context.emit('save-data', 1); // this.$emit('customName', dataYouWantToEmit)

        return {
            userName: uName,
            age,
        }
    },
    // computed: {
    //     userName() {
    //         return this.firstName + ' ' + this.lastName;
    //     }
    // }
}
</script>
