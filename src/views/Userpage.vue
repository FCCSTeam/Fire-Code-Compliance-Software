<template>
  <div id="userpage" class="position-relative">
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
        <GPickerContainer @gPickerFileSelected="toggleOverlay()"/>
        <p class="text-muted my-3">Note: <i>It is recommended to use your device in landscape mode when using the report editor</i></p>
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
            ><span class="mr-1">Google Drive</span
            ><b-icon
              icon="box-arrow-in-up-right"
              class="ml-2 text-small"
            ></b-icon></b-button
        ></a>
        <b-tooltip target="googleDriveButton" triggers="hover">
          Opens an external link
        </b-tooltip>
      </div>
      <hr class="my-4" />
      <div>
        <h2 class="d-flex">Change Your Password</h2>
        <p class="jumboText">
          If this is your first time logging on, you can change your password by going to the 'Account' tab
        </p>
      </div>
    </b-jumbotron>
      <b-overlay id="loading-overlay" :show="showLoadingOverlay" no-wrap z-index="1040" variant="light" spinner-variant="primary">
      </b-overlay>
    <div class="footer">
      <p> Made with love from Team FCCS</p>
    </div>
  </div>
</template>

<script>
import GPickerContainer from "@/components/filestructure/GPickerContainer.vue";

// import Logout from '@/components/authentication/Logout.vue'
import NavBar from "@/components/prefabs/navbar/Navbar.vue";
import { getActiveUser } from "@/js/auth/userAuth.js";

export default {
  name: "Userpage",
  components: {
    NavBar,
    GPickerContainer,
  },
  data() {
    return {
      currentUser: getActiveUser(),
      showLoadingOverlay: false,
    };
  },
  methods : {
    toggleOverlay(){
      this.showLoadingOverlay = !this.showLoadingOverlay
    }
  }
};
</script>

<style scoped>
.lead {
  font-size: 140%;
}
.jumboText {
  font-size: 120%;
}
#loading-overlay{
  height: 100vh !important;
}
.footer {
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   color: gray;
   text-align: center;
}
</style>
