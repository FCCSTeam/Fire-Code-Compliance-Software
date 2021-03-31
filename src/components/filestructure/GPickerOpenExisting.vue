<template>
  <div id="GPicker_OpenExisting">
    <b-button class="py-2" variant="primary" @click="driveIconClicked()">Open Existing Report</b-button>
  </div>
</template>

<script>
import {setFile } from "@/js/filestructure/storeFile.js";

export default {
  data() {
    return {
      authState: false,
      pickerApiLoaded: false,
      developerKey: "AIzaSyDtPr9R3LNpcMHxp4ZL7sZAJuRDPgRSe0I", //Google project API key
      clientId: "1085587302993-vdlu23buqvcumu31ffkfmt5umi9i7g6s.apps.googleusercontent.com", //Google project OAuth Client ID
      scope: "https://www.googleapis.com/auth/drive", //scope is set for readonly
      oauthToken: null,
      fileName: null,
      fileContent: null,
      FileId: null
    };
  },
  methods: {
    isAuthorized()
    {
      if(this.authState)
      {
        return true
      }
      else
      {
        return false
      }
    },
    //Called when user clicks on drive icon
    async driveIconClicked() {
      //console.log("Clicked");
      await gapi.load("auth2", () => {
        //console.log("Auth2 Loaded");
        if(!this.isAuthorized())
        {
          gapi.auth2.authorize(
            {
              client_id: this.clientId,
              scope: this.scope,
              immediate: false,
            },
            this.handleAuthResult
          );
          this.authState = true
        }
        else
        {
          //this.createPicker()
        }
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
          .addView(new google.picker.DocsView().setParent('root').setIncludeFolders(true).setMimeTypes("application/json"))
          .addView(new google.picker.DocsView(google.picker.ViewId.DOCS).setEnableDrives(true).setMimeTypes("application/json"))
          .setOAuthToken(this.oauthToken)
          .setDeveloperKey(this.developerKey)
          .setCallback(this.pickerCallback)
          .build();
        picker.setVisible(true);
      }
    },
    //callback from the picker
    async pickerCallback(data) {
      //console.log("PickerCallback", data);
      if (data[google.picker.Response.ACTION] === google.picker.Action.PICKED) {
        //get only first document of array of selected docs
        var doc = data[google.picker.Response.DOCUMENTS][0];
        if (doc) {
          this.fileName = doc.name
          //generate the download URL for this doc
          //the alt=media is important for ensuring the content of the file is placed in response body
          this.fileId = doc.id
          var downloadUrl =
            "https://www.googleapis.com/drive/v2/files/" +
            doc.id +
            "?key=" +
            this.developerKey +
            " HTTP/1.1&alt=media";
          this.downloadFile(downloadUrl, this.displayFileContent);
        }
      }
    },
    //performs GET for the content of the file
    async downloadFile(downloadUrl, callback) {
      if (downloadUrl && this.oauthToken) {
        var accessToken = this.oauthToken;
        var xhr = new XMLHttpRequest(); 
        xhr.open("GET", downloadUrl);
        xhr.setRequestHeader("Authorization", "Bearer " + accessToken);
        xhr.onload = function () {
          callback(xhr.responseText);
        };
        xhr.onerror = function () {
          callback(null);
        };
        xhr.send();
      } else {
        callback(null);
      }
    },
    displayFileContent(content) {
      if (content)
      {
        //content was retrieved from the GET Request
        this.fileContent = content;
        setFile(this.fileId, this.fileContent, this.fileName)

        //console.log(content)
        this.$router.replace({ name: "ReportEditor" });
      }
      else
      {
        //download file attempt failed
        this.fileContent = null;
        this.fileId = null; 
        this.fileName = null; 
      }
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