<template>

    <form @submit.prevent="CreateUser">
        
        <h3>Create new User</h3>
        <input type="email" required v-model="email" placeholder="Email">
        <input type="password" required v-model="password" placeholder="Password">
        <button> Create User </button>
        <div v-if="error">{{error}}</div>
    </form>

</template>

<script>
import {projectAuth} from "@/firebase/config"


export default {
    name: 'AddUser',
  data() {
    return {
      
        email: "",
        password: "",
        error: null
    }
  },
    methods:
    {
        CreateUser()
        {
            projectAuth.createUserWithEmailAndPassword(this.email, this.password)
            .then(res => 
            {
                console.log("user has been successfully added")
            
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