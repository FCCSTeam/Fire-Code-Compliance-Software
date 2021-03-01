<template>
  <div id="home">
    <Navbar />
    <b-container id="header" class="mx-5 my-5" fluid="true">
      <b-row id="header-row">
        <b-col cols=1></b-col>
        <b-col
          id="header-left"
          class="d-flex justify-content-center align-items-center"
        >
          <b-jumbotron header-level="4" class="bg-white py-0">
            <template #header>              
              Fire Code <br />
              Compliance Software
            </template>
            <template #lead> 
              <h3 class="text-muted">Fire code building inspections made easy through the web</h3>
            </template>
            <b-button class="my-2 py-2 px-3" variant="primary"
              >Sign in</b-button
            >
          </b-jumbotron>
        </b-col>

        <b-col
          id="header-right"
          class="d-none d-lg-flex justify-content-center"
        >
          <div
            class="image-container bg-primary rounded-circle d-flex justify-content-center"
          >
            <b-icon
              icon="building"
              class="image-icon text-white align-self-center"
            ></b-icon>
          </div>
        </b-col>
        <b-col cols=1></b-col>
      </b-row>
    </b-container>
    <Login />
  </div>
</template>

<script>
import Navbar from "@/components/navbar/NavBar.vue";
import Login from "@/components/authentication/Login.vue";
import FLogo from "@/components/FLogo.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Login,
    FLogo
  },
};
</script>

<style scoped>
/* #flogo{
  position: relative;  
  width: 32vh;
  height: 35vh;
} */
.image-container {
  width: 30vh;
  height: 30vh;
}
.image-icon {
  width: 60%;
  height: 60%;
}
</style>