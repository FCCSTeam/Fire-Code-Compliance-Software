<template>
  <div class="modalAFASLocations">
    <div v-if="isCreate">
      <CreateEntryButton @trigger="$refs[getUniqueID].show()" />
    </div>
    <div v-else>
      <ModalButton @trigger="$refs[getUniqueID].show()" />
    </div>
    <b-modal
      :id="getUniqueID"
      :ref="getUniqueID"
      size="md"
      :static="true"
      title="Enter Location Details"
      ok-title="Apply"
      ok-variant="primary"
      ok-only
      @ok="handleOk"
      @close="handleClose"
      :no-close-on-backdrop="true"
    >
      <b-form class="px-2">
        <b-row>
          <b-col cols="12">
            <b-form-group label-for="location" label="Device Locations: ">
              <b-form-input
                v-model="entry.location"
                :state="states.deviceLoc"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label-for="serviceDetails"
              label="Service Specific Details: "
            >
              <b-form-input v-model="entry.serviceDetails"></b-form-input>
            </b-form-group>

            <b-form-group label-for="remarks" label="Remarks: ">
              <b-form-input v-model="entry.remarks"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
      </b-form>
      <span class="text-danger">{{ error }}</span>
    </b-modal>
  </div>
</template>

<script>
import ModalButton from "@/components/reporteditor/modals/ModalButton.vue";
import CreateEntryButton from "@/components/reporteditor/CreateEntryButton.vue";
import { getErrorMessages } from "@/js/reporteditor/ModalData.js";

export default {
  name: "Modal_AFAS_3_Locations",
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
      entry: {
      },
      states: {
        deviceLoc: null,
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
      this.states.deviceLoc = null;
      if (this.entry.location == false) {
        this.states.deviceLoc = false;
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
      this.entryData.serviceDetails = this.entry.serviceDetails;
      this.entryData.remarks = this.entry.remarks;
      this.closeModal();
    },

    createNewEntry() {
      let newEntry = {
        location: this.entry.location,
        serviceDetails: this.entry.serviceDetails,
        remarks: this.entry.remarks,
      };
      this.recordBook.data.locations.push(newEntry);
      this.closeModal();
      this.defaultModal();
    },

    defaultModal() {
      if (this.isCreate) {
        this.entry = {
          location: "",
          serviceDetails: "",
          remarks: ""
        }
      } else {
        this.initWithEntryData();
      }
        this.states.location = null;
        this.error = null;
      },

    initWithEntryData() {
      this.entry = {
        location: this.entryData.location,
        serviceDetails: this.entryData.serviceDetails,
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
  }
};
</script>

<style scoped>
.form-text {
  font-size: 90%;
}
</style>
