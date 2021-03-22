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
    recordBook: {
      type: Object,
      required: true,
    },
  },
  computed : {
    getData()
    {
      return this.recordBook.data.locations
    }
  }
}
</script>

<style>

</style>