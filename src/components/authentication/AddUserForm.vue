<template>
  <div id="addUser">
    <h3 class="mb-3">Register</h3>
    <b-form @submit.prevent="CreateUser">
      <b-form-group
        id="registerEmailFormGroup"
        label-for="registerEmail"
        label="Enter the users email"
        :invalid-feedback="email.error"
      >
        <b-form-input
          id="registerEmailInput"
          placeholder="Email ..."
          v-model="email.value"
          :state="email.valid"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="registerPasswordFormGroup"
        label-for="registerPassword"
        label="Enter a password"
        :invalid-feedback="password.error"
      >
        <b-form-input
          id="registerPasswordInput"
          placeholder="Password ..."
          v-model="password.value"
          :state="password.valid"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="registerPasswordConfirmFormGroup"
        label-for="registerPasswordConfirm"
        label="Confirm password"
      >
        <b-form-input
          id="registerPasswordConfirmInput"
          placeholder="Retype Password ..."
          v-model="confirmPassword.value"
          :state="passwordMatches"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="makeAdminFormGroup" class="mb-3">
        <b-form-checkbox v-model="admin.value"
          >make user a system administrator</b-form-checkbox
        >
      </b-form-group>

      <b-form-group id="acceptTerms" class="mb-3">
        <p class="font-italic text-muted text-left">
          By registering a user, you understand that only the system owner can remove an account and its privileges.
          You also acknowledge that it is your responsibility to provide the user with their account credentials upon account registration. 
        </p>
        <b-form-checkbox v-model="terms.value" :state="terms.valid">
          <strong>I understand the above</strong></b-form-checkbox
        >
      </b-form-group>

      <b-button id="submitCreateUser" class="py-2 mb-3" variant="outline-primary" @click="registerButtonClicked"
        >Register</b-button
      >
      <p class="text-danger" :v-if="submit.valid">{{submit.error}}</p>
    </b-form>
    <UserRegisteredModal ref="userRegisteredModal" v-bind="formDetails"/>
  </div>
</template>

<script>
import { createUser } from "@/js/auth/userAuth.js";
import { makeUserAdmin } from "@/js/auth/userAccess.js";
import UserRegisteredModal from "@/components/authentication/ModalUserRegistered.vue";

export default {
  name: "AddUser",
  components: {
    UserRegisteredModal
  },
  data() {
    return {
      email: {
        value: "",
        reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
        valid: null,
        error: null,
      },
      password: {
        value: "",
        valid: null,
        error: null,
      },
      confirmPassword: {
        value: "",
      },
      admin: {        
        value: false,
      },
      terms: {        
        value: false,
        valid: null,
      },
      submit: {
        valid: null,
        error: ""
      }
    };
  },
  methods: {
    registerButtonClicked(){
      //reset states
      this.email.valid = true;
      this.password.valid = true;
      this.terms.valid = true;
      //check email
      if (!this.email.value){
        this.email.valid = false;
        this.email.error = "Enter an email address"
      }
      else if (!this.email.reg.test(this.email.value))
      {
        this.email.valid = false;
        this.email.error = "Enter a valid email address"
      }

      //check password
      if (this.password.value.length < 6){
        this.password.valid = false;
        this.password.error = "Minimum 6 characters required"
      }

      //check terms
      if (!this.terms.value)
      {
        this.terms.valid=false;
      }

      //register user if all good
      if (this.validForm){
        this.register().then(() => {
          console.log(this.submit.valid + " " + this.submit.error)
          if (this.submit.valid)
          {
            this.showUserRegisteredModal();
            this.resetForm();
          }
      })
    }   

    },
    async register() {
      this.submit.valid = true;
      this.submit.error = null;
      await createUser(this.email.value, this.password.value).then(async (creationToken) => {
        if (creationToken.error) {
          this.submit.valid = false;
          this.submit.error = creationToken.error;
        } else {
          if (this.admin.value) {
            await makeUserAdmin(creationToken.user).then((adminToken) => {
              if (adminToken.error) {
                  this.submit.valid = false;
                  this.submit.error = adminToken.error;
              }
            });
          }
        }
      });
    },
    showUserRegisteredModal() {
      this.$refs.userRegisteredModal.show();
    },
    resetForm(){
      this.email = {
        value: "",
        reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
        valid: null,
        error: null,
      },
      this.password = {
        value: "",
        valid: null,
        error: null,
      }
      this.confirmPassword = {
        value: "",
      }
      this.admin = {        
        value: false,
      }
      this.terms = {        
        value: false,
        valid: null,
      }
      this.submit = {
        valid: null,
        error: ""
      }
    }
  },
  computed: {
    passwordMatches(){
      if (this.confirmPassword.value)
      {
        return this.password.value === this.confirmPassword.value
      }
    },
    validForm(){
      return this.email.valid && this.password.valid && this.passwordMatches && this.terms.valid
    },
    formDetails(){
      return{
        email: this.email.value,
        password: this.password.value,
        admin: this.admin.value
      }
    }
  }
};
</script>

<style>
</style>