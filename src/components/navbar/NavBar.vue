<template>
  <div id="navbar1">
    <b-navbar class="fixed-top px-5 d-flex align-items-center" variant="white" type="light">
      <b-navbar-brand>
        <b-navbar-brand :to="{ path: '/' }">
        <p id="logo" class="my-1"> <b-icon icon="building"></b-icon> Project FCCS</p>
        </b-navbar-brand>
      </b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav v-if="activeUser">
        <b-navbar-nav class="ml-auto">
          <!-- Adminpage Link -->
          <b-nav-item :to="{ path: '/adminpage' }" v-if="activeUser.isAdmin" >
            Admin
          </b-nav-item>
          <!-- User Dropdown Menu -->
          <b-nav-item-dropdown class="text-dark" :text="activeUser.email" right>
            <b-dropdown-item href="">Settings</b-dropdown-item>
            <b-dropdown-item @click="Logout">Logout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div id="navbar-spacer">
      &nbsp;
    </div>
  </div>
</template>

<script>
import { userLogout } from "@/js/auth/userAuth.js";
import { getActiveUser } from "@/js/auth/userAuth.js";
import { adminStatus } from "@/js/auth/userAccess.js";

export default {
  name: "NavBar1",
  data() {
    return {
      activeUser: getActiveUser(),
      error: null,
    };
  },
  computed: {
    getAdminStatus: function () {
      adminStatus(this.activeUser).then((token) => {
        return token.isAdmin;
      });
    },
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

<style scoped>
#navbar-spacer{
  width: 100%;
  height: 74px;
}
</style>
