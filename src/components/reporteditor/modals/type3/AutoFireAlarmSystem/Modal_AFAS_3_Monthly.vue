<template>
  <div class="modalAFASMonthly">
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
      title="Enter Month Entry"
      ok-title="Apply"
      ok-variant="primary"
      ok-only
      @ok="handleOk"
      :no-close-on-backdrop="true"
    >
      <b-form class="px-2">
        <b-row align-h="between">
          <b-col cols="12" md="6">
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

        <b-row align-h="between">
          <b-col cols="12" md="6">
            <b-form-group label-for="entry_1A" label="Inspect (1A): ">
              <b-form-select
                v-model="entry.entry_1A"
                :options="tests" 
                class=""
              ></b-form-select>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="6">
            <b-form-group label-for="entry_1B" label="Inspect (1B): ">
              <b-form-select
                v-model="entry.entry_1B"
                :options="tests"
                class=""
              ></b-form-select>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row align-h="between">
          <b-col cols="12" md="3">
            <b-form-group label-for="alarmType" label="Fire Alarm Location: ">
              <b-form-input v-model="entry.alarmType"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="2">
            <b-form-group label-for="entry_2A" label="2A: ">
              <b-form-select
                v-model="entry.entry_2A"
                :options="tests"
                class=""
              ></b-form-select>
            </b-form-group>
          </b-col>
         <b-col cols="12" md="2">
            <b-form-group label-for="entry_2B" label="2B: ">
              <b-form-select
                v-model="entry.entry_2B"
                :options="tests"
                class=""
              ></b-form-select>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="2">
            <b-form-group label-for="entry_2C" label="2C: ">
              <b-form-select
                v-model="entry.entry_2C"
                :options="tests"
                class=""
              ></b-form-select>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="2">
            <b-form-group label-for="entry_2D" label="2D: ">
              <b-form-select
                v-model="entry.entry_2D"
                :options="tests"
                class=""
              ></b-form-select>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="4">
            <b-form-group label-for="entry_3A" label="Battery 3A: ">
              <b-form-select
                v-model="entry.entry_3A"
                :options="tests"
                class=""
              ></b-form-select>
            </b-form-group>
          </b-col>
          <b-col cols="4">
            <b-form-group label-for="entry_3B" label="Battery 3B: ">
              <b-form-select
                v-model="entry.entry_3B"
                :options="tests"
                class=""
              ></b-form-select>
            </b-form-group>
          </b-col>          
          <b-col cols="4">
            <b-form-group label-for="entry_3C" label="Battery 3C: ">
              <b-form-select
                v-model="entry.entry_3C"
                :options="tests"
                class=""
              ></b-form-select>
            </b-form-group>
          </b-col>        
        </b-row>

        <b-row>
          <b-col cols="12" md="3">
            <b-form-group label-for="locationEmergPhone" label="Loc. of Emerg. Phone: ">
              <b-form-input v-model="entry.locationEmergPhone"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="3">
            <b-form-group label-for="entry_4A" label="4A: ">
              <b-form-select
                v-model="entry.entry_2D"
                :options="tests"
                class=""
              ></b-form-select>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="3">
            <b-form-group label-for="locationVoicePage" label="Loc. of Voice Pager: ">
              <b-form-input v-model="entry.locationVoicePage"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="3">
            <b-form-group label-for="entry_4B" label="4B: ">
              <b-form-select
                v-model="entry.entry_2D"
                :options="tests"
                class=""
              ></b-form-select>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" md="6">
            <b-form-group label-for="signature" label="Signature: ">
              <b-form-input v-model="entry.signature"></b-form-input>
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
      tests: ["S", "U", "N/A", "N/T"],
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
      for (const entry of this.recordBook.data.monthly) {
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
      for (const entry of this.recordBook.data.monthly) {
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
        entry_1A: "",
        entry_1B: "",
        entry_2A: "",
        entry_2B: "",
        entry_2C: "",
        entry_2D: "",
        entry_3A: "",
        entry_3B: "",
        entry_3C: "",
        entry_4A: "",
        entry_4B: "",
        alarmType: "",
        locationEmergPhone: "",
        locationVoicePage: "", 
        sig: "",
        date: "",
        remarks: "",
      };
      this.error = null;
    },
    updateRecordBook(){
        for (const entry of this.recordBook.data.monthly) {
          if (entry.key) {
            if (entry.key === this.getNewEntryKey) {
              
              entry.month = this.entry.month;
              entry.week = "Week " + this.entry.week;
              entry.sig = this.entry.signature;
              entry.date = this.entry.date;
              entry.remark = this.entry.remarks;
              entry.flag = true;
              entry.entry_1A = this.entry_1A;
              entry.entry_1B = this.entry_1B;
              entry.entry_2A = this.entry_2A;
              entry.entry_2B = this.entry_2B;
              entry.entry_2C = this.entry_2C;
              entry.entry_2D = this.entry_2D;
              entry.entry_3A = this.entry_3A;
              entry.entry_3B = this.entry_3A;
              entry.entry_3C = this.entry_3A;
              entry.entry_4A = this.entry_4A;
              entry.entry_4B = this.entry_4B;
              entry.alarmType = this.alarmType;
              entry.locationEmergPhone = this.locationEmergPhone;
              entry.locationVoicePage = this.locationVoicePage;
            }
          }
        }
    },
    closeModal(){
        this.$nextTick(() => {
          this.$bvModal.hide(this.getUniqueID);
        });
    }
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
        signature: this.entryData.sig,
        date: this.entryData.date,
        remarks: this.entryData.remark,
        entry_1A: this.entryData.entry_1A,
        entry_1B: this.entryData.entry_1B,
        entry_2A: this.entryData.entry_2A,
        entry_2B: this.entryData.entry_2B,
        entry_2C: this.entryData.entry_2C,
        entry_2D: this.entryData.entry_2D,
        entry_3A: this.entryData.entry_3A,
        entry_3B: this.entryData.entry_3A,
        entry_3C: this.entryData.entry_3A,
        entry_4A: this.entryData.entry_4A,
        entry_4B: this.entryData.entry_4B,
        alarmType: this.entryData.alarmType,
        locationEmergPhone: this.entryData.locationEmergPhone,
        locationVoicePage: this.entryData.locationVoicePage, 
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
