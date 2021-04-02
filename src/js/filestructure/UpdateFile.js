import { getFileContent, getFileId, getParent } from '@/js/filestructure/storeFile.js'

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
        body: file
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
            body: file
            
            
        })
        .then(function(result){
            var request = gapi.client.request({
                path: "/upload/drive/v3/files/" + result.result.id,
                method: "PATCH",
                params: {uploadType: "media"},
                body: file 
            })
            request.execute(function(resp){
                console.log(resp)
            })
        })
    })

}


export {patchFile, uploadFile}