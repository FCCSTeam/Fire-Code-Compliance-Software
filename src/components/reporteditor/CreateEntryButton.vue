<template>
  <div class="createEntryButtonContainer m-5">
    <b-button
      id="createEntryButton"
      variant="primary"
      class="p-2 p-md-3 rounded-circle"
      @click="showModal"
    >
      <b-icon class="createIcon" icon="plus"></b-icon>
    </b-button>
    <b-tooltip target="createEntryButton" title="Create an Entry"> </b-tooltip>
  </div>
</template>

<script>
export default {
  methods: {
    showModal() {
      this.$emit("trigger");
    },
  },
};
</script>

<style>
.createIcon {
  font-size: 300% !important;
}

.createEntryButtonContainer {
  position: fixed;
  right: 0;
  bottom: 0;
}
</style>