const app = Vue.createApp(
    {
        data() {
            return {
                counter: 0,
            };
        },
        methods: {
            increaseValue() {
                this.counter++
            },
            reduceValue(){
                this.counter--
            }
        }
    }
)

app.mount('#events');