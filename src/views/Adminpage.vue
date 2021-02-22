<template>
  <div id="adminpage">
    <Navbar1 />
    <div id="isAdminContainer" v-if="isAdmin">
      <b-jumbotron header-level="4">
        <template #header> Administrator Page </template>
        <template class="lead" #lead>
          <span class="font-italic">Hello </span>{{ currentUser.email }}
        </template>
        <hr class="my-4" />
        <p class="jumboText">
          Here you can manage all your administrator tools
        </p>
      </b-jumbotron>
      <AddUser />
    </div>
    <div id="isNotAdminContainer" v-else>
      <b-jumbotron header-level="4">
        <template #header> Access is Denied </template>
        <template class="lead" #lead>
          <span class="font-italic">You'll need an administrator account to access this page! </span>
        </template>
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
import AddUser from "@/components/authentication/AddUser.vue";
import { getActiveUser } from "@/js/auth/userAuth.js";
import { adminStatus } from "@/js/auth/userAccess.js";

//components
import Navbar1 from "@/components/navbar/NavBar1.vue";

export default {
  name: "Adminpage",
  components: {
    Navbar1,
    AddUser,
  },
  data() {
    return {
      currentUser: getActiveUser(),
      isAdmin: false,
    };
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