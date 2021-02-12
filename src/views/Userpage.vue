<template>
  <div>
      <FileSelectionContainer />
      <Logout />
  </div>
</template>

<script>
import FileSelectionContainer from '@/components/filepicker/FileSelectionContainer.vue'
import Logout from '@/components/authentication/Logout.vue'

export default {
    name: 'Userpage',
    components: 
    {
        FileSelectionContainer, Logout
    }

}
</script>

<style>

</style>