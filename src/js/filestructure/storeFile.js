
//TODO:
//make reportfile into an object
var reportFile = {fileId: null, content: null, name: null}; 

const setFile = (id,content, name) =>
{
    let token = { error: null }
    if (id && content)
    {
        try
        {
            reportFile.content = JSON.parse(content)
            reportFile.fileId = id
            reportFile.name = name
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

const getName = () =>
{
    return reportFile.name
}

const getFileId = () =>
{
    return reportFile.fileId
}

const getFileContent = () =>
{
    return reportFile.content
}


export {setFile, getFileContent, getFileId, getFile, getName}