<template>
  <div id="home">
    <Login />
  </div>
</template>

<script>
import Login from '@/components/authentication/Login.vue'
export default {
  name: 'Home',
  components: {
    Login
  }
}
</script>