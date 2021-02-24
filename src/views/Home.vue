<template>
  <div id="home">
    <Navbar1 />
    <b-container id="header" class="mx-5 my-5" fluid="true">
      <b-row>
        <b-col id="header-left" class="d-flex justify-content-center align-items-center">
          <div class="header-left-container">
            <h1>
              Fire Code <br />
              Compliance Software
            </h1>
            <h3 class="text-muted">
              Fire code building inspections made easy through the web
            </h3>
            <b-button class="my-2 py-2 px-3" variant="primary"
              >Sign in</b-button
            >
          </div>
        </b-col>

        <b-col id="header-right" class="d-none d-md-flex justify-content-center">
          <div class="image-container bg-secondary rounded-circle d-flex justify-content-center">
            <!-- <b-icon icon="filter-left" class="image-icon text-primary-dark align-self-center"></b-icon> -->
            <b-icon
              icon="journal-text"
              class="image-icon text-primary-dark align-self-center"
            ></b-icon>
            <!-- <b-icon icon="layout-text-sidebar-reverse" class="image-icon text-primary-dark align-self-center"></b-icon> -->
            <!-- <b-icon icon="text-left" class="image-icon text-primary-dark align-self-center"></b-icon> -->
          </div>
        </b-col>
      </b-row>
    </b-container>

    <Login />
  </div>
</template>

<script>
import Navbar1 from "@/components/navbar/NavBar1.vue";
import Login from "@/components/authentication/Login.vue";
export default {
  name: "Home",
  components: {
    Navbar1,
    Login,
  },
};
</script>

<style scoped>
.image-container {
  width: 35vh;
  height: 35vh;
}
.image-icon {
  width: 60%;
  height: 60%;
}
</style>