const app = Vue.createApp(
    {
        computed: {
            fullname() {
                console.log('Runing again...');
                if (this.name === '') {
                    return ''
                }
                return this.name + ' ' + 'Schwarzhuller'
            }
        },
        data() {
            return {
                counter: 10,
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
            setName(event) {
                this.name = event.target.value
            },
            submitForm(event) {
                /* event.preventDefault() */
                alert('Submited')
            },
            confirmName() {
                this.confirmedName = this.name
            },
            resetInput() {
                this.name = ''
            },
            outputFullname() {
                console.log('Runing again...');
                if (this.name === '') {
                    return ''
                }
                return this.name + ' ' + 'Schwarzhuller'
            }
        }
    }
)

app.mount('#events');