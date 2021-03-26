<!-- Vue component containing blank grid structure of type one -->
<template>
  <div id="typeTwoGrid">
    <br>
    
    <!-- Document 1 (Fire Water Supplies) -->
    <h1>Fire Water Supplies</h1>
    <!-- Doc 1, Sheet 1: Monthly -->
    <ejs-grid ref='fireWater_g1' id='FirstGrid' :dataSource='fireWater_s1' :toolbar='toolbarOptions' :allowExcelExport='true' :toolbarClick='exportFireWater' v-show="showFireWater">
      <e-columns>
        <e-column field="week" headerText="" textAlign="Left" width=120 :isPrimaryKey='true'></e-column>
        <e-column field="valve" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="pipe" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="inspectType" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="sig" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="remark" headerText="" textAlign="Left" width=120></e-column>
      </e-columns>
    </ejs-grid>

    <!-- Doc 1, Sheet 2: Locations-->
    <ejs-grid ref='fireWater_g2' id='SecondGrid' :dataSource='fireWater_s2' :toolbar='toolbarOptions' :allowExcelExport='true' :toolbarClick='exportFireWater' v-show='showFireWater'>
      <e-columns>
        <e-column field="location" headerText="Location" textAlign="Left" width=120 :isPrimaryKey='true'></e-column>
        <e-column field="serviceDetails" headerText="Service Specific Details" textAlign="Left" width=120></e-column>
        <e-column field="remarks" headerText="Remarks" textAlign="Left" width=120></e-column>
      </e-columns>
    </ejs-grid>

    <br>

    <!-- Document 2 (Auto-Sprinkler) -->
    <h1>Auto-Sprinkler</h1>
    <!-- Doc 1, Sheet 1: Weekly -->
    <ejs-grid ref='auto_sprinkler_g1' id='ThirdGrid' :dataSource='auto_sprinkler_s1' :toolbar='toolbarOptions' :allowExcelExport='true' :toolbarClick='exportAutoSprinkler' v-show="showAutoSprinkler">
      <e-columns>
        <e-column field="week" headerText="" textAlign="Left" width=120 :isPrimaryKey='true'></e-column>
        <e-column field="loc" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="id" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="inspectType" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="sig" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="remark" headerText="" textAlign="Left" width=120></e-column>
      </e-columns>
    </ejs-grid>

    <!-- Doc 1, Sheet 2: 2-6-Monthly -->
    <ejs-grid ref='auto_sprinkler_g2' id='FourthGrid' :dataSource='auto_sprinkler_s2' :toolbar='toolbarOptions' :allowExcelExport='true' :toolbarClick='exportAutoSprinkler' v-show="showAutoSprinkler">
      <e-columns>
        <e-column field="week" headerText="" textAlign="Left" width=120 :isPrimaryKey='true'></e-column>
        <e-column field="loc" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="id" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="inspectType" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="sig" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="remark" headerText="" textAlign="Left" width=120></e-column>
      </e-columns>
    </ejs-grid>
    
    <!-- Doc 1, Sheet 3: Locations-->
    <ejs-grid ref='auto_sprinkler_g3' id='FifthGrid' :dataSource='auto_sprinkler_s3' :toolbar='toolbarOptions' :allowExcelExport='true' :toolbarClick='exportAutoSprinkler' v-show="showAutoSprinkler">
      <e-columns>
        <e-column field="location" headerText="Location" textAlign="Left" width=120 :isPrimaryKey='true'></e-column>
        <e-column field="serviceDetails" headerText="Service Specific Details" textAlign="Left" width=120></e-column>
        <e-column field="remarks" headerText="Remarks" textAlign="Left" width=120></e-column>
      </e-columns>
    </ejs-grid>

    <br>

    <h1>Emergency Lighting</h1>
    <!-- Doc 1, Sheet 1: Weekly -->
    <ejs-grid ref='emergency_lighting_g1' id='SixthGrid' :dataSource='emergency_lighting_s1' :toolbar='toolbarOptions' :allowExcelExport='true' :toolbarClick='exportEmergencyLighting' v-show="showEmergencyLighting">
      <e-columns>
        <e-column field="week" headerText="" textAlign="Left" width=120 :isPrimaryKey='true'></e-column>
        <e-column field="generator" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="level" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="inspectType" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="sig" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="remark" headerText="" textAlign="Left" width=120></e-column>
      </e-columns>
    </ejs-grid>

    <!-- Doc 1, Sheet 2: Monthly -->
    <ejs-grid ref='emergency_lighting_g2' id='SeventhGrid' :dataSource='emergency_lighting_s2' :toolbar='toolbarOptions' :allowExcelExport='true' :toolbarClick='exportEmergencyLighting' v-show="showEmergencyLighting">
      <e-columns>
        <e-column field="week" headerText="" textAlign="Left" width=120 :isPrimaryKey='true'></e-column>
        <e-column field="lighting" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="fexit" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="inspectType" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="sig" headerText="" textAlign="Left" width=120></e-column>
        <e-column field="remark" headerText="" textAlign="Left" width=120></e-column>
      </e-columns>
    </ejs-grid>
    
    <!-- Doc 1, Sheet 3: Locations-->
    <ejs-grid ref='emergency_lighting_g3' id='EighthGrid' :dataSource='emergency_lighting_s3' :toolbar='toolbarOptions' :allowExcelExport='true' :toolbarClick='exportEmergencyLighting' v-show="showEmergencyLighting">
      <e-columns>
        <e-column field="location" headerText="Location" textAlign="Left" width=120 :isPrimaryKey='true'></e-column>
        <e-column field="serviceDetails" headerText="Service Specific Details" textAlign="Left" width=120></e-column>
        <e-column field="remarks" headerText="Remark" textAlign="Left" width=120></e-column>
      </e-columns>
    </ejs-grid>


  </div>
