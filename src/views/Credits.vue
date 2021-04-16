<template>
  <div id="Credits">
    <NavBar />
    <div>
        <h1> Made by: </h1>
        <p>
            John Bao
            <br>
            Damanveer Bharaj
            <br>
            Ivan Diep
            <br>
            William Huang
            <br>
            Andrew Ignacio
            <br>
            Arjun Kaushik
        </p>
    </div>
  </div>
</template>

<script>
import Logout from '@/components/authentication/Logout.vue'
import NavBar from "@/components/prefabs/navbar/Navbar.vue";


export default {
  name: "Credits",
  components: {
    NavBar
  },
  methods: {},
  mounted() {
    
  }
};
</script>

<style scoped>
h1 {
    text-align:center;
}
p {
    text-align: center;
}
</style>
