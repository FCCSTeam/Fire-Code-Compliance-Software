<template>
  <div id="home">
    <Navbar1 />
    <Login />
  </div>
</template>

<script>
import Navbar1 from "@/components/navbar/NavBar1.vue";
import Login from '@/components/authentication/Login.vue'
export default {
  name: 'Home',
  components: {
    Navbar1,
    Login
  }
}
</script>