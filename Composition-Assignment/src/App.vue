<template>
  <h2 v-if="co.isShow">{{ co.goals }}</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3>OUTPUT COURSE GOAL</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="co.toggleFunc">{{ co.title }}</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {

    const condition = reactive({
      goals: 'My Course Goal 1',
      isShow: true,
      title: 'Hide',
      toggleFunc: () => toggleHideShow()
    })

    const toggleHideShow = function () {
      let acc = condition.isShow
      condition.isShow = !acc
      console.log(condition.isShow);
      toggleTitle()
    }

    const toggleTitle = function () {
      condition.title = condition.isShow ? 'Hide' : 'Show'
    }


    return {
      co: condition
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