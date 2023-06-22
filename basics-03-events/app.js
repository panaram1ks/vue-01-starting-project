const app = Vue.createApp(
    {
        data() {
            return {
                counter: 0,
            };
        },
        methods: {
            increaseValue(num) {
                this.counter += num
            },
            reduceValue(num) {
                this.counter -= num
            }
        }
    }
)

app.mount('#events');