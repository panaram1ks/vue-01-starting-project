<template>
  <h2 v-if="show">{{ goals }}</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3>OUTPUT COURSE GOAL</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleButton">{{ title }}</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const goals = ref('My Course Goal 1')
    const isShow = ref(true)
    const title = ref('Hide')

    const toggleHideShow = function () {
      let acc = isShow.value
      isShow.value = !acc
      console.log(isShow.value);
      toggleTitle()
    }

    const toggleTitle = function () {
      title.value = isShow.value ? 'Hide' : 'Show'
    }


    return {
      goals: goals.value,
      toggleButton: toggleHideShow,
      show: isShow,
      title: title
    }
  }
}
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 3rem;
  text-align: center;
}
</style>