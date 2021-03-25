<template>
  <div id="reporteditor">
    <Navbar />
    <div id="sidebar-button-container" class="bg-light shadow">
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
    <Sidebar @update="retrieveActiveTab" />

    <div id="recordBookView" class="mx-md-3 mt-3">
      <component v-bind:is="activeTab.page" :recordBook="activeTab"></component>
    </div>

    <!-- <Type1View /> -->
  </div>
</template>

<script>
import Navbar from "@/components/prefabs/navbar/Navbar.vue";
import { getFileContent, getFileId } from "@/js/filestructure/storeFile.js";
import {
  getRecordBooks,
  getActiveTab,
  setActiveTab,
  initRecordBook,
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
      initRecordBook(getFileContent());
      console.log('YOU HAVE REACHED HERE',getFileId())
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
  top: 73px;
  min-height: 100%;
}

#recordBookView {
  position: relative;
  left: 95px;
}
</style>