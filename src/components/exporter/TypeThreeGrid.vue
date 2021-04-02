<template>
    <div id="typeThreeGrid">
        <br>

        <!-- Document 1 (Automatic Fire Alarm Systems) -->
        <h1>Automatic Fire Alarm Systems</h1>
        
        <br>

        <h2>Legend</h2>
        <!-- Doc 1, Sheet 1: Legend_Devices-->
        <ejs-grid ref='fire_alarm_g1' id='FirstGrid' :dataSource='fire_alarm_s1' :toolbar='toolbarOptions' :allowExcelExport='true' :toolbarClick='exportFireAlarm' v-show="showGrid">
            <e-columns>
                <e-column field="device" headerText="Device" textAlign="Left" width=120 :isPrimaryKey='true'></e-column>
                <e-column field="description" headerText="Description" textAlign="Left" width=120></e-column>
                <e-column field="type" headerText="Type" textAlign="Left" width=120></e-column>
                <e-column field="modelNum" headerText="Model Number" textAlign="Left" width=120></e-column>
            </e-columns>
        </ejs-grid>

        <h2>Monthly Year</h2>
        <!-- Header Titles sometimes are too long-->
        <ejs-grid ref='fire_alarm_g3' id='ThirdGrid' :dataSource='fire_alarm_s3' :toolbar='toolbarOptions' :allowExcelExport='true' :toolbarClick='exportFireAlarm' v-show="showGrid">
            <e-columns>
                <e-column field="week" headerText="Week" textAlign="Left" width=120 :isPrimaryKey='true'></e-column>
                <e-column field="entry_1A" headerText="1A" textAlign="Left" width=120></e-column>
                <e-column field="entry_1B" headerText="1B" textAlign="Left" width=120></e-column>
                <e-column field="alarmType" headerText="Alarm Type" textAlign="Left" width=120></e-column>
                <e-column field="entry_2A" headerText="2A" textAlign="Left" width=120></e-column>
                <e-column field="entry_2B" headerText="2B" textAlign="Left" width=120></e-column>
                <e-column field="entry_2C" headerText="2C" textAlign="Left" width=120></e-column>
                <e-column field="entry_2D" headerText="2D" textAlign="Left" width=120></e-column>
                <e-column field="entry_3A" headerText="3A" textAlign="Left" width=120></e-column>
                <e-column field="locationEmergPhone" headerText="Phone Location" textAlign="Left" width=120></e-column>
                <e-column field="entry_4A" headerText="4A" textAlign="Left" width=120></e-column>
                <e-column field="locationVoicePage" headerText="Voice Page Location" textAlign="Left" width=120></e-column>
                <e-column field="entry_4B" headerText="4B" textAlign="Left" width=120></e-column>
                <e-column field="sig" headerText="sig" textAlign="Left" width=120></e-column>
            </e-columns>
        </ejs-grid>

        <h2>Monthly</h2>

        <ejs-grid ref='fire_alarm_g5' id='FifthGrid' :dataSource='fire_alarm_s5' :toolbar='toolbarOptions' :allowExcelExport='true' :toolbarClick='exportFireAlarm' v-show="showGrid">
            <e-columns>
                <e-column field="week" headerText="Week" textAlign="Left" width=120 :isPrimaryKey='true'></e-column>
                <e-column field="entry_1A" headerText="1A" textAlign="Left" width=120></e-column>
                <e-column field="entry_1B" headerText="1B" textAlign="Left" width=120></e-column>
                <e-column field="alarmType" headerText="Alarm Type" textAlign="Left" width=120></e-column>
                <e-column field="entry_2A" headerText="2A" textAlign="Left" width=120></e-column>
                <e-column field="entry_2B" headerText="2B" textAlign="Left" width=120></e-column>
                <e-column field="entry_2C" headerText="2C" textAlign="Left" width=120></e-column>
                <e-column field="entry_2D" headerText="2D" textAlign="Left" width=120></e-column>
                <e-column field="entry_3A" headerText="3A" textAlign="Left" width=120></e-column>
                <e-column field="entry_3B" headerText="3A" textAlign="Left" width=120></e-column>
                <e-column field="entry_3C" headerText="3A" textAlign="Left" width=120></e-column>
                <e-column field="locationEmergPhone" headerText="Phone Location" textAlign="Left" width=120></e-column>
                <e-column field="entry_4A" headerText="4A" textAlign="Left" width=120></e-column>
                <e-column field="locationVoicePage" headerText="Voice Page Location" textAlign="Left" width=120></e-column>
                <e-column field="entry_4B" headerText="4B" textAlign="Left" width=120></e-column>
                <e-column field="sig" headerText="Signature" textAlign="Left" width=120></e-column>
            </e-columns>
        </ejs-grid>

        <h2>Devices</h2>

         <ejs-grid ref='fire_alarm_g8' id='EighthGrid' :dataSource='fire_alarm_s8' :toolbar='toolbarOptions' :allowExcelExport='true' :toolbarClick='exportFireAlarm' v-show="showGrid">
            <e-columns>
                <e-column field="location" headerText="Location" textAlign="Left" width=120 :isPrimaryKey='true'></e-column>
                <e-column field="deviceType" headerText="Device Type" textAlign="Left" width=120></e-column>
                <e-column field="entry_A" headerText="A" textAlign="Left" width=120></e-column>
                <e-column field="entry_B1" headerText="B1" textAlign="Left" width=120></e-column>
                <e-column field="entry_B2" headerText="B2" textAlign="Left" width=120></e-column>
                <e-column field="entry_C" headerText="C" textAlign="Left" width=120></e-column>
                <e-column field="entry_D" headerText="D" textAlign="Left" width=120></e-column>
                <e-column field="entry_E" headerText="E" textAlign="Left" width=120></e-column>
                <e-column field="remarks" headerText="Remarks" textAlign="Left" width=120></e-column>
            </e-columns>
        </ejs-grid>
        
        <h2>Locations</h2>

        <ejs-grid ref='fire_alarm_g9' id='NinthGrid' :dataSource='fire_alarm_s9' :toolbar='toolbarOptions' :allowExcelExport='true' :toolbarClick='exportFireAlarm' v-show="showGrid">
            <e-columns>
                <e-column field="location" headerText="Location" textAlign="Left" width=120 :isPrimaryKey='true'></e-column>
                <e-column field="serviceDetails" headerText="Service Specific Details" textAlign="Left" width=120></e-column>
                <e-column field="remark" headerText="Remark" textAlign="Left" width=120></e-column>
            </e-columns>
        </ejs-grid>

        <br>

        <h1>Fire Extinguishers</h1>
        <!-- Doc 2, Sheet 1: Monthly -->
        <ejs-grid ref='firExt_g1' id='SixthGrid' :dataSource='firExt_s1' :toolbar='toolbarOptions' :allowExcelExport='true' :toolbarClick='exportFireExtinguisher' v-show="showGrid">
            <e-columns>
                <e-column field="week" headerText="" textAlign="Left" width=120 :isPrimaryKey='true'></e-column>
                <e-column field="sig" headerText="" textAlign="Left" width=120></e-column>
                <e-column field="date" headerText="" textAlign="Left" width=120></e-column>
                <e-column field="remark" headerText="" textAlign="Left" width=120></e-column>
            </e-columns>
        </ejs-grid>

        <!-- Doc 2, Sheet 2: Locations-->
        <ejs-grid ref='firExt_g2' id='SeventhGrid' :dataSource='firExt_s2' :toolbar='toolbarOptions' :allowExcelExport='true' :toolbarClick='exportFireExtinguisher' v-show='showGrid'>
        <e-columns>
            <e-column field="location" headerText="" textAlign="Left" width=120 :isPrimaryKey='true'></e-column>
            <e-column field="date" headerText="" textAlign="Left" width=120></e-column>
            <e-column field="serialNum" headerText="" textAlign="Left" width=120></e-column>
            <e-column field="sizeTypeLabel" headerText="" textAlign="Left" width=120></e-column>
            <e-column field="items" headerText="" textAlign="Left" width=120></e-column>
            <e-column field="annualService" headerText="" textAlign="Left" width=120></e-column>
            <e-column field="sixYearMain" headerText="" textAlign="Left" width=120></e-column>
            <e-column field="hydrostatic" headerText="" textAlign="Left" width=120></e-column>
            <e-column field="remark" headerText="" textAlign="Left" width=120></e-column>
        </e-columns>
        </ejs-grid>
    </div>
