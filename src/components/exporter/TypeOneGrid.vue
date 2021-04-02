<!-- Vue component containing blank grid structure of type one -->
<template>
  <div id="typeOneGrid">
    <br>

    <!-- Document 1 (Fire Department Access) -->
    <h1>Fire Department Access</h1>
    <!-- Doc 1, Sheet 1: Monthly -->
    <ejs-grid ref='firDepAcc_g1' id='FirstGrid' :dataSource='firDepAcc_s1' :toolbar='toolbarOptions' :allowExcelExport='true' :toolbarClick='exportFireDept' v-show="showGrid">
      <e-columns>
        <e-column field="week" headerText="" textAlign="Left" width=120 :isPrimaryKey='true'></e-column>
        <e-column field="inspectType" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="sig" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="date" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="remark" headerText="" textAlign="Left" width=120></e-column>
      </e-columns>
    </ejs-grid>
    <!-- Doc 1, Sheet 2: Locations-->
    <ejs-grid ref='firDepAcc_g2' id='SecondGrid' :dataSource='firDepAcc_s2' :toolbar='toolbarOptions' :allowExcelExport='true' :toolbarClick='exportFireDept' v-show='showGrid'>
      <e-columns>
        <e-column field="location" headerText="Location" textAlign="Left" width=120 :isPrimaryKey='true'></e-column>
        <e-column field="serviceDetails" headerText="Service Specific Details" textAlign="Left" width=120></e-column>
        <e-column field="remarks" headerText="Remarks" textAlign="Left" width=120></e-column>
      </e-columns>
    </ejs-grid>
    
    <br>

    <!-- Document 2 (Fire Hazards) -->
    <h1>Fire Hazards</h1>
    <!-- Doc 2, Sheet 1: Monthly -->
    <ejs-grid ref='firHaz_g1' id='ThirdGrid' :dataSource='firHaz_s1' :toolbar='toolbarOptions' :allowExcelExport='true' :toolbarClick='exportFireHaz' v-show="showGrid">
      <e-columns>
        <e-column field="week" headerText="" textAlign="Left" width=120 :isPrimaryKey='true'></e-column>
        <e-column field="inspectType" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="sig" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="date" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="remark" headerText="" textAlign="Left" width=120></e-column>
      </e-columns>
    </ejs-grid>

    <!-- Doc 2, Sheet 2: Locations-->
    <ejs-grid ref='firHaz_g2' id='FourthGrid' :dataSource='firHaz_s2' :toolbar='toolbarOptions' :allowExcelExport='true' :toolbarClick='exportFireHaz' v-show='showGrid'>
      <e-columns>
        <e-column field="location" headerText="Location" textAlign="Left" width=120 :isPrimaryKey='true'></e-column>
        <e-column field="serviceDetails" headerText="Service Specific Details" textAlign="Left" width=120></e-column>
        <e-column field="remarks" headerText="" textAlign="Left" width=120></e-column>
      </e-columns>
    </ejs-grid>

    <br>

    <!-- Document 3 (High Buildings) -->
    <h1>High Buildings</h1>
    <!-- Doc 3, Sheet 1: Monthly -->
    <ejs-grid ref='HighBld_g1' id='FifthGrid' :dataSource='HighBld_s1' :toolbar='toolbarOptions' :allowExcelExport='true' :toolbarClick='exportHighBld' v-show="showGrid">
      <e-columns>
        <e-column field="week" headerText="" textAlign="Left" width=120 :isPrimaryKey='true'></e-column>
        <e-column field="inspectType" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="sig" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="date" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="remark" headerText="" textAlign="Left" width=120></e-column>
      </e-columns>
    </ejs-grid>

    <!-- Doc 3, Sheet 2: Locations-->
    <ejs-grid ref='HighBld_g2' id='SixthGrid' :dataSource='HighBld_s2' :toolbar='toolbarOptions' :allowExcelExport='true' :toolbarClick='exportHighBld' v-show='showGrid'>
      <e-columns>
        <e-column field="location" headerText="Location" textAlign="Left" width=120 :isPrimaryKey='true'></e-column>
        <e-column field="serviceDetails" headerText="Service Specific Details" textAlign="Left" width=120></e-column>
        <e-column field="remarks" headerText="" textAlign="Left" width=120></e-column>
      </e-columns>
    </ejs-grid>

    <br>

    <!-- Document 4 (Means of Egress and Fire Separation) -->    
    <h1>Means of Egress and Fire Separation</h1>
    <!-- Doc 4, Sheet 1: Monthly -->
    <ejs-grid ref='meanEgr_g1' id='SeventhGrid' :dataSource='meanEgr_s1' :toolbar='toolbarOptions' :allowExcelExport='true' :toolbarClick='exportMeanEg' v-show="showGrid">
      <e-columns>
        <e-column field="week" headerText="" textAlign="Left" width=120 :isPrimaryKey='true'></e-column>
        <e-column field="inspectType" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="sig" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="date" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="remark" headerText="" textAlign="Left" width=120></e-column>
      </e-columns>
    </ejs-grid>

    <!-- Doc 4, Sheet 2: Locations-->
    <ejs-grid ref='meanEgr_g2' id='EighthGrid' :dataSource='meanEgr_s2' :toolbar='toolbarOptions' :allowExcelExport='true' :toolbarClick='exportMeanEg' v-show='showGrid'>
      <e-columns>
        <e-column field="location" headerText="Location" textAlign="Left" width=120 :isPrimaryKey='true'></e-column>
        <e-column field="serviceDetails" headerText="Service Specific Details" textAlign="Left" width=120></e-column>
        <e-column field="remarks" headerText="" textAlign="Left" width=120></e-column>
      </e-columns>
    </ejs-grid>

    <br>

    <!-- Document 5 (Service Equipment, Ducts, ....) -->    
    <h1>Service Equipment, Ducts, Chimneys and Smoke Venting - Record Book</h1>
    <!-- Doc 5, Sheet 1: Monthly -->
    <ejs-grid ref='servEquip_g1' id='NinthGrid' :dataSource='servEquip_s1' :toolbar='toolbarOptions' :allowExcelExport='true' :toolbarClick='exportServEqp' v-show="showGrid">
      <e-columns>
        <e-column field="week" headerText="" textAlign="Left" width=120 :isPrimaryKey='true'></e-column>
        <e-column field="inspectType" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="sig" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="date" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="remark" headerText="" textAlign="Left" width=120></e-column>
      </e-columns>
    </ejs-grid>

    <!-- Doc 5, Sheet 2: Locations-->
    <ejs-grid ref='servEquip_g2' id='TenthGrid' :dataSource='servEquip_s2' :toolbar='toolbarOptions' :allowExcelExport='true' :toolbarClick='exportServEqp' v-show='showGrid'>
      <e-columns>
        <e-column field="location" headerText="Location" textAlign="Left" width=120 :isPrimaryKey='true'></e-column>
        <e-column field="serviceDetails" headerText="Service Specific Details" textAlign="Left" width=120></e-column>
        <e-column field="remarks" headerText="" textAlign="Left" width=120></e-column>
      </e-columns>
    </ejs-grid>

    <br>

    <!-- Document 6 (Smoke Alarms - Record Book) -->    
    <h1>Smoke Alarms - Record Book</h1>
    <!-- Doc 6, Sheet 1: Monthly -->
    <ejs-grid ref='smokeAlarm_g1' id='EleventhGrid' :dataSource='smokeAlarm_s1' :toolbar='toolbarOptions' :allowExcelExport='true' :toolbarClick='exportSmokeAlarms' v-show="showGrid">
      <e-columns>
        <e-column field="week" headerText="" textAlign="Left" width=120 :isPrimaryKey='true'></e-column>
        <e-column field="inspectType" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="sig" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="date" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="remark" headerText="" textAlign="Left" width=120></e-column>
      </e-columns>
    </ejs-grid>

    <!-- Doc 6, Sheet 2: Locations-->
    <ejs-grid ref='smokeAlarm_g2' id='TwelfthGrid' :dataSource='smokeAlarm_s2' :toolbar='toolbarOptions' :allowExcelExport='true' :toolbarClick='exportSmokeAlarms' v-show='showGrid'>
      <e-columns>
        <e-column field="location" headerText="Location" textAlign="Left" width=120 :isPrimaryKey='true'></e-column>
        <e-column field="serviceDetails" headerText="Service Specific Details" textAlign="Left" width=120></e-column>
        <e-column field="remarks" headerText="" textAlign="Left" width=120></e-column>
      </e-columns>
    </ejs-grid>

    <br>

    <!-- Document 7 (Standpipe Hose Systems) -->    
    <h1>Standpipe Hose Systems</h1>
    <!-- Doc 7, Sheet 1: Monthly -->
    <ejs-grid ref='stdPipe_g1' id='ThriteenthGrid' :dataSource='stdPipe_s1' :toolbar='toolbarOptions' :allowExcelExport='true' :toolbarClick='exportStandPipe' v-show="showGrid">
      <e-columns>
        <e-column field="week" headerText="" textAlign="Left" width=120 :isPrimaryKey='true'></e-column>
        <e-column field="inspectType" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="sig" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="date" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="remark" headerText="" textAlign="Left" width=120></e-column>
      </e-columns>
    </ejs-grid>

    <!-- Doc 7, Sheet 2: Locations-->
    <ejs-grid ref='stdPipe_g2' id='FourteenthGrid' :dataSource='stdPipe_s2' :toolbar='toolbarOptions' :allowExcelExport='true' :toolbarClick='exportStandPipe' v-show='showGrid'>
      <e-columns>
        <e-column field="location" headerText="Location" textAlign="Left" width=120 :isPrimaryKey='true'></e-column>
        <e-column field="serviceDetails" headerText="Service Specific Details" textAlign="Left" width=120></e-column>
        <e-column field="remarks" headerText="" textAlign="Left" width=120></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script>
  import Vue from "vue"; 
  import { Workbook } from "@syncfusion/ej2-excel-export";             
  import { GridPlugin, Toolbar, ExcelExport } from "@syncfusion/ej2-vue-grids"; // add Resize here?
  import { getFileContent } from '@/js/filestructure/storeFile.js'
  import { uploadFile, callPicker } from '@/js/filestructure/UpdateFile.js'
  import { fire_dept_access, fire_hazards, high_buildings, means_egress, service_equipment, smoke_alarms, standpipe_hose } from '@/../src/data/FCCS.json'

  Vue.use(GridPlugin);
  export default {
    name: 'TypeOneGrid',
    components: {},

    data() {
      return {

        showGrid: true,
        
        //import all the data here
        //1st doc
        firDepAcc_s1: getFileContent().fire_dept_access.monthly,
        firDepAcc_s2: getFileContent().fire_dept_access.locations,

        //2nd doc
        firHaz_s1: getFileContent().fire_hazards.monthly,
        firHaz_s2: getFileContent().fire_hazards.locations,

        //3rd doc
        HighBld_s1: getFileContent().high_buildings.monthly,
        HighBld_s2: getFileContent().high_buildings.locations,

        //4th doc
        meanEgr_s1: getFileContent().means_egress.monthly,
        meanEgr_s2: getFileContent().means_egress.locations,

        // //5th doc
        servEquip_s1: getFileContent().service_equipment.monthly,
        servEquip_s2: getFileContent().service_equipment.locations,

        // //6th doc
        smokeAlarm_s1: getFileContent().smoke_alarms.monthly,
        smokeAlarm_s2: getFileContent().smoke_alarms.locations,

        // //7th doc
        stdPipe_s1: getFileContent().standpipe_hose.monthly,
        stdPipe_s2: getFileContent().standpipe_hose.locations,

        toolbarOptions: ['ExcelExport']
      };
    },

    methods: {
      typeOneExport(data1, data2, gridOne, gridTwo, reportName) {
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
            book.save(reportName + ".xlsx");
          }); 
        }); 
      }, 

      exportAllTypeOne: function() {
        this.exportFireDept();
        this.exportFireHaz();
        this.exportHighBld();
        this.exportMeanEg();
        this.exportServEqp();
        this.exportSmokeAlarms();
        this.exportStandPipe();
      },

      //Single document export methods
      exportFireDept: function() {
        console.log(getFileContent())
        this.typeOneExport(this.firDepAcc_s1, this.firDepAcc_s2, this.$refs.firDepAcc_g1, this.$refs.firDepAcc_g2, "Fire Department Access - Record Book");
      },

      exportFireHaz: function() {
        this.typeOneExport(this.firHaz_s1, this.firHaz_s2, this.$refs.firHaz_g1, this.$refs.firHaz_g2, "Fire Hazards - Record Book");
      },

      exportHighBld: function() {
        this.typeOneExport(this.HighBld_s1, this.HighBld_s2, this.$refs.HighBld_g1, this.$refs.HighBld_g2, "High Buildings - Record Book");
      },

      exportMeanEg: function() {
        this.typeOneExport(this.meanEgr_s1, this.meanEgr_s2, this.$refs.meanEgr_g1, this.$refs.meanEgr_g2, "Means of Egress and Fire Separation - Record Book");
      },

      exportServEqp: function() {
        this.typeOneExport(this.servEquip_s1, this.servEquip_s2, this.$refs.servEquip_g1, this.$refs.servEquip_g2, "Service Equipment, Ducts, Chimneys and Smoke Venting - Record Book");
      },

      exportSmokeAlarms: function() {
        this.typeOneExport(this.smokeAlarm_s1, this.smokeAlarm_s2, this.$refs.smokeAlarm_g1, this.$refs.smokeAlarm_g2, "Smoke Alarms - Record Book");
      },

      exportStandPipe: function() {
        this.typeOneExport(this.stdPipe_s1, this.stdPipe_s2, this.$refs.stdPipe_g1, this.$refs.stdPipe_g2, "Standpipe Hose Systems - Record Book");
      },
        
      //toggle visibility method
      toggleGrid() {
        this.showGrid = !this.showGrid
      },

    },
    provide: {
      grid: [Toolbar, ExcelExport] //Resize]
    }

  }
</script>

<style>
  @import url(https://cdn.syncfusion.com/ej2/material.css);
</style>