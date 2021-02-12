<template>
  <form @submit.prevent="Login">
    <h3>Sign In</h3>
    <div id="login-email">
      <label for="email">Email: </label>
      <input type="email" required v-model="email" placeholder="Email" />
      <div class="error">{{ emailError }}</div>
    </div>
    <div id="login-password">
      <label for="password">Password: </label>
      <input type="password" required v-model="password" placeholder="Password"/>
    </div>
    <div id="login-submit">
      <button>Login</button>
      <div class="error">{{ submitError }}</div>
    </div>
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
      emailReg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      submitError: null,
      emailError: null,
    };
  },
  methods: {
    Login() {
      var noFormErrors = true;
      this.emailError = null;
      this.submitError = null;

      //client side verification
      if (!this.email) {
        this.emailError = "An email is required";
        noFormErrors = false;
      } else if (!this.emailReg.test(this.email)) {
        this.emailError = "Enter a valid email address";
        noFormErrors = false;
      }
      
      //send request to server if client side is good
      if (noFormErrors) {
        userLogin(this.email, this.password).then((res) => {
          if (res.error) {
            this.submitError = res.error;
          } else if (res.user) {
            //successful login
            this.$router.replace({ name: "Userpage" });
          } else {
            //something else went wrong with getting the user from firebase
            this.submitError = "Something went wrong trying to login";
          }
        });
      }
    },
  },
};
</script>

<style>
.error{
    color: red;
}
</style>