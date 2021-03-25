<template>
  <div id="type2-weekly">
    <div v-for="i in 12" :key="i">
      <h2 class="mb-3 mt-5">
        {{ getData[Object.keys(getData)[(i - 1) * 7 + 5]].week }}
      </h2>
      <div v-for="j in 5" :key="i + '-' + j">
        <Entry
          :entryData="getData[Object.keys(getData)[(i - 1) * 7 + 5 + j]]"
          :previewScope="2"
        >
          <template v-slot:modal>
            <component
              v-bind:is="'Modal_' + recordBook.id + '_Weekly'"
              :recordBook="recordBook"
              :entryData="getData[Object.keys(getData)[(i - 1) * 7 + 5 + j]]"
              :uniqueID="recordBook.id + ' Weekly ' + i + j"
            ></component>
          </template>
        </Entry>
      </div>
    </div>
    <!-- Create Button -->
    <component
      v-bind:is="'Modal_' + recordBook.id + '_Weekly'"
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
import Modal_ASS_2_Weekly from "@/components/reporteditor/modals/type2/AutoSprinkler/Modal_ASS_2_Weekly.vue";
import Modal_ELFPS_2_Weekly from '@/components/reporteditor/modals/type2/EmergencyLighting/Modal_ELFPS_2_Weekly.vue'

export default {
  components: {
    Entry,
    Modal_ASS_2_Weekly,
    Modal_ELFPS_2_Weekly,
  },
  props: {
    recordBook: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getData() {
      return this.recordBook.data.weekly;
    },
  },
};
</script>

<style>
</style>