const app = Vue.createApp(
    {
        computed: {
            fullname() {
                console.log('Runing again...');
                if (this.name === '' || this.lastName === '') {
                    return ''
                }
                return this.name + ' ' + this.lastName
            }
        },
        watch: {
            counter(value) {
                if (value > 50) {
                    const that = this
                    setTimeout(() => that.counter = 0, 2000)
                    /* this.counter = 0 */
                }
            }
            /*             name(value) {
                            if (value === '') {
                                this.fullName = ''
                            }
                            this.fullname = value + ' ' + this.lastName
                        },
                        lastName(value) {
                            if (value === '') {
                                this.fullName = ''
                            }
                            this.fullname = this.name + ' ' + value
                        } */
        },
        data() {
            return {
                counter: 10,
                name: '',
                confirmedName: '',
                lastName: '',
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
                this.lastName = ''
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