import { getFileContent } from '@/js/filestructure/storeFile.js'

const recordBooks =
    [
        {id: "FDA_1", title: "Fire Department Access", page: "Type1View", tabs: ['Monthly','Locations'], data: {}},
        {id: "FH_1", title: "Fire Hazards", page: "Type1View", tabs: ['Monthly','Locations'], data: {}},
        {id: "HB_1", title: "High Buildings", page: "Type1View", tabs: ['Monthly','Locations'], data: {} },
        {id: "MEFS_1", title: "Means of Egress and Fire Separation", page: "Type1View", tabs: ['Monthly','Locations'], data: {}},
        {id: "SEDCSV_1", title: "Service Equipment, Ducts, Chimneys and Smoke Venting", page: "Type1View", tabs: ['Monthly','Locations'], data: {}},
        {id: "SA_1", title: "Smoke Alarms", page: "Type1View", tabs: ['Monthly','Locations'], data: {}},
        {id: "SHS_1", title: "Standpipe Hosing Systems", page: "Type1View", tabs: ['Monthly','Locations'], data: {}},
        {id: "FWS_2", title: "Fire Water Supplies", page: "Type2View", tabs: ['Weekly_6_Monthly','Locations'], data: {}},
        {id: "ASS_2", title: "Automatic Sprinkler Systems", page: "Type2View", tabs: ['Weekly','2_6_Monthly', 'Locations'], data: {}},
        {id: "ELFPS_2", title: "Emergency Lighting Fixtures and Power System", page: "Type2View", tabs: ['Weekly','Monthly','Locations'], data: {}},
        {id: "AFAS_3", title: "Automatic Fire Alarm Systems", page: "Type3View", tabs: ['Monthly','Monthly_Year','Devices','Locations'], data: {}},
        {id: "FE_3", title: "Fire Extinguishers", page: "Type3View", tabs: ['Monthly','Locations'],  data: {}},
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