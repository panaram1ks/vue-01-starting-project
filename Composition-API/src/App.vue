<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName">
      <!-- <input type="text" placeholder="First Name" @input="setFirstName"> -->
      <input type="text" placeholder="Last Name" v-model="lastName">
      <!-- <input type="text" placeholder="Last Name" @input="setLastName"> -->
    </div>
  </section>
</template>

<script>
import { ref, computed, watch } from 'vue';

export default {
  setup() {
    const firstName = ref('')
    const lastName = ref('')

    // function setFirstName(event) {
    //   firstName.value = event.target.value
    // }

    // function setLastName(event) {
    //   lastName.value = event.target.value
    // }

    const fullName = computed(function () {
      return firstName.value + ' ' + lastName.value
    })

    watch(firstName, function (newValue, oldValue) {
      console.log('old value: ' + oldValue);
      console.log('new value: ' + newValue);
    })

    watch([firstName, lastName], function(newValues, oldValues){
      console.log('old value: ' + oldValues);
      console.log('new value: ' + newValues);
    })

    return {
      userName: fullName,
      // setFirstName,
      // setLastName,
      firstName,
      lastName,
    }
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