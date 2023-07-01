<template>
  <div>
    <active-user :username="user.name" :userage="user.age"></active-user>
    <user-data @set-data="setUserData"></user-data>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "Parom1 Evgen",
        age: 35,
      },
    };
  },
  methods: {
    setUserData(nameParameter, ageParameter) {
      this.user = {
        name: nameParameter,
        age: +ageParameter,
      };
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>