</template>

<script>
    import Vue from "vue"; 
    import { Workbook } from "@syncfusion/ej2-excel-export";             
    import { GridPlugin, Toolbar, ExcelExport } from "@syncfusion/ej2-vue-grids";
    import { auto_fire_alarm_system, fire_extinguishers } from '@/../src/data/FCCS.json'

    
    Vue.use(GridPlugin);
    export default {
        name: 'TypeThreeGrid',
        components: {},

        data() {
            return {
                showGrid: true,

                //Fire Alarm Data
                fire_alarm_s1: auto_fire_alarm_system.legends,
                fire_alarm_s2: auto_fire_alarm_system.legends_notes,
                fire_alarm_s3: auto_fire_alarm_system.monthly_year,
                fire_alarm_s4: auto_fire_alarm_system.monthly_year_notes,
                fire_alarm_s5: auto_fire_alarm_system.monthly,
                fire_alarm_s6: auto_fire_alarm_system.monthly_notes,
                fire_alarm_s7: auto_fire_alarm_system.devices_notes,
                fire_alarm_s8: auto_fire_alarm_system.devices,
                fire_alarm_s9: auto_fire_alarm_system.locations,

                //Fire Extinguisher Data
                firExt_s1: fire_extinguishers.monthly,
                firExt_s2: fire_extinguishers.locations,

                toolbarOptions: ['ExcelExport']
            };
        },

        methods: {
            exportAllTypeThree: function() {
                //TODO: call all exports here
                this.exportFireAlarm();
                this.exportFireExtinguisher();
            },
            
            //Fire Alarm Exporting
            fireAlarmExport(data1, data3, data5, data8, data9, gridOne, gridThree, gridFive, gridEight, gridNine, reportName) {
                let appendExcelExportProperties = { 
                    multipleExport: { type: 'NewSheet' } 
                };
                
                let firstGridExport = gridOne.excelExport(appendExcelExportProperties, true); 
                firstGridExport.then((data1) => {
                    data1.worksheets[0].name = "Legend";

                    let thirdGridExport = gridThree.excelExport(appendExcelExportProperties, true, data1);
                    thirdGridExport.then((data3) => {
                        //Change index
                        data3.worksheets[1].name = "Monthly Year";

                        let fifthGridExport = gridFive.excelExport(appendExcelExportProperties, true, data3);
                        fifthGridExport.then((data5) => {
                            //Change index
                            data5.worksheets[2].name = "Monthly";

                            let eighthGridExport = gridEight.excelExport(appendExcelExportProperties, true, data5);
                            eighthGridExport.then((data8) => {
                                //Change index
                                data8.worksheets[3].name = "Devices";

                                let ninthGridExport = gridNine.excelExport(appendExcelExportProperties, true, data8);
                                ninthGridExport.then((data9) => {
                                    //Change index
                                    data9.worksheets[4].name = "Locations";

                                    const book = new Workbook(data9, "xlsx");
                                    // The excel sheet is saved(downloaded) using the created workbook 
                                    book.save(reportName + ".xlsx");                             
                                });                           
                            });                        
                        });
                    });
                });
            },

            //load Fire Extinguisher Data for exporting
            fireExtinguisherExport(data1, data2, gridOne, gridTwo) {
                let appendExcelExportProperties = { 
                multipleExport: { type: 'NewSheet' } 
                }; 
                    let firstGridExport = gridOne.excelExport(appendExcelExportProperties, true); 
                    firstGridExport.then((data1) => { 
                    // First sheet is renamed 
                    data1.worksheets[0].name = "Monthly";  
                    // Multiple export is enabled in the excel export of the second Grid 
                        let secondGridExport = gridTwo.excelExport(appendExcelExportProperties, true, data1); 
                        secondGridExport.then((data2) => { 
                            // Second sheet is renamed 
                            data2.worksheets[1].name = "Locations";  
                            // A new excel workbook is created with the argument data 
                            const book = new Workbook(data2, "xlsx");  
                            // The excel sheet is saved(downloaded) using the created workbook 
                            book.save("Fire Extinguishers - Record Book.xlsx");  
                        }); 
                    });
            },

            exportFireAlarm: function() {
                this.fireAlarmExport(
                    this.fire_alarm_s1, this.fire_alarm_s3, this.fire_alarm_s5, this.fire_alarm_s8, this.fire_alarm_s9,
                    this.$refs.fire_alarm_g1, this.$refs.fire_alarm_g3, this.$refs.fire_alarm_g5, this.$refs.fire_alarm_g8, this.$refs.fire_alarm_g9, 
                    "Automatic Fire Alarm Systems - Record Book"
                );
            },
            
            exportFireExtinguisher: function() {
                this.fireExtinguisherExport(this.firExt_s1, this.firExt_s2, this.$refs.firExt_g1, this.$refs.firExt_g2);
            },

            //toggle visibility method
            toggleGrid() {
            this.showGrid = !this.showGrid
            },
        },
        provide: {
            grid: [Toolbar, ExcelExport ] //Resize]
        }
    }
</script>

<style>
    @import url(https://cdn.syncfusion.com/ej2/material.css);
</style>