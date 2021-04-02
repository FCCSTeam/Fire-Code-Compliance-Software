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
          <b-col cols="12" md="6">
            <b-form-group label-for="generator" label="Lighting Fixtures: ">
              <b-form-input v-model="entry.generator"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="6">
            <b-form-group label-for="level" label="Fire Exit Signs: ">
              <b-form-input v-model="entry.level"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" md="6">
            <b-form-group
              label-for="type"
              label="Inspection Check Test Monthly: "
            >
              <b-form-input v-model="entry.type"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="6">
            <b-form-group label-for="signature" label="Signature: ">
              <b-form-input v-model="entry.signature"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
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
import {
  getMonths,
  getWeeks,
  getErrorMessages,
} from "@/js/reporteditor/ModalData.js";
import ModalButton from "@/components/reporteditor/modals/ModalButton.vue";
import CreateEntryButton from "@/components/reporteditor/CreateEntryButton.vue";

export default {
  name: "Modal_ELFPS_2_Monthly",
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
      if (this.isCreate) {
        //create a new entry
        this.entry = {
          month: getMonths()[0],
          week: getWeeks()[0],
          generator: "",
          level: "",
          type: "",
          signature: "",
          remarks: "",
        }
      } else {
        let keys = this.entryData.key.split(",");
        //entry exists
        this.entry = {
          month: keys[0],
          week: keys[1],
          generator: this.entryData.generator,
          level: this.entryData.level,
          type: this.entryData.inspectType,
          signature: this.entryData.sig,
          remarks: this.entryData.remark,
        };
      }
      this.error = null;
    },

    updateRecordBook() {
      for (const entry of this.recordBook.data.monthly) {
        if (entry.key) {
          if (entry.key === this.getNewEntryKey) {
            entry.month = this.entry.month;
            entry.week = "Week " + this.entry.week;
            entry.generator = this.entry.generator;
            entry.level = this.entry.level;
            entry.inspectType = this.entry.type;
            entry.sig = this.entry.signature;
            entry.remark = this.entry.remarks;
            entry.flag = true;
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
