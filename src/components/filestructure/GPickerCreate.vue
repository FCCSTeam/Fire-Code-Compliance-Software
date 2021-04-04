<template>
  <div id="GPicker_Create">
    <b-button class="py-2" variant="primary" v-b-modal.modal-newfile-name
      >Create A New Report</b-button
    >
    <b-modal
      id="modal-newfile-name"
      ref="modal"
      title="Enter a file name"
      @ok="handleOk"
      @show="resetModal"
      @hidden="resetModal"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label-for="filename-input"
          invalid-feedback="File Name required"
          :state="newFileNameState"
        >
          <b-form-input
            id="filename-input"
            v-model="newFileName"
            :state="newFileNameState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
import templateFile from '@/data/FCCS.json'
import { setFile, setParent } from "@/js/filestructure/storeFile.js";
import {setAuth} from "@/js/filestructure/UpdateFile.js" 
export default {
  data() {
    return {
      newFileName: "",
      tempFileName: "",
      newFileNameState: null,

      authState: false, 
      pickerApiLoaded: false,
      developerKey: "AIzaSyDtPr9R3LNpcMHxp4ZL7sZAJuRDPgRSe0I", //Google project API key
      clientId:
        "1085587302993-vdlu23buqvcumu31ffkfmt5umi9i7g6s.apps.googleusercontent.com", //Google project OAuth Client ID
      scope: "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/spreadsheets", //scope is set for readonly
      oauthToken: null,
      fileResult: { fileId: null, parentId: null, fileContent: null, fileName: null },
      //folderId: null,
    };
  },
  methods: {
    // MODAL methods
    checkFormvalidity() {
      const valid = this.$refs.form.checkValidity();
      this.newFileNameState = valid;
      return valid;
    },
    resetModal() {
      this.newFileName = "";
      this.newFileNameState = null;
    },
    handleOk(bvModalEvt) {
      // Prevent Modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
      },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormvalidity()) {
        return;
      }
      this.tempFileName = this.newFileName;
      this.fileResult.fileName = this.tempFileName;
      this.driveIconClicked()
      
      this.resetModal();

      // Hide modal
      this.$nextTick(() => {
        this.$bvModal.hide("modal-newfile-name")
      });
    },
    //method for checking authorization state
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
      await gapi.load("auth2", () => {
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
          this.createPicker()
        }
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
      var token = null; 
      if (authResult && !authResult.error) {
        token = authResult.access_token;
        setAuth(token)
        this.oauthToken = authResult.access_token;
        this.createPicker();
      }
    },
    //Creates the picker
    createPicker() {
      //console.log("Create Picker", google.picker);
      if (this.pickerApiLoaded && this.oauthToken) {
        var picker = new google.picker.PickerBuilder()
          .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
          .enableFeature(google.picker.Feature.SUPPORT_TEAM_DRIVES)
          .addView(
            new google.picker.DocsView()
              .setParent("root")
              .setIncludeFolders(true)
              .setMimeTypes("application/vnd.google-apps.folder")
              .setSelectFolderEnabled(true)
          )
          .addView(
            new google.picker.DocsView(google.picker.ViewId.DOCS)
              .setEnableTeamDrives(true)
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
      if (data[google.picker.Response.ACTION] === google.picker.Action.PICKED) {
        this.fileResult.parentId = data.docs[0].id;
        console.log("the parentid is:", this.fileResult.parentId)
        this.makeFile(this.fileResult);
      }

      
    },
    makeFile(resultFile) {
      var baseReport = templateFile

      resultFile.fileContent = JSON.stringify(baseReport)

      var fileMetadata = {
        name: this.tempFileName,
        mimeType: "application/json",
      };
      
      var media = {
        mimeType: fileMetadata.MimeType,
      };

      gapi.client.load("drive", "v3", function () {
        gapi.client.drive.files
          .create({
            name: fileMetadata.name,
            mimeType: fileMetadata.mimeType,
            parents: [resultFile.parentId],
            resource: fileMetadata,
            params: { uploadType: "media" },
            fields: "id",
          })
          .then(function (result) {
            var request = gapi.client.request({
              path: "/upload/drive/v3/files/" + result.result.id,
              method: "PATCH",
              params: { uploadType: "media" },
              body: baseReport,
            });
              request.execute(function (resp) {
                console.log("resp: ", resp);
                resultFile.fileId = result.result.id;
              }),
              function(error){
                if (error)
                {
                  alert('There was an error with creating the file please try again')
                }
              }
          });
      });
      
      //
    },
  },
  //watcher method
  watch: {
    fileResult: {
      handler(newVal) {
        if(this.fileResult.fileId && this.fileResult.parentId && this.fileResult.fileContent && this.fileResult.fileName)
        {
          setFile(this.fileResult.fileId, this.fileResult.fileContent, this.fileResult.fileName)
          setParent(this.fileResult.parentId)
          this.$router.replace({ name: "ReportEditor" });
        }
      },
      deep: true,
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