import { getFileContent, getFileId, getParent } from '@/js/filestructure/storeFile.js'

var url = ''

var developerKey = "AIzaSyDtPr9R3LNpcMHxp4ZL7sZAJuRDPgRSe0I"
var auth = null
var pickerApiLoaded = false;

const setAuth = (token) =>
{
    auth = token
}

const getAuth = () =>
{
    return auth
}

const patchFile = () =>
{
    let content = getFileContent()
    let id = getFileId()
    var request = gapi.client.request(
        {
            path: "/upload/drive/v3/files/" + id,
            method: "PATCH", 
            params: {uploadType: "media"}, 
            body: content
        })
        request.execute(function (resp)
        {
            //return error token 
            console.log(resp)
        })
}

const createPicker = () =>
{
    var picker = new google.picker.PickerBuilder()
    .enableFeature(google.picker.Feature.SUPPORT_DRIVES)
    .addView(new google.picker.DocsUploadView())
    // .addView(new google.picker.DocsView().setParent('root').setIncludeFolders(true).setMimeTypes("application/json"))
    // .addView(new google.picker.DocsView(google.picker.ViewId.DOCS).setEnableDrives(true).setMimeTypes("application/json"))
    .setOAuthToken(getAuth())
    .setDeveloperKey(developerKey)
    .setCallback(pickerCallback)
    .build();
  picker.setVisible(true);

}

const pickerCallback = (data) =>
{

}

const callPicker = () =>
{
    gapi.load("picker", () => {
        //console.log("Picker Loaded");
          pickerApiLoaded = true;
          createPicker();
          console.log('THIS MADE  PICKER1')
        });
}

const uploadFile = (file, name) =>
{
    let id = getParent()
    console.log('the folder ID is: ', id)
    
    let fileMetadata = {
        name: name,
        mimeType: 'application/vnd.google-apps.spreadsheet'
    }

    let media = {
        mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        body: fs.createReadStream(path.resolve('Fire Department Access - Record Book.xlsx'))
    }




    gapi.client.load("drive", "v3", function() {
        console.log('inside gapi')
        gapi.client.drive.files.create({
            name: fileMetadata.name,
            mimeType: fileMetadata.mimeType,
            parents: [id],
            resource: fileMetadata,
            media: media,
            params: {uploadType: "media"},
            fields: "id",                       
        }).execute()
        // .then(function(result){
        //     var request = gapi.client.request({
        //         path: "/upload/drive/v3/files/" + result.result.id,
        //         method: "PATCH",
        //         params: {uploadType: "media"},
        //         body: file 
        //     })
        //     request.execute(function(resp){
        //         console.log(resp)
        //     })
        // })
    })

}


export {patchFile, uploadFile, setAuth, callPicker}