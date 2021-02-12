<template>

    <form @submit.prevent="Login">
        
        <h3>Sign In</h3>
        <input type="email" required v-model="email" placeholder="Email">
        <input type="password" required v-model="password" placeholder="Password">
        <button> Login </button>
        <div v-if="error">{{error}}</div>
    </form>

</template>

<script>
import {projectAuth} from "@/firebase/config"



export default {
    name: 'Login',
  data() {
    return {
      
        email: "",
        password: "",
        error: null
    }
  },
    methods:
    {
        Login()
        {
            projectAuth.signInWithEmailAndPassword(this.email, this.password)
            .then(res => 
            {
                
                console.log("the current user logged in is:" + res.user.email)
                this.$router.replace({name: 'Userpage'})
                
            
            })
            .catch(err => 
            {
                console.log(err)
                this.error = err
            })
        }
    }

}
</script>

<style>

</style>