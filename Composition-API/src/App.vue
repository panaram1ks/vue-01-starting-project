<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// const userName = ref('Evgen');
// const age = ref(31)

const user = ref({
  name: 'Evgen',
  age: 31
});

setTimeout(function () {
  // userName.value = 'Tra-ta-ta'
  // age.value = 42

  user.value.name = 'TraDAta'
  user.value.age = 43

}, 2000)
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