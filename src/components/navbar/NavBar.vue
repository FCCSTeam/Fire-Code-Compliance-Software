<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
      <Sidemenu />
      <b-navbar-brand href="#">FCCS</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item href="#">Help</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Sidemenu from "@/components/sidemenu/Sidemenu.vue";

export default {
  components: { Sidemenu },
};
</script>

<style>
.bm-burger-button {
  position: fixed;
  width: 36px;
  height: 30px;
  left: 0.8rem;
  top: 0.8rem;
  margin-right: 1rem;
  cursor: pointer;
}
.bm-burger-bars {
  background-color: #white;
}
.line-style {
  position: absolute;
  height: 20%;
  left: 0;
  right: 0;
}
.cross-style {
  position: absolute;
  top: 12px;
  right: 2px;
  cursor: pointer;
}
.bm-cross {
  background: black;
}
.bm-cross-button {
  height: 24px;
  width: 24px;
}
.bm-menu {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1000; /* Stay on top */
  top: 0;
  left: 0;
  background-color: lightgrey; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
}

.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}
.bm-item-list {
  color: #b8b7ad;
  background-color: white;
  margin-left: 0%;
  font-size: 16px;
}
.bm-item-list > * {
  display: flex;
  text-decoration: none;
  padding: 1em 0.5em;
}
.bm-item-list > * > span {
  margin-left: 0px;
  font-weight: 400;
  color: black;
}
</style>