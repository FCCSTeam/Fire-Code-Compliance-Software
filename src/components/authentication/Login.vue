<template>
  <div>
    <b-container class="container" fluid>
      <b-row class="mt-5 text-center ">

        <b-col></b-col>
        <b-col>
          <b-card>
            <h3 class="text-center">Login</h3>
            <b-form>
              <b-form-group
                id="input-group-1"
                label="Email Address:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="email"
                  placeholder="Enter email"
                  required
                >
                </b-form-input>
                <div class="error">{{ emailError }}</div>
              </b-form-group>

              <label for="text-password">Password</label>
              <b-form-input
                type="password"
                id="text-password"
                v-model="password"
                aria-describedby="password-help-block"
                placeholder="Enter password"
              ></b-form-input>
              <b-form-text id="password-help-block"> </b-form-text>
              <br />
              <div class="text-center" id="login-submit">
                <b-button pill @click="Login">Login</b-button>
                <div class="error">{{ submitError }}</div>
              </div>
            </b-form>
          </b-card>
        </b-col>
        <b-col></b-col>

      </b-row>
    </b-container>
  </div>
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
/* .container {
  padding-top: 5%;
} */
.error {
  color: red;
}
</style>
