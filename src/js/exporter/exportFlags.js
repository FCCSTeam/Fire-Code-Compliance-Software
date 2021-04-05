var ex_fire_dept_access = false
var ex_fire_hazards = false
var ex_high_buildings = false
var ex_means_egress = false
var ex_service_equipment = false
var ex_smoke_alarms = false
var ex_standpipe_hose = false

//setters
const setFireDeptAcc = (flag) =>
{
    console.log(flag, "Is it working")
    ex_fire_dept_access = flag
}

const setFireHaz = (flag) =>
{
    ex_fire_hazards = flag
}

const setHighBuild = (flag) =>
{
    ex_high_buildings = flag
}

const setMeansEgg = (flag) =>
{
    ex_means_egress = flag
}

const setServEquip = (flag) =>
{
    ex_service_equipment = flag
}

const setSmokeAlarm = (flag) =>
{
    ex_smoke_alarms = flag
}

const setStandHose = (flag) =>
{
    ex_standpipe_hose = flag
}

//getters
const getFireDeptAcc = () =>
{
    
    return ex_fire_dept_access
}

const getFireHaz = () =>
{
    return ex_fire_hazards
}

const getHighBuild = () =>
{
    return ex_high_buildings
}

const getMeansEgg = () =>
{
    return ex_means_egress
}

const getServEquip = () =>
{
    return ex_service_equipment
}

const getSmokeAlarm = () =>
{
    return ex_smoke_alarms
}

const getStandHose = () =>
{
    return ex_standpipe_hose
}

const resetExportFlags = () =>
{
    ex_fire_dept_access = false;
    ex_fire_hazards = false;
    ex_high_buildings = false;
    ex_means_egress = false;
    ex_service_equipment = false;
    ex_smoke_alarms = false;
    ex_standpipe_hose = false;
}

export {setFireDeptAcc, 
        setFireHaz, 
        setHighBuild, 
        setMeansEgg, 
        setServEquip, 
        setSmokeAlarm, 
        setStandHose,
        getFireDeptAcc, 
        getFireHaz, 
        getHighBuild, 
        getMeansEgg, 
        getServEquip, 
        getSmokeAlarm, 
        getStandHose
     }