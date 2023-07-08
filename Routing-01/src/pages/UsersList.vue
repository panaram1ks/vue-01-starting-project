<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">SaveChanges</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  data() {
    return {
      changestSaved: false,
    };
  },
  components: {
    UserItem,
  },
  inject: ['users'],
  methods: {
    confirmInput() {
      //do something
      alert('confirmInput()');
      this.$router.push('/teams');
    },
    saveChanges() {
      this.changestSaved = true;
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log('UserListComponent beforeRouteEnter(to, from, next)');
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('UserListComponent beforeRouteLeave(to, from, next)');
    console.log(to, from);
    if (this.changestSaved) {
      next();
    } else {
      const userWantsToLeave = confirm(
        'Are you sure? You got unsaved changes!'
      );
      next(userWantsToLeave);
    }
  },
  unmounted() {
    console.log('UsersList unmounted()');
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
