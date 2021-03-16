<template>
  <div id="modalType1MonthlyContainer">
    <b-modal
      id="modalType1Monthly"
      ref="modalType1Monthly"
      size="lg"
      :static="true"
      title="Add Month/Week Entry"
      ok-title="Add Entry"
      ok-variant="primary"
      ok-only
      @ok="handleOk"
      no-close-on-backdrop="true"
    >
      <b-form class="modalType1MonthlyBody px-2">
        <b-row align-h="between">
          <b-col cols='12' md='6'>
            <b-form-group label-for="month" label="Month: ">
              <b-form-select
                v-model="entry.month"
                :options="months"
                class=""
              ></b-form-select>
            </b-form-group>
          </b-col>
          <b-col cols='12' md='6'>
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
          <b-col cols='12' md='6'>
            <b-form-group label-for="type" label="Inspection Check Test: ">
              <b-form-input v-model="entry.type"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols='12' md='6'>
            <b-form-group label-for="signature" label="Signature: ">
              <b-form-input v-model="entry.signature"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="6">
            <b-form-group label-for="date" label="Date: ">
              <b-form-datepicker
                v-model="entry.date"
                today-button
                close-button
              ></b-form-datepicker>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols='12'>
            <b-form-group label-for="remarks" label="Remarks: ">
              <b-form-input v-model="entry.remarks"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import { getMonths, getWeeks } from "@/js/reporteditor/ModalData.js";
export default {
  name: "modalType1Monthly",
  data() {
    return {
      months: getMonths(),
      weeks: getWeeks(),
      entry: {
        month: getMonths()[0],
        week: getWeeks()[0],
        type: "",
        signature: "",
        date: "",
        remarks: "",
      },
    };
  },
  methods: {
    show() {
      this.$refs.modalType1Monthly.show();
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      // bvModalEvt.preventDefault();
    },
  },
};
</script>

<style scoped>
.form-text {
  font-size: 90%;
}
</style>
