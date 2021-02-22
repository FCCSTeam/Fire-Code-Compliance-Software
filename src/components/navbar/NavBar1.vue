<template>
  <div id="navbar1">
    <b-navbar type="dark" variant="primary">
      <b-navbar-brand>
        <b-navbar-brand :to="{ path: '/' }">
          <span> - FCCS - </span>
        </b-navbar-brand>
      </b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav v-if="activeUser">   
        <b-navbar-nav class="ml-auto"> 
          <b-nav-item-dropdown text="User" right>
            <b-dropdown-item href="">Settings</b-dropdown-item>
            <b-dropdown-item href="" @click="Logout">Logout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>

    </b-navbar>
  </div>
</template>

<script>
import { userLogout } from "@/js/auth/userAuth.js";
import { getActiveUser } from "@/js/auth/userAuth.js";


export default {
  name: "NavBar1",
  data() {
    return {
      activeUser: getActiveUser(),
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
