<template>
  <div id="gPickerContainer">
        <b-row align-h="start">
            <b-col xs md="auto" class="mt-2"><GPickerCreate /></b-col>
            <b-col xs md="auto" class="mt-2"><GPickerOpenExisting /></b-col>
        </b-row>
  </div>
</template>

<script>
import GPickerOpenExisting from "@/components/filepicker/GPickerOpenExisting.vue";
import GPickerCreate from "@/components/filepicker/GPickerCreate.vue";

export default {
  name: "FileSelectionContainer",
  components: {
    GPickerOpenExisting,
    GPickerCreate,
  },
  mounted() {
    //Include Googles API Script. Appends to documents <head>
    let gDrive = document.createElement("script");
    gDrive.setAttribute("type", "text/javascript");
    gDrive.setAttribute("src", "https://apis.google.com/js/api.js");
    document.head.appendChild(gDrive);
  },
};
</script>

<style></style>
