<template>
  <div class="entry-container">
    <b-container class=" mx-0 px-0 mb-2" v-if="ignoreFlag || entryData.flag === true">
      <b-list-group horizontal>
        <b-list-group-item
          class="flex-fill nowrap"
          v-for="i in previewScope"
          :key="i"
        >
          <!-- <span>
          {{
            Object.keys(entryData)[i - 1] + ": "
          }}
          </span> -->
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
    ignoreFlag: {
      type: Boolean,
    }
  },
  methods : {
    deleteEntry(){
      if (this.ignoreFlag)
      {
        //this entry does not use a flag. Info is actually deleted rather than hidden
        this.$emit('deleteEntry')
      }
      else
      {
        //this entry uses a flag to show/hide info
        this.entryData.flag = false;
        //we do not want to change the values for these keys in the source file
        const constantPairs = ["week", "key", "flag"]
        //default the entry information
        for (const key in this.entryData)
        {
          if (!constantPairs.includes(key))
          {
            this.entryData[key] = ""
          }
        }
      }
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