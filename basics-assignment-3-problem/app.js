const app = Vue.createApp({

    data() {
        return {
            result: 0,
            strResult: '',
        }
    },
    methods: {
        increaseVal(num) {
            this.result += num
        },
        decreaseVal(num) {
            this.result -= num
        }
    },
    computed: {
        computedResult() {
            console.log("compute")
            if (this.result < 37) {
                return 'Not there yet'
            } else if (this.result == 37) {
                return 37
            } else {
                return 'Too much!'
            }
        }
    },
    watch: {
        computedResult(oldValue) {
            console.log('start watch');
            const context = this;
            setTimeout(function () {
                context.result = 0
                context.strResult = ''
            }, 5000)

        }
    }

})

app.mount('#assignment')