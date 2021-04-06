<template>
  <div id="Type1View">
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
            v-bind:is="'Type1_' + tab"
            :recordBook="recordBook"
          ></component>
        </b-tab>
      </b-tabs>
    </div>
    <div v-if="showCode">
      <StandardView @closeButtonClicked="toggleShowCode" :pages="recordBook.codes"/>
    </div>
  </div>
</template>

<script>
import Type1_Monthly from "@/components/reporteditor/tabviews/tabs/Type1_Monthly.vue";
import Type1_Locations from "@/components/reporteditor/tabviews/tabs/Type1_Locations.vue";
import StandardView from "@/components/reporteditor/standards/StandardView.vue";

export default {
  components: {
    Type1_Monthly,
    Type1_Locations,
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