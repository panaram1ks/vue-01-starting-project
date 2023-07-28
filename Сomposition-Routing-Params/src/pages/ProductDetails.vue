<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>${{ price }}</h3>
    <p>{{ description }}</p>
    <router-link to="/products/p2">Product 2</router-link>
  </section>
</template>

<script>
import { inject } from 'vue';

export default {
  props: ['pid'],
  setup(props) {

    // we need get route papameter like :id from router
    // but we can not user this.$route
    const products = inject('products')

    const selectedProduct = products.value.find(product => product.id === props.pid)
    console.log(selectedProduct);
    const title = selectedProduct.title
    const price = selectedProduct.price
    const description = selectedProduct.description

    return { title, price, description };
  },
};
</script>


<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>