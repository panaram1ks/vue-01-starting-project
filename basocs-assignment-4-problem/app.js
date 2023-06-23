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
        isUser1() {
            if (this.className === 'user1') {
                console.log('user1()');
                return true
            }
        },
        isUser2() {
            if (this.className === 'user2') {
                console.log('user2()');
                return true
            }
        },
        bacgroundCol() {
            return `background-color: ${this.backCol}`
        }
    }



}).mount('#assignment') 