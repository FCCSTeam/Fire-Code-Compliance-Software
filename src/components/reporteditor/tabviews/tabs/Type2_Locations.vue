<template>
  <div id="type2-locations">
      <h2>Locations</h2>
      <div v-for="(entry, index) in getData" :key="index">
          <Entry :ignoreFlag="true" :entryData="entry" :previewScope="2" @deleteEntry="deleteEntry(index)">
            <template v-slot:modal>
              <Type2ModalLocations :recordBook="recordBook" :entryData="entry" :uniqueID="recordBook.title + ' Locations ' + index"/>
            </template>
          </Entry>
      </div>
      <!-- Create Button -->
      <Type2ModalLocations :isCreate="true" :recordBook="recordBook" :entryData="{}" :uniqueID="recordBook.title + ' Locations create button'"/>

  </div>
</template>

<script>
import Entry from '@/components/reporteditor/Entry.vue'
import Type2ModalLocations from '@/components/reporteditor/modals/type2/Modal_2_Locations.vue'

export default {
  name: "Type2Locations",
  components: {
    Entry,
    Type2ModalLocations,
  },
  props: {
    recordBook: {
      type: Object,
      required: true,
    },
  },
  computed : {
    getData()
    {
      return this.recordBook.data.locations
    },
  },
  methods : {
    deleteEntry(index)
    {
      this.getData.splice(index, 1)
    }
  }
}
</script>

<style>

</style>