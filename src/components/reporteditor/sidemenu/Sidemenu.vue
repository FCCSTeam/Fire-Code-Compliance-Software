<template>
  <Slide class="sidemenu-container">
    <h3>Record Books</h3>
    <SidemenuItem v-for="recordBook in recordBooks" :key="recordBook" :title="recordBook" v-bind:id="recordBooks.indexOf(recordBook)"></SidemenuItem>
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
  data() {
    return {
      recordBooks: [
        "Fire Department Access",
        "Fire Hazards",
        "High Buildings",
        "Means of Egress and Fire Separation",
        "Service Equipment, Ducts, Chimneys and Smoke Venting",
        "Smoke Alarms",
        "Standpipe Hosing Systems",
        "Automatic Sprinkler Systems",
        "Emergency Lighting Fixtures and Power System",
        "Fire Water Supplies",
        "Automatic Fire Alarm Systems",
        "Fire Extinguishers"
      ],
    };
  },
};
</script>

<style>
.bm-menu {
  top: 73px !important ;
  background-color: var(--light) !important;
  padding: 0; 
}
.bm-burger-button {
  top: 100px !important ;
  left: 1.25rem !important;
}

.bm-item-list > * {
  padding: 1em 0.5em;
}
.bm-item-list > * > span {
  color: var(--gray-dark);
}
</style>