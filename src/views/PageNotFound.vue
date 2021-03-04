<template>
  <div id="userpage">
    <NavBar />
    <b-jumbotron header-level="4" bg-variant="white">
      <template #header>Oops!</template>
      <template class="lead" #lead>
          404 Page Not Found 
      </template>
      <hr class="my-4" />
        <span class="text-muted">The page you are looking for does not exist or is temporarily unavailable.</span>
    </b-jumbotron>
  </div>
</template>

<script>
// import Logout from '@/components/authentication/Logout.vue'
import NavBar from "@/components/navbar/NavBar.vue";

export default {
  name: "Userpage",
  components: {
    NavBar,
  }
};
</script>

<style scoped>
.lead {
  font-size: 140%;
}
.jumboText {
  font-size: 120%;
}
</style>
