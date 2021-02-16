<template>
  <div>      
      <AddUser />
      <AddAdmin />
  </div>
</template>

<script>

import AddUser from '@/components/authentication/AddUser.vue'
import AddAdmin from '@/components/authentication/AddAdmin.vue'

export default {
    name: 'Userpage',
    components: 
    {
        AddUser,
        AddAdmin,
    }

}
</script>

<style>

</style>