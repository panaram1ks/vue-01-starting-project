<template>
    <li>
        <h2>{{ name }}</h2>
        <button @click="toggleDetails">{{ buttonTitle }}</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{ phoneNumber }}</li>
            <li><strong>Email:</strong>{{ emailAddress }}</li>
        </ul>
    </li>
</template>

<script>
export default {
    props: [
        'name',
        'phoneNumber',
        'emailAddress'
    ],
    data() {
        return {
            detailsAreVisible: false,
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
            console.log(this.phoneNumber);
        }
    },
    computed: {
        buttonTitle() {
            return (this.detailsAreVisible ? 'Hide' : 'Show') + 'Details';
        }
    }
}
</script>