import { getFileContent } from '@/js/filestructure/storeFile.js'

const recordBooks =
    [
        {id: "FDA_1", title: "Fire Department Access", page: "Type1View", tabs: ['Monthly','Locations'], codes: ['FDA_1_Code'], data: {}},
        {id: "FH_1", title: "Fire Hazards", page: "Type1View", tabs: ['Monthly','Locations'], codes: ['FH_1_Code'], data: {}},
        {id: "HB_1", title: "High Buildings", page: "Type1View", tabs: ['Monthly','Locations'], codes: ['HB_1_Code'], data: {} },
        {id: "MEFS_1", title: "Means of Egress and Fire Separation", page: "Type1View", tabs: ['Monthly','Locations'], codes: ['MEFS_1_Code'], data: {}},
        {id: "SEDCSV_1", title: "Service Equipment, Ducts, Chimneys and Smoke Venting", page: "Type1View", tabs: ['Monthly','Locations'], codes: ['SEDCSV_1_Code'], data: {}},
        {id: "SA_1", title: "Smoke Alarms", page: "Type1View", tabs: ['Monthly','Locations'], codes: ['SA_1_Code'], data: {}},
        {id: "SHS_1", title: "Standpipe Hosing Systems", page: "Type1View", tabs: ['Monthly','Locations'], codes: ['SHS_1_Code'], data: {}},
        {id: "FWS_2", title: "Fire Water Supplies", page: "Type2View", tabs: ['Weekly_6_Monthly','Locations'], codes: ['FWS_2_Code'], data: {}},
        {id: "ASS_2", title: "Automatic Sprinkler Systems", page: "Type2View", tabs: ['Weekly','2_6_Monthly', 'Locations'], codes: ['ASS_2_Code'], data: {}},
        {id: "ELFPS_2", title: "Emergency Lighting Fixtures and Power System", page: "Type2View", tabs: ['Weekly','Monthly','Locations'], codes: ['ELFPS_2_Code'], data: {}},
        {id: "AFAS_3", title: "Automatic Fire Alarm Systems", page: "Type3View", tabs: ['Monthly','Monthly_Year','Devices','Locations'], codes: ['AFAS_3_Code_Legends', 'AFAS_3_Code_Tests', 'AFAS_3_Devices','AFAS_3_Monthly', 'AFAS_3_Monthly2020'], data: {}},
        {id: "FE_3", title: "Fire Extinguishers", page: "Type3View", tabs: ['Monthly','Locations'], codes: ['FE_3_Code_NFPA2007', 'FE_3_Code_NFPA2018', 'FE_3_Code_OFC'], data: {}},
    ]

const getRecordBooks = () => {
    return recordBooks;
}

var activeTab = {};
const getActiveTab = () => {
    return activeTab
}
const setActiveTab = (recordBook) => {
    activeTab = recordBook;
}

const initRecordBook = () => {
    let token = {error: null}
    let data = getFileContent()
    //check if the data file contiains correct amount of record Books
    if (recordBooks.length != Object.keys(data).length)
    {
        token.error = "Imported file is not well structured"
        return token
    }
    else
    {
        var i;
        var keys = Object.keys(data)
        for (i = 0; i < recordBooks.length; i++) {
            if (recordBooks[i].id == data[keys[i]].id)
            {
                recordBooks[i].data = data[keys[i]] 
            }
            else
            {
                token.error = "Imported file is missing record books"
                return token
            }
        }
    }
    return token
}

const saveRecordBooks = () => {
    let data = getFileContent()
    var i;
    for (i = 0; i < recordBooks.length; i++) {
        data[Object.keys(data)[i]] = recordBooks[i].data
    }
}

export { initRecordBook, getRecordBooks , getActiveTab, setActiveTab, saveRecordBooks}