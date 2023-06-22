const app = Vue.createApp(
    {
        data() {
            return {
                counter: 0,
                name: '',
                confirmedName: '',
            };
        },
        methods: {
            increaseValue(num) {
                this.counter += num
            },
            reduceValue(num) {
                this.counter -= num
            },
            setName(event, lastName) {
                this.name = event.target.value + ' ' + lastName
            },
            submitForm(event) {
                /* event.preventDefault() */
                alert('Submited')
            },
            confirmName(){
                this.confirmedName = this.name
            }
        }
    }
)

app.mount('#events');