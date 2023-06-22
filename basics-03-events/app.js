const app = Vue.createApp(
    {
        data() {
            return {
                counter: 0,
                name: '',
            };
        },
        methods: {
            increaseValue(num) {
                this.counter += num
            },
            reduceValue(num) {
                this.counter -= num
            },
            setName(event, lastName){
                this.name = event.target.value + ' ' + lastName 
            }
        }
    }
)

app.mount('#events');