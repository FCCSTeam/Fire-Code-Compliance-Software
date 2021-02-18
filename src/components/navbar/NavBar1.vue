<template>
<div>
  <b-navbar class="navbar navbar-dark bg-primary">
    <b-navbar-nav>
      <b-nav-item href="#">FCCS</b-nav-item>


      <b-nav-item-dropdown text="User" right>
        <b-dropdown-item href="#">Settings</b-dropdown-item>
        <b-dropdown-item href="#" @click="Logout">Logout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</div>
</template>

<script>
import { userLogout } from "@/js/auth/userAuth.js";
export default {
    name: "NavBar1", 
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