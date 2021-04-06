<template>
  <b-container fluid class="bg-light p-5 text-right" id="standard-view">
    <b-button
      class="code-close-button rounded-circle py-2 mt-4 mr-4"
      variant="white"
      @click="$emit('closeButtonClicked')"
      ><b-icon icon="x-circle"></b-icon> C L O S E</b-button
    >
    <div class="text-left">
      <b-tabs content-class="mt-3" pills>
        <b-tab v-for="(page, index) in pages" :key="index" :title="page">
          <component v-bind:is="page"></component>
        </b-tab>
      </b-tabs>
    </div>
  </b-container>
</template>

<script>
import FDA_1_Code from "@/components/reporteditor/standards/Type1Code/FDA_1_Code.vue";
import FH_1_Code from "@/components/reporteditor/standards/Type1Code/FH_1_Code.vue"
import HB_1_Code from "@/components/reporteditor/standards/Type1Code/HB_1_Code.vue"
import MEFS_1_Code from "@/components/reporteditor/standards/Type1Code/MEFS_1_Code.vue"
import SA_1_Code from "@/components/reporteditor/standards/Type1Code/SA_1_Code.vue"
import SEDCSV_1_Code from "@/components/reporteditor/standards/Type1Code/SEDCSV_1_Code.vue"
import SHS_1_Code from "@/components/reporteditor/standards/Type1Code/SHS_1_Code.vue"

export default {
  components: {
    FDA_1_Code,
    FH_1_Code,
    HB_1_Code,
    MEFS_1_Code,
    SA_1_Code,
    SEDCSV_1_Code,
    SHS_1_Code
  },
  props: {
    pages: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
#standard-view {
  z-index: 1050 !important;
  position: fixed !important;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh !important;
  width: 100%;
  overflow-y: auto; /* don't show content that exceeds my height */
}
.code-close-button {
  font-size: 150% !important;
}
.code-header {
  width: 100%;
}
</style>