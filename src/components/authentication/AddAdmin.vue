<template>
  <div id="addAdmin">
    <h3>Give Admin Priveledges</h3>
    <form @submit.prevent="CreateUser">
      <label for="email">Email</label>
      <input type="email" required v-model="email" placeholder="Email..." />
      <button>Make Admin</button>
      <div v-if="error">{{ error }}</div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddAdmin",
  data() {
    return {
      email: "",
      error: null,
    };
  },
};
</script>

<style>
</style>