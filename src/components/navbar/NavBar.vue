<template>
  <div id="navbar">
    <b-navbar
      class="shadow-sm d-flex align-items-center pb-1 px-sm-4 px-lg-5"
      fixed="top"
      variant="secondary"
      type="light"
      toggleable="sm"
    >
      <!-- Logo -->
      <b-navbar-brand>
        <b-navbar-brand :to="{ path: '/' }">
          <p id="logo" class="my-1">
            <b-icon icon="building"></b-icon> Project FCCS
          </p>
        </b-navbar-brand>
      </b-navbar-brand>

      <b-navbar-toggle target="MainNavbarCollapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="grid-fill"></b-icon>
          <b-icon v-else icon="grid"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="MainNavbarCollapse" is-nav v-if="activeUser">
        <b-navbar-nav class="ml-auto">
          <b-nav-item :to="{ path: '/' }"> Home </b-nav-item>
          <b-nav-item :to="{ path: '/adminpage' }" v-if="privilege">Admin</b-nav-item>

          <!-- for smaller screen -->
          <div class="d-sm-none">
            <b-nav-item href=""> Settings </b-nav-item>
            <b-nav-item @click="Logout"> Logout </b-nav-item>
          </div>

          <!-- User Dropdown Menu on larger screen -->
          <div class="d-none d-sm-block">
            <b-nav-item-dropdown
              :text="activeUser.email"
              toggle-class="nav-text"
            >
              <b-dropdown-item href="">Settings</b-dropdown-item>
              <b-dropdown-item @click="Logout">Logout</b-dropdown-item>
            </b-nav-item-dropdown>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div id="navbar-spacer">&nbsp;</div>
  </div>
</template>

<script>
import { userLogout } from "@/js/auth/userAuth.js";
import { getActiveUser } from "@/js/auth/userAuth.js";
import { adminStatus } from "@/js/auth/userAccess.js"

export default {
  name: "NavBar",
  data() {
    return {
      activeUser: getActiveUser(),
      error: null,
      privilege: false
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
  mounted() {
    adminStatus(this.activeUser).then((token) => {
      this.privilege = token.isAdmin;
    });
  },
};
</script>

<style>
#navbar-spacer {
  width: 100%;
  height: 74px;
}
.navbar-brand{
  font-size: 1.25rem;
}
.navbar-light .navbar-nav .nav-link{
  font-size: 100%;
  color:rgb(0,0,0,0.9)!important;
}
.navbar-light .navbar-nav .nav-link:hover{
  color:rgb(0,0,0,0.5)!important;
}
.navbar-light .navbar-nav .hide > .nav-link {
  color:rgb(0,0,0,0.9)!important;
}
.navbar-light .navbar-nav .show > .nav-link {
  color: rgba(0, 0, 0, 0.9)!important;
}
</style>
