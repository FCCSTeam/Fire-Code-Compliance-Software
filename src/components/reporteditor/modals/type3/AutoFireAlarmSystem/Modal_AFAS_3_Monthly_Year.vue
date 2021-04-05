<template>
  <div class="modalAFASMonthlyYear">
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
      @close="handleClose"
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
          <b-col cols=12 class="my-1"><b>Inspect:</b></b-col>
          <b-col cols="12" md="6">
            <b-form-group label-for="entry_1A" label="1A: ">
              <b-form-radio-group
                v-model="entry.entry_1A"
                :options="criteria"
                buttons
                button-variant="outline-primary"
              ></b-form-radio-group>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="6">
            <b-form-group label-for="entry_1B" label="1B: ">
              <b-form-radio-group
                v-model="entry.entry_1B"
                :options="criteria"
                buttons
                button-variant="outline-primary"
              ></b-form-radio-group>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row align-h="between">
          <b-col cols=12 class="my-1"><b>Fire Alarm:</b></b-col>
          <b-col cols="12">
            <b-form-group label-for="alarmType" label="Fire Alarm Location: ">
              <b-form-input v-model="entry.alarmType"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12" lg="3">
            <b-form-group label-for="entry_2A" label="2A: ">
              <b-form-radio-group
                v-model="entry.entry_2A"
                :options="criteria"
                buttons
                button-variant="outline-primary"
              ></b-form-radio-group>
            </b-form-group>
          </b-col>
          <b-col cols="12" lg="3">
            <b-form-group label-for="entry_2B" label="2B: ">
              <b-form-radio-group
                v-model="entry.entry_2B"
                :options="criteria"
                buttons
                button-variant="outline-primary"
              ></b-form-radio-group>
            </b-form-group>
          </b-col>
          <b-col cols="12" lg="3">
            <b-form-group label-for="entry_2C" label="2C: ">
              <b-form-radio-group
                v-model="entry.entry_2C"
                :options="criteria"
                buttons
                button-variant="outline-primary"
              ></b-form-radio-group>
            </b-form-group>
          </b-col>
          <b-col cols="12" lg="3">
            <b-form-group label-for="entry_2D" label="2D: ">
              <b-form-radio-group
                v-model="entry.entry_2D"
                :options="criteria"
                buttons
                button-variant="outline-primary"
              ></b-form-radio-group>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols=12 class="my-1"><b>Signal Receiving Centre:</b></b-col>
          <b-col cols="4">
            <b-form-group label-for="entry_3A" label="3A: ">
              <b-form-radio-group
                v-model="entry.entry_3A"
                :options="criteria"
                buttons
                button-variant="outline-primary"
              ></b-form-radio-group>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols=12 class="my-1"><b>Voice Communication:</b></b-col>
          <b-col cols="12" lg="3">
            <b-form-group label-for="locationEmergPhone" label="Location of Emergency Phone: ">
              <b-form-input v-model="entry.locationEmergPhone"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12" lg="3">
            <b-form-group label-for="entry_4A" label="4A: ">
              <b-form-radio-group
                v-model="entry.entry_4A"
                :options="criteria"
                buttons
                button-variant="outline-primary"
              ></b-form-radio-group>
            </b-form-group>
          </b-col>
          <b-col cols="12" lg="3">
            <b-form-group
              label-for="locationVoicePage"
              label="Location of Voice Page Zone: "
            >
              <b-form-input v-model="entry.locationVoicePage"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12" lg="3">
            <b-form-group label-for="entry_4B" label="4B: ">
              <b-form-radio-group
                v-model="entry.entry_4B"
                :options="criteria"
                buttons
                button-variant="outline-primary"
              ></b-form-radio-group>
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
import {
  getMonths,
  getWeeks,
  getErrorMessages,
} from "@/js/reporteditor/ModalData.js";
import ModalButton from "@/components/reporteditor/modals/ModalButton.vue";
import CreateEntryButton from "@/components/reporteditor/CreateEntryButton.vue";

export default {
  name: "Modal_AFAS_3_Monthly_Year",
  components: {
    ModalButton,
    CreateEntryButton
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
      criteria: ["S", "U", "N/A", "N/T"],
      months: getMonths(),
      weeks: getWeeks(),
      entry: {},
      error: null
    };
  },
  computed: {
    getUniqueID() {
      return this.uniqueID;
    },
    getNewEntryKey() {
      return this.entry.month + "," + this.entry.week;
    },
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
      for (const entry of this.recordBook.data.monthly_year) {
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
      for (const entry of this.recordBook.data.monthly_year) {
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
      if (this.isCreate) {
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
          entry_4A: "",
          entry_4B: "",
          alarmType: "",
          locationEmergPhone: "",
          locationVoicePage: "",
          sig: "",
          date: "",
          remarks: "",
        };
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
          entry_4A: this.entryData.entry_4A,
          entry_4B: this.entryData.entry_4B,
          alarmType: this.entryData.alarmType,
          locationEmergPhone: this.entryData.locationEmergPhone,
          locationVoicePage: this.entryData.locationVoicePage,
        };
      }
      this.error = null;
    },
    updateRecordBook() {
      for (const entry of this.recordBook.data.monthly_year) {
        if (entry.key) {
          if (entry.key === this.getNewEntryKey) {
            entry.month = this.entry.month;
            entry.week = "Week " + this.entry.week;
            entry.sig = this.entry.signature;
            entry.date = this.entry.date;
            entry.remark = this.entry.remarks;
            entry.flag = true;
            entry.entry_1A = this.entry.entry_1A;
            entry.entry_1B = this.entry.entry_1B;
            entry.entry_2A = this.entry.entry_2A;
            entry.entry_2B = this.entry.entry_2B;
            entry.entry_2C = this.entry.entry_2C;
            entry.entry_2D = this.entry.entry_2D;
            entry.entry_3A = this.entry.entry_3A;
            entry.entry_4A = this.entry.entry_4A;
            entry.entry_4B = this.entry.entry_4B;
            entry.alarmType = this.entry.alarmType;
            entry.locationEmergPhone = this.entry.locationEmergPhone;
            entry.locationVoicePage = this.entry.locationVoicePage;
          }
        }
      }
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
