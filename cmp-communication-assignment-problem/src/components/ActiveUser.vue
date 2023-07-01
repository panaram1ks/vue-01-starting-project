<template>
  <section>
    <h2>{{ username }}</h2>
    <h3>{{ userage }} Years</h3>
  </section>
</template>

<script>
export default {
  props: ["username", "userage"],
};
</script>

<style>
section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
}
</style>
