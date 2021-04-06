//declare flags for each report (12 total)
//Type 1
var ex_fire_dept_access = false
var ex_fire_hazards = false
var ex_high_buildings = false
var ex_means_egress = false
var ex_service_equipment = false
var ex_smoke_alarms = false
var ex_standpipe_hose = false
//Type 2
var ex_auto_sprinkler = false
var ex_emergency_light = false
var ex_fire_water_supp = false
//Type 3
var ex_auto_fire_alarm = false
var ex_fire_ext = false

//setters for all reports
//Type 1
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

//Type 2
const setAutoSprinkler = (flag) =>
{
    ex_auto_sprinkler = flag
}

const setEmergencyLight = (flag) =>
{
    ex_emergency_light = flag
}

const setFireWaterSupp = (flag) =>
{
    ex_fire_water_supp = flag
}

//Type 3
const setAutoFireAlarm = (flag) =>
{
    ex_auto_fire_alarm = flag
}

const setFireExt = (flag) =>
{
    ex_fire_ext = flag
}

//getters for all reports 
//Type 1
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

//Type 2
const getAutoSprinkler = () =>
{
    return ex_auto_sprinkler
}

const getEmergencyLight = () =>
{
    return ex_emergency_light
}

const getFireWaterSupp = () =>
{
    return ex_fire_water_supp
}

//Type 3
const getAutoFireAlarm = () =>
{
    return ex_auto_fire_alarm
}

const getFireExt = () =>
{
    return ex_fire_ext
}

// const resetExportFlags = () =>
// {
//     ex_fire_dept_access = false;
//     ex_fire_hazards = false;
//     ex_high_buildings = false;
//     ex_means_egress = false;
//     ex_service_equipment = false;
//     ex_smoke_alarms = false;
//     ex_standpipe_hose = false;
// }

export {setFireDeptAcc, 
        setFireHaz, 
        setHighBuild, 
        setMeansEgg, 
        setServEquip, 
        setSmokeAlarm, 
        setStandHose,
        setAutoSprinkler,
        setEmergencyLight,
        setFireWaterSupp,
        setAutoFireAlarm,
        setFireExt,
        getFireDeptAcc, 
        getFireHaz, 
        getHighBuild, 
        getMeansEgg, 
        getServEquip, 
        getSmokeAlarm, 
        getStandHose,
        getAutoSprinkler,
        getEmergencyLight,
        getFireWaterSupp,
        getAutoFireAlarm,
        getFireExt
     }