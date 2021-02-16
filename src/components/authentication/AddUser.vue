<template>

    <b-form @submit.prevent="CreateUser">
        
        <h3>Create new User</h3>
        <input type="email" required v-model="email" placeholder="Email">
        <input type="password" required v-model="password" placeholder="Password">
        <button> Create User </button>
        <div v-if="error">{{error}}</div>
    </b-form>

</template>

<script>
import { createUser } from "@/js/auth/userAuth.js";


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
            createUser(this.email,this.password).then((res) =>{
                if(res.error)
                {
                    this.error = res.error
                }
                else
                {
                    console.log("user has been added successfully")
                }
            })
        }
    }

}
</script>

<style>

</style>