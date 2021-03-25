<template>
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
          <b-col cols="12">
            <b-form-group label-for="remarks" label="Remarks: ">
              <b-form-input v-model="entry.remarks"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
      </b-form>
</template>

<script>
export default {

}
</script>

<style>

</style>