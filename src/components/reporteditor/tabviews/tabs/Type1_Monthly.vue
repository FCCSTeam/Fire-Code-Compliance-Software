<template>
  <div id="type1-monthly">
      <h1>Type1 Monthly Tab</h1>
      <div v-for="(entry, index) in getData" :key="index">
        <Entry :entryData="entry" :previewScope="2" />
      </div>
  </div>
</template>

<script>
import Entry from '@/components/reporteditor/Entry.vue'
export default {
  name: "Type1Monthly",
  components: {
    Entry
  },
  props: {
    recordBookData: {
      type: Object,
      required: true,
    },
  },
  computed : {
    getData()
    {
      return this.recordBookData.monthly
    }
  }
}
</script>

<style>

</style>