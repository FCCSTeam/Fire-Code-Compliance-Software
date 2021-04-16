<template>
<div class="d-flex justify-content-center align-items-center container ">
        <!-- <b-button
          variant="light"
          class="d-flex flex-column align-items-center"
          v-b-modal.modal-exporter
        >
          <b-icon
            class="sidemenu-button my-1 py-1"
            icon="box-arrow-up"
          ></b-icon>
          <span class="sidemenu-button-text text-secondary">EXPORT</span>
        </b-button> -->
  <b-card>
    <b-form 
    id="modal-exporter"
    title="Choose Reports to Export"
    >
    <!-- Type 1 -->
      <b-form-checkbox v-model="check_fire_dept_access" name="check-button" switch>
        Fire Department Access
      </b-form-checkbox>
      <b-form-checkbox v-model="check_fire_hazards" name="check-button" switch>
        Fire Hazards
      </b-form-checkbox>
      <b-form-checkbox v-model="check_high_buildings" name="check-button" switch>
        High Buildings
      </b-form-checkbox>
      <b-form-checkbox v-model="check_means_egress" name="check-button" switch>
        Means of Egress and Fire Separation
      </b-form-checkbox>
      <b-form-checkbox v-model="check_service_equipment" name="check-button" switch>
        Service Equipment, Ducks, Chimneys and Smoke Venting
      </b-form-checkbox>
      <b-form-checkbox v-model="check_smoke_alarms" name="check-button" switch>
        Smoke Alarms
      </b-form-checkbox>
      <b-form-checkbox v-model="check_standpipe_hose" name="check-button" switch>
        Standpipe Hose Systems
      </b-form-checkbox>
      <!-- Type 2 -->
      <b-form-checkbox v-model="check_auto_sprinkler" name="check-button" switch>
        Automatic Sprinkler Systems
      </b-form-checkbox>
      <b-form-checkbox v-model="check_emergency_lighting" name="check-button" switch>
        Emergency Lighting
      </b-form-checkbox>
      <b-form-checkbox v-model="check_fire_water_supplies" name="check-button" switch>
        Fire Water Supplies
      </b-form-checkbox>
      <!-- Type 3 -->
      <b-form-checkbox v-model="check_auto_fire_alarm_system" name="check-button" switch>
        Automatic Fire Alarm Systems
      </b-form-checkbox>
      <b-form-checkbox v-model="check_fire_extinguishers" name="check-button" switch>
        Fire Extinguishers
      </b-form-checkbox>
      <p></p>
      <span class="text-danger">Please remember to save before exporting</span>
      <p></p>
      <!--TODO: Row not finalized, fix it tomorrow :)-->
      <b-row cols="12">
        <b-col cols="12">
          <b-button variant= "secondary" @click="exportSelectedReports()">Export Selected</b-button>
        </b-col>
        <b-col cols="12" class="mt-1">
          <b-button variant= "primary" @click="exportAll()">Export All Reports</b-button>
        </b-col>
        <b-col cols="12" class="mt-1">
          <b-button variant="primary" @click="callGooglePicker()">Upload to Drive</b-button>
        </b-col>
      </b-row>

        
      

          
          <!-- <b-row align-h="end">
            <b-col cols="6">
              
            </b-col>
            <b-col cols="6">
                <b-button variant= "primary" @click="exportAll()">Export All Reports</b-button>
            </b-col>
          </b-row> -->
      <!-- <b-button variant= "primary" @click="exportSelectedReports()">Export Selections</b-button>
      <b-button @click="exportSelectedReports()">Export All Reports</b-button> --> 
      <!-- <div slot="modal-footer">
          <b-button variant="primary" @click="callGooglePicker()">Upload to Drive</b-button>
      </div> -->
     

    </b-form>
  </b-card>
  <TypeOneGrid ref="childref1" v-if="t1_ready_export" :key="t1_grid_key"></TypeOneGrid>
  <TypeTwoGrid ref="childref2" v-if="t2_ready_export" :key="t2_grid_key"></TypeTwoGrid>
  <TypeThreeGrid ref="childref3" v-if="t3_ready_export" :key="t3_grid_key"></TypeThreeGrid>
