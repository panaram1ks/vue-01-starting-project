const app = Vue.createApp({
    data() {
        return {
            className: '',
            isClicked: false,
            backCol: '',
        };
    },
    methods: {
        changeVisability() {
            this.isClicked = !this.isClicked
        }
    },
    computed: {
        paragraphStyles() {
            return {
                user1: this.className === 'user1',
                user2: this.className === 'user2',
                visible: !this.isClicked,
                hidden: this.isClicked
            }
        },
        bacgroundCol() {
            return `background-color: ${this.backCol}`
        }
    }



}).mount('#assignment') 