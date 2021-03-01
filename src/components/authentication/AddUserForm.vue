<template>
  <div id="addUser">
    <h3 class="mb-3">Register</h3>
    <b-form @submit.prevent="CreateUser">
      <b-form-group
        id="registerEmailFormGroup"
        label-for="registerEmail"
        label="Enter the users email"
        :invalid-feedback="emailErrorMsg"
      >
        <b-form-input
          id="registerEmailInput"
          placeholder="Email ..."
          v-model="email"
          :state="validEmail"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="registerPasswordFormGroup"
        label-for="registerPassword"
        label="Enter a password"
        :invalid-feedback="passwordErrorMsg"
      >
        <b-form-input
          id="registerPasswordInput"
          placeholder="Password ..."
          v-model="password"
          :state="validPassword"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="makeAdminFormGroup" class="mb-3">
        <b-form-checkbox v-model="makeAdmin"
          >make user a system administrator</b-form-checkbox
        >
      </b-form-group>

      <b-button id="submitCreateUser" class="py-2 mb-3" variant="outline-primary" @click="registerButtonClicked"
        >Register</b-button
      >
      <p class="font-italic text-muted text-center">
        Please record the email and password used and provide it to the user
        <br />
        Note: only the system owner can remove an account and its priveledges
      </p>
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
      emailReg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      email: "",
      validEmail: null,
      emailErrorMsg: null,

      password: "",
      validPassword: null,
      passwordErrorMsg: null,

      makeAdmin: false,

      validRegistration: false,
      registerErrorMsg: null,
    };
  },
  methods: {
    registerButtonClicked(){
      //reset states
      this.validEmail = true;
      this.validPassword = true;
      //check email
      if (!this.email){
        this.validEmail = false;
        this.emailErrorMsg = "Enter an email address"
      }
      else if (!this.emailReg.test(this.email))
      {
        this.validEmail = false;
        this.emailErrorMsg = "Enter a valid email address"
      }

      //check password
      if (this.password.length < 6){
        this.validPassword = false;
        this.passwordErrorMsg = "Minimum 6 characters required"
      }

      //register user if all good
      if (this.validEmail && this.validPassword)
      {
        //this.createUser()
      }    

    },
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