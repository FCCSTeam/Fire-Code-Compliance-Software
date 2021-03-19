<template>
  <div class="entry-container">
      <!-- TODO MAKE B-TABLE -->
    <b-row class="my-3" horizontal>
      <b-list-group-item class="" v-for="i in previewScope" :key="i">
          {{ Object.keys(entryData)[i-1] + " " +  entryData[Object.keys(entryData)[i-1]]}}
        </b-list-group-item>
        <b-button variant="outline-primary"><b-icon icon="pencil-square"></b-icon></b-button>
        <b-button class="deleteButton" pill variant="outline-white"><b-icon icon="x-circle"></b-icon></b-button>
    </b-row>
    <slot name="modal"></slot>
  </div>
</template>

<script>
export default {
  name: "Entry",
  props: {
    entryData: {
      type: Object,
      required: true,
    },
    previewScope: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style>
.deleteButton{
    font-size: 110%!important;
    color: var(--secondary)!important;
}
.deleteButton:hover{
    color: var(--danger)!important;
}
</style>