<template>
  <div id="sidebar"> 
    <b-sidebar id="recordbook-sidebar" title="Record Books" shadow>
      <b-nav class="d-flex flex-column mt-3">
        <b-button
          class="sidebar-item px-3 py-3 border-top border-bottom text-left"
          variant="light"
          v-for="recordBook in recordBooks"
          :key="recordBook.title"
          @click="recordBookClicked(recordBook)"
        >
          {{ recordBook.title }}
        </b-button>
      </b-nav>
    </b-sidebar>
  </div>
</template>

<script>
import { getRecordBooks, setActiveTab } from '@/js/reporteditor/RecordBookData.js'

export default {
  name: "Sidebar",
  components: {},
  data() {
    return {
        recordBooks: getRecordBooks()
    };
  },
  methods : {
      recordBookClicked(recordBook)
      {
        setActiveTab(recordBook)
        this.$emit('update')
      }
  }
};
</script>

<style>
#recordbook-sidebar {
  position: fixed !important;
  top: 73px !important;
}

.sidebar-item {
  font-size: 1.05rem;
}

.b-sidebar-header{
margin-top: 1rem;
}
</style>