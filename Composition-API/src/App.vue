<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h2>{{ user.age }}</h2>
    <h2>{{ userAge }}</h2>
  </section>
</template>

<script>
import { ref, reactive, isReactive, isRef } from 'vue';

export default {
  setup() {
    //reactive only works with Object, you must send Object in it
    const uAge = ref(55)

    const user = reactive({
      name: 'Evgen',
      age: 31
    });

    console.log(uAge, user);
    console.log(isRef(uAge.value));
    console.log(isReactive(user.name));

    setTimeout(function () {
      user.name = 'TraDAta'
      user.age = 43
    }, 2000)

    return {
      user: user,
      userAge: uAge.value
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