</div>
</template>



<script>
import TypeOneGrid from '@/components/exporter/TypeOneGrid.vue'
import TypeTwoGrid from '@/components/exporter/TypeTwoGrid.vue'
import TypeThreeGrid from '@/components/exporter/TypeThreeGrid.vue'
import { uploadFile, callPicker } from '@/js/filestructure/UpdateFile.js'
import { 
    //TODO: add the rest of the types flags
        setFireDeptAcc, 
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
        setFireExt
 } from "@/js/exporter/exportFlags.js";
export default {
    components: { TypeOneGrid, TypeTwoGrid, TypeThreeGrid },
    data() {
        return {
        //initialize render keys to refresh vue component
        t1_grid_key: 0,
        t2_grid_key: 0,
        t3_grid_key: 0,

        //initialize v-if booleans to trigger when to load component
        t1_ready_export: false,
        t2_ready_export: false,
        t3_ready_export: false,

        //checkbox flags for each document 
        check_fire_dept_access: false,
        check_fire_hazards: false,
        check_high_buildings: false,
        check_means_egress: false,
        check_service_equipment: false,
        check_smoke_alarms: false,
        check_standpipe_hose: false,
        check_fire_water_supplies: false,
        check_auto_sprinkler: false,
        check_emergency_lighting: false,
        check_auto_fire_alarm_system: false,
        check_fire_extinguishers: false
        }
    }, 
    methods: {
      forceRerenderGrids() {
        this.t1_grid_key += 1;
        this.t2_grid_key += 1;
        this.t3_grid_key += 1;

      },
        defaultModal() {
            this.check_fire_dept_access = false,
            this.check_fire_hazards = false,
            this.check_high_buildings = false,
            this.check_means_egress = false,
            this.check_service_equipment = false,
            this.check_smoke_alarms = false,
            this.check_standpipe_hose = false,
            this.check_fire_water_supplies = false,
            this.check_auto_sprinkler = false,
            this.check_emergency_lighting = false,
            this.check_auto_fire_alarm_system = false,
            this.check_fire_extinguishers = false
        },

        handleClose() {
        this.defaultModal();
    },

        exportSelectedReports() {


            setFireDeptAcc(this.check_fire_dept_access);
            setFireHaz(this.check_fire_hazards);
            setHighBuild(this.check_high_buildings);
            setMeansEgg(this.check_means_egress);
            setServEquip(this.check_service_equipment);
            setSmokeAlarm(this.check_smoke_alarms);
            setStandHose(this.check_standpipe_hose);
            setAutoSprinkler(this.check_auto_sprinkler);
            setEmergencyLight(this.check_emergency_lighting);
            setFireWaterSupp(this.check_fire_water_supplies);
            setAutoFireAlarm(this.check_auto_fire_alarm_system);
            setFireExt(this.check_fire_extinguishers);

            
            this.$refs.childref1.exportSelectedTypeOne();
            this.$refs.childref2.exportSelectedTypeTwo();
            this.$refs.childref3.exportSelectedTypeThree();

        },

        exportAll() {
            this.$refs.childref1.exportAllTypeOne();
            this.$refs.childref2.exportAllTypeTwo();
            this.$refs.childref3.exportAllTypeThree();
        },

        callGooglePicker() {
            //we want modal to close, reset all values (default)
            this.$bvModal.hide('modal-exporter');
            this.defaultModal();
            callPicker();

        }

    },

    mounted() {
    this.t1_ready_export = true;
    this.t2_ready_export = true
    this.t3_ready_export = true
    this.forceRerenderGrids();
    this.defaultModal();
    

    
  },

}
</script>

<style>

</style>


