<template>
<div>
<b-button v-b-modal.modal-exporter>Launch demo modal</b-button>
  <b-modal 
  id="modal-exporter"
  title="Choose Reports to Export"
  @close="handleClose"
  :no-close-on-backdrop="true"
  >

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
    <br>

    <b-button @click="exportSelectedReports()">Export Selections</b-button>
    <!-- <b-button @click="holder()">Export All Reports</b-button> -->
    <br>
    <span class="text-danger">Please remember to save before exporting</span>
    <br>
    <div slot="modal-footer">
        <b-button @click="callGooglePicker()">Upload to Drive</b-button>
    </div>

  </b-modal>
  <TypeOneGrid ref="childref1"></TypeOneGrid>
</div>
</template>



<script>
import TypeOneGrid from '@/components/exporter/TypeOneGrid.vue'
import { uploadFile, callPicker } from '@/js/filestructure/UpdateFile.js'
import { 
    //TODO: add the rest of the types flags
        setFireDeptAcc, 
        setFireHaz, 
        setHighBuild, 
        setMeansEgg, 
        setServEquip, 
        setSmokeAlarm, 
        setStandHose
 } from "@/js/exporter/exportFlags.js";
export default {
    components: { TypeOneGrid },
    data() {
        return {
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
        check_emergenxy_lighting: false,
        check_auto_fire_alarm_system: false,
        check_fire_extinguishers: false
        }
    }, 
    methods: {
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
            this.check_emergenxy_lighting = false,
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
            this.$refs.childref1.exportSelectedTypeOne()
        },

        callGooglePicker() {
            //we want modal to close, reset all values (default)
            this.$bvModal.hide('modal-exporter');
            this.defaultModal();
            callPicker();

        }

    },

    mounted() {
    this.defaultModal();
  },

}
</script>

<style>

</style>


