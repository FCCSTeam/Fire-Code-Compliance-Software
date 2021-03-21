<template>
  <div class="entry-container">
    <b-container class=" mx-0 px-0 mb-2" v-if="entryData.flag === true">
      <b-list-group horizontal>
        <b-list-group-item
          class="flex-fill nowrap"
          v-for="i in previewScope"
          :key="i"
        >
          <span>
          {{
            entryData[Object.keys(entryData)[i - 1]]
          }}
          </span>
        </b-list-group-item>
        <slot name="modal"></slot>
        <b-button class="deleteButton ml-1" pill variant="outline-white" @click="deleteEntry"
          ><b-icon icon="x-circle"></b-icon
        ></b-button>
      </b-list-group>
    </b-container>
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
  methods : {
    deleteEntry(){
      this.entryData.flag = false;
    }
  }
};
</script>

<style>
.deleteButton {
  font-size: 110% !important;
  color: var(--secondary) !important;
}
.deleteButton:hover {
  color: var(--danger) !important;
}
.nowrap {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.list-group-item{
  color: var(--secondary)!important;
}
</style>