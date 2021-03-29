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
      title="Enter Monthly Entry"
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
            <b-form-group label-for="loc" label="Sprinkler System Riser Location: ">
              <b-form-input v-model="entry.loc"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="6">
            <b-form-group label-for="id" label="Type and ID #: ">
              <b-form-input v-model="entry.id"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row align-h="between">
          <b-col cols="12" md="6">
            <b-form-group label-for="type" label="Inspection Check Test: ">
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
import { getMonths, getWeeks, getErrorMessages } from "@/js/reporteditor/ModalData.js";
import ModalButton from "@/components/reporteditor/modals/ModalButton.vue";
import CreateEntryButton from "@/components/reporteditor/CreateEntryButton.vue";

export default {
  name: "Modal_ASS_2_2_6_Monthly",
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
    },
    getRecordBookTabData(){
      return this.recordBook.data.monthly
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
      for (const entry of this.getRecordBookTabData) {
        if (entry.key) {
          if (entry.key == this.getNewEntryKey && entry.flag == true) {
            this.error = getErrorMessages().duplicate;
            this.entryData.flag = true;
            break;
          }
        }
      }
      if (!this.error) {
        this.updateRecordBook();
        this.closeModal();
      }
    },
    createNewEntry() {
      for (const entry of this.getRecordBookTabData) {
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
    //Resets a modal to default/empty values
    defaultModal() {
      this.entry = {
        month: getMonths()[0],
        week: getWeeks()[0],
        loc: "",
        id: "",
        type: "",
        signature: "",
        remarks: ""
      };
      this.error = null;
    },
    updateRecordBook(){
      //Goes into the recordBook in the .js file and updates the books data with modal input
        for (const entry of this.getRecordBookTabData) {
          if (entry.key) {
            if (entry.key === this.getNewEntryKey) {
              entry.month = this.entry.month;
              entry.week = "Week " + this.entry.week;
              entry.loc = this.entry.loc;
              entry.id = this.entry.id;
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
        loc: this.entryData.loc,
        id: this.entryData.id,
        type: this.entryData.inspectType,
        signature: this.entryData.sig,
        remarks: this.entryData.remark     
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
