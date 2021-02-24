<template>
  <div id="userpage">
    <NavBar />

    <b-jumbotron header-level="4">
      <template #header>
        Project FCCS
      </template>
      <template class="lead" #lead>
        <span class="font-italic">Hello </span>{{ currentUser.email }}
      </template>
      <hr class="my-4">
      <p class="jumboText">
        Lets begin! Would you like to create a new inspection report or open an existing one?
      </p>
      <GPickerContainer />
    </b-jumbotron>
  </div>
</template>

<script>
import FileSelectionContainer from "@/components/filepicker/FileSelectionContainer.vue";
import GPickerContainer from "@/components/filepicker/GPickerContainer.vue";

// import Logout from '@/components/authentication/Logout.vue'
import NavBar from "@/components/navbar/NavBar.vue";
import Sidemenu from "@/components/sidemenu/Sidemenu.vue";
import { getActiveUser } from "@/js/auth/userAuth.js";
import { adminStatus } from "@/js/auth/userAccess.js";

export default {
  name: "Userpage",
  components: {
    FileSelectionContainer,
    NavBar,
    Sidemenu,
    GPickerContainer,
  },
  data() {
    return {
      currentUser: getActiveUser(),
    };
  },
  mounted() {
    adminStatus(this.currentUser).then((token) => {
      if (token.error) {
        console.log("Database Error: ", token.error);
      } else {
        console.log("Admin Status: ", token.isAdmin);
      }
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
