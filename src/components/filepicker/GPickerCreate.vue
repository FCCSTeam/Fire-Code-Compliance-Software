<template>
  <div id="GPicker_Create">
    <b-button class="py-2" variant="primary" @click="driveIconClicked()"
      >Create A New Report</b-button
    >
    <!-- <button @click="driveIconClicked()">Create A New Report</button> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickerApiLoaded: false,
      developerKey: "AIzaSyDtPr9R3LNpcMHxp4ZL7sZAJuRDPgRSe0I", //Google project API key
      clientId:
        "1085587302993-vdlu23buqvcumu31ffkfmt5umi9i7g6s.apps.googleusercontent.com", //Google project OAuth Client ID
      scope: "https://www.googleapis.com/auth/drive", //scope is set for readonly
      oauthToken: null,
      fileName: null,
      fileContent: null,
      dataFileId: null, 
      folderId: null,  
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
      gapi.load("drive", "v3");
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
          .addView(
            new google.picker.DocsView()
              .setParent("root")
              .setIncludeFolders(true)
              .setMimeTypes("application/vnd.google-apps.folder")
              .setSelectFolderEnabled(true)
          )
          .addView(
            new google.picker.DocsView(google.picker.ViewId.DOCS)
              .setEnableDrives(true)
              .setMimeTypes("application/vnd.google-apps.folder")
              .setSelectFolderEnabled(true)
          )
          .setOAuthToken(this.oauthToken)
          .setDeveloperKey(this.developerKey)
          .setCallback(this.pickerCallback)
          .build();
        picker.setVisible(true);
      }
    },
    //callback from the picker
    async pickerCallback(data) {
      var holder = null
      if (data[google.picker.Response.ACTION] === google.picker.Action.PICKED) {
        var name = data.docs[0].name;
        var url = data.docs[0].url;
        var id = data.docs[0].id;
      }
      this.folderId = id; 
      console.log('FOLDER ID: ', this.folderId)
      //console.log("Selected Folder id: ", id);
      //console.log("url", url);
      //TODO Get folder ID and create new file

      var fileMetadata = {
        name: "FCCSv3",
        mimeType: "text/plain",
      };
      var media = {
        mimeType: fileMetadata.MimeType,
      };

      console.log("metadata: ", fileMetadata);
      console.log("media: ", media);
      
      gapi.client.load("drive", "v3", function () {
        //console.log(gapi.client.drive.files.create());

        gapi.client.drive.files.create({
          name: fileMetadata.name,
          mimeType: fileMetadata.mimeType,
          parents: [id],
          resource: fileMetadata,
          params: {
            uploadType: "media",
          },
          fields: "id",
        }).then(function(result){
          console.log('file created: ', result)
          var request = gapi.client.request({
            path: '/upload/drive/v3/files/' + result.result.id,
            method: 'PATCH',
            params: {
              uploadType: 'media'
            },
            body : 'tester FCCS file' 
        });
        holder = result.result.id
        //this.dataFileId = holder
        console.log("THE ID OF THE FILE IS: ", holder)
        //
        request.execute(function (resp) {
          //console.log(resp);
        });
          
        })


      });
      
      //console.log("THE ID OF THE FILE IS AFTER FUNCTION IS DONE: ", holder)
      
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