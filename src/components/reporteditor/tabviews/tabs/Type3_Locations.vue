<template>
  <div id="type3-locations">
    <h2>Locations</h2>
    <div v-for="(entry, index) in getData" :key="index">
      <Entry
        :ignoreFlag="true"
        :entryData="entry"
        :previewScope="2"
        @deleteEntry="deleteEntry(index)"
        v-if="index >= getHeaderOffset"
      >
        <template v-slot:modal>
          <component
            v-bind:is="'Modal_' + recordBook.id + getModalSuffix"
            :recordBook="recordBook"
            :entryData="entry"
            :uniqueID="recordBook.id + getModalSuffix + i + j"
          ></component>
        </template>
      </Entry>
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
import Modal_FE_3_Locations from "@/components/reporteditor/modals/type3/FireExtinguisher/Modal_FE_3_Locations.vue";

export default {
  name: "Type3Locations",
  components: {
    Entry,
    Modal_FE_3_Locations,
  },
  props: {
    recordBook: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getData() {
      return this.recordBook.data.locations;
    },
    getModalSuffix() {
        return '_Locations'
    },
    getHeaderOffset() {
      if (this.recordBook.id == "AFAS_3") {
        return 0;
      } else if (this.recordBook.id == "FE_3") {
        return 6;
      } else {
        return 0;
      }
    },
  },
  methods: {
    deleteEntry(index) {
      this.getData.splice(index, 1);
    },
  },
};
</script>

<style>
</style>