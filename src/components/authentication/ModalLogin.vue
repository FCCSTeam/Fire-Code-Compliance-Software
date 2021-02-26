<template>
  <div id="loginModal">
    <b-modal
      id="loginModal"
      ref="loginModal"
      title="Login"
      ok-title="Login"
      ok-variant="primary"
      cancel-variant="light-gray"
      @ok="handleOk"
    >
      <div class="text-left">
        <b-form>
          <b-form-group
            id="emailField"
            class="mb-4"
            label="Email Address:"
            label-for="emailField"
          >
            <b-form-input
              id="emailInput"
              v-model="email"
              placeholder="Enter email"
              required
            >
            </b-form-input>
            <div class="text-danger">{{ emailError }}</div>
          </b-form-group>

          <b-form-group
            id="passwordField"
            class="mb-4"
            label="Password:"
            label-for="passwordField"
          >
            <b-form-input
              type="password"
              id="text-password"
              class="mb-4"
              v-model="password"
              placeholder="Enter password"
            ></b-form-input>
          </b-form-group>          
          <b-form-text class="form-text text-center mb-3">* Your system administrator should provide you with an account *</b-form-text>
          <div class="text-danger text-center mb-1">{{ submitError }}</div>
        </b-form>
      </div>
    </b-modal>
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
    show() {
      this.$refs.loginModal.show();
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.login();
    },
    login() {
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
            this.$bvModal.hide(loginModal);
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
.form-text{
  font-size: 90%;
}
</style>
