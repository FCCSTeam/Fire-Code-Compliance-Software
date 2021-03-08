<template>
  <Slide class="sidemenu-container">
    <SidemenuItem title="Fire Department Acesss" v-bind:id="1"></SidemenuItem>
    <SidemenuItem title="Fire Hazards" v-bind:id="2"></SidemenuItem>
    <SidemenuItem title="High Buildings" v-bind:id="3"></SidemenuItem>
    <SidemenuItem title="Means of Egress and Fire Separation" v-bind:id="4"></SidemenuItem>
    <SidemenuItem title="Service Equipment, Ducts, Chimneys and Smoke Venting" v-bind:id="5"></SidemenuItem>
    <SidemenuItem title="Smoke Alarms" v-bind:id="6"></SidemenuItem>
    <SidemenuItem title="Standpipe Hosing Systems" v-bind:id="7"></SidemenuItem>
    <SidemenuItem title="Automatic Sprinkler Systems" v-bind:id="8"></SidemenuItem>
    <SidemenuItem title="Emergency Lighting Fixtures and Power System" v-bind:id="9"></SidemenuItem>
    <SidemenuItem title="Fire Water Supplies" v-bind:id="10"></SidemenuItem>
    <SidemenuItem title="Automatic Fire Alarm Systems" v-bind:id="11"></SidemenuItem>
    <SidemenuItem title="Fire Extinguishers" v-bind:id="12"></SidemenuItem>
  </Slide>
</template>

<script>
import { Slide } from "vue-burger-menu";
import SidemenuItem from "@/components/reporteditor/sidemenu/SidemenuItem.vue";

export default {
  components: {
    Slide,
    SidemenuItem,
  },
};
</script>

<style>

</style>