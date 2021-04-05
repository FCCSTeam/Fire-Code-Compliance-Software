import { getFileContent, getFileId, getParent } from '@/js/filestructure/storeFile.js'

var url = ''

var developerKey = "AIzaSyDtPr9R3LNpcMHxp4ZL7sZAJuRDPgRSe0I"
var auth = null
var pickerApiLoaded = false;

const setAuth = (token) => {
    auth = token
}

const getAuth = () => {
    return auth
}

const patchFile = async () => {
    let content = getFileContent()
    let id = getFileId()
    const STATUS_OK = 200;
    let response = await new Promise((callback) => {
        let token = { error: null, statusCode: null }
        var request = gapi.client.request(
            {
                path: "/upload/drive/v3/files/" + id,
                method: "PATCH",
                params: { uploadType: "media" },
                body: content
            })
        request.execute(function (resp, rawResp) {
            let HTTPResponse = JSON.parse(rawResp);
            if (HTTPResponse.gapiRequest.data) {
                let statusCode = HTTPResponse.gapiRequest.data.status
                if (statusCode != STATUS_OK) {
                    token.error = "There was en error with the PATCH request"
                    token.statusCode = statusCode
                }
            }
            else
            {
                token.error = "Error parsing the PATCH response"
            }
            callback(token);
        })
    }).then((token) => {
        return token;       
    })
    return response
}

const createPicker = () =>
{
    var UploadView = new google.picker.DocsUploadView().setIncludeFolders(true)

    var picker = new google.picker.PickerBuilder().setSize(1051,650)
    .enableFeature(google.picker.Feature.SUPPORT_DRIVES)
    .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
    .addView(UploadView)
    // .addView(new google.picker.DocsView().setParent('root').setIncludeFolders(true).setMimeTypes("application/json"))
    // .addView(new google.picker.DocsView(google.picker.ViewId.DOCS).setEnableDrives(true).setMimeTypes("application/json"))
    .setOAuthToken(getAuth())
    .setDeveloperKey(developerKey)
    .setCallback(pickerCallback)
    .build();
  picker.setVisible(true);

}

const pickerCallback = (data) => {

}

const callPicker = () => {
    gapi.load("picker", () => {
        //console.log("Picker Loaded");
        pickerApiLoaded = true;
        createPicker();
        console.log('THIS MADE  PICKER1')
    });
}

const uploadFile = (file, name) => {
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




    gapi.client.load("drive", "v3", function () {
        console.log('inside gapi')
        gapi.client.drive.files.create({
            name: fileMetadata.name,
            mimeType: fileMetadata.mimeType,
            parents: [id],
            resource: fileMetadata,
            media: media,
            params: { uploadType: "media" },
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


export { patchFile, uploadFile, setAuth, callPicker }