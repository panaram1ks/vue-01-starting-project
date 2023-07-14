<template>
  <base-container title="Vuex" v-if="userIsAuthenticated">
    <h3>{{ counter }}</h3>
    <the-counter></the-counter>
    <change-counter></change-counter>
    <button @click="addOne">Add 10</button>
    <favorite-value></favorite-value>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

import { mapGetters } from 'vuex'

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },
  computed: {
    counter() {
      return this.$store.state.counter
    },
    ...mapGetters(['userIsAuthenticated']),
  },
  methods: {
    addOne() {
      // this.$store.commit('increase', { value: 10 }); // commit accept name of mutaion
      this.$store.dispatch({
        type: 'myModulName/increase',
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