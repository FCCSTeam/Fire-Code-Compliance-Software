<template>
  <div>
      <FileSelectionContainer />
      <Logout />
      <h3>Hello: {{currentUser.email}}</h3>
  </div>
</template>

<script>
import FileSelectionContainer from '@/components/filepicker/FileSelectionContainer.vue'
import Logout from '@/components/authentication/Logout.vue'
import {user} from "@/firebase/config"

export default {
    name: 'Userpage',
    components: 
    {
        FileSelectionContainer, Logout
    }, 
    data()
    {
        return {
           currentUser: user
        }
    }

}
</script>

<style>

</style>