<template>
  <div id="home">
    <Navbar />
    <b-container class="my-5 mx-1" fluid="true">
      <b-row id="title-row" class="" fluid>
        <b-col class="col-1 mx-0 py-0"></b-col>
        <b-col class="col-xs-auto d-flex justify-content-center">
          <div class="header-container">
            <div
              class="title d-flex justify-content-start align-items-end py-0 mt-0 mb-1 px-0"
            >
              <b-icon
                icon="building"
                class="d-none d-md-block image-icon text-primary mb-1 mr-2"
              ></b-icon>
              <h1 class="title-text my-0 py-0">
                Fire Code <br />
                Compliance Software
              </h1>
            </div>
            <h3 class="text-muted my-0">
              Fire code building inspections made easy through the web
            </h3>
            <b-button class="my-2 py-2 px-3" variant="primary" @click="showLoginModal()"
              >Sign in</b-button
            >
          </div>
        </b-col>
        <b-col class="col-1 mx-0 py-0"></b-col>
      </b-row>
    </b-container>

    <LoginModal ref="loginModalComponent"/>
    <!-- <footer class="footer">
      Made with love by Team FCCS
    </footer> -->
  </div>
</template>

<script>
import Navbar from "@/components/prefabs/navbar/Navbar.vue";
import LoginModal from "@/components/authentication/ModalLogin.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    LoginModal
  },
  methods: {
    showLoginModal() {
      this.$refs.loginModalComponent.show();
    }
  }
};
</script>

<style scoped>
.header-container{
  height: 100%;
}
.title {
  height: 50%;
}
.title-text {
  white-space: nowrap;
}
.image-icon {
  width: auto;
  height: 100%;
}
.footer {
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   color: gray;
   margin-top: 250px;
   text-align: center;
}
</style>