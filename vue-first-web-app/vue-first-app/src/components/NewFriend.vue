<template>
    <form @submit.prevent="submitData">
        <div>
            <label>Name</label>
            <input type="text" v-model="enteredName" />
        </div>
        <div>
            <label>Phone</label>
            <input type="tel" v-model="enteredPhone" />
        </div>
        <div>
            <label>E-Mail</label>
            <input type="email" v-model="enteredEmail" />
        </div>
        <div>
            <button>Add Contact</button>
        </div>
    </form>
</template>

<script>
export default {
    emits: ['add-contant'],
    data() {
        return {
            enteredName: '',
            enteredPhone: '',
            enteredEmail: ''
        }
    },
    methods: {
        submitData() {
            console.log(this.enteredName + ' ' + this.enteredPhone + ' ' + this.enteredEmail);
            this.$emit('add-contant', this.enteredName, this.enteredPhone, this.enteredEmail);
        }
    }
};
</script>