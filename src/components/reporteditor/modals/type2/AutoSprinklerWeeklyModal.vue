<template>
  <div id="modalType1MonthlyContainer">
    <div v-if="isCreate">
      <CreateEntryButton @trigger="$refs[getKey].show()" />
    </div>
    <div v-else>
      <ModalButton @trigger="$refs[getKey].show()" />
    </div>
    <b-modal
      :id="getKey"
      :ref="getKey"
      size="lg"
      :static="true"
      title="Add Week Entry"
      ok-title="Continue"
      ok-variant="primary"
      ok-only
      @ok="handleOk"
      :no-close-on-backdrop="true"
    >
      <!-- <h1>Key: {{ getKey }}</h1> -->
      <b-form class="modalType1MonthlyBody px-2"> 
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
            <b-form-group label-for="id" label="Type and ID Num: ">
              <b-form-input v-model="entry.id"></b-form-input>
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
import { getMonths, getWeeks } from "@/js/reporteditor/ModalData.js";
import ModalButton from "@/components/reporteditor/modals/ModalButton.vue";
import CreateEntryButton from "@/components/reporteditor/CreateEntryButton.vue";

export default {
  name: "AutoSprinklerWeeklyModal",
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
    getKey() {
      return this.uniqueID;
    },
  },
  methods: {
    show() {
      this.$refs.modalType1Monthly.show();
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();

      if (this.isCreate) {
        this.createNewEntry();
      } else {
        this.updateCurrentEntry();
      }
    },
    updateCurrentEntry() {
      //DUP CHECKING
      this.error = null;
      this.entryData.flag = false; //to ignore itself during duplicate checking
      let newKey = this.entry.month + "," + this.entry.week;

      for (const entry of this.recordBook.data.weekly) {
        if (entry.key) {
          if (entry.key == newKey && entry.flag == true) {
            this.error =
              "Another entry with this month and week already exists";
            this.entryData.flag = true;
            break;
          }
        }
      }
      if (!this.error) {
        //TODO make changes to data
        for (const entry of this.recordBook.data.weekly) {
          if (entry.key) {
            if (entry.key === newKey) {
              entry.month = this.entry.month;
              entry.week = this.entry.week;
              entry.loc = this.entry.loc;
              entry.id = this.entry.id;
              entry.inspectType = this.entry.type;
              entry.sig = this.entry.signature;
              entry.remarks = this.entry.remarks;
              entry.flag = true;
            }
          }
        }
        this.$nextTick(() => {
          this.$bvModal.hide(this.getKey);
        });
      }
    },
    createNewEntry() {
      this.error = null;
      let newKey = this.entry.month + "," + this.entry.week;
      for (const entry of this.recordBook.data.weekly) {
        if (entry.key) {
          if (entry.key == newKey && entry.flag == true) {
            this.error =
              "Another entry with this month and week already exists";
            break;
          }
        }
      }
      if (!this.error) {
        //TODO make changes to data
        for (const entry of this.recordBook.data.weekly) {
          if (entry.key) {
            if (entry.key === newKey && entry.flag == false) {
              entry.month = this.entry.month;
              entry.week = this.entry.week;
              entry.loc = this.entry.loc;
              entry.id = this.entry.id;
              entry.inspectType = this.entry.type;
              entry.sig = this.entry.signature;
              entry.remarks = this.entry.remarks;
              entry.flag = true;
            }
          }
        }
        this.$nextTick(() => {
          this.$bvModal.hide(this.getKey);
        });
        this.defaultModal();
      }
    },
    defaultModal() {
      this.entry = {
        month: getMonths()[0],
        week: getWeeks()[0],
        type: "",
        signature: "",
        date: "",
        remarks: "",
      };
      this.error = null;
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
        loc: this.entryData.loc,
        id: this.entryData.id,
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
