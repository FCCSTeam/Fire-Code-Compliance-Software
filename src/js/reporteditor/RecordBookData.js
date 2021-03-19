const recordBooks =
    [
        {title: "Fire Department Access", page: "Type1View", tabs: ['Monthly','Locations'], data: {}},
        {title: "Fire Hazards", page: "Type1View", tabs: ['Monthly','Locations'], data: {}},
        {title: "High Buildings", page: "Type1View", tabs: ['Monthly','Locations'], data: {} },
        {title: "Means of Egress and Fire Separation", page: "Type1View", tabs: ['Monthly','Locations'], data: {}},
        {title: "Service Equipment, Ducts, Chimneys and Smoke Venting", page: "Type1View", tabs: ['Monthly','Locations'], data: {}},
        {title: "Smoke Alarms", page: "Type1View", tabs: ['Monthly','Locations'], data: {}},
        {title: "Standpipe Hosing Systems", page: "Type1View", tabs: ['Monthly','Locations'], data: {}},
        {title: "Automatic Sprinkler Systems", page: "Type2View", tabs: ['Weekly','2-6 Monthly', 'Locations'], data: {}},
        {title: "Emergency Lighting Fixtures and Power System", page: "Type2View", tabs: ['Weekly','Monthly','Locations'], data: {}},
        {title: "Fire Water Supplies", page: "Type2View", tabs: ['Weekly-6 Monthly','Locations'], data: {}},
        {title: "Automatic Fire Alarm Systems", page: "Type3View", tabs: ['Monthly','Devices','Locations'], data: {}},
        {title: "Fire Extinguishers", page: "Type3View", tabs: ['Monthly','Locations'],  data: {}},
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

const initRecordBook = (data) => {
    var i;
    for (i = 0; i < recordBooks.length; i++) {
        recordBooks[i].data = data[Object.keys(data)[i]] 
    }
}

export { initRecordBook, getRecordBooks , getActiveTab, setActiveTab}