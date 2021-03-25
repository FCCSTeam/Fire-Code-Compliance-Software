<template>
  <div class="modalContainer">
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
      :no-close-on-backdrop="true"
    >
      <b-form class="px-2">
        <b-row>
          <b-col cols="12">
            <b-form-group label-for="unitLoc" label="Unit Location: ">
              <b-form-input
                v-model="entry.unitLoc"
                :state="states.unitLoc"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label-for="servSpecDet"
              label="Service Specific Details: "
            >
              <b-form-input v-model="entry.servSpecDet"></b-form-input>
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
        unitLoc: null,
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
      this.states.unitLoc = null;
      if (this.entry.unitLoc == false) {
        this.states.unitLoc = false;
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
      this.entryData.location = this.entry.unitLoc;
      this.entryData.serviceDetails = this.entry.servSpecDet;
      this.entryData.remarks = this.entry.remarks;
      this.closeModal();
    },
    createNewEntry() {
      let newEntry = {
        location: this.entry.unitLoc,
        serviceDetails: this.entry.servSpecDet,
        remarks: this.entry.remarks,
      };
      this.recordBook.data.locations.push(newEntry);
      this.closeModal();
      this.defaultModal();
    },
    defaultModal() {
      this.entry = {
        unitLoc: "",
        servSpecDet: "",
        remarks: ""
      }
      this.error = null;
    },
    initWithEntryData() {
      this.entry = {
        unitLoc: this.entryData.location,
        servSpecDet: this.entryData.serviceDetails,
        remarks: this.entryData.remarks
      }
    },
    closeModal() {
      this.$nextTick(() => {
        this.$bvModal.hide(this.getUniqueID);
      });
    },
  },
  mounted() {
    if (this.isCreate) {
      this.defaultModal();
    } else {
      this.initWithEntryData();
    }
  },
};
</script>

<style scoped>
.form-text {
  font-size: 90%;
}
</style>
