<template>
  <div id="reporteditor">
    <Navbar />
    <div
      id="sidebar-button-container"
      class="bg-light shadow d-flex flex-column justify-content-between"
    >
      <div>
        <b-button
          id="sidebar-burgerMenu"
          pill
          class="d-flex justify-content-center align-items-center m-2 m-md-3"
          variant="outline-secondary"
          type="light"
          v-b-toggle.recordbook-sidebar
          ><b-icon icon="list"></b-icon
        ></b-button>
      </div>

      <div
        id="sidebar-bottom-buttons"
        class="d-flex flex-column align-items-center"
      >
        <b-overlay
          :show="showSaveSpinner"
          rounded
          spinner-type="grow"
          opacity="0.6"
          spinner-variant="primary"
          class="d-inline-block"
        >
          <b-button
            variant="light"
            class="d-flex flex-column align-items-center mb-2"
            @click="saveButtonClicked()"
          >
            <b-icon class="sidemenu-button my-1" icon="cloud-arrow-up"></b-icon>
            <span class="sidemenu-button-text text-secondary">SAVE</span>
          </b-button>
        </b-overlay>

        <!-- <b-button
          variant="light"
          class="d-flex flex-column align-items-center"
          @click="$router.replace({ name: 'TypeOneGridView' })"
        >
          <b-icon
            class="sidemenu-button my-1 py-1"
            icon="box-arrow-up"
          ></b-icon>
          <span class="sidemenu-button-text text-secondary">EXPORT</span>
        </b-button> -->
        <ModalExporter/>
      </div>
    </div>

    <div id="recordBookView" class="mx-md-3 mt-3">
      <component v-bind:is="activeTab.page" :recordBook="activeTab"></component>
    </div>

    <Sidebar @update="retrieveActiveTab" />
    <div class="toasts">
      <b-toast
        id="save-success-toast"
        title="Success"
        variant="success"
        static
        auto-hide-delay="1750"
      >
        <span class="py-2 px-1 text-secondary"
          >File successfully saved to Drive.</span
        >
      </b-toast>
      <b-toast
        id="save-failure-toast"
        title="Saving Failure"
        variant="danger"
        static
        auto-hide-delay="3000"
      >
        <span class="py-2 px-1 text-secondary">
          {{ savingFailToastText }}
        </span>
      </b-toast>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/prefabs/navbar/RE_Navbar.vue";
import {
  getFileContent,
  getFileId,
  getName,
  fileOnSystem,
} from "@/js/filestructure/storeFile.js";

import {
  getRecordBooks,
  getActiveTab,
  setActiveTab,
  initRecordBook,
  saveRecordBooks,
} from "@/js/reporteditor/RecordBookData.js";
import { patchFile } from "@/js/filestructure/UpdateFile.js";

import Sidebar from "@/components/reporteditor/sidemenu/Sidebar.vue";

//imports for tab views
import Type1View from "@/components/reporteditor/tabviews/Type1View.vue";
import Type2View from "@/components/reporteditor/tabviews/Type2View.vue";
import Type3View from "@/components/reporteditor/tabviews/Type3View.vue";
import ModalExporter from "@/components/reporteditor/modals/exporter/ModalExporter.vue"

export default {
  name: "ReportEditor",
  components: { Navbar, Sidebar, Type1View, Type2View, Type3View, ModalExporter },
  data() {
    return {
      activeTab: getActiveTab(),
      showSaveSpinner: false,
      savingFailToastText: "",
    };
  },
  mounted() {
    //initTabs
    setActiveTab(getRecordBooks()[0]);
    this.retrieveActiveTab();
    //check if loadedf file is now on the system
    if (!fileOnSystem()) {
      alert("No file loaded! Please relaunch the report editor");
    }
    //initData
    this.initData();
  },
  //TODO:
  //saving (patching) edited file to google drive, sending file ID to allow patching
  methods: {
    retrieveActiveTab() {
      this.activeTab = getActiveTab();
    },
    initData() {
      let response = initRecordBook();
      if (response.error)
      {
        alert("Error Loading the File: \n" + response.error);
        this.$router.push("/userpage")
      }
    },
    async saveButtonClicked() {
      this.toggleSaveSpinner();
      let error = null;

      //Perform the save
      if (fileOnSystem()) {
        saveRecordBooks(); //saves the record book locally
        let response = await patchFile(); //Uploads the local FCCS file to the drive
        if (response.error) {
          error = "Error saving to Drive!  If you have unsaved changes, try exporting the file locally";
        }
      } else {
        error = "No file on system! Please relaunch the Report Editor";
      }

      if (error)
      {
          this.savingFailToastText = error
          this.$bvToast.show("save-failure-toast");
      }
      else
      {
          this.$bvToast.show("save-success-toast");
      }
      this.toggleSaveSpinner();
    },
    toggleSaveSpinner() {
      this.showSaveSpinner = !this.showSaveSpinner;
    },
  },
};
</script>

<style>
#sidebar-burgerMenu {
  font-size: 1.5rem;
}

#sidebar-button-container {
  z-index: 3;
  position: fixed;
  left: 0;
  top: 0;
  padding: 80px 0 20px 0;
  min-height: 100%;
}

#recordBookView {
  position: relative;
  left: 95px;
}

.sidemenu-button {
  font-size: 220% !important;
}

.sidemenu-button-text {
  font-size: 85% !important;
}

.toasts {
  position: fixed;
  top: 75px;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>