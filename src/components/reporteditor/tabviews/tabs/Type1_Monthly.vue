<template>
  <div id="type1-monthly">

      <div v-for="i in 12" :key="i">
        <h2 class="mb-3 mt-5">{{ getData[Object.keys(getData)[((i - 1)*7) + 5]].week }}</h2>
        <div v-for="j in 5" :key="i + '-' + j">
          <Entry :entryData="getData[Object.keys(getData)[(((i - 1)*7) + 5)+j]]" :previewScope="2">
            <template v-slot:modal>
              <ModalMonthly :recordBook="recordBook" :entryData="getData[Object.keys(getData)[(((i - 1)*7) + 5)+j]]" :uniqueID="recordBook.title + ' Monthly ' + i + j"/>
            </template>
          </Entry>
        </div>
      </div>
      <!-- Create Button -->
      <ModalMonthly :isCreate="true" :recordBook="recordBook" :entryData="{}" :uniqueID="recordBook.title + ' Monthly create button'"/>

  </div>
</template>

<script>
import Entry from '@/components/reporteditor/Entry.vue'
import ModalMonthly from '@/components/reporteditor/modals/type1/ModalMonthly.vue'

export default {
  name: "Type1Monthly",
  components: {
    Entry,
    ModalMonthly,
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
      return this.recordBook.data.monthly
    },
  }
}
</script>

<style>

</style>