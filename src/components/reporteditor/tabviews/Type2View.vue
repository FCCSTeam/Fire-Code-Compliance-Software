<template>
  <div id="Type2View">
    <h1>{{ recordBook.title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    recordBook: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>