<template>
  <div id="type1-locations">
      <h1>Type1 Locations Tab</h1>
      <p>{{ getData }}</p>
  </div>
</template>

<script>
export default {
  name: "Type1Locations",
    props: {
    recordBookData: {
      type: Object,
      required: true,
    },
  },
  computed : {
    getData()
    {
      return this.recordBookData.locations
    }
  }
}
</script>

<style>

</style>