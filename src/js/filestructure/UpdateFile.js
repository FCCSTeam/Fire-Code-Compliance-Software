import { getFileContent, getFileId } from '@/js/filestructure/storeFile.js'

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


export {patchFile}