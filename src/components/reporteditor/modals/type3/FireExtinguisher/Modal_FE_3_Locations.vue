<template>
  <div class="modalFELocations">
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
      title="Enter Location Entries"
      ok-title="Apply"
      ok-variant="primary"
      ok-only
      @ok="handleOk"
      @close="handleClose"
      :no-close-on-backdrop="true"
    >
      <b-form class="px-2">
        <b-row align-h="between">
          <b-col cols="12" md="6">
            <b-form-group label-for="location" label="Building Name: ">
              <b-form-input
                v-model="entry.location"
                :state="states.location"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="6">
            <b-form-group label-for="date" label="Date: ">
              <b-form-datepicker
                v-model="entry.date"
                today-button
                close-button
              ></b-form-datepicker>
            </b-form-group>
          </b-col>

          <b-col cols="12" md="6">
            <b-form-group label-for="serialNum" label="Serial #: ">
              <b-form-input v-model="entry.serialNum"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="6">
            <b-form-group
              label-for="sizeTypeLabel"
              label="Size &amp; Type Label: "
            >
              <b-form-input v-model="entry.sizeTypeLabel"></b-form-input>
            </b-form-group>
          </b-col>

          <b-col cols="6" lg="3">
            <b-form-group label-for="items" label="Items: ">
              <b-form-radio-group
                v-model="entry.items"
                :options="serviceSpecs"
                buttons
                button-variant="outline-primary"
              ></b-form-radio-group>
            </b-form-group>
          </b-col>
          <b-col cols="6" lg="3">
            <b-form-group label-for="annualService" label="Annual Service: ">
              <b-form-radio-group
                v-model="entry.annualService"
                :options="serviceSpecs"
                buttons
                button-variant="outline-primary"
              ></b-form-radio-group>
            </b-form-group>
          </b-col>

          <b-col cols="6" lg="3">
            <b-form-group label-for="sixYearMain" label="6-YR Maintenance: ">
              <b-form-radio-group
                v-model="entry.sixYearMain"
                :options="serviceSpecs"
                buttons
                button-variant="outline-primary"
              ></b-form-radio-group>
            </b-form-group>
          </b-col>
          <b-col cols="6" lg="3">
            <b-form-group label-for="hydrostatic" label="Hydrostatic Test: ">
              <b-form-radio-group
                v-model="entry.hydrostatic"
                :options="serviceSpecs"
                buttons
                button-variant="outline-primary"
              ></b-form-radio-group>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row align-h="between">
          <b-col cols="12">
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
      serviceSpecs: [
        { text: " - ", value: "" },
        { text: "Y", value: "YES" },
        { text: "N", value: "NO" },
      ],
      entry: {},
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
      } else {
        if (this.isCreate) {
          this.createNewEntry();
        } else {
          this.updateCurrentEntry();
        }
      }
    },
    updateCurrentEntry() {
      this.entryData.location = this.entry.location;
      this.entryData.date = this.entry.date;
      this.entryData.serialNum = this.entry.serialNum;
      this.entryData.sizeTypeLabel = this.entry.sizeTypeLabel;
      this.entryData.items = this.entry.items;
      this.entryData.annualService = this.entry.annualService;
      this.entryData.sixYearMain = this.entry.sixYearMain;
      this.entryData.hydrostatic = this.entry.hydrostatic;
      this.entryData.remarks = this.entry.remarks;
      this.closeModal();
    },
    createNewEntry() {
      let newEntry = {
        location: this.entry.location,
        date: this.entry.date,
        serialNum: this.entry.serialNum,
        sizeTypeLabel: this.entry.sizeTypeLabel,
        items: this.entry.items,
        annualService: this.entry.annualService,
        sixYearMain: this.entry.sixYearMain,
        hydrostatic: this.entry.hydrostatic,
        remarks: this.entry.remarks,
        // location: this.entry.unitLoc,
        // serviceDetails: this.entry.servSpecDet,
        // remarks: this.entry.remarks,
      };
      this.recordBook.data.locations.push(newEntry);
      this.closeModal();
      this.defaultModal();
    },
    defaultModal() {
      if (this.isCreate) {
        this.entry = {
          location: "",
          date: "",
          serialNum: "",
          sizeTypeLabel: "",
          items: "",
          annualService: "",
          sixYearMain: "",
          hydrostatic: "",
          remarks: "",
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
        date: this.entryData.date,
        serialNum: this.entryData.serialNum,
        sizeTypeLabel: this.entryData.sizeTypeLabel,
        items: this.entryData.items,
        annualService: this.entryData.annualService,
        sixYearMain: this.entryData.sixYearMain,
        hydrostatic: this.entryData.hydrostatic,
        remarks: this.entryData.remarks,
      };
    },
    closeModal() {
      this.$nextTick(() => {
        this.$bvModal.hide(this.getUniqueID);
      });
    },
    handleClose() {
      this.defaultModal();
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
