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
        <b-button
          variant="light"
          class="d-flex flex-column align-items-center mb-2"
          @click="saveButtonClicked()"
        >
          <b-icon class="sidemenu-button my-1" icon="cloud-arrow-up"></b-icon>
          <span class="sidemenu-button-text text-secondary">SAVE</span>
        </b-button>

        <b-button variant="light" class="d-flex flex-column align-items-center">
          <b-icon
            class="sidemenu-button my-1 py-1"
            icon="box-arrow-up"
          ></b-icon>
          <span class="sidemenu-button-text text-secondary">EXPORT</span>
        </b-button>
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
        <span class="py-2 px-1 text-secondary">File successfully saved to Drive.</span>
      </b-toast>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/prefabs/navbar/RE_Navbar.vue";
import { getFileContent, getFileId } from "@/js/filestructure/storeFile.js";

import {
  getRecordBooks,
  getActiveTab,
  setActiveTab,
  initRecordBook,
  saveRecordBooks,
} from "@/js/reporteditor/RecordBookData.js";
import Sidebar from "@/components/reporteditor/sidemenu/Sidebar.vue";

//imports for tab views
import Type1View from "@/components/reporteditor/tabviews/Type1View.vue";
import Type2View from "@/components/reporteditor/tabviews/Type2View.vue";

export default {
  name: "ReportEditor",
  components: { Navbar, Sidebar, Type1View, Type2View },
  data() {
    return {
      activeTab: getActiveTab(),
    };
  },
  mounted() {
    //initTabs
    setActiveTab(getRecordBooks()[0]);
    this.retrieveActiveTab();
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
      initRecordBook();
    },
    saveButtonClicked() {
      saveRecordBooks();
      this.$bvToast.show("save-success-toast");
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