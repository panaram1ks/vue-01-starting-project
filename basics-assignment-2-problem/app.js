const app = Vue.createApp({

    data() {
        return {
            valueInput1: '',
            valueInput2: '',
        };
    },
    methods: {
        showAlert() {
            console.log('log log log');
            alert('Any text!')
        },
        changeInput1(event) {
            this.valueInput1 = event.target.value
        },
        changeInput2(event) {
            this.valueInput2 = event.target.value
        },

        
    }
})

app.mount('#mountId');