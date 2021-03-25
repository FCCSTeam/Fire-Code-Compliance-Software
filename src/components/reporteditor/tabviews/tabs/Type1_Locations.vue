<template>
  <div id="type1-locations">
      <h2>Locations</h2>
      <div v-for="(entry, index) in getData" :key="index">
          <Entry :ignoreFlag="true" :entryData="entry" :previewScope="2" @deleteEntry="deleteEntry(index)">
            <template v-slot:modal>
              <ModalLocations :recordBook="recordBook" :entryData="entry" :uniqueID="recordBook.title + ' Locations ' + index"/>
            </template>
          </Entry>
      </div>
      <!-- Create Button -->
      <ModalLocations :isCreate="true" :recordBook="recordBook" :entryData="{}" :uniqueID="recordBook.title + ' Locations create button'"/>

  </div>
</template>

<script>
import Entry from '@/components/reporteditor/Entry.vue'
import ModalLocations from '@/components/reporteditor/modals/type1/ModalLocations.vue'

export default {
  name: "Type1Locations",
  components: {
    Entry,
    ModalLocations,
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