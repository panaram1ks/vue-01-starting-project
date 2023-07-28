<template>
  <section class="container">
    <user-data :first-name="firstName" :last-name="lastName"></user-data>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName">
      <!-- <input type="text" placeholder="First Name" @input="setFirstName"> -->
      <input type="text" placeholder="Last Name" ref="lastNameInput">
      <!-- <input type="text" placeholder="Last Name" @input="setLastName"> -->
      <button @click="setLastName">Set Name</button>
    </div>
  </section>
</template>

<script>
import { ref, computed, watch, provide } from 'vue';
import UserData from './components/UserData.vue';

export default {
  components: {
    UserData
  },
  setup() {
    const firstName = ref('')
    const lastName = ref('')

    const lastNameInput = ref(null)

    const uAge = ref(33);

    // function setFirstName(event) {
    //   firstName.value = event.target.value
    // }

    // function setLastName(event) {
    //   lastName.value = event.target.value
    // }

    provide('userAge', uAge);

    const fullName = computed(function () {
      return firstName.value + ' ' + lastName.value
    })

    watch(firstName, function (newValue, oldValue) {
      console.log('old value: ' + oldValue);
      console.log('new value: ' + newValue);
    })

    watch([firstName, lastName], function (newValues, oldValues) {
      console.log('old value: ' + oldValues);
      console.log('new value: ' + newValues);
    })

    function setLastName() {
      // lastName.value = this.$refs.lastNameInput.value
      lastName.value = lastNameInput.value.value
    }

    return {
      userName: fullName,
      // setFirstName,
      // setLastName,
      firstName,
      lastName,
      // lastName,
      setLastName,
      lastNameInput,
      age: uAge,
    }


    // provide() {
    //     return {
    //         age: this.age
    //     }
    // }

  }
}
</script>


<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>