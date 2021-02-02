<template>
  <div id="GPicker_Create">
    <button @click="driveIconClicked()">Create A New Report</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickerApiLoaded: false,
      developerKey: "AIzaSyDtPr9R3LNpcMHxp4ZL7sZAJuRDPgRSe0I", //Google project API key
      clientId: "1085587302993-vdlu23buqvcumu31ffkfmt5umi9i7g6s.apps.googleusercontent.com", //Google project OAuth Client ID
      scope: "https://www.googleapis.com/auth/drive", //scope is set for readonly
      oauthToken: null,
      fileName: null,
      fileContent: null,
    };
  },
  methods: {
    //Called when user clicks on drive icon
    async driveIconClicked() {
      //console.log("Clicked");
      await gapi.load("auth2", () => {
        //console.log("Auth2 Loaded");
        gapi.auth2.authorize(
          {
            client_id: this.clientId,
            scope: this.scope,
            immediate: false,
          },
          this.handleAuthResult
        );
      });
      gapi.load("picker", () => {
        //console.log("Picker Loaded");
        this.pickerApiLoaded = true;
        this.createPicker();
      });
    },
    //handles the result from the google Auth attempt. Creates picker if success
    handleAuthResult(authResult) {
      //console.log("Handle Auth result", authResult);
      if (authResult && !authResult.error) {
        this.oauthToken = authResult.access_token;
        this.createPicker();
      }
    },
    //Creates the picker
    createPicker() {
      //console.log("Create Picker", google.picker);
      if (this.pickerApiLoaded && this.oauthToken) {
        var picker = new google.picker.PickerBuilder()
          .enableFeature(google.picker.Feature.SUPPORT_DRIVES)
          .addView(new google.picker.DocsView()
          .setParent('root')
          .setIncludeFolders(true)
          .setMimeTypes('application/vnd.google-apps.folder')
          .setSelectFolderEnabled(true))
          .addView(new google.picker.DocsView(google.picker.ViewId.DOCS)
          .setEnableDrives(true)
          .setMimeTypes('application/vnd.google-apps.folder')
          .setSelectFolderEnabled(true))
          .setOAuthToken(this.oauthToken)
          .setDeveloperKey(this.developerKey)
          .setCallback(this.pickerCallback)
          .build();
        picker.setVisible(true);
      }
    },
    //callback from the picker
    async pickerCallback(data) {
      console.log("PickerCallback", data);
      //TODO Get folder ID and create new file 
    },


  },
};
</script>

<style scoped>
#GoogleDrive {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>