<template>
  <div id="adminpage">
    <Navbar />
    <div id="isAdminContainer" v-if="isAdmin">
      <b-jumbotron header-level="4" bg-variant="white">
        <template #header>Administrator</template>
        <template class="lead" #lead>
          <span class="">Hello </span>{{ currentUser.email }}
        </template>
        <hr class="my-4" />
        <h2>Create a User</h2>
        <p class="jumboText">
          Add a user to the system. Click below to toggle the form. <br />
        </p>
        <b-button
          id="createUserButton"
          class="dropdown-button py-2"
          variant="primary"
          v-b-toggle.createUserForm
          @click="createUserClicked"
          >Create a User
          <b-icon
            :icon="createUserCollapsed ? 'caret-down-fill' : 'caret-down'"
            class="ml-2"
          ></b-icon
        ></b-button>
        <b-collapse id="createUserForm" class="mt-2">
        <b-row>
          <b-col class="col-md-10 col-xl-6">
            <b-card class="shadow my-3">
              <AddUserForm />
            </b-card>
          </b-col>
        </b-row>
        </b-collapse>
        <hr class="my-4" />
      </b-jumbotron>
    </div>

    <div id="isNotAdminContainer" v-else>
      <b-jumbotron header-level="4" bg-variant="white">
        <template #header> Access is Denied </template>
        <template class="lead" #lead>
          <span class=""
            >You'll need an administrator account to access this page!
          </span>
        </template>
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
import { getActiveUser } from "@/js/auth/userAuth.js";
import { adminStatus } from "@/js/auth/userAccess.js";

//components
import Navbar from "@/components/prefabs/navbar/Navbar.vue";
import AddUserForm from "@/components/authentication/AddUserForm.vue";

export default {
  name: "Adminpage",
  components: {
    Navbar,
    AddUserForm,
  },
  data() {
    return {
      currentUser: getActiveUser(),
      isAdmin: false,
      createUserCollapsed: false,
    };
  },
  methods: {
    createUserClicked() {
      this.createUserCollapsed = !this.createUserCollapsed;
    },
  },
  mounted() {
    adminStatus(getActiveUser()).then((token) => {
      this.isAdmin = token.isAdmin;
    });
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