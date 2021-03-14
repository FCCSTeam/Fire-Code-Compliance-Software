
//TODO:
//make reportfile into an object
var reportFile = {fileId: null, content: null}; 

const setFile = (id,content) =>
{
    let token = { error: null }
    if (id && content)
    {
        try
        {
            reportFile.content = JSON.parse(content)
            reportFile.fileId = id
        } 
        catch(err)
        {
            token.error = err
            console.log(err)
        }
    }
    else
    {
        token.error = "Missing Args"
    }
    return token
    
}


const getFile = () =>
{
    return reportFile
}

const getFileId = () =>
{
    return reportFile.fileId
}

const getFileContent = () =>
{
    return reportFile.content
}


export {setFile, getFileContent, getFileId, getFile}