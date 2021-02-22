<template>
  <div id="addUser">
    <h3>Create a User</h3>
    <b-form @submit.prevent="CreateUser">
      <label for="email">Email: </label>
      <input type="email" required v-model="email" placeholder="Email..." />

      <label for="password">Password: </label>
      <input
        type="password"
        required
        v-model="password"
        placeholder="Create a Password..."
      />

      <label for="makeAdmin">Make user an administrator? </label>
      <input type="checkbox" v-model="makeAdmin" />

      <button>Create User</button>
      <div v-if="error">{{ error }}</div>
    </b-form>
  </div>
</template>

<script>
import { createUser } from "@/js/auth/userAuth.js";
import { makeUserAdmin } from "@/js/auth/userAccess.js";

export default {
  name: "AddUser",
  data() {
    return {
      email: "",
      password: "",
      makeAdmin: false,
      error: null,
    };
  },
  methods: {
    CreateUser() {
      this.error = null;
      createUser(this.email, this.password).then((creationToken) => {
        if (creationToken.error) {
          this.error = creationToken.error;
        } else {
          console.log("user has been added successfully");
          if (this.makeAdmin) {
            makeUserAdmin(creationToken.user).then((adminToken) => {
              if (adminToken.error) {
                this.error = adminToken.error;
              } else {
                console.log("User has been added as an admin");
              }
            });
          }
        }
      });
    },
  },
};
</script>

<style>
</style>