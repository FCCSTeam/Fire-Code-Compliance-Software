<template>
  <div id="adminpage">
    <div id="admin-authorized" v-if="isAdmin">
      <AddUser />
    </div>
    <div id="admin-unauthorized" v-else>
        <h3>Permission Denied!</h3>
    </div>
  </div>
</template>

<script>

import AddUser from '@/components/authentication/AddUser.vue'
import { getActiveUser } from "@/js/auth/userAuth.js"
import { adminStatus } from "@/js/auth/userAccess.js";


export default {
    name: 'Userpage',
    components: 
    {
        AddUser,
    },
    data(){
        return {
            currentUser: getActiveUser(),
            isAdmin: false
        }
    },
    mounted() {
        adminStatus(getActiveUser()).then(token => {
            this.isAdmin = token.isAdmin
        })
    }
}
</script>

<style>
</style>