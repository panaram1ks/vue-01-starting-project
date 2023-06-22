const app = Vue.createApp({
    data() {
        return {
            YOUR_NAME: 'Yauheny',
            YOUR_AGE: 35,
            LINK_IMG: 'data:image/jpeg;base64,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'
        };
    },
    methods: {
        ageInFiveYears: function () {
            return this.YOUR_AGE + 5
        },
        favouriteRandomeNumber: () => {
            return Math.round(Math.random());
        }
    }

}).mount('#assignment') 