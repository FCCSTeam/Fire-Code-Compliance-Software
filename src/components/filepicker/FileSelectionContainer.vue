<template>
  <div>
    <b-container class="container">
      <b-row class="mt-5 text-center justify-content-center">
        <b-col class="col-lg-3">
          <b-card>
              <GPickerCreate />
              <br>
              <GPickerOpenExisting />
          </b-card>
        </b-col>
      </b-row>
    </b-container>
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
