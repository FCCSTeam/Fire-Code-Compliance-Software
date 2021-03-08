<template>
  <div id="userSettings">
    <Navbar />
      <b-jumbotron header-level="4" bg-variant="white">
        <template #header>User Settings</template>
        <template class="lead" #lead>
          <span class="">Logged in as </span>{{ currentUser.email }}
        </template>
        <span class="jumboText text-muted">Manage your account details</span>
        <hr class="my-4" />
        <h2>Change Password</h2>
        <p class="jumboText">
          Click below to change your password <br />
        </p>
        <b-button
          id="createUserButton"
          class="dropdown-button py-2"
          variant="primary"
          v-b-toggle.changePasswordForm
          @click="changePasswordCollapsedClicked"
          >Change Password
          <b-icon
            :icon="changePasswordCollapsed ? 'caret-down-fill' : 'caret-down'"
            class="ml-2"
          ></b-icon
        ></b-button>
        <b-collapse id="changePasswordForm" class="mt-2">
        <b-row>
          <b-col class="col-md-10 col-xl-6">
            <b-card class="shadow my-3">
              <ChangePasswordForm />
            </b-card>
          </b-col>
        </b-row>
        </b-collapse>
        <hr class="my-4" />
      </b-jumbotron>
    </div>
</template>

<script>
import { getActiveUser } from "@/js/auth/userAuth.js";

//components
import Navbar from "@/components/prefabs/navbar/Navbar.vue";
import ChangePasswordForm from "@/components/authentication/ChangePasswordForm.vue"

export default {
  name: "UserSettings",
  components: {
    Navbar,
    ChangePasswordForm,
  },
  data() {
    return {
      currentUser: getActiveUser(),
      changePasswordCollapsed: false,
    };
  },
  methods: {
    changePasswordCollapsedClicked() {
      this.changePasswordCollapsed = !this.changePasswordCollapsed;
    },
  },
};
</script>

<style scoped>
.lead {
  font-size: 140%;
}
.jumboText {
  font-size: 120%;
}
</style>