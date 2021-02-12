<template>
  <div>
      <button @click="Logout">Log Out</button>
      <div v-if="error">{{error}}</div>
  </div>
</template>

<script>
import {projectAuth} from "@/firebase/config"
//import {user} from "@/firebase/config"



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
            projectAuth.signOut()
            .then(res => 
            {
                this.$router.replace({name: 'Home'})
                //console.log("user has signed out" + user)
            })
            .catch(err => 
            {
                this.error = err
            })
        }

    }

}
</script>

<style>

</style>