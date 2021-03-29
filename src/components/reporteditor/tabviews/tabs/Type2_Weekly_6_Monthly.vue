<template>
  <div id="type2-weekly6Monthly">
    <div v-for="i in 12" :key="i">
      <h2 class="mb-3 mt-5">
        {{ getData[Object.keys(getData)[(i - 1) * 7 + 4]].week }}
      </h2>
      <div v-for="j in 5" :key="i + '-' + j">
        <Entry
          :entryData="getData[Object.keys(getData)[(i - 1) * 7 + 4 + j]]"
          :previewScope="2"
        >
          <template v-slot:modal>
            <component
              v-bind:is="'Modal_' + recordBook.id + '_Weekly_6_Monthly'"
              :recordBook="recordBook"
              :entryData="getData[Object.keys(getData)[(i - 1) * 7 + 4 + j]]"
              :uniqueID="recordBook.id + ' _Weekly_6_Monthly ' + i + j"
            ></component>
          </template>
        </Entry>
      </div>
    </div>
    <!-- Create Button -->
    <component
      v-bind:is="'Modal_' + recordBook.id + '_Weekly_6_Monthly'"
      :isCreate="true"
      :recordBook="recordBook"
      :entryData="{}"
      :uniqueID="recordBook.title + ' Weekly create button'"
    >
    </component>
  </div>
</template>

<script>
import Entry from "@/components/reporteditor/Entry.vue";
import Modal_FWS_2_Weekly_6_Monthly from '@/components/reporteditor/modals/type2/FireWaterSupply/Modal_FWS_2_Weekly_6_Monthly.vue'

export default {
  components: {
    Entry,
    Modal_FWS_2_Weekly_6_Monthly
  },
  props: {
    recordBook: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getData() {
      return this.recordBook.data.weekly6Monthly;
    },
  },
};
</script>

<style>
</style>