<template>
  <div id="re-navbar">
    <b-navbar
      class="shadow-sm d-flex align-items-center pb-1 px-sm-4 px-lg-5"
      fixed="top"
      variant="light"
      type="light"
      toggleable="sm"
    >
      <!-- Logo -->
      <b-navbar-brand>
        <b-navbar-brand>
          <p id="logo" class="my-1 text-muted">
            <b-icon icon="building"></b-icon> Project FCCS
          </p>
        </b-navbar-brand>
      </b-navbar-brand>

        <div v-if="error">
          <span class="text-danger"> 
            {{error}}
          </span>
        </div>
        <div v-else>
          <span class="text-secondary">Now Editing: <span class="text-muted font-italic">{{ getFileName }}</span></span>
        </div>

        <b-navbar-nav class="ml-auto">
            <Modal_RE_Navbar_Exit />
        </b-navbar-nav>
    </b-navbar>

    <div id="navbar-spacer">&nbsp;</div>
    
  </div>
</template>

<script>
import { getName } from "@/js/filestructure/storeFile.js"

import Modal_RE_Navbar_Exit from '@/components/prefabs/navbar/modals/Modal_RE_Navbar_Exit.vue'

export default {
  name: "NavBar",
  components : {
    Modal_RE_Navbar_Exit
  },
  data() {
    return {
      error: null,
    };
  },
  computed : {
    getFileName(){
      if (getName())
      {
        this.error = null;
        return getName()
      }
      else
      {
        this.error = "No File Detected! Please relaunch the editor."
        return ""
      }
    }
  },
};
</script>

<style>
#navbar-spacer {
  width: 100%;
  height: 74px;
}
.navbar-brand{
  font-size: 1.25rem;
}
.navbar-light .navbar-nav .nav-link{
  font-size: 100%;
  color: #6c757d !important;
}
</style>
