<template>
  <div>
      <button @click="Logout">Log Out</button>
      <div v-if="error">{{error}}</div>
  </div>
</template>

<script>
import { userLogout } from "@/js/auth/userAuth.js";

export default {
    name: 'Logout', 
    data() 
    {
        return {
           error: null
        }
    }, 
    methods: 
    {
        Logout()
        {
            userLogout().then(res => {
                if (res.error)
                {
                    this.error = res.error
                }
                else
                {
                    this.$router.replace({name: 'Home'})
                }
            })
        }

    }

}
</script>

<style>

</style>