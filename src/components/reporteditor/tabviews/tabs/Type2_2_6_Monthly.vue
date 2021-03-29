<template>
  <div id="type2-2-6-monthly">
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
              v-bind:is="'Modal_' + recordBook.id + getModalSuffix"
              :recordBook="recordBook"
              :entryData="getData[Object.keys(getData)[(i - 1) * 7 + 5 + j]]"
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
import Modal_ASS_2_2_6_Monthly from "@/components/reporteditor/modals/type2/AutoSprinkler/Modal_ASS_2_2_6_Monthly.vue";

export default {
  components: {
    Entry,
    Modal_ASS_2_2_6_Monthly
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
        return '_2_6_Monthly'
    }
  },
};
</script>

<style>
</style>