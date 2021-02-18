<template>
  <div>
      <NavBar />
      <Sidemenu />
      <FileSelectionContainer />
      <Logout />
      <h3>Hello: {{currentUser.email}}</h3>
  </div>
</template>

<script>
import FileSelectionContainer from '@/components/filepicker/FileSelectionContainer.vue'
import Logout from '@/components/authentication/Logout.vue'
import NavBar from '@/components/navbar/NavBar.vue'
import Sidemenu from '@/components/sidemenu/Sidemenu.vue'
import { getActiveUser } from "@/js/auth/userAuth.js"
import { adminStatus } from '@/js/auth/userAccess.js'

export default {
    name: 'Userpage',
    components: 
    {
        FileSelectionContainer, Logout, NavBar, Sidemenu
    }, 
    data()
    {
        return {
           currentUser: getActiveUser()
        }
    },
    mounted()
    {
        adminStatus(this.currentUser).then(token => {
            if (token.error){
                console.log("Database Error: ", token.error)
            }else{
                console.log("Admin Status: ", token.isAdmin)
            }
        })
    }

}
</script>

<style>

</style>