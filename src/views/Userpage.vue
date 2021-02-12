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
import { getActiveUser } from "@/js/auth/userAuth.js"

export default {
    name: 'Userpage',
    components: 
    {
        FileSelectionContainer, Logout
    }, 
    data()
    {
        return {
           currentUser: getActiveUser()
        }
    }

}
</script>

<style>

</style>