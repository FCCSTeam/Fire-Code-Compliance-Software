<template>
  <div id="home">
    <FileSelectionContainer />
  </div>
</template>

<script>
import FileSelectionContainer from '@/components/filepicker/FileSelectionContainer.vue'
export default {
  name: 'Home',
  components: {
    FileSelectionContainer
  }
}
</script>