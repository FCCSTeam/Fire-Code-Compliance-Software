<template>
  <div id="Type3View">
    <h1 class="pb-2">
      {{ recordBook.title }}
      <b-button
        class="rounded-circle py-2 help-icon"
        variant="white"
        @click="codeButtonClicked"
        ><b-icon icon="question-circle"></b-icon
      ></b-button>
    </h1>

    <div>
      <b-tabs content-class="mt-3">
        <b-tab
          v-for="(tab, index) in recordBook.tabs"
          :key="index"
          :title="tab"
        >
          <component
            v-bind:is="'Type3_' + tab"
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

import Type3_Monthly from "@/components/reporteditor/tabviews/tabs/Type3_Monthly.vue";
import Type3_Locations from "@/components/reporteditor/tabviews/tabs/Type3_Locations.vue";
import Type3_Monthly_Year from "@/components/reporteditor/tabviews/tabs/Type3_Monthly_Year.vue";
import Type3_Devices from "@/components/reporteditor/tabviews/tabs/Type3_Devices.vue";

export default {
  components: {
    Type3_Monthly,
    Type3_Locations,
    Type3_Monthly_Year,
    Type3_Devices,
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
};
</script>

<style>
.help-icon {
  font-size: 50% !important;
}
</style>