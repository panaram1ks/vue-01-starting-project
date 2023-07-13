<template>
  <base-container title="Vuex">
    <h3>{{ counter }}</h3>
    <the-counter></the-counter>
    <change-counter></change-counter>
    <button @click="addOne">Add 10</button>
    <favorite-value></favorite-value>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
  },
  computed: {
    counter() {
      return this.$store.state.counter
    }
  },
  methods: {
    addOne() {
      // this.$store.commit('increase', { value: 10 }); // commit accept name of mutaion
      this.$store.dispatch({
        type: 'increase',
        value: 10,
      })
    }
  }
};
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
</style>