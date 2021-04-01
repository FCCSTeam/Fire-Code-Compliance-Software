<template>
  <div id="modalType2Weekly6Monthly">
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
      title="Enter Monthly Entry"
      ok-title="Apply"
      ok-variant="primary"
      ok-only
      @ok="handleOk"
      @close="handleClose"
      :no-close-on-backdrop="true"
    >
      <!-- <h1>Key: {{ getKey }}</h1> -->
      <b-form class="px-2"> 
        <b-row align-h="between">
          <b-col cols="12" md="6">
            <!--Select month and week inputs for modal (1st row) -->
            <b-form-group label-for="month" label="Month: ">
              <b-form-select
                v-model="entry.month"
                :options="months"
                class=""
              ></b-form-select>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="6">
            <b-form-group label-for="week" label="Week: ">
              <b-form-radio-group
                v-model="entry.week"
                :options="weeks"
                buttons
                button-variant="outline-primary"
              ></b-form-radio-group>
            </b-form-group>
          </b-col>
        </b-row>
        <!-- 1st + 2nd column in Excel (2nd row) --> 
        <!-- label-for = key, label = value --> 
        <b-row align-h="between">
          <b-col cols="12" md="6">
            <b-form-group label-for="valve" label="Fire Water Main Valves: ">
              <b-form-input v-model="entry.valve"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="6">
            <b-form-group label-for="id" label="Standpipe Pumps: ">
              <b-form-input v-model="entry.pipe"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <!-- 3rd row -->
        <b-row align-h="between">
          <b-col cols="12" md="6">
            <b-form-group label-for="type" label="Inspection Check Test:  ">
              <b-form-input v-model="entry.type"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="6">
            <b-form-group label-for="signature" label="Signature: ">
              <b-form-input v-model="entry.signature"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

         <!-- 4th row -->
        <b-row>
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
import { getMonths, getWeeks, getErrorMessages } from "@/js/reporteditor/ModalData.js";
import ModalButton from "@/components/reporteditor/modals/ModalButton.vue";
import CreateEntryButton from "@/components/reporteditor/CreateEntryButton.vue";

export default {
  name: "Modal_FWS_2_Weekly_6_Monthly",
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
      months: getMonths(),
      weeks: getWeeks(),
      entry: {},
      error: null,
    };
  },
  computed: {
    getUniqueID() {
      return this.uniqueID;
    },
    getNewEntryKey() {
      return this.entry.month + "," + this.entry.week
    }
  },
  methods: {
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      this.error = null;
      if (this.isCreate) {
        this.createNewEntry();
      } else {
        this.updateCurrentEntry();
      }
    },
    updateCurrentEntry() {
      this.entryData.flag = false; //to ignore itself during duplicate checking
      for (const entry of this.recordBook.data.weekly6Monthly) {
        if (entry.key) {
          if (entry.key == this.getNewEntryKey && entry.flag == true) {
            this.error = getErrorMessages().duplicate;
            this.entryData.flag = true;
            break;
          }
        }
      }
      if (!this.error) {
        //TODO make changes to data
        this.updateRecordBook();
        this.closeModal();
      }
    },
    createNewEntry() {
      for (const entry of this.recordBook.data.weekly6Monthly) {
        if (entry.key) {
          if (entry.key == this.getNewEntryKey && entry.flag == true) {
            this.error = getErrorMessages().duplicate;
            break;
          }
        }
      
      }
      if (!this.error) {
        this.updateRecordBook();
        this.closeModal();
        this.defaultModal();
      }
    },
    defaultModal() {
      this.entry = {
        month: getMonths()[0],
        week: getWeeks()[0],
        valve: "",
        pipe: "",
        type: "",
        signature: "",
        remarks: "" 
      };
      this.error = null;
    },
    updateRecordBook(){
        for (const entry of this.recordBook.data.weekly6Monthly) {
          if (entry.key) {
            if (entry.key === this.getNewEntryKey) {
              entry.month = this.entry.month;
              entry.week = "Week " + this.entry.week;
              entry.valve = this.entry.valve;
              entry.pipe = this.entry.pipe;
              entry.inspectType = this.entry.type;
              entry.sig = this.entry.signature;
              entry.remark = this.entry.remarks;
              entry.flag = true;
            }
          }
        }
    },
    closeModal(){
        this.$nextTick(() => {
          this.$bvModal.hide(this.getUniqueID);
        });
    },
    handleClose(){
      this.defaultModal()
    },
  },
  mounted() {
    if (this.isCreate) {
      //create a new entry
      this.defaultModal();
    } else {
      let keys = this.entryData.key.split(",");
      //entry exists
      this.entry = {
        month: keys[0],
        week: keys[1],
        valve: this.entryData.valve,
        pipe: this.entryData.pipe,
        type: this.entryData.inspectType,
        signature: this.entryData.sig,
        remarks: this.entryData.remarks,
      };
    }
  },
};
</script>

<style scoped>
.form-text {
  font-size: 90%;
}
</style>
