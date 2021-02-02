<template>
  <div class="file-selection-container">
    <div class="create-file-container section">
      <h2>Click to create a new report file</h2>
      <GPickerCreate />
    </div>
    <div class="open-file-container section">
      <h2>Click to open an existing report file</h2>
      <GPickerOpenExisting />
    </div>
  </div>
</template>

<script>
import GPickerOpenExisting from "@/components/filepicker/GPickerOpenExisting.vue";
import GPickerCreate from "@/components/filepicker/GPickerCreate.vue";

export default {
  name: "FileSelectionContainer",
  components: {
    GPickerOpenExisting,
    GPickerCreate
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
.file-selection-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.file-selection-container .section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>