</template>

<script>
  import Vue from "vue"; 
  import { Workbook } from "@syncfusion/ej2-excel-export";             
  import { GridPlugin, Toolbar, ExcelExport } from "@syncfusion/ej2-vue-grids"; // add Resize here?
  import { fire_water_supplies, auto_sprinkler, emergency_lighting } from '@/../src/data/FCCS.json';

  Vue.use(GridPlugin);
  export default {
    name: 'TypeTwoGrid',
    components: {},

    data() {
      return {

        showGrid: true,
        showFireWater: true,
        showAutoSprinkler: true,
        showEmergencyLighting: true,
        
        //import all the data here

        //1st
        fireWater_s1: fire_water_supplies.weekly6Monthly,
        fireWater_s2: fire_water_supplies.locations,

        //2nd
        auto_sprinkler_s1: auto_sprinkler.weekly,
        auto_sprinkler_s2: auto_sprinkler.monthly, //Should be 2-6-Monthly, but I can't start with numbers for variable names
        auto_sprinkler_s3: auto_sprinkler.locations,

        //3rd
        emergency_lighting_s1: emergency_lighting.weekly,
        emergency_lighting_s2: emergency_lighting.monthly,
        emergency_lighting_s3: emergency_lighting.locations,

        toolbarOptions: ['ExcelExport']
      };
    },

    methods: {
      fireWaterExport(data1, data2, gridOne, gridTwo, reportName) {
          let appendExcelExportProperties = { 
          multipleExport: { type: 'NewSheet' } 
        }; 
        let firstGridExport = gridOne.excelExport(appendExcelExportProperties, true); 
        firstGridExport.then((data1) => { 
          // First sheet is renamed 
          data1.worksheets[0].name = "Weekly-6 Monthly";  
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

      autoSprinklerExport(data1, data2, data3, gridOne, gridTwo, gridThree, reportName) {
        let appendExcelExportProperties = { 
        multipleExport: { type: 'NewSheet' } 
        }; 

        let firstGridExport = gridOne.excelExport(appendExcelExportProperties, true); 
        firstGridExport.then((data1) => { 
          // First sheet is renamed 
          data1.worksheets[0].name = "Weekly";  

          // Multiple export is enabled in the excel export of the second Grid 
          let secondGridExport = gridTwo.excelExport(appendExcelExportProperties, true, data1); 
          secondGridExport.then((data2) => { 
            // Second sheet is renamed 
            data2.worksheets[1].name = "2-6 Monthly"; 

            // Add new 'let' here
            let thirdGridExport = gridThree.excelExport(appendExcelExportProperties, true, data2);
            thirdGridExport.then((data3) => {
              data3.worksheets[2].name = "Locations";
              // A new excel workbook is created with the argument data
              const book = new Workbook(data3, "xlsx");  
              // The excel sheet is saved(downloaded) using the created workbook 
              book.save(reportName + ".xlsx");  
            });
          }); 
        }); 
      },

      emergencyLightingExport(data1, data2, data3, gridOne, gridTwo, gridThree, reportName) {
        let appendExcelExportProperties = { 
        multipleExport: { type: 'NewSheet' } 
        }; 

        let firstGridExport = gridOne.excelExport(appendExcelExportProperties, true); 
        firstGridExport.then((data1) => { 
          // First sheet is renamed 
          data1.worksheets[0].name = "Weekly";  

          // Multiple export is enabled in the excel export of the second Grid 
          let secondGridExport = gridTwo.excelExport(appendExcelExportProperties, true, data1); 
          secondGridExport.then((data2) => { 
            // Second sheet is renamed 
            data2.worksheets[1].name = "Monthly"; 

            // Add new 'let' here
            let thirdGridExport = gridThree.excelExport(appendExcelExportProperties, true, data2);
            thirdGridExport.then((data3) => {
              data3.worksheets[2].name = "Locations";
              // A new excel workbook is created with the argument data
              const book = new Workbook(data3, "xlsx");  
              // The excel sheet is saved(downloaded) using the created workbook 
              book.save(reportName + ".xlsx");  
            });
          }); 
        }); 
      },

      //Single document export methods
      exportFireWater: function() {
        this.fireWaterExport(this.fireWater_s1, this.fireWater_s2, this.$refs.fireWater_g1, this.$refs.fireWater_g2, "Fire Water Supplies - Record Book");
      },

      exportAutoSprinkler: function() {
        this.autoSprinklerExport(this.auto_sprinkler_s1, this.auto_sprinkler_s2, this.auto_sprinkler_s3, this.$refs.auto_sprinkler_g1, this.$refs.auto_sprinkler_g2, this.$refs.auto_sprinkler_g3, "Automatic Sprinkler Systems - Record Book");
      },

      exportEmergencyLighting: function() {
        this.emergencyLightingExport(
                                      this.emergency_lighting_s1, 
                                      this.emergency_lighting_s2, 
                                      this.emergency_lighting_s3, 
                                      this.$refs.emergency_lighting_g1, 
                                      this.$refs.emergency_lighting_g2, 
                                      this.$refs.emergency_lighting_g3, 
                                      "Emergency Lighting Fixtures and Power System - Record Book"
        );
      },

      exportAllTypeTwo: function() {
        this.exportFireWater();
        this.exportAutoSprinkler();
        this.exportEmergencyLighting();
      },
        
      //toggle visibility method
      toggleFireWater() {
        this.showFireWater = !this.showFireWater;
      },

      toggleAutoSprinkler() {
        this.showAutoSprinkler = !this.showAutoSprinkler;
      },

      toggleEmergencyLighting() {
        this.showEmergencyLighting = !this.showEmergencyLighting;
      },

      toggleGrid() {
        this.toggleFireWater();
        this.toggleAutoSprinkler();
        this.toggleEmergencyLighting();
      },

      showAll() {
        this.showFireWater = true;
        this.showAutoSprinkler = true;
        this.showEmergencyLighting = true;
      }

    },
    
    provide: {
      grid: [Toolbar, ExcelExport] //Resize]
    }

  }
</script>

<style>
  @import url(https://cdn.syncfusion.com/ej2/material.css);
</style>