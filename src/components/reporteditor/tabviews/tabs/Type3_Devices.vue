<template>
  <div id="type3-locations">
    <h2>Devices</h2>
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
            :uniqueID="recordBook.id + getModalSuffix + index"
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
import Modal_AFAS_3_Devices from "@/components/reporteditor/modals/type3/AutoFireAlarmSystem/Modal_AFAS_3_Devices.vue"

export default {
  name: "Type3Devices",
  components: {
    Entry,
    Modal_AFAS_3_Devices
  },
  props: {
    recordBook: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getData() {
      return this.recordBook.data.devices;
    },
    getModalSuffix() {
        return '_Devices'
    },
    getHeaderOffset() {
      if (this.recordBook.id == "AFAS_3") {
        return 5;
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