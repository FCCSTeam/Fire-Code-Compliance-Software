<template>
  <div id="type3-monthly">
    <div v-for="i in 12" :key="i">
      <!-- Get Header (Month) -->
      <h2 class="mb-3 mt-5">
        {{ getData[Object.keys(getData)[(i - 1) * getRowsPerMonth + getDataHeaderOffset]].week }}
      </h2>
      <!-- Get Body -->
      <div v-for="j in 5" :key="i + '-' + j">
        <Entry
          :entryData="getData[Object.keys(getData)[(i - 1) * getRowsPerMonth + getDataHeaderOffset + j]]"
          :previewScope="2"
        >
          <template v-slot:modal>
            <component
              v-bind:is="'Modal_' + recordBook.id + getModalSuffix"
              :recordBook="recordBook"
              :entryData="getData[Object.keys(getData)[(i - 1) * getRowsPerMonth + getDataHeaderOffset + j]]"
              :uniqueID="recordBook.id + getModalSuffix  + i + j"
            ></component>
          </template>
        </Entry>
      </div>
    </div>
    <!-- Create Button -->
    <component
      v-bind:is="'Modal_' + recordBook.id + getModalSuffix"
      :isCreate="true"
      :recordBook="recordBook"
      :entryData="{}"
      :uniqueID="recordBook.title + getModalSuffix + ' create button'"
    >
    </component>
  </div>
</template>

<script>
import Entry from "@/components/reporteditor/Entry.vue";
import Modal_FE_3_Monthly from "@/components/reporteditor/modals/type3/FireExtinguisher/Modal_FE_3_Monthly.vue";
import Modal_AFAS_3_Monthly from "@/components/reporteditor/modals/type3/AutoFireAlarmSystem/Modal_AFAS_3_Monthly.vue"

export default {
  components: {
    Entry,
    Modal_FE_3_Monthly,
    Modal_AFAS_3_Monthly
  },
  props: {
    recordBook: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getData() {
      return this.recordBook.data.monthly;
    },
    getModalSuffix() {
        return '_Monthly'
    },
    getDataHeaderOffset() {
      if (this.recordBook.id == "FE_3")
      {
        return 4
      }
      else if (this.recordBook.id == "AFAS_3")
      {
        return 0
      }
      else
      {
        return 0
      }
    },
    getRowsPerMonth(){
      return 7
    }
  },
};
</script>

<style>
</style>