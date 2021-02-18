<template>
  <div>
    <b-navbar type="navbar navbar-dark" variant="primary">
      <b-navbar-brand>
        FCCS
      </b-navbar-brand>
      <b-navbar-toggle>
        <b-navbar-nav right>
          <b-nav-item href="#">Home</b-nav-item>
        </b-navbar-nav>
      </b-navbar-toggle>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <!-- <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          Testing
        </b-navbar-nav>
        <b-navbar-nav class="mr-auto">
          <b-nav-item-dropdown text="User" right>
            <b-dropdown-item href="#">Settings</b-dropdown-item>
            <b-dropdown-item href="#" @click="Logout">Logout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse> -->
    </b-navbar>
  </div>
</template>

<script>
import { userLogout } from "@/js/auth/userAuth.js";
export default {
  name: "NavBar1",
  data() {
    return {
      error: null,
    };
  },
  methods: {
    Logout() {
      userLogout().then((res) => {
        if (res.error) {
          this.error = res.error;
        } else {
          this.$router.replace({ name: "Home" });
        }
      });
    },
  },
};
</script>

<style></style>
