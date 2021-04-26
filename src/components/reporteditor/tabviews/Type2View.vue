<template>
  <div id="Type2View">
    <h1 class="mb-0">
      {{ recordBook.title }}
      <b-button
        class="rounded-circle py-2 help-icon"
        variant="white"
        @click="codeButtonClicked"
        ><b-icon icon="question-circle"></b-icon
      ></b-button>
    </h1>
    <div class="pb-4" v-if="error">
      <span class="text-danger">
        {{ error }}
      </span>
    </div>
    <div class="pb-4" v-else>
      <span class="text-secondary font-italic"
        >Now Editing: <span class="text-muted">{{ getFileName }}</span></span
      >
    </div>
    <div>
      <b-tabs content-class="mt-3">
        <b-tab
          v-for="(tab, index) in recordBook.tabs"
          :key="index"
          :title="tab"
        >
          <component
            v-bind:is="'Type2_' + tab"
            :recordBook="recordBook"
          ></component>
        </b-tab>
      </b-tabs>
    </div>
    <div v-if="showCode">
      <StandardView
        @closeButtonClicked="toggleShowCode"
        :pages="recordBook.codes"
      />
    </div>
  </div>
</template>

<script>
import StandardView from "@/components/reporteditor/standards/StandardView.vue";

import Type2_Weekly from "@/components/reporteditor/tabviews/tabs/Type2_Weekly.vue";
import Type2_Monthly from "@/components/reporteditor/tabviews/tabs/Type2_Monthly.vue";
import Type2_Locations from "@/components/reporteditor/tabviews/tabs/Type2_Locations.vue";
import Type2_Weekly_6_Monthly from "@/components/reporteditor/tabviews/tabs/Type2_Weekly_6_Monthly.vue";
import Type2_2_6_Monthly from "@/components/reporteditor/tabviews/tabs/Type2_2_6_Monthly.vue";
import { getName } from "@/js/filestructure/storeFile.js";

export default {
  components: {
    Type2_Weekly,
    Type2_Monthly,
    Type2_Locations,
    Type2_Weekly_6_Monthly,
    Type2_2_6_Monthly,
    StandardView,
  },
  props: {
    recordBook: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showCode: false,
      error: null,
    };
  },
  methods: {
    codeButtonClicked() {
      this.toggleShowCode();
    },
    toggleShowCode() {
      this.showCode = !this.showCode;
    },
  },
  computed: {
    getFileName() {
      if (getName()) {
        this.error = null;
        return getName();
      } else {
        this.error = "No File Detected! Please relaunch the editor.";
        return "";
      }
    },
  },
};
</script>

<style>
.help-icon {
  font-size: 50% !important;
}
</style>