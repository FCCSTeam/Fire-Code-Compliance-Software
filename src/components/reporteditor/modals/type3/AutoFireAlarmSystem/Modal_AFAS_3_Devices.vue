<template>
  <div class="modalAFASDevices">
    <div v-if="isCreate">
      <CreateEntryButton @trigger="$refs[getUniqueID].show()" />
    </div>
    <div v-else>
      <ModalButton @trigger="$refs[getUniqueID].show()" />
    </div>
    <b-modal
      :id="getUniqueID"
      :ref="getUniqueID"
      size="lg"
      :static="true"
      title="Enter Individual Device Record"
      ok-title="Apply"
      ok-variant="primary"
      ok-only
      @ok="handleOk"
      @close="handleClose"
      :no-close-on-backdrop="true"
    >
      <b-form class="px-2">
        <b-row align-h="between">
          <b-col cols="12" lg="6">
            <b-form-group label-for="location" label="Locations: ">
              <b-form-input
                v-model="entry.location"
                :state="states.location"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12" lg="6">
            <b-form-group label-for="deviceType" label="Device Type: ">
              <b-form-input v-model="entry.deviceType"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row align-h="between">
          <b-col cols="12" lg="6">
            <b-form-group label-for="entry_A" label="A: Correctly Installed">
              <b-form-radio-group
                v-model="entry.entry_A"
                :options="criteria"
                buttons
                button-variant="outline-primary"
              ></b-form-radio-group>
            </b-form-group>
          </b-col>
          <b-col cols="12" lg="6">
            <b-form-group label-for="entry_B1" label="B1: Missing">
              <b-form-radio-group
                v-model="entry.entry_B1"
                :options="criteria"
                buttons
                button-variant="outline-primary"
              ></b-form-radio-group>
            </b-form-group>
          </b-col>

          <b-col cols="12" lg="6">
            <b-form-group
              label-for="entry_B2"
              label="B2: Req. Service or Repairs"
            >
              <b-form-radio-group
                v-model="entry.entry_B2"
                :options="criteria"
                buttons
                button-variant="outline-primary"
              ></b-form-radio-group>
            </b-form-group>
          </b-col>
          <b-col cols="12" lg="6">
            <b-form-group label-for="entry_C" label="C: Alarm Op. Confirmed">
              <b-form-radio-group
                v-model="entry.entry_C"
                :options="criteria"
                buttons
                button-variant="outline-primary"
              ></b-form-radio-group>
            </b-form-group>
          </b-col>

          <b-col cols="12" lg="6">
            <b-form-group
              label-for="entry_D"
              label="D: Annunciation Indication Confirmed"
            >
              <b-form-radio-group
                v-model="entry.entry_D"
                :options="criteria"
                buttons
                button-variant="outline-primary"
              ></b-form-radio-group>
            </b-form-group>
          </b-col>
          <b-col cols="12" lg="6">
            <b-form-group
              label-for="entry_E"
              label="E: Circuit Num. or Address"
            >
              <b-form-radio-group
                v-model="entry.entry_E"
                :options="criteria"
                buttons
                button-variant="outline-primary"
              ></b-form-radio-group>
            </b-form-group>
          </b-col>

          <b-col cols="12">
            <b-form-group label-for="remarks" label="Remarks: ">
              <b-form-input v-model="entry.remarks"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
      </b-form>
      <b-row class="px-2 text-muted"><b-col> Legend: </b-col></b-row>
      <b-row class="px-2 text-muted font-italic"
        ><b-col cols="6" lg="3">S - Satisfactory</b-col>
        <b-col cols="6" lg="3">U - Unsatisfactory</b-col>
        <b-col cols="6" lg="3">N/A - Not Applicable</b-col>
        <b-col cols="6" lg="3">N/T - Not Tested</b-col></b-row
      >
      <div class="px-2 mt-2 text-danger">{{ error }}</div>
    </b-modal>
  </div>
</template>

<script>
import ModalButton from "@/components/reporteditor/modals/ModalButton.vue";
import CreateEntryButton from "@/components/reporteditor/CreateEntryButton.vue";
import { getErrorMessages } from "@/js/reporteditor/ModalData.js";

export default {
  name: "Modal_AFAS_3_Devices",
  components: {
    ModalButton,
    CreateEntryButton,
  },
  props: {
    uniqueID: {
      type: String,
      required: true,
    },
    recordBook: {
      type: Object,
      required: true,
    },
    entryData: {
      type: Object,
      required: true,
    },
    isCreate: {
      type: Boolean,
    },
  },
  data() {
    return {
      criteria: [{text: " - ", value : ""}, "S", "U", "N/A", "N/T"],
      entry: {
      },
      states: {
        location: null,
      },
      error: null,
    };
  },
  computed: {
    getUniqueID() {
      return this.uniqueID;
    },
  },
  methods: {
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      this.error = null;
      this.states.location = null;
      if (this.entry.location == false) {
        this.states.location = false;
        this.error = getErrorMessages().required;
      } 
      else 
      {
        if (this.isCreate) {
          this.createNewEntry();
        } else {
          this.updateCurrentEntry();
        }
      }
    },
    updateCurrentEntry() {
      this.entryData.location = this.entry.location;
      this.entryData.deviceType = this.entry.deviceType;
      this.entryData.entry_A = this.entry.entry_A;
      this.entryData.entry_B1 = this.entry.entry_B1;
      this.entryData.entry_B2 = this.entry.entry_B2;
      this.entryData.entry_C = this.entry.entry_C;
      this.entryData.entry_D = this.entry.entry_D;
      this.entryData.entry_E = this.entry.entry_E;
      this.entryData.remarks = this.entry.remarks;
      this.closeModal();
    },
    createNewEntry() {
      let newEntry = {
      location: this.entry.location,
      deviceType: this.entry.deviceType,
      entry_A: this.entry.entry_A,
      entry_B1: this.entry.entry_B1,
      entry_B2: this.entry.entry_B2,
      entry_C: this.entry.entry_C,
      entry_D: this.entry.entry_D,
      entry_E: this.entry.entry_E,
      remarks: this.entry.remarks
        // location: this.entry.unitLoc,
        // serviceDetails: this.entry.servSpecDet,
        // remarks: this.entry.remarks,
      };
      this.recordBook.data.devices.push(newEntry);
      this.closeModal();
      this.defaultModal();
    },
    defaultModal() {
      if (this.isCreate) {
        this.entry = {
          location: "",
          deviceType: "",
          entry_A: "",
          entry_B1: "",
          entry_B2: "",
          entry_C: "",
          entry_D: "",
          entry_E: "",
          remarks: ""
        };
      } else {
        this.initWithEntryData();
      }
      this.states.location = null;
      this.error = null;
    },

    initWithEntryData() {
      this.entry = {
      location: this.entryData.location,
      deviceType: this.entryData.deviceType,
      entry_A: this.entryData.entry_A,
      entry_B1: this.entryData.entry_B1,
      entry_B2: this.entryData.entry_B2,
      entry_C: this.entryData.entry_C,
      entry_D: this.entryData.entry_D,
      entry_E: this.entryData.entry_E,
      remarks: this.entryData.remarks
      }
    },

    closeModal() {
      this.$nextTick(() => {
        this.$bvModal.hide(this.getUniqueID);
      });
    },

    handleClose(){
      this.defaultModal()
    },
  },
  
  mounted() {
    this.defaultModal();
  },
};
</script>

<style scoped>
.form-text {
  font-size: 90%;
}
</style>
