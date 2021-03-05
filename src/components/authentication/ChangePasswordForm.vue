<template>
  <div id="addUser">
    <h3 class="mb-3">Modify Password</h3>
    <b-form @submit.prevent="modifyPasswordClicked">
      <b-form-group
        id="newPasswordFormGroup"
        label-for="newPassword"
        label="Enter a new password"
        :invalid-feedback="newPassword.error"
      >
        <b-form-input
          id="newPasswordInput"
          placeholder="New Password ..."
          v-model="newPassword.value"
          :state="newPassword.valid"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="newPasswordConfirmFormGroup"
        label-for="newPasswordConfirm"
        label="Confirm new password"
      >
        <b-form-input
          id="newPasswordConfirmInput"
          placeholder="Retype New Password ..."
          v-model="confirmNewPassword.value"
          :state="passwordMatches"
        ></b-form-input>
      </b-form-group>

      <b-button
        id="submitCreateUser"
        class="py-2 mb-3"
        variant="outline-primary"
        @click="modifyPasswordClicked"
        >Change Password</b-button
      >
      <p class="text-danger" :v-if="!submit.valid">{{ submit.error }}</p>
    </b-form>
    <ModalPasswordChanged ref="passwordChangedModal" />
  </div>
</template>

<script>
import { getActiveUser, changeUserPassword } from "@/js/auth/userAuth.js";

import ModalPasswordChanged from "@/components/authentication/ModalPasswordChanged.vue";

export default {
  name: "ChangePasswordForm",
  components: {
    ModalPasswordChanged,
  },
  data() {
    return {
      newPassword: {
        value: "",
        valid: null,
        error: null,
      },
      confirmNewPassword: {
        value: "",
      },
      submit: {
        valid: null,
        error: "",
      },
      currentUser: getActiveUser(),
    };
  },
  methods: {
    async modifyPasswordClicked() {
      //reset states
      this.newPassword.valid = true;
      //check new password
      if (this.newPassword.value.length < 6) {
        this.newPassword.valid = false;
        this.newPassword.error = "Minimum 6 characters required";
      }

      //change password if all is good user if all good
      if (this.validForm) {
        await this.changePassword().then(() => {
          if (this.submit.valid) {
            this.showPasswordChangedModal();
            this.resetForm();
          }
        });
      }
    },
    async changePassword() {
      //reauth the user
      await changeUserPassword(this.newPassword.value).then((token) => {
        if (token.error) {
          this.submit.valid = false;
          this.submit.error = token.error;
        } else {
          this.submit.valid = true;
          this.submit.error = null;
        }
      });
    },
    showPasswordChangedModal() {
      this.$refs.passwordChangedModal.show();
    },
    resetForm() {
      this.newPassword = {
        value: "",
        valid: null,
        error: null,
      },
      this.confirmNewPassword = {
        value: "",
      },
      this.submit = {
        valid: null,
        error: "",
      }
    }
  },
  computed: {
    passwordMatches() {
      if (this.newPassword.value) {
        return this.newPassword.value === this.confirmNewPassword.value;
      }
    },
    validForm() {
      return this.newPassword.valid && this.passwordMatches;
    },
  },
};
</script>

<style>
</style>