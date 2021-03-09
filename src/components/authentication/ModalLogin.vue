<template>
  <div id="loginModalContainer">
    <b-modal
      id="loginModal"
      ref="loginModal"
      :static="true"
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
              placeholder="Enter email"
              required
              v-model="email.value"
            >
            </b-form-input>
            <div class="text-danger">{{ email.error }}</div>
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
              placeholder="Enter password"
              v-model="password.value"
            ></b-form-input>
          </b-form-group>          
          <b-form-text class="form-text text-center mb-3">* Your system administrator should provide you with an account *</b-form-text>
          <div class="text-danger text-center mb-1">{{ submit.error }}</div>
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
      email: {
        value: "",
        reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
        error: null,
        valid: null,
      },
      password: {
        value: "",
      },
      submit: {
        error: null
      }
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
      this.email.error = null;
      this.email.valid = true;
      this.submit.error = null;

      //client side verification
      if (!this.email.value) {
        this.email.error = "An email is required";
        this.email.valid = false;
      } else if (!this.email.reg.test(this.email.value)) {
        this.email.error = "Enter a valid email address";
        this.email.valid = false;
      }

      //send request to server if client side is good
      if (this.email.valid) {
        userLogin(this.email.value, this.password.value).then((res) => {
          if (res.error) {
            this.submit.error = res.error;
          } else if (res.user) {
            //successful login
            this.$bvModal.hide(loginModal);
            this.$router.replace({ name: "Userpage" });
          } else {
            //something else went wrong with getting the user from firebase
            this.submit.error = "Something went wrong trying to login";
          }
        });
      }
    },
  },
};
</script>

<style scoped>
.form-text{
  font-size: 90%;
}
</style>
