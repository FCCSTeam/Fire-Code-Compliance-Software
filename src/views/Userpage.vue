<template>
  <div id="userpage">
    <NavBar />
    <b-jumbotron header-level="4" bg-variant="white">
      <template #header> Project FCCS </template>
      <template class="lead" #lead>
        <span class="">Hello </span>{{ currentUser.email }}
      </template>
      <hr class="my-4" />
      <div>
        <h2>Report Editor</h2>
        <p class="jumboText">
          Lets begin! Would you like to create a new inspection report or open
          an existing one?
        </p>
        <GPickerContainer />
      </div>
      <hr class="my-4" />
      <div>
        <h2>Your Drive</h2>
        <p class="jumboText">Click below to access your drive files</p>
        <a
          href="https://drive.google.com/drive/u/0/my-drive"
          target="_blank"
          class="text-white"
          ><b-button id="googleDriveButton" class="py-2" variant="primary"
            ><span class="mr-1">Google Drive</span><b-icon icon="box-arrow-in-up-right" class="ml-2 text-small"></b-icon></b-button
          ></a
        >
        <b-tooltip target="googleDriveButton" triggers="hover">
          Opens an external link
        </b-tooltip>
      </div>
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
