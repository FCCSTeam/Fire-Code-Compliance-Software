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

    var request = gapi.client.request(
        {
            path: "/upload/drive/v3/files/",
            method: "POST",
            params: {uploadType: "media"},
            body: file
        })
        request.execute(function(resp){
            console.log(resp)
        })


}


export {patchFile, uploadFile}