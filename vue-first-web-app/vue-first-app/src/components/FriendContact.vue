<template>
    <li>
        <!-- <p>{{ isFavorite }}</p> -->
        <!-- <h2>{{ name }} {{ friendIsFavorite ? '(Favorite)' : '' }}</h2> -->
        <!-- <h2>{{ name }} {{ isFavorite === '1' ? '(Favorite)' : '' }}</h2> -->
        <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
        <button @click="toggleFavorite">Toggle Favorite</button>
        <button @click="toggleDetails">{{ buttonTitle }}</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{ phoneNumber }}</li>
            <li><strong>Email:</strong>{{ emailAddress }}</li>
        </ul>
    </li>
</template>

<script>
export default {
    // props: ['name', 'phoneNumber', 'emailAddress', 'isFavorite'],
    props: {
        id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        emailAddress: String,
        isFavorite: {
            type: Boolean,
            required: false,
            default: false,
            // validator: function (value) {
            //     return value === '1' || value === '0';
            // }
        },
    },
    data() {
        return {
            detailsAreVisible: false,
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
            console.log(this.phoneNumber);
        },
        // We can't change data from down to up!!!!!
        // toggleFavorite() {
        //     if (this.isFavorite === '1') {
        //         this.isFavorite = '0';
        //     } else {
        //         this.isFavorite = '1';
        //     }
        // }
        toggleFavorite() {
            // if (this.friendIsFavorite === '1') {
            //     this.friendIsFavorite = '0';
            // } else {
            //     this.friendIsFavorite = '1';
            // }

            console.log('toggleFavorite()');
            // this.friendIsFavorite = !this.friendIsFavorite;

            this.$emit('toggle-favorite', this.id );
        }
    },
    computed: {
        buttonTitle() {
            return (this.detailsAreVisible ? 'Hide' : 'Show') + 'Details';
        }
    }
}
</script>