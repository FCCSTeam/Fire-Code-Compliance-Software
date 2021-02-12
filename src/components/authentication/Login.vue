<template>
  <form @submit.prevent="Login">
    <h3>Sign In</h3>
    <input type="email" required v-model="email" placeholder="Email" />
    <input type="password" required v-model="password" placeholder="Password" />
    <button>Login</button>
    <div v-if="error">{{ error }}</div>
  </form>
</template>

<script>
import { userLogin } from "@/js/auth/userAuth.js";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    Login() {
      userLogin(this.email, this.password).then((res) => {
        if (res.error) {
          this.error = res.error;
        } else if (res.user) {
          //successful login
          this.$router.replace({ name: "Userpage" });
        } else {
          //something went wrong with getting the user from firebase
          this.error = "Something went wrong trying to login";
        }
      });
    },
  },
};
</script>

<style>
</style>