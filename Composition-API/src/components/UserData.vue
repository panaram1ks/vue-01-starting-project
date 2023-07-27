<template>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
</template>

<script>
import { computed } from 'vue';

export default {
    props: ['firstName', 'lastName', 'age'],
    setup(props, context) {
        const uName = computed(() => {
            // return this.firstName + this.lastName // error, do not work using setup!!!
            return props.firstName + props.lastName
        })

        console.log(context);
        // we can emit custom event
       // context.emit('save-data', 1); // this.$emit('customName', dataYouWantToEmit)

        return {
            userName: uName
        }
    }
    // computed: {
    //     userName() {
    //         return this.firstName + ' ' + this.lastName;
    //     }
    // }
}
</script>
