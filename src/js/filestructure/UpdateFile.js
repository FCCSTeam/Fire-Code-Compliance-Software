

const patchFile = (content, id) =>
{
    console.log("Inside patchfile")
    var request = gapi.client.request(
        {
            path: "/upload/drive/v3/files/" + id,
            method: "PATCH", 
            params: {uploadType: "media"}, 
            body: content
        })
        request.execute(function (resp)
        {
            console.log(resp)
        })
}


export {patchFile}