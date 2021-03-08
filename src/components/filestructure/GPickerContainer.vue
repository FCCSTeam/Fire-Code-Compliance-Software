<template>
  <div id="gPickerContainer" class="d-flex flex-column justify-content-start flex-sm-row align-items-sm-center">
    <GPickerCreate />
    <GPickerOpenExisting class="mt-2 mx-0 mt-sm-0 mx-sm-3"/>
  </div>
</template>

<script>
import GPickerOpenExisting from "@/components/filestructure/GPickerOpenExisting.vue";
import GPickerCreate from "@/components/filestructure/GPickerCreate.vue";

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

<style>
#gPickerContainer {
  font-size: 120%;
}
</style>
